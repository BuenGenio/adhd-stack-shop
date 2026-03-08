/* ── Stripe Config ─────────────────────────────────────────── */

const CHECKOUT_API = 'https://adhd-stack-checkout.adhd-stack.workers.dev';

/* ── Product Data ──────────────────────────────────────────── */

const KITS = [
  {
    id: 'work',
    name: 'Work Kit',
    price: 249,
    currency: '€',
    accent: '#c28b0a',
    accentLight: '#fdf6e3',
    tagline: 'Focus · Clarity · Drive',
    bundlePriceId: 'price_1T7Yc3A8xxsRaQqsXVY0l2Gl',
    items: [
      { id: 'atomoxetine',     name: 'Atomoxetine',     dose: '40mg',   form: 'powder',  container: 'baggie', price: 39, selected: true, image: null, priceId: 'price_1T7YboA8xxsRaQqsbjKiW4Vo' },
      { id: 'gunfacine',       name: 'Gunfacine',       dose: '1mg/ml', form: 'liquid',  container: 'vial',   price: 45, selected: true, image: null, priceId: 'price_1T7YboA8xxsRaQqs1ou5YxnU' },
      { id: '9mbc',            name: '9-MBC',           dose: '10mg',   form: 'powder',  container: 'baggie', price: 32, selected: true, image: null, priceId: 'price_1T7YbpA8xxsRaQqsFYfCqFCZ' },
      { id: 'phenylpiracetam', name: 'Phenylpiracetam', dose: '100mg',  form: 'powder',  container: 'baggie', price: 28, selected: true, image: null, priceId: 'price_1T7YbrA8xxsRaQqsWEuMwL8Q' },
      { id: 'noopept',         name: 'Noopept',         dose: '30mg',   form: 'powder',  container: 'baggie', price: 22, selected: true, image: null, priceId: 'price_1T7YbsA8xxsRaQqsqLpYcagp' },
      { id: 'ldopa',           name: 'L-Dopa',          dose: '200mg',  form: 'powder',  container: 'baggie', price: 18, selected: true, image: null, priceId: 'price_1T7YbtA8xxsRaQqsZ7ApxIlR' },
      { id: '4f-modafinil',    name: '4F-Modafinil',    dose: '50mg',   form: 'powder',  container: 'baggie', price: 42, selected: true, image: null, priceId: 'price_1T7YbuA8xxsRaQqsZXccEFUN' },
      { id: 'rape',            name: 'Rapé',            dose: '5g',     form: 'snuff',   container: 'jar',   price: 18, selected: true, image: null, priceId: 'price_1T7YbzA8xxsRaQqsZuXycVaq' },
      {
        id: 'speciosa-work',
        name: 'Speciosa Replacement',
        form: 'blend',
        container: 'jar',
        price: 29,
        selected: true,
        image: null,
        priceId: 'price_1T7YbvA8xxsRaQqs2nqR0X2y',
        components: [
          { name: '7-OH',        dose: '5mg' },
          { name: 'Theobromine', dose: '' },
          { name: 'Baicalin',    dose: '20%' },
          { name: 'Nuciferine',  dose: '20%' },
        ],
      },
    ],
  },
  {
    id: 'rest',
    name: 'Rest Kit',
    price: 149,
    currency: '€',
    accent: '#5b6eae',
    accentLight: '#eef0f8',
    tagline: 'Calm · Restore · Balance',
    bundlePriceId: 'price_1T7Yc4A8xxsRaQqsCQZHkwwK',
    items: [
      { id: 'nuciferine',  name: 'Nuciferine',  dose: '20mg',  form: 'extract', container: 'jar',   price: 24, selected: true, image: null, priceId: 'price_1T7YbwA8xxsRaQqs8WsK5PWW' },
      /* { id: '2mxl',        name: '2MXL',         dose: '10ml',  form: 'spray',   container: 'spray', price: 28, selected: true, image: null, priceId: 'price_1T7YbxA8xxsRaQqs9j92Hgtg' }, */
      { id: 'kanna',       name: 'Kanna',        dose: '10ml',  form: 'spray',   container: 'spray', price: 22, selected: true, image: null, priceId: 'price_1T7YbyA8xxsRaQqseHxpEXkM' },
      { id: 'nac',          name: 'NAC',           dose: '600mg', form: 'powder',  container: 'baggie', price: 14, selected: true, image: null, priceId: null },
      { id: 'ashwagandha', name: 'Ashwagandha',  dose: '300mg', form: 'extract', container: 'jar',   price: 16, selected: true, image: null, priceId: 'price_1T7Yc0A8xxsRaQqstwogjcok' },
      { id: '4f-phenibut', name: '4F-Phenibut',  dose: '250mg', form: 'powder',  container: 'baggie', price: 20, selected: true, image: null, priceId: 'price_1T7Yc1A8xxsRaQqs7fU3v8aH' },
      {
        id: 'speciosa-rest',
        name: 'Speciosa Replacement',
        form: 'blend',
        container: 'jar',
        price: 25,
        selected: true,
        image: null,
        priceId: 'price_1T7Yc2A8xxsRaQqsV5jQHfT5',
        components: [
          { name: '7-OH',        dose: '5mg' },
          { name: 'Theobromine', dose: '' },
          { name: 'Baicalin',    dose: '20%' },
          { name: 'Nuciferine',  dose: '20%' },
        ],
      },
    ],
  },
];

/* ── SVG Icons ────────────────────────────────────────────── */

function svgZipBag() {
  return `<svg viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="grip-left"
          d="M30 45 L30 20 Q30 10 40 10 L85 10 Q90 10 90 15 L90 45"
          stroke="currentColor" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
    <path class="grip-right"
          d="M190 45 L190 20 Q190 10 180 10 L135 10 Q130 10 130 15 L130 45"
          stroke="currentColor" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
    <rect x="30" y="45" width="160" height="14" rx="2"
          stroke="currentColor" stroke-width="2"/>
    <line class="zip-teeth"
          x1="36" y1="52" x2="184" y2="52"
          stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 2.5"/>
    <path d="M30 59 L30 275 Q30 290 45 290 L175 290 Q190 290 190 275 L190 59"
          stroke="currentColor" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
    <path d="M25 48 L30 48" stroke="currentColor" stroke-width="2.2"/>
    <path d="M190 48 L195 48" stroke="currentColor" stroke-width="2.2"/>
    <rect x="55" y="90" width="110" height="110" rx="5"
          stroke="currentColor" stroke-width=".8" stroke-dasharray="4 3" opacity=".25"/>
  </svg>`;
}

function svgBaggie() {
  return `<svg viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8 L4 4 Q4 2 6 2 L14 2 L14 8" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <path d="M32 8 L32 4 Q32 2 30 2 L22 2 L22 8" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
    <rect x="4" y="8" width="28" height="6" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
    <line x1="6" y1="11" x2="30" y2="11" stroke="currentColor" stroke-width="1" stroke-dasharray="2 1.5"/>
    <path d="M4 14 L4 42 Q4 46 8 46 L28 46 Q32 46 32 42 L32 14"
          stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/>
  </svg>`;
}

function svgJar() {
  return `<svg viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="18" height="10" rx="3" stroke="currentColor" stroke-width="1.4"/>
    <line x1="11" y1="8" x2="25" y2="8" stroke="currentColor" stroke-width=".8" opacity=".5"/>
    <line x1="11" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width=".8" opacity=".5"/>
    <path d="M6 15 L6 40 Q6 46 12 46 L24 46 Q30 46 30 40 L30 15"
          stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/>
    <line x1="6" y1="15" x2="30" y2="15" stroke="currentColor" stroke-width="1.4"/>
  </svg>`;
}

function svgVial() {
  return `<svg viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="6" rx="5" ry="5" stroke="currentColor" stroke-width="1.4"/>
    <line x1="18" y1="11" x2="18" y2="18" stroke="currentColor" stroke-width="1.5"/>
    <path d="M15 18 L15 22 L11 26" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>
    <path d="M21 18 L21 22 L25 26" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>
    <rect x="11" y="26" width="14" height="18" rx="3" stroke="currentColor" stroke-width="1.4"/>
    <path d="M11 44 Q11 47 14 47 L22 47 Q25 47 25 44" stroke="currentColor" stroke-width="1.2" fill="none"/>
    <line x1="14" y1="32" x2="22" y2="32" stroke="currentColor" stroke-width=".7" opacity=".4"/>
    <line x1="14" y1="35" x2="22" y2="35" stroke="currentColor" stroke-width=".7" opacity=".3"/>
    <line x1="14" y1="38" x2="22" y2="38" stroke="currentColor" stroke-width=".7" opacity=".2"/>
  </svg>`;
}

function svgSpray() {
  return `<svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="24" width="14" height="22" rx="3" stroke="currentColor" stroke-width="1.4"/>
    <rect x="15" y="17" width="8" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
    <rect x="13" y="11" width="12" height="8" rx="2.5" stroke="currentColor" stroke-width="1.4"/>
    <path d="M25 14 L31 12 L31 14.5 L25 16.'rape':          { name: 'Rapé 5g',                      price: 18 },5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>
    <line x1="32" y1="11" x2="36" y2="10" stroke="currentColor" stroke-width=".9" opacity=".45"/>
    <line x1="32" y1="13.2" x2="37" y2="13.2" stroke="currentColor" stroke-width=".9" opacity=".45"/>
    <line x1="32" y1="15.5" x2="36" y2="16.5" stroke="currentColor" stroke-width=".9" opacity=".45"/>
  </svg>`;
}

function svgCheck() {
  return `<svg viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

const CONTAINER_SVG = {
  baggie: svgBaggie,
  jar:    svgJar,
  vial:   svgVial,
  spray:  svgSpray,
};

/* ── State ────────────────────────────────────────────────── */

const state = {
  expanded: null,
};

/* ── Rendering ────────────────────────────────────────────── */

function renderKits() {
  const grid = document.getElementById('kits-grid');
  grid.innerHTML = KITS.map(renderKitCard).join('');
  bindEvents();
}

function renderKitCard(kit) {
  const itemsHtml = renderItems(kit);
  const selectedCount = kit.items.filter(i => i.selected).length;
  const totalItems = kit.items.length;

  return `
    <div class="kit-card ${state.expanded === kit.id ? 'expanded' : ''}"
         data-kit="${kit.id}"
         style="--kit-accent: ${kit.accent}; --kit-accent-light: ${kit.accentLight}">
      <div class="kit-bag" data-action="toggle" data-kit="${kit.id}">
        <div class="kit-bag-svg">${svgZipBag()}</div>
        <div class="kit-info">
          <h2 class="kit-name">${kit.name}</h2>
          <p class="kit-tagline">${kit.tagline}</p>
          <p class="kit-price">${kit.currency}${kit.price}</p>
          <span class="kit-cta">Click to open</span>
        </div>
      </div>
      <div class="kit-contents">
        <div class="kit-items">${itemsHtml}</div>
        <div class="kit-footer">
          <span class="kit-selected-count">
            <strong id="count-${kit.id}">${selectedCount}</strong> / ${totalItems} selected
          </span>
          <span class="kit-total" id="total-${kit.id}">
            ${kit.currency}${kit.price}
          </span>
          <button class="btn-checkout" data-action="checkout" data-kit="${kit.id}">
            <svg viewBox="0 0 16 16" fill="none"><path d="M1 1h2l1.5 8h8L15 3H4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="13" r="1.2" fill="currentColor"/><circle cx="11.5" cy="13" r="1.2" fill="currentColor"/></svg>
            Checkout
          </button>
        </div>
      </div>
    </div>`;
}

function renderItems(kit) {
  let html = '';
  const blends = kit.items.filter(i => i.form === 'blend');
  const regular = kit.items.filter(i => i.form !== 'blend');

  regular.forEach(item => {
    html += renderItem(kit, item);
  });

  if (blends.length) {
    html += `<div class="kit-separator"></div>`;
    html += `<div class="kit-separator-label">Speciosa Replacement Blend</div>`;
    blends.forEach(item => {
      html += renderItem(kit, item);
    });
  }

  return html;
}

function renderItem(kit, item) {
  const iconHtml = item.image
    ? `<img src="${item.image}" alt="${item.name}">`
    : (CONTAINER_SVG[item.container] || svgBaggie)();

  const componentsHtml = item.components
    ? `<div class="item-components">
        ${item.components.map(c =>
          `<span class="item-component">${c.name}${c.dose ? ' ' + c.dose : ''}</span>`
        ).join('')}
       </div>`
    : '';

  const doseHtml = item.dose
    ? `<span class="item-dose">${item.dose}</span>`
    : '';

  const formTag = item.form && item.form !== 'blend'
    ? `<span class="item-form-tag">${item.form}</span>`
    : item.form === 'blend'
    ? `<span class="item-form-tag">blend</span>`
    : '';

  return `
    <div class="kit-item ${item.selected ? '' : 'deselected'}" data-item="${item.id}" data-kit="${kit.id}">
      <label class="item-check">
        <input type="checkbox" ${item.selected ? 'checked' : ''}
               data-action="select" data-kit="${kit.id}" data-item="${item.id}">
        <span class="check-box">${svgCheck()}</span>
      </label>
      <div class="item-icon">${iconHtml}</div>
      <div class="item-info">
        <span class="item-name">${item.name} ${formTag}</span>
        ${doseHtml}
        ${componentsHtml}
      </div>
      <span class="item-price">${kit.currency}${item.price}</span>
    </div>`;
}

/* ── Events ───────────────────────────────────────────────── */

function bindEvents() {
  document.querySelectorAll('.kit-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('[data-action="select"]')) return;
      if (e.target.closest('[data-action="checkout"]')) return;
      const kitId = card.dataset.kit;
      if (!card.classList.contains('expanded')) {
        toggleKit(kitId);
      } else if (e.target.closest('.kit-bag')) {
        toggleKit(kitId);
      }
    });
  });

  document.querySelectorAll('[data-action="select"]').forEach(el => {
    el.addEventListener('change', e => {
      e.stopPropagation();
      toggleItem(el.dataset.kit, el.dataset.item, el.checked);
    });
  });

  document.querySelectorAll('[data-action="checkout"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      handleCheckout(btn.dataset.kit);
    });
  });
}

function toggleKit(kitId) {
  if (state.expanded === kitId) {
    state.expanded = null;
  } else {
    state.expanded = kitId;
  }
  renderKits();
}

function toggleItem(kitId, itemId, checked) {
  const kit = KITS.find(k => k.id === kitId);
  if (!kit) return;
  const item = kit.items.find(i => i.id === itemId);
  if (!item) return;

  item.selected = checked;

  const row = document.querySelector(`.kit-item[data-item="${itemId}"][data-kit="${kitId}"]`);
  if (row) {
    row.classList.toggle('deselected', !checked);
  }

  updateFooter(kit);
}

function updateFooter(kit) {
  const selected = kit.items.filter(i => i.selected);
  const countEl = document.getElementById(`count-${kit.id}`);
  const totalEl = document.getElementById(`total-${kit.id}`);

  if (countEl) countEl.textContent = selected.length;
  if (totalEl) {
    const sum = selected.reduce((s, i) => s + i.price, 0);
    totalEl.textContent = `${kit.currency}${selected.length === kit.items.length ? kit.price : sum}`;
  }
}

/* ── Checkout (server-side via Cloudflare Worker) ─────────── */

async function handleCheckout(kitId) {
  const kit = KITS.find(k => k.id === kitId);
  if (!kit) return;

  const selectedItems = kit.items.filter(i => i.selected).map(i => i.id);
  if (selectedItems.length === 0) return;

  const btn = document.querySelector(`.btn-checkout[data-kit="${kitId}"]`);
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Redirecting…';
  }

  try {
    const res = await fetch(CHECKOUT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kitId, selectedItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Checkout failed');
    }
  } catch (err) {
    console.error('Checkout failed:', err);
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'Checkout';
    }
    alert(err.message || 'Checkout failed. Please try again.');
  }
}

/* ── Theme Switcher ───────────────────────────────────────── */

(function initTheme() {
  const THEME_KEY = 'adhd_theme';
  const root = document.documentElement;
  const mql = window.matchMedia?.('(prefers-color-scheme: dark)') ?? null;

  function systemTheme() {
    return mql?.matches ? 'dark' : 'light';
  }

  function applyAttrs(theme) {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-system', systemTheme());
    const lbl = document.getElementById('themeLabel');
    const ico = document.getElementById('themeIcon');
    if (lbl) lbl.textContent = theme[0].toUpperCase() + theme.slice(1);
    if (ico) ico.textContent = theme === 'auto' ? '◐' : theme === 'dark' ? '☾' : '☼';
  }

  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    return ['auto', 'dark', 'light'].includes(saved) ? saved : 'auto';
  }

  function setTheme(t) {
    localStorage.setItem(THEME_KEY, t);
    applyAttrs(t);
  }

  applyAttrs(getTheme());

  if (mql) {
    mql.addEventListener('change', () => {
      root.setAttribute('data-system', systemTheme());
      if (getTheme() === 'auto') applyAttrs('auto');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnTheme');
    if (btn) btn.addEventListener('click', () => {
      const cur = getTheme();
      setTheme(cur === 'auto' ? 'dark' : cur === 'dark' ? 'light' : 'auto');
    });
  });
})();

/* ── Sales Counter ────────────────────────────────────────── */

function initSalesCounter() {
  const BASE = 1000;
  const LAUNCH = new Date('2025-06-01').getTime();
  const daysSince = Math.max(0, Math.floor((Date.now() - LAUNCH) / 86400000));
  const pseudo = daysSince * 3 + Math.floor(Math.sin(daysSince) * 2);
  const total = BASE + pseudo;
  const formatted = total.toLocaleString() + '+';

  const headerEl = document.getElementById('salesCounter');
  const footerEl = document.getElementById('salesCounterFooter');
  if (headerEl) headerEl.textContent = formatted + ' kits sold';
  if (footerEl) footerEl.textContent = formatted;
}

/* ── Init ─────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  renderKits();
  initSalesCounter();
});
