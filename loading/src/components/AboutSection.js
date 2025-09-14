// src/components/AboutSection.js
export class AboutSection {
  constructor() {
    this.render();
  }

  render() {
    return `
      <section id="features" class="py-20 bg-[#EAF2FA]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">

          <!-- Header -->
          <div class="text-center mb-14">
            <h2 class="text-3xl md:text-5xl font-extrabold text-[#0F5676] tracking-wide">Features</h2>
            <p class="mt-4 text-base md:text-lg text-[#27475b]/80 max-w-3xl mx-auto">
              Unlock a world of possibilities with our ATS. <br class="hidden md:block" />
              Automate your recruitment process with just one click!
            </p>
          </div>

          <!-- GRID (2 x 3) con divisores -->
          <div class="grid grid-cols-1 md:grid-cols-3 bg-[#EAF2FA] rounded-xl overflow-hidden
                      border border-white/50 shadow-[inset_0_-1px_0_rgba(255,255,255,.4)]">

            <!-- 1 Connectivity -->
            <article class="p-8 text-center backdrop-blur-[0.5px]
                            md:border-r md:border-b border-white/60">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- link icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.75h3.75a3 3 0 110 6H15m-6 4.5H5.25a3 3 0 110-6H9m3-1.5l-3 3m3-3l3 3" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Connectivity</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                Integrate effortlessly with other systems and tools to streamline your hiring process.
              </p>
            </article>

            <!-- 2 Intelligence -->
            <article class="p-8 text-center md:border-r md:border-b border-white/60">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- chart icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 19h16M7 16V8m5 8V5m5 11v-6" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Intelligence</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                AI-powered automation enhances every step, from sourcing to selection.
              </p>
            </article>

            <!-- 3 Customization -->
            <article class="p-8 text-center md:border-b border-white/60">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- layout icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" />
                  <rect x="3" y="12" width="10" height="8" rx="1.5" />
                  <rect x="15" y="12" width="6" height="8" rx="1.5" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Customization</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                Adapt workflows to fit your hiring needs with flexible and clear processes.
              </p>
            </article>

            <!-- 4 Onboarding -->
            <article class="p-8 text-center md:border-r border-white/60">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- box icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 4 9-4M4 8v9a2 2 0 002 2h12a2 2 0 002-2V8" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Onboarding</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                Set up and configure your organization in minutes with an intuitive interface.
              </p>
            </article>

            <!-- 5 Efficiency -->
            <article class="p-8 text-center md:border-r border-white/60">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- automation icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6h4m-7 6h10M8 18h8M5 6h.01M19 6h.01" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Efficiency</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                Reduce hiring time with automated processes and seamless task management.
              </p>
            </article>

            <!-- 6 Insights -->
            <article class="p-8 text-center">
              <div class="mx-auto mb-4 w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center">
                <!-- dashboard icon -->
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#0F5676]" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13h8V3H3v10zm10 8h8V3h-8v18zM3 21h8v-6H3v6z" />
                </svg>
              </div>
              <h3 class="font-semibold text-[#0b3e58]">Insights</h3>
              <p class="mt-2 text-sm text-[#27475b]/80">
                Make data-driven decisions with real-time analytics and performance tracking.
              </p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  attachEvents() {
    // Elevación sutil al hover (solo desktop)
    const cards = document.querySelectorAll('#features article');
    cards.forEach(c => {
      c.addEventListener('mouseenter', () => { c.style.transform = 'translateY(-2px)'; c.style.transition = 'transform 200ms'; });
      c.addEventListener('mouseleave', () => { c.style.transform = 'translateY(0)'; });
    });
  }
}
