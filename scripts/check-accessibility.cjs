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
    function alternativeText(node) {
      if (node.nodeName === '#text') return node.value;
      const attr = attributes(node);
      if (attr['aria-hidden'] === 'true' || ['script','style','template'].includes(node.tagName)) return '';
      return [attr.alt || '', ...(node.childNodes || []).map(alternativeText)].join(' ');
    }
    function accessibleName(node) {
      const attr = attributes(node);
      return (attr['aria-label'] || (attr['aria-labelledby'] || '').split(/\s+/)
        .map(id => ids.has(id) ? alternativeText(ids.get(id)) : '').join(' ').trim()
        || alternativeText(node) || attr.title || '').trim();
    }
    const title = source.match(/<title>([^<]+)<\/title>/)?.[1];
    assert(title && !titles.has(title), `${file}: page needs a unique title`);
    titles.add(title);
    assert.equal(attributes(nodes.find(node => node.tagName === 'html')).lang, 'es');
    assert(nodes.some(node => node.tagName === 'a' && attributes(node).href === '#app'), `${file}: missing skip link`);
    for (const node of nodes) {
      const attr = attributes(node);
      // Include controls in closed dialogs and inactive panels: they must already be named.
      if (node.tagName === 'button' || node.tagName === 'a' && Object.hasOwn(attr, 'href')) {
        assert(accessibleName(node), `${file}: unnamed ${node.tagName} ${attr.id || attr.onclick || ''}`);
      }
      if (/^h[1-6]$/.test(node.tagName)) assert(accessibleName(node), `${file}: empty ${node.tagName}`);
      if (node.tagName === 'label') {
        assert(alternativeText(node).trim(), `${file}: empty label`);
        const controls = ['input','select','textarea','button','meter','output','progress'];
        const wrapsControl = child => (child.childNodes || []).some(item => controls.includes(item.tagName) || wrapsControl(item));
        assert(attr.for ? ids.has(attr.for) && controls.includes(ids.get(attr.for).tagName) : wrapsControl(node), `${file}: orphaned label`);
      }
      if (node.tagName === 'img') assert(Object.hasOwn(attr, 'alt'), `${file}: image without alt`);
      if (['input','select','textarea'].includes(node.tagName) && !['hidden','submit','button'].includes(attr.type)) {
        assert(labels.has(attr.id) || attr['aria-label'] || attr['aria-labelledby'], `${file}: unlabeled ${attr.id || node.tagName}`);
      }
      for (const reference of ['aria-labelledby','aria-describedby','aria-controls']) {
        for (const id of (attr[reference] || '').split(/\s+/).filter(Boolean)) assert(ids.has(id), `${file}: missing ${reference} target ${id}`);
      }
    }
  }
  console.log(`OK: ${pages.length} HTML pages, names for visible/hidden controls, headings, field labels, unique titles and ARIA references.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
