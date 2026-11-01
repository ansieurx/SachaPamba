const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const postcss = require('postcss');

const root = path.resolve(__dirname, '..');
process.chdir(root);
fs.mkdirSync('assets', { recursive: true });
fs.mkdirSync('scratch', { recursive: true });

const styles = [];
for (const [font, files] of Object.entries({ outfit: ['index.css'], fraunces: ['standard.css', 'standard-italic.css'], caveat: ['index.css'] })) {
  const directory = path.join('node_modules/@fontsource-variable', font);
  for (const file of files) {
    const faces = postcss.parse(fs.readFileSync(path.join(directory, file), 'utf8'));
    // The site's Spanish content uses Latin and Latin Extended glyphs.
    faces.walkAtRules('font-face', face => {
      const source = face.nodes.find(node => node.prop === 'src')?.value || '';
      if (!/-latin(?:-ext)?-/.test(source)) face.remove();
    });
    const css = faces.toString()
      .replaceAll(' Variable', '')
      .replace(/\.\/files\/([^)'"\s]+)/g, (_, filename) => {
        fs.copyFileSync(path.join(directory, 'files', filename), path.join('assets', filename));
        return `./${filename}`;
      });
    styles.push(css);
  }
  fs.copyFileSync(path.join(directory, 'LICENSE'), `assets/${font}-LICENSE`);
}

// Include icons used in HTML and dynamic account, cart and review states.
const sources = fs.readdirSync('.').filter(file => file.endsWith('.html')).map(file => fs.readFileSync(file, 'utf8')).join('\n') + fs.readFileSync('app.js', 'utf8');
const icons = new Set(sources.match(/\bph-[a-z]+(?:-[a-z0-9]+)*/g));
const weights = { regular: 'Phosphor', bold: 'Phosphor-Bold', fill: 'Phosphor-Fill' };
for (const [weight, family] of Object.entries(weights)) {
  const directory = path.join('node_modules/@phosphor-icons/web/src', weight);
  const css = fs.readFileSync(path.join(directory, 'style.css'), 'utf8')
    .replace(/src:[\s\S]*?;/, `src: url("./${family}.woff2") format("woff2");`);
  const parsed = postcss.parse(css);
  parsed.walkRules(rule => {
    const icon = rule.selector.match(/\.(ph-[a-z0-9-]+):before/);
    if (icon && !icons.has(icon[1])) rule.remove();
  });
  styles.push(parsed.toString());
  fs.copyFileSync(path.join(directory, `${family}.woff2`), `assets/${family}.woff2`);
}
fs.copyFileSync('node_modules/@phosphor-icons/web/LICENSE', 'assets/PHOSPHOR-LICENSE');
styles.push(fs.readFileSync('styles/site.css', 'utf8'));
fs.writeFileSync('scratch/styles-input.css', styles.join('\n'));
execFileSync(process.execPath, [require.resolve('tailwindcss/lib/cli.js'), '-i', 'scratch/styles-input.css', '-o', 'assets/site.css', '--minify'], { stdio: 'inherit' });
