// Solo para auditorías: no crea sesiones ni modifica datos en el proyecto real.
const profile = { id: '11111111-1111-4111-8111-111111111111', name: 'Cliente Prueba', email: 'cliente@example.test',
  username: 'cliente', phone: '0991234567', docType: 'Cédula', idNumber: '1710034065' };
const specs = [
  ['maca', 'Maca Andina Negra Gelatinizada', 8.5, 4, true, true, false],
  ['cacao', 'Cacao Fino de Aroma', 6, 4, true, true, true],
  ['omega-3', 'Omega 3 de Sacha Inchi', 15, 2, true, true, false],
  ['vitamina-c', 'Vitamina C', 13.5, 2, false, true, true],
  ['jarabe-sabila', 'Jarabe de Sábila', 8.5, 3, false, true, false],
  ['cloruro-magnesio', 'Cloruro de Magnesio', 4.5, 4, false, false, true],
  ['panela', 'Panela orgánica', 3, 9, false, false, false]
];
const products = specs.map(([id, name, price, category, featured, best, recent]) => ({ pro_id: id, pro_nombre: name,
  pro_cat_id: category, pro_precio_unitario: price, pro_es_destacado: featured, pro_es_mas_vendido: best, pro_es_nuevo: recent,
  pro_imagen_principal_url: `https://a11y.invalid/${id}-1.png`, pro_presentacion_tamano: 'Presentación de prueba',
  pro_descripcion_corta: 'Producto natural de prueba para la auditoría de accesibilidad.', pro_calificacion_promedio: 4.9,
  pro_total_resenas: 10, pro_ingredientes_origen: 'Ingredientes de prueba', pro_modo_uso_sugerido: 'Según indicación.' }));
const photos = products.flatMap(p => [1, 2, 3].map(order => ({ img_pro_id: p.pro_id, img_url_imagen: `https://a11y.invalid/${p.pro_id}-${order}.png`, img_orden: order })));
const categories = [[1,null,'suplementos','Suplementos'],[2,1,'vitaminas-minerales','Vitaminas y Minerales'],[3,1,'remedios','Remedios'],
  [4,1,'suplementos-polvo','Suplementos en Polvo'],[8,null,'alimentacion-natural','Alimentación Natural'],
  [9,8,'despensa-vegetariana-vegana','Despensa Vegetariana y Vegana'],[10,8,'snacks-frutos-secos','Snacks y Frutos Secos'],[11,8,'superalimentos','Superalimentos']]
  .map(([cat_id,cat_categoria_padre_id,cat_codigo_slug,cat_nombre])=>({cat_id,cat_categoria_padre_id,cat_codigo_slug,cat_nombre}));
const orders = [{id:'pedido-prueba',number:'NAT-2026-000001',date:'02/11/2026',total:8.5,method:'Pagar al Retirar en Tienda',status:'Recibido',
  items:[{id:'maca',name:products[0].pro_nombre,price:8.5,size:'Presentación de prueba',quantity:1,image:products[0].pro_imagen_principal_url}]}];

exports.browserClientModule = () => `
const profile=${JSON.stringify(profile)}, products=${JSON.stringify(products)}, photos=${JSON.stringify(photos)}, categories=${JSON.stringify(categories)}, orders=${JSON.stringify(orders)};
const savedOrders=sessionStorage.getItem('a11y-orders');if(savedOrders)orders.splice(0,orders.length,...JSON.parse(savedOrders));
const ok=data=>({data,error:null});
const signed=()=>localStorage.getItem('a11y-authenticated')==='true';
const user=()=>({...profile,email_confirmed_at:'2026-01-01T00:00:00Z',user_metadata:profile});
export function createClient(){return {
  from(table){return {select(){const result=ok(table==='producto'?products:table==='imagen_producto'?photos:categories);return {then(resolve,reject){return Promise.resolve(result).then(resolve,reject)},order(){return Promise.resolve(result)}}}}},
  auth:{getSession:async()=>ok({session:signed()?{user:user()}:null}),getUser:async()=>ok({user:signed()?user():null}),
    onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),
    signInWithPassword:async()=>{localStorage.setItem('a11y-authenticated','true');return ok({user:user()})},
    signOut:async()=>{localStorage.removeItem('a11y-authenticated');return ok(null)},signUp:async()=>ok({user:user(),session:null}),updateUser:async()=>ok({user:user()})},
  async rpc(name,args){
    if(name==='web_mi_perfil')return ok(profile);
    if(name==='web_mis_pedidos')return ok(orders);
    if(name==='web_registro_disponible')return ok(true);
    if(name==='web_guardar_perfil')return ok({...profile,...args.p_perfil});
    if(name==='web_crear_pedido'){
      sessionStorage.setItem('a11y-order-request',JSON.stringify(args));
      const existing=orders.find(order=>order.id===args.p_solicitud_id);if(existing)return ok(existing);
      const items=args.p_items.map(item=>{const p=products.find(p=>p.pro_id===item.id);return {id:item.id,name:p.pro_nombre,price:p.pro_precio_unitario,size:p.pro_presentacion_tamano,image:p.pro_imagen_principal_url,quantity:item.quantity}});
      const order={id:args.p_solicitud_id,number:'NAT-2026-TEST',date:'02/11/2026',total:items.reduce((s,i)=>s+i.price*i.quantity,0),status:'Recibido',method:args.p_metodo==='tarjeta'?'Tarjeta (pago pendiente)':'Pagar al Retirar en Tienda',items};
      orders.unshift(order);sessionStorage.setItem('a11y-orders',JSON.stringify(orders));return ok(order);
    }
    if(name==='web_cotizar_carrito'){const items=args.p_items||[],total=items.reduce((sum,item)=>sum+(products.find(p=>p.pro_id===item.id)?.pro_precio_unitario||0)*item.quantity,0),tax=Math.round(total*.15/1.15*100)/100;return ok({total,tax,net:total-tax,count:items.reduce((s,i)=>s+i.quantity,0)})}
    return {data:null,error:{message:'Operación no disponible en la auditoría'}};
  }
}};
`;
