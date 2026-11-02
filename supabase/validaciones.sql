-- Actualización sobre el registro y las compras ya instalados. Ejecutar en SQL Editor.
begin;

create or replace function public.web_cedula_valida(p_numero text)
returns boolean language plpgsql immutable set search_path = '' as $$
declare numero text := btrim(p_numero); region integer; suma integer := 0; valor integer; i integer;
begin
  if numero is null or numero !~ '^[0-9]{10}$' or numero ~ '^(.)\1+$' then return false; end if;
  region := substring(numero,1,2)::integer;
  if not (region between 1 and 24 or region in (30,50)) or substring(numero,3,1)::integer > 6 then return false; end if;
  for i in 1..9 loop
    valor := substring(numero,i,1)::integer * case when i % 2 = 1 then 2 else 1 end;
    suma := suma + case when valor > 9 then valor - 9 else valor end;
  end loop;
  return (10 - suma % 10) % 10 = substring(numero,10,1)::integer;
end;
$$;

create or replace function public.web_documento_valido(p_tipo text,p_numero text)
returns boolean language sql immutable set search_path = '' as $$
  select coalesce(case p_tipo
    when 'Cédula' then public.web_cedula_valida(p_numero)
    when 'Pasaporte' then btrim(p_numero) ~ '^[A-Za-z0-9]{3,30}$' and btrim(p_numero) !~ '^0+$'
    else false end,false);
$$;

create or replace function public.web_ruc_valido(p_numero text)
returns boolean language plpgsql immutable set search_path = '' as $$
declare numero text := btrim(p_numero); tercero integer;
begin
  if numero is null or numero !~ '^[0-9]{13}$' or numero ~ '^(.)\1+$' or right(numero,3)='000' then return false; end if;
  tercero := substring(numero,3,1)::integer;
  if tercero <= 5 then return public.web_cedula_valida(left(numero,10)); end if;
  -- No imponer módulo 11: el SRI también emite RUC societarios sin ese algoritmo.
  return tercero in (6,9);
end;
$$;

create or replace function public.web_validar_perfil(p_perfil jsonb)
returns void language plpgsql set search_path = '' as $$
declare nombre text := btrim(coalesce(p_perfil->>'name','')); telefono text := btrim(coalesce(p_perfil->>'phone',''));
begin
  if length(nombre) not between 3 and 150 or nombre !~ '[[:alpha:]]' or nombre ~ '[[:cntrl:]]' then
    raise exception 'Ingresa un nombre de 3 a 150 caracteres, con letras y sin caracteres de control.';
  end if;
  if telefono !~ '^\+?[0-9 ()-]+$' or length(regexp_replace(telefono,'[^0-9]','','g')) not between 9 and 15
    or regexp_replace(telefono,'[^0-9]','','g') ~ '^0+$' then
    raise exception 'Ingresa un teléfono válido, con entre 9 y 15 dígitos y sin letras.';
  end if;
  if not public.web_documento_valido(p_perfil->>'docType',p_perfil->>'idNumber') then
    raise exception 'El documento no es válido. Verifica la cédula con módulo 10 o el formato del pasaporte.';
  end if;
  if length(btrim(coalesce(p_perfil->>'username',''))) > 60 or coalesce(p_perfil->>'username','') ~ '[[:cntrl:]]' then
    raise exception 'El usuario admite hasta 60 caracteres, sin caracteres de control.';
  end if;
  if p_perfil ? 'email' and (length(coalesce(p_perfil->>'email','')) > 254
    or coalesce(p_perfil->>'email','') !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$') then
    raise exception 'Ingresa un correo electrónico válido.';
  end if;
end;
$$;

create or replace function public.web_comprobar_perfil()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  perform public.web_validar_perfil(jsonb_build_object('name',new.nombre,'username',new.usuario,
    'phone',new.telefono,'docType',new.tipo_documento,'idNumber',new.documento));
  new.nombre := btrim(new.nombre);
  new.telefono := btrim(new.telefono);
  new.documento := btrim(new.documento);
  if new.tipo_documento='Pasaporte' then new.documento := upper(new.documento); end if;
  return new;
end;
$$;
drop trigger if exists web_comprobar_perfil on public.web_perfil;
create trigger web_comprobar_perfil before insert or update of nombre,usuario,telefono,tipo_documento,documento
  on public.web_perfil for each row execute function public.web_comprobar_perfil();

-- No borrar ni reescribir documentos antiguos: exigir corrección en la próxima escritura.
do $$ begin
  if not exists(select 1 from pg_constraint where conrelid='public.web_perfil'::regclass and conname='web_documento_correcto') then
    alter table public.web_perfil add constraint web_documento_correcto
      check (public.web_documento_valido(tipo_documento,documento)) not valid;
  end if;
end $$;

create or replace function public.web_comprobar_datos_pedido()
returns trigger language plpgsql security definer set search_path = '' as $$
declare datos jsonb := new.retiro; tipo text; factura jsonb; perfil public.web_perfil%rowtype; correo text;
begin
  if length(btrim(coalesce(datos->>'name',''))) not between 3 and 150
    or coalesce(datos->>'name','') !~ '[[:alpha:]]' or coalesce(datos->>'name','') ~ '[[:cntrl:]]' then
    raise exception 'Revisa el nombre de la persona que retira.';
  end if;
  select * into perfil from public.web_perfil where usuario_id=new.usuario_id;
  tipo := datos->>'docType';
  if tipo is null then
    tipo := case when datos->>'idNumber'=perfil.documento then perfil.tipo_documento
      when datos->>'idNumber' ~ '^[0-9]{10}$' then 'Cédula' else 'Pasaporte' end;
  end if;
  if not public.web_documento_valido(tipo,datos->>'idNumber') then raise exception 'El documento de retiro no es válido.'; end if;
  select email into correo from auth.users where id=new.usuario_id;
  factura := coalesce(datos->'billing',jsonb_build_object('name',perfil.nombre,'idNumber',perfil.documento,'email',correo));
  if length(btrim(coalesce(factura->>'name',''))) not between 3 and 150
    or coalesce(factura->>'name','') !~ '[[:alpha:]]' or coalesce(factura->>'name','') ~ '[[:cntrl:]]'
    or length(coalesce(factura->>'email','')) > 254
    or coalesce(factura->>'email','') !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then
    raise exception 'Revisa el nombre y correo de facturación.';
  end if;
  if not (public.web_cedula_valida(factura->>'idNumber') or public.web_ruc_valido(factura->>'idNumber')
    or (perfil.tipo_documento='Pasaporte' and upper(btrim(factura->>'idNumber'))=upper(perfil.documento)
      and public.web_documento_valido('Pasaporte',factura->>'idNumber'))) then
    raise exception 'El documento de facturación no es válido.';
  end if;
  -- Lista cerrada: no almacenar números de tarjeta, CVV u otros datos arbitrarios en este JSON.
  new.retiro := jsonb_build_object('name',btrim(datos->>'name'),'idNumber',btrim(datos->>'idNumber'),'docType',tipo,
    'billing',jsonb_build_object('name',btrim(factura->>'name'),'idNumber',btrim(factura->>'idNumber'),'email',btrim(factura->>'email')));
  return new;
end;
$$;
drop trigger if exists web_comprobar_datos_pedido on public.web_pedido;
create trigger web_comprobar_datos_pedido before insert or update of retiro on public.web_pedido
  for each row execute function public.web_comprobar_datos_pedido();

revoke all on function public.web_cedula_valida(text),public.web_documento_valido(text,text),public.web_ruc_valido(text),
  public.web_validar_perfil(jsonb),public.web_comprobar_perfil(),public.web_comprobar_datos_pedido() from public,anon,authenticated;

commit;
