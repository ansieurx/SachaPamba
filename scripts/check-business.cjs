const fs = require('node:fs');
const assert = require('node:assert/strict');
const path = require('node:path');
const { PGlite } = require('@electric-sql/pglite');
process.chdir(path.resolve(__dirname, '..'));
(async () => {
  if (!fs.existsSync('supabase/registro-y-compras.sql')) {
    console.log('SKIP: la migración inicial ya no se distribuye. Las comprobaciones nuevas se ejecutan en check-validations.cjs.');
    return;
  }
  const db = new PGlite();
  await db.exec(`create role anon; create role authenticated; create schema auth;
    create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
    grant usage on schema auth to public; grant execute on function auth.uid() to public;
    create table auth.users(id uuid primary key,email text,email_confirmed_at timestamptz,raw_user_meta_data jsonb);
    create table public.producto(pro_id text primary key,pro_nombre text,pro_activo boolean,pro_precio_unitario numeric(12,2),
      pro_stock_disponible integer,pro_graba_iva boolean,pro_presentacion_tamano text,pro_imagen_principal_url text);
    insert into public.producto values('p1','Producto',true,50,10,true,'100 g','foto.jpg');`);
  await db.exec(fs.readFileSync('supabase/registro-y-compras.sql', 'utf8'));
  if (fs.existsSync('supabase/validaciones.sql')) await db.exec(fs.readFileSync('supabase/validaciones.sql', 'utf8'));
  const users = ['11111111-1111-4111-8111-111111111111','22222222-2222-4222-8222-222222222222','33333333-3333-4333-8333-333333333333'];
  for (let i = 0; i < 3; i++) await db.query(`insert into auth.users values($1,$2,$3,$4::jsonb)`, [users[i],`test${i}@example.test`, i === 2 ? null : new Date().toISOString(),JSON.stringify({name:'Cliente Prueba',phone:'0999999999',docType:'Cédula',idNumber:'1710034065',welcome_offer:i !== 1})]);
  async function asUser(id, role = 'authenticated') { await db.exec(`reset role; set role ${role};`); await db.query(`select set_config('request.jwt.claim.sub',$1,false)`,[id || '']); }
  const items = JSON.stringify([{ id:'p1', quantity:2, price:0, discount:100 }]);
  const pickup = JSON.stringify({name:'Cliente Prueba',idNumber:'1710034065'});
  await asUser(users[0]);
  let q=(await db.query('select public.web_cotizar_carrito($1::jsonb) as value',[items])).rows[0].value;
  assert.equal(q.total,85);assert.equal(q.discount,15);assert.equal(q.items[0].price,50);
  const request='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  const create=async(id=request,method='tienda',rows=items)=>(await db.query('select public.web_crear_pedido($1::jsonb,$2,$3::uuid,$4::jsonb) as value',[rows,method,id,pickup])).rows[0].value;
  const order=await create();assert.equal(order.total,85);assert.equal(order.status,'Recibido');
  assert.equal((await create()).id,order.id);
  q=(await db.query('select public.web_cotizar_carrito($1::jsonb) as value',[items])).rows[0].value;assert.equal(q.total,100);assert.equal(q.discount,0);
  await assert.rejects(()=>create('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb','tarjeta'),/proveedor/);
  await assert.rejects(()=>db.query('select public.web_cotizar_carrito(null)'),/carrito/);
  await assert.rejects(()=>db.query(`select public.web_cotizar_carrito('[{"id":"p1","quantity":-1}]')`),/cantidades/);
  await assert.rejects(()=>create('cccccccc-cccc-4ccc-8ccc-cccccccccccc','tienda',JSON.stringify([{id:'p1',quantity:99}])),/stock/);
  await assert.rejects(()=>db.exec('update public.web_perfil set solicita_bienvenida=true'),/permission denied/);
  await assert.rejects(()=>db.exec("update public.web_pedido set estado='Entregado'"),/permission denied/);
  await asUser(users[1]);
  assert.deepEqual((await db.query('select public.web_mis_pedidos() as value')).rows[0].value,[]);
  q=(await db.query('select public.web_cotizar_carrito($1::jsonb) as value',[items])).rows[0].value;assert.equal(q.total,100);
  await assert.rejects(()=>db.exec("update public.producto set pro_precio_unitario=0"),/permission denied/);
  const saved=(await db.query('select public.web_guardar_perfil($1::jsonb) as value',[JSON.stringify({name:'Nombre Actualizado',username:'cliente',phone:'0999999999',docType:'Cédula',idNumber:'1710034065',solicita_bienvenida:true,welcome_offer:true})])).rows[0].value;
  assert.equal(saved.name,'Nombre Actualizado');
  assert.equal((await db.query('select public.web_cotizar_carrito($1::jsonb) as value',[items])).rows[0].value.discount,0);
  await asUser(users[2]);await assert.rejects(()=>db.query('select public.web_mi_perfil()'),/Confirma/);
  await asUser(null,'anon');await assert.rejects(()=>db.query('select public.web_cotizar_carrito($1::jsonb)',[items]),/permission denied/);
  assert.equal((await db.query('select public.web_registro_disponible() as ready')).rows[0].ready,true);
  await db.exec('reset role');assert.equal((await db.query('select pro_stock_disponible as stock from public.producto')).rows[0].stock,8);
  assert.equal((await db.query('select count(*)::int as count from public.web_pedido')).rows[0].count,1);
  await db.close();
  console.log('OK: PostgreSQL migration, registration trigger, verified users, server prices, one-time 15%, idempotency, inventory, isolation and denied client writes.');
})().catch(error=>{console.error(error);process.exitCode=1;});
