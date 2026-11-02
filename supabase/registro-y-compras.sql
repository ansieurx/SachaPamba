-- Ejecutar una vez en el SQL Editor de Supabase. No modifica las tablas de catálogo.
begin;

create table if not exists public.web_configuracion (
  id boolean primary key default true check (id),
  descuento_bienvenida numeric(5,2) not null default 15 check (descuento_bienvenida between 0 and 100),
  iva numeric(5,2) not null default 15 check (iva between 0 and 100)
);
insert into public.web_configuracion(id) values (true) on conflict do nothing;

create table if not exists public.web_perfil (
  usuario_id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null,
  usuario text not null default '',
  telefono text not null default '',
  tipo_documento text not null default '',
  documento text not null default '',
  solicita_bienvenida boolean not null default false,
  creado_en timestamptz not null default now()
);
create table if not exists public.web_pedido (
  id uuid primary key default gen_random_uuid(),
  numero bigint generated always as identity unique,
  usuario_id uuid not null references auth.users(id),
  solicitud_id uuid not null,
  creado_en timestamptz not null default now(),
  estado text not null default 'Recibido',
  metodo text not null check (metodo = 'tienda'),
  retiro jsonb not null,
  cotizacion jsonb not null,
  unique (usuario_id, solicitud_id)
);

alter table public.web_configuracion enable row level security;
alter table public.web_perfil enable row level security;
alter table public.web_pedido enable row level security;
revoke all on public.web_configuracion, public.web_perfil, public.web_pedido from anon, authenticated;
revoke all on sequence public.web_pedido_numero_seq from anon, authenticated;
-- El navegador puede leer el catálogo; solo el servidor cambia precios o inventario.
revoke insert, update, delete, truncate, references, trigger on public.producto from anon, authenticated;

create or replace function public.web_validar_perfil(p_perfil jsonb)
returns void language plpgsql set search_path = '' as $$
begin
  if length(btrim(coalesce(p_perfil->>'name',''))) < 3
    or length(btrim(p_perfil->>'name')) > 150 then
    raise exception 'El nombre debe tener entre 3 y 150 caracteres.';
  end if;
  if length(regexp_replace(coalesce(p_perfil->>'phone',''), '[^0-9]', '', 'g')) not between 9 and 15 then
    raise exception 'El teléfono no es válido.';
  end if;
  if p_perfil->>'docType' not in ('Cédula','Pasaporte') or coalesce(p_perfil->>'docType','') = ''
    or length(btrim(coalesce(p_perfil->>'idNumber',''))) not between 3 and 30 then
    raise exception 'El documento no es válido.';
  end if;
  if p_perfil->>'docType' = 'Cédula' and p_perfil->>'idNumber' !~ '^[0-9]{10}$' then
    raise exception 'La cédula debe tener 10 dígitos.';
  end if;
  if length(coalesce(p_perfil->>'username','')) > 60 then raise exception 'El usuario es demasiado largo.'; end if;
end;
$$;

create or replace function public.web_crear_perfil()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  perform public.web_validar_perfil(new.raw_user_meta_data);
  insert into public.web_perfil(usuario_id,nombre,usuario,telefono,tipo_documento,documento,solicita_bienvenida)
  values(new.id, btrim(new.raw_user_meta_data->>'name'), coalesce(new.raw_user_meta_data->>'username',''),
    new.raw_user_meta_data->>'phone',new.raw_user_meta_data->>'docType',new.raw_user_meta_data->>'idNumber',
    coalesce(new.raw_user_meta_data->>'welcome_offer','false') = 'true');
  return new;
end;
$$;
drop trigger if exists web_al_registrar_usuario on auth.users;
create trigger web_al_registrar_usuario after insert on auth.users
for each row execute function public.web_crear_perfil();

-- Los usuarios anteriores conservan el acceso, sin adjudicarles una promoción retroactiva.
insert into public.web_perfil(usuario_id,nombre,usuario,telefono,tipo_documento,documento)
select id,coalesce(nullif(raw_user_meta_data->>'name',''),'Cliente'),coalesce(raw_user_meta_data->>'username',''),
  coalesce(raw_user_meta_data->>'phone',''),coalesce(raw_user_meta_data->>'docType',''),coalesce(raw_user_meta_data->>'idNumber','')
from auth.users on conflict (usuario_id) do nothing;

create or replace function public.web_mi_perfil()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare result jsonb;
begin
  if auth.uid() is null then raise exception 'Inicia sesión.'; end if;
  select jsonb_build_object('id',p.usuario_id,'name',p.nombre,'username',p.usuario,'phone',p.telefono,
    'docType',p.tipo_documento,'idNumber',p.documento,'email',u.email)
  into result from public.web_perfil p join auth.users u on u.id=p.usuario_id
  where p.usuario_id=auth.uid() and u.email_confirmed_at is not null;
  if result is null then raise exception 'Confirma tu correo y verifica la configuración de tu perfil.'; end if;
  return result;
end;
$$;

create or replace function public.web_guardar_perfil(p_perfil jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
begin
  perform public.web_mi_perfil();
  perform public.web_validar_perfil(p_perfil);
  update public.web_perfil set nombre=btrim(p_perfil->>'name'),usuario=coalesce(p_perfil->>'username',''),
    telefono=p_perfil->>'phone',tipo_documento=p_perfil->>'docType',documento=p_perfil->>'idNumber'
    where usuario_id=auth.uid();
  return public.web_mi_perfil();
end;
$$;

create or replace function public.web_cotizar_carrito(p_items jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  perfil public.web_perfil%rowtype;
  config public.web_configuracion%rowtype;
  entrada record;
  producto public.producto%rowtype;
  cantidad integer;
  subtotal numeric := 0;
  impuesto numeric := 0;
  porcentaje numeric := 0;
  descuento numeric;
  total numeric;
  unidades integer := 0;
  items jsonb := '[]'::jsonb;
begin
  perform public.web_mi_perfil();
  if p_items is null or jsonb_typeof(p_items) <> 'array' then raise exception 'El carrito no es válido.'; end if;
  if jsonb_array_length(p_items) not between 1 and 100 then
    raise exception 'El carrito no es válido.';
  end if;
  if exists(select 1 from jsonb_array_elements(p_items) x where coalesce(x->>'id','')=''
    or coalesce(x->>'quantity','') !~ '^[1-9][0-9]{0,2}$') then
    raise exception 'Las cantidades del carrito no son válidas.';
  end if;
  select * into strict perfil from public.web_perfil where usuario_id=auth.uid();
  select * into strict config from public.web_configuracion where id;
  if perfil.solicita_bienvenida and not exists(select 1 from public.web_pedido where usuario_id=auth.uid()) then
    porcentaje := config.descuento_bienvenida;
  end if;
  for entrada in select x->>'id' as id, sum((x->>'quantity')::integer)::integer as quantity
      from jsonb_array_elements(p_items) x group by x->>'id' order by x->>'id'
  loop
    cantidad := entrada.quantity;
    select * into producto from public.producto where pro_id::text=entrada.id;
    if not found or producto.pro_activo is not true or producto.pro_precio_unitario is null
      or producto.pro_precio_unitario < 0 then raise exception 'Un producto ya no está disponible.'; end if;
    if cantidad > 100 or producto.pro_stock_disponible is null or producto.pro_stock_disponible < cantidad then
      raise exception 'No hay stock suficiente para %.', producto.pro_nombre;
    end if;
    subtotal := subtotal + round(producto.pro_precio_unitario * cantidad,2);
    if producto.pro_graba_iva then
      impuesto := impuesto + round(producto.pro_precio_unitario * cantidad * (1-porcentaje/100) * config.iva/(100+config.iva),2);
    end if;
    unidades := unidades+cantidad;
    items := items || jsonb_build_array(jsonb_build_object('id',producto.pro_id::text,'name',producto.pro_nombre,
      'price',producto.pro_precio_unitario,'quantity',cantidad,'size',producto.pro_presentacion_tamano,
      'image',producto.pro_imagen_principal_url));
  end loop;
  descuento := round(subtotal*porcentaje/100,2);
  total := subtotal-descuento;
  return jsonb_build_object('subtotal',subtotal,'discount',descuento,'discountPercent',porcentaje,
    'total',total,'tax',impuesto,'net',total-impuesto,'count',unidades,'items',items);
end;
$$;

create or replace function public.web_pedido_json(p_pedido public.web_pedido)
returns jsonb language sql stable set search_path = '' as $$
  select jsonb_build_object('id',p_pedido.id,'number','NAT-'||to_char(p_pedido.creado_en,'YYYY')||'-'||lpad(p_pedido.numero::text,6,'0'),
    'date',to_char(p_pedido.creado_en at time zone 'America/Guayaquil','DD/MM/YYYY HH24:MI'),
    'total',p_pedido.cotizacion->'total','discount',p_pedido.cotizacion->'discount',
    'method','Pagar al Retirar en Tienda','status',p_pedido.estado,'items',p_pedido.cotizacion->'items');
$$;

create or replace function public.web_crear_pedido(p_items jsonb,p_metodo text,p_solicitud_id uuid,p_retiro jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare cotizacion jsonb; pedido public.web_pedido%rowtype;
begin
  perform public.web_mi_perfil();
  -- Serializa las compras del usuario: dos peticiones no pueden obtener el beneficio inicial.
  perform 1 from public.web_perfil where usuario_id=auth.uid() for update;
  select * into pedido from public.web_pedido where usuario_id=auth.uid() and solicitud_id=p_solicitud_id;
  if found then return public.web_pedido_json(pedido); end if;
  if p_metodo is distinct from 'tienda' then
    raise exception 'El pago con tarjeta necesita confirmación del proveedor de pagos. Elige pagar al retirar.';
  end if;
  if p_solicitud_id is null or length(btrim(coalesce(p_retiro->>'name',''))) < 3
    or length(btrim(coalesce(p_retiro->>'idNumber',''))) not between 3 and 30 then
    raise exception 'Completa los datos de la persona que retira.';
  end if;
  -- Orden fijo de bloqueo para que varias compras no vendan las mismas unidades.
  perform 1 from public.producto p where p.pro_id::text in
    (select x->>'id' from jsonb_array_elements(p_items) x) order by p.pro_id for update;
  cotizacion := public.web_cotizar_carrito(p_items);
  insert into public.web_pedido(usuario_id,solicitud_id,metodo,retiro,cotizacion)
  values(auth.uid(),p_solicitud_id,p_metodo,p_retiro,cotizacion) returning * into pedido;
  update public.producto p set pro_stock_disponible=p.pro_stock_disponible-lines.quantity
    from (select x->>'id' as id,(x->>'quantity')::integer as quantity from jsonb_array_elements(cotizacion->'items') x) lines
    where p.pro_id::text=lines.id;
  return public.web_pedido_json(pedido);
end;
$$;

create or replace function public.web_mis_pedidos()
returns jsonb language plpgsql security definer set search_path = '' as $$
declare result jsonb;
begin
  perform public.web_mi_perfil();
  select coalesce(jsonb_agg(public.web_pedido_json(p) order by p.creado_en desc),'[]'::jsonb)
    into result from public.web_pedido p where p.usuario_id=auth.uid();
  return result;
end;
$$;

create or replace function public.web_registro_disponible()
returns boolean language sql stable set search_path = '' as $$ select true $$;
revoke all on function public.web_registro_disponible() from public;
grant execute on function public.web_registro_disponible() to anon, authenticated;
grant usage on schema public to anon;

revoke all on function public.web_validar_perfil(jsonb),public.web_crear_perfil(),public.web_pedido_json(public.web_pedido) from public,anon,authenticated;
revoke all on function public.web_mi_perfil(),public.web_guardar_perfil(jsonb),public.web_cotizar_carrito(jsonb),
  public.web_crear_pedido(jsonb,text,uuid,jsonb),public.web_mis_pedidos() from public,anon;
grant usage on schema public to authenticated;
grant execute on function public.web_mi_perfil(),public.web_guardar_perfil(jsonb),public.web_cotizar_carrito(jsonb),
  public.web_crear_pedido(jsonb,text,uuid,jsonb),public.web_mis_pedidos() to authenticated;

commit;
