const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

(async () => {
  const { parse } = await import('parse5');
  process.chdir(path.resolve(__dirname, '..'));
  const titles = new Set();
  const pages = fs.readdirSync('.').filter(file => file.endsWith('.html'));
  for (const file of pages) {
    const source = fs.readFileSync(file, 'utf8');
    const errors = [];
    const document = parse(source, { onParseError: error => errors.push(error.code) });
    assert.deepEqual(errors, [], `${file}: invalid HTML`);
    const nodes = [];
    function walk(node) { if (node.tagName) nodes.push(node); (node.childNodes || []).forEach(walk); }
    walk(document); // Inactive template contents are checked after rendering by axe.
    const attributes = node => Object.fromEntries((node.attrs || []).map(attr => [attr.name, attr.value]));
    const ids = new Map(), labels = new Set();
    for (const node of nodes) {
      const attr = attributes(node);
      if (attr.id) { assert(!ids.has(attr.id), `${file}: duplicate ${attr.id}`); ids.set(attr.id, node); }
      if (node.tagName === 'label' && attr.for) labels.add(attr.for);
    }
    const title = source.match(/<title>([^<]+)<\/title>/)?.[1];
    assert(title && !titles.has(title), `${file}: page needs a unique title`);
    titles.add(title);
    assert.equal(attributes(nodes.find(node => node.tagName === 'html')).lang, 'es');
    assert(nodes.some(node => node.tagName === 'a' && attributes(node).href === '#app'), `${file}: missing skip link`);
    for (const node of nodes) {
      const attr = attributes(node);
      if (node.tagName === 'img') assert(Object.hasOwn(attr, 'alt'), `${file}: image without alt`);
      if (['input','select','textarea'].includes(node.tagName) && !['hidden','submit','button'].includes(attr.type)) {
        assert(labels.has(attr.id) || attr['aria-label'] || attr['aria-labelledby'], `${file}: unlabeled ${attr.id || node.tagName}`);
      }
      for (const reference of ['aria-labelledby','aria-describedby','aria-controls']) {
        for (const id of (attr[reference] || '').split(/\s+/).filter(Boolean)) assert(ids.has(id), `${file}: missing ${reference} target ${id}`);
      }
    }
  }
  console.log(`OK: ${pages.length} HTML pages, unique titles, image alternatives, field labels and ARIA references.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
