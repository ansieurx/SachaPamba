# Recursos del sitio

El sitio sigue siendo estático. Para publicarlo, incluir los HTML, `app.js` y la carpeta `assets/`; no necesita Node en el servidor.

Los estilos, las tipografías y los iconos se sirven localmente. Los archivos de `assets/` están generados y se incluyen en el repositorio para que las páginas funcionen sin instalar dependencias.

Después de cambiar clases de Tailwind o iconos en los HTML o en `app.js`, o de editar `styles/site.css` o `tailwind.config.cjs`, regenerar los recursos:

```sh
npm ci
npm run build
npm run check
```

`npm run build` conserva la configuración visual compartida, copia las tipografías y genera CSS con los iconos utilizados. `npm run check` verifica las referencias locales y los estilos de los estados dinámicos.

La navegación sigue usando enlaces nativos. En HTTP/HTTPS, se anticipa la descarga de enlaces internos al enfocarlos o acercar el puntero, salvo en conexiones lentas o con ahorro de datos. Las transiciones entre páginas se activan en navegadores compatibles y respetan la preferencia de movimiento reducido.
