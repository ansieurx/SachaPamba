const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
process.chdir(path.resolve(__dirname,'..'));

(async () => {
  const db = new PGlite();
  const first = '11111111-1111-4111-8111-111111111111';
  const other = '22222222-2222-4222-8222-222222222222';
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create function auth.uid() returns uuid language sql stable as $$
        select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
      create table public.web_perfil(usuario_id uuid primary key,solicita_bienvenida boolean default false);
      create table public.web_configuracion(id boolean primary key,descuento_bienvenida numeric,iva numeric);
      insert into public.web_configuracion values(true,0,15);
      create table public.web_pedido(usuario_id uuid,cotizacion jsonb);
      create table public.producto(pro_id text primary key,pro_nombre text,pro_activo boolean,pro_precio_unitario numeric,
        pro_stock_disponible integer,pro_graba_iva boolean,pro_presentacion_tamano text,pro_imagen_principal_url text);
      insert into public.producto values('p1','Producto',true,50,10,true,'100 g','foto.jpg');
      create function public.web_mi_perfil() returns jsonb language plpgsql as $$ begin
        if auth.uid() is null then raise exception 'Inicia sesión'; end if;
        return '{}'::jsonb;
      end $$;`);
    for (const user of [first,other]) await db.query('insert into public.web_perfil(usuario_id) values($1)',[user]);
    const sql = fs.readFileSync('supabase/descuento-bienvenida.sql','utf8');
    await db.exec(sql);await db.exec(sql);
    const items = [{id:'p1',quantity:2,price:0,discount:100}];
    const quote = async (rows=items) => (await db.query('select public.web_cotizar_carrito($1::jsonb) as value',[JSON.stringify(rows)])).rows[0].value;
    await db.query("select set_config('request.jwt.claim.sub',$1,false)",[first]);
    await db.exec('set role authenticated');
    const welcome = await quote();
    assert.equal(welcome.subtotal,100);assert.equal(welcome.discount,15);assert.equal(welcome.discountPercent,15);
    assert.equal(welcome.total,85);assert.equal(welcome.net+welcome.tax,85);assert.equal(welcome.items[0].price,50);
    assert.equal((await quote()).discount,15,'Consultar el resumen no consume la promoción');
    assert.equal((await quote([{id:'p1',quantity:1}])).discount,7.5,'Recalcular al cambiar las cantidades');
    await assert.rejects(()=>quote([{id:'p1',quantity:99}]),/stock/);
    await assert.rejects(()=>quote([{id:'p1',quantity:-1}]),/cantidades/);
    await assert.rejects(()=>db.exec('update public.web_configuracion set descuento_bienvenida=100'),/permission denied/);
    await db.exec('reset role');
    await db.query('insert into public.web_pedido values($1,$2)',[first,JSON.stringify(welcome)]);
    await db.exec('set role authenticated');
    const next = await quote();assert.equal(next.discount,0);assert.equal(next.total,100);
    await db.query("select set_config('request.jwt.claim.sub',$1,false)",[other]);
    assert.equal((await quote()).discount,15,'La promoción corresponde a cada cuenta');
    await db.query("select set_config('request.jwt.claim.sub','',false)");await assert.rejects(()=>quote(),/sesión/);
    await db.exec('set role anon');await assert.rejects(()=>quote(),/permission denied/);
    await db.exec('reset role');
    assert.equal((await db.query('select cotizacion from public.web_pedido')).rows[0].cotizacion.total,85,'No reescribir pedidos anteriores');
  } finally { await db.close(); }
  console.log('OK: 15% en primera compra sin depender del botón de registro, totales, recálculo, primera compra única y permisos.');
})().catch(error=>{console.error(error);process.exitCode=1;});
