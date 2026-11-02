import { createClient } from './assets/vendor/supabase/supabase-js.bundle.mjs';
import productImageVariants from './assets/product-images.js';
import { createAccountService } from './assets/account-service.js';
import { documentError, profileErrors, nameError, isValidEmail, isValidPhone, billingDocumentError,
  checkoutDocumentType, isValidCardNumber, isValidCardExpiry, isValidCvv } from './assets/validators.js';

    // Reemplazar por la URL y la clave p?blica del proyecto Supabase.
    const SUPABASE_URL = 'https://uucegdaytxxoedwnoenv.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_Ne56n5VP9ftiP4xQBJAM2g_Em9E2WXI';
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const accountService = createAccountService(supabase);
    // Eliminar los perfiles y pedidos locales del antiguo acceso de demostración.
    try {
      localStorage.removeItem('sacha_pamba_user');
      localStorage.removeItem('sacha_pamba_orders');
      localStorage.removeItem('sacha_last_order');
    } catch { /* Supabase sigue validando el acceso aunque el almacenamiento esté restringido. */ }
    let registrationOfferRequested = false;
    let cartQuoteTimer = null;
    let authOperationPending = false;
    let appInitialized = false;
    let initialAuthError = null;
    const initialAuthReady = accountService.restore().catch(error => { initialAuthError = error; });

    function authErrorMessage(error) {
      if (error?.code === 'invalid_credentials') return 'Correo o contraseña incorrectos.';
      if (error?.code === 'email_not_confirmed') return 'Confirma tu correo antes de iniciar sesión.';
      if (error?.code === 'over_email_send_rate_limit') return 'Espera unos minutos antes de volver a solicitar el correo.';
      if (error?.code === 'PGRST202' || error?.code === '42501') return 'Falta habilitar el registro y las compras en Supabase. Ejecuta registro-y-compras.sql.';
      return error?.message || 'No se pudo completar la solicitud. Vuelve a intentarlo.';
    }

    async function submitAccountRequest(form, action) {
      if (authOperationPending) return;
      authOperationPending = true;
      const button = form?.querySelector('button[type="submit"]');
      if (button) button.disabled = true;
      try { await action(); }
      catch (error) { showToast(authErrorMessage(error), 'ph-warning'); }
      finally { authOperationPending = false; if (button) button.disabled = false; }
    }

    function scheduleCartQuote() {
      clearTimeout(cartQuoteTimer);
      if (!getCurrentUser() || !cart.length || accountService.quoteFor(cart)) return;
      cartQuoteTimer = setTimeout(async () => {
        try {
          await accountService.quoteCart(cart);
          updateCartUI();
        } catch (error) { console.warn('No se pudo actualizar la cotización:', error.message); }
      }, 120);
    }

    function fieldValidationError(id) {
      const value = document.getElementById(id)?.value || '';
      if (['reg-id', 'acc-id'].includes(id)) {
        return documentError(document.getElementById(id === 'reg-id' ? 'reg-doc-type' : 'acc-doc-type')?.value, value);
      }
      if (id === 'pickup-id') return documentError(checkoutDocumentType(value, getCurrentUser()), value);
      if (id === 'checkout-inv-id') return billingDocumentError(value, getCurrentUser());
      if (['reg-name', 'acc-name', 'pickup-name', 'checkout-inv-name'].includes(id)) return nameError(value);
      if (['reg-email', 'acc-email', 'login-email', 'checkout-inv-email'].includes(id)) return isValidEmail(value) ? '' : 'Ingresa un correo electrónico válido.';
      if (['reg-phone', 'acc-phone'].includes(id)) return isValidPhone(value) ? '' : 'Ingresa un teléfono válido, con entre 9 y 15 dígitos y sin letras.';
      if (id === 'checkout-card-num') return isValidCardNumber(value) ? '' : 'El número de tarjeta no supera la comprobación Luhn. Revisa los dígitos.';
      if (id === 'checkout-card-exp') return isValidCardExpiry(value) ? '' : 'Ingresa una fecha MM/AA válida y no vencida.';
      if (id === 'checkout-card-cvv') return isValidCvv(value, document.getElementById('checkout-card-num')?.value) ? '' : 'El CVV debe tener 3 dígitos, o 4 para American Express.';
      return '';
    }

    function validateFields(ids) {
      let firstInvalid = null;
      ids.forEach(id => {
        const input = document.getElementById(id);
        if (!input) return;
        const error = fieldValidationError(id);
        input.setCustomValidity(error);
        if (error) { input.setAttribute('aria-invalid', 'true'); firstInvalid ||= input; }
        else input.removeAttribute('aria-invalid');
      });
      if (firstInvalid) {
        firstInvalid.reportValidity();
        showToast(firstInvalid.validationMessage, 'ph-warning');
      }
      return !firstInvalid;
    }

    function showProfileValidation(profile, prefix) {
      const errors = profileErrors(profile);
      Object.entries(errors).forEach(([key, message]) => {
        const id = `${prefix}-${key === 'idNumber' ? 'id' : key}`;
        const input = document.getElementById(id);
        if (!input) return;
        input.setCustomValidity(message);
        input.setAttribute('aria-invalid', 'true');
        if (document.getElementById(`${id}-err`)) showFieldError(id, `${id}-err`, message);
      });
      if (Object.keys(errors).length) {
        const key = Object.keys(errors)[0];
        const input = document.getElementById(`${prefix}-${key === 'idNumber' ? 'id' : key}`);
        input?.reportValidity();
        showToast(Object.values(errors)[0], 'ph-warning');
        return false;
      }
      return true;
    }

    function setupFieldValidation() {
      const ids = ['reg-id', 'acc-id', 'pickup-id', 'checkout-inv-id', 'reg-name', 'acc-name',
        'pickup-name', 'checkout-inv-name', 'reg-email', 'acc-email', 'login-email', 'checkout-inv-email',
        'reg-phone', 'acc-phone', 'checkout-card-num', 'checkout-card-exp', 'checkout-card-cvv'];
      ids.forEach(id => {
        const input = document.getElementById(id);
        if (!input) return;
        input.addEventListener('input', () => { input.setCustomValidity(''); input.removeAttribute('aria-invalid'); });
        input.addEventListener('blur', () => {
          const error = fieldValidationError(id);
          input.setCustomValidity(error);
          if (error) input.setAttribute('aria-invalid', 'true');
          else input.removeAttribute('aria-invalid');
        });
      });
      ['reg', 'acc'].forEach(prefix => {
        const select = document.getElementById(`${prefix}-doc-type`);
        const updateMode = () => {
          const input = document.getElementById(`${prefix}-id`);
          if (input) {
            input.setCustomValidity('');
            input.removeAttribute('aria-invalid');
            input.inputMode = select.value === 'Pasaporte' ? 'text' : 'numeric';
            input.maxLength = select.value === 'Pasaporte' ? 30 : 10;
          }
        };
        if (select) { select.addEventListener('change', updateMode); updateMode(); }
      });
    }

    let catalogLoadError = null;
    const CATALOG_CACHE_KEY = `sacha_catalog_v2:${SUPABASE_URL}`;
    const CATALOG_CACHE_TTL = 60000;
    // Respaldo para conservar la navegación si categoria aún no tiene permisos de lectura.
    const DEFAULT_CATEGORIES = [
      { id: '1', parentId: null, slug: 'suplementos', name: 'Suplementos' },
      { id: '2', parentId: '1', slug: 'vitaminas-minerales', name: 'Vitaminas y Minerales' },
      { id: '3', parentId: '1', slug: 'remedios', name: 'Remedios' },
      { id: '4', parentId: '1', slug: 'suplementos-polvo', name: 'Suplementos en Polvo' },
      { id: '8', parentId: null, slug: 'alimentacion-natural', name: 'Alimentación Natural' },
      { id: '9', parentId: '8', slug: 'despensa-vegetariana-vegana', name: 'Despensa Vegetariana & Vegana' },
      { id: '10', parentId: '8', slug: 'snacks-frutos-secos', name: 'Snacks & Frutos Secos' },
      { id: '11', parentId: '8', slug: 'superalimentos', name: 'Superalimentos' }
    ];
    let catalogCategories = DEFAULT_CATEGORIES;

    function getCategoryPath(id) {
      const category = catalogCategories.find(category => category.id === String(id));
      let root = category;
      const visited = new Set();
      while (root?.parentId && !visited.has(root.id)) {
        visited.add(root.id);
        const parent = catalogCategories.find(category => category.id === root.parentId);
        if (!parent) break;
        root = parent;
      }
      return { category, root };
    }

    async function cargarCatalogo() {
      catalogLoadError = null;
      try {
        try {
          const cached = JSON.parse(sessionStorage.getItem(CATALOG_CACHE_KEY) || 'null');
          const age = Date.now() - cached?.timestamp;
          if (cached && age >= 0 && age < CATALOG_CACHE_TTL && Array.isArray(cached.products) && Array.isArray(cached.categories)) {
            catalogCategories = cached.categories;
            return cached.products;
          }
        } catch { /* El catálogo también funciona si el almacenamiento está bloqueado. */ }

        const [{ data, error }, { data: fotos, error: fotosError }, { data: categories, error: categoriesError }] = await Promise.all([
          supabase.from('producto').select('*'),
          supabase.from('imagen_producto')
            .select('img_pro_id, img_url_imagen, img_orden')
            .order('img_orden', { ascending: true }),
          supabase.from('categoria').select('cat_id, cat_categoria_padre_id, cat_codigo_slug, cat_nombre').order('cat_id', { ascending: true })
        ]);

        if (categoriesError) {
          console.warn('No se pudieron leer las categorías; se usará el respaldo local:', categoriesError);
          catalogCategories = DEFAULT_CATEGORIES;
        } else {
          catalogCategories = (categories ?? []).map(category => ({
            id: String(category.cat_id),
            parentId: category.cat_categoria_padre_id == null ? null : String(category.cat_categoria_padre_id),
            slug: category.cat_codigo_slug,
            name: category.cat_nombre
          }));
        }

        if (error) {
          catalogLoadError = error;
          console.error("Error devuelto por Supabase:", error.message);
          return []; 
        }

        const fotosPorProducto = new Map();
        if (fotosError) {
          console.warn('No se pudieron cargar las fotos adicionales del catálogo:', fotosError);
        } else {
          (fotos ?? []).forEach(foto => {
            const id = String(foto.img_pro_id);
            const url = foto.img_url_imagen?.trim();
            if (!url) return;
            if (!fotosPorProducto.has(id)) fotosPorProducto.set(id, []);
            fotosPorProducto.get(id).push(url);
          });
        }

        const products = (data ?? []).map(item => {
          // Usamos minúsculas porque PostgreSQL devuelve las columnas así
          const { category, root } = getCategoryPath(item.pro_cat_id);
          const image = item.pro_imagen_principal_url?.trim() || '';
          const images = [...new Set([
            image,
            ...(fotosPorProducto.get(String(item.pro_id)) ?? [])
          ].filter(Boolean))];

          return {
            id: String(item.pro_id),
            name: item.pro_nombre || '',
            price: Number(item.pro_precio_unitario || 0),
            image: image || images[0] || '',
            images,
            size: item.pro_presentacion_tamano || '',
            shortDesc: item.pro_descripcion_corta || '',
            isFeatured: item.pro_es_destacado || false,
            isBestSeller: item.pro_es_mas_vendido || false,
            isNew: item.pro_es_nuevo || false,
            rating: Number(item.pro_calificacion_promedio || 0),
            reviewsCount: Number(item.pro_total_resenas || 0),

            category: root?.slug || '',
            categoryName: root?.name || '',
            subcategory: category && category !== root ? category.slug : '',
            subcategoryName: category && category !== root ? category.name : '',

            ingredients: item.pro_ingredientes_origen || '',
            usage: item.pro_modo_uso_sugerido || ''
          };
        });

        if (!fotosError && !categoriesError) {
          try {
            sessionStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), products, categories: catalogCategories }));
          } catch { /* No bloquear la carga si no hay espacio para la caché. */ }
        }
        return products;

      } catch (err) {
        catalogLoadError = err;
        console.error('Error ejecutando la consulta:', err);
        return [];
      }
    }

    // Esperar los datos antes de restaurar estados y renderizar la interfaz.
    window.PRODUCTS = await cargarCatalogo();
    const PRODUCTS = window.PRODUCTS;
    renderCatalogCategories();

    /* Estado del carrito y checkout */
    const CART_STORAGE_KEY = 'sacha_pamba_cart';

    function readCartFromStorage() {
      try {
        const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
        return Array.isArray(storedCart) ? storedCart : [];
      } catch {
        return [];
      }
    }

    let cart = readCartFromStorage();

    // Normaliza tipos numéricos, sincroniza precios oficiales y descarta datos corruptos
    function sanitizeCart() {
      if (!Array.isArray(cart)) {
        cart = [];
        return;
      }
      cart = cart
        .map(item => {
          if (!item || !item.id) return null;
          const liveProduct = PRODUCTS.find(p => p.id === item.id);
          const price = liveProduct ? Number(liveProduct.price) : Number(item.price || 0);
          const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);
          return {
            id: item.id,
            name: liveProduct ? liveProduct.name : item.name,
            price: price,
            size: liveProduct ? liveProduct.size : (item.size || 'Presentación regular'),
            image: liveProduct ? liveProduct.image : item.image,
            quantity: quantity
          };
        })
        .filter(item => item && item.quantity > 0);
    }
    sanitizeCart();

    let pendingCheckoutRedirect = null;
    let selectedPaymentMethod = sessionStorage.getItem('sacha_checkout_payment_method') === 'tienda' ? 'tienda' : 'tarjeta';

    function saveCart() {
      sanitizeCart();
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      updateCartUI();
    }

    function reloadCartFromStorage() {
      cart = readCartFromStorage();
      sanitizeCart();
      updateCartUI();
    }

    function updateCartBadge() {
      const badge = document.getElementById('cart-counter-badge');
      const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 0), 0);
      if (badge) {
        badge.textContent = totalCount;
        badge.classList.add('scale-125');
        setTimeout(() => badge.classList.remove('scale-125'), 200);
        const cartLink = badge.closest('a');
        if (cartLink) {
          const visibleLabel = cartLink.querySelector('span:not(#cart-counter-badge)')?.textContent.trim() || 'Carrito';
          cartLink.setAttribute('aria-label', `${visibleLabel}, ${totalCount} ${totalCount === 1 ? 'producto' : 'productos'}`);
        }
      }
    }

    // El carrito respeta la ampliacion de texto y el zoom elegidos por el usuario.
    function updateCartDrawerZoom() {
      const drawer = document.getElementById('cart-side-drawer');
      if (drawer) drawer.style.removeProperty('zoom');
      document.documentElement.style.setProperty('--cart-zoom', '1');
    }

    function toggleCartDrawer() {
      const drawer = document.getElementById('cart-side-drawer');
      if (!drawer) return;
      if (drawer.classList.contains('translate-x-0') || drawer.classList.contains('is-open')) {
        collapseCartDrawer();
      } else {
        openCartDrawer();
      }
    }

    let drawerSlideTimeout = null;
    function triggerDrawerSlide(drawer) {
      if (!drawer) return;
      if (drawerSlideTimeout) clearTimeout(drawerSlideTimeout);
      drawer.classList.add('is-sliding');
      document.body.classList.add('is-sliding');
      drawerSlideTimeout = setTimeout(() => {
        drawer.classList.remove('is-sliding');
        document.body.classList.remove('is-sliding');
        drawerSlideTimeout = null;
      }, 320);
    }

    function openCartDrawer() {
      updateCartDrawerUI();
      updateCartDrawerZoom();
      const drawer = document.getElementById('cart-side-drawer');
      const toggleBtn = document.getElementById('cart-drawer-toggle-btn');
      if (!drawer) return;

      sessionStorage.removeItem('sacha_cart_drawer_dismissed');
      sessionStorage.removeItem('sacha_cart_drawer_collapsed');
      
      triggerDrawerSlide(drawer);
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0', 'is-open');
      drawer.inert = false;
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('cart-drawer-open');
      sessionStorage.setItem('sacha_cart_drawer_open', 'true');

      // Quitar el botón de la flecha del lado cuando el carrito esté desplegado
      if (toggleBtn) {
        toggleBtn.classList.add('hidden');
      }

      // Si se abre mediante navegación por teclado, enfocar la flecha para ocultar
      if (document.body.classList.contains('user-is-tabbing')) {
        const closeBtn = drawer.querySelector('.cart-drawer-header');
        if (closeBtn) closeBtn.focus();
      }
    }

    function collapseCartDrawer(dismissArrow = false, returnFocus = false) {
      const drawer = document.getElementById('cart-side-drawer');
      const toggleBtn = document.getElementById('cart-drawer-toggle-btn');
      if (!drawer) return;

      triggerDrawerSlide(drawer);
      drawer.classList.remove('translate-x-0', 'is-open');
      drawer.classList.add('translate-x-full');
      drawer.inert = true;
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('cart-drawer-open');
      sessionStorage.removeItem('sacha_cart_drawer_open');
      sessionStorage.removeItem('sacha_cart_drawer_dismissed');
      sessionStorage.setItem('sacha_cart_drawer_collapsed', 'true');

      // Al colapsar con la flecha, sí se muestra la pestaña con la flecha en el lateral
      const currentPageUrl = getCurrentPageUrl() || 'index.html';
      if (toggleBtn && !currentPageUrl.includes('carrito.html') && !currentPageUrl.includes('checkout')) {
        toggleBtn.classList.remove('hidden');
      }

      // Si se cierra explícitamente pulsando Enter en la flecha de ocultar, devolver el foco a la flecha de despliegue
      if (returnFocus && toggleBtn) {
        toggleBtn.focus();
      }
    }

    function closeCartDrawer(dismissArrow = false) {
      const drawer = document.getElementById('cart-side-drawer');
      const toggleBtn = document.getElementById('cart-drawer-toggle-btn');
      if (!drawer) return;

      triggerDrawerSlide(drawer);
      drawer.classList.remove('translate-x-0', 'is-open');
      drawer.classList.add('translate-x-full');
      drawer.inert = true;
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('cart-drawer-open');
      sessionStorage.removeItem('sacha_cart_drawer_open');

      if (dismissArrow) {
        // Al hacer clic sobre la X, se cierra y NO se muestra la flecha en el desplegable
        sessionStorage.setItem('sacha_cart_drawer_dismissed', 'true');
        sessionStorage.removeItem('sacha_cart_drawer_collapsed');
        if (toggleBtn) {
          toggleBtn.classList.add('hidden');
        }
      } else {
        const isDismissed = sessionStorage.getItem('sacha_cart_drawer_dismissed') === 'true';
        const isCollapsed = sessionStorage.getItem('sacha_cart_drawer_collapsed') === 'true';
        const currentPageUrl = getCurrentPageUrl() || 'index.html';
        if (toggleBtn) {
          if (!isDismissed && isCollapsed && !currentPageUrl.includes('carrito.html') && !currentPageUrl.includes('checkout')) {
            toggleBtn.classList.remove('hidden');
          } else {
            toggleBtn.classList.add('hidden');
          }
        }
      }
    }

    let toastTimeout = null;

    function hideToast() {
      const toast = document.getElementById('toast');
      if (!toast) return;
      if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
      }
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0');
    }

    function showToast(message, icon = 'ph-check-circle', action = null) {
      const toast = document.getElementById('toast');
      const msgEl = document.getElementById('toast-message');
      const iconEl = document.getElementById('toast-icon');
      const actionBtn = document.getElementById('toast-action');
      if (!toast) return;

      if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
      }

      if (msgEl) msgEl.textContent = message;
      if (iconEl) {
        if (icon && icon.nodeType === 1) {
          iconEl.replaceChildren(icon);
        } else {
          iconEl.replaceChildren(cloneTemplate('ui-icon-template', {icon}));
        }
      }

      if (action && typeof action.onClick === 'function') {
        if (actionBtn) {
          actionBtn.classList.remove('hidden');
          actionBtn.replaceChildren(cloneTemplate('toast-action-template', {label:action.label || 'Deshacer'}));
          actionBtn.onclick = (e) => {
            e.stopPropagation();
            hideToast();
            action.onClick();
          };
        }
      } else {
        if (actionBtn) {
          actionBtn.classList.add('hidden');
          actionBtn.onclick = null;
        }
      }

      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      const duration = action ? (action.duration || 5000) : 2800;
      toastTimeout = setTimeout(() => {
        hideToast();
      }, duration);
    }

    /* ==========================================================================
       GESTIÓN DE PRODUCTOS FAVORITOS
       ========================================================================== */
    const FAVORITES_STORAGE_KEY = 'sacha_pamba_favorites';
    const FAVORITES_UNDO_STORAGE_KEY = 'sacha_pamba_favorites_undo';
    const FAVORITE_UNDO_DURATION = 60_000;

    function getFavorites() {
      try {
        const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (raw === null) {
          // Favoritos predeterminados iniciales para demostración inmediata
          const initial = ['omega-3', 'vitamina-c', 'jarabe-sabila'];
          localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(initial));
          return initial;
        }
        const favorites = JSON.parse(raw);
        return Array.isArray(favorites) ? [...new Set(favorites.filter(id => typeof id === 'string'))] : [];
      } catch (e) {
        return ['omega-3', 'vitamina-c'];
      }
    }

    function saveFavorites(favs) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favs));
      } catch (e) {
        console.error('Error al guardar favoritos:', e);
      }
    }

    function isFavorite(productId) {
      const favs = getFavorites();
      return favs.includes(productId);
    }

    function updateFavoriteUI(productId, isFav) {
      // 1. Actualizar botones en tarjetas de producto
      document.querySelectorAll(`[id="card-fav-btn-${productId}"]`).forEach(btn => {
        btn.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Añadir a favoritos');
        btn.removeAttribute('title');
        if (isFav) {
          btn.className = 'card-fav-btn absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FEFAE0] hover:bg-white text-amber-500 flex items-center justify-center shadow-md border-2 border-brand-forest transition-all active:scale-90 cursor-pointer select-none focus:outline-none';
        } else {
          btn.className = 'card-fav-btn absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#283618]/90 hover:bg-[#283618] text-brand-sunflower flex items-center justify-center shadow-md border border-brand-sunflower/40 transition-all active:scale-90 cursor-pointer select-none focus:outline-none';
        }
        btn.replaceChildren(getHeartIconSVG(isFav, 'w-4 h-4 sm:w-4.5 sm:h-4.5'));
      });

      // 2. Actualizar botón en la vista de detalle de producto
      const detailBtn = document.getElementById(`detail-fav-btn-${productId}`);
      if (detailBtn) {
        detailBtn.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Añadir a favoritos');
        detailBtn.removeAttribute('title');
        if (isFav) {
          detailBtn.className = 'w-full py-3.5 px-3 sm:px-4 rounded-xl bg-[#FEFAE0] hover:bg-white text-brand-forest border-2 border-brand-forest shadow-sm font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none focus:outline-none min-h-[50px] sm:min-h-[52px]';
          detailBtn.replaceChildren(getHeartIconSVG(true, 'w-5 h-5 text-amber-500 flex-shrink-0'), cloneTemplate('favorite-detail-label-template', {id:productId,label:'En favoritos'}));
        } else {
          detailBtn.className = 'w-full py-3.5 px-3 sm:px-4 rounded-xl bg-brand-forest hover:bg-[#1e2912] text-brand-cream border-2 border-brand-forest shadow-sm font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none focus:outline-none min-h-[50px] sm:min-h-[52px]';
          detailBtn.replaceChildren(getHeartIconSVG(false, 'w-5 h-5 text-brand-sunflower flex-shrink-0'), cloneTemplate('favorite-detail-label-template', {id:productId,label:'Añadir a favoritos'}));
        }
      }

      // 3. Actualizar botón sobre la imagen principal en detalle si existe
      const detailImgBtn = document.getElementById(`detail-img-fav-btn-${productId}`);
      if (detailImgBtn) {
        detailImgBtn.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Añadir a favoritos');
        detailImgBtn.removeAttribute('title');
        if (isFav) {
          detailImgBtn.className = 'card-fav-btn absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FEFAE0] hover:bg-white text-amber-500 flex items-center justify-center shadow-md border-2 border-brand-forest transition-all active:scale-90 cursor-pointer select-none focus:outline-none';
        } else {
          detailImgBtn.className = 'card-fav-btn absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#283618]/90 hover:bg-[#283618] text-brand-sunflower flex items-center justify-center shadow-md border border-brand-sunflower/40 transition-all active:scale-90 cursor-pointer select-none focus:outline-none';
        }
        detailImgBtn.replaceChildren(getHeartIconSVG(isFav, 'w-4.5 h-4.5 sm:w-5 sm:h-5'));
      }

      // Micro-pulso sutil e instantáneo en el botón
      document.querySelectorAll(`[id="card-fav-btn-${productId}"], [id="detail-img-fav-btn-${productId}"]`).forEach(btn => {
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 180);
      });
    }

    function toggleFavorite(productId, forceAdd = false) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return false;
      expireFavoriteUndoActions();
      const favs = getFavorites();
      const index = favs.indexOf(productId);
      const wasFavorite = index !== -1;
      const restoreListFocus = !!document.activeElement?.closest('[data-favorites-items]');
      if (forceAdd && wasFavorite) {
        updateFavoriteUI(productId, true);
        return true;
      }

      favs.forEach(id => { if (!favoritesDisplayOrder.includes(id)) favoritesDisplayOrder.push(id); });
      const added = !wasFavorite;
      const canUndoRemoval = !added && currentAccountTab === 'favorites' && !!document.querySelector('[data-favorites-items]');
      if (added) {
        favs.push(productId);
        if (!favoritesDisplayOrder.includes(productId)) favoritesDisplayOrder.push(productId);
      } else {
        favs.splice(index, 1);
        // Una nueva eliminación confirma la anterior y sustituye su opción de deshacer.
        favoriteUndoActions = Object.create(null);
        pendingUndoFavorites = {};
        favoritesDisplayOrder = favoritesDisplayOrder.filter(id => favs.includes(id) || id === productId);
        if (favoriteUndoTimeout !== null) {
          clearTimeout(favoriteUndoTimeout);
          favoriteUndoTimeout = null;
        }
      }
      if (canUndoRemoval) {
        favoriteUndoActions[productId] = {
          before: true,
          after: false,
          origin: 'favorites',
          index,
          expiresAt: Date.now() + FAVORITE_UNDO_DURATION,
          token: `${Date.now()}-${Math.random().toString(36).slice(2)}`
        };
      } else {
        delete favoriteUndoActions[productId];
      }
      saveFavorites(favs);
      saveFavoriteUndoState();
      updateFavoriteUI(productId, added);
      updateFavoritesTabContent();
      if (restoreListFocus) {
        const undo = document.querySelector(`[data-favorite-undo="${productId}"]`);
        const restored = document.getElementById(`fav-card-${productId}`)?.querySelector('button');
        (undo || restored || document.querySelector('[data-favorites-items] button') || document.getElementById('app'))?.focus({ preventScroll: true });
      }

      showToast(
        `"${product.name}" ${added ? 'añadido a tus favoritos' : 'eliminado de favoritos'}`,
        getHeartIconSVG(added, added ? 'w-5 h-5 text-brand-sunflower' : 'w-5 h-5 text-brand-forest')
      );
      return added;
    }

    function readFavoriteUndoState() {
      try {
        const saved = JSON.parse(sessionStorage.getItem(FAVORITES_UNDO_STORAGE_KEY) || '{}');
        const ids = getFavorites();
        const actions = Object.create(null);
        if (saved && saved.actions && typeof saved.actions === 'object') {
          Object.entries(saved.actions).forEach(([id, action]) => {
            if (PRODUCTS.some(product => product.id === id) && action &&
                action.before === true && action.after === false && action.origin === 'favorites' &&
                Number.isInteger(action.index) && action.index >= 0 && typeof action.token === 'string' &&
                Number.isFinite(action.expiresAt) && action.expiresAt > Date.now() &&
                ids.includes(id) === action.after) actions[id] = action;
          });
        }
        const order = Array.isArray(saved?.order) ? [...new Set(saved.order.filter(id => typeof id === 'string'))] : [];
        const latest = Object.entries(actions).sort((a, b) => b[1].expiresAt - a[1].expiresAt)[0];
        const pending = latest ? { [latest[0]]: latest[1] } : Object.create(null);
        return { actions: pending, order: order.filter(id => ids.includes(id) || Object.hasOwn(pending, id)) };
      } catch {
        return { actions: Object.create(null), order: [] };
      }
    }

    function saveFavoriteUndoState() {
      try {
        sessionStorage.setItem(FAVORITES_UNDO_STORAGE_KEY, JSON.stringify({ actions: favoriteUndoActions, order: favoritesDisplayOrder }));
      } catch (error) {
        console.error('No se pudo guardar la opción de deshacer favoritos:', error);
      }
    }

    function expireFavoriteUndoActions() {
      const ids = getFavorites();
      let changed = false;
      Object.entries(favoriteUndoActions).forEach(([id, action]) => {
        if (action.expiresAt <= Date.now() && document.querySelector('[data-favorites-items]:is(:focus-within,:hover)')) {
          action.expiresAt = Date.now() + FAVORITE_UNDO_DURATION;
          changed = true;
        }
        if (!Number.isFinite(action.expiresAt) || action.expiresAt <= Date.now()) {
          delete favoriteUndoActions[id];
          delete pendingUndoFavorites[id];
          if (!ids.includes(id)) favoritesDisplayOrder = favoritesDisplayOrder.filter(productId => productId !== id);
          changed = true;
        }
      });
      if (changed) saveFavoriteUndoState();
      return changed;
    }

    function scheduleFavoriteUndoExpiration() {
      if (favoriteUndoTimeout !== null) {
        clearTimeout(favoriteUndoTimeout);
        favoriteUndoTimeout = null;
      }
      const entry = Object.entries(favoriteUndoActions)[0];
      if (!entry) return;
      const [id, action] = entry;
      favoriteUndoTimeout = setTimeout(() => {
        if (favoriteUndoActions[id]?.token !== action.token) return;
        favoriteUndoTimeout = null;
        expireFavoriteUndoActions();
        updateFavoritesTabContent();
      }, Math.max(0, action.expiresAt - Date.now()));
    }

    function reloadFavoritesFromStorage() {
      const state = readFavoriteUndoState();
      favoriteUndoActions = state.actions;
      favoritesDisplayOrder = state.order;
      updateFavoritesTabContent();
      PRODUCTS.forEach(product => updateFavoriteUI(product.id, isFavorite(product.id)));
    }

    function undoFavoriteChange(productId, expectedToken = null) {
      const restoreListFocus = !!document.activeElement?.closest('[data-favorites-items]');
      if (expireFavoriteUndoActions()) updateFavoritesTabContent();
      const action = favoriteUndoActions[productId];
      if (!action || action.before !== true || action.after !== false || action.origin !== 'favorites' ||
          (expectedToken !== null && action.token !== expectedToken)) return false;
      const favs = getFavorites();
      if (favs.includes(productId) !== action.after) {
        delete favoriteUndoActions[productId];
        saveFavoriteUndoState();
        updateFavoritesTabContent();
        return false;
      }
      const position = favoritesDisplayOrder.indexOf(productId);
      const nextId = position < 0 ? null : favoritesDisplayOrder.slice(position + 1).find(id => favs.includes(id));
      const insertionIndex = position < 0 ? Math.min(action.index, favs.length) : nextId ? favs.indexOf(nextId) : favs.length;
      favs.splice(insertionIndex, 0, productId);
      delete favoriteUndoActions[productId];
      delete pendingUndoFavorites[productId];
      saveFavorites(favs);
      saveFavoriteUndoState();
      updateFavoriteUI(productId, action.before);
      updateFavoritesTabContent();
      if (restoreListFocus) (document.getElementById(`fav-card-${productId}`)?.querySelector('button') || document.querySelector('[data-favorites-items] button') || document.getElementById('app'))?.focus({ preventScroll: true });
      const product = PRODUCTS.find(p => p.id === productId);
      showToast(`Cambio de favoritos deshecho: ${product ? product.name : productId}`);
      return true;
    }

    let cardImageClickTimer = null;
    let detailImageClickTimer = null;

    function handleCardImageClick(event, productId) {
      if (event.target.closest('button') || event.target.closest('a')) return;
      if (cardImageClickTimer) {
        clearTimeout(cardImageClickTimer);
      }
      cardImageClickTimer = setTimeout(() => {
        saveCatalogPosition(productId);
        navigateTo(`producto.html?id=${productId}`);
      }, 260);
    }

    function handleDetailImageClick(eventOrProductId, productIdOrIndex, index) {
      let event = null;
      let productId = eventOrProductId;
      let targetIndex = productIdOrIndex;

      if (eventOrProductId && eventOrProductId.target) {
        event = eventOrProductId;
        productId = productIdOrIndex;
        targetIndex = index;
      }
      if (event && event.target && (event.target.closest('button') || event.target.closest('a'))) return;
      if (detailImageClickTimer) {
        clearTimeout(detailImageClickTimer);
      }
      detailImageClickTimer = setTimeout(() => {
        const finalIndex = typeof targetIndex === 'number' ? targetIndex : getCurrentImageIndex();
        openImageLightbox(productId, finalIndex);
      }, 250);
    }

    function triggerFavoriteDblClick(productId, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      try {
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        }
      } catch (e) {}

      if (cardImageClickTimer) {
        clearTimeout(cardImageClickTimer);
        cardImageClickTimer = null;
      }
      if (detailImageClickTimer) {
        clearTimeout(detailImageClickTimer);
        detailImageClickTimer = null;
      }

      if (!isFavorite(productId)) {
        toggleFavorite(productId, true);
      } else {
        const prod = PRODUCTS.find(p => p.id === productId);
        showToast(`"${prod ? prod.name : 'Producto'}" ya está en tus favoritos`, getHeartIconSVG(true, 'w-5 h-5 text-brand-sunflower'));
        document.querySelectorAll(`[id="card-fav-btn-${productId}"], [id="detail-img-fav-btn-${productId}"]`).forEach(btn => {
          btn.classList.add('scale-110');
          setTimeout(() => btn.classList.remove('scale-110'), 180);
        });
      }
    }

    // Filtros de favoritos en Mi Cuenta
    let filtro_cat = 'all';
    let filtro_subcat = 'all';
    let pendingUndoFavorites = {};
    let favoriteUndoTimeout = null;
    const initialFavoriteUndoState = readFavoriteUndoState();
    let favoriteUndoActions = initialFavoriteUndoState.actions;
    let favoritesDisplayOrder = initialFavoriteUndoState.order;

    // Tarjeta con botón de deshacer en el lugar exacto del producto eliminado en la página de favoritos

    function undoRemoveFavorite(productId) {
      return undoFavoriteChange(productId);
    }

    function getCatalogCategoriesAndSubcategories() {
      const map = {};
      catalogCategories.forEach(category => {
        const { root } = getCategoryPath(category.id);
        if (!root) return;
        if (!map[root.slug]) map[root.slug] = { id: root.slug, name: root.name, subcategories: {} };
        if (category !== root) map[root.slug].subcategories[category.slug] = category.name;
      });
      PRODUCTS.forEach(p => {
        if (!map[p.category]) {
          map[p.category] = {
            id: p.category,
            name: p.categoryName || p.category,
            subcategories: {}
          };
        }
        if (p.subcategory && !map[p.category].subcategories[p.subcategory]) {
          map[p.category].subcategories[p.subcategory] = p.subcategoryName || p.subcategory;
        }
      });
      return map;
    }

    function renderCatalogCategories() {
      const categories = Object.values(getCatalogCategoriesAndSubcategories());
      function categoryUrl(category, subcategory) {
        const query = new URLSearchParams({ cat: category.id });
        if (subcategory) query.set('subcat', subcategory);
        return `categoria.html?${query}`;
      }
      function setLink(link, href, name) {
        link.setAttribute('href', href);
        let label = link.firstElementChild;
        while (label?.lastElementChild?.tagName === 'SPAN') label = label.lastElementChild;
        if (label) {
          label.textContent = name;
          label.style.whiteSpace = 'normal';
          label.style.overflowWrap = 'anywhere';
          link.firstElementChild.style.minWidth = '0';
        }
        link.lastElementChild.textContent = '0';
      }
      function fillDrawer(drawer, category) {
        const all = drawer.querySelector('a').cloneNode(true);
        const sample = drawer.querySelector('a:last-child').cloneNode(true);
        setLink(all, categoryUrl(category), `Todos: ${category.name}`);
        drawer.replaceChildren(all, ...Object.entries(category.subcategories).map(([slug, name]) => {
          const link = sample.cloneNode(true);
          setLink(link, categoryUrl(category, slug), name);
          return link;
        }));
      }

      // Clonar los elementos existentes conserva clases, estructura y tamaños adaptables.
      const accordion = document.getElementById('nav-category-accordion');
      const navSample = accordion?.querySelector('a[href*="cat=suplementos"]')?.closest('.nav-cat-card');
      if (navSample) {
        const template = navSample.cloneNode(true);
        accordion.querySelectorAll('.nav-cat-card').forEach(card => {
          if (!card.querySelector('a[href*="special="]')) card.remove();
        });
        categories.forEach(category => {
          const card = template.cloneNode(true);
          const header = card.querySelector('.nav-cat-header');
          header.setAttribute('aria-label', `Categoría: ${category.name}`);
          header.querySelector('span span').textContent = category.name;
          if (category.id !== 'suplementos') {
            const icon = header.querySelector('i');
            icon.classList.remove('ph-lightning');
            icon.classList.add('ph-plant');
          }
          fillDrawer(card.querySelector('.nav-subcat-drawer'), category);
          accordion.append(card);
        });
      }

      const sidebar = document.querySelector('aside[aria-label="Filtros del catálogo"]');
      const sidebarSample = sidebar?.querySelector('.sidebar-cat-header[data-cat="suplementos"]')?.parentElement;
      if (sidebarSample) {
        const template = sidebarSample.cloneNode(true);
        sidebar.querySelectorAll('.sidebar-cat-header').forEach(header => {
          if (header.dataset.cat !== 'especiales') header.parentElement.remove();
        });
        categories.forEach(category => {
          const card = template.cloneNode(true);
          const header = card.querySelector('.sidebar-cat-header');
          const drawer = card.querySelector('.sidebar-cat-drawer');
          header.dataset.cat = category.id;
          header.setAttribute('aria-controls', `sidebar-drawer-${category.id}`);
          header.querySelector('div > span').textContent = category.name;
          header.querySelector('div > span').style.whiteSpace = 'normal';
          if (category.id !== 'suplementos') {
            const icon = header.querySelector('i');
            icon.classList.remove('ph-lightning');
            icon.classList.add('ph-plant');
          }
          drawer.id = `sidebar-drawer-${category.id}`;
          drawer.setAttribute('aria-label', `Subcategorías de ${category.name}`);
          fillDrawer(drawer, category);
          sidebar.append(card);
        });
      }

      const categorySelect = document.getElementById('sel_cat_fav');
      if (categorySelect) categorySelect.replaceChildren(new Option('Todas las categorías', 'all'), ...categories.map(category => new Option(category.name, category.id)));
      const subcategorySelect = document.getElementById('sel_subcat_fav');
      if (subcategorySelect) {
        subcategorySelect.replaceChildren(new Option('Todas las subcategorías', 'all'), ...categories.flatMap(category =>
          Object.entries(category.subcategories).map(([slug, name]) => {
            const option = new Option(name, slug);
            option.dataset.category = category.id;
            return option;
          })
        ));
      }
    }

    function setFavFilterCategory(cat) {
      filtro_cat = cat;
      filtro_subcat = 'all'; // reiniciar subcategoría al cambiar de categoría
      updateFavoritesTabContent();
    }

    function setFavFilterSubcategory(subcat) {
      filtro_subcat = subcat;
      updateFavoritesTabContent();
    }

    function resetFavFilters() {
      filtro_cat = 'all';
      filtro_subcat = 'all';
      updateFavoritesTabContent();
    }

    // Tarjeta de producto simplificada y perfectamente adaptable exclusiva para el apartado de favoritos

    function addToCart(productId, quantity = 1, redirect = false) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      const numQty = Math.max(1, parseInt(quantity, 10) || 1);
      const existingIndex = cart.findIndex(item => item.id === productId);
      if (existingIndex > -1) {
        const curQty = parseInt(cart[existingIndex].quantity, 10) || 0;
        cart[existingIndex].quantity = curQty + numQty;
        cart[existingIndex].price = Number(product.price);
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: Number(product.price),
          size: product.size,
          image: product.image,
          quantity: numQty
        });
      }
      saveCart();
      showToast(`${product.name} añadido al carrito`);

      if (redirect) {
        closeCartDrawer(true);
        sessionStorage.removeItem('sacha_last_inspected_product_id');
        sessionStorage.removeItem('sacha_catalog_scroll_pos');
        sessionStorage.removeItem('sacha_card_viewport_offset');
        sessionStorage.removeItem('sacha_prev_route');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        navigateTo('carrito.html');
      } else {
        openCartDrawer();
      }
    }

    let lastRemovedCartItem = null;

    function removeFromCart(productId) {
      const itemIndex = cart.findIndex(item => item.id === productId);
      if (itemIndex === -1) return;

      const removedItem = { ...cart[itemIndex] };
      // Garantizar que la cantidad guardada para deshacer sea al menos 1 y nunca 0
      if (!removedItem.quantity || removedItem.quantity <= 0) {
        removedItem.quantity = 1;
      }
      lastRemovedCartItem = { item: removedItem, index: itemIndex };

      cart.splice(itemIndex, 1);
      saveCart();

      showToast(`"${removedItem.name}" retirado del carrito`, 'ph-trash');
    }

    function undoRemoveFromCart() {
      if (!lastRemovedCartItem && !lastClearedCart) return;

      if (lastClearedCart && (!lastRemovedCartItem || lastClearedCart.length > 0)) {
        cart = lastClearedCart;
        lastClearedCart = null;
        lastRemovedCartItem = null;
        saveCart();
        showToast('Productos restaurados en el carrito', 'ph-arrow-u-up-left');
        return;
      }

      const { item, index } = lastRemovedCartItem;

      // Asegurar siempre que regrese con cantidad de al menos 1 y nunca 0
      const restoredQuantity = Math.max(1, parseInt(item.quantity, 10) || 1);
      const prod = PRODUCTS.find(p => p.id === item.id);
      const restoredPrice = prod ? Number(prod.price) : Number(item.price || 0);
      const itemToRestore = { 
        ...item, 
        price: restoredPrice,
        quantity: restoredQuantity 
      };

      // Si el producto fue añadido nuevamente entretanto
      const existing = cart.find(i => i.id === itemToRestore.id);
      if (existing) {
        existing.quantity = (parseInt(existing.quantity, 10) || 0) + restoredQuantity;
        existing.price = restoredPrice;
      } else {
        if (typeof index === 'number' && index >= 0 && index <= cart.length) {
          cart.splice(index, 0, itemToRestore);
        } else {
          cart.push(itemToRestore);
        }
      }

      const restoredName = itemToRestore.name;
      lastRemovedCartItem = null;
      saveCart();

      showToast(`"${restoredName}" restaurado al carrito`, 'ph-arrow-u-up-left');
    }

    const accessibleDialogs = [];
    const dialogInertStates = new Map();
    let dialogBodyWasLocked = false;

    function dialogFocusableElements(dialog) {
      return [...dialog.querySelectorAll('a[href],button,input,select,textarea,[tabindex]')]
        .filter(element => element.tabIndex >= 0 && !element.disabled && !element.closest('[inert]') && element.getClientRects().length);
    }

    function refreshDialogBackground() {
      const active = accessibleDialogs.at(-1)?.dialog;
      if (active) {
        for (const element of document.body.children) {
          if (['SCRIPT', 'TEMPLATE'].includes(element.tagName) || element.id === 'toast') continue;
          if (!dialogInertStates.has(element)) dialogInertStates.set(element, element.inert);
          element.inert = element !== active;
        }
        active.inert = false;
        document.body.classList.add('overflow-hidden');
      } else {
        dialogInertStates.forEach((inert, element) => { element.inert = inert; });
        dialogInertStates.clear();
        document.body.classList.toggle('overflow-hidden', dialogBodyWasLocked);
        document.querySelectorAll('[aria-modal="true"]').forEach(dialog => { dialog.inert = dialog.classList.contains('hidden'); });
        const drawer = document.getElementById('cart-side-drawer');
        if (drawer) drawer.inert = drawer.getAttribute('aria-hidden') === 'true';
      }
    }

    function showAccessibleDialog(dialog, initialFocus = null) {
      if (!dialog) return;
      if (!accessibleDialogs.length) dialogBodyWasLocked = document.body.classList.contains('overflow-hidden');
      if (!accessibleDialogs.some(entry => entry.dialog === dialog)) accessibleDialogs.push({ dialog, returnFocus: document.activeElement });
      dialog.classList.remove('hidden');
      dialog.setAttribute('aria-hidden', 'false');
      dialog.inert = false;
      refreshDialogBackground();
      const focus = initialFocus || dialogFocusableElements(dialog)[0] || dialog;
      focus.focus({ preventScroll: true });
    }

    function hideAccessibleDialog(dialog) {
      if (!dialog) return;
      const index = accessibleDialogs.findIndex(entry => entry.dialog === dialog);
      if (index < 0) return;
      const entry = index < 0 ? null : accessibleDialogs.splice(index, 1)[0];
      dialog.classList.add('hidden');
      dialog.setAttribute('aria-hidden', 'true');
      dialog.inert = true;
      refreshDialogBackground();
      const focus = entry?.returnFocus;
      if (focus?.isConnected && focus !== document.body && !focus.closest('[inert]')) focus.focus({ preventScroll: true });
      else (accessibleDialogs.at(-1)?.dialog || document.getElementById('app'))?.focus({ preventScroll: true });
    }

    let pendingRemoveProductId = null;

    function openConfirmRemoveModal(item) {
      if (!item) return;
      pendingRemoveProductId = item.id;

      const modal = document.getElementById('confirm-remove-modal');
      const titleEl = document.getElementById('confirm-remove-title');
      const metaEl = document.getElementById('confirm-remove-meta');
      const imgEl = document.getElementById('confirm-remove-img');

      if (titleEl) titleEl.textContent = item.name;
      if (metaEl) metaEl.textContent = `${item.size ? item.size + ' · ' : ''}$${Number(item.price).toFixed(2)}`;
      if (imgEl) {
        imgEl.src = item.image;
        imgEl.alt = item.name;
      }

      if (modal) {
        showAccessibleDialog(modal);
      }
    }

    function closeConfirmRemoveModal() {
      pendingRemoveProductId = null;
      const modal = document.getElementById('confirm-remove-modal');
      if (modal) {
        hideAccessibleDialog(modal);
      }
    }

    function confirmRemoveProduct() {
      if (!pendingRemoveProductId) {
        closeConfirmRemoveModal();
        return;
      }
      const idToRemove = pendingRemoveProductId;
      closeConfirmRemoveModal();
      removeFromCart(idToRemove);
    }

    function updateCartQuantity(productId, delta) {
      const item = cart.find(i => i.id === productId);
      if (!item) return;

      const currentQty = Math.max(1, parseInt(item.quantity, 10) || 1);
      const numDelta = parseInt(delta, 10) || 0;

      // Si se hace clic sobre el '-' y la cantidad es 1 (o menor), mostrar ventana de advertencia
      if (numDelta < 0 && currentQty <= 1) {
        openConfirmRemoveModal(item);
        return;
      }

      const nextQuantity = currentQty + numDelta;
      if (nextQuantity <= 0) {
        item.quantity = 1;
        removeFromCart(productId);
        return;
      }
      item.quantity = nextQuantity;

      // Sincronizar precio oficial por seguridad
      const prod = PRODUCTS.find(p => p.id === productId);
      if (prod) item.price = Number(prod.price);

      saveCart();
    }

    let lastClearedCart = null;
    function clearCart() {
      if (!cart || cart.length === 0) return;
      lastClearedCart = cart.map(item => ({
        ...item,
        quantity: Math.max(1, item.quantity || 1)
      }));
      cart = [];
      saveCart();
      resetCheckoutProgress();
      showToast('Se ha vaciado el carrito', 'ph-trash');
    }

    const navBtn = document.getElementById('nav-category-btn');
    const navMenu = document.getElementById('nav-category-menu');
    const navBackdrop = document.getElementById('nav-category-backdrop');
    const navCaret = document.getElementById('nav-category-caret');
    const navClose = document.getElementById('nav-category-close');
    const navAccordion = document.getElementById('nav-category-accordion');

    function openNavCategoryMenu() {
      if (!navMenu) return;
      if (navMenu.classList.contains('hidden')) {
        collapseNavCategories();
        navMenu.classList.remove('hidden');
        if (navBackdrop) navBackdrop.classList.remove('hidden');
        if (navCaret) navCaret.classList.add('rotate-180');
        if (navBtn) {
          navBtn.classList.add('bg-white/15', 'text-white');
          navBtn.setAttribute('aria-expanded', 'true');
        }
      }
    }

    function toggleNavCategoryMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (navMenu && navMenu.classList.contains('hidden')) {
        openNavCategoryMenu();
      } else {
        closeNavCategoryMenu();
      }
    }

    function collapseNavCategories() {
      if (!navAccordion) return;
      navAccordion.querySelectorAll('.nav-subcat-drawer').forEach(d => d.classList.add('hidden'));
      navAccordion.querySelectorAll('.nav-cat-caret').forEach(c => c.classList.remove('rotate-180'));
      navAccordion.querySelectorAll('.nav-cat-header').forEach(h => h.setAttribute('aria-expanded', 'false'));
    }

    function closeNavCategoryMenu() {
      if (!navMenu) return;
      navMenu.classList.add('hidden');
      if (navBackdrop) navBackdrop.classList.add('hidden');
      if (navCaret) navCaret.classList.remove('rotate-180');
      if (navBtn) {
        navBtn.classList.remove('bg-white/15', 'text-white');
        navBtn.setAttribute('aria-expanded', 'false');
      }
      collapseNavCategories();
    }

    if (navBtn) navBtn.addEventListener('click', toggleNavCategoryMenu);
    if (navClose) navClose.addEventListener('click', (e) => { e.stopPropagation(); closeNavCategoryMenu(); });
    if (navBackdrop) navBackdrop.addEventListener('click', closeNavCategoryMenu);

    if (navAccordion) {
      navAccordion.querySelectorAll('.nav-cat-header').forEach(header => {
        const toggleAccordion = (e) => {
          e.stopPropagation();
          const card = header.closest('.nav-cat-card');
          const drawer = card ? card.querySelector('.nav-subcat-drawer') : null;
          const caret = card ? card.querySelector('.nav-cat-caret') : null;

          if (drawer) {
            const isClosed = drawer.classList.contains('hidden');
            collapseNavCategories();
            if (isClosed) {
              drawer.classList.remove('hidden');
              if (caret) caret.classList.add('rotate-180');
              header.setAttribute('aria-expanded', 'true');
            } else {
              header.setAttribute('aria-expanded', 'false');
            }
          }
        };

        header.addEventListener('click', toggleAccordion);
        header.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion(e);
          }
        });
      });
    }

    if (navMenu) {
      navMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeNavCategoryMenu);
      });
    }

    function setupLiveSearch(inputId, dropdownId) {
      const input = document.getElementById(inputId);
      const dropdown = document.getElementById(dropdownId);
      if (!input || !dropdown) return;
      input.setAttribute('aria-controls', dropdownId);
      input.addEventListener('keydown', event => {
        if (event.key === 'Escape') dropdown.classList.add('hidden');
        if (event.key === 'ArrowDown' && !dropdown.classList.contains('hidden')) {
          event.preventDefault();
          dropdown.querySelector('a')?.focus();
        }
      });
      dropdown.addEventListener('keydown', event => {
        if (event.key === 'Escape') { dropdown.classList.add('hidden'); input.focus(); }
        if (['ArrowDown','ArrowUp'].includes(event.key)) {
          event.preventDefault();
          const links = [...dropdown.querySelectorAll('a')];
          const next = links.indexOf(document.activeElement) + (event.key === 'ArrowDown' ? 1 : -1);
          (links[next] || input).focus();
        }
      });
      input.form?.addEventListener('submit', event => {
        event.preventDefault();
        if (!dropdown.classList.contains('hidden')) dropdown.querySelector('a')?.click();
      });

      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          dropdown.replaceChildren();
          dropdown.classList.add('hidden');
          return;
        }

        const filtered = PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.shortDesc.toLowerCase().includes(query) ||
          p.subcategoryName.toLowerCase().includes(query)
        ).slice(0, 5);

        if (filtered.length === 0) {
          dropdown.replaceChildren(cloneTemplate('search-empty-template', { query }));
          dropdown.classList.remove('hidden');
          return;
        }

        dropdown.replaceChildren(...filtered.map(product => cloneTemplate('search-item-template', productValues(product))));
        dropdown.classList.remove('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }

    setupLiveSearch('live-search-input', 'search-dropdown');
    setupLiveSearch('live-search-input-mobile', 'search-dropdown-mobile');

    function escapeHtml(str) {
      return String(str ?? '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function getLastVisitedProduct() {
      try {
        const stored = sessionStorage.getItem('sacha_last_visited_product');
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    }

    function setLastVisitedProduct(prod) {
      try {
        sessionStorage.setItem('sacha_last_visited_product', JSON.stringify(prod));
      } catch (e) {}
    }

    function saveCatalogPosition(productId) {
      let currentPageUrl = getCurrentPageUrl() || 'index.html';
      if (currentPageUrl.includes('cuenta.html') && (!currentPageUrl.includes('tab=') || currentAccountTab === 'favorites')) {
        currentPageUrl = 'cuenta.html?tab=' + (currentAccountTab || 'favorites');
      }
      if (!currentPageUrl.startsWith('producto.html')) {
        sessionStorage.setItem('sacha_prev_route', currentPageUrl);
        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        sessionStorage.setItem('sacha_catalog_scroll_pos', String(scrollY));
        if (productId) {
          sessionStorage.setItem('sacha_last_inspected_product_id', productId);
          const card = document.getElementById(`fav-card-${productId}`) || document.getElementById(`product-card-${productId}`);
          if (card) {
            const rect = card.getBoundingClientRect();
            sessionStorage.setItem('sacha_card_viewport_offset', String(rect.top));
          }
        }
      }
    }

    function handleBackToProducts() {
      const prevRoute = sessionStorage.getItem('sacha_prev_route');
      let targetRoute = 'categoria.html';
      if (prevRoute && (prevRoute.startsWith('categoria.html') || prevRoute.startsWith('productos.html') || prevRoute.startsWith('index.html') || prevRoute.includes('cuenta.html'))) {
        targetRoute = prevRoute;
      }
      navigateTo(targetRoute);
    }

    function handleProductCardClick(event, id) {
      if (event.target.closest('button') || event.target.closest('a') || event.target.closest('.product-card-image-box') || event.target.closest('.card-fav-btn')) {
        return;
      }
      saveCatalogPosition(id);
      navigateTo(`producto.html?id=${id}`);
    }

    function adjustProductQty(delta) {
      const input = document.getElementById('detail-qty');
      if (!input) return;
      let val = parseInt(input.value) || 1;
      val = Math.max(1, Math.min(20, val + delta));
      input.value = val;
    }

    let currentDetailGalleryIndex = 0;
    let lightboxCurrentGallery = [];
    let lightboxCurrentIndex = 0;
    let lightboxOpenRequest = 0;
    const preparedProductImages = new Map();
    const productImageRequests = new WeakMap();
    const renderedLightboxGalleries = new WeakMap();

    function prepareProductImage(src, priority = 'low') {
      if (preparedProductImages.has(src)) {
        const entry = preparedProductImages.get(src);
        if (priority === 'high') entry.image.fetchPriority = 'high';
        return entry;
      }
      const image = new Image();
      image.decoding = 'async';
      image.fetchPriority = priority;
      const entry = { image, ready: false };
      entry.promise = new Promise(resolve => {
        const fail = () => {
          if (preparedProductImages.get(src) === entry) preparedProductImages.delete(src);
          resolve(false);
        };
        image.onerror = fail;
        image.onload = () => {
          const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve();
          decoded.then(() => {
            entry.ready = true;
            resolve(true);
          }, fail);
        };
      });
      preparedProductImages.set(src, entry);
      image.src = src;
      return entry;
    }

    function showPreparedProductImage(img, src, onShown = () => {}) {
      if (img.id !== 'lightbox-img') src = getProductImage(src, 'detail');
      const request = {};
      productImageRequests.set(img, request);
      const commit = (loaded, displaySrc = src) => {
        if (!loaded || !img.isConnected || productImageRequests.get(img) !== request) return false;
        if (img.getAttribute('src') !== displaySrc) img.src = displaySrc;
        onShown();
        return true;
      };
      if (img.getAttribute('src') === src && img.complete && img.naturalWidth > 0) {
        return Promise.resolve(commit(true));
      }
      const showOriginal = () => {
        const entry = prepareProductImage(src, 'high');
        return entry.ready ? Promise.resolve(commit(true)) : entry.promise.then(commit);
      };
      const previewSrc = getProductImage(src, 'detail');
      if (img.id === 'lightbox-img' && previewSrc !== src && !preparedProductImages.get(src)?.ready) {
        const preview = prepareProductImage(previewSrc, 'high');
        const showPreview = loaded => {
          if (!loaded) return showOriginal();
          if (!commit(true, previewSrc)) return false;
          // Abrir enseguida con la vista ligera y mejorarla al llegar el original.
          showOriginal();
          return true;
        };
        return preview.ready ? Promise.resolve(showPreview(true)) : preview.promise.then(showPreview);
      }
      return showOriginal();
    }

    function getCurrentImageIndex() {
      return currentDetailGalleryIndex || 0;
    }

    function switchProductImage(imageSrc, btnElement, imageIndex = 0) {
      const mainImg = document.getElementById('main-product-img');
      if (!mainImg || !imageSrc) return;
      return showPreparedProductImage(mainImg, imageSrc, () => {
        currentDetailGalleryIndex = imageIndex;

        const thumbnails = document.querySelectorAll('.product-thumb-btn');
        thumbnails.forEach(btn => {
          btn.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-forest/30 opacity-75 hover:opacity-100 bg-brand-cream p-1.5 transition-all shadow-sm cursor-pointer';
        });

        if (btnElement) {
          btnElement.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-[3px] border-brand-forest ring-2 ring-brand-sunflower scale-105 opacity-100 bg-brand-cream p-1.5 transition-all shadow-md cursor-pointer';
        }
      });
    }

    function openImageLightbox(productId, imageIndex = 0) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      const gallery = (product.images && product.images.length > 0) ? product.images : [product.image];
      lightboxCurrentGallery = gallery;
      lightboxCurrentIndex = Math.max(0, Math.min(gallery.length - 1, parseInt(imageIndex, 10) || 0));
      const request = ++lightboxOpenRequest;

      const modal = document.getElementById('image-lightbox-modal');
      const titleEl = document.getElementById('lightbox-product-title');
      if (titleEl) titleEl.textContent = product.name;

      return updateLightboxImage().then(shown => {
        if (!shown || request !== lightboxOpenRequest || !modal) return;
        showAccessibleDialog(modal);
      });
    }

    function syncDetailGalleryImage(index) {
      const mainImg = document.getElementById('main-product-img');
      if (!mainImg || !lightboxCurrentGallery[index]) return;
      const button = document.querySelectorAll('.product-thumb-btn')[index];
      return switchProductImage(lightboxCurrentGallery[index], button, index);
    }

    function navigateLightboxImage(delta) {
      if (!lightboxCurrentGallery || lightboxCurrentGallery.length <= 1) return;
      lightboxCurrentIndex = (lightboxCurrentIndex + delta + lightboxCurrentGallery.length) % lightboxCurrentGallery.length;
      updateLightboxImage();
      syncDetailGalleryImage(lightboxCurrentIndex);
    }

    function navigateLightboxImageTo(index) {
      if (!lightboxCurrentGallery || index < 0 || index >= lightboxCurrentGallery.length) return;
      lightboxCurrentIndex = index;
      updateLightboxImage();
      syncDetailGalleryImage(lightboxCurrentIndex);
    }

    function closeImageLightbox() {
      lightboxOpenRequest++;
      const modal = document.getElementById('image-lightbox-modal');
      if (!modal) return;
      hideAccessibleDialog(modal);
    }

    function handleAddToCartFromDetail(productId, redirect) {
      const input = document.getElementById('detail-qty');
      const qty = input ? (parseInt(input.value) || 1) : 1;
      if (redirect) {
        sessionStorage.removeItem('sacha_last_inspected_product_id');
        sessionStorage.removeItem('sacha_catalog_scroll_pos');
        sessionStorage.removeItem('sacha_card_viewport_offset');
        sessionStorage.removeItem('sacha_prev_route');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
      addToCart(productId, qty, redirect);
    }

    /* Base de Datos de Opiniones y Reseñas */
    const PRODUCT_REVIEWS_DB = {
      'vitamina-c': [
        {
          name: 'Andrea Proaño',
          date: '18 de Septiembre, 2026',
          rating: 5,
          comment: 'Excelente sabor natural y no produce acidez gástrica en lo absoluto. La retiré en la González Suárez en menos de 2 horas después de pedirla por la web.',
          verified: true
        },
        {
          name: 'Patricio Benalcázar',
          date: '02 de Septiembre, 2026',
          rating: 5,
          comment: 'Se nota la pureza del camu camu silvestre. Me ha servido muchísimo para evitar los resfriados con el clima cambiante de Quito.',
          verified: true
        }
      ],
      'omega-3': [
        {
          name: 'Valeria Cárdenas',
          date: '25 de Septiembre, 2026',
          rating: 5,
          comment: 'La mejor fuente vegetal de omega. No deja regusto a pescado porque es 100% de sacha inchi puro. Recomiendo retirarlo en la botica, la atención es impecable.',
          verified: true
        }
      ],
      'cloruro-magnesio': [
        {
          name: 'Dr. Fernando Salazar',
          date: '22 de Septiembre, 2026',
          rating: 5,
          comment: 'Cristales puros de disolución rápida. Excelente para la contractura muscular y para regular el sueño. Buen precio y presentación.',
          verified: true
        }
      ],
      'jarabe-sabila': [
        {
          name: 'Mercedes Alarcón',
          date: '27 de Septiembre, 2026',
          rating: 5,
          comment: 'Alivió mi reflujo desde el tercer día. El propóleo y la miel andina le dan un sabor agradable y suave. Se agradece que no tenga químicos.',
          verified: true
        }
      ],
      'capsulas-propoleo': [
        {
          name: 'Gabriela Moncayo',
          date: '19 de Septiembre, 2026',
          rating: 5,
          comment: 'Un reconstituyente físico formidable. Me da energía limpia y protege la garganta. Excelente calidad de polen de altura.',
          verified: true
        }
      ],
      'maca': [
        {
          name: 'Mateo Roldán',
          date: '29 de Septiembre, 2026',
          rating: 5,
          comment: 'La maca gelatinizada es notablemente más suave con el estómago que la cruda. La mezclo cada mañana en mi batido y la energía dura todo el día.',
          verified: true
        }
      ],
      'cacao': [
        {
          name: 'Felipe Santillán',
          date: '20 de Septiembre, 2026',
          rating: 5,
          comment: 'Aroma profundo y notas frutales auténticas de cacao fino criollo. Sin pizca de azúcar artificial. Una joya agroecológica de Los Ríos.',
          verified: true
        }
      ],
      'sacha-inchi-polvo': [
        {
          name: 'Javier Espinosa',
          date: '12 de Septiembre, 2026',
          rating: 5,
          comment: 'Excelente proteína para después del gimnasio. Fácil digestión y perfil de aminoácidos completo. Me alegra encontrarla en Quito.',
          verified: true
        }
      ],
      'moringa': [
        {
          name: 'Cecilia Noboa',
          date: '17 de Septiembre, 2026',
          rating: 4,
          comment: 'Polvo verde muy fresco y vivo. Lo mezclo con jugo de naranja para aprovechar el hierro. Muy nutritivo y rendidor.',
          verified: true
        }
      ],
      'colageno': [
        {
          name: 'Silvia Zambrano',
          date: '28 de Septiembre, 2026',
          rating: 5,
          comment: 'Se disuelve al instante sin grumos y no sabe a nada raro gracias a la vitamina C natural de camu camu. Mis articulaciones y rodillas lo han agradecido mucho.',
          verified: true
        }
      ]
    };

    let currentReviewUploadedImage = null;

    function getPickedUpProducts() {
      const stored = localStorage.getItem('sacha_pamba_picked_up_products');
      if (stored) return JSON.parse(stored);
      const initial = ['vitamina-c'];
      localStorage.setItem('sacha_pamba_picked_up_products', JSON.stringify(initial));
      return initial;
    }

    function isProductPickedUp(productId) {
      return getPickedUpProducts().includes(productId);
    }

    function toggleProductPickupDemo(productId) {
      let list = getPickedUpProducts();
      if (list.includes(productId)) {
        list = list.filter(id => id !== productId);
        showToast('Producto marcado como NO retirado aún', 'ph-info');
      } else {
        list.push(productId);
        showToast('¡Producto marcado como retirado en tienda física!', 'ph-seal-check');
      }
      localStorage.setItem('sacha_pamba_picked_up_products', JSON.stringify(list));
      syncCurrentPage();
    }

    function openReviewModal(productId) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      const user = getCurrentUser();
      const modal = document.getElementById('review-modal');
      const nameInput = document.getElementById('modal-review-name');
      const commentInput = document.getElementById('modal-review-comment');
      const prodIdInput = document.getElementById('modal-review-product-id');
      const prodNameEl = document.getElementById('review-modal-product-name');

      if (!modal) return;
      prodIdInput.value = product.id;
      if (prodNameEl) prodNameEl.textContent = `${product.name} (${product.size})`;
      if (nameInput) nameInput.value = user ? user.name : '';
      if (commentInput) commentInput.value = '';

      setModalRating(5);
      removeModalReviewImage();
      showAccessibleDialog(modal, nameInput);
    }

    function closeReviewModal() {
      const modal = document.getElementById('review-modal');
      if (modal) hideAccessibleDialog(modal);
      currentReviewUploadedImage = null;
    }

    function setModalRating(stars) {
      const ratingInput = document.getElementById('modal-review-rating');
      const label = document.getElementById('modal-rating-label');
      if (ratingInput) ratingInput.value = stars;
      if (label) label.textContent = `${stars} de 5 estrellas`;

      const buttons = document.querySelectorAll('#modal-star-picker .star-btn');
      buttons.forEach((btn, idx) => {
        btn.setAttribute('aria-label', `${idx + 1} de 5 estrellas`);
        btn.setAttribute('aria-pressed', String(idx + 1 === stars));
        const icon = btn.querySelector('i');
        if (icon) icon.className = `${idx < stars ? 'ph-fill' : 'ph'} ph-star`;
        if (idx < stars) {
          btn.className = 'star-btn text-amber-500 transition-transform active:scale-90';
        } else {
          btn.className = 'star-btn text-brand-leaf/30 hover:text-amber-500 transition-transform active:scale-90';
        }
      });
    }

    function triggerReviewFileUpload() {
      const fileInput = document.getElementById('modal-review-file');
      if (fileInput) fileInput.click();
    }

    const reviewUploadPrompt = document.getElementById('modal-review-upload-prompt');
    reviewUploadPrompt?.parentElement?.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      triggerReviewFileUpload();
    });
    reviewUploadPrompt?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        triggerReviewFileUpload();
      }
    });

    function handleModalReviewImage(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Por favor selecciona un archivo de imagen válido', 'ph-warning');
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        currentReviewUploadedImage = e.target.result;
        const preview = document.getElementById('modal-review-image-preview');
        const previewBox = document.getElementById('modal-review-image-preview-box');
        const uploadPrompt = document.getElementById('modal-review-upload-prompt');
        const fileNameEl = document.getElementById('modal-review-file-name');

        if (preview) preview.src = currentReviewUploadedImage;
        if (fileNameEl) fileNameEl.textContent = file.name;
        if (previewBox) previewBox.classList.remove('hidden');
        if (uploadPrompt) uploadPrompt.classList.add('hidden');
      };
      reader.readAsDataURL(file);
    }

    function removeModalReviewImage(e) {
      if (e) e.stopPropagation();
      currentReviewUploadedImage = null;
      const fileInput = document.getElementById('modal-review-file');
      const previewBox = document.getElementById('modal-review-image-preview-box');
      const uploadPrompt = document.getElementById('modal-review-upload-prompt');

      if (fileInput) fileInput.value = '';
      if (previewBox) previewBox.classList.add('hidden');
      if (uploadPrompt) uploadPrompt.classList.remove('hidden');
    }

    function submitReviewModal(e) {
      e.preventDefault();
      const productId = document.getElementById('modal-review-product-id').value;
      const rating = parseInt(document.getElementById('modal-review-rating').value) || 5;
      const name = document.getElementById('modal-review-name').value.trim();
      const comment = document.getElementById('modal-review-comment').value.trim();

      if (!productId || !name || !comment) return;

      const newReview = {
        name: name,
        date: new Date().toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' }),
        rating: rating,
        comment: comment,
        verified: true,
        image: currentReviewUploadedImage || null
      };

      const storedKey = `reviews_${productId}`;
      const existing = localStorage.getItem(storedKey) 
        ? JSON.parse(localStorage.getItem(storedKey)) 
        : (PRODUCT_REVIEWS_DB[productId] ? [...PRODUCT_REVIEWS_DB[productId]] : []);

      existing.unshift(newReview);
      localStorage.setItem(storedKey, JSON.stringify(existing));

      const container = document.getElementById('product-reviews-list');
      if (container) {
        updateProductReviews(productId);
      }

      closeReviewModal();
      showToast('¡Gracias! Tu reseña y foto han sido publicadas con éxito', 'ph-star');

      setTimeout(() => {
        const reviewsSection = document.getElementById('customer-reviews-section');
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
    }

    // --- Gestión de progreso en el flujo de compra ---
    function getMaxCheckoutStep() {
      if (!cart || cart.length === 0) {
        sessionStorage.removeItem('sacha_max_checkout_step');
        return 1;
      }
      const val = parseInt(sessionStorage.getItem('sacha_max_checkout_step'), 10);
      return (!isNaN(val) && val >= 1) ? val : 1;
    }

    function recordCheckoutStep(step) {
      if (!cart || cart.length === 0) {
        sessionStorage.removeItem('sacha_max_checkout_step');
        return;
      }
      const current = getMaxCheckoutStep();
      if (step > current) {
        sessionStorage.setItem('sacha_max_checkout_step', String(step));
      }
    }

    function resetCheckoutProgress() {
      sessionStorage.removeItem('sacha_max_checkout_step');
    }

    function handleProceedToCheckout(e) {
      if (e) e.preventDefault();
      const user = getCurrentUser();
      if (!user) {
        pendingCheckoutRedirect = 'checkout-retiro.html';
        openAuthModal('register', 'Inicia sesión o regístrate para proceder con tu compra.');
        return;
      }
      navigateTo('checkout-retiro.html');
    }

    function handleStepperNav(url) {
      if (url.startsWith('checkout') && !getCurrentUser()) {
        pendingCheckoutRedirect = url;
        openAuthModal('register', 'Inicia sesión o regístrate para proceder con tu compra.');
        return;
      }
      if (url.startsWith('checkout-pago') && document.getElementById('pickup-name')) {
        const name = document.getElementById('pickup-name');
        const id = document.getElementById('pickup-id');
        if (!validateFields(['pickup-name', 'pickup-id'])) return;
        sessionStorage.setItem('sacha_web_pickup', JSON.stringify({ name: name.value.trim(), idNumber: id.value.trim(), docType: checkoutDocumentType(id.value, getCurrentUser()) }));
      }
      navigateTo(url);
    }

    function getCheckoutPaymentAccessibilityText() {
      return selectedPaymentMethod === 'tarjeta'
        ? 'Opción seleccionada: Tarjeta de débito o crédito. Campos a completar para tarjeta: número de tarjeta, fecha de expiración y código CVV. Campos a completar para factura: razón social o nombre completo, cédula o RUC, y correo electrónico.'
        : 'Opción seleccionada: Pagar al retirar en tienda física. Campos a completar para factura: razón social o nombre completo, cédula o RUC, y correo electrónico.';
    }

    function selectPaymentOption(option) {
      selectedPaymentMethod = option;
      sessionStorage.setItem('sacha_checkout_payment_method', option);
      const subtotal = Number(cartValues().total);
      const cardContainer = document.getElementById('card-fields-container');
      const tiendaContainer = document.getElementById('tienda-info-container');
      const btnText = document.getElementById('btn-confirm-checkout-text');
      const btnTarjeta = document.getElementById('pay-opt-tarjeta');
      const btnTienda = document.getElementById('pay-opt-tienda');
      if (btnTarjeta) btnTarjeta.tabIndex = option === 'tarjeta' ? 0 : -1;
      if (btnTienda) btnTienda.tabIndex = option === 'tienda' ? 0 : -1;

      if (option === 'tarjeta') {
        if (cardContainer) cardContainer.classList.remove('hidden');
        if (tiendaContainer) tiendaContainer.classList.add('hidden');
        if (btnTarjeta) {
          btnTarjeta.className = 'border-2 border-brand-forest bg-[#CCD5AE] rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border';
          btnTarjeta.setAttribute('aria-checked', 'true');
        }
        if (btnTienda) {
          btnTienda.className = 'border-2 border-brand-forest/20 bg-brand-cream opacity-80 hover:opacity-100 rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border';
          btnTienda.setAttribute('aria-checked', 'false');
        }
        if (btnText) btnText.textContent = `Pagar $${subtotal.toFixed(2)} y Confirmar Pedido`;
      } else {
        if (cardContainer) cardContainer.classList.add('hidden');
        if (tiendaContainer) tiendaContainer.classList.remove('hidden');
        if (btnTarjeta) {
          btnTarjeta.className = 'border-2 border-brand-forest/20 bg-brand-cream opacity-80 hover:opacity-100 rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border';
          btnTarjeta.setAttribute('aria-checked', 'false');
        }
        if (btnTienda) {
          btnTienda.className = 'border-2 border-brand-forest bg-[#CCD5AE] rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border';
          btnTienda.setAttribute('aria-checked', 'true');
        }
        if (btnText) btnText.textContent = `Confirmar Pedido y Pagar al Retirar ($${subtotal.toFixed(2)})`;
      }
      const paymentAccessibilityText = document.getElementById('checkout-pago-a11y-texto');
      if (paymentAccessibilityText) paymentAccessibilityText.textContent = getCheckoutPaymentAccessibilityText();
    }

    async function processPayment() {
      if (!getCurrentUser()) {
        pendingCheckoutRedirect = 'checkout-pago.html';
        openAuthModal('login');
        return;
      }
      const fields = ['checkout-inv-name', 'checkout-inv-id', 'checkout-inv-email'];
      if (selectedPaymentMethod === 'tarjeta') fields.unshift('checkout-card-num', 'checkout-card-exp', 'checkout-card-cvv');
      if (!validateFields(fields)) return;
      await submitAccountRequest(document.getElementById('btn-confirm-checkout')?.closest('form'), async () => {
        const pickup = JSON.parse(sessionStorage.getItem('sacha_web_pickup') || 'null') || {
          name: getCurrentUser().name, idNumber: getCurrentUser().idNumber
        };
        const pickupError = nameError(pickup.name) || documentError(pickup.docType || checkoutDocumentType(pickup.idNumber, getCurrentUser()), pickup.idNumber);
        if (pickupError) throw new Error(pickupError);
        pickup.docType ||= checkoutDocumentType(pickup.idNumber, getCurrentUser());
        pickup.billing = {
          name: document.getElementById('checkout-inv-name').value.trim(),
          idNumber: document.getElementById('checkout-inv-id').value.trim(),
          email: document.getElementById('checkout-inv-email').value.trim()
        };
        const signature = JSON.stringify([getCurrentUser().id, cart.map(item => [item.id, item.quantity]), selectedPaymentMethod, pickup]);
        let saved = JSON.parse(sessionStorage.getItem('sacha_web_checkout_request') || 'null');
        if (!saved || saved.signature !== signature) {
          saved = { signature, id: crypto.randomUUID() };
          sessionStorage.setItem('sacha_web_checkout_request', JSON.stringify(saved));
        }
        const order = await accountService.createOrder(cart, selectedPaymentMethod, saved.id, pickup);
        cart = [];
        saveCart();
        resetCheckoutProgress();
        sessionStorage.removeItem('sacha_web_checkout_request');
        sessionStorage.removeItem('sacha_web_pickup');
        sessionStorage.removeItem('sacha_checkout_payment_method');
        showToast('Pedido ' + order.number + ' registrado para pagar al retirar.', 'ph-check-circle');
        navigateTo('checkout-confirmacion.html');
      });
    }

    // Variable de pestaña activa en Mi Cuenta
    let currentAccountTab = 'personal';

    function switchAccountTab(tabKey) {
      currentAccountTab = tabKey;
      try {
        history.replaceState(null, '', 'cuenta.html?tab=' + tabKey);
      } catch (e) {}
      const tabPersonal = document.getElementById('account-tab-personal');
      const tabOrders = document.getElementById('account-tab-orders');
      const tabFavorites = document.getElementById('account-tab-favorites');
      const btnPersonal = document.getElementById('tab-btn-personal');
      const btnOrders = document.getElementById('tab-btn-orders');
      const btnFavorites = document.getElementById('tab-btn-favorites');

      if (!tabPersonal || !tabOrders || !tabFavorites || !btnPersonal || !btnOrders || !btnFavorites) return;

      const activeClass = "flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base cursor-pointer bg-brand-forest text-brand-sunflower border-2 border-brand-forest shadow-md w-full min-h-[52px] sm:min-h-[56px] text-center";
      const inactiveClass = "flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base cursor-pointer bg-[#FEFAE0] text-brand-forest border-2 border-brand-forest hover:bg-[#CCD5AE]/30 w-full min-h-[52px] sm:min-h-[56px] text-center";

      tabPersonal.classList.add('hidden');
      tabOrders.classList.add('hidden');
      tabFavorites.classList.add('hidden');

      btnPersonal.className = inactiveClass;
      btnOrders.className = inactiveClass;
      btnFavorites.className = inactiveClass;

      btnPersonal.setAttribute('aria-selected', tabKey === 'personal' ? 'true' : 'false');
      btnOrders.setAttribute('aria-selected', tabKey === 'orders' ? 'true' : 'false');
      btnFavorites.setAttribute('aria-selected', tabKey === 'favorites' ? 'true' : 'false');
      btnPersonal.tabIndex = tabKey === 'personal' ? 0 : -1;
      btnOrders.tabIndex = tabKey === 'orders' ? 0 : -1;
      btnFavorites.tabIndex = tabKey === 'favorites' ? 0 : -1;

      if (tabKey === 'personal') {
        tabPersonal.classList.remove('hidden');
        btnPersonal.className = activeClass;
      } else if (tabKey === 'orders') {
        tabOrders.classList.remove('hidden');
        btnOrders.className = activeClass;
      } else if (tabKey === 'favorites') {
        tabFavorites.classList.remove('hidden');
        btnFavorites.className = activeClass;
        updateFavoritesTabContent();
      }
      btnFavorites.replaceChildren(getHeartIconSVG(tabKey === 'favorites', 'w-5 h-5 flex-shrink-0'), cloneTemplate('favorites-tab-label-template'));
    }

    function getAllOrders() {
      return accountService.orders;
    }

    function saveAllOrders() {
      // El historial solo se obtiene de la base de datos.
      return getAllOrders();
    }

    function changeOrderStatus() {
      showToast('El estado del pedido lo actualiza la tienda.', 'ph-info');
      syncCurrentPage();
    }

    function toggleStatusDropdown(key, event) {
      if (event) event.stopPropagation();
      const menu = document.getElementById(`status-menu-${key}`);
      const btn = document.getElementById(`status-btn-${key}`);
      if (!menu) return;

      const isHidden = menu.classList.contains('hidden');

      // Cerrar otros menús abiertos
      document.querySelectorAll('[id^="status-menu-"]').forEach(m => m.classList.add('hidden'));
      document.querySelectorAll('[id^="status-btn-"]').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const caret = b.querySelector('.ph-caret-down');
        if (caret) caret.classList.remove('rotate-180');
      });

      if (isHidden) {
        menu.classList.remove('hidden');
        if (btn) {
          btn.setAttribute('aria-expanded', 'true');
          btn.setAttribute('aria-controls', menu.id);
          menu.setAttribute('aria-labelledby', btn.id);
          const caret = btn.querySelector('.ph-caret-down');
          if (caret) caret.classList.add('rotate-180');
        }
        const options = [...menu.querySelectorAll('[role="option"]')];
        const selected = options.find(option => option.getAttribute('aria-selected') === 'true') || options[0];
        options.forEach(option => { option.tabIndex = option === selected ? 0 : -1; });
        selected?.focus();
      }
    }

    function selectCustomOrderStatus(orderNumber, newStatus) {
      const triggerId = document.activeElement.closest('[role="listbox"]')?.getAttribute('aria-labelledby');
      document.querySelectorAll('[id^="status-menu-"]').forEach(m => m.classList.add('hidden'));
      changeOrderStatus(orderNumber, newStatus);
      if (triggerId) document.getElementById(triggerId)?.focus();
    }

    function toggleOrderItemsView(containerId, buttonEl) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const isHidden = container.classList.contains('hidden');

      if (isHidden) {
        container.classList.remove('hidden');
        if (buttonEl) {
          const caret = buttonEl.querySelector('.ph-caret-down');
          if (caret) caret.classList.add('rotate-180');
        }
      } else {
        container.classList.add('hidden');
        if (buttonEl) {
          const caret = buttonEl.querySelector('.ph-caret-down');
          if (caret) caret.classList.remove('rotate-180');
        }
      }
    }

    function getPageName() {
      return window.location.pathname.split('/').pop() || 'index.html';
    }

    function getCurrentPageUrl() {
      return (window.location.pathname.split('/').pop() || 'index.html') + window.location.search;
    }

    function updateActiveNav(path = getPageName()) {
      const currentUrl = new URL(window.location.href);
      const links = [...document.querySelectorAll('.nav-section-link')];
      const candidates = links.filter(link => {
        const href = link.getAttribute('href');
        if (!href) return false;
        const url = new URL(href, currentUrl);
        return url.origin === currentUrl.origin && (url.pathname.split('/').pop() || 'index.html') === path;
      });
      const activeLink = candidates.find(link => {
        const url = new URL(link.getAttribute('href'), currentUrl);
        return url.hash && url.hash === currentUrl.hash;
      }) || candidates.find(link => !new URL(link.getAttribute('href'), currentUrl).hash);

      links.forEach(link => {
        if (link === activeLink) {
          link.classList.add('bg-brand-olive', 'text-brand-forest', 'shadow-xs');
          link.classList.remove('bg-white/10', 'text-brand-cream/90');
          link.setAttribute('aria-current', new URL(link.getAttribute('href'), currentUrl).hash ? 'location' : 'page');
        } else {
          link.classList.remove('bg-brand-olive', 'text-brand-forest', 'shadow-xs');
          link.classList.add('text-brand-cream/90');
          link.removeAttribute('aria-current');
        }
      });
    }

    // Actualizar datos tras una acci?n en la p?gina actual, sin navegar entre vistas.

    function navigateTo(url) {
      const destination = new URL(url, window.location.href);
      const path = destination.pathname.split('/').pop() || 'index.html';
      if (path === 'carrito.html' || path.startsWith('checkout')) closeCartDrawer();
      if (destination.href === window.location.href) return;
      window.location.assign(destination.href);
    }

    function setupNavigationPrefetch() {
      if (!/^https?:$/.test(window.location.protocol)) return;
      const connection = navigator.connection;
      if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')) return;
      const prefetched = new Set();
      const supported = document.createElement('link').relList.supports('prefetch');
      if (!supported) return;

      function prepareNavigation(event) {
        const anchor = event.target.closest('a[href]');
        if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
        const url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin || !url.pathname.endsWith('.html') ||
            (url.pathname === window.location.pathname && url.search === window.location.search)) return;
        url.hash = '';
        if (prefetched.has(url.href) || prefetched.size >= 8) return;
        prefetched.add(url.href);
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'document';
        link.href = url.href;
        document.head.append(link);
      }

      // Warm the destination on intent; links, history and checkout keep native navigation.
      document.addEventListener('pointerover', prepareNavigation, { passive: true });
      document.addEventListener('focusin', prepareNavigation);
      document.addEventListener('touchstart', prepareNavigation, { passive: true });
    }

    let heroAutoplayTimer = null;
    let currentHeroSlide = 0;

    function initHeroCarousel() {
      if (heroAutoplayTimer) {
        clearInterval(heroAutoplayTimer);
        heroAutoplayTimer = null;
      }

      const carousel = document.getElementById('hero-carousel');
      if (!carousel) return;

      const slides = carousel.querySelectorAll('.hero-slide');
      const dots = carousel.querySelectorAll('.hero-dot');
      const prevBtn = document.getElementById('hero-prev-btn');
      const nextBtn = document.getElementById('hero-next-btn');
      const pauseBtn = document.getElementById('hero-pause-btn');
      const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
      let userPaused = motionPreference.matches;
      let hovered = false;

      if (!slides.length) return;

      currentHeroSlide = 0;

      function updateSlide(index, announce = false) {
        if (index < 0) {
          currentHeroSlide = slides.length - 1;
        } else if (index >= slides.length) {
          currentHeroSlide = 0;
        } else {
          currentHeroSlide = index;
        }

        slides.forEach((slide, i) => {
          slide.inert = i !== currentHeroSlide;
          if (i === currentHeroSlide) {
            slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0', 'invisible');
            slide.classList.add('opacity-100', 'pointer-events-auto', 'z-10');
            slide.removeAttribute('aria-hidden');
            slide.setAttribute('aria-current', 'true');
          } else {
            slide.classList.remove('opacity-100', 'pointer-events-auto', 'z-10');
            slide.classList.add('opacity-0', 'pointer-events-none', 'z-0', 'invisible');
            slide.setAttribute('aria-hidden', 'true');
            slide.removeAttribute('aria-current');
          }
        });
        if (announce) {
          const status = document.getElementById('hero-announcement');
          if (status) status.textContent = `Diapositiva ${currentHeroSlide + 1} de ${slides.length}`;
        }

        dots.forEach((dot, i) => {
          if (i === currentHeroSlide) {
            dot.classList.remove('bg-white/40', 'w-3');
            dot.classList.add('bg-white', 'w-8');
            dot.setAttribute('aria-current', 'true');
          } else {
            dot.classList.remove('bg-white', 'w-8');
            dot.classList.add('bg-white/40', 'w-3');
            dot.removeAttribute('aria-current');
          }
        });
      }

      function nextSlide(manual = false) {
        updateSlide(currentHeroSlide + 1, manual);
      }

      function prevSlide(manual = false) {
        updateSlide(currentHeroSlide - 1, manual);
      }

      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide(true);
          resetTimer();
        };
      }

      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide(true);
          resetTimer();
        };
      }

      dots.forEach(dot => {
        dot.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const targetIndex = parseInt(dot.getAttribute('data-hero-slide'), 10);
          if (!isNaN(targetIndex)) {
            updateSlide(targetIndex, true);
            resetTimer();
          }
        };
      });

      function startTimer() {
        if (heroAutoplayTimer) clearInterval(heroAutoplayTimer);
        heroAutoplayTimer = null;
        if (userPaused || hovered || document.hidden || carousel.contains(document.activeElement)) return;
        heroAutoplayTimer = setInterval(nextSlide, 5000);
      }

      function resetTimer() {
        startTimer();
      }

      const carouselGroup = carousel.closest('.group') || carousel;
      carouselGroup.onmouseenter = () => {
        hovered = true;
        if (heroAutoplayTimer) {
          clearInterval(heroAutoplayTimer);
          heroAutoplayTimer = null;
        }
      };

      carouselGroup.onmouseleave = () => {
        hovered = false;
        startTimer();
      };
      carouselGroup.addEventListener('focusin', startTimer);
      carouselGroup.addEventListener('focusout', () => queueMicrotask(startTimer));
      document.addEventListener('visibilitychange', startTimer);
      const updatePauseButton = () => {
        if (!pauseBtn) return;
        pauseBtn.textContent = userPaused ? 'Reanudar' : 'Pausar';
        pauseBtn.setAttribute('aria-pressed', String(userPaused));
      };
      if (pauseBtn) pauseBtn.onclick = () => { userPaused = !userPaused; updatePauseButton(); startTimer(); };
      motionPreference.addEventListener('change', event => {
        if (event.matches) { userPaused = true; updatePauseButton(); startTimer(); }
      });
      updatePauseButton();

      // Soporte táctil (swipe) para dispositivos móviles
      let touchStartX = 0;
      carousel.ontouchstart = (e) => {
        if (e.touches && e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
        }
      };
      carousel.ontouchend = (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          const touchEndX = e.changedTouches[0].clientX;
          const diff = touchStartX - touchEndX;
          if (Math.abs(diff) > 40) {
            if (diff > 0) {
              nextSlide(true);
            } else {
              prevSlide(true);
            }
            resetTimer();
          }
        }
      };

      updateSlide(0);
      startTimer();
    }

    function setupHomeProductTabs() {
      let currentActiveTab = 'destacados';

      const tabData = {
        'destacados': {
          filter: (p) => p.isFeatured
        },
        'mas-vendidos': {
          filter: (p) => p.isBestSeller
        },
        'nuevos': {
          filter: (p) => p.isNew
        }
      };

      function switchTab(tabKey) {
        if (tabKey === currentActiveTab) return;
        const config = tabData[tabKey];
        if (!config) return;
        currentActiveTab = tabKey;

        // Actualizar los productos inmediatamente, incluso al cambiar de pestaña rápidamente.
        const gridEl = document.getElementById('home-products-grid');
        if (gridEl) {
          const products = PRODUCTS.filter(config.filter).slice(0, 4);
          gridEl.replaceChildren(...products.map(product => cloneTemplate('product-card-template', productValues(product))));
          products.forEach(product => updateFavoriteUI(product.id, isFavorite(product.id)));
        }

        // Actualizar el texto accesible de Selección Especial indicando qué elemento está seleccionado
        const a11yEl = document.getElementById('seleccion-especial-a11y-texto');
        const tabNamesMap = {
          'destacados': 'Productos Destacados',
          'mas-vendidos': 'Los Más Vendidos',
          'nuevos': 'Productos Nuevos'
        };
        const currentSelectedName = tabNamesMap[tabKey] || 'Productos Destacados';
        if (a11yEl) {
          const otherNames = Object.keys(tabNamesMap)
            .filter(k => k !== tabKey)
            .map(k => tabNamesMap[k])
            .concat(['Ver todos'])
            .join(', ');
          a11yEl.textContent = `Selección Especial. Pestaña actualmente seleccionada: ${currentSelectedName}. Otras opciones disponibles: ${otherNames}.`;
        }
        const productsSection = document.getElementById('home-products-section');
        if (productsSection) {
          productsSection.setAttribute('aria-label', currentSelectedName);
        }

        // Actualizar estilos y atributos ARIA en la barra de opciones (.tab-link-btn)
        document.querySelectorAll('.tab-link-btn').forEach(btn => {
          const isSelected = btn.getAttribute('data-product-tab') === tabKey;
          const dot = btn.querySelector('.tab-pulse-dot');
          const tabName = tabNamesMap[btn.getAttribute('data-product-tab')] || 'Pestaña';
          btn.setAttribute('aria-pressed', String(isSelected));
          btn.setAttribute('aria-label', isSelected ? `${tabName}, pestaña seleccionada` : `${tabName}, pestaña`);
          if (isSelected) {
            btn.classList.add('is-active', 'border-brand-forest', 'text-brand-cream', 'bg-brand-forest', 'font-extrabold', 'shadow-sm', 'cursor-default');
            btn.classList.remove('border-transparent', 'text-brand-forest/80', 'hover:text-brand-forest', 'hover:bg-black/5', 'font-bold', 'cursor-pointer');
            if (dot) {
              dot.classList.remove('hidden');
              dot.classList.add('inline-block');
            }
          } else {
            btn.classList.remove('is-active', 'border-brand-forest', 'text-brand-cream', 'bg-brand-forest', 'font-extrabold', 'shadow-sm', 'cursor-default');
            btn.classList.add('border-transparent', 'text-brand-forest/80', 'hover:text-brand-forest', 'hover:bg-black/5', 'font-bold', 'cursor-pointer');
            if (dot) {
              dot.classList.add('hidden');
              dot.classList.remove('inline-block');
            }
          }
        });

        // Desplazamiento suave eliminado para evitar cualquier movimiento en la página
      }

      // Registrar eventos para la barra superior
      document.querySelectorAll('.tab-link-btn').forEach(btn => {
        btn.onclick = (e) => {
          e.preventDefault();
          const tabKey = btn.getAttribute('data-product-tab');
          switchTab(tabKey);
        };
      });
    }

    function setupDynamicListeners() {
      initHeroCarousel();
      setupHomeProductTabs();

      document.querySelectorAll('.sidebar-cat-header').forEach(header => {
        header.addEventListener('click', (e) => {
          const isCaretClick = !!e.target.closest('.ph-caret-down');
          const cat = header.getAttribute('data-cat');
          const isSpecial = (cat === 'especiales');
          const currentSpecial = new URLSearchParams(window.location.search).get('special');
          const currentCat = new URLSearchParams(window.location.search).get('cat');

          // Si se hace clic en la categoría y aún no está seleccionada, seleccionarla y abrirla
          if (!isCaretClick) {
            if (isSpecial && !currentSpecial) {
              navigateTo('categoria.html?special=all');
              return;
            }
            if (!isSpecial && (currentCat !== cat || currentSpecial)) {
              navigateTo(`categoria.html?${new URLSearchParams({ cat })}`);
              return;
            }
          }

          // Si ya está activa o se pulsó la flecha, alternar apertura/cierre
          const drawer = header.nextElementSibling;
          const caret = header.querySelector('.ph-caret-down');
          if (drawer) {
            const isHidden = drawer.classList.toggle('hidden');
            header.setAttribute('aria-expanded', String(!isHidden));
            if (caret) caret.classList.toggle('rotate-180', !isHidden);
            if (isHidden) {
              header.classList.remove('rounded-t-2xl');
              header.classList.add('rounded-2xl');
            } else {
              header.classList.remove('rounded-2xl');
              header.classList.add('rounded-t-2xl');
            }
          }
        });
      });

      function updateFaqA11yText() {
        const a11yEl = document.getElementById('faq-a11y-texto');
        if (!a11yEl) return;

        const faqData = [
          {
            btn: document.getElementById('faq-btn-1'),
            q: '¿Cómo funciona el retiro en la tienda física de Quito?',
            a: 'Una vez confirmado tu pedido, lo empacamos en un lapso de 2 horas. Puedes acercarte a nuestra tienda en la Av. González Suárez 420 y Coruña con tu cédula y número de pedido (#NAT-XXXX). El retiro no tiene ningún costo.'
          },
          {
            btn: document.getElementById('faq-btn-2'),
            q: '¿Los productos y extractos tienen certificación agroecológica?',
            a: 'Sí. Todos nuestros productos, suplementos y superalimentos provienen de cosechas agroecológicas y recolección silvestre sustentable en Napo, Pastaza y Cayambe, libres de pesticidas químicos.'
          },
          {
            btn: document.getElementById('faq-btn-3'),
            q: '¿Puedo pagar en efectivo o tarjeta al momento de retirar?',
            a: '¡Por supuesto! Durante el paso de pago en la web puedes seleccionar "Pagar al Retirar" y abonar en caja con efectivo, tarjeta de débito/crédito o transferencia bancaria directa.'
          },
          {
            btn: document.getElementById('faq-btn-4'),
            q: '¿Emiten factura con validez tributaria para el SRI?',
            a: 'Sí, emitimos facturación electrónica autorizada por el SRI enviada directamente a tu correo electrónico al procesarse la compra.'
          }
        ];

        let partes = ['Preguntas frecuentes.'];
        faqData.forEach((item, idx) => {
          partes.push(`Pregunta ${idx + 1}: ${item.q}`);
          const isExpanded = item.btn && item.btn.getAttribute('aria-expanded') === 'true';
          if (isExpanded) {
            partes.push(`Respuesta a la pregunta ${idx + 1}: ${item.a}`);
          }
        });

        a11yEl.textContent = partes.join(' ');
      }

      document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('.ph-caret-down');
          if (content) {
            const isHidden = content.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(!isHidden));
            if (icon) icon.classList.toggle('rotate-180', !isHidden);
            if (isHidden) {
              btn.classList.remove('rounded-t-3xl', 'bg-[#5a6b4e]', 'text-brand-cream');
              btn.classList.add('rounded-3xl');
            } else {
              btn.classList.remove('rounded-3xl');
              btn.classList.add('rounded-t-3xl', 'bg-[#5a6b4e]', 'text-brand-cream');
            }
            updateFaqA11yText();
          }
        });
      });

      updateFaqA11yText();
    }

    function getCurrentUser() {
      return accountService.user;
    }

    function setCurrentUser() {
      // Los datos de acceso solo cambian mediante Supabase Auth.
      updateAuthUI();
    }

    function updateAuthUI() {
      const user = getCurrentUser();
      const authLabel = document.getElementById('nav-auth-label');
      const authBtn = document.getElementById('nav-auth-btn');
      if (!authLabel || !authBtn) return;

      if (user) {
        authLabel.textContent = 'Mi Cuenta';
        authBtn.setAttribute('title', `Conectado como ${user.name}`);
        authBtn.setAttribute('aria-label', `Mi cuenta, conectado como ${user.name}`);
      } else {
        authLabel.textContent = 'Iniciar Sesión';
        authBtn.setAttribute('title', 'Iniciar sesión o registrarse');
        authBtn.setAttribute('aria-label', 'Mi cuenta: Iniciar sesión');
      }
    }

    const authModal = document.getElementById('auth-modal');
    const authCloseBtn = document.getElementById('auth-modal-close');
    const navAuthBtn = document.getElementById('nav-auth-btn');

    function openAuthModal(tab = 'login', customNotice = null, welcomeOffer = false) {
      if (!authModal) return;
      registrationOfferRequested = tab === 'register' && welcomeOffer === true;
      switchAuthTab(tab);

      if (customNotice) {
        showToast(customNotice, 'ph-shopping-cart');
      } else if (pendingCheckoutRedirect) {
        showToast('Inicia sesión o regístrate para continuar con tu pedido.', 'ph-shopping-cart');
      }

      authModal.scrollTop = 0;
      const modalBody = document.getElementById('auth-modal-body');
      if (modalBody) modalBody.scrollTop = 0;
      showAccessibleDialog(authModal, document.getElementById(tab === 'login' ? 'login-email' : 'reg-name'));
    }

    function closeAuthModal() {
      if (!authModal) return;
      hideAccessibleDialog(authModal);
      if (pendingCheckoutRedirect) {
        const currentPath = getPageName();
        if (currentPath.startsWith('checkout') || currentPath === 'cuenta.html') {
          const fallbackUrl = currentPath.startsWith('checkout') ? 'carrito.html' : 'index.html';
          if (getCurrentPageUrl() !== fallbackUrl) {
            window.location.replace(fallbackUrl);
          }
        }
        pendingCheckoutRedirect = null;
      }
    }

    function switchAuthTab(tab) {
      if (typeof clearAuthFormErrors === 'function') clearAuthFormErrors();
      const formLogin = document.getElementById('form-login');
      const formRegister = document.getElementById('form-register');
      const btnLogin = document.getElementById('tab-login-btn');
      const btnRegister = document.getElementById('tab-register-btn');
      document.getElementById('auth-panel-login')?.classList.toggle('hidden', tab !== 'login');
      document.getElementById('auth-panel-register')?.classList.toggle('hidden', tab !== 'register');
      btnLogin.tabIndex = tab === 'login' ? 0 : -1;
      btnRegister.tabIndex = tab === 'register' ? 0 : -1;

      if (tab === 'login') {
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
        btnLogin.className = 'py-2.5 rounded-xl text-center transition-all bg-brand-sunflower text-brand-leaf shadow-sm cursor-pointer';
        btnRegister.className = 'py-2.5 rounded-xl text-center transition-all text-brand-cream/80 hover:text-white cursor-pointer';
        btnLogin.setAttribute('aria-selected', 'true');
        btnRegister.setAttribute('aria-selected', 'false');
      } else {
        formLogin.classList.add('hidden');
        formRegister.classList.remove('hidden');
        btnRegister.className = 'py-2.5 rounded-xl text-center transition-all bg-brand-sunflower text-brand-leaf shadow-sm cursor-pointer';
        btnLogin.className = 'py-2.5 rounded-xl text-center transition-all text-brand-cream/80 hover:text-white cursor-pointer';
        btnRegister.setAttribute('aria-selected', 'true');
        btnLogin.setAttribute('aria-selected', 'false');
      }
      if (authModal) authModal.scrollTop = 0;
      const modalBody = document.getElementById('auth-modal-body');
      if (modalBody) modalBody.scrollTop = 0;
    }

    if (navAuthBtn) {
      navAuthBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const user = getCurrentUser();
        if (user) {
          const currentPath = getPageName();
          if (currentPath === 'cuenta.html') {
            showToast('Ya te encuentras en Mi Cuenta', 'ph-user');
            return;
          }
          navigateTo('cuenta.html');
        } else {
          openAuthModal('login');
        }
      });
    }

    if (authCloseBtn) authCloseBtn.addEventListener('click', closeAuthModal);
    if (authModal) {
      authModal.addEventListener('click', (e) => {
        if (!e.target.closest('#auth-modal-card')) closeAuthModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      const lightboxModal = document.getElementById('image-lightbox-modal');
      if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeImageLightbox();
          return;
        } else if (e.key === 'ArrowLeft') {
          navigateLightboxImage(-1);
          return;
        } else if (e.key === 'ArrowRight') {
          navigateLightboxImage(1);
          return;
        }
      }
      if (e.key === 'Escape' && authModal && !authModal.classList.contains('hidden')) {
        closeAuthModal();
      }
    });

    const imageLightboxModal = document.getElementById('image-lightbox-modal');
    if (imageLightboxModal) {
      imageLightboxModal.addEventListener('click', (e) => {
        // Solo cerrar si el clic fue directamente en el fondo oscuro exterior
        if (e.target === imageLightboxModal) {
          closeImageLightbox();
        }
      });
    }

    const confirmRemoveModal = document.getElementById('confirm-remove-modal');
    if (confirmRemoveModal) {
      confirmRemoveModal.addEventListener('click', (e) => {
        if (e.target === confirmRemoveModal) closeConfirmRemoveModal();
      });
    }

    function showFieldError(inputId, errId, message) {
      const input = document.getElementById(inputId);
      const err = document.getElementById(errId);
      const focusFirstError = !input?.form?.querySelector('[aria-invalid="true"]');
      if (input) {
        input.classList.remove('border-brand-olive', 'border-brand-forest');
        input.classList.add('border-red-500');
        input.setAttribute('aria-invalid', 'true');
        const descriptions = new Set((input.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
        descriptions.add(errId);
        input.setAttribute('aria-describedby', [...descriptions].join(' '));
      }
      if (err) {
        if (message) {
          const span = err.querySelector('span');
          if (span) span.textContent = message;
          else err.textContent = message;
        }
        err.classList.remove('hidden');
      }
      if (focusFirstError) input?.focus();
    }

    function clearFieldValidation(inputId) {
      const input = document.getElementById(inputId);
      const err = document.getElementById(inputId + '-err');
      if (input) {
        input.setCustomValidity('');
        input.classList.remove('border-red-500');
        input.classList.add('border-brand-olive');
        input.removeAttribute('aria-invalid');
      }
      if (err) {
        err.classList.add('hidden');
      }
    }

    function clearAuthFormErrors() {
      ['login-email', 'login-password', 'reg-name', 'reg-email', 'reg-phone', 'reg-id', 'reg-password', 'reg-confirm-password'].forEach(id => {
        clearFieldValidation(id);
      });
      const matchMsg = document.getElementById('reg-password-match-msg');
      if (matchMsg) {
        matchMsg.classList.add('hidden');
        matchMsg.textContent = '';
      }
      const pass = document.getElementById('reg-password');
      if (!pass || !pass.value) {
        const reqs = document.getElementById('reg-password-reqs');
        if (reqs) reqs.classList.add('hidden');
        const confirmWrapper = document.getElementById('reg-confirm-password-wrapper');
        if (confirmWrapper) confirmWrapper.classList.add('hidden');
      }
    }

    function updateRegPasswordRequirements(val) {
      const hasLength = val.length >= 8;
      const hasUpper = /[A-Z]/.test(val);
      const hasNumber = /[0-9]/.test(val);
      const hasSpecial = /[^A-Za-z0-9]/.test(val);

      setReqStatus('reg-req-length', hasLength);
      setReqStatus('reg-req-uppercase', hasUpper);
      setReqStatus('reg-req-number', hasNumber);
      setReqStatus('reg-req-special', hasSpecial);

      return hasLength && hasUpper && hasNumber && hasSpecial;
    }

    function handleRegPasswordInputChange(val) {
      const reqsContainer = document.getElementById('reg-password-reqs');
      const wrapper = document.getElementById('reg-confirm-password-wrapper');
      const confirmInput = document.getElementById('reg-confirm-password');
      const matchMsg = document.getElementById('reg-password-match-msg');
      const passErr = document.getElementById('reg-password-err');
      if (passErr) passErr.classList.add('hidden');
      const passInput = document.getElementById('reg-password');
      if (passInput) {
        passInput.classList.remove('border-red-500');
        passInput.classList.add('border-brand-olive');
      }

      if (val.length > 0) {
        if (reqsContainer) reqsContainer.classList.remove('hidden');
      } else {
        if (reqsContainer) reqsContainer.classList.add('hidden');
      }

      const allMet = updateRegPasswordRequirements(val);

      if (allMet && val.length > 0) {
        if (wrapper && wrapper.classList.contains('hidden')) {
          wrapper.classList.remove('hidden');
        }
        validateRegPasswordMatch();
      } else {
        if (wrapper) wrapper.classList.add('hidden');
        if (confirmInput) {
          confirmInput.value = '';
          confirmInput.classList.remove('border-green-600', 'border-red-500');
          confirmInput.classList.add('border-brand-olive');
        }
        if (matchMsg) {
          matchMsg.classList.add('hidden');
          matchMsg.textContent = '';
        }
      }
    }

    function validateRegPasswordMatch() {
      const passInput = document.getElementById('reg-password');
      const confirmInput = document.getElementById('reg-confirm-password');
      const matchMsg = document.getElementById('reg-password-match-msg');
      if (!passInput || !confirmInput || !matchMsg) return false;

      const pass = passInput.value;
      const confirmPass = confirmInput.value;

      matchMsg.classList.remove('hidden');

      if (confirmPass.length === 0) {
        matchMsg.replaceChildren(cloneTemplate('password-match-failed-template'));
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-olive');
        confirmInput.classList.add('border-red-500');
        return false;
      }

      if (pass === confirmPass) {
        matchMsg.replaceChildren(cloneTemplate('password-match-success-template'));
        matchMsg.className = 'text-xs font-bold text-green-800 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-red-500', 'border-brand-olive');
        confirmInput.classList.add('border-green-600');
        return true;
      } else {
        matchMsg.replaceChildren(cloneTemplate('password-match-failed-template'));
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-olive');
        confirmInput.classList.add('border-red-500');
        return false;
      }
    }

    async function handleLoginSubmit(e) {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passInput ? passInput.value : '';

      let hasError = false;

      if (!password) {
        showFieldError('login-password', 'login-password-err', 'Por favor, ingresa tu contraseña.');
        hasError = true;
      }

      if (!email) {
        showFieldError('login-email', 'login-email-err', 'Por favor, ingresa tu correo electrónico.');
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError('login-email', 'login-email-err', 'Por favor, ingresa un formato de correo válido.');
        hasError = true;
      }

      if (hasError) {
        showToast('Completa todos los campos obligatorios para iniciar sesión.', 'ph-warning-circle');
        return;
      }

      await submitAccountRequest(document.getElementById('form-login'), async () => {
        const user = await accountService.signIn(email, password);
        passInput.value = '';
        updateAuthUI();
        const destination = pendingCheckoutRedirect;
        pendingCheckoutRedirect = null;
        closeAuthModal();
        showToast('Bienvenido, ' + user.name);
        navigateTo(destination || 'cuenta.html');
      });
    }

    async function handleRegisterSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const usernameInput = document.getElementById('reg-username');
      const username = usernameInput ? usernameInput.value.trim() : '';
      const phone = document.getElementById('reg-phone').value.trim();
      const docType = document.getElementById('reg-doc-type').value;
      const idNumber = document.getElementById('reg-id').value.trim();
      const passInput = document.getElementById('reg-password');
      const password = passInput ? passInput.value : '';
      const confirmPassInput = document.getElementById('reg-confirm-password');
      const confirmPassword = confirmPassInput ? confirmPassInput.value : '';

      let hasError = false;

      // 1. Validar confirmación de contraseña
      const allPassMet = updateRegPasswordRequirements(password);
      if (!allPassMet) {
        showFieldError('reg-password', 'reg-password-err', 'La contraseña debe cumplir con todos los 4 requisitos.');
        const reqs = document.getElementById('reg-password-reqs');
        if (reqs) reqs.classList.remove('hidden');
        hasError = true;
      } else if (!validateRegPasswordMatch()) {
        showFieldError('reg-confirm-password', 'reg-password-match-msg', 'Las contraseñas deben coincidir exactamente.');
        hasError = true;
      }

      // 2. Validar contraseña vacía
      if (!password) {
        showFieldError('reg-password', 'reg-password-err', 'Por favor, crea una contraseña.');
        hasError = true;
      }

      // 3. Validar identificación
      if (!idNumber) {
        showFieldError('reg-id', 'reg-id-err', 'Por favor, ingresa tu número de identificación.');
        hasError = true;
      } else if (docType === 'Cédula' && !/^\d{10}$/.test(idNumber)) {
        showFieldError('reg-id', 'reg-id-err', 'La cédula debe tener exactamente 10 dígitos numéricos.');
        hasError = true;
      }

      // 4. Validar teléfono
      if (!phone) {
        showFieldError('reg-phone', 'reg-phone-err', 'Por favor, ingresa tu número de teléfono o celular.');
        hasError = true;
      } else if (phone.replace(/\D/g, '').length < 9) {
        showFieldError('reg-phone', 'reg-phone-err', 'Por favor, ingresa un número de teléfono válido (al menos 9-10 dígitos).');
        hasError = true;
      }

      // 5. Validar correo
      if (!email) {
        showFieldError('reg-email', 'reg-email-err', 'Por favor, ingresa tu correo electrónico.');
        hasError = true;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFieldError('reg-email', 'reg-email-err', 'Por favor, ingresa un formato de correo electrónico válido.');
        hasError = true;
      }

      // 6. Validar nombre
      if (!name) {
        showFieldError('reg-name', 'reg-name-err', 'Por favor, ingresa tu nombre completo.');
        hasError = true;
      } else if (name.length < 3) {
        showFieldError('reg-name', 'reg-name-err', 'El nombre debe tener al menos 3 caracteres.');
        hasError = true;
      }

      if (!showProfileValidation({ name, email, username, phone, docType, idNumber }, 'reg')) hasError = true;

      if (hasError) {
        showToast('Por favor, completa todos los campos obligatorios correctamente.', 'ph-warning-circle');
        return;
      }

      await submitAccountRequest(document.getElementById('form-register'), async () => {
        const emailRedirectTo = new URL('index.html?registro=confirmado', window.location.href).href;
        await accountService.register({ name, email, username, phone, docType, idNumber }, password, registrationOfferRequested, emailRedirectTo);
        document.getElementById('form-register').reset();
        document.getElementById('login-email').value = email;
        document.getElementById('login-password').value = '';
        switchAuthTab('login');
        showToast('Revisa tu correo para confirmar el registro. Después podrás iniciar sesión.', 'ph-envelope');
      });
    }

    async function logoutUser() {
      await submitAccountRequest(null, async () => {
        await accountService.signOut();
        updateAuthUI();
        clearTimeout(cartQuoteTimer);
        sessionStorage.removeItem('sacha_web_checkout_request');
        sessionStorage.removeItem('sacha_web_pickup');
        showToast('Sesión cerrada con éxito');
        navigateTo('index.html');
      });
    }

    function togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const icon = btn ? btn.querySelector('i') : null;
      if (btn) {
        btn.setAttribute('aria-pressed', String(input.type === 'password'));
        btn.setAttribute('aria-label', input.type === 'password' ? 'Ocultar contraseña' : 'Mostrar contraseña');
      }
      if (input.type === 'password') {
        input.type = 'text';
        if (icon) {
          icon.classList.remove('ph-eye');
          icon.classList.add('ph-eye-slash');
        }
      } else {
        input.type = 'password';
        if (icon) {
          icon.classList.remove('ph-eye-slash');
          icon.classList.add('ph-eye');
        }
      }
    }

    function updatePasswordRequirements(val) {
      const hasLength = val.length >= 8;
      const hasUpper = /[A-Z]/.test(val);
      const hasNumber = /[0-9]/.test(val);
      const hasSpecial = /[^A-Za-z0-9]/.test(val);

      setReqStatus('acc-req-length', hasLength);
      setReqStatus('acc-req-uppercase', hasUpper);
      setReqStatus('acc-req-number', hasNumber);
      setReqStatus('acc-req-special', hasSpecial);

      return hasLength && hasUpper && hasNumber && hasSpecial;
    }

    function setReqStatus(elementId, isMet) {
      const el = document.getElementById(elementId);
      if (!el) return;
      const icon = el.querySelector('i');
      if (isMet) {
        if (icon) {
          icon.className = 'ph-bold ph-check text-green-600 text-sm flex-shrink-0';
        }
        el.classList.remove('text-brand-leaf/70');
        el.classList.add('text-green-800', 'font-bold');
      } else {
        if (icon) {
          icon.className = 'ph-bold ph-x text-red-500 text-sm flex-shrink-0';
        }
        el.classList.remove('text-green-800', 'font-bold');
        el.classList.add('text-brand-leaf/70');
      }
    }

    function handlePasswordInputChange(val) {
      const reqsContainer = document.getElementById('acc-password-reqs');
      const wrapper = document.getElementById('acc-confirm-password-wrapper');
      const confirmInput = document.getElementById('acc-confirm-password');
      const matchMsg = document.getElementById('acc-password-match-msg');

      if (val.length > 0) {
        if (reqsContainer) reqsContainer.classList.remove('hidden');
      } else {
        if (reqsContainer) reqsContainer.classList.add('hidden');
      }

      const allMet = updatePasswordRequirements(val);

      if (allMet && val.length > 0) {
        if (wrapper && wrapper.classList.contains('hidden')) {
          wrapper.classList.remove('hidden');
        }
        validatePasswordMatch();
      } else {
        if (wrapper) wrapper.classList.add('hidden');
        if (confirmInput) {
          confirmInput.value = '';
          confirmInput.classList.remove('border-green-600', 'border-red-500');
          confirmInput.classList.add('border-brand-forest/30');
        }
        if (matchMsg) {
          matchMsg.classList.add('hidden');
          matchMsg.textContent = '';
        }
      }
    }

    function validatePasswordMatch() {
      const newPassInput = document.getElementById('acc-new-password');
      const confirmInput = document.getElementById('acc-confirm-password');
      const matchMsg = document.getElementById('acc-password-match-msg');
      if (!newPassInput || !confirmInput || !matchMsg) return;

      const newPass = newPassInput.value;
      const confirmPass = confirmInput.value;

      matchMsg.classList.remove('hidden');

      if (confirmPass.length === 0) {
        matchMsg.replaceChildren(cloneTemplate('password-match-failed-template'));
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-forest/30');
        confirmInput.classList.add('border-red-500');
        return;
      }

      if (newPass === confirmPass) {
        matchMsg.replaceChildren(cloneTemplate('password-match-success-template'));
        matchMsg.className = 'text-xs font-bold text-green-800 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-red-500', 'border-brand-forest/30');
        confirmInput.classList.add('border-green-600');
      } else {
        matchMsg.replaceChildren(cloneTemplate('password-match-failed-template'));
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-forest/30');
        confirmInput.classList.add('border-red-500');
      }
    }

    async function updateAccountDetails() {
      const name = document.getElementById('acc-name').value.trim();
      const usernameInput = document.getElementById('acc-username');
      const username = usernameInput ? usernameInput.value.trim() : '';
      const email = document.getElementById('acc-email').value.trim();
      const phone = document.getElementById('acc-phone').value.trim();
      const docTypeSelect = document.getElementById('acc-doc-type');
      const idInput = document.getElementById('acc-id');
      const newPasswordInput = document.getElementById('acc-new-password');
      const confirmPasswordInput = document.getElementById('acc-confirm-password');

      const user = { ...getCurrentUser() };
      if (!getCurrentUser()) return;
      user.name = name;
      if (usernameInput) user.username = username;
      user.email = email;
      user.phone = phone;
      if (docTypeSelect) user.docType = docTypeSelect.value;
      if (idInput) user.idNumber = idInput.value.trim();
      if (!showProfileValidation(user, 'acc')) return;

      let passwordUpdated = false;
      if (newPasswordInput && newPasswordInput.value.trim().length > 0) {
        const newPass = newPasswordInput.value;
        const confirmPass = confirmPasswordInput ? confirmPasswordInput.value : '';

        const allMet = updatePasswordRequirements(newPass);
        if (!allMet) {
          showToast('La nueva contraseña debe cumplir con todos los requisitos de seguridad', 'ph-warning');
          newPasswordInput.focus();
          return;
        }

        if (newPass !== confirmPass) {
          showToast('Las contraseñas no coinciden. Por favor verifica', 'ph-warning');
          if (confirmPasswordInput) confirmPasswordInput.focus();
          return;
        }

        // La contraseña se envía solamente a Supabase Auth.
        passwordUpdated = true;
      }

      await submitAccountRequest(null, async () => {
        const result = await accountService.saveProfile(user, passwordUpdated ? newPasswordInput.value : undefined);
        if (newPasswordInput) newPasswordInput.value = '';
        if (confirmPasswordInput) confirmPasswordInput.value = '';
        updateAuthUI();
        showToast(result.emailChanged ? 'Perfil guardado. Confirma el cambio de correo desde tu email.' : 'Información de cuenta actualizada', 'ph-check-circle');
        syncCurrentPage();
      });
    }

    document.addEventListener('click', (e) => {
      // Cerrar selectores personalizados de estado al hacer clic fuera
      if (!e.target.closest('[id^="dropdown-wrapper-"]')) {
        document.querySelectorAll('[id^="status-menu-"]').forEach(m => m.classList.add('hidden'));
        document.querySelectorAll('[id^="status-btn-"]').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          const caret = b.querySelector('.ph-caret-down');
          if (caret) caret.classList.remove('rotate-180');
        });
      }

      if (e.defaultPrevented) return;
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('producto.html')) {
        const productUrl = new URL(href, window.location.href);
        saveCatalogPosition(productUrl.searchParams.get('id'));
      }
    });

    // Conservar el HTML nativo y aplicar solo la seleccion o el estado guardado.

    // Cada archivo conserva su HTML; actualizar los datos del flujo de compra al cargar.

    function setupAccessibleInteractions() {
      const closeDialog = {
        'auth-modal': closeAuthModal,
        'review-modal': closeReviewModal,
        'confirm-remove-modal': closeConfirmRemoveModal,
        'image-lightbox-modal': closeImageLightbox
      };
      document.querySelectorAll('[aria-modal="true"]').forEach(dialog => { dialog.inert = dialog.classList.contains('hidden'); });
      navMenu?.addEventListener('focusout', event => {
        if (event.relatedTarget && !navMenu.contains(event.relatedTarget) && event.relatedTarget !== navBtn) closeNavCategoryMenu();
      });
      document.addEventListener('focusout', event => {
        const listbox = event.target.closest('[role="listbox"]');
        if (listbox && event.relatedTarget && !listbox.contains(event.relatedTarget)) {
          listbox.classList.add('hidden');
          const trigger = document.getElementById(listbox.getAttribute('aria-labelledby'));
          trigger?.setAttribute('aria-expanded', 'false');
          trigger?.querySelector('.ph-caret-down')?.classList.remove('rotate-180');
        }
      });
      const focusHeader = document.querySelector('.smart-header');
      const measureHeader = () => document.documentElement.style.setProperty('--focus-header-height', `${getComputedStyle(focusHeader).position === 'sticky' ? focusHeader.getBoundingClientRect().height : 0}px`);
      if (focusHeader) {
        measureHeader();
        new ResizeObserver(measureHeader).observe(focusHeader);
      }

      document.addEventListener('keydown', event => {
        const dialog = accessibleDialogs.at(-1)?.dialog;
        if (dialog && event.key === 'Escape') {
          event.preventDefault();
          event.stopImmediatePropagation();
          closeDialog[dialog.id]?.();
          return;
        }
        if (dialog && event.key === 'Tab') {
          const elements = dialogFocusableElements(dialog);
          const first = elements[0] || dialog, last = elements.at(-1) || dialog;
          if (!elements.length || event.shiftKey && (document.activeElement === first || document.activeElement === dialog) || !event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
          }
        }
        const tablist = event.target.closest('[role="tablist"]');
        const radios = event.target.closest('[role="radiogroup"]');
        const listbox = event.target.closest('[role="listbox"]');
        if (listbox && event.key === 'Escape') {
          event.preventDefault();
          listbox.classList.add('hidden');
          const trigger = document.getElementById(listbox.getAttribute('aria-labelledby'));
          trigger?.setAttribute('aria-expanded', 'false');
          trigger?.querySelector('.ph-caret-down')?.classList.remove('rotate-180');
          trigger?.focus();
        }
        if (event.target.matches('[aria-haspopup="listbox"]') && ['ArrowDown','ArrowUp'].includes(event.key)) {
          event.preventDefault();
          if (event.target.getAttribute('aria-expanded') !== 'true') event.target.click();
        }
        const group = tablist || radios || listbox;
        if (group && ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)) {
          const elements = [...group.querySelectorAll(tablist ? '[role="tab"]' : radios ? '[role="radio"]' : '[role="option"]')];
          const current = elements.indexOf(event.target);
          if (current >= 0) {
            event.preventDefault();
            const offset = ['ArrowLeft','ArrowUp'].includes(event.key) ? -1 : 1;
            const index = event.key === 'Home' ? 0 : event.key === 'End' ? elements.length - 1 : (current + offset + elements.length) % elements.length;
            if (!listbox) elements[index].click();
            else elements.forEach((element, position) => { element.tabIndex = position === index ? 0 : -1; });
            elements[index].focus();
          }
        }
        if (event.key === 'Escape' && navMenu && !navMenu.classList.contains('hidden')) {
          closeNavCategoryMenu();
          navBtn?.focus();
        }
        if (event.key === 'Escape' && event.target.closest('#cart-side-drawer')) collapseCartDrawer(false, true);
        if (event.target.id === 'main-product-img' && ['Enter',' '].includes(event.key)) {
          event.preventDefault();
          const id = new URLSearchParams(location.search).get('id') || 'maca';
          const product = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
          openImageLightbox(product.id, getCurrentImageIndex());
        }
      }, true);
      document.addEventListener('focusin', event => {
        const dialog = accessibleDialogs.at(-1)?.dialog;
        if (dialog && !dialog.contains(event.target)) (dialogFocusableElements(dialog)[0] || dialog).focus();
      });
      document.querySelectorAll('input[type="password"]').forEach(input => {
        const button = input.parentElement.querySelector('button');
        if (button) { button.setAttribute('aria-controls', input.id); button.setAttribute('aria-pressed', 'false'); }
      });
    }

    function initApp() {
      setupFieldValidation();
      setupAccessibleInteractions();
      setupNavigationPrefetch();
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      updateCartDrawerZoom();
      if (sessionStorage.getItem('sacha_cart_drawer_open') === 'true' && cart && cart.length > 0) {
        const currentPageUrl = getCurrentPageUrl() || 'index.html';
        if (!currentPageUrl.includes('carrito.html') && !currentPageUrl.includes('checkout')) {
          openCartDrawer();
        } else {
          closeCartDrawer();
        }
      } else {
        closeCartDrawer();
      }
      updateAuthUI();
      updateActiveNav(getPageName());
      updateCatalogCounters();
      initializeCatalogPage();
      initializePurchasePage();
      initializeAccountPage();
      setupDynamicListeners();
      // Las tarjetas ya existen en el HTML; sincronizar solo los favoritos guardados.
      PRODUCTS.forEach(product => updateFavoriteUI(product.id, isFavorite(product.id)));
      const returningScroll = sessionStorage.getItem('sacha_catalog_scroll_pos');
      if (returningScroll !== null && sessionStorage.getItem('sacha_prev_route') === getCurrentPageUrl()) {
        window.scrollTo({ top: Number(returningScroll) || 0, left: 0, behavior: 'instant' });
        ['sacha_catalog_scroll_pos', 'sacha_prev_route', 'sacha_last_inspected_product_id', 'sacha_card_viewport_offset']
          .forEach(key => sessionStorage.removeItem(key));
      }

      // Sincronización del desplegable lateral del carrito al navegar con tecla Tab
      const cartDrawerEl = document.getElementById('cart-side-drawer');
      const toggleBtnEl = document.getElementById('cart-drawer-toggle-btn');
      const drawerHeaderBtn = cartDrawerEl ? cartDrawerEl.querySelector('.cart-drawer-header') : null;

      if (toggleBtnEl) {
        toggleBtnEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            openCartDrawer();
          }
        });
      }

      if (drawerHeaderBtn) {
        drawerHeaderBtn.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            collapseCartDrawer(false, true);
          }
        });
      }

      if (cartDrawerEl) {
        cartDrawerEl.addEventListener('focusin', (e) => {
          // Si el elemento enfocado es la flecha de despliegue (#cart-drawer-toggle-btn),
          // NO debe abrirse ni cerrarse el resumen automáticamente a menos que se pulse Enter
          if (e.target && e.target.id === 'cart-drawer-toggle-btn') {
            return;
          }
          // Cuando se seleccione cualquier elemento del resumen con Tab, mostrar el carrito normalmente
          if (document.body.classList.contains('user-is-tabbing')) {
            document.body.classList.add('cart-drawer-open');
          }
        });

        cartDrawerEl.addEventListener('focusout', () => {
          setTimeout(() => {
            if (!cartDrawerEl.contains(document.activeElement)) {
              if (document.body.classList.contains('user-is-tabbing')) {
                collapseCartDrawer(false, false);
              }
            }
          }, 25);
        });
      }

      // Activar borde amarillo al navegar mediante tecla Tab
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('user-is-tabbing');
        }
      });
      window.addEventListener('mousedown', () => {
        document.body.classList.remove('user-is-tabbing');
        if (sessionStorage.getItem('sacha_cart_drawer_open') !== 'true') {
          setTimeout(() => {
            if (!cartDrawerEl || !cartDrawerEl.contains(document.activeElement)) {
              document.body.classList.remove('cart-drawer-open');
            }
          }, 15);
        }
      });
    }

    // Las estructuras viven en los HTML. Estos helpers solo enlazan datos y clonan fragmentos.
    function getProductImage(src, size = 'card') {
      return productImageVariants[src]?.[size] || src;
    }

    function bindValues(root, values, imageSize = 'card') {
      const format = text => text.replace(/\{\{(\w+)\}\}/g, (_, key) => String(values[key] ?? ''));
      const available = text => [...text.matchAll(/\{\{(\w+)\}\}/g)].every(match => Object.hasOwn(values, match[1]));
      const nodes = [...root.querySelectorAll('*')];
      if (root.nodeType === 1) nodes.unshift(root);
      nodes.forEach(node => {
        if (node.hasAttribute('data-bind-text') && available(node.getAttribute('data-bind-text'))) node.textContent = format(node.getAttribute('data-bind-text'));
        [...node.attributes].forEach(attr => {
          if (attr.name.startsWith('data-bind-attr-') && available(attr.value)) {
            const name = attr.name.slice(15);
            const value = format(attr.value);
            if (node.tagName === 'IMG' && name === 'src') {
              node.decoding = 'async';
              if (!node.hasAttribute('loading')) node.loading = node.id === 'main-product-img' ? 'eager' : 'lazy';
              node.setAttribute(name, getProductImage(value, node.id === 'main-product-img' ? 'detail' : imageSize));
            } else {
              node.setAttribute(name, value);
            }
          }
        });
      });
    }

    function cloneTemplate(id, values = {}) {
      const template = document.getElementById(id);
      if (!template || !template.content) throw new Error(`Falta la plantilla HTML: ${id}`);
      const content = template.content.cloneNode(true);
      bindValues(content, values, id.includes('thumbnail') ? 'thumbnail' : 'card');
      return content;
    }

    function productValues(product) {
      return { ...product, price: Number(product.price).toFixed(2), rating: Number(product.rating).toFixed(1), encodedName: encodeURIComponent(product.name) };
    }

    function getHeartIconSVG(isFav, sizeClass = 'w-4 h-4 sm:w-5 sm:h-5') {
      const icon = cloneTemplate(isFav ? 'heart-filled-template' : 'heart-outline-template').firstElementChild;
      icon.setAttribute('class', `${sizeClass} pointer-events-none select-none inline-block flex-shrink-0`);
      return icon;
    }

    function itemValues(item) {
      return { ...productValues(item), quantity: Math.max(1, parseInt(item.quantity, 10) || 1), lineTotal: ((Math.round(Number(item.price) * 100) * Math.max(1, parseInt(item.quantity, 10) || 1)) / 100).toFixed(2) };
    }

    function cartValues() {
      const quote = accountService.quoteFor(cart);
      if (quote) return { total: Number(quote.total).toFixed(2), tax: Number(quote.tax).toFixed(2), net: Number(quote.net).toFixed(2), count: quote.count };
      const cents = cart.reduce((sum, item) => sum + Math.round(Number(item.price) * 100) * Math.max(1, parseInt(item.quantity, 10) || 1), 0);
      const tax = Math.round(cents * .15 / 1.15);
      return { total: (cents / 100).toFixed(2), tax: (tax / 100).toFixed(2), net: ((cents - tax) / 100).toFixed(2), count: cart.reduce((sum, item) => sum + Math.max(1, parseInt(item.quantity, 10) || 1), 0) };
    }

    function updateCartUI() {
      const focusContainer = document.activeElement?.closest('[data-cart-items],#cart-drawer-items');
      const focusAction = focusContainer && document.activeElement.getAttribute('onclick');
      updateCartBadge();
      updateCartDrawerUI();
      const items = document.querySelector('[data-cart-items]');
      if (items) {
        items.querySelectorAll('[data-cart-row]').forEach(node => node.remove());
        const rows = cart.map(item => {
          const fragment = cloneTemplate('cart-item-template', itemValues(item));
          fragment.firstElementChild.setAttribute('data-cart-row', '');
          return fragment;
        });
        items.prepend(...rows);
        document.querySelector('[data-cart-empty]').hidden = cart.length > 0;
        const filled = document.querySelector('[data-cart-filled]');
        filled.classList.toggle('hidden', cart.length === 0);
        bindValues(filled, cartValues());
        const undo = document.querySelector('[data-cart-undo]');
        if (undo) undo.classList.toggle('hidden', !lastRemovedCartItem && !lastClearedCart);
        updateCheckoutSteps(1);
      }
      updateCheckoutTotals();
      if (focusContainer && focusAction) {
        const replacement = [...focusContainer.querySelectorAll('[onclick]')].find(button => button.getAttribute('onclick') === focusAction)
          || document.querySelector('[data-cart-undo]:not(.hidden)') || focusContainer.querySelector('button,a');
        if (replacement) replacement.focus({ preventScroll: true });
        else document.getElementById('app')?.focus({ preventScroll: true });
      }
      scheduleCartQuote();
    }

    function updateCartDrawerUI() {
      const items = document.getElementById('cart-drawer-items');
      const totals = cartValues();
      const count = document.getElementById('cart-drawer-count');
      const total = document.getElementById('cart-drawer-total');
      if (count) count.textContent = totals.count;
      if (total) total.textContent = `$${totals.total}`;
      if (!items) return;
      const scrollTop = items.scrollTop;
      items.replaceChildren(...(cart.length ? cart.map(item => cloneTemplate('cart-drawer-item-template', itemValues(item))) : [cloneTemplate('cart-drawer-empty-template')]));
      items.scrollTop = scrollTop;
    }

    function updateCheckoutSteps(step) {
      const nav = document.querySelector('#app nav[aria-label^="Progreso del pedido"]');
      if (!nav) return;
      if (step < 4 && cart.length) recordCheckoutStep(step);
      const reached = step === 4 ? 4 : getMaxCheckoutStep();
      nav.replaceWith(cloneTemplate(`checkout-step-${step}-${reached}`));
    }

    function updateCheckoutTotals() {
      document.querySelectorAll('[data-checkout-items]').forEach(container => {
        container.replaceChildren(...cart.map(item => cloneTemplate('checkout-summary-item-template', itemValues(item))));
      });
      const checkout = document.getElementById('pickup-name') || document.getElementById('btn-confirm-checkout');
      if (checkout) bindValues(document.getElementById('app'), cartValues());
      const button = document.getElementById('btn-confirm-checkout');
      if (button) button.disabled = cart.length === 0;
      if (document.getElementById('pay-opt-tarjeta')) selectPaymentOption(selectedPaymentMethod);
    }

    function initializePurchasePage() {
      const pickup = document.getElementById('pickup-name');
      const payment = document.getElementById('btn-confirm-checkout');
      const confirmation = document.querySelector('[aria-label="Resumen del pedido confirmado"]');
      const isCart = !!document.querySelector('[data-cart-items]');
      if (!pickup && !payment && !confirmation && !isCart) return;
      const user = getCurrentUser();
      if (pickup || payment) {
        if (!user) {
          pendingCheckoutRedirect = getCurrentPageUrl();
          openAuthModal('register', 'Inicia sesión o regístrate para proceder con tu compra.');
        } else if (!cart.length) {
          window.location.replace('carrito.html');
          return;
        }
        const fields = { 'pickup-name': 'name', 'pickup-id': 'idNumber', 'checkout-inv-name': 'name', 'checkout-inv-id': 'idNumber', 'checkout-inv-email': 'email' };
        Object.entries(fields).forEach(([id, key]) => { const input = document.getElementById(id); if (input) input.value = user?.[key] || ''; });
        if (user?.docType === 'Pasaporte') {
          ['pickup-id', 'checkout-inv-id'].forEach(id => { const input = document.getElementById(id); if (input) input.inputMode = 'text'; });
        }
        const userLabel = document.querySelector('.tarjeta_usuario_retiro [title]');
        if (userLabel) { userLabel.textContent = user?.name || user?.email || 'Cliente'; userLabel.title = userLabel.textContent; }
        updateCheckoutSteps(pickup ? 2 : 3);
        updateCheckoutTotals();
      }
      if (confirmation) {
        const order = getAllOrders()[0];
        if (!getCurrentUser() || !order) { window.location.replace('carrito.html'); return; }
        bindValues(confirmation, { ...order, total: Number(order.total).toFixed(2) });
      }
      closeCartDrawer();
      document.getElementById('cart-drawer-toggle-btn')?.classList.add('hidden');
    }

    function getCatalogProducts(params) {
      const cat = params.get('cat');
      const subcat = params.get('subcat');
      const special = params.get('special');
      const specialFilters = {
        destacados: product => product.isFeatured,
        'mas-vendidos': product => product.isBestSeller,
        nuevos: product => product.isNew
      };
      return PRODUCTS.filter(product => special
        ? (specialFilters[special] || (p => p.isFeatured || p.isBestSeller || p.isNew))(product)
        : (!cat || product.category === cat) && (!subcat || product.subcategory === subcat));
    }

    function updateCatalogCounters() {
      // Actualizar solo las insignias existentes, conservando sus clases y eventos.
      const menus = '#nav-category-menu, aside[aria-label="Filtros del catálogo"]';
      document.querySelectorAll(menus).forEach(menu => {
        menu.querySelectorAll('a[href]').forEach(link => {
          const url = new URL(link.href, window.location.href);
          if (!url.pathname.endsWith('/categoria.html')) return;
          const badge = link.lastElementChild;
          if (badge?.matches('span.rounded-full')) {
            badge.textContent = getCatalogProducts(url.searchParams).length;
          }
        });

        menu.querySelectorAll('.nav-cat-header, .sidebar-cat-header').forEach(header => {
          const link = header.matches('.nav-cat-header')
            ? header.closest('.nav-cat-card')?.querySelector('a[href]')
            : null;
          const params = link
            ? new URL(link.href, window.location.href).searchParams
            : new URLSearchParams(header.dataset.cat === 'especiales'
              ? { special: 'all' }
              : { cat: header.dataset.cat });
          const badge = header.querySelector('span.rounded-full');
          if (badge) badge.textContent = getCatalogProducts(params).length;
        });
      });
    }

    function updateCatalogSelection() {
      const grid = document.querySelector('[data-catalog-grid]');
      if (!grid) return;
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('cat'), subcat = params.get('subcat'), special = params.get('special');
      const products = getCatalogProducts(params);
      const categories = getCatalogCategoriesAndSubcategories();
      const categoryName = categories[cat]?.name || 'Todos los Productos';
      const title = special ? ({destacados:'Productos Destacados','mas-vendidos':'Los Más Vendidos',nuevos:'Productos Nuevos'}[special] || 'Toda la Selección Especial') : (categories[cat]?.subcategories[subcat] || categoryName);
      document.querySelector('[data-catalog-title]').textContent = title;
      document.querySelector('[data-catalog-count]').textContent = products.length;
      document.querySelector('[data-catalog-results]').setAttribute('aria-label', `Listado de productos: ${title}`);
      grid.replaceChildren(...(products.length ? products.map(p => cloneTemplate('product-card-template', productValues(p))) : [cloneTemplate('catalog-empty-template')]));
      grid.querySelectorAll('img').forEach((image, index) => {
        image.loading = index < 4 ? 'eager' : 'lazy';
        image.fetchPriority = index < 2 ? 'high' : 'auto';
      });
      document.querySelectorAll('[data-filter-idle-class]').forEach(node => {
        const link = node.closest('a[href]');
        let active;
        if (link) {
          const query = new URL(link.href, window.location.href).searchParams;
          active = query.has('special') ? query.get('special') === special : query.has('cat') ? query.get('cat') === cat && (query.get('subcat') || null) === subcat && !special : !cat && !special;
          // Ver Todos ya estaba seleccionado en el HTML de referencia.
          if (!query.size) active = !active;
        } else {
          const header = node.closest('.sidebar-cat-header') || node.querySelector('.sidebar-cat-header') || node.parentElement?.querySelector('.sidebar-cat-header');
          active = header?.getAttribute('data-cat') === 'especiales' ? !!special : !!cat && header?.getAttribute('data-cat') === cat && !special;
          if (node.matches('.sidebar-cat-header')) node.setAttribute('aria-expanded', String(active));
        }
        node.className = node.getAttribute(active ? 'data-filter-active-class' : 'data-filter-idle-class');
      });
      const crumbs = document.querySelector('[data-catalog-breadcrumbs]');
      const segments = [{label:'Inicio',href:'index.html'}, {label:'Productos',href:cat||special?'categoria.html':null}];
      if (cat || special) segments.push({label:special?'Selección Especial':categoryName,href:subcat||special?(special?'categoria.html?special=all':`categoria.html?${new URLSearchParams({ cat })}`):null});
      if (subcat || special) segments.push({label:title});
      const last = getLastVisitedProduct();
      if (last) segments.push({label:last.name,href:`producto.html?id=${encodeURIComponent(last.id)}`});
      crumbs.replaceChildren();
      segments.forEach((segment,index) => { if(index) crumbs.append(cloneTemplate('breadcrumb-separator-template')); crumbs.append(cloneTemplate(segment.href?'breadcrumb-link-template':'breadcrumb-text-template',segment)); });
      products.forEach(p => updateFavoriteUI(p.id,isFavorite(p.id)));
    }

    function updateProductDetails() {
      const root = document.querySelector('[data-product-detail]');
      if (!root) return;
      const id = new URLSearchParams(window.location.search).get('id') || 'maca';
      const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
      if (!product) return;
      document.title = `${product.name} — Sacha & Pamba`;
      bindValues(root, productValues(product));
      const gallery = product.images?.length ? product.images : [product.image];
      gallery.forEach(src => prepareProductImage(getProductImage(src, 'detail')));
      const thumbs = root.querySelector('[data-product-thumbnails]');
      thumbs.replaceChildren(...gallery.map((image,index) => cloneTemplate('product-thumbnail-template',{image,index,imageNumber:index+1})));
      const buttons = thumbs.querySelectorAll('.product-thumb-btn');
      buttons.forEach((button,index) => {
        if(index !== currentDetailGalleryIndex) button.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-forest/30 opacity-75 hover:opacity-100 bg-brand-cream p-1.5 transition-all shadow-sm cursor-pointer';
      });
      root.querySelector('[data-product-pickup]').replaceChildren(cloneTemplate(isProductPickedUp(product.id)?'product-pickup-ready-template':'product-pickup-pending-template',productValues(product)));
      const back = root.querySelector('button[onclick="handleBackToProducts()"]');
      const fromFavorites = (sessionStorage.getItem('sacha_prev_route') || '').includes('cuenta.html');
      if (back) { back.querySelector('span').textContent = fromFavorites?'Volver a Favoritos':'Volver a Productos'; back.removeAttribute('aria-label'); }
      updateProductReviews(product.id);
      updateFavoriteUI(product.id,isFavorite(product.id));
      setLastVisitedProduct({id:product.id,name:product.name,category:product.category,categoryName:product.categoryName});
    }

    function updateProductReviews(productId) {
      const list = document.getElementById('product-reviews-list');
      if (!list) return;
      const stored = localStorage.getItem(`reviews_${productId}`);
      const reviews = stored ? JSON.parse(stored) : (PRODUCT_REVIEWS_DB[productId] || [{name:'Cliente Sacha & Pamba',date:'Septiembre, 2026',rating:5,comment:'Producto puro y fresco. Retiro ágil y seguro en la tienda de Quito.',verified:true}]);
      list.replaceChildren(...reviews.map(review => {
        const fragment = cloneTemplate('review-template',{...review,initial:review.name.charAt(0)});
        fragment.querySelectorAll('[data-review-stars] i').forEach((star,index) => star.className = `${index < review.rating ? 'ph-fill' : 'ph'} ph-star`);
        fragment.querySelector('[data-review-verified]').hidden = !review.verified;
        const photo = fragment.querySelector('[data-review-photo]');
        photo.hidden = !review.image;
        if (review.image) photo.querySelector('img').addEventListener('click',()=>window.open(review.image,'_blank'));
        return fragment;
      }));
    }

    function updateFavoritesTabContent() {
      expireFavoriteUndoActions();
      scheduleFavoriteUndoExpiration();
      const list = document.querySelector('[data-favorites-items]');
      if (!list) return;
      const ids = getFavorites();
      pendingUndoFavorites = {};
      Object.entries(favoriteUndoActions).forEach(([id, action]) => {
        if (action.before !== true || action.after !== false || action.origin !== 'favorites' || ids.includes(id)) {
          delete favoriteUndoActions[id];
        } else if (action.before && !action.after) {
          const product = PRODUCTS.find(p => p.id === id);
          if (product) pendingUndoFavorites[id] = product;
        }
      });
      if (!favoritesDisplayOrder.length) favoritesDisplayOrder = [...ids];
      ids.forEach(id => { if(!favoritesDisplayOrder.includes(id)) favoritesDisplayOrder.push(id); });
      Object.keys(pendingUndoFavorites).forEach(id => { if(!favoritesDisplayOrder.includes(id)) favoritesDisplayOrder.push(id); });
      favoritesDisplayOrder = favoritesDisplayOrder.filter(id => ids.includes(id) || pendingUndoFavorites[id]);
      const all = favoritesDisplayOrder.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
      const filtered = all.filter(p => (filtro_cat==='all'||p.category===filtro_cat)&&(filtro_subcat==='all'||p.subcategory===filtro_subcat));
      list.replaceChildren(...(filtered.length ? filtered.map(product => {
        const removed = !!pendingUndoFavorites[product.id];
        const fragment = cloneTemplate(removed ? 'favorite-undo-template' : 'favorite-card-template', productValues(product));
        const action = favoriteUndoActions[product.id];
        if (removed && action) {
          const button = fragment.querySelector('button');
          button.removeAttribute('onclick');
          button.removeAttribute('data-bind-attr-onclick');
          button.removeAttribute('data-bind-attr-aria-label');
          button.setAttribute('data-favorite-undo', product.id);
          button.setAttribute('aria-label', `Deshacer eliminación de ${product.name} en favoritos`);
          button.onclick = event => {
            event.preventDefault();
            event.stopPropagation();
            undoFavoriteChange(product.id, action.token);
          };
        }
        return fragment;
      }) : [cloneTemplate(all.length?'favorites-filter-empty-template':'favorites-empty-template')]));
      saveFavoriteUndoState();
      const count = document.querySelector('[data-favorite-count]');
      if(count) count.textContent = `${ids.length} ${ids.length===1?'producto':'productos'}`;
      const shown = document.querySelector('[data-favorites-shown]');
      if(shown) shown.textContent = `Mostrando ${filtered.length} de ${all.length}`;
      const catSelect = document.getElementById('sel_cat_fav');
      const subSelect = document.getElementById('sel_subcat_fav');
      if(catSelect) catSelect.value=filtro_cat;
      if(subSelect) {
        subSelect.querySelectorAll('option').forEach(option => { option.hidden = option.value !== 'all' && filtro_cat !== 'all' && option.dataset.category !== filtro_cat; });
        subSelect.value=filtro_subcat;
      }
      filtered.forEach(p=>updateFavoriteUI(p.id,isFavorite(p.id)));
    }

    function updateOrderElements(fragment, order, index) {
      const values = {...order,total:Number(order.total).toFixed(2),index,itemCount:(order.items||[]).length,itemLabel:(order.items||[]).length===1?'producto':'productos'};
      bindValues(fragment,values);
      const latest = !!fragment.querySelector('[data-latest-order]');
      const items = fragment.querySelector('[data-order-items]');
      items.replaceChildren(...(order.items||[]).map(item=>cloneTemplate(latest?'latest-order-item-template':'history-order-item-template',itemValues(item))));
      fragment.querySelectorAll('[data-order-status]').forEach(option=>{
        const selected=option.getAttribute('data-order-status')===order.status;
        option.setAttribute('aria-selected',String(selected));
        option.classList.toggle('text-brand-sunflower',selected); option.classList.toggle('bg-brand-forest/60',selected); option.classList.toggle('text-brand-cream',!selected);
        option.querySelector('i')?.remove();
        if (selected) option.append(cloneTemplate('ui-icon-template', {icon:'ph-check text-brand-sunflower text-xs flex-shrink-0'}));
      });
      const level={'Recibido':1,'En Tienda':2,'Listo para Retiro':3,'Entregado':4}[order.status]||3;
      fragment.querySelectorAll('[data-order-level]').forEach(node=>{
        const reached=Number(node.getAttribute('data-order-level'))<=level;
        node.classList.toggle('opacity-100',reached);node.classList.toggle('opacity-40',!reached);
        const title=node.firstElementChild;
        title.classList.toggle('text-brand-sunflower',reached);title.classList.toggle('text-brand-cream/60',!reached);
        const icon=title.querySelector('i');icon.classList.toggle('ph-check-circle',reached);icon.classList.toggle('ph-circle-dashed',!reached);icon.classList.toggle('text-brand-sunflower',reached);
        if(node.getAttribute('data-order-level')==='4')node.lastElementChild.textContent=reached?'Entregado en mostrador.':'Firma y recepción conforme.';
      });
      return fragment;
    }

    function updateAccountDetailsUI() {
      const panel=document.getElementById('account-tab-personal');
      if(!panel)return;
      const user=getCurrentUser()||{};
      bindValues(panel,{name:user.name||'',username:user.username||'',email:user.email||'',phone:user.phone||'',idNumber:user.idNumber||'',docType:user.docType||'Cédula'});
      const fields={'acc-name':'name','acc-username':'username','acc-email':'email','acc-phone':'phone','acc-doc-type':'docType','acc-id':'idNumber'};
      Object.entries(fields).forEach(([id,key])=>{const input=document.getElementById(id);if(input)input.value=user[key]||(key==='docType'?'Cédula':'');});
      document.getElementById('acc-doc-type')?.dispatchEvent(new Event('change'));
      const history=document.querySelector('[data-order-history]');
      const latest=document.querySelector('[data-latest-order]');
      const orders=getAllOrders();
      if(history)history.replaceChildren(...orders.map((order,index)=>updateOrderElements(cloneTemplate('history-order-template'),order,index)));
      if(latest){if(orders.length)latest.replaceWith(updateOrderElements(cloneTemplate('latest-order-template'),orders[0],'latest'));else latest.hidden=true;}
      updateFavoritesTabContent();
    }

    function initializeAccountPage() {
      if(!document.getElementById('account-tab-personal'))return;
      if(!getCurrentUser()) {
        pendingCheckoutRedirect=getCurrentPageUrl();
        openAuthModal('login','Inicia sesión o regístrate para acceder a tu cuenta.');
      }
      updateAccountDetailsUI();
      const tab=new URLSearchParams(window.location.search).get('tab');
      switchAccountTab(['personal','orders','favorites'].includes(tab)?tab:'personal');
    }

    function syncCurrentPage() {
      updateAccountDetailsUI();
      updateProductDetails();
    }

    function initializeCatalogPage() {
      updateCatalogSelection();
      updateProductDetails();
    }

    function updateLightboxImage() {
      const img=document.getElementById('lightbox-img');
      if(!img||!lightboxCurrentGallery.length)return Promise.resolve(false);
      const index = lightboxCurrentIndex;
      return showPreparedProductImage(img, lightboxCurrentGallery[index], () => {
        const multiple=lightboxCurrentGallery.length>1;
        const counter=document.getElementById('lightbox-image-counter');
        if(counter){counter.textContent=`(${index+1}/${lightboxCurrentGallery.length})`;counter.classList.toggle('hidden',!multiple);}
        ['lightbox-prev-btn','lightbox-next-btn'].forEach(id=>document.getElementById(id)?.classList.toggle('hidden',!multiple));
        const thumbs=document.getElementById('lightbox-thumbnails-container');
        if(thumbs){
          thumbs.classList.toggle('hidden',!multiple);
          if (renderedLightboxGalleries.get(thumbs) !== lightboxCurrentGallery) {
            thumbs.replaceChildren(...lightboxCurrentGallery.map((image,index) => cloneTemplate('lightbox-thumbnail-template',{image,index,imageNumber:index+1})));
            renderedLightboxGalleries.set(thumbs, lightboxCurrentGallery);
          }
          [...thumbs.children].forEach((button, position) => {
            button.className = position === index
              ? 'w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-brand-sunflower scale-105 ring-2 ring-brand-sunflower/60 opacity-100 shadow-md transition-all flex-shrink-0 cursor-pointer bg-black/40 p-0.5'
              : 'w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-white/30 opacity-60 hover:opacity-100 transition-all flex-shrink-0 cursor-pointer bg-black/40 p-0.5';
          });
        }
      });
    }

    // Funciones compartidas por los eventos inline de los archivos fisicos.
    Object.assign(window, {
      readCartFromStorage,
      sanitizeCart,
      saveCart,
      reloadCartFromStorage,
      updateCartBadge,
      updateCartDrawerZoom,
      toggleCartDrawer,
      triggerDrawerSlide,
      openCartDrawer,
      collapseCartDrawer,
      closeCartDrawer,
      hideToast,
      showToast,
      getFavorites,
      saveFavorites,
      isFavorite,
      updateFavoriteUI,
      toggleFavorite,
      readFavoriteUndoState,
      saveFavoriteUndoState,
      expireFavoriteUndoActions,
      scheduleFavoriteUndoExpiration,
      reloadFavoritesFromStorage,
      undoFavoriteChange,
      handleCardImageClick,
      handleDetailImageClick,
      triggerFavoriteDblClick,
      undoRemoveFavorite,
      getCatalogCategoriesAndSubcategories,
      setFavFilterCategory,
      setFavFilterSubcategory,
      resetFavFilters,
      addToCart,
      removeFromCart,
      undoRemoveFromCart,
      openConfirmRemoveModal,
      closeConfirmRemoveModal,
      confirmRemoveProduct,
      updateCartQuantity,
      clearCart,
      openNavCategoryMenu,
      toggleNavCategoryMenu,
      collapseNavCategories,
      closeNavCategoryMenu,
      setupLiveSearch,
      escapeHtml,
      getLastVisitedProduct,
      setLastVisitedProduct,
      saveCatalogPosition,
      handleBackToProducts,
      handleProductCardClick,
      adjustProductQty,
      getCurrentImageIndex,
      switchProductImage,
      openImageLightbox,
      syncDetailGalleryImage,
      navigateLightboxImage,
      navigateLightboxImageTo,
      closeImageLightbox,
      handleAddToCartFromDetail,
      getPickedUpProducts,
      isProductPickedUp,
      toggleProductPickupDemo,
      openReviewModal,
      closeReviewModal,
      setModalRating,
      triggerReviewFileUpload,
      handleModalReviewImage,
      removeModalReviewImage,
      submitReviewModal,
      getMaxCheckoutStep,
      recordCheckoutStep,
      resetCheckoutProgress,
      handleProceedToCheckout,
      handleStepperNav,
      getCheckoutPaymentAccessibilityText,
      selectPaymentOption,
      processPayment,
      switchAccountTab,
      getAllOrders,
      saveAllOrders,
      changeOrderStatus,
      toggleStatusDropdown,
      selectCustomOrderStatus,
      toggleOrderItemsView,
      getPageName,
      getCurrentPageUrl,
      updateActiveNav,
      navigateTo,
      initHeroCarousel,
      setupHomeProductTabs,
      setupDynamicListeners,
      getCurrentUser,
      setCurrentUser,
      updateAuthUI,
      openAuthModal,
      closeAuthModal,
      switchAuthTab,
      showFieldError,
      clearFieldValidation,
      clearAuthFormErrors,
      updateRegPasswordRequirements,
      handleRegPasswordInputChange,
      validateRegPasswordMatch,
      handleLoginSubmit,
      handleRegisterSubmit,
      logoutUser,
      togglePasswordVisibility,
      updatePasswordRequirements,
      setReqStatus,
      handlePasswordInputChange,
      validatePasswordMatch,
      updateAccountDetails,
      initApp,
      bindValues,
      cloneTemplate,
      productValues,
      getHeartIconSVG,
      itemValues,
      cartValues,
      updateCartUI,
      updateCartDrawerUI,
      updateCheckoutSteps,
      updateCheckoutTotals,
      initializePurchasePage,
      updateCatalogSelection,
      updateProductDetails,
      updateProductReviews,
      updateFavoritesTabContent,
      updateOrderElements,
      updateAccountDetailsUI,
      initializeAccountPage,
      syncCurrentPage,
      initializeCatalogPage,
      updateLightboxImage,
    });

    // Los accesores conservan la misma referencia y el estado actual del m?dulo.
    Object.defineProperties(window, {
      cart: { configurable: true, enumerable: true, get: () => cart, set: value => { cart = value; } },
      pendingCheckoutRedirect: { configurable: true, enumerable: true, get: () => pendingCheckoutRedirect, set: value => { pendingCheckoutRedirect = value; } },
      selectedPaymentMethod: { configurable: true, enumerable: true, get: () => selectedPaymentMethod, set: value => { selectedPaymentMethod = value; } },
      drawerSlideTimeout: { configurable: true, enumerable: true, get: () => drawerSlideTimeout, set: value => { drawerSlideTimeout = value; } },
      toastTimeout: { configurable: true, enumerable: true, get: () => toastTimeout, set: value => { toastTimeout = value; } },
      FAVORITES_STORAGE_KEY: { configurable: true, enumerable: true, get: () => FAVORITES_STORAGE_KEY },
      cardImageClickTimer: { configurable: true, enumerable: true, get: () => cardImageClickTimer, set: value => { cardImageClickTimer = value; } },
      detailImageClickTimer: { configurable: true, enumerable: true, get: () => detailImageClickTimer, set: value => { detailImageClickTimer = value; } },
      filtro_cat: { configurable: true, enumerable: true, get: () => filtro_cat, set: value => { filtro_cat = value; } },
      filtro_subcat: { configurable: true, enumerable: true, get: () => filtro_subcat, set: value => { filtro_subcat = value; } },
      pendingUndoFavorites: { configurable: true, enumerable: true, get: () => pendingUndoFavorites, set: value => { pendingUndoFavorites = value; } },
      favoritesDisplayOrder: { configurable: true, enumerable: true, get: () => favoritesDisplayOrder, set: value => { favoritesDisplayOrder = value; } },
      lastRemovedCartItem: { configurable: true, enumerable: true, get: () => lastRemovedCartItem, set: value => { lastRemovedCartItem = value; } },
      pendingRemoveProductId: { configurable: true, enumerable: true, get: () => pendingRemoveProductId, set: value => { pendingRemoveProductId = value; } },
      lastClearedCart: { configurable: true, enumerable: true, get: () => lastClearedCart, set: value => { lastClearedCart = value; } },
      navBtn: { configurable: true, enumerable: true, get: () => navBtn },
      navMenu: { configurable: true, enumerable: true, get: () => navMenu },
      navBackdrop: { configurable: true, enumerable: true, get: () => navBackdrop },
      navCaret: { configurable: true, enumerable: true, get: () => navCaret },
      navClose: { configurable: true, enumerable: true, get: () => navClose },
      navAccordion: { configurable: true, enumerable: true, get: () => navAccordion },
      currentDetailGalleryIndex: { configurable: true, enumerable: true, get: () => currentDetailGalleryIndex, set: value => { currentDetailGalleryIndex = value; } },
      lightboxCurrentGallery: { configurable: true, enumerable: true, get: () => lightboxCurrentGallery, set: value => { lightboxCurrentGallery = value; } },
      lightboxCurrentIndex: { configurable: true, enumerable: true, get: () => lightboxCurrentIndex, set: value => { lightboxCurrentIndex = value; } },
      PRODUCT_REVIEWS_DB: { configurable: true, enumerable: true, get: () => PRODUCT_REVIEWS_DB },
      currentReviewUploadedImage: { configurable: true, enumerable: true, get: () => currentReviewUploadedImage, set: value => { currentReviewUploadedImage = value; } },
      currentAccountTab: { configurable: true, enumerable: true, get: () => currentAccountTab, set: value => { currentAccountTab = value; } },
      heroAutoplayTimer: { configurable: true, enumerable: true, get: () => heroAutoplayTimer, set: value => { heroAutoplayTimer = value; } },
      currentHeroSlide: { configurable: true, enumerable: true, get: () => currentHeroSlide, set: value => { currentHeroSlide = value; } },
      authModal: { configurable: true, enumerable: true, get: () => authModal },
      authCloseBtn: { configurable: true, enumerable: true, get: () => authCloseBtn },
      navAuthBtn: { configurable: true, enumerable: true, get: () => navAuthBtn },
      imageLightboxModal: { configurable: true, enumerable: true, get: () => imageLightboxModal },
      confirmRemoveModal: { configurable: true, enumerable: true, get: () => confirmRemoveModal },
    });

    // Restaurar el estado real al volver con Atras o recibir cambios de otra pestana.
    // El fragmento solo actualiza la selección del menú; la navegación sigue siendo nativa.
    window.addEventListener('hashchange', () => updateActiveNav());
    window.addEventListener('pageshow', event => {
      updateActiveNav();
      if (event.persisted) {
        reloadCartFromStorage();
        reloadFavoritesFromStorage();
      }
    });
    window.addEventListener('storage', event => {
      if (event.storageArea === localStorage && (event.key === CART_STORAGE_KEY || event.key === null)) {
        reloadCartFromStorage();
      }
      if (event.storageArea === localStorage && (event.key === FAVORITES_STORAGE_KEY || event.key === null)) {
        reloadFavoritesFromStorage();
      }
    });

    saveFavoriteUndoState();
    scheduleFavoriteUndoExpiration();

    async function iniciarConCatalogo() {
      await initialAuthReady;
      const pageUrl = new URL(window.location.href);
      if (pageUrl.searchParams.get('registro') === 'confirmado') {
        try { await accountService.signOut(); }
        catch (error) { accountService.clear(); initialAuthError = error; }
        pageUrl.searchParams.delete('registro');
        pageUrl.hash = '';
        history.replaceState(null, '', pageUrl.pathname + pageUrl.search);
        showToast('Correo confirmado. Ya puedes iniciar sesión.', 'ph-envelope');
      }
      const grid = document.getElementById('home-products-grid');
      if (grid) {
        grid.replaceChildren(...PRODUCTS.filter(product => product.isFeatured).slice(0, 4)
          .map(product => cloneTemplate('product-card-template', productValues(product))));
      }
      updateCartUI();
      initApp();
      appInitialized = true;
      if (initialAuthError) showToast(authErrorMessage(initialAuthError), 'ph-warning');
      if (catalogLoadError) {
        const message = catalogLoadError.code === '42501'
          ? 'No se pudo cargar el cat?logo: faltan permisos de lectura en Supabase.'
          : 'No se pudo cargar el cat?logo. Vuelve a intentarlo recargando la p?gina.';
        showToast(message, 'ph-warning');
      }
    }

    supabase.auth.onAuthStateChange(event => {
      if (!appInitialized || authOperationPending || event === 'INITIAL_SESSION') return;
      if (event === 'SIGNED_OUT') {
        accountService.clear();
        sessionStorage.removeItem('sacha_web_checkout_request');
        sessionStorage.removeItem('sacha_web_pickup');
      }
      setTimeout(async () => {
        try {
          if (event !== 'SIGNED_OUT') await accountService.restore();
          updateAuthUI();
          updateAccountDetailsUI();
          updateCartUI();
          if (!getCurrentUser() && document.getElementById('account-tab-personal')) initializeAccountPage();
        } catch (error) {
          accountService.clear();
          updateAuthUI();
          updateAccountDetailsUI();
          showToast(authErrorMessage(error), 'ph-warning');
        }
      }, 0);
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', iniciarConCatalogo, { once: true });
    } else {
      iniciarConCatalogo();
    }
