const fs = require('node:fs');
const path = require('node:path');

// Versión fijada para que las actualizaciones del CDN no cambien la aplicación.
const version = '2.118.0';
const directory = path.resolve(__dirname, '../assets/vendor/supabase');
const downloaded = new Set();

async function download(remotePath) {
  if (downloaded.has(remotePath)) return;
  downloaded.add(remotePath);
  const response = await fetch(`https://esm.sh${remotePath}`, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Error HTTP ${response.status} al descargar el cliente.`);
  let source = await response.text();
  const dependencies = [...new Set([...source.matchAll(/["'](\/node\/[^"']+\.mjs)["']/g)].map(match => match[1]))];
  for (const dependency of dependencies) {
    source = source.replaceAll(`"${dependency}"`, `"./${path.basename(dependency)}"`)
      .replaceAll(`'${dependency}'`, `'./${path.basename(dependency)}'`);
  }
  source = source.replace(/\n\/\/# sourceMappingURL=.*$/gm, '');
  fs.writeFileSync(path.join(directory, path.basename(remotePath)), source);
  await Promise.all(dependencies.map(download));
}

(async () => {
  fs.mkdirSync(directory, { recursive: true });
  await download(`/@supabase/supabase-js@${version}/es2022/supabase-js.bundle.mjs`);
  const license = await fetch(`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@${version}/LICENSE`, { signal: AbortSignal.timeout(30000) });
  if (!license.ok) throw new Error('No se pudo descargar la licencia del cliente.');
  fs.writeFileSync(path.join(directory, 'LICENSE'), await license.text());
  console.log(`Supabase ${version}: ${downloaded.size} módulos guardados localmente.`);
})().catch(error => { console.error(error.message); process.exitCode = 1; });
