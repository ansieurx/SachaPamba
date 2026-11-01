
    const PRODUCTS = [
      {
        id: 'vitamina-c',
        name: 'Vitamina C + Camu Camu Amazónico',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'vitaminas-minerales',
        subcategoryName: 'Vitaminas y Minerales',
        price: 13.50,
        rating: 4.9,
        reviewsCount: 45,
        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        size: '60 cápsulas vegetales',
        image: 'https://placehold.co/600x600/CCD5AE/283618?text=Capsulas+de+Vitamina+C%0Arodeadas+de+hojas',
        images: [
          'https://placehold.co/600x600/CCD5AE/283618?text=Capsulas+de+Vitamina+C%0Arodeadas+de+hojas',
          'https://placehold.co/600x600/CCD5AE/283618?text=Capsulas+de+Vitamina+C%0Arodeadas+de+hojas%0A(Vista+2)',
          'https://placehold.co/600x600/CCD5AE/283618?text=Capsulas+de+Vitamina+C%0Arodeadas+de+hojas%0A(Detalle)'
        ],
        shortDesc: 'Vitamina C natural biodisponible con pulpa de camu camu silvestre.',
        ingredients: 'Ácido ascórbico vegetal, extracto de Myrciaria dubia (camu camu).',
        usage: '1 cápsula diaria con el desayuno.'
      },
      {
        id: 'omega-3',
        name: 'Perlas de Omega 3, 6 y 9 de Sacha Inchi',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'vitaminas-minerales',
        subcategoryName: 'Vitaminas y Minerales',
        price: 15.00,
        rating: 5.0,
        reviewsCount: 39,
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        size: '90 perlas softgel',
        image: 'https://vivaelmusculo.com/img/cms/omega%203-6-9.png',
        images: [
          'https://vivaelmusculo.com/img/cms/omega%203-6-9.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4Q7dwDygCvayBaBjpKjnrcDbUfmOjCtn9fWMPMeTwQ5wuFpAY3d91NWG&s=10',
          'https://bodegaportilla.com/cdn/shop/files/SACHA_INCHI.png?v=1781381737&width=1946'
        ],
        shortDesc: 'Aceite vegetal prensado en frío virgen. Salud cardiovascular y cerebral.',
        ingredients: '100% aceite virgen de semilla de Sacha Inchi (Plukenetia volubilis).',
        usage: 'Tomar 2 cápsulas al día con almuerzo.'
      },
      {
        id: 'cloruro-magnesio',
        name: 'Cloruro de Magnesio',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'vitaminas-minerales',
        subcategoryName: 'Vitaminas y Minerales',
        price: 4.50,
        rating: 4.8,
        reviewsCount: 52,
        isFeatured: false,
        isBestSeller: false,
        isNew: false,
        size: 'Fundita 100g cristales',
        image: 'https://cdn.clinicabaviera.com/blog/wp-content/uploads/2020/08/cloruro-de-magnesio-propiedades.jpg',
        images: [
          'https://cdn.clinicabaviera.com/blog/wp-content/uploads/2020/08/cloruro-de-magnesio-propiedades.jpg',
          'https://chilebefree.com/cdn/shop/products/ClorurodeMagnesioenpolvo270mg_120porciones_marcaDulzuraNatural_1200x1200.png?v=1632427386',
          'https://cdnx.jumpseller.com/guadalupe-tienda-natural/image/31166805/Captura_de_Pantalla_2023-01-25_a_la_s__11.32.11.png?1674660214'
        ],
        shortDesc: 'Equilibrio muscular, combate calambres y mejora la energía celular.',
        ingredients: 'Cloruro de magnesio cristalizado puro.',
        usage: 'Disolver 33g en 1 litro de agua hervida fría. Tomar un vasito tequilero al día.'
      },
      {
        id: 'jarabe-sabila',
        name: 'Jarabe de Sábila con Miel y Propóleo',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'remedios',
        subcategoryName: 'Remedios',
        price: 8.50,
        rating: 4.9,
        reviewsCount: 27,
        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        size: 'Botella 250ml',
        image: 'https://lavendita.es/wp-content/uploads/image-39.png',
        images: [
          'https://lavendita.es/wp-content/uploads/image-39.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAeUKnMDdmcX9YyfZ25HumC5y0GHS48y9QxDC3x1OO8dhD_k7qu-NY4M&s=10',
          'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Lemon-and-Honey.jpg'
        ],
        shortDesc: 'Fórmula tradicional para gastritis, reflujo y regeneración de mucosa gástrica.',
        ingredients: 'Cristales de Aloe barbadensis, miel de abeja pura, propóleo.',
        usage: '1 cucharada antes de cada comida principal.'
      },
      {
        id: 'capsulas-propoleo',
        name: 'Cápsulas de Propóleo y Polen Andino',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'remedios',
        subcategoryName: 'Remedios',
        price: 11.00,
        rating: 4.8,
        reviewsCount: 23,
        isFeatured: false,
        isBestSeller: false,
        isNew: true,
        size: '60 cápsulas',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PqkarzXXhxZydKUJr4HPhdgzwkxsACWWAAGsbNI7fu5R6NNYQ3hups0v&s=10',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PqkarzXXhxZydKUJr4HPhdgzwkxsACWWAAGsbNI7fu5R6NNYQ3hups0v&s=10',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1aZZPSUC7SA1ZJ6X7D6Snd_IAIC7fqCkkRlK7y181OD0_sZ-uOYVXH2x&s=10',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tn_n4RQfxtfPA-eQjFShq708QX5SCLCYE8ivTT2RAg&s'
        ],
        shortDesc: 'Defensas activas, vigorizante físico y protección invernal.',
        ingredients: 'Propóleo micronizado, polen multifloral de altura.',
        usage: '2 cápsulas en las mañanas.'
      },
      {
        id: 'maca',
        name: 'Maca Andina Negra Gelatinizada',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'suplementos-polvo',
        subcategoryName: 'Suplementos en Polvo',
        price: 8.50,
        rating: 5.0,
        reviewsCount: 58,
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        size: '250g polvo soluble',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOlBnDDUtiKOEEfB3vuVdLrztZySFMmJs29vRBK3j5-Yirc4KdygNS8m&s=10',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOlBnDDUtiKOEEfB3vuVdLrztZySFMmJs29vRBK3j5-Yirc4KdygNS8m&s=10',
          'https://salmacapanela.com/wp-content/uploads/2024/03/macamini.jpg',
          'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=80'
        ],
        shortDesc: 'Raíz andina adaptógena. Vigor, equilibrio hormonal y resistencia física sin irritar el estómago.',
        ingredients: '100% Lepidium meyenii andina gelatinizada sin almidones pesados.',
        usage: '1 cucharadita (5g) disuelta en batidos, avena o yogur matutino.'
      },
      {
        id: 'cacao',
        name: 'Cacao Fino de Aroma Puro 100%',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'suplementos-polvo',
        subcategoryName: 'Suplementos en Polvo',
        price: 6.00,
        rating: 4.9,
        reviewsCount: 47,
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        size: '200g polvo puro',
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=80',
        images: [
          'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=80',
          'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80',
          'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=700&q=80'
        ],
        shortDesc: 'Cacao criollo de Los Ríos sin azúcares añadidos ni alcalinización. Teobromina y magnesio puro.',
        ingredients: '100% semilla de Theobroma cacao fermentada y molida.',
        usage: '1 a 2 cucharadas en leche tibia vegetal o postres saludables.'
      },
      {
        id: 'sacha-inchi-polvo',
        name: 'Harina Proteica de Sacha Inchi',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'suplementos-polvo',
        subcategoryName: 'Suplementos en Polvo',
        price: 7.20,
        rating: 4.8,
        reviewsCount: 31,
        isFeatured: false,
        isBestSeller: false,
        isNew: true,
        size: '300g polvo proteico',
        image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=700&q=80',
        images: [
          'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=700&q=80',
          'https://bodegaportilla.com/cdn/shop/files/ff90086d-d6d9-49c6-91e3-e8c87dc8ed87.png?v=1756159417&width=500',
          'https://adex-b2peru.s3.amazonaws.com/userfiles/product/photos/805_5f5dce2c58d9f.jpg'
        ],
        shortDesc: '60% proteína vegetal completa y digestible con aminoácidos esenciales.',
        ingredients: 'Torta desgrasada micropulverizada de Sacha Inchi.',
        usage: 'Agregar 1 scoop (20g) a licuados post-entrenamiento.'
      },
      {
        id: 'moringa',
        name: 'Moringa Orgánica en Polvo',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'suplementos-polvo',
        subcategoryName: 'Suplementos en Polvo',
        price: 5.50,
        rating: 4.7,
        reviewsCount: 26,
        isFeatured: false,
        isBestSeller: false,
        isNew: false,
        size: '150g polvo verde',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip0lfEhomXU0Api86FkKXEX0de3shdA_Wa-zpGdJcRg&s',
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip0lfEhomXU0Api86FkKXEX0de3shdA_Wa-zpGdJcRg&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmDcBO9rp9pE9owHa-Hhd7qdZGplQ4-GdxrbTNsp4Zf4LmAgFvJ4itmJX&s=10',
          'https://blog.oncosalud.pe/hubfs/moringa-para-que-sirve-beneficios.jpg'
        ],
        shortDesc: 'El árbol de la vida. Multivitamínico verde rico en clorofila y hierro vegetal.',
        ingredients: '100% hojas tiernas de Moringa oleifera deshidratadas.',
        usage: 'Media cucharadita en jugos verdes o espolvoreado en ensaladas.'
      },
      {
        id: 'colageno',
        name: 'Colágeno Hidrolizado + Biotina y Camu Camu',
        category: 'suplementos',
        categoryName: 'Suplementos',
        subcategory: 'suplementos-polvo',
        subcategoryName: 'Suplementos en Polvo',
        price: 18.00,
        rating: 4.9,
        reviewsCount: 68,
        isFeatured: true,
        isBestSeller: true,
        isNew: true,
        size: '350g con dosificador',
        image: 'https://www.nutrimea.com/cdn/shop/articles/Capture_d_ecran_2026-05-19_a_11.06.21_420c22a4-7e46-4463-82fd-1a52e0692427.png?v=1779871726&width=2048',
        images: [
          'https://www.nutrimea.com/cdn/shop/articles/Capture_d_ecran_2026-05-19_a_11.06.21_420c22a4-7e46-4463-82fd-1a52e0692427.png?v=1779871726&width=2048',
          'https://http2.mlstatic.com/D_NQ_NP_699383-MEC94872518843_102025-O.webp',
          'https://http2.mlstatic.com/D_NQ_NP_979733-MEC104018417519_012026-O.webp'
        ],
        shortDesc: 'Péptidos bioactivos para articulaciones flexibles, uñas firmes y piel tersa.',
        ingredients: 'Péptidos de colágeno hidrolizado bovino, vitamina C natural de camu camu, biotina pura.',
        usage: 'Disolver 1 cucharada dosificadora en 200ml de agua o jugo en ayunas.'
      }
    ];

    /* Estado del carrito y checkout */
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem('sacha_pamba_cart') || '[]');
    } catch (e) {
      cart = [];
    }

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
      localStorage.setItem('sacha_pamba_cart', JSON.stringify(cart));
      updateCartBadge();
      updateCartDrawerUI();
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
          cartLink.setAttribute('aria-label', totalCount === 1 ? 'Carrito de compras, 1 producto' : `Carrito de compras, ${totalCount} productos`);
        }
      }
    }

    function updateCartDrawerUI() {
      const itemsContainer = document.getElementById('cart-drawer-items');
      const countBadge = document.getElementById('cart-drawer-count');
      const totalEl = document.getElementById('cart-drawer-total');
      if (!itemsContainer) return;

      const prevScrollTop = itemsContainer.scrollTop;

      const totalCount = cart.reduce((sum, item) => sum + (Math.max(1, parseInt(item.quantity, 10) || 1)), 0);
      const totalCents = cart.reduce((sum, item) => {
        const pCents = Math.round(Number(item.price) * 100);
        const q = Math.max(1, parseInt(item.quantity, 10) || 1);
        return sum + (pCents * q);
      }, 0);
      const total = totalCents / 100;

      if (countBadge) countBadge.textContent = totalCount;
      if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

      if (!cart || cart.length === 0) {
        itemsContainer.innerHTML = `
          <div class="text-center py-6 px-2 space-y-1.5">
            <i aria-hidden="true" class="ph ph-shopping-bag text-2xl text-brand-forest/40 block mx-auto"></i>
            <p class="text-xs font-bold text-brand-forest">Aún no hay productos</p>
            <p class="text-[11px] text-brand-forest/70 font-medium">Tus productos añadidos aparecerán aquí.</p>
          </div>
        `;
        return;
      }

      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-card" title="${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name} (${item.quantity} ud.)">
          <div class="cart-item-row">
            <!-- Botón restar (-) fuera del recuadro -->
            <button 
              type="button" 
              onclick="event.stopPropagation(); updateCartQuantity('${item.id}', -1)" 
              class="cart-qty-btn cart-qty-minus"
              title="Quitar una unidad"
              aria-label="Quitar una unidad de ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}"
            >
              <i aria-hidden="true" class="ph-bold ph-minus"></i>
            </button>

            <!-- Recuadro del producto con lupa en hover y botón circular X para eliminar -->
            <div class="cart-thumb-wrapper">
              <!-- Botón circular en la esquina derecha con una X para eliminar -->
              <button 
                type="button" 
                onclick="event.stopPropagation(); removeFromCart('${item.id}')" 
                class="cart-delete-x-btn" 
                title="Eliminar ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}" 
                aria-label="Eliminar ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name} del carrito"
              >
                <i aria-hidden="true" class="ph-bold ph-x"></i>
              </button>

              <div class="cart-thumb-box w-16 h-16 rounded-xl overflow-hidden bg-white shadow-xs group cursor-pointer relative">
                <img 
                  src="${item.image}" 
                  alt="${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onerror="this.src='https://placehold.co/100x100/CCD5AE/283618?text=P'"
                >
                <!-- Capa con icono de lupa visible al hacer hover para ver el producto -->
                <a 
                  href="producto.html?id=${item.id}" 
                  onclick="event.stopPropagation(); navigateTo('producto.html?id=${item.id}');"
                  class="cart-hover-zoom absolute inset-0 bg-black/55 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer z-20"
                  title="Ver ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}"
                  aria-label="Ver detalle de ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}"
                >
                  <i aria-hidden="true" class="ph ph-magnifying-glass text-2xl text-brand-cream hover:text-brand-sunflower hover:scale-110 active:scale-95 transition-all"></i>
                </a>
              </div>
            </div>

            <!-- Botón sumar (+) fuera del recuadro -->
            <button 
              type="button" 
              onclick="event.stopPropagation(); updateCartQuantity('${item.id}', 1)" 
              class="cart-qty-btn cart-qty-plus"
              title="Añadir una unidad"
              aria-label="Añadir una unidad de ${typeof escapeHtml === 'function' ? escapeHtml(item.name) : item.name}"
            >
              <i aria-hidden="true" class="ph-bold ph-plus"></i>
            </button>
          </div>

          <!-- Debajo del recuadro: cant: y el número, seguido del precio -->
          <div class="cart-item-info">
            <span class="cart-item-qty">cant: <strong class="cart-item-qty-num">${item.quantity}</strong></span>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      `).join('');
      if (prevScrollTop > 0) {
        itemsContainer.scrollTop = prevScrollTop;
      }
    }

    // Control del desplegable de carrito: Inmune a zoom del navegador (tamaño físico fijo y bordes uniformes de 1px)
    function updateCartDrawerZoom() {
      const drawer = document.getElementById('cart-side-drawer');
      if (!drawer) return;

      const currentDPR = window.devicePixelRatio || 1;
      let baseDPR = parseFloat(sessionStorage.getItem('sacha_base_dpr'));

      if (!baseDPR || isNaN(baseDPR) || baseDPR <= 0) {
        let estimatedZoom = 1;
        if (window.outerWidth && window.innerWidth) {
          estimatedZoom = window.outerWidth / window.innerWidth;
        }
        if (estimatedZoom >= 0.2 && estimatedZoom <= 6.0) {
          const rawBase = currentDPR / estimatedZoom;
          const standardScales = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];
          let closest = standardScales[0];
          let minDiff = Math.abs(rawBase - closest);
          for (let i = 1; i < standardScales.length; i++) {
            const diff = Math.abs(rawBase - standardScales[i]);
            if (diff < minDiff) {
              minDiff = diff;
              closest = standardScales[i];
            }
          }
          baseDPR = closest;
        } else {
          baseDPR = currentDPR;
        }
        sessionStorage.setItem('sacha_base_dpr', String(baseDPR));
      }

      let zoom = currentDPR / baseDPR;
      // Amplio rango continuo de zoom (de 15% a 800%) para cubrir cualquier nivel extremo sin saltos ni descalibración
      zoom = Math.max(0.15, Math.min(8.0, zoom));
      const invZoom = 1 / zoom;

      // Inmunidad total al zoom: el desplegable mantiene exactamente sus dimensiones y bordes idénticos en pantalla
      drawer.style.zoom = String(invZoom);
      document.documentElement.style.setProperty('--cart-zoom', String(zoom));
    }

    // Event listener único y síncrono para actualización instantánea sin saltos ni demoras
    window.addEventListener('resize', updateCartDrawerZoom, { passive: true });

    // Si el usuario restablece zoom (Ctrl + 0), recalibramos la base
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '0' || e.code === 'Digit0' || e.code === 'Numpad0')) {
        setTimeout(() => {
          sessionStorage.setItem('sacha_base_dpr', String(window.devicePixelRatio || 1));
          updateCartDrawerZoom();
        }, 80);
      }
    });

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
        if (typeof icon === 'string' && icon.trim().startsWith('<svg')) {
          iconEl.innerHTML = icon;
        } else {
          iconEl.innerHTML = `<i aria-hidden="true" class="ph ${icon}"></i>`;
        }
      }

      if (action && typeof action.onClick === 'function') {
        if (actionBtn) {
          actionBtn.classList.remove('hidden');
          actionBtn.innerHTML = action.html || `<i aria-hidden="true" class="ph ph-arrow-u-up-left font-bold text-sm"></i><span>${action.label || 'Deshacer'}</span>`;
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

    function getFavorites() {
      try {
        const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (raw === null) {
          // Favoritos predeterminados iniciales para demostración inmediata
          const initial = ['omega-3', 'vitamina-c', 'jarabe-sabila'];
          localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(initial));
          return initial;
        }
        return JSON.parse(raw) || [];
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

    // Renderizador SVG vector puro ultra ligero para carga instantánea (0ms) sin dependencias ni artefactos
    function getHeartIconSVG(isFav, sizeClass = 'w-4 h-4 sm:w-5 sm:h-5') {
      const heartPath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
      if (isFav) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="${sizeClass} pointer-events-none select-none inline-block flex-shrink-0" fill="currentColor" stroke="none" aria-hidden="true"><path d="${heartPath}"></path></svg>`;
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="${sizeClass} pointer-events-none select-none inline-block flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${heartPath}"></path></svg>`;
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
        btn.innerHTML = getHeartIconSVG(isFav, 'w-4 h-4 sm:w-4.5 sm:h-4.5');
      });

      // 2. Actualizar botón en la vista de detalle de producto
      const detailBtn = document.getElementById(`detail-fav-btn-${productId}`);
      if (detailBtn) {
        detailBtn.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Añadir a favoritos');
        detailBtn.removeAttribute('title');
        if (isFav) {
          detailBtn.className = 'w-full py-3.5 px-3 sm:px-4 rounded-xl bg-[#FEFAE0] hover:bg-white text-brand-forest border-2 border-brand-forest shadow-sm font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none focus:outline-none min-h-[50px] sm:min-h-[52px]';
          detailBtn.innerHTML = `
            ${getHeartIconSVG(true, 'w-5 h-5 text-amber-500 flex-shrink-0')}
            <span id="detail-fav-btn-text-${productId}" class="whitespace-nowrap font-bold">En favoritos</span>
          `;
        } else {
          detailBtn.className = 'w-full py-3.5 px-3 sm:px-4 rounded-xl bg-brand-forest hover:bg-[#1e2912] text-brand-cream border-2 border-brand-forest shadow-sm font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none focus:outline-none min-h-[50px] sm:min-h-[52px]';
          detailBtn.innerHTML = `
            ${getHeartIconSVG(false, 'w-5 h-5 text-brand-sunflower flex-shrink-0')}
            <span id="detail-fav-btn-text-${productId}" class="whitespace-nowrap font-bold">Añadir a favoritos</span>
          `;
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
        detailImgBtn.innerHTML = getHeartIconSVG(isFav, 'w-4.5 h-4.5 sm:w-5 sm:h-5');
      }

      // Micro-pulso sutil e instantáneo en el botón
      document.querySelectorAll(`[id="card-fav-btn-${productId}"], [id="detail-img-fav-btn-${productId}"]`).forEach(btn => {
        btn.classList.add('scale-110');
        setTimeout(() => btn.classList.remove('scale-110'), 180);
      });
    }

    function toggleFavorite(productId, forceAdd = false) {
      let favs = getFavorites();
      const index = favs.indexOf(productId);
      let added = false;

      if (index > -1) {
        if (forceAdd) {
          added = true;
        } else {
          favs.splice(index, 1);
          added = false;
        }
      } else {
        favs.push(productId);
        added = true;
      }

      saveFavorites(favs);
      updateFavoriteUI(productId, added);

      const prod = PRODUCTS.find(p => p.id === productId);
      const prodName = prod ? prod.name : 'Producto';

      if (added) {
        showToast(`"${prodName}" añadido a tus favoritos`, getHeartIconSVG(true, 'w-5 h-5 text-brand-sunflower'));
      } else {
        showToast(`"${prodName}" eliminado de favoritos`, getHeartIconSVG(false, 'w-5 h-5 text-brand-forest'));
      }

      // Si el usuario está visualizando la pestaña de favoritos en Mi Cuenta, refrescar la lista
      if (typeof currentAccountTab !== 'undefined' && currentAccountTab === 'favorites') {
        if (!added && prod) {
          // Si otro producto se elimina de favoritos, quitar el anterior producto que estaba con deshacer
          const previousUndoIds = Object.keys(pendingUndoFavorites);
          if (previousUndoIds.length > 0) {
            favoritesDisplayOrder = favoritesDisplayOrder.filter(id => !previousUndoIds.includes(id));
          }
          pendingUndoFavorites = { [productId]: prod };
        } else if (added) {
          delete pendingUndoFavorites[productId];
        }
        renderFavoritesTabContent();
      }

      return added;
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
    let favoritesDisplayOrder = [];

    // Tarjeta con botón de deshacer en el lugar exacto del producto eliminado en la página de favoritos
    function renderFavoriteUndoCard(p) {
      const prodName = typeof escapeHtml === 'function' ? escapeHtml(p.name) : p.name;
      return `
        <article role="status" aria-label="Producto ${prodName} eliminado de favoritos" class="caja_fav w-full">
          <div id="fav-undo-${p.id}" class="tarjeta_fav bg-[#FEFAE0] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-dashed border-brand-forest/40 p-4 sm:p-5 w-full box-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            
            <div class="flex items-center gap-3.5 min-w-0 w-full sm:w-auto flex-1">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-brand-cream border border-brand-forest/20 flex-shrink-0 shadow-2xs">
                <img 
                  src="${p.image}" 
                  alt="${prodName}" 
                  class="w-full h-full object-cover opacity-60 grayscale"
                  onerror="this.src='https://placehold.co/100x100/CCD5AE/283618?text=P'"
                >
              </div>
              <div class="min-w-0 space-y-1 text-left flex-1">
                <div>
                  <span class="inline-block px-2.5 py-0.5 rounded-md bg-brand-forest/15 text-brand-forest text-[11px] font-bold">
                    Eliminado de favoritos
                  </span>
                </div>
                <h3 class="font-botanic font-bold text-sm sm:text-base md:text-lg text-brand-forest leading-snug line-clamp-2 break-words" title="${prodName}">
                  ${prodName}
                </h3>
                <p class="text-[11px] sm:text-xs text-brand-leaf/70 font-medium">
                  Se quitó este producto de tu lista de favoritos.
                </p>
              </div>
            </div>

            <!-- Botón Deshacer en el lugar donde estaba el producto -->
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end flex-shrink-0">
              <button 
                type="button" 
                role="button"
                onclick="undoRemoveFavorite('${p.id}')" 
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-xs sm:text-sm shadow-xs transition-transform active:scale-95 border-2 border-brand-forest/20 cursor-pointer whitespace-nowrap w-full sm:w-auto"
                aria-label="Deshacer y restaurar ${prodName} a favoritos"
              >
                <i aria-hidden="true" class="ph ph-arrow-u-up-left text-base sm:text-lg font-bold"></i>
                <span>Deshacer</span>
              </button>
            </div>

          </div>
        </article>
      `;
    }

    function undoRemoveFavorite(productId) {
      if (!productId) return;
      delete pendingUndoFavorites[productId];
      toggleFavorite(productId, true);
    }

    function getCatalogCategoriesAndSubcategories() {
      const map = {};
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

    function setFavFilterCategory(cat) {
      filtro_cat = cat;
      filtro_subcat = 'all'; // reiniciar subcategoría al cambiar de categoría
      renderFavoritesTabContent();
    }

    function setFavFilterSubcategory(subcat) {
      filtro_subcat = subcat;
      renderFavoritesTabContent();
    }

    function resetFavFilters() {
      filtro_cat = 'all';
      filtro_subcat = 'all';
      renderFavoritesTabContent();
    }

    // Tarjeta de producto simplificada y perfectamente adaptable exclusiva para el apartado de favoritos
    function renderFavoriteProductCard(p) {
      const es_fav = isFavorite(p.id);
      const prodName = typeof escapeHtml === 'function' ? escapeHtml(p.name) : p.name;
      return `
        <article role="article" aria-label="Producto favorito: ${prodName}" class="caja_fav w-full">
          <div id="fav-card-${p.id}" class="tarjeta_fav bg-[#FEFAE0] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-brand-forest hover:border-[#1a2410] p-4 sm:p-5 hover:shadow-md group cursor-pointer w-full box-border relative" onclick="handleProductCardClick(event, '${p.id}')">
            
            <!-- Botón de basurero para eliminar de favoritos en la esquina superior derecha -->
            <button 
              type="button" 
              role="button"
              onclick="event.stopPropagation(); toggleFavorite('${p.id}')" 
              class="btn_eliminar_fav absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center cursor-pointer select-none"
              title="Eliminar de favoritos"
              aria-label="Eliminar ${prodName} de favoritos"
            >
              <i aria-hidden="true" class="ph ph-trash text-lg sm:text-xl font-bold"></i>
            </button>

            <!-- Imagen del producto siempre cuadrada, nunca estirada ni encogida -->
            <div 
              class="caja_img_fav product-card-image-box bg-brand-cream border border-brand-forest/20 shadow-xs select-none"
              onclick="handleCardImageClick(event, '${p.id}')"
              ondblclick="triggerFavoriteDblClick('${p.id}', event)"
              ondragstart="return false;"
            >
              <img 
                src="${p.image}" 
                alt="${prodName}" 
                draggable="false"
                ondragstart="return false;"
                class="w-full h-full object-cover pointer-events-none select-none"
                onerror="this.src='https://placehold.co/400x400/CCD5AE/283618?text=${encodeURIComponent(p.name)}'"
              >
              <button 
                type="button" 
                role="button"
                id="card-fav-btn-${p.id}" 
                onclick="event.stopPropagation(); toggleFavorite('${p.id}')" 
                ondblclick="event.stopPropagation(); event.preventDefault();"
                class="card-fav-btn absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full ${es_fav ? 'bg-[#FEFAE0] hover:bg-white text-amber-500 border-2 border-brand-forest shadow-md' : 'bg-[#283618]/90 hover:bg-[#283618] text-brand-sunflower border border-brand-sunflower/40 shadow-md'} flex items-center justify-center cursor-pointer select-none focus:outline-none"
                aria-label="${es_fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}"
              >
                ${getHeartIconSVG(es_fav, 'w-4.5 h-4.5 sm:w-5 sm:h-5')}
              </button>
            </div>

            <!-- Columna de detalles del producto con ancho completo y organización adaptable -->
            <div class="datos_fav space-y-3">
              <div class="min-w-0 space-y-1.5 pr-9 sm:pr-11">
                <div>
                  <span class="inline-block px-2.5 py-0.5 rounded-md bg-brand-forest text-brand-cream text-[11px] sm:text-xs font-bold tracking-wide shadow-2xs border border-brand-forest/20 max-w-full truncate">
                    ${p.categoryName || ''}
                  </span>
                </div>
                <h3 class="font-botanic font-bold text-base sm:text-lg text-brand-forest leading-snug line-clamp-2 break-words group-hover:text-brand-moss transition-colors" title="${prodName}">
                  <a href="producto.html?id=${p.id}" tabindex="-1" onclick="saveCatalogPosition('${p.id}')">
                    ${p.name}
                  </a>
                </h3>
                <span class="text-xs sm:text-sm text-brand-moss font-bold block pt-0.5">${p.size}</span>
              </div>

              <!-- Fila de precio y botones de acción nunca cortados y con espaciado amplio -->
              <div class="mt-3 pt-3 border-t border-brand-forest/15 flex flex-wrap items-center justify-between gap-3 w-full" role="group" aria-label="Acciones de compra para ${p.name}">
                <span class="text-base sm:text-lg md:text-xl font-extrabold text-brand-forest leading-none whitespace-nowrap">$${p.price.toFixed(2)}</span>
                <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <a 
                    href="producto.html?id=${p.id}" 
                    role="button"
                    onclick="saveCatalogPosition('${p.id}')" 
                    class="btn_ver_fav flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 sm:py-2.5 rounded-xl bg-brand-cream hover:bg-[#CCD5AE] text-brand-forest text-xs sm:text-sm font-bold shadow-2xs border-2 border-brand-forest text-center whitespace-nowrap cursor-pointer transition-colors"
                    aria-label="Ver detalle de ${p.name}"
                  >
                    <span>Ver</span>
                  </a>
                  <button 
                    type="button" 
                    role="button"
                    onclick="event.stopPropagation(); addToCart('${p.id}', 1)" 
                    class="btn_agregar_fav flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold shadow-xs cursor-pointer whitespace-nowrap transition-colors"
                    aria-label="Añadir ${p.name} al carrito"
                  >
                    <i aria-hidden="true" class="ph ph-shopping-cart text-sm sm:text-base text-brand-sunflower flex-shrink-0"></i>
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </article>
      `;
    }

    function getFavoritesTabHTML() {
      const favIds = getFavorites();

      // Sincronizar el orden de visualización de favoritos para mantener la posición exacta al eliminar/deshacer
      if (!Array.isArray(favoritesDisplayOrder) || favoritesDisplayOrder.length === 0) {
        favoritesDisplayOrder = [...favIds];
      } else {
        favIds.forEach(id => {
          if (!favoritesDisplayOrder.includes(id)) {
            favoritesDisplayOrder.push(id);
          }
        });
        favoritesDisplayOrder = favoritesDisplayOrder.filter(id => favIds.includes(id) || pendingUndoFavorites[id]);
      }

      const itemsParaMostrar = [];
      favoritesDisplayOrder.forEach(id => {
        const prod = PRODUCTS.find(p => p.id === id);
        if (!prod) return;
        if (favIds.includes(id)) {
          itemsParaMostrar.push({ isUndo: false, product: prod });
        } else if (pendingUndoFavorites[id]) {
          itemsParaMostrar.push({ isUndo: true, product: pendingUndoFavorites[id] });
        }
      });

      let prods_filtrados = itemsParaMostrar;
      if (filtro_cat !== 'all') {
        prods_filtrados = prods_filtrados.filter(item => item.product.category === filtro_cat);
      }
      if (filtro_subcat !== 'all') {
        prods_filtrados = prods_filtrados.filter(item => item.product.subcategory === filtro_subcat);
      }

      const catMap = getCatalogCategoriesAndSubcategories();

      // Construcción dinámica de opciones de categoría
      const opciones_cat = Object.keys(catMap).map(catKey => {
        const cat = catMap[catKey];
        return `<option value="${cat.id}" ${filtro_cat === cat.id ? 'selected' : ''}>${cat.name}</option>`;
      }).join('');

      // Construcción dinámica de opciones de subcategoría según categoría activa
      let opciones_subcat = '';
      if (filtro_cat === 'all') {
        const uniqueSubs = {};
        PRODUCTS.forEach(p => {
          if (p.subcategory && !uniqueSubs[p.subcategory]) {
            uniqueSubs[p.subcategory] = p.subcategoryName || p.subcategory;
          }
        });
        opciones_subcat = Object.keys(uniqueSubs).map(subKey => {
          return `<option value="${subKey}" ${filtro_subcat === subKey ? 'selected' : ''}>${uniqueSubs[subKey]}</option>`;
        }).join('');
      } else if (catMap[filtro_cat]) {
        const subs = catMap[filtro_cat].subcategories;
        opciones_subcat = Object.keys(subs).map(subKey => {
          return `<option value="${subKey}" ${filtro_subcat === subKey ? 'selected' : ''}>${subs[subKey]}</option>`;
        }).join('');
      }

      const hay_filtros = filtro_cat !== 'all' || filtro_subcat !== 'all';

      let html_contenido = '';
      if (itemsParaMostrar.length === 0) {
        // Estado vacío: Sin favoritos en la cuenta
        html_contenido = `
          <div class="text-center py-10 sm:py-14 px-4 bg-[#FEFAE0] rounded-3xl border-2 border-dashed border-brand-forest/30 space-y-4">
            <div class="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center text-3xl sm:text-4xl">
              <i aria-hidden="true" class="ph ph-heart-break text-brand-forest/60"></i>
            </div>
            <div class="max-w-md mx-auto space-y-1.5">
              <h3 class="font-botanic font-bold text-lg sm:text-xl text-brand-forest">
                Aún no tienes productos favoritos
              </h3>
              <p class="text-xs sm:text-sm text-brand-leaf/80 leading-relaxed font-medium">
                Guarda tus productos preferidos haciendo clic en el corazón verde oscuro o haciendo doble clic sobre su imagen en el catálogo.
              </p>
            </div>
            <div class="pt-2">
              <button 
                type="button" 
                onclick="navigateTo('categoria.html')" 
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer border border-brand-forest"
              >
                <i aria-hidden="true" class="ph ph-compass text-base text-brand-sunflower"></i>
                <span>Explorar Catálogo</span>
              </button>
            </div>
          </div>
        `;
      } else if (prods_filtrados.length === 0) {
        // Estado vacío: Ningún favorito coincide con los filtros
        html_contenido = `
          <div class="text-center py-10 sm:py-12 px-4 bg-[#FEFAE0] rounded-3xl border-2 border-dashed border-brand-forest/30 space-y-3">
            <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center text-2xl sm:text-3xl">
              <i aria-hidden="true" class="ph ph-magnifying-glass text-brand-forest/60"></i>
            </div>
            <div class="max-w-md mx-auto space-y-1">
              <h3 class="font-botanic font-bold text-base sm:text-lg text-brand-forest">
                Sin favoritos en esta selección
              </h3>
              <p class="text-xs sm:text-sm text-brand-leaf/80 font-medium">
                No tienes productos favoritos que coincidan con la categoría o subcategoría seleccionada.
              </p>
            </div>
            <div class="pt-1">
              <button 
                type="button" 
                onclick="resetFavFilters()" 
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <i aria-hidden="true" class="ph ph-funnel-x text-sm text-brand-sunflower"></i>
                <span>Restablecer filtros</span>
              </button>
            </div>
          </div>
        `;
      } else {
        // Lista de favoritos horizontal simplificada y 100% adaptable
        html_contenido = `
          <div class="cuadricula_fav grid grid-cols-1 gap-4 sm:gap-5 w-full">
            ${prods_filtrados.map(item => item.isUndo ? renderFavoriteUndoCard(item.product) : renderFavoriteProductCard(item.product)).join('')}
          </div>
        `;
      }

      return `
        <div class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-3.5 sm:p-5 lg:p-6 shadow-sm space-y-4 sm:space-y-6 text-left box-border w-full">
          <!-- Encabezado de la pestaña con contador y título -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-forest/20 pb-4">
            <div class="min-w-0">
              <div class="flex items-center gap-2.5 flex-wrap">
                <h2 class="font-botanic font-bold text-xl sm:text-2xl text-brand-forest">
                  Productos Favoritos
                </h2>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCD5AE] border border-brand-forest/30 text-brand-forest text-xs font-bold shadow-xs whitespace-nowrap">
                  ${getHeartIconSVG(true, 'w-3.5 h-3.5 text-brand-forest')}
                  <span>${favIds.length} ${favIds.length === 1 ? 'producto' : 'productos'}</span>
                </span>
              </div>
              <p class="text-xs sm:text-sm text-brand-leaf/70 font-medium mt-1">
                Tus productos guardados organizados por categoría y listos para añadir a tu compra
              </p>
            </div>

            ${hay_filtros ? `
              <div class="flex-shrink-0 self-start sm:self-center">
                <button 
                  type="button" 
                  onclick="resetFavFilters()" 
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#CCD5AE] border border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-cream text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer whitespace-nowrap"
                  title="Restablecer todos los filtros"
                >
                  <i aria-hidden="true" class="ph ph-funnel-x text-sm"></i>
                  <span>Limpiar filtros</span>
                </button>
              </div>
            ` : ''}
          </div>

          <!-- Barra de Filtros por Categoría y Subcategoría en color #CCD5AE -->
          <div class="p-4 sm:p-5 rounded-2xl bg-[#CCD5AE] border-2 border-brand-forest shadow-xs space-y-3.5 box-border w-full">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <div class="flex items-center gap-2 text-brand-forest font-bold text-xs sm:text-sm">
                <i aria-hidden="true" class="ph ph-funnel text-base text-brand-forest flex-shrink-0"></i>
                <span class="uppercase tracking-wider text-[11px] sm:text-xs font-extrabold">Filtrar favoritos:</span>
              </div>
              <span class="text-[11px] sm:text-xs text-brand-forest font-bold px-2.5 py-0.5 rounded-full bg-brand-cream/80 border border-brand-forest/20 shadow-2xs">
                Mostrando ${prods_filtrados.length} de ${itemsParaMostrar.length}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-start">
              <!-- Selector de Categoría -->
              <div class="space-y-1 w-full min-w-0">
                <label for="sel_cat_fav" class="block text-[11px] sm:text-xs font-extrabold text-brand-forest uppercase tracking-wider">
                  Categoría
                </label>
                <div class="relative w-full">
                  <select 
                    id="sel_cat_fav" 
                    onchange="setFavFilterCategory(this.value)"
                    class="w-full bg-[#FEFAE0] border-2 border-brand-forest text-brand-forest font-bold text-xs sm:text-sm rounded-xl px-3.5 py-2.5 pr-9 focus:outline-none focus:ring-2 focus:ring-brand-forest cursor-pointer appearance-none shadow-xs truncate"
                  >
                    <option value="all" ${filtro_cat === 'all' ? 'selected' : ''}>Todas las categorías</option>
                    ${opciones_cat}
                  </select>
                  <i aria-hidden="true" class="ph ph-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-brand-forest text-sm pointer-events-none"></i>
                </div>
              </div>

              <!-- Selector de Subcategoría -->
              <div class="space-y-1 w-full min-w-0">
                <label for="sel_subcat_fav" class="block text-[11px] sm:text-xs font-extrabold text-brand-forest uppercase tracking-wider">
                  Subcategoría
                </label>
                <div class="relative w-full">
                  <select 
                    id="sel_subcat_fav" 
                    onchange="setFavFilterSubcategory(this.value)"
                    class="w-full bg-[#FEFAE0] border-2 border-brand-forest text-brand-forest font-bold text-xs sm:text-sm rounded-xl px-3.5 py-2.5 pr-9 focus:outline-none focus:ring-2 focus:ring-brand-forest cursor-pointer appearance-none shadow-xs truncate"
                  >
                    <option value="all" ${filtro_subcat === 'all' ? 'selected' : ''}>
                      ${filtro_cat === 'all' ? 'Todas las subcategorías' : 'Todas las subcategorías de esta categoría'}
                    </option>
                    ${opciones_subcat}
                  </select>
                  <i aria-hidden="true" class="ph ph-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-brand-forest text-sm pointer-events-none"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Contenedor caja de la cuadrícula de favoritos -->
          <div id="caja_cuadricula_fav" class="w-full box-border">
            ${html_contenido}
          </div>

        </div>
      `;
    }

    function renderFavoritesTabContent() {
      const container = document.getElementById('account-tab-favorites');
      if (container) {
        const prevScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        container.innerHTML = getFavoritesTabHTML();
        if (typeof prevScrollY === 'number' && prevScrollY > 0) {
          window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
          requestAnimationFrame(() => {
            window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
          });
        }
      }
    }

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

      const currentPageUrl = getCurrentPageUrl() || 'index.html';
      if (currentPageUrl.includes('carrito.html')) {
        const prevScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        refreshPageContent();
        window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        });
      }

      showToast(`"${removedItem.name}" retirado del carrito`, 'ph-trash');
    }

    function undoRemoveFromCart() {
      if (!lastRemovedCartItem && !lastClearedCart) return;

      if (lastClearedCart && (!lastRemovedCartItem || lastClearedCart.length > 0)) {
        cart = lastClearedCart;
        lastClearedCart = null;
        lastRemovedCartItem = null;
        saveCart();
        const prevScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        refreshPageContent();
        window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        });
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

      const currentPageUrl = getCurrentPageUrl() || 'index.html';
      if (currentPageUrl.includes('carrito.html')) {
        const prevScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        refreshPageContent();
        window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        });
      }

      showToast(`"${restoredName}" restaurado al carrito`, 'ph-arrow-u-up-left');
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
        modal.classList.remove('hidden');
      }
    }

    function closeConfirmRemoveModal() {
      pendingRemoveProductId = null;
      const modal = document.getElementById('confirm-remove-modal');
      if (modal) {
        modal.classList.add('hidden');
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
      const currentPageUrl = getCurrentPageUrl() || 'index.html';
      if (currentPageUrl.includes('carrito.html')) {
        const prevScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        refreshPageContent();
        window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: prevScrollY, left: 0, behavior: 'instant' });
        });
      }
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
      refreshPageContent();
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

      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          dropdown.innerHTML = '';
          dropdown.classList.add('hidden');
          return;
        }

        const filtered = PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.shortDesc.toLowerCase().includes(query) ||
          p.subcategoryName.toLowerCase().includes(query)
        ).slice(0, 5);

        if (filtered.length === 0) {
          dropdown.innerHTML = `
            <div class="p-5 text-center text-sm text-brand-leaf/60 font-medium">
              No encontramos productos para "<strong class="text-brand-forest">${escapeHtml(query)}</strong>"
            </div>
          `;
          dropdown.classList.remove('hidden');
          return;
        }

        dropdown.innerHTML = filtered.map(p => `
          <a href="producto.html?id=${p.id}" class="flex items-center gap-3.5 p-3.5 hover:bg-brand-cream border-b border-brand-olive/30 last:border-none transition-colors group">
            <img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-lg object-cover border border-brand-olive flex-shrink-0" onerror="this.src='https://placehold.co/100x100/CCD5AE/283618?text=Planta'">
            <div class="flex-1 min-w-0 text-left">
              <span class="text-sm font-bold text-brand-forest truncate group-hover:text-brand-moss block">${p.name}</span>
              <p class="text-xs text-brand-leaf/70 font-medium">${p.subcategoryName} • $${p.price.toFixed(2)}</p>
            </div>
            <i aria-hidden="true" class="ph ph-arrow-right text-lg text-brand-moss group-hover:translate-x-1 transition-transform"></i>
          </a>
        `).join('');
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

    // --- Vista 2: Catálogo de Productos y Filtros (categoria.html) ---
    function renderCategoryView(params) {
      const selectedCat = params.cat || null;
      const selectedSubcat = params.subcat || null;
      const selectedSpecial = params.special || null;

      let filtered = PRODUCTS;
      let catTitle = 'Todos los Productos';
      let subcatTitle = '';

      if (selectedSpecial) {
        catTitle = 'Selección Especial';
        if (selectedSpecial === 'destacados') {
          filtered = filtered.filter(p => p.isFeatured);
          subcatTitle = 'Productos Destacados';
        } else if (selectedSpecial === 'mas-vendidos') {
          filtered = filtered.filter(p => p.isBestSeller);
          subcatTitle = 'Los Más Vendidos';
        } else if (selectedSpecial === 'nuevos') {
          filtered = filtered.filter(p => p.isNew);
          subcatTitle = 'Productos Nuevos';
        } else {
          filtered = filtered.filter(p => p.isFeatured || p.isBestSeller || p.isNew);
          subcatTitle = 'Toda la Selección Especial';
        }
      } else {
        if (selectedCat) {
          filtered = filtered.filter(p => p.category === selectedCat);
          if (selectedCat === 'suplementos') catTitle = 'Suplementos';
        }
        if (selectedSubcat) {
          filtered = filtered.filter(p => p.subcategory === selectedSubcat);
          const found = PRODUCTS.find(p => p.subcategory === selectedSubcat);
          if (found) subcatTitle = found.subcategoryName;
        }
      }

      const allSpecialCount = PRODUCTS.filter(p => p.isFeatured || p.isBestSeller || p.isNew).length;
      const lastProduct = getLastVisitedProduct();

      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          <nav aria-label="Miga de pan" class="flex items-center gap-2 text-sm text-brand-leaf/80 font-medium mb-4 flex-wrap bg-[#CCD5AE] py-1.5 px-3.5 rounded-xl border border-brand-forest/20 shadow-xs">
            <a href="index.html" class="hover:text-brand-forest">Inicio</a>
            <span>/</span>
            ${!selectedCat && !selectedSpecial ? `
              <span class="font-bold text-brand-forest">Productos</span>
            ` : `
              <a href="categoria.html" class="hover:text-brand-forest">Productos</a>
            `}
            ${selectedSpecial ? `
              <span>/</span>
              ${!subcatTitle ? `
                <span class="font-bold text-brand-forest">${catTitle}</span>
              ` : `
                <a href="categoria.html?special=all" class="hover:text-brand-forest">${catTitle}</a>
              `}
            ` : ''}
            ${selectedCat ? `
              <span>/</span>
              ${!selectedSubcat ? `
                <span class="font-bold text-brand-forest">${catTitle}</span>
              ` : `
                <a href="categoria.html?cat=${selectedCat}" class="hover:text-brand-forest">${catTitle}</a>
              `}
            ` : ''}
            ${subcatTitle ? `
              <span>/</span>
              <span class="font-bold text-brand-forest">${subcatTitle}</span>
            ` : ''}
            ${lastProduct ? `
              <span class="opacity-40">/</span>
              <a 
                href="producto.html?id=${lastProduct.id}" 
                class="opacity-60 hover:opacity-100 transition-opacity text-brand-forest font-medium hover:underline inline-flex items-center gap-1"
                title="Volver a ${escapeHtml(lastProduct.name)}"
              >
                <span>${escapeHtml(lastProduct.name)}</span>
              </a>
            ` : ''}
          </nav>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
            
            <!-- Barra Lateral de Categorías (Organizada y con textos 100% visibles) -->
            <aside role="region" aria-label="Filtros del catálogo" class="lg:col-span-4 xl:col-span-3 min-w-0 bg-brand-cream p-3.5 sm:p-4.5 rounded-3xl border-[3px] border-brand-forest shadow-sm space-y-3">
              <div class="flex items-center justify-between pb-2.5 border-b-2 border-brand-forest/20 gap-2 flex-wrap">
                <h2 class="font-botanic font-bold text-xs sm:text-sm text-brand-forest uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap">
                  <i aria-hidden="true" class="ph ph-funnel text-sm sm:text-base text-brand-forest flex-shrink-0"></i>
                  <span>Categorías</span>
                </h2>
                <a href="categoria.html" role="button" class="text-xs text-brand-forest hover:underline font-bold flex-shrink-0 ml-auto whitespace-nowrap" title="Restablecer filtros">Limpiar</a>
              </div>

              <!-- Botón Ver Todos -->
              <a href="categoria.html" role="button" class="flex items-center justify-between px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl ${!selectedCat && !selectedSpecial ? 'bg-brand-sunflower text-brand-leaf font-bold shadow-xs' : 'bg-brand-cream hover:bg-[#CCD5AE] text-brand-forest font-semibold'} text-xs sm:text-sm transition-colors border border-brand-forest/20 gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <i aria-hidden="true" class="ph ph-squares-four text-base flex-shrink-0 text-brand-forest"></i>
                  <span class="font-bold whitespace-nowrap">Ver Todos</span>
                </div>
                <span class="text-[11px] sm:text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${!selectedCat && !selectedSpecial ? 'bg-brand-forest text-brand-cream' : 'bg-brand-forest/20 text-brand-forest'} font-bold">${PRODUCTS.length}</span>
              </a>

              <!-- Acordeón 1: Selección Especial -->
              <div class="border-2 ${selectedSpecial ? 'border-brand-forest/60 shadow-xs' : 'border-brand-forest/20'} rounded-2xl bg-brand-cream">
                <button type="button" role="button" aria-expanded="${selectedSpecial ? 'true' : 'false'}" aria-controls="sidebar-drawer-especiales" class="sidebar-cat-header flex items-center justify-between w-full px-2.5 py-2 sm:px-3 sm:py-2.5 ${selectedSpecial ? 'bg-brand-sunflower text-brand-leaf font-bold shadow-xs' : 'bg-brand-cream hover:bg-brand-olive/40 text-brand-leaf font-semibold'} transition-colors cursor-pointer select-none gap-1.5 ${selectedSpecial ? 'rounded-t-2xl' : 'rounded-2xl'}" data-cat="especiales">
                  <div class="flex items-center gap-1.5 min-w-0">
                    <i aria-hidden="true" class="ph ph-sparkle text-sm sm:text-base text-brand-forest flex-shrink-0"></i>
                    <span class="text-xs sm:text-sm font-bold text-brand-forest whitespace-nowrap">Selección Especial</span>
                  </div>
                  <div class="flex items-center gap-1 flex-shrink-0">
                    <span class="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream flex-shrink-0">${allSpecialCount}</span>
                    <i aria-hidden="true" class="ph ph-caret-down text-xs sm:text-sm transition-transform duration-200 text-brand-forest flex-shrink-0 ${selectedSpecial ? 'rotate-180' : ''}"></i>
                  </div>
                </button>

                <div id="sidebar-drawer-especiales" role="region" aria-label="Subcategorías de Selección Especial" class="sidebar-cat-drawer ${selectedSpecial ? '' : 'hidden'} bg-brand-cream border-t-2 border-brand-forest/15 p-2 space-y-1 rounded-b-2xl">
                  <a href="categoria.html?special=all" class="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs sm:text-sm ${selectedSpecial === 'all' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest font-semibold'} transition-colors gap-2">
                    <span class="whitespace-nowrap">Toda la Selección</span>
                    <span class="text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">${allSpecialCount}</span>
                  </a>
                  <a href="categoria.html?special=destacados" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSpecial === 'destacados' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <div class="flex items-center gap-1.5 min-w-0">
                      <i aria-hidden="true" class="ph ph-star text-sm ${selectedSpecial === 'destacados' ? 'text-brand-forest' : 'text-brand-sunflower'} flex-shrink-0"></i>
                      <span class="whitespace-nowrap">Destacados</span>
                    </div>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">4</span>
                  </a>
                  <a href="categoria.html?special=mas-vendidos" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSpecial === 'mas-vendidos' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <div class="flex items-center gap-1.5 min-w-0">
                      <i aria-hidden="true" class="ph ph-fire text-sm ${selectedSpecial === 'mas-vendidos' ? 'text-brand-forest' : 'text-brand-sunflower'} flex-shrink-0"></i>
                      <span class="whitespace-nowrap">Más Vendidos</span>
                    </div>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">6</span>
                  </a>
                  <a href="categoria.html?special=nuevos" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSpecial === 'nuevos' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <div class="flex items-center gap-1.5 min-w-0">
                      <i aria-hidden="true" class="ph ph-plant text-sm ${selectedSpecial === 'nuevos' ? 'text-brand-forest' : 'text-brand-sunflower'} flex-shrink-0"></i>
                      <span class="whitespace-nowrap">Nuevos</span>
                    </div>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">4</span>
                  </a>
                </div>
              </div>

              <!-- Acordeón 2: Suplementos -->
              <div class="border-2 ${selectedCat === 'suplementos' ? 'border-brand-forest/60 shadow-xs' : 'border-brand-forest/20'} rounded-2xl bg-brand-cream">
                <button type="button" role="button" aria-expanded="${selectedCat === 'suplementos' ? 'true' : 'false'}" aria-controls="sidebar-drawer-suplementos" class="sidebar-cat-header flex items-center justify-between w-full px-2.5 py-2 sm:px-3 sm:py-2.5 ${selectedCat === 'suplementos' ? 'bg-brand-sunflower text-brand-leaf font-bold shadow-xs' : 'bg-brand-cream hover:bg-brand-olive/40 text-brand-leaf font-semibold'} transition-colors cursor-pointer select-none gap-1.5 ${selectedCat === 'suplementos' ? 'rounded-t-2xl' : 'rounded-2xl'}" data-cat="suplementos">
                  <div class="flex items-center gap-1.5 min-w-0">
                    <i aria-hidden="true" class="ph ph-lightning text-sm sm:text-base text-brand-forest flex-shrink-0"></i>
                    <span class="text-xs sm:text-sm font-bold text-brand-forest whitespace-nowrap">Suplementos</span>
                  </div>
                  <div class="flex items-center gap-1 flex-shrink-0">
                    <span class="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream flex-shrink-0">10</span>
                    <i aria-hidden="true" class="ph ph-caret-down text-xs sm:text-sm transition-transform duration-200 text-brand-forest flex-shrink-0 ${selectedCat === 'suplementos' ? 'rotate-180' : ''}"></i>
                  </div>
                </button>

                <div id="sidebar-drawer-suplementos" role="region" aria-label="Subcategorías de Suplementos" class="sidebar-cat-drawer ${selectedCat === 'suplementos' ? '' : 'hidden'} bg-brand-cream border-t-2 border-brand-forest/15 p-2 space-y-1 rounded-b-2xl">
                  <a href="categoria.html?cat=suplementos" class="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs sm:text-sm ${selectedCat === 'suplementos' && !selectedSubcat ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest font-semibold'} transition-colors gap-2">
                    <span class="whitespace-nowrap">Todos los Suplementos</span>
                    <span class="text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">10</span>
                  </a>
                  <a href="categoria.html?cat=suplementos&subcat=vitaminas-minerales" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSubcat === 'vitaminas-minerales' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <span class="whitespace-nowrap">Vitaminas &amp; Minerales</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">3</span>
                  </a>
                  <a href="categoria.html?cat=suplementos&subcat=remedios" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSubcat === 'remedios' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <span class="whitespace-nowrap">Remedios Tradicionales</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">2</span>
                  </a>
                  <a href="categoria.html?cat=suplementos&subcat=suplementos-polvo" class="flex items-center justify-between pl-3 pr-2.5 py-1.5 rounded-lg text-xs ${selectedSubcat === 'suplementos-polvo' ? 'bg-brand-sunflower font-bold text-brand-leaf shadow-xs' : 'hover:bg-brand-sunflower/40 text-brand-forest/90 font-medium'} transition-colors gap-2">
                    <span class="whitespace-nowrap">En Polvo / Harinas</span>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand-forest text-brand-cream font-bold flex-shrink-0">5</span>
                  </a>
                </div>
              </div>
            </aside>

            <!-- Columna Principal de Productos (Estructura de Redireccionamiento Inteligente en 3 Columnas) -->
            <section role="region" aria-label="Listado de productos: ${escapeHtml(subcatTitle ? subcatTitle : catTitle)}" class="lg:col-span-8 xl:col-span-9 space-y-6 min-w-0">
              <div class="flex items-center justify-between pb-4 border-b border-brand-olive/60">
                <div class="min-w-0 pr-4">
                  <h1 class="font-botanic text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-forest truncate">
                    ${subcatTitle ? subcatTitle : catTitle}
                  </h1>
                  <p class="text-xs sm:text-sm text-brand-leaf/70 mt-1 font-normal">Mostrando <strong class="font-bold text-sm sm:text-base">${filtered.length}</strong> productos naturales</p>
                </div>
              </div>

              ${filtered.length > 0 ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  ${filtered.map(renderProductCard).join('')}
                </div>
              ` : `
                <div class="bg-brand-cream rounded-3xl p-12 text-center border-[3px] border-brand-forest">
                  <i aria-hidden="true" class="ph ph-magnifying-glass text-5xl text-brand-forest/50 mb-4 block"></i>
                  <h2 class="font-botanic text-xl font-bold text-brand-forest">No hay productos en esta selección</h2>
                  <p class="text-sm text-brand-forest/80 mt-2 mb-5 font-medium">Prueba seleccionando otra subcategoría o consulta nuestro catálogo completo.</p>
                  <a href="categoria.html" class="inline-block px-6 py-3 rounded-full bg-brand-sunflower text-brand-leaf font-bold text-sm shadow-xs hover:bg-[#dcb556]">
                    Ver todos los productos
                  </a>
                </div>
              `}
            </section>

          </div>

        </div>
      `;
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

    function renderProductCard(p) {
      const isFav = isFavorite(p.id);
      return `
        <article id="product-card-${p.id}" role="article" aria-label="Producto: ${p.name}" onclick="handleProductCardClick(event, '${p.id}')" class="product-card bg-brand-cream rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-brand-forest p-3 sm:p-3.5 md:p-4 flex flex-col justify-between hover:shadow-xl group h-full cursor-pointer">
          <div>
            <div 
              class="product-card-image-box relative rounded-xl sm:rounded-2xl overflow-hidden bg-brand-cream aspect-square mb-3 sm:mb-4 border border-brand-forest/20 shadow-xs cursor-pointer select-none"
              onclick="handleCardImageClick(event, '${p.id}')"
              ondblclick="triggerFavoriteDblClick('${p.id}', event)"
              ondragstart="return false;"
            >
              <img 
                src="${p.image}" 
                alt="${p.name}" 
                draggable="false"
                ondragstart="return false;"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                onerror="this.src='https://placehold.co/400x400/CCD5AE/283618?text=${encodeURIComponent(p.name)}'"
              >
              <span class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#283618]/90 text-brand-cream text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md backdrop-blur-xs border border-white/20 tracking-wide max-w-[calc(100%-1.25rem)] truncate pointer-events-none select-none">
                ${p.subcategoryName}
              </span>
              <button 
                type="button" 
                role="button"
                id="card-fav-btn-${p.id}" 
                onclick="event.stopPropagation(); toggleFavorite('${p.id}')" 
                ondblclick="event.stopPropagation(); event.preventDefault();"
                class="card-fav-btn absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full ${isFav ? 'bg-[#FEFAE0] hover:bg-white text-amber-500 border-2 border-brand-forest shadow-md' : 'bg-[#283618]/90 hover:bg-[#283618] text-brand-sunflower border border-brand-sunflower/40 shadow-md'} flex items-center justify-center transition-all active:scale-90 cursor-pointer select-none focus:outline-none"
                aria-label="${isFav ? 'Quitar ' + p.name + ' de favoritos' : 'Añadir ' + p.name + ' a favoritos'}"
              >
                ${getHeartIconSVG(isFav, 'w-4 h-4 sm:w-4.5 sm:h-4.5')}
              </button>
            </div>

            <div class="space-y-1.5 text-left mb-3 sm:mb-4">
              <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#CCD5AE] border border-brand-forest/15 text-brand-forest text-xs font-semibold shadow-2xs flex-wrap max-w-full" aria-label="Calificación ${p.rating.toFixed(1)} de 5 estrellas con ${p.reviewsCount} reseñas">
                <i aria-hidden="true" class="ph-fill ph-star text-amber-600 text-sm flex-shrink-0"></i>
                <span class="font-extrabold text-brand-forest flex-shrink-0">${p.rating.toFixed(1)}</span>
                <span class="text-brand-forest/80 text-[11px] font-medium whitespace-nowrap">(${p.reviewsCount} reseñas)</span>
              </div>

              <h3 class="font-botanic font-bold text-base sm:text-lg text-brand-forest leading-snug line-clamp-2 mt-1 min-h-[2.6rem]">
                <a href="producto.html?id=${p.id}" tabindex="-1" onclick="saveCatalogPosition('${p.id}')" class="hover:text-brand-moss group-hover:text-brand-moss transition-colors">
                  ${p.name}
                </a>
              </h3>
              
              <span class="text-xs sm:text-sm text-brand-moss font-bold block">${p.size}</span>

              <p class="text-xs text-brand-leaf/75 line-clamp-2 leading-relaxed font-medium min-h-[2.4rem]">
                ${p.shortDesc}
              </p>
            </div>
          </div>

          <div class="product-card-footer mt-auto bg-[#283618] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-brand-forest/30 flex items-center justify-between gap-2 sm:gap-2.5 shadow-xs">
            <div class="product-card-price min-w-0 flex-shrink-0">
              <span class="text-base lg:text-lg font-extrabold text-brand-cream block leading-tight tracking-tight whitespace-nowrap">$${p.price.toFixed(2)}</span>
            </div>

            <div class="product-card-actions flex items-stretch gap-2 sm:gap-2.5 flex-shrink-0">
              <a href="producto.html?id=${p.id}" role="button" aria-label="Ver detalles de ${p.name}" onclick="saveCatalogPosition('${p.id}')" class="inline-flex items-center justify-center px-2.5 sm:px-3 py-1.5 rounded-lg bg-brand-cream hover:bg-[#CCD5AE] text-brand-forest text-xs font-bold transition-colors shadow-xs border border-brand-forest/20 text-center whitespace-nowrap">
                Ver
              </a>
              <button 
                type="button" 
                role="button"
                onclick="event.stopPropagation(); addToCart('${p.id}', 1)" 
                class="px-3 sm:px-3.5 py-1.5 rounded-lg bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf text-xs font-bold flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-xs whitespace-nowrap cursor-pointer"
                aria-label="Añadir ${p.name} al carrito"
              >
                <i aria-hidden="true" class="ph ph-shopping-cart text-sm flex-shrink-0"></i>
                <span>Añadir</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }

    // --- Vista 3: Detalle de Producto (producto.html) ---
    function renderProductView(params) {
      const id = params.id || 'maca';
      const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
      const gallery = (product.images && product.images.length > 0) ? product.images : [product.image];
      const pickedUp = isProductPickedUp(product.id);

      // Guardar producto para la ruta hacia adelante al volver atrás
      setLastVisitedProduct({
        id: product.id,
        name: product.name,
        category: product.category,
        categoryName: product.categoryName
      });

      const prevRoute = sessionStorage.getItem('sacha_prev_route') || '';
      const isFromFavorites = prevRoute.includes('cuenta.html') || prevRoute.includes('tab=favorites');
      const backLabel = isFromFavorites ? 'Volver a Favoritos' : 'Volver a Productos';
      const backAria = isFromFavorites ? 'Volver a la lista de favoritos' : 'Volver al catálogo de productos';

      return `
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          
          <nav aria-label="Miga de pan" class="flex items-center gap-2 text-sm text-brand-leaf/80 font-medium mb-5 flex-wrap bg-[#CCD5AE] py-2 px-4 rounded-xl border border-brand-forest/20 max-w-full shadow-xs">
            <a href="index.html" class="hover:text-brand-forest">Inicio</a>
            <span>/</span>
            ${isFromFavorites ? `
              <a href="cuenta.html?tab=favorites" class="hover:text-brand-forest" onclick="event.preventDefault(); event.stopPropagation(); handleBackToProducts(); return false;">Favoritos</a>
            ` : `
              <a href="categoria.html" class="hover:text-brand-forest" onclick="event.preventDefault(); event.stopPropagation(); handleBackToProducts(); return false;">Productos</a>
              <span>/</span>
              <a href="categoria.html?cat=${product.category}" class="hover:text-brand-forest">${product.categoryName}</a>
            `}
            <span>/</span>
            <span class="font-bold text-brand-forest">${product.name}</span>
          </nav>

          <div class="mb-6 text-left">
            <button 
              type="button" 
              onclick="handleBackToProducts()" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-sm font-bold transition-all shadow-xs border border-brand-forest active:scale-95 group cursor-pointer"
              aria-label="${backAria}"
            >
              <i aria-hidden="true" class="ph ph-arrow-left text-base font-bold group-hover:-translate-x-0.5 text-brand-sunflower transition-transform"></i>
              <span>${backLabel}</span>
            </button>
          </div>

          <div class="bg-brand-cream rounded-3xl border-2 border-brand-forest shadow-md p-4 sm:p-6 md:p-8 mb-10 overflow-hidden box-border">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              <!-- Columna Galería -->
              <div class="lg:col-span-5 space-y-4">
                <div 
                  class="relative rounded-2xl overflow-hidden bg-brand-cream aspect-square border-2 border-brand-forest/30 max-w-sm mx-auto shadow-sm group select-none cursor-pointer"
                  onclick="handleDetailImageClick(event, '${product.id}', getCurrentImageIndex())"
                  ondblclick="triggerFavoriteDblClick('${product.id}', event)"
                  ondragstart="return false;"
                >
                  <img 
                    id="main-product-img" 
                    src="${gallery[0]}" 
                    alt="${product.name}" 
                    draggable="false"
                    ondragstart="return false;"
                    class="w-full h-full object-cover transition-opacity duration-200 cursor-zoom-in group-hover:scale-105 transition-transform duration-300 select-none"
                    onerror="this.src='https://placehold.co/500x500/CCD5AE/283618?text=Sacha+Pamba'"
                  >
                  <span class="absolute top-3 left-3 bg-brand-forest text-brand-cream text-xs font-bold px-3 py-1 rounded-full shadow-xs pointer-events-none select-none">
                    ${product.subcategoryName}
                  </span>
                  <button 
                    type="button" 
                    id="detail-img-fav-btn-${product.id}" 
                    tabindex="-1"
                    onclick="event.stopPropagation(); toggleFavorite('${product.id}')" 
                    ondblclick="event.stopPropagation(); event.preventDefault();"
                    class="card-fav-btn absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full ${isFavorite(product.id) ? 'bg-[#FEFAE0] hover:bg-white text-amber-500 border-2 border-brand-forest shadow-md' : 'bg-[#283618]/90 hover:bg-[#283618] text-brand-sunflower border border-brand-sunflower/40 shadow-md'} flex items-center justify-center transition-all active:scale-90 cursor-pointer select-none focus:outline-none"
                    aria-label="${isFavorite(product.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}"
                  >
                    ${getHeartIconSVG(isFavorite(product.id), 'w-4.5 h-4.5 sm:w-5 sm:h-5')}
                  </button>
                </div>

                <div>
                  <div class="flex items-center justify-center gap-3.5 flex-wrap" id="product-thumbnails">
                    ${gallery.map((imgUrl, idx) => `
                      <button 
                        type="button" 
                        tabindex="-1"
                        onclick="switchProductImage('${imgUrl}', this, ${idx})" 
                        class="product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ${idx === 0 ? 'border-[3px] border-brand-forest ring-2 ring-brand-sunflower scale-105 opacity-100 shadow-md' : 'border-2 border-brand-forest/30 opacity-75 hover:opacity-100 shadow-sm'} bg-brand-cream p-1.5 transition-all cursor-pointer"
                        aria-label="Ver imagen ${idx + 1} de ${product.name}"
                      >
                        <img 
                          src="${imgUrl}" 
                          alt="${product.name} vista ${idx + 1}" 
                          class="w-full h-full object-cover rounded-xl"
                          onerror="this.src='https://placehold.co/200x200/CCD5AE/283618?text=Vista+${idx + 1}'"
                        >
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Columna Info -->
              <div class="lg:col-span-7 space-y-4 sm:space-y-5 text-left min-w-0">
                <!-- Reseñas y Calificación Adaptables sin descuadres en zoom -->
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5 max-w-full">
                  <div class="inline-flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div class="flex text-amber-500 text-sm sm:text-base">
                      <i aria-hidden="true" class="ph-fill ph-star"></i>
                      <i aria-hidden="true" class="ph-fill ph-star"></i>
                      <i aria-hidden="true" class="ph-fill ph-star"></i>
                      <i aria-hidden="true" class="ph-fill ph-star"></i>
                      <i aria-hidden="true" class="ph-fill ph-star"></i>
                    </div>
                    <span class="text-sm sm:text-base font-extrabold text-brand-forest">${product.rating.toFixed(1)}</span>
                  </div>
                  <a 
                    href="#customer-reviews-section" 
                    class="inline-flex items-center text-xs sm:text-sm text-brand-leaf/80 hover:text-brand-moss underline underline-offset-2 decoration-brand-leaf/30 font-medium transition-colors flex-shrink-0"
                    title="Ver reseñas de clientes"
                  >
                    (${product.reviewsCount} reseñas verificadas)
                  </a>
                </div>

                <div>
                  <h1 class="font-botanic text-2xl sm:text-4xl font-bold text-brand-forest leading-snug">
                    ${product.name}
                  </h1>

                  <!-- Presentación del producto directamente sobre el fondo sin recuadro ni icono -->
                  <p class="text-xs sm:text-sm md:text-base text-brand-leaf/80 font-medium mt-1.5 sm:mt-2">
                    Presentación: <strong class="text-brand-forest font-bold">${product.size}</strong>
                  </p>

                  <div class="inline-flex flex-wrap items-baseline gap-2.5 sm:gap-3 mt-3.5 bg-brand-olive px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-brand-forest/20 shadow-xs max-w-full">
                    <span class="text-2xl sm:text-3xl font-black text-brand-forest">$${product.price.toFixed(2)}</span>
                    <span class="text-[11px] sm:text-xs text-brand-forest font-bold bg-brand-cream/70 px-2.5 py-1 rounded-full border border-brand-forest/15">(IVA incluido)</span>
                  </div>
                </div>

                <p class="text-base sm:text-lg text-brand-leaf/80 leading-relaxed border-y border-brand-forest/15 py-4 font-medium break-words">
                  ${product.shortDesc}
                </p>

                <div class="flex flex-wrap items-center gap-3 sm:gap-4 bg-[#FEFAE0] p-3.5 sm:p-4 rounded-2xl border border-brand-forest/10 max-w-full">
                  <div class="flex items-center gap-2.5 flex-shrink-0">
                    <label for="detail-qty" class="text-sm font-bold text-brand-forest">Cantidad:</label>
                    <div class="flex items-center border-2 border-brand-forest/30 rounded-xl bg-brand-cream overflow-hidden shadow-xs">
                      <button type="button" role="button" aria-label="Disminuir cantidad" onclick="adjustProductQty(-1)" class="px-3 py-1.5 text-base font-bold text-brand-forest hover:bg-brand-olive/50 cursor-pointer">-</button>
                      <input type="text" inputmode="numeric" id="detail-qty" value="1" class="w-10 text-center text-sm sm:text-base font-bold bg-transparent text-brand-leaf focus:outline-none select-none cursor-default" readonly aria-label="Cantidad" tabindex="-1">
                      <button type="button" role="button" aria-label="Aumentar cantidad" onclick="adjustProductQty(1)" class="px-3 py-1.5 text-base font-bold text-brand-forest hover:bg-brand-olive/50 cursor-pointer">+</button>
                    </div>
                  </div>
                  <span class="text-xs text-brand-forest font-bold inline-flex items-center gap-1.5 bg-[#CCD5AE] px-3 py-1.5 rounded-xl border border-brand-forest/15 shadow-2xs max-w-full">
                    <i aria-hidden="true" class="ph ph-check-circle text-brand-forest text-base flex-shrink-0"></i>
                    <span class="break-words">Disponible para retiro en Quito</span>
                  </span>
                </div>

                <!-- Botones de Acción de Compra -->
                <div class="space-y-3 pt-2" role="group" aria-label="Opciones de compra del producto">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button 
                      type="button" 
                      role="button"
                      id="detail-fav-btn-${product.id}" 
                      onclick="toggleFavorite('${product.id}')" 
                      ondblclick="event.stopPropagation(); event.preventDefault();"
                      class="w-full py-3.5 px-3 sm:px-4 rounded-xl ${isFavorite(product.id) ? 'bg-[#FEFAE0] hover:bg-white text-brand-forest border-2 border-brand-forest shadow-sm' : 'bg-brand-forest hover:bg-[#1e2912] text-brand-cream border-2 border-brand-forest shadow-sm'} font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer select-none focus:outline-none min-h-[50px] sm:min-h-[52px]"
                      aria-label="${isFavorite(product.id) ? 'Quitar ' + product.name + ' de favoritos' : 'Añadir ' + product.name + ' a favoritos'}"
                    >
                      ${getHeartIconSVG(isFavorite(product.id), isFavorite(product.id) ? 'w-5 h-5 text-amber-500 flex-shrink-0' : 'w-5 h-5 text-brand-sunflower flex-shrink-0')}
                      <span id="detail-fav-btn-text-${product.id}" class="whitespace-nowrap font-bold">
                        ${isFavorite(product.id) ? 'En favoritos' : 'Añadir a favoritos'}
                      </span>
                    </button>

                    <button 
                      type="button" 
                      role="button"
                      onclick="handleAddToCartFromDetail('${product.id}', false)" 
                      class="w-full py-3.5 px-3 sm:px-4 rounded-xl bg-brand-forest hover:bg-[#1e2912] text-brand-cream font-bold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer border-2 border-brand-forest min-h-[50px] sm:min-h-[52px]"
                      aria-label="Añadir ${product.name} al carrito"
                    >
                      <i aria-hidden="true" class="ph ph-shopping-cart text-lg sm:text-xl text-brand-sunflower flex-shrink-0"></i>
                      <span class="whitespace-nowrap font-bold">Añadir a carrito</span>
                    </button>
                  </div>

                  <button 
                    type="button" 
                    role="button"
                    onclick="handleAddToCartFromDetail('${product.id}', true)" 
                    class="w-full py-3.5 px-5 rounded-xl bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-transform active:scale-95 cursor-pointer min-h-[50px] sm:min-h-[52px]"
                    aria-label="Comprar ${product.name} ahora y proceder al checkout"
                  >
                  >
                    <i aria-hidden="true" class="ph ph-lightning text-xl text-brand-leaf flex-shrink-0"></i>
                    <span class="font-bold">Comprar ahora</span>
                  </button>
                </div>

                <!-- Lógica de Retiro y Comentarios sin recuadro y con botón verde alineado -->
                <div class="pt-4 mt-2 border-t border-brand-forest/15">
                  ${!pickedUp ? `
                    <div class="space-y-2">
                      <p class="text-brand-forest text-base leading-relaxed">
                        <strong class="font-bold">Nota de la Tienda:</strong> Solo podrás calificar y escribir comentarios una vez que hayas retirado tu producto en nuestra tienda física de Quito.
                      </p>
                      <button 
                        type="button" 
                        onclick="toggleProductPickupDemo('${product.id}')" 
                        class="text-xs text-brand-moss hover:underline font-bold flex items-center gap-1.5 pt-1"
                      >
                        <i aria-hidden="true" class="ph ph-arrows-clockwise text-sm"></i>
                        <span>(Simular retiro en tienda para probar el botón)</span>
                      </button>
                    </div>
                  ` : `
                    <div class="space-y-4 pt-1">
                      <div class="flex items-start justify-between gap-4">
                        <div>
                          <span class="text-sm sm:text-base font-bold text-brand-forest flex items-center gap-1.5">
                            <i aria-hidden="true" class="ph ph-seal-check text-xl text-brand-forest flex-shrink-0"></i>
                            <span>¡Has retirado este producto en tienda!</span>
                          </span>
                          <p class="text-xs sm:text-sm text-brand-leaf/80 mt-1 font-medium">Ya puedes compartir tu experiencia con nuestra comunidad.</p>
                        </div>
                        <button 
                          type="button" 
                          onclick="toggleProductPickupDemo('${product.id}')" 
                          class="p-2 rounded-lg bg-brand-cream border border-brand-forest/20 text-brand-forest/60 hover:text-brand-forest text-sm shadow-xs transition-colors flex-shrink-0" 
                          title="Restablecer estado no retirado"
                        >
                          <i aria-hidden="true" class="ph ph-arrow-counter-clockwise text-base"></i>
                        </button>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="hidden sm:block"></div>
                        <button 
                          type="button" 
                          onclick="openReviewModal('${product.id}')" 
                          class="w-full py-3 px-4 rounded-xl bg-brand-forest hover:bg-[#1a2410] text-brand-cream font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
                        >
                          <i aria-hidden="true" class="ph ph-star text-brand-sunflower text-lg"></i>
                          <span>Calificar y comentar</span>
                        </button>
                      </div>
                    </div>
                  `}
                </div>

              </div>
            </div>
          </div>

          <!-- Pestañas de Información Técnica -->
          <section aria-labelledby="product-botanical-heading" class="botanical-section bg-brand-cream rounded-2xl sm:rounded-3xl border-2 border-brand-forest p-4 sm:p-6 md:p-8 shadow-sm space-y-5 text-left">
            <h2 id="product-botanical-heading" class="font-botanic text-xl sm:text-2xl font-bold text-brand-forest border-b border-brand-forest/20 pb-3">
              Detalles Botánicos <span class="amp-normal">&amp;</span> Tradicionales
            </h2>

            <div class="botanical-details-grid grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div class="bg-[#CCD5AE] p-4 sm:p-5 rounded-2xl border-2 border-brand-forest/30 space-y-3 shadow-xs min-w-0 overflow-hidden flex flex-col justify-start">
                <div class="flex items-center gap-2.5 min-w-0 pb-1.5 border-b border-brand-forest/15">
                  <span class="w-8 h-8 rounded-lg bg-brand-forest/10 flex items-center justify-center flex-shrink-0 text-brand-forest text-base">
                    <i aria-hidden="true" class="ph ph-leaf"></i>
                  </span>
                  <span class="text-xs sm:text-sm font-bold text-brand-forest uppercase tracking-wider min-w-0 flex-1 break-words leading-tight">
                    Ingredientes &amp; Origen
                  </span>
                </div>
                <p class="text-sm sm:text-base text-brand-leaf font-medium leading-relaxed break-words">${product.ingredients}</p>
              </div>

              <div class="bg-[#CCD5AE] p-4 sm:p-5 rounded-2xl border-2 border-brand-forest/30 space-y-3 shadow-xs min-w-0 overflow-hidden flex flex-col justify-start">
                <div class="flex items-center gap-2.5 min-w-0 pb-1.5 border-b border-brand-forest/15">
                  <span class="w-8 h-8 rounded-lg bg-brand-forest/10 flex items-center justify-center flex-shrink-0 text-brand-forest text-base">
                    <i aria-hidden="true" class="ph ph-heartbeat"></i>
                  </span>
                  <span class="text-xs sm:text-sm font-bold text-brand-forest uppercase tracking-wider min-w-0 flex-1 break-words leading-tight">
                    Modo de Uso Sugerido
                  </span>
                </div>
                <p class="text-sm sm:text-base text-brand-leaf font-medium leading-relaxed break-words">${product.usage}</p>
              </div>
            </div>
          </section>

          <!-- Sección de Reseñas -->
          <section id="customer-reviews-section" aria-labelledby="product-reviews-heading" class="bg-brand-cream rounded-2xl sm:rounded-3xl border-2 border-brand-forest p-4 sm:p-6 md:p-8 shadow-sm space-y-7 text-left mt-10">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-forest/20 gap-4">
              <div>
                <h2 id="product-reviews-heading" class="font-botanic text-xl sm:text-2xl font-bold text-brand-forest flex items-center gap-2.5">
                  <i aria-hidden="true" class="ph ph-chats-circle text-brand-moss text-2xl flex-shrink-0"></i>
                  <span>Calificaciones y Comentarios</span>
                </h2>
                <p class="text-sm text-brand-leaf/70 mt-1 font-medium">Opiniones reales de quienes han retirado y probado este producto.</p>
              </div>
              
              <div class="flex items-center gap-2 flex-shrink-0">
                <span class="text-xs font-bold px-3 py-1.5 rounded-xl bg-[#CCD5AE] text-brand-forest border border-brand-forest/20 flex items-center gap-1.5 shadow-xs whitespace-nowrap">
                  <i aria-hidden="true" class="ph ph-shield-check text-base text-brand-forest flex-shrink-0"></i>
                  <span>100% Retiro Verificado</span>
                </span>
              </div>
            </div>

            <!-- Resumen de Puntuación General con Fondo Verde Oliva Claro (#CCD5AE) -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#CCD5AE] p-4 sm:p-6 rounded-2xl border-2 border-brand-forest/30 shadow-xs box-border overflow-hidden">
              <div class="md:col-span-4 text-center md:border-r border-brand-forest/20 pr-0 md:pr-5">
                <span class="font-botanic text-4xl sm:text-5xl md:text-6xl font-black text-brand-forest block leading-none">
                  ${product.rating.toFixed(1)}
                </span>
                <div class="flex justify-center text-amber-500 text-xl mt-3 mb-2">
                  <i aria-hidden="true" class="ph-fill ph-star"></i>
                  <i aria-hidden="true" class="ph-fill ph-star"></i>
                  <i aria-hidden="true" class="ph-fill ph-star"></i>
                  <i aria-hidden="true" class="ph-fill ph-star"></i>
                  <i aria-hidden="true" class="ph-fill ph-star"></i>
                </div>
                <span class="text-xs sm:text-sm text-brand-forest/90 font-bold block">Basado en ${product.reviewsCount} opiniones verificadas</span>
              </div>

              <div class="md:col-span-8 space-y-2.5 text-xs sm:text-sm">
                <div class="flex items-center gap-2 sm:gap-3">
                  <span class="w-20 sm:w-24 text-brand-forest font-bold text-right flex-shrink-0">5 estrellas</span>
                  <div class="flex-1 bg-brand-cream rounded-full h-2.5 overflow-hidden border border-brand-forest/20 shadow-inner min-w-0">
                    <div class="bg-amber-500 h-full rounded-full w-[88%]"></div>
                  </div>
                  <span class="w-10 sm:w-12 text-brand-forest font-mono font-bold text-right flex-shrink-0">88%</span>
                </div>
                <div class="flex items-center gap-2 sm:gap-3">
                  <span class="w-20 sm:w-24 text-brand-forest font-bold text-right flex-shrink-0">4 estrellas</span>
                  <div class="flex-1 bg-brand-cream rounded-full h-2.5 overflow-hidden border border-brand-forest/20 shadow-inner min-w-0">
                    <div class="bg-amber-500 h-full rounded-full w-[10%]"></div>
                  </div>
                  <span class="w-10 sm:w-12 text-brand-forest font-mono font-bold text-right flex-shrink-0">10%</span>
                </div>
                <div class="flex items-center gap-2 sm:gap-3">
                  <span class="w-20 sm:w-24 text-brand-forest font-bold text-right flex-shrink-0">3 estrellas</span>
                  <div class="flex-1 bg-brand-cream rounded-full h-2.5 overflow-hidden border border-brand-forest/20 shadow-inner min-w-0">
                    <div class="bg-amber-500 h-full rounded-full w-[2%]"></div>
                  </div>
                  <span class="w-10 sm:w-12 text-brand-forest font-mono font-bold text-right flex-shrink-0">2%</span>
                </div>
                <div class="flex items-center gap-2 sm:gap-3 opacity-50">
                  <span class="w-20 sm:w-24 text-brand-forest font-bold text-right flex-shrink-0">2 estrellas</span>
                  <div class="flex-1 bg-brand-cream rounded-full h-2.5 overflow-hidden border border-brand-forest/20 shadow-inner min-w-0">
                    <div class="bg-amber-500 h-full rounded-full w-[0%]"></div>
                  </div>
                  <span class="w-10 sm:w-12 text-brand-forest font-mono font-bold text-right flex-shrink-0">0%</span>
                </div>
              </div>
            </div>

            <!-- Listado Exclusivo de Reseñas de Clientes -->
            <div class="space-y-4 pt-2" id="product-reviews-list">
              ${getProductReviewsHtml(product.id)}
            </div>

          </section>

        </div>
      `;
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

    function getCurrentImageIndex() {
      return currentDetailGalleryIndex || 0;
    }

    function switchProductImage(imageSrc, btnElement, imageIndex = 0) {
      currentDetailGalleryIndex = imageIndex;
      const mainImg = document.getElementById('main-product-img');
      if (!mainImg) return;

      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.src = imageSrc;
        mainImg.style.opacity = '1';
      }, 120);

      const thumbnails = document.querySelectorAll('.product-thumb-btn');
      thumbnails.forEach(btn => {
        btn.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-forest/30 opacity-75 hover:opacity-100 bg-brand-cream p-1.5 transition-all shadow-sm cursor-pointer';
      });

      if (btnElement) {
        btnElement.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-[3px] border-brand-forest ring-2 ring-brand-sunflower scale-105 opacity-100 bg-brand-cream p-1.5 transition-all shadow-md cursor-pointer';
      }
    }

    function openImageLightbox(productId, imageIndex = 0) {
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;

      const gallery = (product.images && product.images.length > 0) ? product.images : [product.image];
      lightboxCurrentGallery = gallery;
      lightboxCurrentIndex = Math.max(0, Math.min(gallery.length - 1, parseInt(imageIndex, 10) || 0));

      const modal = document.getElementById('image-lightbox-modal');
      const titleEl = document.getElementById('lightbox-product-title');
      if (titleEl) titleEl.textContent = product.name;

      renderLightboxImage();

      if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    }

    function renderLightboxImage() {
      const imgEl = document.getElementById('lightbox-img');
      const counterEl = document.getElementById('lightbox-image-counter');
      const prevBtn = document.getElementById('lightbox-prev-btn');
      const nextBtn = document.getElementById('lightbox-next-btn');
      const thumbsContainer = document.getElementById('lightbox-thumbnails-container');

      if (!imgEl || lightboxCurrentGallery.length === 0) return;

      const currentSrc = lightboxCurrentGallery[lightboxCurrentIndex];
      imgEl.src = currentSrc;

      if (lightboxCurrentGallery.length > 1) {
        if (counterEl) {
          counterEl.textContent = `(${lightboxCurrentIndex + 1}/${lightboxCurrentGallery.length})`;
          counterEl.classList.remove('hidden');
        }
        if (prevBtn) prevBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');

        if (thumbsContainer) {
          thumbsContainer.classList.remove('hidden');
          thumbsContainer.innerHTML = lightboxCurrentGallery.map((imgUrl, idx) => `
            <button 
              type="button" 
              onclick="event.stopPropagation(); navigateLightboxImageTo(${idx})"
              class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 ${idx === lightboxCurrentIndex ? 'border-brand-sunflower scale-105 ring-2 ring-brand-sunflower/60 opacity-100 shadow-md' : 'border-white/30 opacity-60 hover:opacity-100'} transition-all flex-shrink-0 cursor-pointer bg-black/40 p-0.5"
              aria-label="Ver imagen ${idx + 1}"
            >
              <img src="${imgUrl}" alt="Miniatura ${idx + 1}" class="w-full h-full object-cover rounded-lg pointer-events-none">
            </button>
          `).join('');
        }
      } else {
        if (counterEl) counterEl.classList.add('hidden');
        if (prevBtn) prevBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
        if (thumbsContainer) thumbsContainer.classList.add('hidden');
      }
    }

    function syncDetailGalleryImage(index) {
      currentDetailGalleryIndex = index;
      const mainImg = document.getElementById('main-product-img');
      if (mainImg && lightboxCurrentGallery && lightboxCurrentGallery[index]) {
        mainImg.src = lightboxCurrentGallery[index];
      }
      const thumbnails = document.querySelectorAll('.product-thumb-btn');
      thumbnails.forEach((btn, idx) => {
        if (idx === index) {
          btn.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-[3px] border-brand-forest ring-2 ring-brand-sunflower scale-105 opacity-100 bg-brand-cream p-1.5 transition-all shadow-md cursor-pointer';
        } else {
          btn.className = 'product-thumb-btn w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-forest/30 opacity-75 hover:opacity-100 bg-brand-cream p-1.5 transition-all shadow-sm cursor-pointer';
        }
      });
    }

    function navigateLightboxImage(delta) {
      if (!lightboxCurrentGallery || lightboxCurrentGallery.length <= 1) return;
      lightboxCurrentIndex = (lightboxCurrentIndex + delta + lightboxCurrentGallery.length) % lightboxCurrentGallery.length;
      renderLightboxImage();
      syncDetailGalleryImage(lightboxCurrentIndex);
    }

    function navigateLightboxImageTo(index) {
      if (!lightboxCurrentGallery || index < 0 || index >= lightboxCurrentGallery.length) return;
      lightboxCurrentIndex = index;
      renderLightboxImage();
      syncDetailGalleryImage(lightboxCurrentIndex);
    }

    function closeImageLightbox() {
      const modal = document.getElementById('image-lightbox-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
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

    function getProductReviewsHtml(productId) {
      const stored = localStorage.getItem(`reviews_${productId}`);
      let reviews = stored ? JSON.parse(stored) : (PRODUCT_REVIEWS_DB[productId] || [
        {
          name: 'Cliente Sacha & Pamba',
          date: 'Septiembre, 2026',
          rating: 5,
          comment: 'Producto puro y fresco. Retiro ágil y seguro en la tienda de Quito.',
          verified: true
        }
      ]);

      return reviews.map(r => `
        <div class="bg-brand-cream rounded-2xl border border-brand-forest/20 p-4 sm:p-5 space-y-3 shadow-sm text-left">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1 border-b border-brand-forest/10 sm:border-b-0 sm:pb-0">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-full bg-brand-forest text-brand-sunflower flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
                ${escapeHtml(r.name.charAt(0))}
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-sm text-brand-forest leading-tight break-words">${escapeHtml(r.name)}</h3>
                <span class="text-xs text-brand-leaf/60 font-medium block">${escapeHtml(r.date)}</span>
              </div>
            </div>

            <div class="flex items-center flex-wrap gap-2.5 flex-shrink-0">
              <div class="flex text-amber-500 text-sm flex-shrink-0">
                ${Array.from({length: 5}, (_, i) => `<i class="${i < r.rating ? 'ph-fill' : 'ph'} ph-star"></i>`).join('')}
              </div>
              ${r.verified ? `
                <span class="inline-flex items-center gap-1.5 text-xs bg-[#CCD5AE] text-brand-forest font-bold px-2.5 py-1 rounded-xl border border-brand-forest/20 shadow-xs whitespace-nowrap flex-shrink-0">
                  <i aria-hidden="true" class="ph ph-seal-check text-sm text-brand-forest"></i>
                  <span>Retirado en tienda física</span>
                </span>
              ` : ''}
            </div>
          </div>

          <p class="text-sm text-brand-leaf/80 leading-relaxed font-medium italic break-words pl-1">
            "${escapeHtml(r.comment)}"
          </p>

          ${r.image ? `
            <div class="pt-2 pl-1">
              <img 
                src="${r.image}" 
                alt="Foto del producto compartida por el cliente" 
                class="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl border-2 border-brand-forest/20 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                onclick="window.open('${r.image}', '_blank')"
                title="Clic para ver foto en tamaño original"
              >
              <span class="text-xs text-brand-leaf/50 block mt-1.5 font-medium">Foto compartida por el cliente</span>
            </div>
          ` : ''}
        </div>
      `).join('');
    }

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
      refreshPageContent();
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
      modal.classList.remove('hidden');
    }

    function closeReviewModal() {
      const modal = document.getElementById('review-modal');
      if (modal) modal.classList.add('hidden');
      currentReviewUploadedImage = null;
    }

    function setModalRating(stars) {
      const ratingInput = document.getElementById('modal-review-rating');
      const label = document.getElementById('modal-rating-label');
      if (ratingInput) ratingInput.value = stars;
      if (label) label.textContent = `${stars} de 5 estrellas`;

      const buttons = document.querySelectorAll('#modal-star-picker .star-btn');
      buttons.forEach((btn, idx) => {
        if (idx < stars) {
          btn.innerHTML = '<i aria-hidden="true" class="ph-fill ph-star"></i>';
          btn.className = 'star-btn text-amber-500 transition-transform active:scale-90';
        } else {
          btn.innerHTML = '<i aria-hidden="true" class="ph ph-star"></i>';
          btn.className = 'star-btn text-brand-leaf/30 hover:text-amber-500 transition-transform active:scale-90';
        }
      });
    }

    function triggerReviewFileUpload() {
      const fileInput = document.getElementById('modal-review-file');
      if (fileInput) fileInput.click();
    }

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
        container.innerHTML = getProductReviewsHtml(productId);
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
      navigateTo(url);
    }

    function renderCheckoutStepper(currentStep) {
      if (currentStep < 4 && cart && cart.length > 0) {
        recordCheckoutStep(currentStep);
      }
      const maxReached = (currentStep === 4) ? 4 : getMaxCheckoutStep();

      const steps = [
        { id: 1, name: 'Carrito', url: 'carrito.html' },
        { id: 2, name: 'Retiro', url: 'checkout-retiro.html' },
        { id: 3, name: 'Pago', url: 'checkout-pago.html' },
        { id: 4, name: 'Confirmación', url: 'checkout-confirmacion.html' }
      ];

      // En el proceso de confirmación no se permite volver a ningún paso
      if (currentStep === 4) {
        return `
          <nav aria-label="Progreso del pedido: Paso 4 de 4, Confirmación" class="flex items-center justify-center mb-8 sm:mb-10">
            <div class="lector_texto_accesible" role="region" aria-label="Paso actual del proceso de compra" lang="es">
              <p lang="es">Paso actual: Paso 4 de 4, Confirmación.</p>
            </div>
            <ol class="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-bold flex-wrap justify-center bg-brand-cream/80 p-2.5 sm:p-3 rounded-2xl border border-brand-forest/15 shadow-2xs select-none pointer-events-none cursor-default" title="Pedido finalizado. No se permite volver a pasos anteriores.">
              ${steps.map((st, idx) => `
                <li class="inline-flex items-center gap-1.5 sm:gap-2 ${st.id === 4 ? '' : 'opacity-75'}" ${st.id === 4 ? 'aria-current="step" aria-label="Paso actual: Paso 4 de 4, Confirmación"' : `aria-label="Paso ${st.id} de 4: ${st.name} completado"`}>
                  <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full ${st.id === 4 ? 'bg-brand-sunflower text-brand-leaf shadow-xs' : 'bg-brand-olive text-brand-forest'} flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                    ${st.id === 4 ? '4' : '<i aria-hidden="true" class="ph ph-check font-bold"></i>'}
                  </span>
                  <span class="text-brand-forest ${st.id === 4 ? 'font-bold' : 'font-semibold'}">${st.name}</span>
                </li>
                ${idx < steps.length - 1 ? `<span aria-hidden="true" class="w-4 sm:w-8 h-0.5 bg-brand-olive flex-shrink-0"></span>` : ''}
              `).join('')}
            </ol>
          </nav>
        `;
      }

      // Proceso de compra activo (Pasos 1, 2 y 3)
      return `
        <nav aria-label="Progreso del pedido" class="flex items-center justify-center mb-8 sm:mb-10">
          <ol class="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-bold flex-wrap justify-center bg-brand-cream/80 p-2.5 sm:p-3 rounded-2xl border border-brand-forest/15 shadow-2xs">
            ${steps.map((st, idx) => {
              const isCurrent = st.id === currentStep;
              const isPast = st.id < currentStep;
              // Puede avanzar directamente si ya llegó a este paso antes (hasta paso 3)
              const canGoForward = !isCurrent && !isPast && st.id <= maxReached && st.id < 4 && cart && cart.length > 0;
              const isClickable = isPast || canGoForward;

              let stepHtml = '';

              if (isCurrent) {
                stepHtml = `
                  <li class="inline-flex items-center gap-1.5 sm:gap-2 cursor-default" aria-current="step">
                    <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-sunflower text-brand-leaf flex items-center justify-center shadow-xs text-xs sm:text-sm font-bold flex-shrink-0">${st.id}</span>
                    <span class="text-brand-forest font-bold">${st.name}</span>
                  </li>
                `;
              } else if (isClickable) {
                const actionTitle = isPast ? `Volver al Paso ${st.id}: ${st.name}` : `Avanzar directamente al Paso ${st.id}: ${st.name} (ya alcanzado previamente)`;
                stepHtml = `
                  <li class="inline-flex items-center">
                    <button 
                      type="button" 
                      onclick="handleStepperNav('${st.url}')" 
                      class="inline-flex items-center gap-1.5 sm:gap-2 group cursor-pointer focus:outline-none transition-transform hover:scale-105 active:scale-95" 
                      title="${actionTitle}"
                      aria-label="${actionTitle}"
                    >
                      <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-olive text-brand-forest flex items-center justify-center text-xs sm:text-sm group-hover:bg-brand-forest group-hover:text-brand-sunflower transition-colors shadow-2xs flex-shrink-0">
                        ${isPast ? '<i aria-hidden="true" class="ph ph-check font-bold"></i>' : st.id}
                      </span>
                      <span class="text-brand-forest font-semibold group-hover:underline">${st.name}</span>
                    </button>
                  </li>
                `;
              } else {
                stepHtml = `
                  <li class="inline-flex items-center gap-1.5 sm:gap-2 opacity-50 cursor-not-allowed select-none" title="Completa los pasos anteriores para habilitar" aria-label="Paso ${st.id} de 4: ${st.name} pendiente">
                    <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-forest/10 text-brand-forest/60 flex items-center justify-center text-xs sm:text-sm flex-shrink-0">${st.id}</span>
                    <span class="text-brand-forest/60">${st.name}</span>
                  </li>
                `;
              }

              const separatorActive = (st.id < currentStep) || (st.id < maxReached);
              const separatorHtml = idx < steps.length - 1 ? `
                <span aria-hidden="true" class="w-4 sm:w-8 h-0.5 ${separatorActive ? 'bg-brand-olive' : 'bg-brand-forest/20'} flex-shrink-0"></span>
              ` : '';

              return stepHtml + separatorHtml;
            }).join('')}
          </ol>
        </nav>
      `;
    }

    // --- Vista 4: Carrito de Compras (carrito.html) ---
    function renderCartView() {
      // Cálculo preciso en centavos para eliminar cualquier error de redondeo de punto flotante
      const totalCents = cart.reduce((sum, item) => {
        const pCents = Math.round(Number(item.price) * 100);
        const q = Math.max(1, parseInt(item.quantity, 10) || 1);
        return sum + (pCents * q);
      }, 0);

      const totalCount = cart.reduce((sum, item) => sum + (Math.max(1, parseInt(item.quantity, 10) || 1)), 0);
      const total = totalCents / 100;
      const ivaCents = Math.round(totalCents * 0.15 / 1.15);
      const iva = ivaCents / 100;
      const subtotalNeto = (totalCents - ivaCents) / 100;

      return `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div class="lector_texto_accesible" role="status" aria-live="polite" aria-atomic="true" lang="es">
            <p lang="es">Paso 1 de 4: Carrito de compras.</p>
          </div>
          
          <!-- Botón Seguir comprando en la parte superior izquierda en color verde oscuro (#283618) -->
          <div class="mb-6 text-left">
            <button 
              type="button" 
              role="button"
              onclick="navigateTo('categoria.html')" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-sm font-bold transition-all shadow-xs border border-brand-forest active:scale-95 group cursor-pointer"
              aria-label="Seguir comprando en el catálogo"
            >
              <i aria-hidden="true" class="ph ph-arrow-left text-base font-bold group-hover:-translate-x-0.5 text-brand-sunflower transition-transform"></i>
              <span>Seguir comprando</span>
            </button>
          </div>

          ${renderCheckoutStepper(1)}

          <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-brand-forest/20">
            <div>
              <span class="text-sm font-bold text-brand-moss uppercase tracking-wider block mb-1" aria-hidden="true">Paso 1 de 4</span>
              <div class="flex items-center flex-wrap gap-3 sm:gap-4">
                <h1 class="font-botanic text-3xl sm:text-4xl font-bold text-brand-forest">Carrito de Compras</h1>
                ${(lastRemovedCartItem || lastClearedCart) ? `
                  <button 
                    type="button" 
                    role="button"
                    onclick="undoRemoveFromCart()" 
                    class="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-xs sm:text-sm shadow-xs transition-transform active:scale-95 border border-brand-forest/20 cursor-pointer animate-in fade-in duration-200"
                    title="${lastRemovedCartItem ? `Deshacer eliminación de ${escapeHtml(lastRemovedCartItem.item.name)}` : 'Deshacer vaciado del carrito'}"
                    aria-label="Deshacer última acción"
                  >
                    <i aria-hidden="true" class="ph ph-arrow-u-up-left text-base sm:text-lg font-bold"></i>
                    <span>Deshacer</span>
                  </button>
                ` : ''}
              </div>
            </div>
          </div>

          ${cart.length === 0 ? `
            <div class="bg-brand-cream rounded-3xl p-8 sm:p-14 text-center border-2 border-brand-forest max-w-lg mx-auto shadow-sm space-y-5" role="region" aria-label="Carrito vacío">
              <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-olive/40 text-brand-forest flex items-center justify-center mx-auto text-3xl sm:text-4xl shadow-inner">
                <i aria-hidden="true" class="ph ph-shopping-cart"></i>
              </div>
              <h2 class="font-botanic text-xl sm:text-2xl font-bold text-brand-forest">Tu carrito está vacío</h2>
              <p class="text-xs sm:text-sm text-brand-leaf/70 leading-relaxed font-medium">
                Descubre nuestros suplementos y superalimentos puros para tu bienestar.
              </p>
              <a href="categoria.html" role="button" class="inline-block px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-sunflower text-brand-leaf font-bold text-sm shadow-sm hover:bg-[#dcb556] transition-transform active:scale-95">
                Explorar el catálogo
              </a>
            </div>
          ` : `
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start">
              
              <!-- Lista de Ítems Seleccionados -->
              <section role="region" aria-label="Productos en el carrito" class="cart-items-container xl:col-span-8 space-y-4">
                ${cart.map(item => `
                  <article role="article" aria-label="Producto: ${item.name}" class="cart-item-card bg-brand-cream rounded-2xl border-2 border-brand-forest/30 p-3.5 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 shadow-xs">
                    
                    <!-- Bloque Superior: Imagen + Nombre + Tamaño/Precio + Botón Eliminar Móvil -->
                    <div class="cart-item-top flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <a href="producto.html?id=${item.id}" tabindex="-1" class="flex-shrink-0 block" aria-label="Ver detalles de ${item.name}">
                        <img 
                          src="${item.image}" 
                          alt="${item.name}" 
                          class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-brand-forest/20 bg-brand-cream flex-shrink-0 hover:scale-105 transition-transform" 
                          onerror="this.src='https://placehold.co/100x100/CCD5AE/283618?text=Planta'"
                        >
                      </a>
                      
                      <div class="min-w-0 flex-1 text-left">
                        <h3 class="font-botanic font-bold text-sm sm:text-base text-brand-forest leading-snug break-words">
                          <a href="producto.html?id=${item.id}" class="hover:text-brand-moss transition-colors">
                            ${item.name}
                          </a>
                        </h3>
                        <p class="text-xs text-brand-leaf/75 font-medium mt-0.5 break-words">
                          <span>${item.size}</span>
                          <span class="mx-1 text-brand-forest/40">•</span>
                          <span class="font-bold text-brand-forest">$${item.price.toFixed(2)}</span>
                          <span class="text-brand-leaf/60"> c/u</span>
                        </p>
                      </div>

                      <!-- Botón Eliminar en Móvil o al hacer Zoom -->
                      <button 
                        type="button" 
                        role="button"
                        onclick="removeFromCart('${item.id}')" 
                        class="cart-del-mobile md:hidden text-brand-leaf/40 hover:text-brand-sunflower hover:bg-brand-forest p-2 rounded-xl transition-colors active:scale-95 flex-shrink-0 self-start ml-auto cursor-pointer" 
                        title="Eliminar del carrito" 
                        aria-label="Eliminar ${item.name} del carrito"
                      >
                        <i aria-hidden="true" class="ph ph-trash text-lg"></i>
                      </button>
                    </div>

                    <!-- Bloque Inferior: Selector Cantidad + Subtotal + Eliminar Desktop -->
                    <div class="cart-item-bottom flex items-center justify-between md:justify-end gap-3 sm:gap-4 pt-2.5 md:pt-0 border-t border-brand-forest/10 md:border-t-0 flex-shrink-0">
                      
                      <!-- Selector Cantidad -->
                      <div class="flex items-center border-2 border-brand-forest/30 rounded-xl bg-brand-cream overflow-hidden shadow-2xs flex-shrink-0" role="group" aria-label="Cantidad para ${item.name}">
                        <button 
                          type="button" 
                          role="button"
                          onclick="updateCartQuantity('${item.id}', -1)" 
                          class="px-2.5 sm:px-3 py-1.5 text-sm font-bold text-brand-forest hover:bg-brand-olive/50 active:scale-95 transition-transform cursor-pointer" 
                          aria-label="Disminuir cantidad de ${item.name}"
                        >-</button>
                        <span class="w-8 sm:w-10 text-center text-sm font-bold text-brand-leaf select-none" aria-label="Cantidad: ${item.quantity}">${item.quantity}</span>
                        <button 
                          type="button" 
                          role="button"
                          onclick="updateCartQuantity('${item.id}', 1)" 
                          class="px-2.5 sm:px-3 py-1.5 text-sm font-bold text-brand-forest hover:bg-brand-olive/50 active:scale-95 transition-transform cursor-pointer" 
                          aria-label="Aumentar cantidad de ${item.name}"
                        >+</button>
                      </div>

                      <!-- Total Ítem -->
                      <div class="text-right min-w-[75px] sm:min-w-[90px] flex-shrink-0">
                        <span class="cart-subtotal-label text-[10px] text-brand-leaf/60 font-bold uppercase tracking-wider block md:hidden">Subtotal</span>
                        <span class="text-base sm:text-lg font-extrabold text-brand-forest whitespace-nowrap">$${(((Math.round(Number(item.price) * 100) * (Math.max(1, parseInt(item.quantity, 10) || 1))) / 100)).toFixed(2)}</span>
                      </div>

                      <!-- Botón Eliminar Desktop -->
                      <button 
                        type="button" 
                        role="button"
                        onclick="removeFromCart('${item.id}')" 
                        class="cart-del-desktop hidden md:inline-flex text-brand-leaf/40 hover:text-brand-sunflower hover:bg-brand-forest p-2.5 rounded-xl transition-colors active:scale-95 flex-shrink-0 cursor-pointer" 
                        title="Eliminar del carrito" 
                        aria-label="Eliminar ${item.name} del carrito"
                      >
                        <i aria-hidden="true" class="ph ph-trash text-xl"></i>
                      </button>
                    </div>

                  </article>
                `).join('')}

                <div class="flex justify-end items-center pt-3">
                  <button 
                    type="button" 
                    role="button"
                    onclick="clearCart()" 
                    class="text-xs sm:text-sm text-brand-cream bg-brand-forest hover:bg-[#1a2410] border border-brand-forest px-4 py-2 rounded-xl font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer"
                    aria-label="Vaciar todos los productos del carrito"
                  >
                    <i aria-hidden="true" class="ph ph-trash-simple text-base"></i>
                    <span>Vaciar carrito</span>
                  </button>
                </div>
              </section>

              <!-- Resumen Lateral Sticky -->
              <section role="region" aria-labelledby="cart-summary-heading" class="xl:col-span-4 xl:sticky xl:top-24 bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 shadow-sm space-y-6 text-left w-full">
                <h2 id="cart-summary-heading" class="font-botanic font-bold text-xl text-brand-forest border-b border-brand-forest/20 pb-3">
                  Resumen de Compra
                </h2>

                <div class="space-y-3.5 text-xs sm:text-sm text-brand-leaf/80 font-medium">
                  <div class="flex justify-between items-center gap-2">
                    <span class="min-w-0">Subtotal artículos (<strong class="text-brand-forest">${totalCount}</strong>)</span>
                    <span class="font-bold text-brand-forest whitespace-nowrap">$${total.toFixed(2)}</span>
                  </div>
                  <div class="flex justify-between items-center gap-2 text-[11px] sm:text-xs text-brand-leaf/70 pl-2.5 border-l-2 border-brand-forest/20">
                    <span class="min-w-0">Subtotal sin IVA</span>
                    <span class="font-semibold text-brand-forest/90 whitespace-nowrap">$${subtotalNeto.toFixed(2)}</span>
                  </div>
                  <div class="flex justify-between items-center gap-2 text-[11px] sm:text-xs text-brand-leaf/70 pl-2.5 border-l-2 border-brand-forest/20">
                    <strong class="min-w-0 font-bold text-brand-forest">IVA (15% incluido)</strong>
                    <span class="font-bold text-brand-forest whitespace-nowrap">$${iva.toFixed(2)}</span>
                  </div>
                </div>

                <div class="pt-4 border-t border-brand-forest/20 space-y-2">
                  <div class="lector_texto_accesible" role="region" aria-label="Paso actual, total a pagar y botón continuar a retiro" lang="es">
                    <p lang="es">Total a pagar: $${total.toFixed(2)}. El IVA ya se encuentra incluido en el total. Botón de continuar a retiro.</p>
                  </div>
                  <div class="flex justify-between items-baseline gap-2" role="text" aria-label="Total a Pagar: $${total.toFixed(2)}">
                    <span class="font-botanic font-bold text-lg sm:text-xl text-brand-forest">Total a Pagar</span>
                    <span class="font-botanic text-2xl sm:text-3xl font-black text-brand-forest whitespace-nowrap">$${total.toFixed(2)}</span>
                  </div>
                  <p class="text-[11px] sm:text-xs text-brand-leaf/80 font-medium flex items-center gap-1.5 pt-0.5" role="text" aria-label="El IVA ya se encuentra incluido en el total">
                    <i aria-hidden="true" class="ph ph-check-circle text-brand-forest text-sm flex-shrink-0"></i>
                    <span>El IVA ya se encuentra incluido en el total</span>
                  </p>
                </div>

                <a href="checkout-retiro.html" role="button" onclick="handleProceedToCheckout(event)" class="w-full py-3.5 sm:py-4 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 text-center cursor-pointer" aria-label="Continuar a Retiro" title="Continuar a Retiro">
                  <span>Continuar a Retiro</span>
                  <i aria-hidden="true" class="ph ph-arrow-right text-lg"></i>
                </a>
              </section>

            </div>
          `}
        </div>
      `;
    }

    // --- Vista 5: Checkout Paso 2 - Retiro (checkout-retiro.html) ---
    function renderCheckoutRetiroView() {
      if (cart.length === 0) return renderCartView();
      const user = getCurrentUser() || { name: '', idNumber: '', email: '', phone: '' };
      const totalCents = cart.reduce((sum, item) => {
        const pCents = Math.round(Number(item.price) * 100);
        const q = Math.max(1, parseInt(item.quantity, 10) || 1);
        return sum + (pCents * q);
      }, 0);
      const subtotal = totalCents / 100;

      return `
        <div class="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-8 w-full box-border">
          <div class="lector_texto_accesible" role="status" aria-live="polite" aria-atomic="true" lang="es">
            <p lang="es">Paso 2 de 4: Retiro en tienda.</p>
          </div>
          
          <div class="mb-5 text-left">
            <button 
              type="button" 
              role="button"
              onclick="navigateTo('carrito.html')" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold transition-all shadow-xs border border-brand-forest active:scale-95 group cursor-pointer"
              aria-label="Volver al carrito de compras"
            >
              <i aria-hidden="true" class="ph ph-arrow-left text-base font-bold group-hover:-translate-x-0.5 text-brand-sunflower transition-transform"></i>
              <span>Volver al Carrito</span>
            </button>
          </div>

          ${renderCheckoutStepper(2)}

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full box-border">
            
            <section role="region" aria-label="Punto de retiro en tienda" class="lg:col-span-7 bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-6 lg:p-7 shadow-sm space-y-6 sm:space-y-7 text-left w-full box-border">
              <div>
                <span class="text-xs sm:text-sm font-bold text-brand-moss uppercase tracking-wider block mb-1" aria-hidden="true">Paso 2 de 4</span>
                <h1 class="font-botanic text-2xl sm:text-3xl font-bold text-brand-forest">Punto de Retiro en Tienda</h1>
                <p class="text-xs sm:text-sm text-brand-leaf/70 mt-1 font-medium">Tu pedido estará empacado con amor en materiales compostables.</p>
              </div>

              <!-- Tarjeta de usuario conectado en Verde Oliva Claro (#CCD5AE) -->
              <div class="caja_usuario_retiro w-full box-border">
                <div class="tarjeta_usuario_retiro p-3.5 sm:p-4 bg-[#CCD5AE] rounded-2xl border-2 border-brand-forest/30 text-sm shadow-xs box-border w-full">
                  <div class="flex items-center gap-2.5 sm:gap-3 text-brand-forest font-medium min-w-0 flex-1 max-w-full">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-forest text-brand-cream flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-2xs">
                      <i aria-hidden="true" class="ph ph-user-check"></i>
                    </div>
                    <div class="min-w-0 flex-1">
                      <span class="text-[11px] sm:text-xs text-brand-forest/80 uppercase font-bold tracking-wider block leading-tight">Comprando como:</span>
                      <span class="font-extrabold text-brand-forest text-sm sm:text-base block truncate" title="${escapeHtml(user.name || user.email || 'Cliente')}">
                        ${escapeHtml(user.name || user.email || 'Cliente')}
                      </span>
                    </div>
                  </div>
                  <div class="flex-shrink-0 self-start sm:self-auto">
                    <span class="inline-flex items-center text-xs bg-brand-forest text-brand-cream font-bold px-3 py-1 rounded-full shadow-2xs whitespace-nowrap">
                      Sesión activa
                    </span>
                  </div>
                </div>
              </div>

              <!-- Tarjeta de dirección física en Verde Oliva Claro (#CCD5AE) -->
              <div class="bg-[#CCD5AE] rounded-2xl p-4 sm:p-6 border-2 border-brand-forest/30 space-y-3 text-sm shadow-xs text-brand-forest box-border w-full">
                <div class="flex items-center gap-2.5 sm:gap-3 text-base font-bold text-brand-forest">
                  <div class="w-8 h-8 rounded-lg bg-brand-forest/15 flex items-center justify-center flex-shrink-0 text-brand-forest">
                    <i aria-hidden="true" class="ph ph-map-pin text-lg"></i>
                  </div>
                  <span class="font-bold text-sm sm:text-base">Sacha & Pamba Tienda Principal</span>
                </div>
                <p class="text-brand-forest/90 font-medium pl-1 leading-relaxed text-xs sm:text-sm">
                  Av. González Suárez 420 y Coruña, Quito, Ecuador.
                </p>
                <div class="pt-2.5 border-t border-brand-forest/20 pl-1 mt-1">
                  <p class="text-brand-forest/80 font-medium leading-relaxed text-xs sm:text-sm">
                    <strong class="font-bold text-brand-forest">Horario:</strong> Lunes a Viernes: 08:30 – 18:30 | Sábados: 09:00 – 14:00
                  </p>
                </div>
              </div>

              <!-- Datos de la persona autorizada con etiquetas visibles y ordenadas -->
              <div class="space-y-4 pt-1">
                <div class="lector_texto_accesible" role="region" aria-label="Datos necesarios para el retiro" lang="es">
                  <p lang="es">Para completar el retiro, se necesita el nombre y apellido de la persona autorizada y su número de cédula.</p>
                </div>
                <div class="space-y-1.5">
                  <label for="pickup-name" class="block text-xs sm:text-sm font-bold text-brand-forest">
                    Nombre y Apellido de la persona autorizada para retirar:
                  </label>
                  <input 
                    type="text" 
                    id="pickup-name" 
                    placeholder="Nombre y Apellido completo" 
                    value="${escapeHtml(user.name || '')}" 
                    aria-label="Campo de nombre y apellido de la persona a retirar para completar"
                    class="w-full text-sm p-3 sm:p-3.5 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-medium shadow-2xs box-border"
                  >
                </div>
                <div class="space-y-1.5">
                  <label for="pickup-id" class="block text-xs sm:text-sm font-bold text-brand-forest">
                    Número de Cédula o Pasaporte de quien retira:
                  </label>
                  <input 
                    type="text" 
                    id="pickup-id" 
                    placeholder="Número de Cédula o Pasaporte" 
                    value="${escapeHtml(user.idNumber || '')}" 
                    aria-label="Campo de número de cédula para completar"
                    class="w-full text-sm p-3 sm:p-3.5 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-mono shadow-2xs box-border"
                  >
                </div>
              </div>

              <a href="checkout-pago.html" role="button" class="w-full py-3.5 sm:py-4 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-transform active:scale-95 mt-2 cursor-pointer">
                <span>Continuar al pago</span>
                <i aria-hidden="true" class="ph ph-arrow-right text-lg"></i>
              </a>
            </section>

            <!-- Resumen Lateral -->
            <section aria-labelledby="checkout-retiro-summary-heading" class="lg:col-span-5 bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-5 text-left box-border w-full">
              <h2 id="checkout-retiro-summary-heading" class="font-botanic font-bold text-lg sm:text-xl text-brand-forest border-b border-brand-forest/20 pb-3">
                Resumen del Pedido
              </h2>
              <div class="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                ${cart.map(i => `
                  <div class="flex justify-between items-center text-sm py-1.5 border-b border-brand-forest/10 last:border-b-0">
                    <span class="text-brand-leaf/80 truncate pr-3 font-medium text-xs sm:text-sm">${Math.max(1, parseInt(i.quantity, 10) || 1)}x ${i.name}</span>
                    <span class="font-bold text-brand-forest whitespace-nowrap text-xs sm:text-sm">$${((Math.round(Number(i.price) * 100) * (Math.max(1, parseInt(i.quantity, 10) || 1))) / 100).toFixed(2)}</span>
                  </div>
                `).join('')}
              </div>
              <div class="pt-4 border-t border-brand-forest/20 space-y-1.5">
                <div class="flex justify-between font-bold text-base text-brand-forest items-center">
                  <span>Total a pagar:</span>
                  <span class="font-botanic text-xl sm:text-2xl text-brand-forest">$${subtotal.toFixed(2)}</span>
                </div>
                <p class="text-[11px] sm:text-xs text-brand-leaf/80 font-medium flex items-center gap-1.5 pt-0.5">
                  <i aria-hidden="true" class="ph ph-check-circle text-brand-forest text-sm flex-shrink-0"></i>
                  <span>El IVA ya está incluido en el total</span>
                </p>
              </div>
            </section>

          </div>

        </div>
      `;
    }

    function getCheckoutPaymentAccessibilityText() {
      return selectedPaymentMethod === 'tarjeta'
        ? 'Opción seleccionada: Tarjeta de débito o crédito. Campos a completar para tarjeta: número de tarjeta, fecha de expiración y código CVV. Campos a completar para factura: razón social o nombre completo, cédula o RUC, y correo electrónico.'
        : 'Opción seleccionada: Pagar al retirar en tienda física. Campos a completar para factura: razón social o nombre completo, cédula o RUC, y correo electrónico.';
    }

    // --- Vista 6: Checkout Paso 3 - Pago (checkout-pago.html) ---
    function renderCheckoutPagoView() {
      if (cart.length === 0) return renderCartView();
      const user = getCurrentUser() || { name: '', idNumber: '', email: '' };
      const totalCents = cart.reduce((sum, item) => {
        const pCents = Math.round(Number(item.price) * 100);
        const q = Math.max(1, parseInt(item.quantity, 10) || 1);
        return sum + (pCents * q);
      }, 0);
      const subtotal = totalCents / 100;

      return `
        <div class="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-8 w-full box-border">
          <div class="lector_texto_accesible" role="status" aria-live="polite" aria-atomic="true" lang="es">
            <p lang="es">Paso 3 de 4: Método de pago y facturación.</p>
          </div>
          
          <div class="mb-5 text-left">
            <button 
              type="button" 
              role="button"
              onclick="navigateTo('checkout-retiro.html')" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold transition-all shadow-xs border border-brand-forest active:scale-95 group cursor-pointer"
              aria-label="Volver al paso de retiro en tienda"
            >
              <i aria-hidden="true" class="ph ph-arrow-left text-base font-bold group-hover:-translate-x-0.5 text-brand-sunflower transition-transform"></i>
              <span>Volver a Retiro</span>
            </button>
          </div>

          ${renderCheckoutStepper(3)}

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full box-border">
            
            <section role="region" aria-label="Método de pago y facturación" class="lg:col-span-7 bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-6 lg:p-7 shadow-sm space-y-6 sm:space-y-7 text-left w-full box-border">
              <div>
                <span class="text-xs sm:text-sm font-bold text-brand-moss uppercase tracking-wider block mb-1" aria-hidden="true">Paso 3 de 4</span>
                <h1 class="font-botanic text-2xl sm:text-3xl font-bold text-brand-forest">Método de Pago <span class="amp-normal">&amp;</span> Facturación</h1>
                <p class="text-xs sm:text-sm text-brand-leaf/70 mt-1 font-medium">Transacción protegida con cifrado de 256 bits y SRI Ecuador.</p>
              </div>

              <div class="lector_texto_accesible" role="region" aria-label="Opciones de pago y campos a completar" lang="es">
                <p id="checkout-pago-a11y-texto" aria-live="polite" aria-atomic="true" lang="es">${getCheckoutPaymentAccessibilityText()}</p>
              </div>

              <!-- Selector de Método -->
              <div role="radiogroup" aria-label="Método de pago" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4" id="payment-methods-selector">
                <button 
                  type="button" 
                  role="radio"
                  aria-checked="${selectedPaymentMethod === 'tarjeta'}"
                  onclick="selectPaymentOption('tarjeta')" 
                  id="pay-opt-tarjeta" 
                  class="${selectedPaymentMethod === 'tarjeta' ? 'border-2 border-brand-forest bg-[#CCD5AE]' : 'border-2 border-brand-forest/20 bg-brand-cream opacity-80 hover:opacity-100'} rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border"
                >
                  <div class="flex items-center justify-between gap-2 w-full">
                    <span class="text-sm font-bold text-brand-forest">Tarjeta Débito / Crédito</span>
                    <i aria-hidden="true" class="ph ph-credit-card text-brand-forest text-xl flex-shrink-0"></i>
                  </div>
                  <span class="text-xs text-brand-leaf/70 font-medium mt-1">Visa, Mastercard, Diners, Amex</span>
                </button>

                <button 
                  type="button" 
                  role="radio"
                  aria-checked="${selectedPaymentMethod === 'tienda'}"
                  onclick="selectPaymentOption('tienda')" 
                  id="pay-opt-tienda" 
                  class="${selectedPaymentMethod === 'tienda' ? 'border-2 border-brand-forest bg-[#CCD5AE]' : 'border-2 border-brand-forest/20 bg-brand-cream opacity-80 hover:opacity-100'} rounded-2xl p-4 flex flex-col gap-1.5 text-left transition-all shadow-xs cursor-pointer box-border"
                >
                  <div class="flex items-center justify-between gap-2 w-full">
                    <span class="text-sm font-bold text-brand-forest">Pagar al Retirar</span>
                    <i aria-hidden="true" class="ph ph-storefront text-brand-forest text-xl flex-shrink-0"></i>
                  </div>
                  <span class="text-xs text-brand-leaf/70 font-medium mt-1">Efectivo, tarjeta o transferencia</span>
                </button>
              </div>

              <!-- Panel 1: Datos de Tarjeta en Verde Oliva Claro (#CCD5AE) -->
              <div id="card-fields-container" class="${selectedPaymentMethod === 'tarjeta' ? '' : 'hidden'} space-y-4 sm:space-y-5 bg-[#CCD5AE] p-4 sm:p-6 rounded-2xl border-2 border-brand-forest/30 shadow-xs box-border w-full">
                <div>
                  <label for="checkout-card-num" class="block text-xs sm:text-sm font-bold text-brand-forest mb-1.5">Número de Tarjeta</label>
                  <div class="relative w-full">
                    <input type="text" id="checkout-card-num" placeholder="4500 •••• •••• 1289" value="4500 8920 1142 1289" aria-label="Número de tarjeta para completar" class="w-full text-sm py-3 px-4 pl-11 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-mono shadow-inner box-border">
                    <i aria-hidden="true" class="ph ph-credit-card absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-forest text-lg pointer-events-none"></i>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                  <div>
                    <label for="checkout-card-exp" class="block text-xs sm:text-sm font-bold text-brand-forest mb-1.5">Expiración (MM/AA)</label>
                    <input type="text" id="checkout-card-exp" placeholder="08/28" value="11/27" aria-label="Fecha de expiración mes y año para completar" class="w-full text-sm py-3 px-4 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest text-center font-mono shadow-inner box-border">
                  </div>
                  <div>
                    <label for="checkout-card-cvv" class="block text-xs sm:text-sm font-bold text-brand-forest mb-1.5">Código CVV</label>
                    <input type="password" id="checkout-card-cvv" placeholder="•••" value="842" maxlength="4" aria-label="Código CVV para completar" class="w-full text-sm py-3 px-4 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest text-center font-mono shadow-inner box-border">
                  </div>
                </div>
              </div>

              <!-- Panel 2: Instrucción de Pagar al Retirar -->
              <div id="tienda-info-container" class="${selectedPaymentMethod === 'tienda' ? '' : 'hidden'} bg-[#CCD5AE] p-4 sm:p-6 rounded-2xl border-2 border-brand-forest/30 space-y-3 text-sm text-brand-forest shadow-xs box-border w-full">
                <div class="flex items-center gap-2.5 font-bold text-sm sm:text-base">
                  <div class="w-8 h-8 rounded-lg bg-brand-forest/15 flex items-center justify-center flex-shrink-0 text-brand-forest">
                    <i aria-hidden="true" class="ph ph-storefront text-lg"></i>
                  </div>
                  <span>Pago presencial en tienda física</span>
                </div>
                <p class="text-brand-forest/90 leading-relaxed font-medium text-xs sm:text-sm pl-0.5">
                  Podrás abonar los <strong>$${subtotal.toFixed(2)}</strong> directamente en mostrador al retirar tu paquete en Av. González Suárez 420. Aceptamos efectivo, tarjetas de débito/crédito y transferencia bancaria directa.
                </p>
              </div>

              <!-- Facturación SRI -->
              <div class="space-y-3.5 sm:space-y-4 pt-2 border-t border-brand-forest/15">
                <h3 class="font-bold text-sm sm:text-base text-brand-forest flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-brand-forest/10 flex items-center justify-center flex-shrink-0 text-brand-forest">
                    <i aria-hidden="true" class="ph ph-receipt text-base"></i>
                  </div>
                  <span>Datos para Factura Electrónica (SRI)</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div class="space-y-1">
                    <label for="checkout-inv-name" class="block text-xs sm:text-sm font-bold text-brand-forest">Razón Social / Nombre Completo</label>
                    <input type="text" id="checkout-inv-name" placeholder="Razón Social / Nombre Completo" value="${escapeHtml(user.name || '')}" aria-label="Razón social o nombre completo para completar factura" class="w-full text-sm p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-medium shadow-2xs box-border">
                  </div>
                  <div class="space-y-1">
                    <label for="checkout-inv-id" class="block text-xs sm:text-sm font-bold text-brand-forest">C.I. o RUC</label>
                    <input type="text" id="checkout-inv-id" placeholder="C.I. o RUC" value="${escapeHtml(user.idNumber || '')}" aria-label="Cédula o RUC para completar factura" class="w-full text-sm p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-mono shadow-2xs box-border">
                  </div>
                </div>
                <div class="space-y-1">
                  <label for="checkout-inv-email" class="block text-xs sm:text-sm font-bold text-brand-forest">Correo electrónico para factura</label>
                  <input type="email" id="checkout-inv-email" placeholder="Correo electrónico para factura" value="${escapeHtml(user.email || '')}" aria-label="Correo electrónico para completar factura" class="w-full text-sm p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest font-medium shadow-2xs box-border">
                </div>
              </div>

              <button 
                type="button" 
                role="button"
                onclick="processPayment()" 
                id="btn-confirm-checkout" 
                class="w-full py-3.5 sm:py-4 px-4 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-transform active:scale-95 mt-4 cursor-pointer text-center leading-tight"
              >
                <i aria-hidden="true" class="ph ph-lock-key text-xl flex-shrink-0"></i>
                <span id="btn-confirm-checkout-text" class="text-center">
                  ${selectedPaymentMethod === 'tienda' ? `Confirmar Pedido y Pagar al Retirar ($${subtotal.toFixed(2)})` : `Pagar $${subtotal.toFixed(2)} y Confirmar Pedido`}
                </span>
              </button>
            </section>

            <!-- Resumen Lateral -->
            <section role="region" aria-labelledby="checkout-pago-summary-heading" class="lg:col-span-5 bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-5 text-left box-border w-full">
              <h2 id="checkout-pago-summary-heading" class="font-botanic font-bold text-lg sm:text-xl text-brand-forest border-b border-brand-forest/20 pb-3">
                Resumen de Compra
              </h2>
              <div class="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                ${cart.map(i => `
                  <div class="flex justify-between items-center text-sm py-1.5 border-b border-brand-forest/10 last:border-b-0">
                    <span class="text-brand-leaf/80 truncate pr-3 font-medium text-xs sm:text-sm">${Math.max(1, parseInt(i.quantity, 10) || 1)}x ${i.name}</span>
                    <span class="font-bold text-brand-forest whitespace-nowrap text-xs sm:text-sm">$${((Math.round(Number(i.price) * 100) * (Math.max(1, parseInt(i.quantity, 10) || 1))) / 100).toFixed(2)}</span>
                  </div>
                `).join('')}
              </div>
              <div class="pt-4 border-t border-brand-forest/20 space-y-1.5">
                <div class="flex justify-between font-bold text-base text-brand-forest items-center">
                  <span>Total a pagar:</span>
                  <span class="font-botanic text-xl sm:text-2xl text-brand-forest">$${subtotal.toFixed(2)}</span>
                </div>
                <p class="text-[11px] sm:text-xs text-brand-leaf/80 font-medium flex items-center gap-1.5 pt-0.5">
                  <i aria-hidden="true" class="ph ph-check-circle text-brand-forest text-sm flex-shrink-0"></i>
                  <span>El IVA ya está incluido en el total</span>
                </p>
              </div>
            </section>

          </div>

        </div>
      `;
    }

    function selectPaymentOption(option) {
      selectedPaymentMethod = option;
      sessionStorage.setItem('sacha_checkout_payment_method', option);
      const totalCents = cart.reduce((sum, item) => {
        const pCents = Math.round(Number(item.price) * 100);
        const q = Math.max(1, parseInt(item.quantity, 10) || 1);
        return sum + (pCents * q);
      }, 0);
      const subtotal = totalCents / 100;
      const cardContainer = document.getElementById('card-fields-container');
      const tiendaContainer = document.getElementById('tienda-info-container');
      const btnText = document.getElementById('btn-confirm-checkout-text');
      const btnTarjeta = document.getElementById('pay-opt-tarjeta');
      const btnTienda = document.getElementById('pay-opt-tienda');

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

    function processPayment() {
      const user = getCurrentUser();
      if (!user) {
        pendingCheckoutRedirect = 'checkout-pago.html';
        openAuthModal('login');
        showToast('Inicia sesión para finalizar tu pedido', 'ph-user');
        return;
      }

      showToast(selectedPaymentMethod === 'tienda' ? '¡Pedido agendado para retiro!' : '¡Pago procesado con éxito!', 'ph-check-circle');
      setTimeout(() => {
        const orderNum = 'NAT-2026-' + Math.floor(1000 + Math.random() * 9000);
        const newOrder = {
          number: orderNum,
          date: new Date().toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' }),
          total: cart.reduce((s, i) => s + (Math.round(Number(i.price) * 100) * (Math.max(1, parseInt(i.quantity, 10) || 1))), 0) / 100,
          method: selectedPaymentMethod === 'tienda' ? 'Pagar al Retirar en Tienda' : 'Tarjeta Débito / Crédito',
          status: 'Listo para Retiro',
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: Number(item.price),
            size: item.size,
            image: item.image,
            quantity: Math.max(1, parseInt(item.quantity, 10) || 1)
          }))
        };

        const existingOrders = getAllOrders();
        existingOrders.unshift(newOrder);
        saveAllOrders(existingOrders);

        localStorage.setItem('sacha_last_order', JSON.stringify(newOrder));
        cart = [];
        saveCart();
        resetCheckoutProgress();
        sessionStorage.removeItem('sacha_checkout_payment_method');
        navigateTo('checkout-confirmacion.html');
      }, 700);
    }

    // --- Vista 7: Checkout Paso 4 - Confirmación (checkout-confirmacion.html) ---
    function renderCheckoutConfirmacionView() {
      const lastOrder = JSON.parse(localStorage.getItem('sacha_last_order') || '{"number":"NAT-2026-0481","total":23.50,"method":"Tarjeta"}');

      return `
        <div class="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-10 w-full box-border">
          
          ${renderCheckoutStepper(4)}

          <div class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-8 lg:p-10 shadow-xl text-center space-y-6 sm:space-y-7 box-border w-full" role="region" aria-label="Confirmación y detalles de la compra">
            
            <!-- Círculo del check en Verde Oliva Claro (#CCD5AE) -->
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#CCD5AE] text-brand-forest border-2 border-brand-forest/30 flex items-center justify-center mx-auto text-3xl sm:text-4xl shadow-xs">
              <i aria-hidden="true" class="ph ph-check-circle"></i>
            </div>

            <div>
              <span class="text-xs sm:text-sm font-bold text-brand-moss uppercase tracking-widest block mb-1" role="text" aria-label="Paso 4 de 4: ¡Pedido Confirmado con Éxito!">¡Pedido Confirmado con Éxito!</span>
              <h1 class="font-botanic text-2xl sm:text-3xl md:text-4xl font-bold text-brand-forest mt-1">Gracias por tu compra natural</h1>
              <p class="text-xs sm:text-base text-brand-leaf/70 mt-2 font-medium">Hemos registrado tu pedido para retiro en nuestra tienda.</p>
            </div>

            <!-- Código de pedido dinámico en Verde Oliva Claro (#CCD5AE) -->
            <div class="bg-[#CCD5AE] rounded-2xl p-4 sm:p-6 border-2 border-brand-forest/30 inline-block w-full max-w-md text-center shadow-sm text-brand-forest box-border" role="region" aria-label="Resumen del pedido confirmado">
              <span class="text-xs text-brand-forest/70 uppercase tracking-wider block font-bold mb-1">Número de Pedido:</span>
              <span class="font-mono text-xl sm:text-2xl md:text-3xl font-black text-brand-forest tracking-wider">${lastOrder.number}</span>
              <p class="text-xs sm:text-sm text-brand-forest/90 mt-2 font-medium">Modalidad: <strong>${escapeHtml(lastOrder.method || 'Retiro en Tienda')}</strong></p>
              <span class="block text-xs sm:text-sm font-black text-brand-forest mt-3 bg-[#FEFAE0] py-1.5 px-4 rounded-full border border-brand-forest/20 inline-block">Monto Total: $${Number(lastOrder.total).toFixed(2)} USD</span>
            </div>

            <!-- Instrucciones de Retiro -->
            <div class="bg-brand-forest text-brand-cream rounded-2xl p-4 sm:p-6 text-left space-y-3.5 sm:space-y-4 max-w-xl mx-auto box-border w-full" role="region" aria-label="Instrucciones del punto de retiro">
              <h2 class="font-botanic font-bold text-base sm:text-lg text-brand-sunflower flex items-center gap-2">
                <i aria-hidden="true" class="ph ph-storefront text-xl flex-shrink-0"></i>
                <span>Punto <span class="amp-normal">&amp;</span> Horario de Retiro en Tienda</span>
              </h2>
              <p class="text-xs sm:text-sm text-brand-cream/90 leading-relaxed font-medium">
                <strong>Dirección:</strong> Av. González Suárez 420 y Coruña, Quito, Ecuador.<br>
                <strong>Horario de atención:</strong> Lunes a Viernes 08:30 – 18:30 | Sábados 09:00 – 14:00
              </p>
              <div class="p-3 sm:p-3.5 bg-white/10 rounded-xl border border-white/20 text-xs sm:text-sm font-bold text-brand-sunflower flex items-center gap-2.5">
                <i aria-hidden="true" class="ph ph-identification-card text-xl sm:text-2xl flex-shrink-0"></i>
                <span>Importante: Lleva tu cédula o pasaporte y el código de pedido para retirar.</span>
              </div>
            </div>

            <div class="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="group" aria-label="Acciones posteriores a la compra">
              <a href="seguimiento-pedidos.html" role="button" class="w-full sm:w-auto inline-block px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-forest text-brand-cream hover:bg-[#1b2611] font-bold text-xs sm:text-sm md:text-base shadow-sm transition-transform active:scale-95 text-center">
                Ver Seguimiento de mi Pedido
              </a>
              <a href="index.html" role="button" class="w-full sm:w-auto inline-block px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-xs sm:text-sm md:text-base shadow-sm transition-transform active:scale-95 text-center">
                Volver a Inicio
              </a>
            </div>

          </div>

        </div>
      `;
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

      if (tabKey === 'personal') {
        tabPersonal.classList.remove('hidden');
        btnPersonal.className = activeClass;
        pendingUndoFavorites = {};
        favoritesDisplayOrder = [];
      } else if (tabKey === 'orders') {
        tabOrders.classList.remove('hidden');
        btnOrders.className = activeClass;
        pendingUndoFavorites = {};
        favoritesDisplayOrder = [];
      } else if (tabKey === 'favorites') {
        tabFavorites.classList.remove('hidden');
        btnFavorites.className = activeClass;
        // Solo inyectar si el contenedor estuviera vacío para evitar doble renderizado y parpadeos
        if (!tabFavorites.firstElementChild) {
          renderFavoritesTabContent();
        }
      }
      btnFavorites.innerHTML = `${getHeartIconSVG(tabKey === 'favorites', 'w-5 h-5 flex-shrink-0')}<span>Productos Favoritos</span>`;
    }

    // --- Vista 8: Perfil & Seguimiento de pedidos (cuenta.html / seguimiento-pedidos.html) ---
    function renderCuentaView() {
      pendingUndoFavorites = {};
      favoritesDisplayOrder = [];
      const urlParams = new URLSearchParams(window.location.search);
      const requestedTab = urlParams.get('tab');
      if (requestedTab && ['personal', 'orders', 'favorites'].includes(requestedTab)) {
        currentAccountTab = requestedTab;
      }

      const user = getCurrentUser() || {
        name: 'Cliente Sacha & Pamba',
        username: 'cliente_sacha',
        email: 'usuario@sachaypamba.ec',
        phone: '+593 99 876 5432',
        docType: 'Cédula',
        idNumber: '1723456789'
      };

      const orders = getAllOrders();
      const lastOrder = orders.length > 0 ? orders[0] : {
        number: 'NAT-2026-0481',
        date: '03 de Octubre, 2026',
        total: 28.50,
        method: 'Pagar al Retirar en Tienda',
        status: 'Listo para Retiro',
        items: [
          { id: 'vitamina-c', name: 'Vitamina C + Camu Camu Amazónico', price: 13.50, quantity: 1, size: '60 cápsulas vegetales', image: 'https://placehold.co/600x600/CCD5AE/283618?text=Vitamina+C' },
          { id: 'omega-3', name: 'Perlas de Omega 3, 6 y 9 de Sacha Inchi', price: 15.00, quantity: 1, size: '90 perlas softgel', image: 'https://vivaelmusculo.com/img/cms/omega%203-6-9.png' }
        ]
      };

      const statusLevels = {
        'Recibido': 1,
        'En Tienda': 2,
        'Listo para Retiro': 3,
        'Entregado': 4
      };
      const currentLevel = statusLevels[lastOrder.status] || 3;

      return `
        <div class="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8 w-full">
          
          <div class="mb-5 sm:mb-6 text-left">
            <button 
              type="button" 
              role="button"
              onclick="navigateTo('categoria.html')" 
              class="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-brand-forest hover:bg-[#1a2410] text-brand-cream text-xs sm:text-sm font-bold transition-all shadow-xs border border-brand-forest active:scale-95 group cursor-pointer"
              aria-label="Seguir comprando en el catálogo"
            >
              <i aria-hidden="true" class="ph ph-arrow-left text-base font-bold group-hover:-translate-x-0.5 text-brand-sunflower transition-transform"></i>
              <span>Seguir comprando</span>
            </button>
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b border-brand-olive/50">
            <div class="w-full md:flex-1">
              <h1 class="font-botanic text-[clamp(1.35rem,4vw,2.25rem)] font-bold text-brand-forest leading-tight break-normal">
                Cuenta de Cliente
              </h1>
            </div>
            <div class="flex-shrink-0 self-start md:self-auto">
              <button 
                type="button" 
                role="button"
                onclick="logoutUser()" 
                class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#131A0B] text-[#FEFAE0] hover:bg-[#283618] transition-all text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-sm active:scale-95 border border-[#131A0B] whitespace-nowrap cursor-pointer"
                aria-label="Cerrar sesión de mi cuenta"
                title="Cerrar mi sesión"
              >
                <i aria-hidden="true" class="ph ph-sign-out text-base sm:text-lg"></i>
                <span>Cerrar sesión</span>
              </button>
            </div>
          </div>

          <!-- Selector de Pestañas / Sub-páginas con botones de tamaño idéntico -->
          <div role="tablist" aria-label="Secciones de la cuenta" class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-3xl mx-auto box-border">
            <button 
              type="button" 
              role="tab"
              aria-selected="${currentAccountTab === 'personal'}"
              aria-controls="account-tab-personal"
              id="tab-btn-personal" 
              onclick="switchAccountTab('personal')" 
              class="flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base cursor-pointer ${currentAccountTab === 'personal' ? 'bg-brand-forest text-brand-sunflower border-2 border-brand-forest shadow-md' : 'bg-[#FEFAE0] text-brand-forest border-2 border-brand-forest hover:bg-[#CCD5AE]/30'} w-full min-h-[52px] sm:min-h-[56px] text-center"
            >
              <i aria-hidden="true" class="ph ph-user text-lg sm:text-xl flex-shrink-0"></i>
              <span>Información Personal</span>
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected="${currentAccountTab === 'orders'}"
              aria-controls="account-tab-orders"
              id="tab-btn-orders" 
              onclick="switchAccountTab('orders')" 
              class="flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base cursor-pointer ${currentAccountTab === 'orders' ? 'bg-brand-forest text-brand-sunflower border-2 border-brand-forest shadow-md' : 'bg-[#FEFAE0] text-brand-forest border-2 border-brand-forest hover:bg-[#CCD5AE]/30'} w-full min-h-[52px] sm:min-h-[56px] text-center"
            >
              <i aria-hidden="true" class="ph ph-package text-lg sm:text-xl flex-shrink-0"></i>
              <span>Historial de Compras</span>
            </button>
            <button 
              type="button" 
              role="tab"
              aria-selected="${currentAccountTab === 'favorites'}"
              aria-controls="account-tab-favorites"
              id="tab-btn-favorites" 
              onclick="switchAccountTab('favorites')" 
              class="flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base cursor-pointer ${currentAccountTab === 'favorites' ? 'bg-brand-forest text-brand-sunflower border-2 border-brand-forest shadow-md' : 'bg-[#FEFAE0] text-brand-forest border-2 border-brand-forest hover:bg-[#CCD5AE]/30'} w-full min-h-[52px] sm:min-h-[56px] text-center"
            >
              ${getHeartIconSVG(currentAccountTab === 'favorites', 'w-5 h-5 flex-shrink-0')}
              <span>Productos Favoritos</span>
            </button>
          </div>

          <!-- Pestaña 1: Información Personal (Por defecto activa) - Elementos superiores y formulario aprovechando el ancho completo -->
          <div id="account-tab-personal" role="tabpanel" aria-labelledby="tab-btn-personal" class="${currentAccountTab === 'personal' ? '' : 'hidden'} max-w-5xl mx-auto w-full space-y-6 !px-0 box-border overflow-hidden">

            <!-- Fila Superior: Identificador por Defecto y Seguridad & Privacidad organizados encima del formulario (adaptables sin desbordes) -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch w-full box-border">

              <!-- Tarjeta 1: Identificador por Defecto en Verde Oliva Claro (#CCD5AE) - 100% adaptable en cualquier nivel de zoom -->
              <div class="p-4 sm:p-5 bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/30 text-sm shadow-sm flex flex-col justify-between space-y-3.5 box-border w-full">
                <div class="space-y-3">
                  <div class="flex flex-wrap items-center justify-between gap-2.5 border-b border-brand-forest/15 pb-2.5 sm:pb-3">
                    <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div class="w-10 h-10 rounded-xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-xl flex-shrink-0 shadow-xs">
                        <i aria-hidden="true" class="ph ph-identification-card"></i>
                      </div>
                      <div class="min-w-0">
                        <span class="text-xs sm:text-sm text-brand-forest uppercase tracking-wide font-extrabold block leading-tight">
                          Identificador por Defecto
                        </span>
                        <span class="text-[11px] sm:text-xs text-brand-forest/80 font-bold block pt-0.5">
                          Documento: ${escapeHtml(user.docType || 'Cédula')}
                        </span>
                      </div>
                    </div>

                    <div class="self-start sm:self-center flex-shrink-0">
                      <span class="inline-flex items-center gap-1.5 text-[11px] sm:text-xs bg-[#FEFAE0] text-brand-forest border border-brand-forest/25 font-bold px-3 py-1.5 rounded-full shadow-2xs whitespace-nowrap">
                        <i aria-hidden="true" class="ph ph-check-circle text-xs text-brand-forest flex-shrink-0"></i>
                        <span>Para Retiro en Tienda</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-[#FEFAE0] rounded-xl p-3 sm:p-3.5 border border-brand-forest/20 mt-auto">
                  <span class="text-[11px] text-brand-forest/70 uppercase tracking-wider font-bold block mb-0.5">
                    Número Registrado:
                  </span>
                  <span class="font-mono font-black text-brand-forest text-lg sm:text-2xl tracking-wider block break-all">
                    ${user.idNumber ? escapeHtml(user.idNumber) : '<span class="text-brand-forest/50 italic font-normal text-sm">(Vacío)</span>'}
                  </span>
                </div>
              </div>

              <!-- Tarjeta 2: Seguridad y Privacidad en Verde Oliva Suave -->
              <div class="p-4 sm:p-5 bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/30 text-xs sm:text-sm shadow-sm flex flex-col justify-between space-y-3 text-left box-border w-full">
                <div class="space-y-2.5">
                  <div class="flex items-center gap-2.5 sm:gap-3 border-b border-brand-forest/15 pb-2.5 sm:pb-3">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-xs">
                      <i aria-hidden="true" class="ph ph-shield-check"></i>
                    </div>
                    <div>
                      <span class="text-xs sm:text-sm font-extrabold text-brand-forest uppercase tracking-wide block leading-tight">
                        Seguridad y Privacidad
                      </span>
                      <span class="text-[11px] sm:text-xs text-brand-forest/80 font-bold block pt-0.5">
                        Protección de Datos Sacha &amp; Pamba
                      </span>
                    </div>
                  </div>

                  <p class="text-brand-forest/90 text-xs sm:text-sm leading-relaxed font-medium">
                    Tus datos se encuentran resguardados con cifrado seguro y se utilizan exclusivamente para validar tus retiros presenciales en Quito.
                  </p>
                </div>

                <div class="bg-[#FEFAE0] rounded-xl p-2.5 sm:p-3 border border-brand-forest/20 flex items-center gap-2 text-xs font-bold text-brand-forest">
                  <i aria-hidden="true" class="ph ph-lock-key text-base text-brand-forest flex-shrink-0"></i>
                  <span>Validación estricta con documento de identidad original</span>
                </div>
              </div>
            </div>

            <!-- Formulario de Información Personal a ancho completo -->
            <div class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-7 md:p-8 shadow-sm space-y-5 text-left w-full box-border">
              <div class="border-b border-brand-forest/20 pb-3 space-y-1">
                <h2 class="font-botanic font-bold text-xl sm:text-2xl text-brand-forest">
                  Información Personal
                </h2>
                <p class="text-xs sm:text-sm text-brand-leaf/80 font-medium flex items-center gap-1.5 pt-0.5">
                  <i aria-hidden="true" class="ph ph-info text-brand-forest text-base flex-shrink-0"></i>
                  <span>Solo debes llenar los campos que deseas cambiar, no es necesario completar todos.</span>
                </p>
              </div>

              <div class="space-y-4 text-sm font-medium">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div>
                    <label for="acc-name" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Nombre Completo</label>
                    <input type="text" id="acc-name" value="${escapeHtml(user.name ?? '')}" class="w-full p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-medium text-sm">
                  </div>
                  <div>
                    <label for="acc-username" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Usuario</label>
                    <div class="relative">
                      <input type="text" id="acc-username" value="${escapeHtml(user.username ?? '')}" placeholder="Ej. maria_morales" class="auth-input-with-icon w-full p-3 pl-11 pr-4 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-medium text-sm" style="padding-left: 2.75rem !important;">
                      <i aria-hidden="true" class="ph ph-at absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-brand-forest/60 pointer-events-none"></i>
                    </div>
                  </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div>
                    <label for="acc-email" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Correo Electrónico</label>
                    <input type="email" id="acc-email" value="${escapeHtml(user.email ?? '')}" class="w-full p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-medium text-sm">
                  </div>
                  <div>
                    <label for="acc-phone" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Teléfono</label>
                    <input type="tel" id="acc-phone" value="${escapeHtml(user.phone ?? '')}" class="w-full p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-medium text-sm">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label for="acc-doc-type" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Documento</label>
                    <select id="acc-doc-type" class="w-full p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-bold text-sm">
                      <option value="Cédula" ${(user.docType || 'Cédula') === 'Cédula' ? 'selected' : ''}>Cédula</option>
                      <option value="Pasaporte" ${user.docType === 'Pasaporte' ? 'selected' : ''}>Pasaporte</option>
                    </select>
                  </div>
                  <div class="md:col-span-2">
                    <label for="acc-id" class="block text-brand-leaf/80 mb-1.5 font-bold text-xs sm:text-sm">Número de Identificación</label>
                    <input type="text" id="acc-id" value="${escapeHtml(user.idNumber ?? '')}" class="w-full p-3 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf font-mono text-sm">
                  </div>
                </div>

                <!-- Sección para Cambiar Contraseña -->
                <div class="pt-3 border-t border-brand-forest/20 space-y-3">
                  <div class="flex items-center justify-between">
                    <label for="acc-new-password" class="block text-brand-leaf font-bold flex items-center gap-2 text-xs sm:text-sm">
                      <i aria-hidden="true" class="ph ph-lock-key text-base text-brand-forest"></i>
                      <span>Cambiar Contraseña</span>
                    </label>
                  </div>

                  <!-- Campo de Nueva Contraseña -->
                  <div class="relative">
                    <input 
                      type="password" 
                      id="acc-new-password" 
                      placeholder="Nueva contraseña" 
                      oninput="handlePasswordInputChange(this.value)"
                      autocomplete="new-password"
                      class="w-full p-3 pr-10 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf placeholder:text-brand-leaf/40 font-medium text-sm focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest transition-all"
                    >
                    <button 
                      type="button" 
                      onclick="togglePasswordVisibility('acc-new-password', this)" 
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-forest/60 hover:text-brand-forest p-1 cursor-pointer"
                      title="Mostrar / Ocultar contraseña"
                      aria-label="Mostrar u ocultar contraseña"
                    >
                      <i aria-hidden="true" class="ph ph-eye text-lg"></i>
                    </button>
                  </div>

                  <!-- Lista de requisitos de contraseña: solo visible al escribir algo -->
                  <div id="acc-password-reqs" class="hidden space-y-1.5 p-3 rounded-xl bg-[#FEFAE0] border border-[#283618] text-xs select-none shadow-2xs">
                    <span class="block font-bold text-brand-forest mb-1">Requisitos de la contraseña:</span>
                    <div id="acc-req-length" class="flex items-center gap-2 text-brand-leaf/70 transition-colors">
                      <i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i>
                      <span>Tener al menos 8 caracteres</span>
                    </div>
                    <div id="acc-req-uppercase" class="flex items-center gap-2 text-brand-leaf/70 transition-colors">
                      <i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i>
                      <span>Incluir por lo menos una letra mayúscula</span>
                    </div>
                    <div id="acc-req-number" class="flex items-center gap-2 text-brand-leaf/70 transition-colors">
                      <i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i>
                      <span>Incluir por lo menos un número</span>
                    </div>
                    <div id="acc-req-special" class="flex items-center gap-2 text-brand-leaf/70 transition-colors">
                      <i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i>
                      <span>Incluir por lo menos un carácter especial (ej. !@#$%*.-)</span>
                    </div>
                  </div>

                  <!-- Campo desplegable para confirmar contraseña: SOLO se despliega cuando se cumplen todos los requisitos -->
                  <div 
                    id="acc-confirm-password-wrapper" 
                    class="hidden space-y-1.5 pt-1"
                  >
                    <label for="acc-confirm-password" class="block text-brand-leaf/80 text-xs font-bold flex items-center gap-1.5">
                      <i aria-hidden="true" class="ph ph-shield-check text-brand-forest"></i>
                      <span>Confirmar Nueva Contraseña</span>
                    </label>
                    <div class="relative">
                      <input 
                        type="password" 
                        id="acc-confirm-password" 
                        placeholder="Repite la nueva contraseña" 
                        oninput="validatePasswordMatch()"
                        autocomplete="new-password"
                        class="w-full p-3 pr-10 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf placeholder:text-brand-leaf/40 font-medium text-sm focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest transition-all"
                      >
                      <button 
                        type="button" 
                        onclick="togglePasswordVisibility('acc-confirm-password', this)" 
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-brand-forest/60 hover:text-brand-forest p-1 cursor-pointer"
                        title="Mostrar / Ocultar contraseña"
                        aria-label="Mostrar u ocultar confirmación de contraseña"
                      >
                        <i aria-hidden="true" class="ph ph-eye text-lg"></i>
                      </button>
                    </div>
                    <p id="acc-password-match-msg" class="text-xs font-bold min-h-[1rem] hidden"></p>
                  </div>
                </div>

                <button type="button" onclick="updateAccountDetails()" class="mt-3 px-6 py-3 rounded-xl bg-brand-sunflower text-brand-leaf font-bold text-sm hover:bg-[#dcb556] transition-all shadow-xs w-full sm:w-auto">
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>

          <!-- Pestaña 2: Historial de Compras -->
          <div id="account-tab-orders" role="tabpanel" aria-labelledby="tab-btn-orders" class="${currentAccountTab === 'orders' ? '' : 'hidden'} max-w-5xl mx-auto w-full space-y-5 sm:space-y-6 !px-0 box-border overflow-hidden">
            
            <!-- Banner de Estado del Último Pedido en Verde Oscuro (#283618) - Compacto y Adaptable -->
            <div class="bg-brand-forest text-brand-cream rounded-3xl p-4 sm:p-5 shadow-lg border-2 border-brand-forest text-left space-y-3 sm:space-y-3.5 box-border w-full">
              
              <!-- Fila Superior: Datos de Orden + Precio a la izquierda, Selector de Estado y Ver Productos a la derecha -->
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-3 border-b border-white/15 w-full box-border">
                <div class="space-y-1 min-w-0 max-w-full">
                  <span class="text-[11px] uppercase tracking-wider text-brand-sunflower font-extrabold flex items-center gap-1.5">
                    <i aria-hidden="true" class="ph ph-package text-sm flex-shrink-0"></i>
                    <span>Estado del Último Pedido</span>
                  </span>
                  <div class="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <h3 class="font-mono text-xl sm:text-2xl font-black text-brand-cream break-all">
                      ${lastOrder.number}
                    </h3>
                    <span class="bg-[#FEFAE0] text-brand-forest font-black text-xs sm:text-sm px-3 py-1 rounded-full shadow-2xs whitespace-nowrap">
                      $${Number(lastOrder.total).toFixed(2)} USD
                    </span>
                  </div>
                  <p class="text-[11px] sm:text-xs text-brand-cream/80 font-medium pt-0.5">
                    Fecha: <strong class="text-brand-cream">${escapeHtml(lastOrder.date || 'Reciente')}</strong> • Modalidad: <strong class="text-brand-cream">${escapeHtml(lastOrder.method || 'Retiro en Tienda')}</strong>
                  </p>
                </div>

                <!-- Controles: Selector de Estado y Botón Ver Productos organizados y 100% contenidos sin desbordar el contenedor -->
                <div class="flex flex-wrap items-center lg:items-end justify-start lg:justify-end gap-2.5 max-w-full">
                  <div class="flex items-center gap-2 max-w-full flex-wrap">
                    <span class="text-xs font-bold uppercase tracking-wider text-brand-sunflower flex items-center gap-1.5 flex-shrink-0">
                      <i aria-hidden="true" class="ph ph-arrows-clockwise text-sm flex-shrink-0"></i>
                      <span>Estado:</span>
                    </span>
                    <div class="relative inline-block" id="dropdown-wrapper-latest">
                      <button 
                        type="button" 
                        onclick="toggleStatusDropdown('latest', event)" 
                        class="inline-flex items-center justify-between gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#FEFAE0] text-brand-forest text-xs sm:text-sm font-bold border border-brand-sunflower/50 shadow-xs hover:bg-white transition-colors cursor-pointer text-left focus:outline-none whitespace-nowrap"
                        id="status-btn-latest"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span class="font-black text-brand-forest">${lastOrder.status}</span>
                        <i aria-hidden="true" class="ph ph-caret-down text-brand-forest text-xs font-bold flex-shrink-0 transition-transform duration-200"></i>
                      </button>
                      <div 
                        id="status-menu-latest" 
                        class="hidden absolute z-50 left-0 lg:left-auto lg:right-0 top-full mt-1.5 min-w-full w-max max-w-[90vw] bg-[#18230F] text-brand-cream rounded-xl border border-brand-forest/60 shadow-2xl py-1.5"
                        role="listbox"
                      >
                        ${['Recibido', 'En Tienda', 'Listo para Retiro', 'Entregado'].map(st => `
                          <button 
                            type="button" 
                            onclick="selectCustomOrderStatus('${lastOrder.number}', '${st}')" 
                            class="w-full px-3.5 py-1.5 text-left text-xs sm:text-sm font-bold flex items-center justify-between gap-3 hover:bg-brand-forest transition-colors ${lastOrder.status === st ? 'text-brand-sunflower bg-brand-forest/60' : 'text-brand-cream'}"
                            role="option"
                            aria-selected="${lastOrder.status === st}"
                          >
                            <span class="whitespace-nowrap flex-shrink-0">${st}</span>
                            ${lastOrder.status === st ? '<i aria-hidden="true" class="ph ph-check text-brand-sunflower text-xs flex-shrink-0"></i>' : ''}
                          </button>
                        `).join('')}
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    onclick="toggleOrderItemsView('latest-order-items', this)" 
                    class="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-xs transition-transform active:scale-95 shadow-xs border border-brand-forest/20 whitespace-nowrap flex-shrink-0"
                  >
                    <i aria-hidden="true" class="ph ph-package text-sm flex-shrink-0"></i>
                    <span class="whitespace-nowrap flex-shrink-0">Ver productos (${(lastOrder.items || []).length})</span>
                    <i aria-hidden="true" class="ph ph-caret-down text-xs transition-transform duration-200 flex-shrink-0"></i>
                  </button>
                </div>
              </div>

              <!-- Productos desplegables de la última orden (oculto por defecto) -->
              <div id="latest-order-items" class="hidden pt-1 space-y-2.5">
                <span class="text-xs font-bold text-brand-sunflower uppercase tracking-wider block">
                  Productos en esta orden:
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  ${(lastOrder.items || []).map(item => `
                    <div class="flex items-center gap-3 bg-[#FEFAE0] rounded-xl p-2.5 border border-brand-forest/20 shadow-xs text-brand-forest">
                      <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover border border-brand-forest/20 bg-brand-cream flex-shrink-0" onerror="this.src='https://placehold.co/100x100/CCD5AE/283618?text=Producto'">
                      <div class="flex-1 min-w-0 text-left">
                        <a href="producto.html?id=${item.id}" class="text-xs font-bold text-brand-forest hover:text-brand-moss transition-colors truncate block pb-0.5">
                          ${item.name}
                        </a>
                        <p class="text-[11px] text-brand-leaf/70 font-medium truncate">${item.size || 'Unidad'} • Cant: <strong>${item.quantity}</strong></p>
                        <p class="text-xs text-brand-forest font-extrabold mt-0.5">$${(item.price * item.quantity).toFixed(2)} USD</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Línea de Tiempo de 4 Pasos Compacta -->
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-sm text-left">
                <div class="space-y-0.5 ${currentLevel >= 1 ? 'opacity-100' : 'opacity-40'}">
                  <div class="flex items-center gap-1.5 font-bold ${currentLevel >= 1 ? 'text-brand-sunflower' : 'text-brand-cream/60'} text-xs sm:text-sm">
                    <i aria-hidden="true" class="ph ${currentLevel >= 1 ? 'ph-check-circle' : 'ph-circle-dashed'} text-base ${currentLevel >= 1 ? 'text-brand-sunflower' : ''}"></i>
                    <span>1. Recibido</span>
                  </div>
                  <p class="text-[11px] text-brand-cream/80 font-medium leading-snug pl-0.5">Orden registrada.</p>
                </div>

                <div class="space-y-0.5 ${currentLevel >= 2 ? 'opacity-100' : 'opacity-40'}">
                  <div class="flex items-center gap-1.5 font-bold ${currentLevel >= 2 ? 'text-brand-sunflower' : 'text-brand-cream/60'} text-xs sm:text-sm">
                    <i aria-hidden="true" class="ph ${currentLevel >= 2 ? 'ph-check-circle' : 'ph-circle-dashed'} text-base ${currentLevel >= 2 ? 'text-brand-sunflower' : ''}"></i>
                    <span>2. En Tienda</span>
                  </div>
                  <p class="text-[11px] text-brand-cream/80 font-medium leading-snug pl-0.5">Empaque biodegradable.</p>
                </div>

                <div class="space-y-0.5 ${currentLevel >= 3 ? 'opacity-100' : 'opacity-40'}">
                  <div class="flex items-center gap-1.5 font-bold ${currentLevel >= 3 ? 'text-brand-sunflower' : 'text-brand-cream/60'} text-xs sm:text-sm">
                    <i aria-hidden="true" class="ph ${currentLevel >= 3 ? 'ph-storefront' : 'ph-circle-dashed'} text-base ${currentLevel >= 3 ? 'text-brand-sunflower' : ''}"></i>
                    <span>3. Listo para Retiro</span>
                  </div>
                  <p class="text-[11px] text-brand-cream/80 font-medium leading-snug pl-0.5">González Suárez 420, Quito.</p>
                </div>

                <div class="space-y-0.5 ${currentLevel >= 4 ? 'opacity-100' : 'opacity-40'}">
                  <div class="flex items-center gap-1.5 font-bold ${currentLevel >= 4 ? 'text-brand-sunflower' : 'text-brand-cream/60'} text-xs sm:text-sm">
                    <i aria-hidden="true" class="ph ${currentLevel >= 4 ? 'ph-check-circle' : 'ph-circle-dashed'} text-base ${currentLevel >= 4 ? 'text-brand-sunflower' : ''}"></i>
                    <span>4. Entregado</span>
                  </div>
                  <p class="text-[11px] text-brand-cream/80 font-medium leading-snug pl-0.5">
                    ${currentLevel >= 4 ? 'Entregado en mostrador.' : 'Firma y recepción conforme.'}
                  </p>
                </div>
              </div>

            </div>

            <!-- Historial de Compras -->
            <div class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-4 sm:p-6 lg:p-8 shadow-sm space-y-5 text-left">
              <div class="flex flex-wrap items-center justify-between gap-3 border-b border-brand-forest/20 pb-3">
                <div class="min-w-0">
                  <h2 class="font-botanic font-bold text-xl sm:text-2xl text-brand-forest">
                    Historial de Compras
                  </h2>
                  <p class="text-xs text-brand-leaf/70 font-medium mt-1">Todas tus compras solicitadas</p>
                </div>
                <a 
                  href="politicas-retiro.html" 
                  class="text-xs sm:text-sm font-bold bg-brand-forest text-brand-sunflower px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xs hover:bg-[#3e4a2f] hover:scale-105 active:scale-95 transition-all text-center inline-flex items-center gap-1.5 whitespace-nowrap"
                  title="Ver Políticas de Retiro"
                >
                  <span>Políticas de Retiro</span>
                </a>
              </div>

              <!-- Listado de Pedidos con fondo crema (#FEFAE0) y estado en Verde Oscuro (#283618) -->
              <div class="space-y-4 sm:space-y-5">
                ${orders.map((ord, idx) => `
                  <div class="p-4 sm:p-5 rounded-2xl bg-[#FEFAE0] border-2 border-brand-forest/30 text-sm space-y-4 transition-all hover:border-brand-forest shadow-xs">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div class="min-w-0">
                        <span class="font-mono text-sm sm:text-base font-extrabold text-brand-forest block mb-1 break-all">
                          ${ord.number}
                        </span>
                        <span class="text-xs text-brand-leaf/80 font-medium block">
                          Fecha: ${escapeHtml(ord.date || 'Reciente')} • Modalidad: <strong>${escapeHtml(ord.method || 'Retiro en Tienda')}</strong>
                        </span>
                      </div>

                      <div class="text-left sm:text-right flex-shrink-0">
                        <span class="text-base sm:text-lg font-black text-brand-forest block mb-0.5">
                          $${Number(ord.total).toFixed(2)} USD
                        </span>
                        <span class="text-[11px] text-brand-leaf/70 font-bold uppercase tracking-wider block">
                          ${(ord.items || []).length} ${(ord.items || []).length === 1 ? 'producto' : 'productos'}
                        </span>
                      </div>
                    </div>

                    <!-- Fila de Estado: Selector limpio, 100% adaptable y sin desbordes -->
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-brand-forest/20 flex-wrap">
                      <div class="space-y-1 w-full sm:w-auto max-w-full">
                        <span class="text-[11px] sm:text-xs font-extrabold text-brand-forest uppercase tracking-wider flex items-center gap-1">
                          <i aria-hidden="true" class="ph ph-tag text-xs"></i>
                          <span>Estado:</span>
                        </span>
                        <div class="relative inline-block w-full sm:w-auto max-w-full" id="dropdown-wrapper-${idx}">
                          <button 
                            type="button" 
                            onclick="toggleStatusDropdown('${idx}', event)" 
                            class="w-full sm:w-auto max-w-full min-w-[160px] inline-flex items-center justify-between gap-3 px-3.5 py-1.5 rounded-xl bg-brand-forest text-brand-cream text-xs sm:text-sm font-bold border border-brand-forest shadow-xs hover:bg-[#1f2b13] transition-colors cursor-pointer text-left focus:outline-none whitespace-nowrap"
                            id="status-btn-${idx}"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                          >
                            <span class="whitespace-nowrap flex-shrink-0">${ord.status}</span>
                            <i aria-hidden="true" class="ph ph-caret-down text-brand-sunflower text-xs font-bold flex-shrink-0 transition-transform duration-200"></i>
                          </button>
                          <div 
                            id="status-menu-${idx}" 
                            class="hidden absolute z-50 left-0 top-full mt-1.5 min-w-full w-max max-w-[90vw] bg-[#18230F] text-brand-cream rounded-xl border border-brand-forest/60 shadow-2xl py-1.5"
                            role="listbox"
                          >
                            ${['Recibido', 'En Tienda', 'Listo para Retiro', 'Entregado'].map(st => `
                              <button 
                                type="button" 
                                onclick="selectCustomOrderStatus('${ord.number}', '${st}')" 
                                class="w-full px-3.5 py-2 text-left text-xs sm:text-sm font-bold flex items-center justify-between gap-3 hover:bg-brand-forest transition-colors ${ord.status === st ? 'text-brand-sunflower bg-brand-forest/60' : 'text-brand-cream'}"
                                role="option"
                                aria-selected="${ord.status === st}"
                              >
                                <span class="whitespace-nowrap">${st}</span>
                                ${ord.status === st ? '<i aria-hidden="true" class="ph ph-check text-brand-sunflower text-xs flex-shrink-0"></i>' : ''}
                              </button>
                            `).join('')}
                          </div>
                        </div>
                      </div>

                      <button 
                        type="button" 
                        onclick="toggleOrderItemsView('order-items-${idx}', this)" 
                        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf text-xs sm:text-sm font-bold transition-transform active:scale-95 shadow-xs border border-brand-forest/20 flex-shrink-0"
                      >
                        <i aria-hidden="true" class="ph ph-shopping-cart text-base flex-shrink-0"></i>
                        <span class="whitespace-nowrap">Ver productos (${(ord.items || []).length})</span>
                        <i aria-hidden="true" class="ph ph-caret-down text-xs transition-transform duration-200 flex-shrink-0"></i>
                      </button>
                    </div>

                    <!-- Panel de Productos -->
                    <div id="order-items-${idx}" class="hidden pt-4 border-t border-brand-forest/20 space-y-3">
                      <span class="text-[11px] font-bold text-brand-forest uppercase tracking-wider block mb-2">
                        Productos incluidos en este pedido:
                      </span>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
                        ${(ord.items || []).map(prod => `
                          <div class="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-brand-cream border border-brand-forest/20 text-sm shadow-2xs">
                            <div class="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                              <img src="${prod.image}" alt="${prod.name}" class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-brand-forest/20 flex-shrink-0" onerror="this.src='https://placehold.co/80x80/CCD5AE/283618?text=Item'">
                              <div class="min-w-0 flex-1">
                                <a href="producto.html?id=${prod.id}" class="font-bold text-xs sm:text-sm text-brand-forest hover:text-brand-moss transition-colors truncate block pb-0.5">
                                  ${prod.name}
                                </a>
                                <span class="text-[11px] sm:text-xs text-brand-leaf/70 block font-medium truncate">${prod.size || 'Unidad'}</span>
                              </div>
                            </div>

                            <div class="text-right flex-shrink-0 pl-2">
                              <span class="font-extrabold text-brand-forest block text-sm sm:text-base mb-0.5">$${(prod.price * prod.quantity).toFixed(2)}</span>
                              <span class="text-[11px] sm:text-xs text-brand-leaf/70 font-semibold">${prod.quantity} x $${prod.price.toFixed(2)}</span>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>

                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Pestaña 3: Productos Favoritos con filtros por categoría y subcategoría -->
          <div id="account-tab-favorites" role="tabpanel" aria-labelledby="tab-btn-favorites" class="${currentAccountTab === 'favorites' ? '' : 'hidden'} max-w-5xl mx-auto w-full space-y-6 !px-0 box-border overflow-hidden">
            ${getFavoritesTabHTML()}
          </div>

        </div>
      `;
    }

    const DEFAULT_ORDERS_MOCK = [
      {
        number: 'NAT-2026-0481',
        date: '03 de Octubre, 2026',
        total: 28.50,
        method: 'Pagar al Retirar en Tienda',
        status: 'Listo para Retiro',
        items: [
          {
            id: 'vitamina-c',
            name: 'Vitamina C + Camu Camu Amazónico',
            price: 13.50,
            quantity: 1,
            size: '60 cápsulas vegetales',
            image: 'https://placehold.co/600x600/CCD5AE/283618?text=Capsulas+de+Vitamina+C%0Arodeadas+de+hojas'
          },
          {
            id: 'omega-3',
            name: 'Perlas de Omega 3, 6 y 9 de Sacha Inchi',
            price: 15.00,
            quantity: 1,
            size: '90 perlas softgel',
            image: 'https://vivaelmusculo.com/img/cms/omega%203-6-9.png'
          }
        ]
      },
      {
        number: 'NAT-2026-0219',
        date: '15 de Septiembre, 2026',
        total: 17.00,
        method: 'Tarjeta Débito / Crédito',
        status: 'Entregado',
        items: [
          {
            id: 'maca',
            name: 'Maca Andina Negra Gelatinizada',
            price: 8.50,
            quantity: 2,
            size: '250g polvo soluble',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOlBnDDUtiKOEEfB3vuVdLrztZySFMmJs29vRBK3j5-Yirc4KdygNS8m&s=10'
          }
        ]
      },
      {
        number: 'NAT-2026-0104',
        date: '28 de Agosto, 2026',
        total: 24.00,
        method: 'Pagar al Retirar en Tienda',
        status: 'Entregado',
        items: [
          {
            id: 'cacao',
            name: 'Cacao Fino de Aroma Puro 100%',
            price: 6.00,
            quantity: 1,
            size: '200g polvo puro',
            image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=700&q=80'
          },
          {
            id: 'colageno',
            name: 'Colágeno Hidrolizado + Biotina y Camu Camu',
            price: 18.00,
            quantity: 1,
            size: '350g con dosificador',
            image: 'https://www.nutrimea.com/cdn/shop/articles/Capture_d_ecran_2026-05-19_a_11.06.21_420c22a4-7e46-4463-82fd-1a52e0692427.png?v=1779871726&width=2048'
          }
        ]
      }
    ];

    function getAllOrders() {
      const stored = localStorage.getItem('sacha_pamba_orders');
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error(e);
        }
      }
      localStorage.setItem('sacha_pamba_orders', JSON.stringify(DEFAULT_ORDERS_MOCK));
      return DEFAULT_ORDERS_MOCK;
    }

    function saveAllOrders(orders) {
      localStorage.setItem('sacha_pamba_orders', JSON.stringify(orders));
      if (orders && orders.length > 0) {
        localStorage.setItem('sacha_last_order', JSON.stringify(orders[0]));
      }
    }

    function changeOrderStatus(orderNumber, newStatus) {
      const orders = getAllOrders();
      const order = orders.find(o => o.number === orderNumber);
      if (!order) return;

      order.status = newStatus;
      saveAllOrders(orders);

      if (newStatus === 'Entregado' && order.items) {
        let pickedUp = getPickedUpProducts();
        order.items.forEach(item => {
          if (!pickedUp.includes(item.id)) {
            pickedUp.push(item.id);
          }
        });
        localStorage.setItem('sacha_pamba_picked_up_products', JSON.stringify(pickedUp));
      }

      showToast(`Pedido ${orderNumber}: Estado cambiado a "${newStatus}"`, 'ph-check-circle');
      refreshPageContent();
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
          const caret = btn.querySelector('.ph-caret-down');
          if (caret) caret.classList.add('rotate-180');
        }
      }
    }

    function selectCustomOrderStatus(orderNumber, newStatus) {
      document.querySelectorAll('[id^="status-menu-"]').forEach(m => m.classList.add('hidden'));
      changeOrderStatus(orderNumber, newStatus);
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

    // --- Vista 9: Ayuda y Soporte / FAQ (ayuda.html) ---
    function renderAyudaView() {
      return `
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-sm font-bold text-brand-moss uppercase tracking-wider block mb-2">Centro de Soporte</span>
            <h1 class="font-botanic text-4xl font-bold text-brand-forest mt-1">Preguntas Frecuentes <span class="amp-normal">&amp;</span> Ayuda</h1>
            <p class="text-sm sm:text-base text-brand-leaf/70 mt-3 font-medium leading-relaxed">Todo lo que necesitas saber sobre retiro en tienda, origen agroecológico y modos de uso.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            <div class="md:col-span-7 space-y-4 text-left" id="faq-accordion" role="region" aria-label="Listado de preguntas frecuentes">
              
              <!-- Bloque accesible para lectores de pantalla: lee las preguntas en orden y la respuesta inmediatamente tras la pregunta desplegada -->
              <div class="lector_texto_accesible" role="region" aria-label="Preguntas frecuentes y respuestas" lang="es">
                <p id="faq-a11y-texto" aria-live="polite" lang="es">Preguntas frecuentes. Pregunta 1: ¿Cómo funciona el retiro en la tienda física de Quito? Pregunta 2: ¿Los productos y extractos tienen certificación agroecológica? Pregunta 3: ¿Puedo pagar en efectivo o tarjeta al momento de retirar? Pregunta 4: ¿Emiten factura con validez tributaria para el SRI?</p>
              </div>

              <div class="bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/20 shadow-sm">
                <button type="button" role="button" id="faq-btn-1" aria-expanded="false" aria-controls="faq-content-1" class="faq-btn w-full p-5 flex justify-between items-center text-sm sm:text-base font-bold text-brand-forest text-left hover:bg-brand-forest/5 transition-colors cursor-pointer rounded-3xl">
                  <span>¿Cómo funciona el retiro en la tienda física de Quito?</span>
                  <i aria-hidden="true" class="ph ph-caret-down text-xl transition-transform"></i>
                </button>
                <div id="faq-content-1" aria-hidden="true" class="faq-content hidden p-5 pt-0 text-sm text-brand-leaf font-medium leading-relaxed border-t border-brand-forest/15 rounded-b-3xl">
                  Una vez confirmado tu pedido, lo empacamos en un lapso de 2 horas. Puedes acercarte a nuestra tienda en la Av. González Suárez 420 y Coruña con tu cédula y número de pedido (#NAT-XXXX). El retiro no tiene ningún costo.
                </div>
              </div>

              <div class="bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/20 shadow-sm">
                <button type="button" role="button" id="faq-btn-2" aria-expanded="false" aria-controls="faq-content-2" class="faq-btn w-full p-5 flex justify-between items-center text-sm sm:text-base font-bold text-brand-forest text-left hover:bg-brand-forest/5 transition-colors cursor-pointer rounded-3xl">
                  <span>¿Los productos y extractos tienen certificación agroecológica?</span>
                  <i aria-hidden="true" class="ph ph-caret-down text-xl transition-transform"></i>
                </button>
                <div id="faq-content-2" aria-hidden="true" class="faq-content hidden p-5 pt-0 text-sm text-brand-leaf font-medium leading-relaxed border-t border-brand-forest/15 rounded-b-3xl">
                  Sí. Todos nuestros productos, suplementos y superalimentos provienen de cosechas agroecológicas y recolección silvestre sustentable en Napo, Pastaza y Cayambe, libres de pesticidas químicos.
                </div>
              </div>

              <div class="bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/20 shadow-sm">
                <button type="button" role="button" id="faq-btn-3" aria-expanded="false" aria-controls="faq-content-3" class="faq-btn w-full p-5 flex justify-between items-center text-sm sm:text-base font-bold text-brand-forest text-left hover:bg-brand-forest/5 transition-colors cursor-pointer rounded-3xl">
                  <span>¿Puedo pagar en efectivo o tarjeta al momento de retirar?</span>
                  <i aria-hidden="true" class="ph ph-caret-down text-xl transition-transform"></i>
                </button>
                <div id="faq-content-3" aria-hidden="true" class="faq-content hidden p-5 pt-0 text-sm text-brand-leaf font-medium leading-relaxed border-t border-brand-forest/15 rounded-b-3xl">
                  ¡Por supuesto! Durante el paso de pago en la web puedes seleccionar "Pagar al Retirar" y abonar en caja con efectivo, tarjeta de débito/crédito o transferencia bancaria directa.
                </div>
              </div>

              <div class="bg-[#CCD5AE] rounded-3xl border-2 border-brand-forest/20 shadow-sm">
                <button type="button" role="button" id="faq-btn-4" aria-expanded="false" aria-controls="faq-content-4" class="faq-btn w-full p-5 flex justify-between items-center text-sm sm:text-base font-bold text-brand-forest text-left hover:bg-brand-forest/5 transition-colors cursor-pointer rounded-3xl">
                  <span>¿Emiten factura con validez tributaria para el SRI?</span>
                  <i aria-hidden="true" class="ph ph-caret-down text-xl transition-transform"></i>
                </button>
                <div id="faq-content-4" aria-hidden="true" class="faq-content hidden p-5 pt-0 text-sm text-brand-leaf font-medium leading-relaxed border-t border-brand-forest/15 rounded-b-3xl">
                  Sí, emitimos facturación electrónica autorizada por el SRI enviada directamente a tu correo electrónico al procesarse la compra.
                </div>
              </div>

            </div>

            <section role="region" aria-label="Formulario de contacto y consultas" class="md:col-span-5 bg-brand-cream rounded-3xl border-2 border-brand-forest p-7 shadow-sm space-y-5 text-left">
              <h2 class="font-botanic font-bold text-lg text-brand-forest border-b border-brand-forest/20 pb-3">
                ¿Tienes alguna consulta especial?
              </h2>
              <form onsubmit="event.preventDefault(); showToast('Mensaje enviado. Te responderemos pronto.');" class="space-y-4 text-sm font-medium">
                <div>
                  <label for="help-name" class="block text-brand-forest font-bold mb-1.5">Nombre</label>
                  <input type="text" id="help-name" required placeholder="Tu nombre" class="w-full p-3.5 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest">
                </div>
                <div>
                  <label for="help-email" class="block text-brand-forest font-bold mb-1.5">Email</label>
                  <input type="email" id="help-email" required placeholder="tu@correo.ec" class="w-full p-3.5 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest">
                </div>
                <div>
                  <label for="help-message" class="block text-brand-forest font-bold mb-1.5">Mensaje o duda</label>
                  <textarea id="help-message" rows="4" required placeholder="Escribe aquí tu pregunta sobre dosis o productos..." class="w-full p-3.5 rounded-xl border border-brand-forest/30 bg-[#FEFAE0] text-brand-leaf focus:outline-none focus:border-brand-forest"></textarea>
                </div>
                <button type="submit" role="button" class="w-full py-4 rounded-xl bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-base transition-transform active:scale-95 shadow-sm mt-2 cursor-pointer">
                  Enviar consulta
                </button>
              </form>
            </section>

          </div>

        </div>
      `;
    }

    // --- Vista 10: Políticas de Retiro en Tienda (politicas-retiro.html) ---
    function renderPoliticasRetiroView() {
      return `
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          
          <div class="text-left mb-8 sm:mb-10 pb-5 border-b border-brand-forest/20">
            <div class="flex items-center gap-2.5 text-brand-moss font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest mb-2 flex-wrap">
              <i aria-hidden="true" class="ph ph-storefront text-lg sm:text-xl flex-shrink-0"></i>
              <span>Servicio de Tienda Física — Quito, Pichincha</span>
            </div>
            <h1 class="font-botanic text-2xl sm:text-4xl md:text-5xl font-bold text-brand-forest mt-1 break-words">Políticas de Retiro en Tienda</h1>
            <p class="text-sm sm:text-base md:text-lg text-brand-leaf/80 mt-3 max-w-3xl leading-relaxed font-medium break-words">
              En Sacha & Pamba cuidamos cada detalle para que tu experiencia de retiro en nuestra tienda de Quito sea rápida, segura y sustentable.
            </p>
          </div>

          <div class="space-y-6 sm:space-y-8 text-left">
            <section role="region" aria-label="1. Ubicación y Horarios de Atención" class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 md:p-9 shadow-sm">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-2xl sm:text-4xl flex-shrink-0 shadow-xs">
                  <i aria-hidden="true" class="ph ph-map-pin"></i>
                </div>
                <div class="space-y-4 flex-1 min-w-0">
                  <h2 class="font-botanic font-bold text-lg sm:text-xl md:text-2xl text-brand-forest break-words">1. Ubicación y Horarios de Atención</h2>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Todos los retiros se realizan exclusivamente en nuestro punto oficial en <strong>Av. González Suárez 420 y Coruña, Quito, Ecuador</strong>.
                  </p>
                  <div class="bg-[#CCD5AE] p-4 sm:p-6 rounded-2xl border-2 border-brand-forest/30 text-xs sm:text-sm md:text-base text-brand-forest space-y-2.5 shadow-xs font-medium">
                    <p class="flex items-start gap-3">
                      <i aria-hidden="true" class="ph ph-calendar-check text-xl text-brand-forest flex-shrink-0 mt-0.5"></i>
                      <span class="min-w-0 flex-1 break-words"><strong>Lunes a Viernes:</strong> 08:30 a 18:30 (horario ininterrumpido)</span>
                    </p>
                    <p class="flex items-start gap-3">
                      <i aria-hidden="true" class="ph ph-clock text-xl text-brand-forest flex-shrink-0 mt-0.5"></i>
                      <span class="min-w-0 flex-1 break-words"><strong>Sábados:</strong> 09:00 a 14:00</span>
                    </p>
                    <p class="flex items-start gap-3 pt-2 border-t border-brand-forest/20 text-brand-forest/90">
                      <i aria-hidden="true" class="ph ph-prohibit text-xl text-brand-forest flex-shrink-0 mt-0.5"></i>
                      <span class="min-w-0 flex-1 break-words"><strong>Domingos y Feriados Nacionales:</strong> Cerrado (pedidos procesados el siguiente día hábil).</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section role="region" aria-label="2. Tiempos de Preparación y Notificación" class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 md:p-9 shadow-sm">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-2xl sm:text-4xl flex-shrink-0 shadow-xs">
                  <i aria-hidden="true" class="ph ph-clock"></i>
                </div>
                <div class="space-y-3 flex-1 min-w-0">
                  <h2 class="font-botanic font-bold text-lg sm:text-xl md:text-2xl text-brand-forest break-words">2. Tiempos de Preparación y Notificación</h2>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Tu pedido se empaca artesanalmente en materiales biodegradables dentro de un plazo promedio de <strong>2 horas hábiles</strong> tras confirmar la orden en línea.
                  </p>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Podrás hacer seguimiento de tu orden en la sección de <em>Seguimiento de Pedidos</em>. Cuando el estado marque <strong>"Listo para Retiro"</strong>, puedes pasar inmediatamente.
                  </p>
                </div>
              </div>
            </section>

            <section role="region" aria-label="3. Requisitos para el Retiro" class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 md:p-9 shadow-sm">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-2xl sm:text-4xl flex-shrink-0 shadow-xs">
                  <i aria-hidden="true" class="ph ph-identification-card"></i>
                </div>
                <div class="space-y-3 flex-1 min-w-0">
                  <h2 class="font-botanic font-bold text-lg sm:text-xl md:text-2xl text-brand-forest break-words">3. Requisitos para el Retiro</h2>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Para resguardar la seguridad de tu compra, es indispensable presentar en mostrador:
                  </p>
                  <ul class="list-disc pl-5 space-y-2 text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    <li><strong>Documento de Identificación original:</strong> Cédula de identidad física o pasaporte del titular de la compra.</li>
                    <li><strong>Código de Pedido:</strong> Número oficial (#NAT-XXXX) visible en tu pantalla o comprobante.</li>
                    <li><strong>Retiro por Terceros:</strong> Si otra persona retira en tu lugar, debe presentar una foto legible de la cédula del comprador junto a su propia identificación y número de pedido.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section role="region" aria-label="4. Costos y Período de Almacenamiento Gratuito" class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 md:p-9 shadow-sm">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-2xl sm:text-4xl flex-shrink-0 shadow-xs">
                  <i aria-hidden="true" class="ph ph-archive-box"></i>
                </div>
                <div class="space-y-3 flex-1 min-w-0">
                  <h2 class="font-botanic font-bold text-lg sm:text-xl md:text-2xl text-brand-forest break-words">4. Costos y Período de Almacenamiento Gratuito</h2>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    El servicio de retiro en nuestra tienda es <strong>100% gratuito ($0.00)</strong> sin ningún monto mínimo de compra.
                  </p>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Guardamos tu pedido empacado y resguardado en temperatura controlada hasta por un máximo de <strong>15 días calendario</strong>. Si necesitas extender el plazo, comunícate a nuestro WhatsApp <em>+593 99 876 5432</em>.
                  </p>
                </div>
              </div>
            </section>

            <section role="region" aria-label="5. Formas de Pago Aceptadas en Tienda" class="bg-brand-cream rounded-3xl border-2 border-brand-forest p-5 sm:p-7 md:p-9 shadow-sm">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <div class="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-forest text-brand-sunflower flex items-center justify-center text-2xl sm:text-4xl flex-shrink-0 shadow-xs">
                  <i aria-hidden="true" class="ph ph-credit-card"></i>
                </div>
                <div class="space-y-3 flex-1 min-w-0">
                  <h2 class="font-botanic font-bold text-lg sm:text-xl md:text-2xl text-brand-forest break-words">5. Formas de Pago Aceptadas en Tienda</h2>
                  <p class="text-sm sm:text-base text-brand-leaf/80 leading-relaxed font-medium break-words">
                    Si elegiste la opción <strong>"Pagar al Retirar"</strong>, podrás cancelar el valor exacto de tu orden en mostrador mediante:
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-sm sm:text-base">
                    <span class="bg-[#CCD5AE] p-3.5 rounded-xl border-2 border-brand-forest/20 font-bold text-brand-forest flex items-center justify-center gap-2 shadow-xs text-center min-w-0 break-words">
                      <i aria-hidden="true" class="ph ph-money text-xl flex-shrink-0"></i> <span>Efectivo exacto</span>
                    </span>
                    <span class="bg-[#CCD5AE] p-3.5 rounded-xl border-2 border-brand-forest/20 font-bold text-brand-forest flex items-center justify-center gap-2 shadow-xs text-center min-w-0 break-words">
                      <i aria-hidden="true" class="ph ph-credit-card text-xl flex-shrink-0"></i> <span>Débito y Crédito</span>
                    </span>
                    <span class="bg-[#CCD5AE] p-3.5 rounded-xl border-2 border-brand-forest/20 font-bold text-brand-forest flex items-center justify-center gap-2 shadow-xs text-center min-w-0 break-words">
                      <i aria-hidden="true" class="ph ph-bank text-xl flex-shrink-0"></i> <span>Transferencia directa</span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="mt-10 sm:mt-12 text-center pt-3">
            <a href="categoria.html" role="button" class="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-sunflower hover:bg-[#dcb556] text-brand-leaf font-bold text-sm sm:text-base shadow-sm transition-transform active:scale-95 max-w-full break-words">
              <i aria-hidden="true" class="ph ph-plant text-xl flex-shrink-0"></i>
              <span>Explorar catálogo y hacer tu pedido</span>
            </a>
          </div>

        </div>
      `;
    }

    function getCurrentPageUrl() {
      return (window.location.pathname.split('/').pop() || 'index.html') + window.location.search;
    }

    function parsePageUrl(url = getCurrentPageUrl()) {
      const pageUrl = new URL(url, window.location.href);
      return {
        path: pageUrl.pathname.split('/').pop() || 'index.html',
        params: Object.fromEntries(pageUrl.searchParams)
      };
    }

    function updateActiveNav(path) {
      document.querySelectorAll('.nav-section-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        const cleanHref = href;
        if (cleanHref && (cleanHref === path || (path === 'index.html' && cleanHref === 'index.html'))) {
          link.classList.add('bg-brand-olive', 'text-brand-forest', 'shadow-xs');
          link.classList.remove('bg-white/10', 'text-brand-cream/90');
        } else {
          link.classList.remove('bg-brand-olive', 'text-brand-forest', 'shadow-xs');
          link.classList.add('text-brand-cream/90');
        }
      });
    }

    // Actualizar datos tras una acci?n en la p?gina actual, sin navegar entre vistas.
    function refreshPageContent() {
      const { path, params } = parsePageUrl();
      const app = document.getElementById('app');
      if (!app) return;
      if (path === 'carrito.html') app.innerHTML = renderCartView();
      else if (path === 'cuenta.html') app.innerHTML = renderCuentaView();
      else if (path === 'producto.html') app.innerHTML = renderProductView(params);
    }

    function navigateTo(url) {
      const destination = new URL(url, window.location.href);
      const { path } = parsePageUrl(destination.href);
      if (path === 'carrito.html' || path.startsWith('checkout')) closeCartDrawer();
      if (destination.href === window.location.href) return;
      window.location.assign(destination.href);
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

      if (!slides.length) return;

      currentHeroSlide = 0;

      function updateSlide(index) {
        if (index < 0) {
          currentHeroSlide = slides.length - 1;
        } else if (index >= slides.length) {
          currentHeroSlide = 0;
        } else {
          currentHeroSlide = index;
        }

        slides.forEach((slide, i) => {
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

      function nextSlide() {
        updateSlide(currentHeroSlide + 1);
      }

      function prevSlide() {
        updateSlide(currentHeroSlide - 1);
      }

      if (prevBtn) {
        prevBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
          resetTimer();
        };
      }

      if (nextBtn) {
        nextBtn.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
          resetTimer();
        };
      }

      dots.forEach(dot => {
        dot.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          const targetIndex = parseInt(dot.getAttribute('data-hero-slide'), 10);
          if (!isNaN(targetIndex)) {
            updateSlide(targetIndex);
            resetTimer();
          }
        };
      });

      function startTimer() {
        if (heroAutoplayTimer) clearInterval(heroAutoplayTimer);
        heroAutoplayTimer = setInterval(nextSlide, 5000);
      }

      function resetTimer() {
        startTimer();
      }

      const carouselGroup = carousel.closest('.group') || carousel;
      carouselGroup.onmouseenter = () => {
        if (heroAutoplayTimer) {
          clearInterval(heroAutoplayTimer);
          heroAutoplayTimer = null;
        }
      };

      carouselGroup.onmouseleave = () => {
        startTimer();
      };

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
              nextSlide();
            } else {
              prevSlide();
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

        // Actualizar Cuadrícula de Productos con suave transición
        const gridEl = document.getElementById('home-products-grid');
        if (gridEl) {
          gridEl.classList.add('opacity-0');
          setTimeout(() => {
            const products = PRODUCTS.filter(config.filter).slice(0, 4);
            gridEl.innerHTML = products.map(renderProductCard).join('');
            gridEl.classList.remove('opacity-0');
          }, 150);
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
          btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
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
          const isSupplements = (cat === 'suplementos');
          const currentSpecial = new URLSearchParams(window.location.search).get('special');
          const currentCat = new URLSearchParams(window.location.search).get('cat');

          // Si se hace clic en la categoría y aún no está seleccionada, seleccionarla y abrirla
          if (!isCaretClick) {
            if (isSpecial && !currentSpecial) {
              navigateTo('categoria.html?special=all');
              return;
            }
            if (isSupplements && currentCat !== 'suplementos') {
              navigateTo('categoria.html?cat=suplementos');
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
      const stored = localStorage.getItem('sacha_pamba_user');
      return stored ? JSON.parse(stored) : null;
    }

    function setCurrentUser(user) {
      if (user) {
        localStorage.setItem('sacha_pamba_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('sacha_pamba_user');
      }
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

    function openAuthModal(tab = 'login', customNotice = null) {
      if (!authModal) return;
      switchAuthTab(tab);

      if (customNotice) {
        showToast(customNotice, 'ph-shopping-cart');
      } else if (pendingCheckoutRedirect) {
        showToast('Inicia sesión o regístrate para continuar con tu pedido.', 'ph-shopping-cart');
      }

      authModal.scrollTop = 0;
      const modalBody = document.getElementById('auth-modal-body');
      if (modalBody) modalBody.scrollTop = 0;
      authModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeAuthModal() {
      if (!authModal) return;
      authModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      if (pendingCheckoutRedirect) {
        const currentPath = parsePageUrl(getCurrentPageUrl()).path;
        if (currentPath.startsWith('checkout') || currentPath === 'cuenta.html' || currentPath === 'seguimiento-pedidos.html') {
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
          const currentPath = parsePageUrl(getCurrentPageUrl()).path;
          if (currentPath === 'cuenta.html' || currentPath === 'seguimiento-pedidos.html') {
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
      if (input) {
        input.classList.remove('border-brand-olive', 'border-brand-forest');
        input.classList.add('border-red-500');
        input.focus();
      }
      if (err) {
        if (message) {
          const span = err.querySelector('span');
          if (span) span.textContent = message;
          else err.textContent = message;
        }
        err.classList.remove('hidden');
      }
    }

    function clearFieldValidation(inputId) {
      const input = document.getElementById(inputId);
      const err = document.getElementById(inputId + '-err');
      if (input) {
        input.classList.remove('border-red-500');
        input.classList.add('border-brand-olive');
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
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i> <span>Las contraseñas deben coincidir</span>';
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-olive');
        confirmInput.classList.add('border-red-500');
        return false;
      }

      if (pass === confirmPass) {
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-check text-green-600 text-sm flex-shrink-0"></i> <span>Las contraseñas coinciden</span>';
        matchMsg.className = 'text-xs font-bold text-green-800 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-red-500', 'border-brand-olive');
        confirmInput.classList.add('border-green-600');
        return true;
      } else {
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i> <span>Las contraseñas no coinciden</span>';
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-olive');
        confirmInput.classList.add('border-red-500');
        return false;
      }
    }

    function handleLoginSubmit(e) {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passInput ? passInput.value.trim() : '';

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

      const existingUser = getCurrentUser();
      const user = {
        name: (existingUser && existingUser.email === email && existingUser.name) ? existingUser.name : email.split('@')[0].replace('.', ' ').toUpperCase(),
        email: email,
        username: (existingUser && existingUser.email === email && existingUser.username) ? existingUser.username : '',
        phone: (existingUser && existingUser.email === email && existingUser.phone) ? existingUser.phone : '+593 99 876 5432',
        docType: (existingUser && existingUser.email === email && existingUser.docType) ? existingUser.docType : 'Cédula',
        idNumber: (existingUser && existingUser.email === email && existingUser.idNumber) ? existingUser.idNumber : '1723456789'
      };
      setCurrentUser(user);
      const destination = pendingCheckoutRedirect;
      pendingCheckoutRedirect = null;
      closeAuthModal();
      showToast(`¡Bienvenido de vuelta, ${user.name}!`);

      if (destination) {
        navigateTo(destination);
      } else {
        navigateTo('cuenta.html');
      }
    }

    function handleRegisterSubmit(e) {
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

      if (hasError) {
        showToast('Por favor, completa todos los campos obligatorios correctamente.', 'ph-warning-circle');
        return;
      }

      const user = { name, email, username, phone, docType, idNumber };
      setCurrentUser(user);
      const destination = pendingCheckoutRedirect;
      pendingCheckoutRedirect = null;
      closeAuthModal();
      showToast('¡Registro exitoso! Bienvenido a Sacha & Pamba');

      if (destination) {
        navigateTo(destination);
      } else {
        navigateTo('cuenta.html');
      }
    }

    function logoutUser() {
      setCurrentUser(null);
      showToast('Sesión cerrada con éxito');
      navigateTo('index.html');
    }

    function togglePasswordVisibility(inputId, btn) {
      const input = document.getElementById(inputId);
      if (!input) return;
      const icon = btn ? btn.querySelector('i') : null;
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
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i> <span>Las contraseñas deben coincidir</span>';
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-forest/30');
        confirmInput.classList.add('border-red-500');
        return;
      }

      if (newPass === confirmPass) {
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-check text-green-600 text-sm flex-shrink-0"></i> <span>Las contraseñas coinciden</span>';
        matchMsg.className = 'text-xs font-bold text-green-800 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-red-500', 'border-brand-forest/30');
        confirmInput.classList.add('border-green-600');
      } else {
        matchMsg.innerHTML = '<i aria-hidden="true" class="ph-bold ph-x text-red-500 text-sm flex-shrink-0"></i> <span>Las contraseñas no coinciden</span>';
        matchMsg.className = 'text-xs font-bold text-red-600 min-h-[1.25rem] flex items-center gap-1.5 pt-0.5';
        confirmInput.classList.remove('border-green-600', 'border-brand-forest/30');
        confirmInput.classList.add('border-red-500');
      }
    }

    function updateAccountDetails() {
      const name = document.getElementById('acc-name').value.trim();
      const usernameInput = document.getElementById('acc-username');
      const username = usernameInput ? usernameInput.value.trim() : '';
      const email = document.getElementById('acc-email').value.trim();
      const phone = document.getElementById('acc-phone').value.trim();
      const docTypeSelect = document.getElementById('acc-doc-type');
      const idInput = document.getElementById('acc-id');
      const newPasswordInput = document.getElementById('acc-new-password');
      const confirmPasswordInput = document.getElementById('acc-confirm-password');

      const user = getCurrentUser() || {};
      if (name) user.name = name;
      if (usernameInput) user.username = username;
      if (email) user.email = email;
      if (phone) user.phone = phone;
      if (docTypeSelect) user.docType = docTypeSelect.value;
      if (idInput && idInput.value.trim()) user.idNumber = idInput.value.trim();

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

        user.password = newPass;
        passwordUpdated = true;
      }

      setCurrentUser(user);
      if (passwordUpdated) {
        showToast('Información y contraseña actualizadas con éxito', 'ph-check-circle');
      } else {
        showToast('Información de cuenta e identificador actualizados', 'ph-check-circle');
      }
      refreshPageContent();
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
    function initializeCatalogPage() {
      const { path, params } = parsePageUrl();
      const main = document.getElementById('app');
      if (!main) return;
      if (path === 'categoria.html') {
        if (params.cat || params.subcat || params.special || getLastVisitedProduct()) {
          main.innerHTML = renderCategoryView(params);
        }
      } else if (path === 'producto.html') {
        const product = PRODUCTS.find(item => item.id === (params.id || 'maca')) || PRODUCTS[0];
        const previousPage = sessionStorage.getItem('sacha_prev_route') || '';
        if (product.id !== 'maca' || isProductPickedUp(product.id) ||
            localStorage.getItem(`reviews_${product.id}`) || previousPage.includes('cuenta.html')) {
          main.innerHTML = renderProductView(params);
        }
        setLastVisitedProduct({
          id: product.id,
          name: product.name,
          category: product.category,
          categoryName: product.categoryName
        });
      }
    }

    // Cada archivo conserva su HTML; actualizar los datos del flujo de compra al cargar.
    function initializePurchasePage() {
      const { path } = parsePageUrl();
      const main = document.getElementById('app');
      if (!main) return;
      if (path === 'carrito.html') {
        main.innerHTML = renderCartView();
      } else if (path === 'checkout-retiro.html' || path === 'checkout-pago.html') {
        main.innerHTML = path === 'checkout-retiro.html'
          ? renderCheckoutRetiroView()
          : renderCheckoutPagoView();
        if (!getCurrentUser()) {
          pendingCheckoutRedirect = getCurrentPageUrl();
          openAuthModal('register', 'Inicia sesion o registrate para proceder con tu compra.');
        }
      } else if (path === 'checkout-confirmacion.html') {
        main.innerHTML = renderCheckoutConfirmacionView();
      } else {
        return;
      }
      closeCartDrawer();
      const toggleButton = document.getElementById('cart-drawer-toggle-btn');
      if (toggleButton) toggleButton.classList.add('hidden');
    }

    function initApp() {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      updateCartDrawerZoom();
      updateCartBadge();
      updateCartDrawerUI();
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
      updateActiveNav(parsePageUrl().path);
      initializeCatalogPage();
      initializePurchasePage();
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

    // Mantener disponibles los eventos inline del HTML y de las vistas generadas.
    Object.assign(window, {
      sanitizeCart,
      saveCart,
      updateCartBadge,
      updateCartDrawerUI,
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
      getHeartIconSVG,
      updateFavoriteUI,
      toggleFavorite,
      handleCardImageClick,
      handleDetailImageClick,
      triggerFavoriteDblClick,
      renderFavoriteUndoCard,
      undoRemoveFavorite,
      getCatalogCategoriesAndSubcategories,
      setFavFilterCategory,
      setFavFilterSubcategory,
      resetFavFilters,
      renderFavoriteProductCard,
      getFavoritesTabHTML,
      renderFavoritesTabContent,
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
      renderCategoryView,
      saveCatalogPosition,
      handleBackToProducts,
      handleProductCardClick,
      renderProductCard,
      renderProductView,
      adjustProductQty,
      getCurrentImageIndex,
      switchProductImage,
      openImageLightbox,
      renderLightboxImage,
      syncDetailGalleryImage,
      navigateLightboxImage,
      navigateLightboxImageTo,
      closeImageLightbox,
      handleAddToCartFromDetail,
      getProductReviewsHtml,
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
      renderCheckoutStepper,
      renderCartView,
      renderCheckoutRetiroView,
      getCheckoutPaymentAccessibilityText,
      renderCheckoutPagoView,
      selectPaymentOption,
      processPayment,
      renderCheckoutConfirmacionView,
      switchAccountTab,
      renderCuentaView,
      getAllOrders,
      saveAllOrders,
      changeOrderStatus,
      toggleStatusDropdown,
      selectCustomOrderStatus,
      toggleOrderItemsView,
      renderAyudaView,
      renderPoliticasRetiroView,
      getCurrentPageUrl,
      parsePageUrl,
      updateActiveNav,
      refreshPageContent,
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
      initializeCatalogPage,
      initializePurchasePage,
      initApp,
    });

    // Los accesores conservan la misma referencia y el estado actual del m?dulo.
    Object.defineProperties(window, {
      PRODUCTS: { configurable: true, enumerable: true, get: () => PRODUCTS },
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
      DEFAULT_ORDERS_MOCK: { configurable: true, enumerable: true, get: () => DEFAULT_ORDERS_MOCK },
      heroAutoplayTimer: { configurable: true, enumerable: true, get: () => heroAutoplayTimer, set: value => { heroAutoplayTimer = value; } },
      currentHeroSlide: { configurable: true, enumerable: true, get: () => currentHeroSlide, set: value => { currentHeroSlide = value; } },
      authModal: { configurable: true, enumerable: true, get: () => authModal },
      authCloseBtn: { configurable: true, enumerable: true, get: () => authCloseBtn },
      navAuthBtn: { configurable: true, enumerable: true, get: () => navAuthBtn },
      imageLightboxModal: { configurable: true, enumerable: true, get: () => imageLightboxModal },
      confirmRemoveModal: { configurable: true, enumerable: true, get: () => confirmRemoveModal },
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
