# Imágenes del catálogo

Después de añadir o reemplazar fotos en Supabase, ejecuta:

```sh
npm run optimize:images
```

El comando lee las fotos públicas de `producto` e `imagen_producto` y genera versiones WebP de 160, 480 y 960 píxeles sin ampliar imágenes pequeñas. Conserva los originales en Supabase para la vista ampliada.

Publica también `assets/products/` y `assets/product-images.js` junto con el resto del sitio. Las fotos nuevas sin versión optimizada usan automáticamente su URL original hasta ejecutar el comando.

El catálogo se conserva en `sessionStorage` durante 60 segundos para agilizar la navegación. Al vencer ese plazo, la siguiente página consulta Supabase de nuevo. Los precios y las imágenes modificados pueden tardar hasta un minuto en reflejarse; si reemplazas una foto manteniendo la misma URL, regenera además sus versiones optimizadas.
