# Activar las comprobaciones nuevas

Ejecuta `validaciones.sql` en el SQL Editor del proyecto donde ya instalaste el registro y las compras. Es una actualización de las funciones existentes; no necesitas restaurar los archivos anteriores.

- La cédula requiere diez dígitos, estructura admitida y verificador módulo 10. La lógica coincide en JavaScript y PostgreSQL.
- El pasaporte comprueba longitud y caracteres. Con solo su número y sin país emisor no se puede comprobar su autenticidad ni aplicar un verificador universal.
- Los perfiles y datos de retiro y facturación se comprueban en la base, incluso si se omiten las comprobaciones del navegador.
- No se borran registros antiguos. Los documentos incorrectos deben corregirse cuando se editen o se usen para crear otro pedido.
- Para la tarjeta se comprueba Luhn, mes/año no vencido y CVV de tres dígitos, o cuatro para American Express. No se guardan ni envían números de tarjeta o CVV a Supabase. Estas comprobaciones no autorizan pagos: la integración con un proveedor de pagos sigue siendo necesaria.

Referencias: [verificador módulo 10 del INEC](https://anda.inec.gob.ec/anda/index.php/catalog/651/download/11409), [compatibilidad de estructura en python-stdnum](https://github.com/arthurdejong/python-stdnum/blob/master/stdnum/ec/ci.py) y [validaciones de formulario de tarjeta de Stripe](https://stripe.com/resources/more/payment-html-forms).

Pruebas: `npm ci` y `npm run check:validations`. La antigua prueba de pedidos se omite si su migración inicial no está en el repositorio; las pruebas nuevas son independientes y usan una base PostgreSQL local de prueba.
