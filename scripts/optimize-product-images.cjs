const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const sharp = require('sharp');

process.chdir(path.resolve(__dirname, '..'));

async function main() {
  const source = fs.readFileSync('app.js', 'utf8');
  const url = process.env.SUPABASE_URL || source.match(/const SUPABASE_URL\s*=\s*['"]([^'"]+)/)?.[1];
  const key = process.env.SUPABASE_KEY || source.match(/const SUPABASE_KEY\s*=\s*['"]([^'"]+)/)?.[1];
  if (!url || !key) throw new Error('Configura SUPABASE_URL y SUPABASE_KEY.');
  const headers = { apikey: key, Authorization: `Bearer ${key}` };
  const responses = await Promise.all([
    fetch(`${url}/rest/v1/producto?select=pro_imagen_principal_url`, { headers }),
    fetch(`${url}/rest/v1/imagen_producto?select=img_url_imagen`, { headers })
  ]);
  if (responses.some(response => !response.ok)) throw new Error('No se pudieron leer las fotos del catálogo. Revisa los permisos de lectura.');
  const [products, photos] = await Promise.all(responses.map(response => response.json()));
  const urls = [...new Set([...products.map(p => p.pro_imagen_principal_url), ...photos.map(p => p.img_url_imagen)]
    .filter(Boolean).map(src => src.trim()))];
  const directory = 'assets/products';
  fs.mkdirSync(directory, { recursive: true });
  const manifest = {};
  let originalBytes = 0;
  let cardBytes = 0;
  let cursor = 0;
  async function worker() {
    while (cursor < urls.length) {
      const src = urls[cursor++];
      const response = await fetch(src, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`No se pudo descargar una foto: HTTP ${response.status}.`);
      const input = Buffer.from(await response.arrayBuffer());
      const hash = createHash('sha256').update(input).digest('hex').slice(0, 16);
      const variants = {};
      for (const [name, width] of [['thumbnail', 160], ['card', 480], ['detail', 960]]) {
        const filename = `${directory}/${hash}-${width}.webp`;
        const output = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
        fs.writeFileSync(filename, output);
        variants[name] = filename;
        if (name === 'card') cardBytes += output.length;
      }
      originalBytes += input.length;
      manifest[src] = variants;
    }
  }
  await Promise.all(Array.from({ length: Math.min(3, urls.length) }, worker));
  fs.writeFileSync('assets/product-images.js', `// Generado con npm run optimize:images. Los originales se conservan en Supabase.\nexport default ${JSON.stringify(manifest, null, 2)};\n`);
  console.log(JSON.stringify({ images: urls.length, originalBytes, cardBytes, reductionPercent: Math.round((1 - cardBytes / originalBytes) * 100) }));
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
