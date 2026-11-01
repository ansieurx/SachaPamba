const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const scratch = path.join(root, 'scratch');
fs.mkdirSync(scratch, { recursive: true });
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.writeHead(204).end();
  const filename = path.join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!filename.startsWith(root + path.sep)) return res.writeHead(403).end();
  fs.readFile(filename, (error, data) => error ? res.writeHead(404).end() : res.writeHead(200, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream' }).end(data));
});

let browser, socket;
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const profile = fs.mkdtempSync(path.join(scratch, 'a11y-browser-'));
  const executable = process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  browser = spawn(executable, ['--headless=new', '--disable-gpu', '--disable-extensions', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
  browser.on('error', error => console.error(error.message));
  const active = path.join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(active); i++) await sleep(100);
  assert(fs.existsSync(active), 'Set BROWSER_PATH to a Chromium browser executable.');
  const port = fs.readFileSync(active, 'utf8').split('\n')[0];
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  socket = new WebSocket(targets.find(target => target.type === 'page').webSocketDebuggerUrl);
  await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
  let serial = 0;
  const pending = new Map(), errors = [], results = [];
  let staticPage = false;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++serial;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const call = pending.get(message.id);
      pending.delete(message.id);
      return message.error ? call.reject(new Error(JSON.stringify(message.error))) : call.resolve(message.result);
    }
    if (message.method === 'Runtime.exceptionThrown') errors.push({ text: message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text, url: message.params.exceptionDetails.url, stack: message.params.exceptionDetails.stackTrace });
    if (message.method === 'Fetch.requestPaused') {
      const { requestId, request, resourceType } = message.params;
      const reply = (method, params) => send(method, params).catch(error => {
        // A navigation can cancel a prefetched image before its response is fulfilled.
        if (!/Invalid InterceptionId|Invalid parameters|Invalid requestId/.test(error.message)) errors.push({ text: error.message });
      });
      if (staticPage && request.url === base + '/app.js') reply('Fetch.failRequest', { requestId, errorReason: 'BlockedByClient' });
      else if (request.url.startsWith(base)) reply('Fetch.continueRequest', { requestId });
      // A white image checks the least favorable background for text overlays.
      else if (resourceType === 'Image') reply('Fetch.fulfillRequest', { requestId, responseCode: 200, responseHeaders: [{ name: 'Content-Type', value: 'image/svg+xml' }], body: Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="white"/></svg>').toString('base64') });
      else reply('Fetch.failRequest', { requestId, errorReason: 'BlockedByClient' });
    }
  });
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };
  async function waitFor(expression) {
    for (let i = 0; i < 150; i++) { if (await evaluate(expression)) return; await sleep(40); }
    throw new Error('Timeout: ' + expression);
  }
  async function go(route) {
    await send('Page.navigate', { url: `${base}/${route}` });
    await waitFor(`location.href===${JSON.stringify(base + '/' + route)}&&document.readyState==='complete'${staticPage ? '' : "&&typeof window.navigateTo==='function'"}`);
    await evaluate('document.fonts.ready.then(()=>true)');
    await evaluate(fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8'));
  }
  async function audit(name) {
    const report = await evaluate(`axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}}).then(result=>({violations:result.violations.map(rule=>({id:rule.id,impact:rule.impact,help:rule.help,tags:rule.tags,nodes:rule.nodes.map(node=>({target:node.target,html:node.html,summary:node.failureSummary}))})),incomplete:result.incomplete.map(rule=>({id:rule.id,nodes:rule.nodes.map(node=>node.target)}))}))`);
    const extra = await evaluate(`({missingAlt:[...document.querySelectorAll('img:not([alt])')].map(el=>el.outerHTML),duplicateIds:[...document.querySelectorAll('[id]')].map(el=>el.id).filter((id,index,ids)=>id&&ids.indexOf(id)!==index),overflow:document.documentElement.scrollWidth>innerWidth,headings:[...document.querySelectorAll('main h1,main h2,main h3')].filter(el=>el.getClientRects().length).map(el=>({tag:el.tagName,text:el.textContent.trim().slice(0,80),hidden:el.getAttribute('aria-hidden')}))})`);
    extra.unnamedControls = await evaluate(`(()=>{
      const text=element=>{
        if(element.nodeType===Node.TEXT_NODE)return element.textContent;
        if(element.nodeType!==Node.ELEMENT_NODE||element.getAttribute('aria-hidden')==='true')return '';
        return (element.getAttribute('alt')||'')+' '+[...element.childNodes].map(text).join(' ');
      };
      return [...document.querySelectorAll('button,a[href]')].filter(element=>!(element.getAttribute('aria-label')||
        (element.getAttribute('aria-labelledby')||'').split(/\\s+/).map(id=>document.getElementById(id)?.textContent||'').join(' ').trim()||
        text(element).trim()||element.getAttribute('title'))).map(element=>element.outerHTML.slice(0,300));
    })()`);
    results.push({ name, ...report, ...extra });
    console.log(JSON.stringify({ name, violations: report.violations.map(rule => ({ id: rule.id, count: rule.nodes.length, targets: rule.nodes.slice(0, 3).map(node => node.target) })), missingAlt: extra.missingAlt.length, duplicateIds: extra.duplicateIds, overflow: extra.overflow }));
  }
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await go('index.html');
  await evaluate(`localStorage.setItem('sacha_pamba_user',JSON.stringify({name:'María Morales',email:'maria@example.com',phone:'0999999999'}));addToCart('maca')`);
  for (const route of ['index.html','categoria.html','producto.html?id=maca','carrito.html','cuenta.html?tab=personal','cuenta.html?tab=favorites','checkout-retiro.html','checkout-pago.html','checkout-confirmacion.html','ayuda.html','politicas-retiro.html']) {
    await go(route);
    await audit(route);
  }
  await go('index.html');
  await evaluate('openAuthModal("login")'); await audit('login');
  await evaluate('switchAuthTab("register")'); await audit('register');
  await evaluate('closeAuthModal()');
  await go('producto.html?id=maca');
  await evaluate('openReviewModal("maca");setModalRating(2)');
  assert.equal(await evaluate('document.querySelectorAll("#modal-star-picker .sr-only").length'), 5, 'Rating text must survive changes');
  assert.equal(await evaluate('document.getElementById("modal-review-rating").value'), '2');
  await audit('review');
  await evaluate('closeReviewModal();openConfirmRemoveModal(cart[0])'); await audit('remove-confirm');
  await evaluate('closeConfirmRemoveModal();openImageLightbox("maca")'); await audit('lightbox');
  await go('index.html');
  await evaluate('openNavCategoryMenu()'); await audit('categories-open');
  await evaluate('closeNavCategoryMenu();document.getElementById("live-search-input").value="maca";document.getElementById("live-search-input").dispatchEvent(new Event("input"))'); await audit('search-results');
  await go('cuenta.html?tab=orders'); await audit('order-history');
  await evaluate('document.getElementById("status-btn-latest").click()'); await audit('order-status');
  await go('cuenta.html?tab=favorites');
  await evaluate('toggleFavorite("maca",true);document.querySelector("[data-favorites-items] button").focus();toggleFavorite("maca")'); await audit('favorite-undo');
  await go('checkout-pago.html'); await evaluate('selectPaymentOption("tienda")'); await audit('pay-in-store');
  await go('carrito.html'); await evaluate('clearCart()'); await audit('empty-cart');
  await evaluate('addToCart("maca")');
  await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 800, deviceScaleFactor: 1, mobile: true });
  for (const route of ['index.html','categoria.html','producto.html?id=maca','carrito.html','cuenta.html?tab=favorites','checkout-retiro.html','checkout-pago.html','ayuda.html']) {
    await go(route); await audit('mobile/' + route);
  }
  await go('index.html');await evaluate('openNavCategoryMenu()');await audit('mobile/categories-open');
  // Native key events verify focus behavior, rather than synthesizing a click for Tab.
  async function key(key, modifiers = 0) {
    const extra = key === 'Enter' ? { code: 'Enter', windowsVirtualKeyCode: 13 } : key === 'Tab' ? { code: 'Tab', windowsVirtualKeyCode: 9 } : {};
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key, modifiers, ...extra });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key, modifiers, ...extra });
  }
  await go('index.html');
  await key('Tab');
  assert.equal(await evaluate('document.activeElement.classList.contains("skip-link")'), true, 'Skip link must be first in keyboard order');
  await key('Enter');
  assert.equal(await evaluate('document.activeElement.id'), 'app');
  await evaluate('document.getElementById("nav-auth-btn").focus();openAuthModal("login")');
  assert.equal(await evaluate('document.activeElement.id'), 'login-email');
  assert.equal(await evaluate('document.getElementById("app").inert'), true);
  await evaluate('document.getElementById("tab-login-btn").focus()'); await key('ArrowRight');
  assert.equal(await evaluate('document.getElementById("auth-panel-register").classList.contains("hidden")'), false);
  await key('ArrowLeft');
  await evaluate(`window.tabStops=[...document.querySelectorAll('#auth-modal a[href],#auth-modal button,#auth-modal input')].filter(el=>el.tabIndex>=0&&!el.disabled&&el.getClientRects().length);tabStops.at(-1).focus()`);
  await key('Tab');
  assert.equal(await evaluate('document.activeElement===tabStops[0]'), true, 'Dialog Tab must wrap');
  await key('Tab', 8);
  assert.equal(await evaluate('document.activeElement===tabStops.at(-1)'), true, 'Dialog Shift+Tab must wrap');
  await evaluate('document.getElementById("login-email").value="incorrecto";document.getElementById("login-password").value="";document.getElementById("form-login").requestSubmit()');
  assert.equal(await evaluate('document.getElementById("login-email").getAttribute("aria-invalid")'), 'true');
  assert.equal(await evaluate('document.getElementById("login-email-err").classList.contains("hidden")'), false);
  await audit('login-error');
  await key('Escape');
  assert.equal(await evaluate('document.getElementById("app").inert'), false);
  assert.equal(await evaluate('document.activeElement.id'), 'nav-auth-btn');
  await evaluate('openReviewModal("maca");window.uploadActivations=0;document.getElementById("modal-review-file").click=()=>{uploadActivations++};document.getElementById("modal-review-upload-prompt").focus()');
  await key('Enter');
  assert.equal(await evaluate('uploadActivations'), 1, 'Upload must be operable with Enter');
  await evaluate('document.getElementById("modal-review-upload-prompt").parentElement.click()');
  assert.equal(await evaluate('uploadActivations'), 2, 'Existing click area must still work');
  await key('Escape');
  await evaluate('document.getElementById("nav-category-btn").focus();openNavCategoryMenu()'); await key('Escape');
  assert.equal(await evaluate('document.activeElement.id'), 'nav-category-btn');
  assert.equal(await evaluate('document.getElementById("nav-category-btn").getAttribute("aria-expanded")'), 'false');
  await evaluate('document.getElementById("nav-auth-btn").focus();openAuthModal("login");document.getElementById("auth-modal-close").click()');
  assert.equal(await evaluate('document.activeElement.id'), 'nav-auth-btn', 'Click close must restore focus once');
  await evaluate('document.getElementById("hero-next-btn").focus()');
  assert.equal(await evaluate('heroAutoplayTimer===null'), true, 'Carousel must stop while focused');
  await evaluate('document.getElementById("hero-pause-btn").click()');
  assert.equal(await evaluate('document.getElementById("hero-pause-btn").getAttribute("aria-pressed")'), 'true');
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await go('index.html');
  assert.equal(await evaluate('heroAutoplayTimer===null'), true, 'Reduced motion must stop autoplay');
  await send('Emulation.setEmulatedMedia', { features: [] });
  await go('cuenta.html?tab=orders');
  await evaluate('document.getElementById("status-btn-latest").focus()'); await key('ArrowDown');
  assert.equal(await evaluate('document.activeElement.getAttribute("role")'), 'option');
  await key('ArrowUp');await key('Escape');
  assert.equal(await evaluate('document.activeElement.id'), 'status-btn-latest');
  await go('producto.html?id=maca');
  await evaluate('document.getElementById("main-product-img").focus()');await key('Enter');
  await waitFor('!document.getElementById("image-lightbox-modal").classList.contains("hidden")');
  await key('ArrowRight');await waitFor('document.getElementById("lightbox-image-counter").textContent.startsWith("(2/")');await key('Escape');
  assert.equal(await evaluate('document.activeElement.id'), 'main-product-img');
  await go('checkout-pago.html');
  await evaluate('document.getElementById("pay-opt-tarjeta").focus()');await key('ArrowRight');
  assert.equal(await evaluate('document.getElementById("pay-opt-tienda").getAttribute("aria-checked")'), 'true');
  await go('cuenta.html?tab=favorites');
  await evaluate('toggleFavorite("maca",true);document.querySelector("[data-favorites-items] button").focus();toggleFavorite("maca")');
  assert.equal(await evaluate('document.activeElement.getAttribute("data-favorite-undo")'), 'maca');
  await key('Enter');
  assert.equal(await evaluate('!!document.activeElement.closest("[data-favorites-items]")'), true);
  await go('carrito.html');
  await evaluate('window.qtyButton=[...document.querySelectorAll("[data-cart-items] button")].find(button=>button.getAttribute("onclick")?.includes("updateCartQuantity")&&button.getAttribute("onclick").includes(", 1"));qtyButton.focus();qtyButton.click()');
  assert.equal(await evaluate('!!document.activeElement.closest("[data-cart-items]")'), true, 'Quantity changes must preserve keyboard focus');
  await go('index.html');
  await evaluate(`document.head.insertAdjacentHTML('beforeend','<style id="text-spacing-check">*{line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important}p{margin-bottom:2em!important}</style>')`);
  assert.equal(await evaluate('document.documentElement.scrollWidth<=innerWidth'), true);
  const clippedLinks = await evaluate(`(()=>[...document.querySelectorAll('header a.nav-section-link')].filter(link=>{const range=document.createRange();range.selectNodeContents(link);return range.getBoundingClientRect().right>link.getBoundingClientRect().right+1}).map(link=>link.textContent.trim()))()`);
  assert.deepEqual(clippedLinks, [], 'Navigation text must remain visible with text spacing increased');
  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(scratch, 'a11y-mobile-spacing.png'), Buffer.from(screenshot.data, 'base64'));
  console.log('KEYBOARD: skip link, tab panels, modal focus trap and return, validation errors, menu Escape, carousel focus/pause/reduced motion passed.');
  staticPage = true;
  for (const route of fs.readdirSync(root).filter(file => file.endsWith('.html'))) { await go(route); await audit('static/' + route); }
  const name = process.argv.includes('--baseline') ? 'a11y-before.json' : 'a11y-after.json';
  fs.writeFileSync(path.join(scratch, name), JSON.stringify({ results, errors }, null, 2));
  const violations = results.reduce((count, result) => count + result.violations.length, 0);
  console.log(`RESULT: ${results.length} states, ${violations} rule failures; ${errors.length} runtime errors. Report: scratch/${name}`);
  if (!process.argv.includes('--baseline') && (violations || errors.length || results.some(result => result.overflow || result.missingAlt.length || result.duplicateIds.length || result.unnamedControls.length))) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { socket?.close(); browser?.kill(); server.close(); });
