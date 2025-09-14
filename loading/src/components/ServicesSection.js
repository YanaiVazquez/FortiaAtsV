// src/components/ServicesSection.js
export class ServicesSection {
  constructor() {
    this.render();
  }

  render() {
    return `
      <section id="plans" class="relative overflow-hidden bg-white">
        <!-- Imagen decorativa esquina sup. derecha -->
        <img src="/assets/images/home.png"
             alt="" aria-hidden="true"
             class="pointer-events-none select-none hidden md:block absolute -top-6 right-0 w-[420px] lg:w-[520px] opacity-90" />

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <!-- Heading -->
          <header class="max-w-3xl">
            <h2 class="text-3xl lg:text-[42px] leading-tight font-extrabold text-slate-900">
              Powerful features for
              <span class="text-[#0F5676]">powerful creators</span>
            </h2>
            <p class="mt-3 text-slate-600">Choose a plan that's right for you</p>
          </header>

          <!-- Toggle Billing -->
          <div class="mt-8 flex items-center gap-4">
            <span id="lblMonthly" class="text-sm text-slate-600">Pay Monthly</span>

            <label class="relative inline-flex items-center cursor-pointer">
              <input id="billingToggle" type="checkbox" class="sr-only" />
              <span class="w-12 h-6 bg-slate-200 rounded-full peer-checked:bg-[#0F5676] transition-colors"></span>
              <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow
                           transition-transform peer-checked:translate-x-6"></span>
            </label>

            <span id="lblYearly" class="text-sm font-medium text-slate-900">Pay Yearly</span>
            <span id="saveBadge" class="text-[#0F5676] text-sm ml-1">← Save 25%</span>
          </div>

          <!-- Plans -->
          <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            <!-- Freebie -->
            <article class="plan-card bg-white rounded-2xl p-6 ring-1 ring-slate-200"
                     data-plan="free" data-monthly="0">
              <h3 class="font-semibold text-slate-800">Freebie</h3>
              <p class="mt-1 text-sm text-slate-500">
                Ideal for individuals who need quick access to basic features.
              </p>

              <div class="mt-6 flex items-end gap-1">
                <span class="text-4xl font-extrabold text-[#0F5676] price-value">$0</span>
                <span class="text-slate-400 text-sm price-period">/ Month</span>
              </div>

              <button class="mt-4 w-full h-10 rounded-md ring-1 ring-[#0F5676] text-[#0F5676] font-medium hover:bg-[#0F5676]/5">
                Get Started Now
              </button>

              <ul class="mt-6 space-y-3 text-sm">
                ${this.li(true, '20,000+ of PNG & SVG graphics')}
                ${this.li(true, 'Access to 100 million stock images')}
                ${this.li(false, 'Upload custom icons and fonts')}
                ${this.li(false, 'Unlimited Sharing')}
                ${this.li(false, 'Upload graphics & video in up to 4k')}
                ${this.li(false, 'Unlimited Projects')}
                ${this.li(false, 'Instant Access to our design system')}
                ${this.li(false, 'Create teams to collaborate on designs')}
              </ul>
            </article>

            <!-- Professional (DESTACADO) -->
            <article class="plan-card relative bg-[#0F5676] text-white rounded-2xl p-6 shadow-xl"
                     data-plan="pro" data-monthly="25">
              <h3 class="font-semibold">Professional</h3>
              <p class="mt-1 text-sm text-white/80">
                Ideal for individuals who need advanced features and tools for client work.
              </p>

              <div class="mt-6 flex items-end gap-1">
                <span class="text-4xl font-extrabold price-value">$25</span>
                <span class="text-white/70 text-sm price-period">/ Month</span>
              </div>

              <button class="mt-4 w-full h-10 rounded-md bg-white text-[#0F5676] font-semibold hover:bg-slate-100">
                Get Started Now
              </button>

              <ul class="mt-6 space-y-3 text-sm">
                ${this.li(true, '20,000+ of PNG & SVG graphics', true)}
                ${this.li(true, 'Access to 100 million stock images', true)}
                ${this.li(true, 'Upload custom icons and fonts', true)}
                ${this.li(true, 'Unlimited Sharing', true)}
                ${this.li(true, 'Upload graphics & video in up to 4k', true)}
                ${this.li(true, 'Unlimited Projects', true)}
                ${this.li(true, 'Instant Access to our design system', true)}
                ${this.li(true, 'Create teams to collaborate on designs', true)}
              </ul>

              <!-- borde decorativo -->
              <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
            </article>

            <!-- Enterprise -->
            <article class="plan-card bg-white rounded-2xl p-6 ring-1 ring-slate-200"
                     data-plan="ent" data-monthly="100">
              <h3 class="font-semibold text-slate-800">Enterprise</h3>
              <p class="mt-1 text-sm text-slate-500">
                Ideal for businesses who need personalized services and security for large teams.
              </p>

              <div class="mt-6 flex items-end gap-1">
                <span class="text-4xl font-extrabold text-[#0F5676] price-value">$100</span>
                <span class="text-slate-400 text-sm price-period">/ Month</span>
              </div>

              <button class="mt-4 w-full h-10 rounded-md ring-1 ring-[#0F5676] text-[#0F5676] font-medium hover:bg-[#0F5676]/5">
                Get Started Now
              </button>

              <ul class="mt-6 space-y-3 text-sm">
                ${this.li(true, '20,000+ of PNG & SVG graphics')}
                ${this.li(true, 'Access to 100 million stock images')}
                ${this.li(true, 'Upload custom icons and fonts')}
                ${this.li(true, 'Unlimited Sharing')}
                ${this.li(true, 'Upload graphics & video in up to 4k')}
                ${this.li(true, 'Unlimited Projects')}
                ${this.li(true, 'Instant Access to our design system')}
                ${this.li(true, 'Create teams to collaborate on designs')}
              </ul>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  // ítem de lista con check/cross; if "onBlue" usa iconos blancos
  li(ok, text, onBlue = false) {
    const okColor = onBlue ? 'text-white' : 'text-[#0F5676]';
    const xColor  = onBlue ? 'text-white/70' : 'text-slate-400';
    const tColor  = onBlue ? 'text-white' : 'text-slate-700';
    return ok
      ? `<li class="flex items-start gap-3"><span class="${okColor}">
            ${this.svgCheck()}
          </span><span class="${tColor}">${text}</span></li>`
      : `<li class="flex items-start gap-3"><span class="${xColor}">
            ${this.svgCross()}
          </span><span class="text-slate-400 line-through">${text}</span></li>`;
  }

  svgCheck() {
    return `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" class="opacity-20"></circle>
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3 3 7-7"></path>
            </svg>`;
  }
  svgCross() {
    return `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" class="opacity-20"></circle>
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l6 6M15 9l-6 6"></path>
            </svg>`;
  }

  attachEvents() {
    // Toggle Monthly/Yearly (25% off)
    const toggle = document.getElementById('billingToggle');
    const save   = document.getElementById('saveBadge');
    const lblM   = document.getElementById('lblMonthly');
    const lblY   = document.getElementById('lblYearly');
    const cards  = document.querySelectorAll('#services .plan-card');

    const fmt = (n) => `$${n}`;

    const update = () => {
      const yearly = toggle?.checked;
      save.style.opacity = yearly ? '1' : '0.6';
      lblM.classList.toggle('text-slate-900', !yearly);
      lblM.classList.toggle('text-slate-600', yearly);
      lblY.classList.toggle('text-slate-900', yearly);
      lblY.classList.toggle('text-slate-600', !yearly);

      cards.forEach(card => {
        const base = Number(card.dataset.monthly || 0);
        const priceEl = card.querySelector('.price-value');
        const periodEl = card.querySelector('.price-period');

        let value = base;
        if (yearly) value = Math.round(base * 0.75); // 25% off
        // Freebie queda $0
        if (Number.isNaN(value)) value = 0;

        priceEl.textContent = fmt(value);
        periodEl.textContent = yearly ? '/ Month (billed yearly)' : '/ Month';
      });
    };

    // init
    update();
    toggle?.addEventListener('change', update);

    // CTA tracking (opcional)
    document.querySelectorAll('#services button').forEach(b =>
      b.addEventListener('click', () => console.log('Plan CTA:', b.closest('.plan-card')?.dataset.plan))
    );
  }
}
