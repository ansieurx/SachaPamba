# Activar registro y compras reales

1. Ejecutar `registro-y-compras.sql` en el SQL Editor de Supabase. Crea perfiles asociados a `auth.users`, pedidos y funciones con acceso restringido al usuario autenticado. Los precios, impuestos, stock y descuento se calculan en PostgreSQL. El porcentaje de bienvenida se configura en `web_configuracion` (15 por defecto).
2. En Authentication, mantener activadas las altas por email y **Confirm email**. Configurar la política de contraseña con al menos ocho caracteres, mayúscula, minúscula y número, como solicita el formulario actual.
3. En URL Configuration, configurar Site URL y autorizar `https://TU-DOMINIO/index.html?registro=confirmado` y la dirección equivalente de desarrollo. Usar HTTP/HTTPS; no abrir directamente con `file://`.
4. En Email Templates > Confirm signup, copiar `confirmacion-registro.html`. El correo confirma la recepción del registro y contiene el enlace de activación. Configurar SMTP con un remitente verificado para enviar a los clientes; el correo de prueba de Supabase tiene restricciones de destinatarios y frecuencia. Probar registro, recepción, enlace y login con una dirección controlada antes de publicar.

La sesión y contraseña se gestionan exclusivamente con Supabase Auth. Los perfiles ya existentes se conservan sin adjudicar promociones retroactivas. Los perfiles locales de demostración ya no conceden acceso.

El descuento se solicita mediante el botón existente «Crear cuenta y obtener 15 %» y solo se aplica al primer pedido registrado del usuario. PostgreSQL bloquea las compras concurrentes de la misma cuenta y reutiliza el pedido si se repite su identificador de solicitud. La cotización y el pedido ignoran precios o descuentos enviados desde el navegador. Las reglas de la tienda se modifican desde el servidor; los clientes no pueden cambiar su promoción ni el estado de los pedidos.

Los pedidos con pago al retirar se guardan con estado «Recibido» y descuentan inventario en una sola transacción. El botón de tarjeta conserva su interfaz, pero no registra pagos ficticios: falta integrar un proveedor de pagos y su confirmación del servidor antes de habilitar esa modalidad. Esta migración no ejecuta cobros ni envía correos por sí misma.

Publicar también `assets/account-service.js`. No se necesita ninguna clave administrativa en el navegador. No modificar las políticas del catálogo para otorgar escritura a los clientes.
