Cliente Supabase JS 2.118.0 para navegador, descargado de esm.sh con sus adaptadores de navegador y comentarios de licencia originales.

La aplicación carga estos módulos locales para evitar descargas de JavaScript desde terceros durante el inicio. No contienen credenciales ni datos del catálogo.

Para regenerarlos: `npm run update:supabase`. La versión se fija en `scripts/update-supabase-client.cjs`; revisa y prueba cualquier actualización antes de publicarla. Publica esta carpeta junto con el resto de `assets/`.
