const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
process.chdir(path.resolve(__dirname, '..'));

(async () => {
  if (!fs.existsSync('supabase/pedidos-con-tarjeta.sql')) {
    console.log('SKIP: la actualización de tarjeta ya no se distribuye. Los cambios de estado se comprueban por separado.');
    return;
  }
  const db = new PGlite();
  const user = '11111111-1111-4111-8111-111111111111';
  try {
    // Dependencias de la actualización: Auth y cotización se sustituyen solo en esta BD de prueba.
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create function auth.uid() returns uuid language sql stable as $$
        select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      create table auth.users(id uuid primary key,email text);
      create table public.web_perfil(usuario_id uuid primary key,nombre text,usuario text,telefono text,tipo_documento text,documento text);
      create table public.producto(pro_id text primary key,pro_stock_disponible integer);
      create table public.web_pedido(id uuid primary key default gen_random_uuid(),numero bigint generated always as identity,
        usuario_id uuid,solicitud_id uuid not null,creado_en timestamptz default now(),estado text default 'Recibido',
        metodo text not null check(metodo='tienda'),retiro jsonb,cotizacion jsonb,unique(usuario_id,solicitud_id));
      create function public.web_mi_perfil() returns jsonb language plpgsql as $$ begin
        if auth.uid() is null then raise exception 'Inicia sesión'; end if;
        return '{}'::jsonb;
      end $$;
      create function public.web_cotizar_carrito(p_items jsonb) returns jsonb language plpgsql as $$ begin
        if (p_items->0->>'quantity')::integer > (select pro_stock_disponible from public.producto where pro_id='p1')
          then raise exception 'Sin stock'; end if;
        return jsonb_build_object('total',10,'discount',0,'items',p_items);
      end $$;
      insert into public.producto values('p1',10);`);
    await db.query('insert into auth.users values($1,$2)', [user,'cliente@example.test']);
    await db.query(`insert into public.web_perfil values($1,'Cliente Prueba','','0991234567','Cédula','1710034065')`, [user]);
    await db.exec(fs.readFileSync('supabase/validaciones.sql','utf8'));
    const migration = fs.readFileSync('supabase/pedidos-con-tarjeta.sql','utf8');
    await db.exec(migration);
    await db.exec(migration); // Debe poder ejecutarse nuevamente sin borrar pedidos ni permisos.
    await db.query("select set_config('request.jwt.claim.sub',$1,false)", [user]);
    const pickup = { name:'Cliente Prueba',docType:'Cédula',idNumber:'1710034065',cardNumber:'4242424242424242',cvv:'123' };
    const items = [{ id:'p1',quantity:2 }];
    const first = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
    const create = async (method, id = first, rows = items, data = pickup) => (await db.query(
      'select public.web_crear_pedido($1::jsonb,$2,$3::uuid,$4::jsonb) as pedido',
      [JSON.stringify(rows),method,id,JSON.stringify(data)])).rows[0].pedido;
    await db.exec('set role authenticated');
    const card = await create('tarjeta');
    assert.equal(card.method,'Tarjeta (pago pendiente)');
    assert.equal(card.status,'Recibido');
    assert.equal((await create('tarjeta')).id,card.id, 'Reintentar no duplica el pedido');
    const store = await create('tienda','bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb');
    assert.equal(store.method,'Pagar al Retirar en Tienda');
    const next = 'cccccccc-cccc-4ccc-8ccc-cccccccccccc';
    await assert.rejects(() => create('otro',next), /método/);
    await assert.rejects(() => create(null,next), /método/);
    await assert.rejects(() => create('tarjeta',next,[{id:'p1',quantity:99}]), /stock/);
    await assert.rejects(() => create('tarjeta',next,items,{...pickup,idNumber:'1710034064'}), /documento/);
    await assert.rejects(() => db.exec("update public.web_pedido set estado='Pagado'"), /permission denied/);
    await db.query("select set_config('request.jwt.claim.sub','',false)");
    await assert.rejects(() => create('tarjeta',next), /sesión/);
    await db.exec('set role anon');
    await assert.rejects(() => create('tarjeta',next), /permission denied/);
    await db.exec('reset role');
    assert.equal((await db.query('select pro_stock_disponible as stock from public.producto')).rows[0].stock,6);
    const rows = (await db.query('select retiro from public.web_pedido')).rows;
    assert.equal(rows.length,2);
    for (const row of rows) assert(!('cardNumber' in row.retiro) && !('cvv' in row.retiro));
  } finally { await db.close(); }
  console.log('OK: pedidos con tarjeta pendiente y retiro, reintentos, stock, validaciones, permisos y exclusión de datos de tarjeta.');
})().catch(error => { console.error(error); process.exitCode = 1; });
