/**
 * =====================================================
 * AMBER & BEAN — Coffee Customizer & Ordering System
 * ES6+ | Modular Functions | State Management
 * =====================================================
 */

'use strict';

/* =====================================================
   1. DATA LAYER — Coffee Menu & Toppings Data
   ===================================================== */

const COFFEE_MENU = [
  {
    id: 'latte',
    name: 'Classic Latte',
    nameEn: 'Latte',
    desc: 'กาแฟลาเต้เข้มข้น นุ่มลิ้น ด้วยนมสดจากฟาร์ม',
    basePrice: 4.00,
    emoji: '☕',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #c8956c 0%, #8b4513 100%)',
    category: 'hot',
    badge: 'Popular',
    badgeClass: '',
    calories: 120,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    nameEn: 'Cappuccino',
    desc: 'กาแฟคาปูชิโน่ หอมกลิ่นเข้มข้น กับฟองนมนุ่มฟู',
    basePrice: 4.50,
    emoji: '🍵',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #d4a76a 0%, #7a4010 100%)',
    category: 'hot',
    badge: 'Hot',
    badgeClass: '',
    calories: 110,
  },
  {
    id: 'americano',
    name: 'Americano',
    nameEn: 'Americano',
    desc: 'อเมริกาโน่เข้มข้น สะอาด เหมาะสำหรับผู้รักกาแฟแท้',
    basePrice: 3.50,
    emoji: '🖤',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #5c3317 0%, #2c1a0e 100%)',
    category: 'hot',
    badge: 'Strong',
    badgeClass: '',
    calories: 15,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    nameEn: 'Cold Brew',
    desc: 'กาแฟชงเย็น 18 ชั่วโมง รสละเมียด หวานตามธรรมชาติ',
    basePrice: 5.00,
    emoji: '🧊',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #2980b9 0%, #1a4a6e 100%)',
    category: 'cold',
    badge: 'Cold',
    badgeClass: 'badge-cold',
    calories: 5,
  },
  {
    id: 'frappe',
    name: 'Caramel Frappé',
    nameEn: 'Frappé',
    desc: 'ฟราปเป้คาราเมล เย็นชื่นใจ กลิ่นหอมหวาน',
    basePrice: 5.50,
    emoji: '🥤',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #d4a76a 0%, #8b4513 100%)',
    category: 'cold',
    badge: 'Cold',
    badgeClass: 'badge-cold',
    calories: 300,
  },
  {
    id: 'signature',
    name: 'Amber Signature',
    nameEn: 'Signature',
    desc: 'เมนูซิกเนเจอร์ สูตรลับเฉพาะของ Amber & Bean',
    basePrice: 6.50,
    emoji: '✨',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #f0c070 0%, #c8763a 100%)',
    category: 'special',
    badge: 'Signature',
    badgeClass: 'badge-special',
    calories: 220,
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    nameEn: 'Croissant',
    desc: 'ครัวซองต์เนยสด อบสดใหม่ทุกเช้า กรอบนอกนุ่มใน',
    basePrice: 3.00,
    emoji: '🥐',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #e8c87a 0%, #c8956c 100%)',
    category: 'food',
    badge: 'อาหาร',
    badgeClass: 'badge-food',
    calories: 350,
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    nameEn: 'Matcha',
    desc: 'มัทฉะลาเต้คุณภาพสูงจากญี่ปุ่น ผสมนมสดเย็น',
    basePrice: 5.00,
    emoji: '🍵',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80&fit=crop',
    gradient: 'linear-gradient(135deg, #4a9a5a 0%, #2a6a3a 100%)',
    category: 'special',
    badge: 'Signature',
    badgeClass: 'badge-special',
    calories: 180,
  },
];

const SIZE_OPTIONS = {
  reg:   { label: 'Regular', price: 0.00 },
  large: { label: 'Large',   price: 1.50 },
};

const TOPPING_OPTIONS = {
  shot:  { label: 'Extra Shot',        price: 1.00, emoji: '☕' },
  whip:  { label: 'วิปครีม',            price: 0.50, emoji: '🍦' },
  syrup: { label: 'น้ำเชื่อมวานิลลา',   price: 0.50, emoji: '🍯' },
  oat:   { label: 'นมโอ๊ต',             price: 0.75, emoji: '🌾' },
};

/* =====================================================
   2. APPLICATION STATE
   ===================================================== */

const state = {
  selectedItem: null,       // currently highlighted menu item in customizer
  currentOptions: {
    size: 'reg',
    sweetness: '50',
    toppings: new Set(),
  },
  cart: [],                 // array of cart item objects
  queueCounter: 0,          // queue number tracker
  isCheckingOut: false,     // prevents double checkout
};

/* =====================================================
   3. PURE COMPUTATION FUNCTIONS
   ===================================================== */

/**
 * calculateItemPrice — computes net price of one item given its options
 * @param {Object} menuItem - menu data object
 * @param {Object} options  - { size, sweetness, toppings: Set }
 * @returns {number} total price
 */
function calculateItemPrice(menuItem, options) {
  let price = menuItem.basePrice;
  price += SIZE_OPTIONS[options.size].price;
  options.toppings.forEach(toppingKey => {
    if (TOPPING_OPTIONS[toppingKey]) {
      price += TOPPING_OPTIONS[toppingKey].price;
    }
  });
  return price;
}

/**
 * formatPrice — formats a number as USD string
 * @param {number} amount
 * @returns {string} e.g. "$4.50"
 */
function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * generateQueueCode — creates a human-readable queue number
 * @returns {string} e.g. "A-07"
 */
function generateQueueCode() {
  state.queueCounter += 1;
  const letter = String.fromCharCode(65 + Math.floor((state.queueCounter - 1) / 99));
  const num = String(state.queueCounter % 99 || 99).padStart(2, '0');
  return `${letter}-${num}`;
}

/**
 * getCartTotal — sums all cart items considering quantity
 * @returns {number}
 */
function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

/**
 * getCartCount — total quantity of all items
 * @returns {number}
 */
function getCartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

/**
 * buildOptionSummary — creates readable option description for cart display
 * @param {Object} options
 * @returns {string}
 */
function buildOptionSummary(options) {
  const parts = [];
  parts.push(SIZE_OPTIONS[options.size].label);
  parts.push(`หวาน ${options.sweetness}%`);
  if (options.toppings.size > 0) {
    const toppingLabels = [...options.toppings].map(k => TOPPING_OPTIONS[k].emoji + ' ' + TOPPING_OPTIONS[k].label);
    parts.push(toppingLabels.join(', '));
  }
  return parts.join(' · ');
}

/* =====================================================
   4. DOM RENDERING FUNCTIONS
   ===================================================== */

/**
 * renderMenuShowcase — renders the menu grid in the showcase section
 */
function renderMenuShowcase() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  grid.innerHTML = COFFEE_MENU.map(item => `
    <div class="menu-card reveal" data-category="${item.category}" id="menu-card-${item.id}">
      <div class="menu-card-image">
        <img
          class="menu-card-photo"
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="menu-card-img-bg" style="background:${item.gradient};display:none">
          <span style="filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3))">${item.emoji}</span>
        </div>
        <span class="menu-badge ${item.badgeClass}">${item.badge}</span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-card-price">${formatPrice(item.basePrice)}</span>
          <button class="menu-card-btn" id="quick-order-${item.id}"
            onclick="quickSelectMenuItem('${item.id}')" aria-label="สั่ง ${item.name}">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * renderOrderMenuList — renders the left panel item buttons in ordering system
 */
function renderOrderMenuList() {
  const container = document.getElementById('orderItems');
  if (!container) return;

  container.innerHTML = COFFEE_MENU.map(item => `
    <button class="order-item-btn" id="order-item-${item.id}"
      onclick="selectMenuItem('${item.id}')" aria-label="เลือก ${item.name}">
      <div class="order-item-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy"
          onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\'font-size:1.5rem\'>${item.emoji}</span>'" />
      </div>
      <div class="order-item-info">
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-price">${formatPrice(item.basePrice)}</div>
      </div>
    </button>
  `).join('');
}

/**
 * updateCustomizerUI — updates the right customizer panel with selected item + realtime price
 */
function updateCustomizerUI() {
  const placeholder = document.getElementById('customizerPlaceholder');
  const content     = document.getElementById('customizerContent');

  if (!state.selectedItem) {
    placeholder.classList.remove('hidden');
    content.classList.add('hidden');
    return;
  }

  const item = state.selectedItem;
  placeholder.classList.add('hidden');
  content.classList.remove('hidden');

  // Header
  document.getElementById('customizerName').textContent = item.name;
  document.getElementById('customizerDesc').textContent = item.desc;
  document.getElementById('basePriceDisplay').textContent = formatPrice(item.basePrice);
  document.getElementById('selectedCoffeeArt').innerHTML =
    `<img src="${item.image}" alt="${item.name}"
      style="width:80px;height:80px;border-radius:12px;object-fit:cover;box-shadow:0 4px 16px rgba(0,0,0,0.4);"
      onerror="this.outerHTML='<div style=\'font-size:2.5rem;background:${item.gradient.replace(/'/g,'\\\'')}; width:80px;height:80px;border-radius:12px;display:flex;align-items:center;justify-content:center;\'>${item.emoji}</div>'"
    />`;

  // Update price display
  updatePriceDisplay();
}

/**
 * updatePriceDisplay — recalculates and rerenders the price breakdown (called on every option change)
 */
function updatePriceDisplay() {
  if (!state.selectedItem) return;

  const opts  = state.currentOptions;
  const item  = state.selectedItem;
  const total = calculateItemPrice(item, opts);

  // Base price
  document.getElementById('priceBase').textContent = formatPrice(item.basePrice);

  // Size row
  const sizeRow = document.getElementById('priceSizeRow');
  if (opts.size === 'large') {
    sizeRow.style.display = 'flex';
  } else {
    sizeRow.style.display = 'none';
  }

  // Toppings rows
  const toppingContainer = document.getElementById('priceToppingRows');
  toppingContainer.innerHTML = '';
  opts.toppings.forEach(key => {
    const t = TOPPING_OPTIONS[key];
    if (!t) return;
    const row = document.createElement('div');
    row.className = 'price-row';
    row.innerHTML = `<span>${t.emoji} ${t.label}</span><span>+${formatPrice(t.price)}</span>`;
    toppingContainer.appendChild(row);
  });

  // Total
  document.getElementById('totalPriceDisplay').textContent = formatPrice(total);
}

/**
 * updateCartUI — re-renders the entire cart panel (called whenever cart state changes)
 */
function updateCartUI() {
  const cartItemsEl    = document.getElementById('cartItems');
  const cartEmptyEl    = document.getElementById('cartEmpty');
  const cartSummaryEl  = document.getElementById('cartSummary');
  const emptyWarningEl = document.getElementById('cartEmptyWarning');
  const badgeEl        = document.getElementById('cartBadge');
  const countEl        = document.getElementById('summaryCount');
  const totalEl        = document.getElementById('summaryTotal');

  const count = getCartCount();
  const total = getCartTotal();

  // Update badge
  badgeEl.textContent = count;
  badgeEl.classList.add('pulse');
  setTimeout(() => badgeEl.classList.remove('pulse'), 400);

  if (state.cart.length === 0) {
    // Empty state
    cartEmptyEl.style.display  = 'flex';
    cartSummaryEl.style.display = 'none';
    emptyWarningEl.style.display = 'block';
    cartItemsEl.innerHTML       = '';
    cartItemsEl.appendChild(cartEmptyEl);
    return;
  }

  // Has items
  cartEmptyEl.style.display  = 'none';
  cartSummaryEl.style.display = 'block';
  emptyWarningEl.style.display = 'none';

  // Render each cart item
  const itemsHTML = state.cart.map(cartItem => `
    <div class="cart-item" id="cart-item-${cartItem.cartId}">
      <div class="cart-item-header">
        <span class="cart-item-name">${cartItem.emoji} ${cartItem.name}</span>
        <button class="cart-item-remove" onclick="removeCartItem('${cartItem.cartId}')" 
          aria-label="ลบ ${cartItem.name}" title="ลบรายการ">✕</button>
      </div>
      <div class="cart-item-opts">${cartItem.optionSummary}</div>
      <div class="cart-item-footer">
        <span class="cart-item-price">${formatPrice(cartItem.price * cartItem.qty)}</span>
        <div class="cart-qty">
          <button class="cart-qty-btn" onclick="decrementCartItem('${cartItem.cartId}')"
            aria-label="ลดจำนวน">−</button>
          <span class="cart-qty-num">${cartItem.qty}</span>
          <button class="cart-qty-btn" onclick="incrementCartItem('${cartItem.cartId}')"
            aria-label="เพิ่มจำนวน">+</button>
        </div>
      </div>
    </div>
  `).join('');

  cartItemsEl.innerHTML = itemsHTML;

  // Summary
  countEl.textContent = `${count} รายการ`;
  totalEl.textContent = formatPrice(total);
}

/* =====================================================
   5. STATE MUTATION FUNCTIONS (User Actions)
   ===================================================== */

/**
 * selectMenuItem — selects a menu item and shows the customizer
 * @param {string} itemId
 */
function selectMenuItem(itemId) {
  const item = COFFEE_MENU.find(m => m.id === itemId);
  if (!item) return;

  state.selectedItem = item;

  // Reset options on new item selection
  state.currentOptions = {
    size: 'reg',
    sweetness: '50',
    toppings: new Set(),
  };

  // Update active state in left panel
  document.querySelectorAll('.order-item-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`order-item-${itemId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Reset UI option controls
  resetOptionControls();

  // Render customizer
  updateCustomizerUI();

  // Scroll customizer into view on mobile
  if (window.innerWidth < 900) {
    document.getElementById('orderCustomizer').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * quickSelectMenuItem — from menu showcase "+", selects item & scrolls to ordering
 * @param {string} itemId
 */
function quickSelectMenuItem(itemId) {
  selectMenuItem(itemId);
  document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' });
}

/**
 * resetOptionControls — resets all radio/checkbox UI controls to defaults
 */
function resetOptionControls() {
  // Size: reset to 'reg'
  const regRadio = document.querySelector('input[name="size"][value="reg"]');
  if (regRadio) regRadio.checked = true;

  // Sweetness: reset to '50'
  const sweetRadio = document.querySelector('input[name="sweetness"][value="50"]');
  if (sweetRadio) sweetRadio.checked = true;

  // Toppings: uncheck all
  document.querySelectorAll('input[name="topping"]').forEach(cb => { cb.checked = false; });
}

/**
 * onSizeChange — called when size radio button changes
 * @param {string} sizeKey
 */
function onSizeChange(sizeKey) {
  state.currentOptions.size = sizeKey;
  updatePriceDisplay();
}

/**
 * onSweetnessChange — called when sweetness radio changes
 * @param {string} level
 */
function onSweetnessChange(level) {
  state.currentOptions.sweetness = level;
  updatePriceDisplay();
}

/**
 * onToppingToggle — called when a topping checkbox changes
 * @param {string} toppingKey
 * @param {boolean} isChecked
 */
function onToppingToggle(toppingKey, isChecked) {
  if (isChecked) {
    state.currentOptions.toppings.add(toppingKey);
  } else {
    state.currentOptions.toppings.delete(toppingKey);
  }
  updatePriceDisplay();
}

/**
 * addToCart — adds currently configured item to cart
 */
function addToCart() {
  if (!state.selectedItem) return;

  const item    = state.selectedItem;
  const opts    = state.currentOptions;
  const price   = calculateItemPrice(item, opts);
  const cartId  = `${item.id}_${Date.now()}`;
  const summary = buildOptionSummary(opts);

  // Check if identical configuration already exists (same id + options)
  const optionsKey = `${item.id}|${opts.size}|${opts.sweetness}|${[...opts.toppings].sort().join(',')}`;
  const existing = state.cart.find(c => c.optionsKey === optionsKey);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      cartId,
      optionsKey,
      name:          item.name,
      emoji:         item.emoji,
      price,
      qty:           1,
      optionSummary: summary,
      options:       { ...opts, toppings: new Set(opts.toppings) },
    });
  }

  updateCartUI();

  // Animate button
  const btn = document.getElementById('addToCartBtn');
  if (btn) {
    btn.textContent = '✓ ใส่ตะกร้าแล้ว!';
    btn.style.background = 'linear-gradient(135deg, #2d7a2d, #1a5c1a)';
    setTimeout(() => {
      btn.innerHTML = '<span>🛒</span> ใส่ตะกร้า';
      btn.style.background = '';
    }, 1500);
  }
}

/**
 * incrementCartItem — increases qty of a cart item by 1
 * @param {string} cartId
 */
function incrementCartItem(cartId) {
  const item = state.cart.find(c => c.cartId === cartId);
  if (item) {
    item.qty += 1;
    updateCartUI();
  }
}

/**
 * decrementCartItem — decreases qty; removes if would reach 0
 * @param {string} cartId
 */
function decrementCartItem(cartId) {
  const idx = state.cart.findIndex(c => c.cartId === cartId);
  if (idx === -1) return;

  if (state.cart[idx].qty <= 1) {
    removeCartItem(cartId);
  } else {
    state.cart[idx].qty -= 1;
    updateCartUI();
  }
}

/**
 * removeCartItem — removes item completely from cart
 * @param {string} cartId
 */
function removeCartItem(cartId) {
  const el = document.getElementById(`cart-item-${cartId}`);
  if (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(30px)';
    el.style.transition = '0.3s ease';
    setTimeout(() => {
      state.cart = state.cart.filter(c => c.cartId !== cartId);
      updateCartUI();
    }, 300);
  } else {
    state.cart = state.cart.filter(c => c.cartId !== cartId);
    updateCartUI();
  }
}

/* =====================================================
   6. CHECKOUT FLOW (Async Simulation)
   ===================================================== */

/**
 * triggerCheckoutLoading — simulates sending order to barista
 */
async function triggerCheckoutLoading() {
  if (state.cart.length === 0 || state.isCheckingOut) return;
  state.isCheckingOut = true;

  // Lock screen with loading overlay
  showLoadingOverlay(true);

  // Simulate 2-second API call to barista
  await simulateApiDelay(2000);

  // Hide loading, show success
  showLoadingOverlay(false);
  showSuccessScreen();

  state.isCheckingOut = false;
}

/**
 * simulateApiDelay — returns a promise that resolves after ms
 * @param {number} ms
 */
function simulateApiDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * showLoadingOverlay — shows or hides the barista loading animation
 * @param {boolean} visible
 */
function showLoadingOverlay(visible) {
  const overlay = document.getElementById('loadingOverlay');
  if (visible) {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * showSuccessScreen — displays the order success overlay with queue number
 */
function showSuccessScreen() {
  const overlay    = document.getElementById('successOverlay');
  const queueNumEl = document.getElementById('queueNum');

  const queueCode = generateQueueCode();
  queueNumEl.textContent = queueCode;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * resetOrder — clears cart and returns to ordering state
 */
function resetOrder() {
  const overlay = document.getElementById('successOverlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';

  // Clear cart
  state.cart = [];
  state.selectedItem = null;

  updateCartUI();
  updateCustomizerUI();

  // Deselect menu item
  document.querySelectorAll('.order-item-btn').forEach(btn => btn.classList.remove('active'));

  // Scroll back to ordering section
  document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' });
}

/* =====================================================
   7. MENU FILTER SYSTEM
   ===================================================== */

/**
 * initMenuFilters — sets up filter button click handlers
 */
function initMenuFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      filterMenuCards(filter);
    });
  });
}

/**
 * filterMenuCards — shows/hides cards based on category filter
 * @param {string} filter
 */
function filterMenuCards(filter) {
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach(card => {
    const shouldShow = filter === 'all' || card.dataset.category === filter;
    if (shouldShow) {
      card.classList.remove('hidden-card');
      card.style.animation = 'fadeSlideUp 0.4s ease forwards';
    } else {
      card.classList.add('hidden-card');
    }
  });
}

/* =====================================================
   8. RESERVATION FORM
   ===================================================== */

/**
 * submitReservation — handles reservation form submission
 * @param {Event} e
 */
async function submitReservation(e) {
  e.preventDefault();

  const btn = document.getElementById('reserveBtn');
  btn.textContent = 'กำลังดำเนินการ...';
  btn.disabled = true;

  // Simulate API
  await simulateApiDelay(1500);

  const name   = document.getElementById('res-name').value;
  const date   = document.getElementById('res-date').value;
  const time   = document.getElementById('res-time').value;
  const guests = document.getElementById('res-guests').value;

  // Format confirmation message
  const dateFormatted = new Date(date).toLocaleDateString('th-TH', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
  const msg = `${name} จำนวน ${guests} คน · ${dateFormatted} เวลา ${time} น.`;

  document.getElementById('reservationSuccessMsg').textContent = msg;
  document.getElementById('reservationForm').classList.add('hidden');
  document.getElementById('reservationSuccess').classList.remove('hidden');
}

/**
 * resetReservation — resets reservation form to initial state
 */
function resetReservation() {
  document.getElementById('reservationForm').reset();
  document.getElementById('reservationForm').classList.remove('hidden');
  document.getElementById('reservationSuccess').classList.add('hidden');

  const btn = document.getElementById('reserveBtn');
  btn.textContent = 'ยืนยันการจอง ✓';
  btn.disabled = false;
}

/* =====================================================
   9. UTILITY — NEWSLETTER, MAP, NAV
   ===================================================== */

/**
 * subscribeNewsletter — handles newsletter subscription
 */
function subscribeNewsletter() {
  const emailEl = document.getElementById('newsletterEmail');
  const btn     = document.getElementById('subscribeBtn');
  const email   = emailEl.value.trim();

  if (!email || !email.includes('@')) {
    emailEl.style.borderColor = '#e53935';
    emailEl.placeholder = 'กรุณากรอกอีเมลที่ถูกต้อง';
    setTimeout(() => { emailEl.style.borderColor = ''; }, 2000);
    return;
  }

  btn.textContent = '✓';
  btn.style.background = '#2d7a2d';
  emailEl.value = '';
  emailEl.placeholder = 'สมัครสำเร็จแล้ว!';
  setTimeout(() => {
    btn.textContent = 'ส่ง';
    btn.style.background = '';
    emailEl.placeholder = 'อีเมลของคุณ';
  }, 3000);
}

/**
 * openDirections — opens Google Maps directions
 */
function openDirections() {
  window.open('https://www.google.com/maps/search/?api=1&query=นิมมานเหมินทร์+เชียงใหม่', '_blank');
}

/* =====================================================
   10. NAVBAR & SCROLL BEHAVIOR
   ===================================================== */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/**
 * updateActiveNavLink — highlights the nav link for current section in viewport
 */
function updateActiveNavLink() {
  const sections = ['home', 'menu-section', 'order-section', 'chef-section', 'reservation-section', 'location-section'];
  const scrollY  = window.scrollY + 120;

  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i]);
    if (el && el.offsetTop <= scrollY) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${sections[i]}"]`);
      if (activeLink) activeLink.classList.add('active');
      break;
    }
  }
}

/* =====================================================
   11. SCROLL REVEAL ANIMATION
   ===================================================== */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* =====================================================
   12. OPTION CHANGE EVENT BINDING
   ===================================================== */

function bindOptionListeners() {
  // Size options
  document.querySelectorAll('input[name="size"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) onSizeChange(radio.value);
    });
  });

  // Sweetness options
  document.querySelectorAll('input[name="sweetness"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) onSweetnessChange(radio.value);
    });
  });

  // Topping checkboxes
  document.querySelectorAll('input[name="topping"]').forEach(cb => {
    cb.addEventListener('change', () => {
      onToppingToggle(cb.value, cb.checked);
    });
  });
}

/* =====================================================
   13. SET MINIMUM DATE FOR RESERVATION
   ===================================================== */

function initReservationDate() {
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }
}

/* =====================================================
   14. ADD REVEAL CLASSES TO KEY SECTIONS
   ===================================================== */

function addRevealClasses() {
  const selectors = [
    '.section-header',
    '.info-card',
    '.award',
    '.chef-text > *',
    '.chef-image-wrap',
    '.menu-card',
    '.reservation-form',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.08}s`;
    });
  });
}

/* =====================================================
   15. GALLERY STRIP — Duplicate for infinite scroll
   ===================================================== */

/**
 * initGallery — duplicates gallery items for seamless looping
 */
function initGallery() {
  const track = document.querySelector('.gallery-track');
  if (!track) return;
  // Clone all items and append for seamless loop
  const items = track.innerHTML;
  track.innerHTML = items + items; // duplicate
}

/* =====================================================
   16. APPLICATION INITIALIZATION
   ===================================================== */

/**
 * init — bootstraps the entire application
 */
function init() {
  // Render data-driven content
  renderMenuShowcase();
  renderOrderMenuList();

  // Bind event listeners
  bindOptionListeners();
  initMenuFilters();
  initNavbar();
  initReservationDate();
  initGallery();

  // Add CSS reveal classes to elements
  addRevealClasses();

  // Initialize scroll reveal after DOM is painted
  requestAnimationFrame(() => {
    initScrollReveal();
  });

  // Trigger initial cart UI (empty state)
  updateCartUI();
  updateCustomizerUI();

  console.log('☕ Amber & Bean — Application loaded successfully');
}

// Boot when DOM is ready
document.addEventListener('DOMContentLoaded', init);
