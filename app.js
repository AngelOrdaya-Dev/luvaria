/**
 * LUVARIA — HAUTE PARFUMERIE
 * Core Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Data Store: Products & Pricing
  // ==========================================================================
  const perfumesData = {
    'alexandria-ii': {
      id: 'alexandria-ii',
      name: 'Alexandria II',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      badge: 'NICHO / OUD STARS',
      img: 'assets/images/Alexandr%C3%ADa.jpg',
      notes: 'Lavanda de Provenza, Palisandro, Canela de Ceilán, Rosa de Bulgaria y Oud Laotiano.',
      pricing: {
        '10ml': { usd: 68, pen: 250, label: '10 ML (DECANT)' },
        '100ml': { usd: 580, pen: 2200, label: '100 ML (FRASCO)' }
      }
    },
    '1861-naxos': {
      id: '1861-naxos',
      name: 'Xerjoff Naxos',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      badge: 'COLECCIÓN 1861',
      img: 'assets/images/Naxos.png',
      notes: 'Miel siciliana de flores silvestres, hojas de tabaco rubio, bergamota fresca de Calabria.',
      pricing: {
        '10ml': { usd: 35, pen: 130, label: '10 ML (DECANT)' },
        '100ml': { usd: 240, pen: 900, label: '100 ML (FRASCO)' }
      }
    },
    'le-male-elixir': {
      id: 'le-male-elixir',
      name: 'Le Male Elixir',
      brand: 'Jean Paul Gaultier',
      category: 'disenador',
      badge: 'LÍNEA DISEÑADOR',
      img: 'assets/images/JPG-Elixir.png',
      notes: 'Miel dorada, haba tonka tostada, lavanda aromática, benjuí resinoso y tabaco cálido.',
      pricing: {
        '10ml': { usd: 16, pen: 60, label: '10 ML (DECANT)' },
        '100ml': { usd: 140, pen: 530, label: '100 ML (FRASCO)' }
      }
    },
    'khamrah-qahwa': {
      id: 'khamrah-qahwa',
      name: 'Khamrah Qahwa',
      brand: 'Lattafa Pride Dubái',
      category: 'arabe',
      badge: 'PERFUMERY ÁRABE',
      img: 'assets/images/Khamrah-Qhawa.png',
      notes: 'Café árabe infusionado, canela fresca, praliné caramelizado, jengibre y maderas nobles.',
      pricing: {
        '10ml': { usd: 7, pen: 25, label: '10 ML (DECANT)' },
        '100ml': { usd: 35, pen: 130, label: '100 ML (FRASCO)' }
      }
    }
  };

  // Initial Cart State (Vacio por defecto)
  let cart = [];

  // ==========================================================================
  // 2. Sticky Header & Navigation Scroll
  // ==========================================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle & nav link interactions
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mainNav.classList.toggle('mobile-open');
      mobileMenuBtn.classList.toggle('active', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('mobile-open') && !mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('mobile-open');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }

  // Nav link active on click only (solo cuando se presiona)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Auto close mobile menu on navigation
      if (mainNav && mainNav.classList.contains('mobile-open')) {
        mainNav.classList.remove('mobile-open');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
      }
    });
  });

  // ==========================================================================
  // 2.1 Hero Crossfade Carousel (4 Fragancias Estrella)
  // ==========================================================================
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroTagText = document.getElementById('hero-tag-text');
  const heroDescText = document.getElementById('hero-desc-text');

  const heroPerfumesInfo = [
    {
      name: 'Alexandria II',
      tag: 'XERJOFF — ALEXANDRIA II & EDICIONES NICHO',
      desc: 'Decants auténticos y frascos selectos de perfumería nicho y oriental. Elegancia en cada detalle. Experimente notas de oud ancestral, maderas raras y flores sublimes.'
    },
    {
      name: 'Xerjoff Naxos',
      tag: 'XERJOFF — NAXOS (HOMENAJE A SICILIA)',
      desc: 'Opulencia mediterránea inolvidable: miel silvestre de flores sicilianas, hojas de tabaco rubio aromático y bergamota centelleante de Calabria.'
    },
    {
      name: 'Le Male Elixir',
      tag: 'JEAN PAUL GAULTIER — LE MALE ELIXIR',
      desc: 'Seducción y magnetismo ardiente en alta concentración: un acorde adictivo de miel dorada, haba tonka tostada, lavanda aromática y benjuí resinoso.'
    },
    {
      name: 'Khamrah Qahwa',
      tag: 'LATTAFA PRIDE DUBÁI — KHAMRAH QAHWA',
      desc: 'La joya oriental de mayor fijación y proyección: café árabe infusionado con cardamomo, praliné caramelizado, canela de Ceilán y maderas nobles.'
    }
  ];

  let currentHeroSlide = 0;
  let heroCarouselTimer = null;

  function switchHeroSlide(targetIndex) {
    if (targetIndex === currentHeroSlide) return;
    currentHeroSlide = targetIndex;

    // Update slides visibility
    heroSlides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentHeroSlide);
    });

    // Animate text smoothly
    const info = heroPerfumesInfo[currentHeroSlide];
    if (info) {
      if (heroTagText) {
        heroTagText.style.opacity = '0';
        heroTagText.style.transform = 'translateY(-4px)';
      }
      if (heroDescText) {
        heroDescText.style.opacity = '0';
        heroDescText.style.transform = 'translateY(4px)';
      }

      setTimeout(() => {
        if (heroTagText) {
          heroTagText.textContent = info.tag;
          heroTagText.style.opacity = '1';
          heroTagText.style.transform = 'translateY(0)';
        }
        if (heroDescText) {
          heroDescText.textContent = info.desc;
          heroDescText.style.opacity = '1';
          heroDescText.style.transform = 'translateY(0)';
        }
      }, 250);
    }
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroCarouselTimer = setInterval(() => {
      const nextSlide = (currentHeroSlide + 1) % heroSlides.length;
      switchHeroSlide(nextSlide);
    }, 5500);
  }

  function stopHeroTimer() {
    if (heroCarouselTimer) {
      clearInterval(heroCarouselTimer);
      heroCarouselTimer = null;
    }
  }

  if (heroSlides.length > 0) {
    startHeroTimer();
  }

  // ==========================================================================
  // 3. Presentation Switcher (10 ML vs 100 ML - Soles Peruanos)
  // ==========================================================================
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productId = card.getAttribute('data-id');
    const presBtns = card.querySelectorAll('.pres-btn');
    const pricePenEl = card.querySelector('.price-pen-main');

    presBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const size = btn.getAttribute('data-size');
        const productInfo = perfumesData[productId];

        if (productInfo && productInfo.pricing[size] && pricePenEl) {
          const newPricePen = productInfo.pricing[size].pen;

          // Smooth transition
          pricePenEl.style.opacity = '0';

          setTimeout(() => {
            pricePenEl.textContent = `S/ ${newPricePen}`;
            pricePenEl.style.opacity = '1';
          }, 150);
        }
      });
    });
  });

  // ==========================================================================
  // 4. Live Search (Exclusivo en el Navbar) & Category Filtering
  // ==========================================================================
  const navSearchContainer = document.getElementById('nav-search-container');
  const searchTrigger = document.getElementById('search-trigger');
  const navbarSearchInput = document.getElementById('navbar-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const resultsCounter = document.getElementById('catalog-results-count');

  function filterCatalog() {
    const query = navbarSearchInput ? navbarSearchInput.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.filter-pill.active');
    const selectedCategory = activePill ? activePill.getAttribute('data-category') : 'all';

    let visibleCount = 0;

    productCards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase();
      const brand = card.getAttribute('data-brand').toLowerCase();
      const notes = card.getAttribute('data-notes').toLowerCase();
      const category = card.getAttribute('data-category');

      const matchesQuery = !query || name.includes(query) || brand.includes(query) || notes.includes(query);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

      if (matchesQuery && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update Counter Text
    if (resultsCounter) {
      if (visibleCount === 0) {
        resultsCounter.textContent = query ? `No se encontraron fragancias para "${query}".` : 'No hay fragancias disponibles.';
      } else {
        resultsCounter.textContent = `Mostrando ${visibleCount} de ${productCards.length} fragancias selectas`;
      }
    }

    // Toggle clear search button
    if (clearSearchBtn) {
      clearSearchBtn.style.display = query ? 'block' : 'none';
    }
  }

  // Toggle Navbar Search Bar
  if (searchTrigger) {
    searchTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navSearchContainer) {
        navSearchContainer.classList.toggle('open');
        if (navSearchContainer.classList.contains('open') && navbarSearchInput) {
          navbarSearchInput.focus();
        }
      }
    });
  }

  if (navbarSearchInput) {
    navbarSearchInput.addEventListener('input', () => {
      filterCatalog();
      const catalogEl = document.getElementById('catalogo');
      if (catalogEl && navbarSearchInput.value.trim().length === 1) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });

    navbarSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navbarSearchInput.value = '';
        filterCatalog();
        if (navSearchContainer) navSearchContainer.classList.remove('open');
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navbarSearchInput) {
        navbarSearchInput.value = '';
        filterCatalog();
      }
      if (navSearchContainer) navSearchContainer.classList.remove('open');
    });
  }

  // Close search if clicking outside
  document.addEventListener('click', (e) => {
    if (navSearchContainer && !navSearchContainer.contains(e.target)) {
      if (navbarSearchInput && !navbarSearchInput.value.trim()) {
        navSearchContainer.classList.remove('open');
      }
    }
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterCatalog();
    });
  });

  // Link triggers from "Tres Universos" section
  const universeLinks = document.querySelectorAll('[data-filter-trigger]');
  universeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetCategory = link.getAttribute('data-filter-trigger');
      filterPills.forEach(p => {
        if (p.getAttribute('data-category') === targetCategory) {
          p.click();
        }
      });
    });
  });

  // ==========================================================================
  // 5. Shopping Cart Drawer System
  // ==========================================================================
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const drawerItemsCount = document.getElementById('drawer-items-count');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalUsd = document.getElementById('cart-total-usd');
  const cartTotalPen = document.getElementById('cart-total-pen');
  const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');

  function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function renderCart() {
    cartItemsList.innerHTML = '';

    let totalItems = 0;
    let totalPen = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align:center; padding: 40px 10px; color: var(--text-muted);">
          <p style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">Tu bolsa está vacía</p>
          <p style="font-size: 0.8rem;">Explore nuestra Selección Maestra y descubra su próxima firma olfativa.</p>
        </div>
      `;
    } else {
      cart.forEach((item, index) => {
        totalItems += item.qty;
        totalPen += item.pricePen * item.qty;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item-card';
        itemEl.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="cart-item-size">${item.sizeLabel}</span>
            <div class="cart-item-pricing" style="color:var(--gold-light);font-weight:600;">S/ ${item.pricePen * item.qty}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-pill">
              <button class="qty-btn" data-action="dec" data-index="${index}">-</button>
              <span class="qty-number">${item.qty}</span>
              <button class="qty-btn" data-action="inc" data-index="${index}">+</button>
            </div>
            <button class="remove-item-btn" data-index="${index}">Eliminar</button>
          </div>
        `;
        cartItemsList.appendChild(itemEl);
      });
    }

    // Update Counters and Totals
    if (cartBadgeCount) cartBadgeCount.textContent = totalItems;
    if (drawerItemsCount) drawerItemsCount.textContent = totalItems;
    if (cartTotalPen) cartTotalPen.textContent = `S/ ${totalPen}`;

    // Attach Event Listeners to item controls
    const qtyButtons = cartItemsList.querySelectorAll('.qty-btn');
    qtyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        const action = btn.getAttribute('data-action');
        if (action === 'inc') {
          cart[index].qty++;
        } else if (action === 'dec') {
          cart[index].qty--;
          if (cart[index].qty <= 0) {
            cart.splice(index, 1);
          }
        }
        renderCart();
      });
    });

    const removeButtons = cartItemsList.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        const removed = cart.splice(index, 1);
        renderCart();
        showToast(`Eliminado de la bolsa: ${removed[0].name}`);
      });
    });
  }

  // Add to cart from Product Cards
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const productId = card.getAttribute('data-id');
      const activePres = card.querySelector('.pres-btn.active');
      const size = activePres ? activePres.getAttribute('data-size') : '10ml';

      const product = perfumesData[productId];
      if (product) {
        const pricing = product.pricing[size];
        
        // Check if item already exists in cart with same size
        const existingIndex = cart.findIndex(i => i.id === productId && i.size === size);
        if (existingIndex > -1) {
          cart[existingIndex].qty++;
        } else {
          cart.push({
            id: productId,
            name: product.name,
            brand: product.brand,
            size: size,
            sizeLabel: pricing.label,
            pricePen: pricing.pen,
            qty: 1,
            img: product.img
          });
        }

        renderCart();
        openCart();
        showToast(`Añadido a la bolsa: ${product.name} (${pricing.label})`);
      }
    });
  });

  // WhatsApp Concierge Direct Checkout
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Tu bolsa está vacía. Añade un decant para ordenar.');
        return;
      }

      let orderSummary = "*PEDIDO LUVARIA HAUTE PARFUMERIE*%0A%0A";
      let totalPen = 0;

      cart.forEach((item, i) => {
        const subPen = item.pricePen * item.qty;
        totalPen += subPen;
        orderSummary += `${i + 1}. *${item.name}* (${item.sizeLabel}) x${item.qty} = S/ ${subPen}%0A`;
      });

      orderSummary += `%0A-------------------------------%0A`;
      orderSummary += `*INVERSIÓN TOTAL:* S/ ${totalPen}%0A`;
      orderSummary += `*DESTINO:* Lima / Provincias (Perú)%0A`;
      orderSummary += `*MÉTODO DE ENVÍO:* Shalom / Olva Courier%0A%0A`;
      orderSummary += `_Hola Luvaria, deseo coordinar el pago y envío de este pedido._`;

      const whatsappUrl = `https://wa.me/51986005143?text=${orderSummary}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // ==========================================================================
  // 6. Box Luvaria Live: 2 Decants (10 ML) al Azar en TikTok Live
  // ==========================================================================
  const orderLiveBoxBtn = document.getElementById('order-live-box-btn');

  function addLiveBoxToCart() {
    const existing = cart.find(item => item.id === 'box-luvaria-live');
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: 'box-luvaria-live',
        name: 'Box Luvaria (2 x 10ML) — En Vivo',
        brand: 'Selección al Azar en TikTok Live',
        size: '2x10ml',
        sizeLabel: '2 x 10 ML (AL AZAR EN LIVE)',
        pricePen: 40,
        qty: 1,
        img: 'assets/images/Decants.png'
      });
    }

    renderCart();
    openCart();
    showToast('Box Luvaria (2 x 10ML al Azar) añadido a tu bolsa');
  }

  if (orderLiveBoxBtn) {
    orderLiveBoxBtn.addEventListener('click', addLiveBoxToCart);
  }

  // ==========================================================================
  // 7. TikTok Simulated Video Modal
  // ==========================================================================
  const tiktokModal = document.getElementById('tiktok-video-modal');
  const closeVideoModalBtn = document.getElementById('close-video-modal');
  const videoCards = document.querySelectorAll('.video-card');
  const modalVideoThumb = document.getElementById('modal-video-thumb');
  const modalVideoCaption = document.getElementById('modal-video-caption');
  const modalPlayTrigger = document.getElementById('modal-play-trigger');
  const heroTiktokBtn = document.getElementById('hero-tiktok-btn');

  function openVideoModal(card) {
    const thumbSrc = card.querySelector('.video-thumb-img').getAttribute('src');
    const title = card.getAttribute('data-title');
    
    modalVideoThumb.setAttribute('src', thumbSrc);
    modalVideoCaption.textContent = title;

    tiktokModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      openVideoModal(card);
    });
  });

  if (heroTiktokBtn) {
    heroTiktokBtn.addEventListener('click', () => {
      window.open('https://www.tiktok.com/@luvaria12', '_blank');
    });
  }

  if (closeVideoModalBtn) {
    closeVideoModalBtn.addEventListener('click', () => {
      tiktokModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (tiktokModal) {
    tiktokModal.addEventListener('click', (e) => {
      if (e.target === tiktokModal) {
        tiktokModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (modalPlayTrigger) {
    modalPlayTrigger.addEventListener('click', () => {
      window.open('https://www.tiktok.com/@luvaria12', '_blank');
    });
  }

  // Watch Decant Process Video CTA
  const watchDecantBtn = document.getElementById('watch-decant-process-btn');
  if (watchDecantBtn && videoCards.length > 0) {
    watchDecantBtn.addEventListener('click', () => {
      openVideoModal(videoCards[0]);
    });
  }

  // Quick View buttons
  const quickViewBtns = document.querySelectorAll('.quick-view-btn');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-product');
      const prod = perfumesData[prodId];
      if (prod) {
        showToast(`Notas Olfativas de ${prod.name}: ${prod.notes}`);
      }
    });
  });

  // Footer product links filter to product
  const footerPerfumeLinks = document.querySelectorAll('.footer-perfume-link');
  footerPerfumeLinks.forEach(link => {
    link.addEventListener('click', () => {
      const prodId = link.getAttribute('data-product');
      const prod = perfumesData[prodId];
      if (prod && heroSearchInput) {
        heroSearchInput.value = prod.name;
        filterCatalog();
      }
    });
  });

  // ==========================================================================
  // 8. Catálogo Digital Interactivo (18 Páginas)
  // ==========================================================================
  const TOTAL_CATALOG_PAGES = 18;
  let currentCatalogPage = 1;

  const catalogImg = document.getElementById('catalog-active-page-img');
  const catalogCurrentNum = document.getElementById('catalog-current-num');
  const catalogPrevBtn = document.getElementById('catalog-prev-btn');
  const catalogNextBtn = document.getElementById('catalog-next-btn');
  const catalogThumbnailsRail = document.getElementById('catalog-thumbnails-rail');
  const catalogFullscreenBtn = document.getElementById('catalog-fullscreen-btn');
  const catalogZoomTrigger = document.getElementById('catalog-zoom-trigger');
  const catalogWhatsappOrderBtn = document.getElementById('catalog-whatsapp-order-btn');

  // Fullscreen modal elements
  const fsModal = document.getElementById('catalog-fullscreen-modal');
  const fsModalTitle = document.getElementById('fs-modal-title');
  const fsCatalogImg = document.getElementById('fs-catalog-img');
  const closeFsModalBtn = document.getElementById('close-catalog-fs-modal');
  const fsPrevBtn = document.getElementById('fs-prev-btn');
  const fsNextBtn = document.getElementById('fs-next-btn');
  const fsWhatsappBtn = document.getElementById('fs-whatsapp-btn');

  function updateCatalogViewer(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > TOTAL_CATALOG_PAGES) pageNum = TOTAL_CATALOG_PAGES;
    currentCatalogPage = pageNum;

    // Smooth transition
    if (catalogImg) {
      catalogImg.style.opacity = '0.3';
      setTimeout(() => {
        catalogImg.src = `assets/catalogo/${pageNum}.png`;
        catalogImg.alt = `Página ${pageNum} del Catálogo Luvaria Decants`;
        catalogImg.style.opacity = '1';
      }, 120);
    }

    if (catalogCurrentNum) {
      catalogCurrentNum.textContent = pageNum;
    }

    // Update WhatsApp inquiry button text & link
    if (catalogWhatsappOrderBtn) {
      catalogWhatsappOrderBtn.href = `https://wa.me/51986005143?text=Hola%20Luvaria,%20estoy%20viendo%20el%20Cat%C3%A1logo%20Digital%20(P%C3%A1gina%20${pageNum})%20y%20deseo%20consultar%20por%20una%20fragancia.`;
    }

    // Update active thumbnail
    if (catalogThumbnailsRail) {
      const thumbs = catalogThumbnailsRail.querySelectorAll('.catalog-thumb-item');
      thumbs.forEach((th, idx) => {
        if (idx + 1 === pageNum) {
          th.classList.add('active');
          // Desplazar EXCLUSIVAMENTE el riel horizontal de miniaturas, NUNCA la ventana
          const railCenter = catalogThumbnailsRail.clientWidth / 2;
          const thumbCenter = th.offsetLeft + (th.clientWidth / 2);
          catalogThumbnailsRail.scrollTo({
            left: thumbCenter - railCenter,
            behavior: 'smooth'
          });
        } else {
          th.classList.remove('active');
        }
      });
    }

    // Update Fullscreen modal if open
    if (fsCatalogImg) {
      fsCatalogImg.src = `assets/catalogo/${pageNum}.png`;
      if (fsModalTitle) fsModalTitle.textContent = `Página ${pageNum} de ${TOTAL_CATALOG_PAGES}`;
      if (fsWhatsappBtn) {
        fsWhatsappBtn.href = `https://wa.me/51986005143?text=Hola%20Luvaria,%20deseo%20ordenar%20fragancias%20de%20la%20P%C3%A1gina%20${pageNum}%20del%20cat%C3%A1logo.`;
      }
    }
  }

  // Populate Thumbnails Rail
  if (catalogThumbnailsRail) {
    catalogThumbnailsRail.innerHTML = '';
    for (let p = 1; p <= TOTAL_CATALOG_PAGES; p++) {
      const thumb = document.createElement('div');
      thumb.className = `catalog-thumb-item ${p === 1 ? 'active' : ''}`;
      thumb.setAttribute('data-page', p);
      thumb.innerHTML = `
        <img src="assets/catalogo/${p}.png" alt="Pág ${p}" loading="lazy">
        <span class="catalog-thumb-badge">${p}</span>
      `;
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        updateCatalogViewer(p);
      });
      catalogThumbnailsRail.appendChild(thumb);
    }
  }

  if (catalogPrevBtn) {
    catalogPrevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const prev = currentCatalogPage > 1 ? currentCatalogPage - 1 : TOTAL_CATALOG_PAGES;
      updateCatalogViewer(prev);
    });
  }

  if (catalogNextBtn) {
    catalogNextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const next = currentCatalogPage < TOTAL_CATALOG_PAGES ? currentCatalogPage + 1 : 1;
      updateCatalogViewer(next);
    });
  }

  // Fullscreen Modal Controls
  function openFsModal() {
    if (fsModal) {
      fsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateCatalogViewer(currentCatalogPage);
    }
  }

  function closeFsModal() {
    if (fsModal) {
      fsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (catalogFullscreenBtn) catalogFullscreenBtn.addEventListener('click', openFsModal);
  if (catalogZoomTrigger) catalogZoomTrigger.addEventListener('click', openFsModal);
  if (closeFsModalBtn) closeFsModalBtn.addEventListener('click', closeFsModal);
  if (fsModal) {
    fsModal.addEventListener('click', (e) => {
      if (e.target === fsModal) closeFsModal();
    });
  }

  if (fsPrevBtn) {
    fsPrevBtn.addEventListener('click', () => {
      const prev = currentCatalogPage > 1 ? currentCatalogPage - 1 : TOTAL_CATALOG_PAGES;
      updateCatalogViewer(prev);
    });
  }

  if (fsNextBtn) {
    fsNextBtn.addEventListener('click', () => {
      const next = currentCatalogPage < TOTAL_CATALOG_PAGES ? currentCatalogPage + 1 : 1;
      updateCatalogViewer(next);
    });
  }

  // ==========================================================================
  // 9. Toast Notifications System
  // ==========================================================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Initialize Cart display on load
  renderCart();

});
