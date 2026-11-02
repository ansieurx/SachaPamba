const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
process.chdir(path.resolve(__dirname,'..'));

(async () => {
  const db = new PGlite();
  const owner = '11111111-1111-4111-8111-111111111111';
  const other = '22222222-2222-4222-8222-222222222222';
  const id = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  const states = ['Recibido','En Tienda','Listo para Retiro','Entregado'];
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create function auth.uid() returns uuid language sql stable as $$
        select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      create table public.web_pedido(id uuid primary key,usuario_id uuid,estado text,importe numeric);
      create function public.web_mi_perfil() returns jsonb language plpgsql as $$ begin
        if auth.uid() is null then raise exception 'Inicia sesión'; end if;
        return '{}'::jsonb;
      end $$;
      create function public.web_pedido_json(p public.web_pedido) returns jsonb language sql as $$
        select jsonb_build_object('id',p.id,'status',p.estado,'total',p.importe) $$;`);
    await db.query('insert into public.web_pedido values($1,$2,$3,10)',[id,owner,'Recibido']);
    const migration = fs.readFileSync('supabase/estados-pedido.sql','utf8');
    await db.exec(migration);await db.exec(migration);
    await db.query("select set_config('request.jwt.claim.sub',$1,false)",[owner]);
    await db.exec('set role authenticated');
    const change = async state => (await db.query('select public.web_cambiar_estado_pedido($1,$2) as pedido',[id,state])).rows[0].pedido;
    for (const state of [...states,'Recibido']) {
      const saved = await change(state);
      assert.equal(saved.status,state);assert.equal(saved.total,10);
    }
    await assert.rejects(()=>change('Pagado'),/estado/);
    await assert.rejects(()=>change(null),/estado/);
    await db.query("select set_config('request.jwt.claim.sub',$1,false)",[other]);
    await assert.rejects(()=>change('Entregado'),/tu cuenta/);
    await db.query("select set_config('request.jwt.claim.sub','',false)");
    await assert.rejects(()=>change('Entregado'),/sesión/);
    await db.exec('set role anon');await assert.rejects(()=>change('Entregado'),/permission denied/);
    await db.exec('reset role');
    assert.equal((await db.query('select estado from public.web_pedido')).rows[0].estado,'Recibido');
  } finally { await db.close(); }

  const { createAccountService } = await import(pathToFileURL(path.resolve('assets/account-service.js')));
  let fail = false;
  const service = createAccountService({
    auth: { getSession:async()=>({data:{session:{}}}),getUser:async()=>({data:{user:{id:owner,email:'cliente@example.test',email_confirmed_at:'2026-01-01'}}}) },
    rpc:async(name,args)=>{
      if(name==='web_mi_perfil')return {data:{name:'Cliente'}};
      if(name==='web_mis_pedidos')return {data:[{id,status:'Recibido'}]};
      assert.equal(name,'web_cambiar_estado_pedido');assert.equal(args.p_pedido_id,id);
      return fail ? {error:new Error('Error de guardado')} : {data:{id,status:args.p_estado}};
    }
  });
  await service.restore();await service.changeOrderStatus(id,'En Tienda');
  assert.equal(service.orders[0].status,'En Tienda');
  fail=true;await assert.rejects(()=>service.changeOrderStatus(id,'Entregado'),/guardado/);
  assert.equal(service.orders[0].status,'En Tienda','No mostrar cambios que la BD haya rechazado');
  service.clear();await assert.rejects(()=>service.changeOrderStatus(id,'Entregado'),/sesión/);
  console.log('OK: cuatro estados persistentes, importes intactos, permisos por propietario y conservación del estado ante errores.');
})().catch(error=>{console.error(error);process.exitCode=1;});
