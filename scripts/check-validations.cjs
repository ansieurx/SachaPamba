const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { PGlite } = require('@electric-sql/pglite');
process.chdir(path.resolve(__dirname, '..'));

(async () => {
  const source = fs.readFileSync('assets/validators.js', 'utf8');
  const v = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
  const validIds = ['1102324710', '1716917222', '1714307103', '1710034065', '3040040382'];
  const badIds = ['1723456789', '1714307104', '', '0000000000', '2222222222', '171430710', '17143071033', '171430710X', '17 4307103'];
  validIds.forEach(id => assert(v.isValidCedula(id), id));
  badIds.forEach(id => assert(!v.isValidCedula(id), id));
  for (const id of validIds) for (let position = 0; position < 10; position++) {
    const changed = id.slice(0, position) + ((Number(id[position]) + 1) % 10) + id.slice(position + 1);
    assert(!v.isValidCedula(changed), 'Single digit error: ' + changed);
  }
  ['AB1234567', '123456789', 'abc123'].forEach(id => assert(v.isValidPassport(id)));
  ['', 'AB', 'AB 123', 'A<script>', '0'.repeat(9), 'A'.repeat(31)].forEach(id => assert(!v.isValidPassport(id)));
  ['4242424242424242', '4242 4242 4242 4242', '5555-5555-5555-4444', '378282246310005', '6011111111111117', '4222222222222'].forEach(number => assert(v.isValidCardNumber(number)));
  ['4242424242424243', '0000000000000000', '4242.4242.4242.4242', 'abc4242424242424242', '123', '1111111111111111'].forEach(number => assert(!v.isValidCardNumber(number)));
  const now = new Date(2026, 10, 1);
  ['11/26', '12/26', '01/2027'].forEach(date => assert(v.isValidCardExpiry(date, now)));
  ['10/26', '13/27', '00/27', '1/27', '12/25', 'AA/BB', ''].forEach(date => assert(!v.isValidCardExpiry(date, now)));
  assert(v.isValidCvv('123', '4242424242424242'));
  assert(!v.isValidCvv('1234', '4242424242424242'));
  assert(v.isValidCvv('1234', '378282246310005'));
  assert(!v.isValidCvv('123', '378282246310005'));
  assert(v.isValidPhone('+593 99 123 4567'));
  assert(!v.isValidPhone('letras0991234567'));
  assert(!v.isValidPhone('0000000000'));
  assert(v.isValidEmail('cliente@example.test'));
  assert(!v.isValidEmail('cliente@'));
  assert(v.nameError('123456'));
  assert.equal(v.nameError('María José'), '');
  assert(v.isValidRuc('1710034065001'));
  assert(!v.isValidRuc('1710034064001'));
  assert(!v.isValidRuc('1710034065000'));
  assert(v.isValidRuc('1790085783001'));

  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key,email text);
      create table public.web_perfil(usuario_id uuid primary key,nombre text,usuario text,telefono text,tipo_documento text,documento text);
      create table public.web_pedido(id uuid primary key default gen_random_uuid(),usuario_id uuid,retiro jsonb);
      insert into auth.users values('11111111-1111-4111-8111-111111111111','cliente@example.test');
      insert into public.web_perfil values('11111111-1111-4111-8111-111111111111','Cliente Prueba','','0991234567','Cédula','1723456789');`);
    await db.exec(fs.readFileSync('supabase/validaciones.sql', 'utf8'));
    // La actualización no borra ni cambia datos anteriores.
    assert.equal((await db.query('select documento from public.web_perfil')).rows[0].documento, '1723456789');
    for (const id of [...validIds, ...badIds]) {
      const sql = (await db.query('select public.web_cedula_valida($1) as valid', [id])).rows[0].valid;
      assert.equal(sql, v.isValidCedula(id), 'JS/SQL checksum parity');
    }
    const profile = { name: 'María José', phone: '0991234567', docType: 'Cédula', idNumber: '1710034065', username: 'cliente', email: 'cliente@example.test' };
    await db.query('select public.web_validar_perfil($1::jsonb)', [JSON.stringify(profile)]);
    for (const change of [{ idNumber: '1723456789' }, { phone: 'abc0991234567' }, { name: '12345' }, { email: 'correo@' }, { docType: 'Otro' }, { docType: 'Pasaporte', idNumber: 'AB 123' }]) {
      assert(Object.keys(v.profileErrors({ ...profile, ...change })).length > 0);
      await assert.rejects(() => db.query('select public.web_validar_perfil($1::jsonb)', [JSON.stringify({ ...profile, ...change })]));
    }
    await assert.rejects(() => db.exec("update public.web_perfil set nombre='Nombre Nuevo'"));
    await db.exec("update public.web_perfil set documento='1710034065'");
    await assert.rejects(() => db.exec("update public.web_perfil set documento='1710034064'"));
    const owner = '11111111-1111-4111-8111-111111111111';
    const pickup = { name: 'Cliente Prueba', idNumber: '1710034065', docType: 'Cédula', cardNumber: '4242424242424242', cvv: '123' };
    const insert = datos => db.query('insert into public.web_pedido(usuario_id,retiro) values($1,$2::jsonb) returning retiro', [owner, JSON.stringify(datos)]);
    const clean = (await insert(pickup)).rows[0].retiro;
    assert(!('cardNumber' in clean) && !('cvv' in clean));
    assert.equal(clean.billing.email, 'cliente@example.test');
    await assert.rejects(() => insert({ ...pickup, idNumber: '1710034064' }));
    await assert.rejects(() => insert({ ...pickup, billing: { name: 'Cliente', idNumber: '1710034065', email: 'invalido@' } }));
    await assert.rejects(() => insert({ ...pickup, billing: { name: 'Cliente', idNumber: '1710034064', email: 'cliente@example.test' } }));
    await db.exec("update public.web_perfil set tipo_documento='Pasaporte',documento='ab1234567'");
    assert.equal((await db.query('select documento from public.web_perfil')).rows[0].documento, 'AB1234567');
    await insert({ name: 'Cliente Prueba', idNumber: 'AB1234567', docType: 'Pasaporte' });
    await db.exec('set role anon');
    await assert.rejects(() => db.query('select public.web_validar_perfil($1::jsonb)', [JSON.stringify(profile)]), /permission denied/);
  } finally { await db.close(); }
  console.log('OK: módulo 10 en JS/PostgreSQL, pasaportes, RUC, perfiles, pedidos, Luhn, vencimiento, CVV y conservación de datos anteriores.');
})().catch(error => { console.error(error); process.exitCode = 1; });
