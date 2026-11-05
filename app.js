/**
 * LUVARIA FRAGANCE
 * Core Interactive Application Logic
 * Upgraded with: Sensory Olfactory Pyramids, Dynamic Catalog, Stock Badges & WhatsApp Checkout
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Data Store: Curated Fragrances, Olfactory Pyramids & Pricing
  // ==========================================================================
  const perfumesData = {
    'alexandria-ii': {
      id: 'alexandria-ii',
      name: 'Alexandria II',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      gender: 'unisex',
      badge: 'NICHO / OUD STARS',
      stockStatus: 'Decant 10 ML Disponible',
      img: 'assets/images/Alexandr%C3%ADa.jpg',
      notes: 'Lavanda de Provenza, Palisandro, Canela de Ceilán, Rosa de Bulgaria y Oud Laotiano.',
      description: 'Una de las mayores obras maestras de la perfumería nicho mundial. Abre con una explosión aromática de lavanda y maderas preciosas, dando paso a una rosa imperial y un fondo majestuoso de oud laotiano añejado durante 5 años.',
      pyramid: {
        top: 'Lavanda de Provenza, Palisandro, Canela de Ceilán, Manzana crujiente',
        heart: 'Rosa de Bulgaria silvestre, Cedro del Atlas, Lirio de los valles',
        base: 'Oud Laotiano añejado, Ámbar cálido, Sándalo cremoso, Vainilla de Madagascar, Almizcle blanco'
      },
      specs: {
        duration: '10 - 12h+',
        sillage: 'Pesada (Modo Bestia)',
        occasion: 'Gala, Eventos de Alta Gama, Noche'
      },
      pricing: {
        '10ml': { pen: 250, label: '10 ML (DECANT)' },
        '100ml': { pen: 2200, label: '100 ML (FRASCO)' }
      }
    },

    '1861-naxos': {
      id: '1861-naxos',
      name: 'Xerjoff Naxos',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      gender: 'unisex',
      badge: 'COLECCIÓN 1861',
      stockStatus: 'Top Seller en Lima',
      img: 'assets/images/Naxos.png',
      notes: 'Miel siciliana de flores silvestres, hojas de tabaco rubio, bergamota fresca de Calabria.',
      description: 'Homenaje a la nobleza y belleza de Sicilia. Combina la efervescencia cítrica del mediterráneo con el corazón dulce y envolvente de miel pura y hojas secas de tabaco rubio.',
      pyramid: {
        top: 'Bergamota de Calabria, Limón siciliano, Lavanda aromática',
        heart: 'Miel de flores silvestres, Canela, Jazmín Sambac, Cachemira',
        base: 'Hojas de tabaco rubio, Haba tonka tostada, Vainilla Bourbon'
      },
      specs: {
        duration: '9 - 11h',
        sillage: 'Notable y Elegante',
        occasion: 'Citas Especiales, Otoño/Invierno, Noche'
      },
      pricing: {
        '10ml': { pen: 130, label: '10 ML (DECANT)' },
        '100ml': { pen: 900, label: '100 ML (FRASCO)' }
      }
    },

    'le-male-elixir': {
      id: 'le-male-elixir',
      name: 'Le Male Elixir',
      brand: 'Jean Paul Gaultier',
      category: 'disenador',
      gender: 'hombre',
      badge: 'LÍNEA DISEÑADOR',
      stockStatus: 'Modo Bestia Viral',
      img: 'assets/images/JPG-Elixir.png',
      notes: 'Miel dorada, haba tonka tostada, lavanda aromática, benjuí resinoso y tabaco cálido.',
      description: 'Seducción extrema en frasco estriado de oro. Un viaje olfativo ardiente que fusiona la menta y lavanda clásica con una capa densa de miel dorada y benjuí licoroso.',
      pyramid: {
        top: 'Lavanda fresca de Provenza, Menta vigorizante',
        heart: 'Vainilla dorada, Benjuí resinoso, Miel de azahar',
        base: 'Haba tonka licorosa, Tabaco rubio cálido, Maderas preciosas'
      },
      specs: {
        duration: '9 - 12h',
        sillage: 'Magnética y Pesada',
        occasion: 'Fiesta, Conquista, Clima Fresco'
      },
      pricing: {
        '10ml': { pen: 60, label: '10 ML (DECANT)' },
        '100ml': { pen: 530, label: '100 ML (FRASCO)' }
      }
    },

    'khamrah-qahwa': {
      id: 'khamrah-qahwa',
      name: 'Khamrah Qahwa',
      brand: 'Lattafa Pride Dubái',
      category: 'arabe',
      gender: 'unisex',
      badge: 'PERFUMERY ÁRABE',
      stockStatus: 'Viral en TikTok Live',
      img: 'assets/images/Khamrah-Qhawa.png',
      notes: 'Café árabe infusionado, canela fresca, praliné caramelizado, jengibre y maderas nobles.',
      description: 'La versión más aclamada de la saga Khamrah. Incorpora una nota de café arábigo oscuro tostado con cardamomo sobre una base licorosa y golosa de praliné y vainilla.',
      pyramid: {
        top: 'Café árabe tostado con cardamomo, Jengibre fresco, Canela de Ceilán',
        heart: 'Praliné caramelizado, Frutas confitadas, Flores blancas orientales',
        base: 'Café espresso, Vainilla Bourbon, Haba tonka, Benjuí, Madera de cedro'
      },
      specs: {
        duration: '8 - 10h',
        sillage: 'Intensa y Golosa',
        occasion: 'Tardes frías, Noche, Clima templado'
      },
      pricing: {
        '10ml': { pen: 25, label: '10 ML (DECANT)' },
        '100ml': { pen: 130, label: '100 ML (FRASCO)' }
      }
    },

    'xerjoff-coro': {
      id: 'xerjoff-coro',
      name: 'Xerjoff Coro (Selfridges)',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      gender: 'unisex',
      badge: 'EDICIÓN EXCLUSIVA',
      stockStatus: 'Frasco Terciopelo Amarillo',
      img: 'assets/images/Coro.jpg',
      notes: 'Frutas maduras mediterráneas, flores primaverales, almizcle blanco y sándalo cremoso.',
      description: 'Una melodía olfativa creada originalmente en exclusiva para Selfridges Londres. Su frasco forrado en terciopelo amarillo encierra una sinfonía luminosa de frutas silvestres y almizcles de altísima pureza.',
      pyramid: {
        top: 'Cesta de frutas mediterráneas dulces, Cítricos vibrantes',
        heart: 'Notas florales afrutadas maceradas, Flores blancas de Grasse, Raíz de lirio',
        base: 'Almizcle blanco sedoso, Vainilla de Madagascar, Ámbar cálido, Sándalo'
      },
      specs: {
        duration: '8 - 10h',
        sillage: 'Radiante y Sofisticada',
        occasion: 'Eventos Exclusivos, Firma Personal'
      },
      pricing: {
        '10ml': { pen: 150, label: '10 ML (DECANT)' },
        '100ml': { pen: 1350, label: '100 ML (FRASCO)' }
      }
    },

    'xerjoff-soprano': {
      id: 'xerjoff-soprano',
      name: 'Xerjoff Soprano',
      brand: 'Xerjoff Italia',
      category: 'nicho',
      gender: 'unisex',
      badge: 'V COLLECTION',
      stockStatus: 'Terciopelo Púrpura Real',
      img: 'assets/images/Soprano%20Xerjoff.jpg',
      notes: 'Lichi jugoso, fresia blanca, rosa de Bulgaria, leche caliente, oud y cuero fino.',
      description: 'La voz más alta de la ópera traducida en perfume. Abre con la frescura exótica del lichi y la fresia, fundiéndose con un acorde inusual y reconfortante de leche tibia, rosas y madera de agar.',
      pyramid: {
        top: 'Lichi exótico, Fresia blanca, Bergamota de Calabria, Frutas rojas',
        heart: 'Rosa búlgara, Osmanthus, Jazmín de Grasse, Acorde de leche tibia',
        base: 'Madera de Agar (Oud), Pachulí noble, Cuero suave, Cedro del Líbano'
      },
      specs: {
        duration: '8 - 10h',
        sillage: 'Regia y Opulenta',
        occasion: 'Noches de Gala, Teatro, Ocasiones Memorables'
      },
      pricing: {
        '10ml': { pen: 110, label: '10 ML (DECANT)' },
        '100ml': { pen: 980, label: '100 ML (FRASCO)' }
      }
    },

    'liquid-brun': {
      id: 'liquid-brun',
      name: 'Liquid Brun',
      brand: 'French Avenue',
      category: 'arabe',
      gender: 'unisex',
      badge: 'INSPIRADO EN ALTHAÏR PDM',
      stockStatus: 'Gourmand de Alta Fijación',
      img: 'assets/images/Liquid%20Brun.jpg',
      notes: 'Canela de Ceilán, cardamomo de Guatemala, vainilla Bourbon concentrada y praliné.',
      description: 'La recreación definitiva del aclamado Althaïr de Parfums de Marly. Una oda a la vainilla bourbon con toques de canela ardiente, caramelo y ambroxan que proyecta de forma descomunal.',
      pyramid: {
        top: 'Canela de Ceilán, Cardamomo de Guatemala, Bergamota fresca, Flor de azahar',
        heart: 'Vainilla Bourbon pura, Elemi resinoso, Acorde especiado cálido',
        base: 'Praliné tostado, Ambroxan, Madera de guayaco, Almizcle blanco'
      },
      specs: {
        duration: '8 - 10h',
        sillage: 'Cálida, Envolvente y Pesada',
        occasion: 'Citas Nocturnas, Clima Templado o Frío'
      },
      pricing: {
        '10ml': { pen: 28, label: '10 ML (DECANT)' },
        '100ml': { pen: 165, label: '100 ML (FRASCO)' }
      }
    },

    'eclaire-lattafa': {
      id: 'eclaire-lattafa',
      name: 'Eclaire Clásico',
      brand: 'Lattafa Pride',
      category: 'gourmand',
      gender: 'mujer',
      badge: 'BIANCO LATTE VIBES',
      stockStatus: 'Viral en TikTok Perfumes',
      img: 'assets/images/Eclaire.jpg',
      notes: 'Caramelo derretido, azúcar morena, leche condensada, miel y vainilla cremosa.',
      description: 'El perfume gourmand más viral del año. Huele a una pastelería fina europea recién abierta: leche tibia con caramelo salado, vainilla cremosa y un halo acogedor que permanece días en la ropa.',
      pyramid: {
        top: 'Caramelo caliente derretido, Azúcar morena tostada, Leche condensada',
        heart: 'Miel de flores blancas, Flores golosas, Praliné de avellana',
        base: 'Vainilla dulce cremosa, Almizcle esponjoso, Haba tonka dulce'
      },
      specs: {
        duration: '7 - 9h',
        sillage: 'Adictiva y Dulce',
        occasion: 'Uso Diario, Citas Románticas, Regalos'
      },
      pricing: {
        '10ml': { pen: 35, label: '10 ML (DECANT)' },
        '100ml': { pen: 180, label: '100 ML (FRASCO)' }
      }
    },

    'asad-bourbon': {
      id: 'asad-bourbon',
      name: 'Asad Bourbon',
      brand: 'Lattafa Pride',
      category: 'arabe',
      gender: 'hombre',
      badge: 'SEDUCCIÓN MASCULINA',
      stockStatus: 'Edición Licorosa 2026',
      img: 'assets/images/Asad%20Bourbon.jpg',
      notes: 'Pimienta negra, café espresso oscuro, acorde de Bourbon añejo, tabaco y ámbar seco.',
      description: 'Evolución oscura y madura del clásico Asad. Añade una profunda nota de roble licoroso envejecido en barricas de bourbon con granos de café recién molidos y pimienta negra picante.',
      pyramid: {
        top: 'Pimienta negra picante, Piña ahumada, Ciruela pasa, Especias orientales',
        heart: 'Café tostado espresso, Iris empolvado, Pachulí terroso, Tabaco rubio',
        base: 'Acorde de Bourbon añejo en barrica, Ámbar seco, Vainilla ahumada, Maderas'
      },
      specs: {
        duration: '8 - 10h',
        sillage: 'Fuerte y Masculina',
        occasion: 'Salidas de Noche, Eventos, Citas'
      },
      pricing: {
        '10ml': { pen: 25, label: '10 ML (DECANT)' },
        '100ml': { pen: 135, label: '100 ML (FRASCO)' }
      }
    },

    'sweet-tooth': {
      id: 'sweet-tooth',
      name: 'Sweet Tooth',
      brand: 'Sabrina Carpenter',
      category: 'gourmand',
      gender: 'mujer',
      badge: 'CELEBRIDAD TIKTOK',
      stockStatus: 'Frasco Chocolate Bar',
      img: 'assets/images/Sweet%20Tooth.jpg',
      notes: 'Malvavisco esponjoso, jengibre confitado, leche de coco, chocolate y crema Chantilly.',
      description: 'Una fragancia dulce, juguetona e irresistiblemente tierna en forma de tableta de chocolate. Notas de malvavisco nube, chocolate rubio y vainilla con el toque justo de brillo para uso diario.',
      pyramid: {
        top: 'Malvavisco esponjoso, Jengibre confitado, Bergamota dulce, Crema de chocolate',
        heart: 'Pétalos de jazmín blanco, Leche de coco, Vainilla de Madagascar',
        base: 'Crema batida Chantilly, Madera de cachemira, Almizcle dulce confitado'
      },
      specs: {
        duration: '6 - 8h',
        sillage: 'Tierna y Deliciosa',
        occasion: 'Uso Diario, Tardes, Regalos Juveniles'
      },
      pricing: {
        '10ml': { pen: 40, label: '10 ML (DECANT)' },
        '100ml': { pen: 240, label: '100 ML (FRASCO)' }
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

    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('mobile-open') && !mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('mobile-open');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

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

    heroSlides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentHeroSlide);
    });

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
  // 3. Dynamic Products Grid Renderer (Data-Driven Catalog)
  // ==========================================================================
  const productsContainer = document.getElementById('products-container');

  function buildSearchDataString(prod) {
    return [
      prod.id,
      prod.name,
      prod.brand,
      prod.category,
      prod.gender,
      prod.badge,
      prod.notes,
      prod.pyramid ? (prod.pyramid.top + ' ' + prod.pyramid.heart + ' ' + prod.pyramid.base) : '',
      prod.pricing['10ml'] ? prod.pricing['10ml'].pen : '',
      prod.pricing['100ml'] ? prod.pricing['100ml'].pen : ''
    ].join(' ').toLowerCase();
  }

  function renderProductsGrid() {
    if (!productsContainer) return;

    productsContainer.innerHTML = '';

    Object.values(perfumesData).forEach(prod => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-category', prod.category);
      card.setAttribute('data-gender', prod.gender);
      card.setAttribute('data-id', prod.id);
      card.setAttribute('data-name', prod.name);
      card.setAttribute('data-brand', prod.brand);
      card.setAttribute('data-notes', prod.notes);
      card.setAttribute('data-search', buildSearchDataString(prod));

      // Presentation buttons HTML
      const has100ml = Boolean(prod.pricing['100ml']);
      const defaultSize = '10ml';
      const defaultPrice = prod.pricing[defaultSize].pen;

      card.innerHTML = `
        <div class="product-badge-strip">${prod.badge}</div>
        <div class="product-media-container">
          <img src="${prod.img}" alt="${prod.name}" class="product-img" loading="lazy">
          <button class="quick-view-btn" data-product="${prod.id}">Detalles Olfativos</button>
        </div>
        <div class="product-body">
          <div class="product-brand">${prod.brand}</div>
          <h3 class="product-title">${prod.name}</h3>
          
          <div class="stock-status-pill">
            <span class="stock-status-dot"></span>
            <span>${prod.stockStatus || '10 ML Disponible'}</span>
          </div>

          <p class="product-notes">${prod.notes}</p>

          <div class="presentation-selector">
            <span class="selector-label">ELEGIR PRESENTACIÓN:</span>
            <div class="presentation-btns">
              <button class="pres-btn active" data-size="10ml">10 ML (DECANT)</button>
              ${has100ml 
                ? `<button class="pres-btn" data-size="100ml">100 ML (FRASCO)</button>` 
                : `<button class="pres-btn disabled" disabled style="opacity:0.4;cursor:not-allowed;">FRASCO PROX.</button>`}
            </div>
          </div>

          <div class="product-pricing">
            <span class="invest-label">PRECIO:</span>
            <span class="price-pen-main">S/ ${defaultPrice}</span>
          </div>

          <button class="add-to-cart-btn" data-product="${prod.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>AÑADIR AL CARRITO</span>
          </button>
        </div>
      `;

      // Attach card-level event listeners
      const presBtns = card.querySelectorAll('.pres-btn:not(.disabled)');
      const pricePenEl = card.querySelector('.price-pen-main');

      presBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          presBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const size = btn.getAttribute('data-size');
          if (prod.pricing[size] && pricePenEl) {
            pricePenEl.style.opacity = '0';
            setTimeout(() => {
              pricePenEl.textContent = `S/ ${prod.pricing[size].pen}`;
              pricePenEl.style.opacity = '1';
            }, 120);
          }
        });
      });

      // Quick view click
      const qvBtn = card.querySelector('.quick-view-btn');
      if (qvBtn) {
        qvBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openOlfactoryModal(prod.id);
        });
      }

      // Add to cart click
      const addBtn = card.querySelector('.add-to-cart-btn');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          const activePres = card.querySelector('.pres-btn.active');
          const size = activePres ? activePres.getAttribute('data-size') : '10ml';
          addItemToCart(prod.id, size);
        });
      }

      productsContainer.appendChild(card);
    });
  }

  // ==========================================================================
  // 4. Olfactory Sensory Modal (Ficha Sensorial y Pirámide Olfativa)
  // ==========================================================================
  const olfactoryModal = document.getElementById('olfactory-modal');
  const closeOlfactoryModalBtn = document.getElementById('close-olfactory-modal');
  const olfModalTitle = document.getElementById('olf-modal-title');
  const olfModalBrand = document.getElementById('olf-modal-brand');
  const olfModalBadge = document.getElementById('olf-modal-badge');
  const olfModalImg = document.getElementById('olf-modal-img');
  const olfModalGender = document.getElementById('olf-modal-gender');
  const olfModalDuration = document.getElementById('olf-modal-duration');
  const olfModalSillage = document.getElementById('olf-modal-sillage');
  const olfModalDesc = document.getElementById('olf-modal-desc');
  const olfModalTop = document.getElementById('olf-modal-top');
  const olfModalHeart = document.getElementById('olf-modal-heart');
  const olfModalBase = document.getElementById('olf-modal-base');
  const olfModalPresContainer = document.getElementById('olf-modal-pres-container');
  const olfModalPrice = document.getElementById('olf-modal-price');
  const olfModalAddBtn = document.getElementById('olf-modal-add-btn');
  const olfModalWaBtn = document.getElementById('olf-modal-wa-btn');

  let activeModalProductId = null;
  let activeModalSize = '10ml';

  function openOlfactoryModal(productId) {
    const prod = perfumesData[productId];
    if (!prod || !olfactoryModal) return;

    activeModalProductId = productId;
    activeModalSize = '10ml';

    olfModalTitle.textContent = prod.name;
    olfModalBrand.textContent = prod.brand;
    olfModalBadge.textContent = prod.badge;
    olfModalImg.src = prod.img;
    olfModalImg.alt = prod.name;

    olfModalGender.textContent = prod.gender ? prod.gender.toUpperCase() : 'UNISEX';
    olfModalDuration.textContent = prod.specs ? prod.specs.duration : '8 - 10h';
    olfModalSillage.textContent = prod.specs ? prod.specs.sillage : 'Notable';
    olfModalDesc.textContent = prod.description || prod.notes;

    if (prod.pyramid) {
      olfModalTop.textContent = prod.pyramid.top;
      olfModalHeart.textContent = prod.pyramid.heart;
      olfModalBase.textContent = prod.pyramid.base;
    } else {
      olfModalTop.textContent = prod.notes;
      olfModalHeart.textContent = 'Maderas nobles y flores de alta costura';
      olfModalBase.textContent = 'Fondo ambarado y fijación pura';
    }

    // Size selector inside modal
    if (olfModalPresContainer) {
      olfModalPresContainer.innerHTML = '';
      const sizes = Object.keys(prod.pricing);
      sizes.forEach((s, idx) => {
        const btn = document.createElement('button');
        btn.className = `pres-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute('data-size', s);
        btn.textContent = prod.pricing[s].label;
        btn.addEventListener('click', () => {
          olfModalPresContainer.querySelectorAll('.pres-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeModalSize = s;
          if (olfModalPrice) {
            olfModalPrice.textContent = `S/ ${prod.pricing[s].pen}`;
          }
        });
        olfModalPresContainer.appendChild(btn);
      });
    }

    if (olfModalPrice && prod.pricing['10ml']) {
      olfModalPrice.textContent = `S/ ${prod.pricing['10ml'].pen}`;
    }

    if (olfModalWaBtn) {
      olfModalWaBtn.href = `https://wa.me/51986005143?text=${encodeURIComponent(`¡Hola Luvaria! Me interesa el perfume *${prod.name}*, ¿tienen stock disponible?`)}`;
    }

    olfactoryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeOlfactoryModal() {
    if (!olfactoryModal) return;
    olfactoryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeOlfactoryModalBtn) closeOlfactoryModalBtn.addEventListener('click', closeOlfactoryModal);
  if (olfactoryModal) {
    olfactoryModal.addEventListener('click', (e) => {
      if (e.target === olfactoryModal) closeOlfactoryModal();
    });
  }

  if (olfModalAddBtn) {
    olfModalAddBtn.addEventListener('click', () => {
      if (activeModalProductId) {
        addItemToCart(activeModalProductId, activeModalSize);
        closeOlfactoryModal();
      }
    });
  }

  // ==========================================================================
  // 5. Live Search & Multi-Criteria Filtering (Category + Gender)
  // ==========================================================================
  const navSearchContainer = document.getElementById('nav-search-container');
  const searchTrigger = document.getElementById('search-trigger');
  const navbarSearchInput = document.getElementById('navbar-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const navSearchDropdown = document.getElementById('nav-search-dropdown');
  const filterPills = document.querySelectorAll('.filter-pill');
  const genderPills = document.querySelectorAll('.gender-pill');
  const resultsCounter = document.getElementById('catalog-results-count');

  function normalizeSearchText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function renderSearchDropdown(matchedProducts, query) {
    if (!navSearchDropdown) return;

    if (!query) {
      navSearchDropdown.classList.remove('active');
      navSearchDropdown.innerHTML = '';
      return;
    }

    if (matchedProducts.length === 0) {
      navSearchDropdown.innerHTML = `
        <div class="search-drop-empty">
          No se encontraron fragancias para "<strong>${query}</strong>"
        </div>
      `;
      navSearchDropdown.classList.add('active');
      return;
    }

    navSearchDropdown.innerHTML = '';
    matchedProducts.forEach(prod => {
      const item = document.createElement('div');
      item.className = 'search-drop-item';
      item.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" class="search-drop-thumb">
        <div class="search-drop-info">
          <span class="search-drop-name">${prod.name}</span>
          <span class="search-drop-sub">${prod.brand} • ${prod.badge}</span>
        </div>
        <span class="search-drop-price">Decant 10ML S/ ${prod.pricing['10ml'].pen}</span>
      `;

      item.addEventListener('click', () => {
        navbarSearchInput.value = prod.name;
        filterCatalog(false);
        navSearchDropdown.classList.remove('active');

        if (navSearchContainer && window.innerWidth <= 990) {
          navSearchContainer.classList.remove('open');
        }

        const targetCard = document.querySelector(`.product-card[data-id="${prod.id}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.remove('card-highlight-glow');
          void targetCard.offsetWidth;
          targetCard.classList.add('card-highlight-glow');
        }
      });

      navSearchDropdown.appendChild(item);
    });

    navSearchDropdown.classList.add('active');
  }

  function filterCatalog(shouldScroll = false) {
    const cards = document.querySelectorAll('.product-card');
    const rawQuery = navbarSearchInput ? navbarSearchInput.value.trim() : '';
    const normQuery = normalizeSearchText(rawQuery);
    const tokens = normQuery.split(/\s+/).filter(Boolean);

    const activeCatPill = document.querySelector('.filter-pill.active');
    const selectedCategory = activeCatPill ? activeCatPill.getAttribute('data-category') : 'all';

    const activeGenderPill = document.querySelector('.gender-pill.active');
    const selectedGender = activeGenderPill ? activeGenderPill.getAttribute('data-gender') : 'all';

    let visibleCount = 0;
    const matchedProducts = [];

    cards.forEach(card => {
      const id = card.getAttribute('data-id');
      const searchData = normalizeSearchText(card.getAttribute('data-search') || '');
      const category = card.getAttribute('data-category');
      const gender = card.getAttribute('data-gender');

      const matchesQuery = tokens.length === 0 || tokens.every(token => searchData.includes(token));
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
      const matchesGender = selectedGender === 'all' || gender === selectedGender;

      if (matchesQuery && matchesCategory && matchesGender) {
        card.style.display = 'flex';
        visibleCount++;
        if (perfumesData[id] && !matchedProducts.some(p => p.id === id)) {
          matchedProducts.push(perfumesData[id]);
        }
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCounter) {
      if (visibleCount === 0) {
        resultsCounter.textContent = rawQuery ? `No se encontraron fragancias para "${rawQuery}".` : 'No hay fragancias que coincidan.';
      } else {
        resultsCounter.textContent = `Mostrando ${visibleCount} de ${cards.length} fragancias selectas`;
      }
    }

    if (clearSearchBtn) {
      clearSearchBtn.style.display = (rawQuery || window.innerWidth <= 990) ? 'flex' : 'none';
    }

    renderSearchDropdown(matchedProducts, rawQuery);

    if (shouldScroll) {
      const catalogEl = document.getElementById('catalogo');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
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
      filterCatalog(false);
    });

    navbarSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (navSearchDropdown) navSearchDropdown.classList.remove('active');
        filterCatalog(true);
        if (window.innerWidth <= 990 && navSearchContainer) {
          navSearchContainer.classList.remove('open');
        }
      } else if (e.key === 'Escape') {
        navbarSearchInput.value = '';
        if (navSearchDropdown) navSearchDropdown.classList.remove('active');
        filterCatalog(false);
        if (navSearchContainer) navSearchContainer.classList.remove('open');
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navbarSearchInput) navbarSearchInput.value = '';
      if (navSearchDropdown) {
        navSearchDropdown.classList.remove('active');
        navSearchDropdown.innerHTML = '';
      }
      filterCatalog(false);
      if (navSearchContainer) navSearchContainer.classList.remove('open');
    });
  }

  document.addEventListener('click', (e) => {
    if (navSearchContainer && !navSearchContainer.contains(e.target)) {
      if (navSearchDropdown) navSearchDropdown.classList.remove('active');
      if (navbarSearchInput && !navbarSearchInput.value.trim()) {
        navSearchContainer.classList.remove('open');
      }
    }
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterCatalog(false);
    });
  });

  genderPills.forEach(pill => {
    pill.addEventListener('click', () => {
      genderPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterCatalog(false);
    });
  });

  // ==========================================================================
  // 6. Shopping Cart Drawer System
  // ==========================================================================
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const drawerItemsCount = document.getElementById('drawer-items-count');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalPen = document.getElementById('cart-total-pen');
  const cartDeliverySelect = document.getElementById('cart-delivery-select');
  const cartOrderNotes = document.getElementById('cart-order-notes');
  const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');
  const cartDeliveryIcon = document.getElementById('cart-delivery-icon');
  const cartShippingIcon = document.getElementById('cart-shipping-icon');
  const cartShippingText = document.getElementById('cart-shipping-text');

  const deliveryModesConfig = {
    'lima-express': {
      selectIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 16h2a3 3 0 0 0 6 0h2a3 3 0 0 0 6 0h1v-4l-3-4H13l-2 4H5v4z"></path><circle cx="6" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle></svg>`,
      noticeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
      noticeText: 'Envío por Shalom o Motorizado Express en Lima'
    },
    'provincia-shalom': {
      selectIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
      noticeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
      noticeText: 'Despacho seguro a provincias vía Shalom o Olva Courier'
    },
    'tiktok-live': {
      selectIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>`,
      noticeIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
      noticeText: 'Orden preparada y mencionada en directo en TikTok Live (@luvaria12)'
    }
  };

  function updateDeliveryModeUI() {
    if (!cartDeliverySelect) return;
    const mode = cartDeliverySelect.value;
    const cfg = deliveryModesConfig[mode] || deliveryModesConfig['lima-express'];
    if (cartDeliveryIcon) cartDeliveryIcon.innerHTML = cfg.selectIcon;
    if (cartShippingIcon) cartShippingIcon.innerHTML = cfg.noticeIcon;
    if (cartShippingText) cartShippingText.textContent = cfg.noticeText;
  }

  if (cartDeliverySelect) {
    cartDeliverySelect.addEventListener('change', updateDeliveryModeUI);
    updateDeliveryModeUI();
  }

  function openCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  function addItemToCart(productId, size = '10ml') {
    const product = perfumesData[productId];
    if (!product) return;

    const pricing = product.pricing[size];
    if (!pricing) return;

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

  function renderCart() {
    if (!cartItemsList) return;
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
            <div class="cart-item-pricing" style="color:var(--gold-light);font-weight:600;">S/ ${(item.pricePen * item.qty).toFixed(2)}</div>
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

    if (cartBadgeCount) cartBadgeCount.textContent = totalItems;
    if (drawerItemsCount) drawerItemsCount.textContent = totalItems;
    if (cartTotalPen) cartTotalPen.textContent = `S/ ${totalPen.toFixed(2)}`;

    // Controls
    cartItemsList.querySelectorAll('.qty-btn').forEach(btn => {
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

    cartItemsList.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        const removed = cart.splice(index, 1);
        renderCart();
        showToast(`Eliminado de la bolsa: ${removed[0].name}`);
      });
    });
  }

  // ==========================================================================
  // 7. Structured WhatsApp Concierge Checkout
  // ==========================================================================
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Tu bolsa está vacía. Añade un perfume para ordenar.');
        return;
      }

      const deliveryMode = cartDeliverySelect ? cartDeliverySelect.options[cartDeliverySelect.selectedIndex].text : 'Lima Metropolitana / Shalom';
      const notes = cartOrderNotes ? cartOrderNotes.value.trim() : '';

      let totalPen = 0;
      const itemsListText = cart.map((item) => {
        const subtotal = item.pricePen * item.qty;
        totalPen += subtotal;
        return `• ${item.name} (${item.sizeLabel}) x${item.qty} — S/ ${subtotal.toFixed(2)}`;
      }).join('\n');

      let finalMessage = `¡Hola Luvaria! Quiero hacer este pedido:\n\n${itemsListText}\n\n*Total:* S/ ${totalPen.toFixed(2)}\n*Entrega:* ${deliveryMode}`;
      if (notes) {
        finalMessage += `\n*Nota:* ${notes}`;
      }
      finalMessage += `\n\n¿Me confirman para hacer el pago por Yape/Transferencia? ¡Gracias!`;

      const whatsappUrl = `https://wa.me/51986005143?text=${encodeURIComponent(finalMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // ==========================================================================
  // 8. Box Luvaria Live: 2 Decants (10 ML) al Azar en TikTok Live
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
        pricePen: 45,
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

  const heroTiktokBtn = document.getElementById('hero-tiktok-btn');
  if (heroTiktokBtn) {
    heroTiktokBtn.addEventListener('click', () => {
      window.open('https://www.tiktok.com/@luvaria12', '_blank');
    });
  }

  // Footer product links quick filter
  document.querySelectorAll('.footer-perfume-link').forEach(link => {
    link.addEventListener('click', () => {
      const prodId = link.getAttribute('data-product');
      const prod = perfumesData[prodId];
      if (prod && navbarSearchInput) {
        navbarSearchInput.value = prod.name;
        filterCatalog(true);
      }
    });
  });

  // ==========================================================================
  // 9. Catálogo Digital Interactivo (14 Páginas)
  // ==========================================================================
  const TOTAL_CATALOG_PAGES = 14;
  let currentCatalogPage = 1;

  const catalogImg = document.getElementById('catalog-active-page-img');
  const catalogCurrentNum = document.getElementById('catalog-current-num');
  const catalogPrevBtn = document.getElementById('catalog-prev-btn');
  const catalogNextBtn = document.getElementById('catalog-next-btn');
  const catalogThumbnailsRail = document.getElementById('catalog-thumbnails-rail');
  const catalogFullscreenBtn = document.getElementById('catalog-fullscreen-btn');
  const catalogZoomTrigger = document.getElementById('catalog-zoom-trigger');
  const catalogWhatsappOrderBtn = document.getElementById('catalog-whatsapp-order-btn');

  const fsModal = document.getElementById('catalog-fullscreen-modal');
  const fsModalTitle = document.getElementById('fs-modal-title');
  const fsCatalogImg = document.getElementById('fs-catalog-img');
  const closeFsModalBtn = document.getElementById('close-catalog-fs-modal');
  const fsPrevBtn = document.getElementById('fs-prev-btn');
  const fsNextBtn = document.getElementById('fs-next-btn');
  const fsSidePrevBtn = document.getElementById('fs-side-prev');
  const fsSideNextBtn = document.getElementById('fs-side-next');
  const fsZoomToggleBtn = document.getElementById('fs-zoom-toggle-btn');
  const fsBodyContainer = document.getElementById('fs-body-container');
  const fsWhatsappBtn = document.getElementById('fs-whatsapp-btn');

  function setFsZoom(zoomed) {
    if (!fsBodyContainer) return;
    if (zoomed) {
      fsBodyContainer.classList.add('is-zoomed');
    } else {
      fsBodyContainer.classList.remove('is-zoomed');
    }
    if (fsZoomToggleBtn) {
      const zoomInIcon = fsZoomToggleBtn.querySelector('.zoom-in-icon');
      const zoomOutIcon = fsZoomToggleBtn.querySelector('.zoom-out-icon');
      if (zoomInIcon && zoomOutIcon) {
        zoomInIcon.style.display = zoomed ? 'none' : 'block';
        zoomOutIcon.style.display = zoomed ? 'block' : 'none';
      }
    }
  }

  function toggleFsZoom() {
    if (!fsBodyContainer) return;
    const isCurrentlyZoomed = fsBodyContainer.classList.contains('is-zoomed');
    setFsZoom(!isCurrentlyZoomed);
  }

  if (fsZoomToggleBtn) {
    fsZoomToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFsZoom();
    });
  }

  if (fsCatalogImg) {
    fsCatalogImg.addEventListener('click', () => {
      toggleFsZoom();
    });
  }

  function updateCatalogViewer(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > TOTAL_CATALOG_PAGES) pageNum = TOTAL_CATALOG_PAGES;
    currentCatalogPage = pageNum;

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

    if (catalogWhatsappOrderBtn) {
      catalogWhatsappOrderBtn.href = `https://wa.me/51986005143?text=${encodeURIComponent(`¡Hola! Estoy viendo la página ${pageNum} del catálogo, ¿tienen disponible esta fragancia?`)}`;
    }

    if (catalogThumbnailsRail) {
      const thumbs = catalogThumbnailsRail.querySelectorAll('.catalog-thumb-item');
      thumbs.forEach((th, idx) => {
        if (idx + 1 === pageNum) {
          th.classList.add('active');
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

    if (fsCatalogImg) {
      setFsZoom(false);
      fsCatalogImg.style.opacity = '0.35';
      setTimeout(() => {
        fsCatalogImg.src = `assets/catalogo/${pageNum}.png`;
        fsCatalogImg.style.opacity = '1';
      }, 90);
      if (fsModalTitle) fsModalTitle.textContent = `Página ${pageNum} de ${TOTAL_CATALOG_PAGES}`;
      if (fsWhatsappBtn) {
        fsWhatsappBtn.href = `https://wa.me/51986005143?text=${encodeURIComponent(`¡Hola! Estoy viendo la página ${pageNum} del catálogo, ¿tienen disponible esta fragancia?`)}`;
      }
    }
  }

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

  function openFsModal() {
    if (fsModal) {
      fsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setFsZoom(false);
      updateCatalogViewer(currentCatalogPage);
    }
  }

  function closeFsModal() {
    if (fsModal) {
      fsModal.classList.remove('active');
      document.body.style.overflow = '';
      setFsZoom(false);
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

  if (fsSidePrevBtn) {
    fsSidePrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prev = currentCatalogPage > 1 ? currentCatalogPage - 1 : TOTAL_CATALOG_PAGES;
      updateCatalogViewer(prev);
    });
  }

  if (fsSideNextBtn) {
    fsSideNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const next = currentCatalogPage < TOTAL_CATALOG_PAGES ? currentCatalogPage + 1 : 1;
      updateCatalogViewer(next);
    });
  }

  // Touch Swipe for mobile catalog viewer
  let touchStartX = 0;
  let touchStartY = 0;

  if (fsBodyContainer) {
    fsBodyContainer.addEventListener('touchstart', (e) => {
      if (fsBodyContainer.classList.contains('is-zoomed')) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    fsBodyContainer.addEventListener('touchend', (e) => {
      if (fsBodyContainer.classList.contains('is-zoomed')) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 42) {
        if (diffX < 0) {
          const next = currentCatalogPage < TOTAL_CATALOG_PAGES ? currentCatalogPage + 1 : 1;
          updateCatalogViewer(next);
        } else {
          const prev = currentCatalogPage > 1 ? currentCatalogPage - 1 : TOTAL_CATALOG_PAGES;
          updateCatalogViewer(prev);
        }
      }
    }, { passive: true });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (fsModal && fsModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        const prev = currentCatalogPage > 1 ? currentCatalogPage - 1 : TOTAL_CATALOG_PAGES;
        updateCatalogViewer(prev);
      } else if (e.key === 'ArrowRight') {
        const next = currentCatalogPage < TOTAL_CATALOG_PAGES ? currentCatalogPage + 1 : 1;
        updateCatalogViewer(next);
      } else if (e.key === 'Escape') {
        closeFsModal();
      }
    }
  });

  // ==========================================================================
  // 10. Toast Notification System
  // ==========================================================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================================================
  // 11. Initial Application Hydration
  // ==========================================================================
  renderProductsGrid();
  renderCart();

});
