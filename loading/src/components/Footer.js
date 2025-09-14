// src/components/Footer.js
export class Footer {
  constructor() { this.render(); }

  render() {
    return `
      <footer id="contact" class="bg-white">
        <!-- Franja superior celeste: full width -->
        <div class="h-14 bg-[#EAF2FA] w-screen"></div>

        <!-- Newsletter: full width (rectangular) -->
        <div class="w-screen -mt-9">
          <div class="bg-[#0F5676] text-white rounded-none shadow-lg ring-1 ring-black/5 w-full">
            <div class="px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p class="text-sm font-semibold">Newsletter</p>
                <p class="text-xs md:text-sm text-white/80">
                  Be the first one to know&nbsp; about discounts, offers and events
                </p>
              </div>

              <form id="newsletter-form" class="flex items-center gap-2 w-full md:w-auto">
                <div class="flex items-center bg-white rounded-full pl-3 pr-2 h-10 w-full md:w-[520px] ring-1 ring-black/5">
                  <svg class="w-4 h-4 text-[#0F5676] mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v16H4zM22 6l-10 7L2 6"/>
                  </svg>
                  <input id="newsletter-email" type="email" required
                         placeholder="Enter your email"
                         class="flex-1 bg-transparent outline-none text-[13px] text-slate-800 placeholder-slate-400"/>
                </div>
                <button type="submit"
                        class="h-10 px-4 rounded-full bg-[#FF2E63] text-white text-sm font-medium hover:brightness-110">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Contact row: full width -->
        <div class="w-screen px-4 sm:px-6 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <!-- Teléfono -->
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-[#2FB2C9] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z"/>
              </svg>
              <div>
                <p class="font-semibold text-slate-800">Teléfono</p>
                <p class="text-sm text-slate-600">310-437-2766</p>
              </div>
            </div>

            <!-- Mail -->
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-[#2FB2C9] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4h16v16H4zM22 6l-10 7L2 6"/>
              </svg>
              <div>
                <p class="font-semibold text-slate-800">Mail</p>
                <p class="text-sm text-slate-600">unreal@outlook.com</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-[#2FB2C9] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6-5.373-6-10a6 6 0 1112 0c0 4.627-6 10-6 10z"/>
                <circle cx="12" cy="11" r="2"/>
              </svg>
              <div>
                <p class="font-semibold text-slate-800">Address</p>
                <p class="text-sm text-slate-600">706 Campfire Ave.<br/>Meriden, CT 06450</p>
              </div>
            </div>

            <!-- Fax -->
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-[#2FB2C9] mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 9V3h12v6M6 9h12a2 2 0 012 2v6H4v-6a2 2 0 012-2zm4 5h4"/>
              </svg>
              <div>
                <p class="font-semibold text-slate-800">Fax</p>
                <p class="text-sm text-slate-600">+1-000-0000</p>
              </div>
            </div>
          </div>

          <div class="my-6 border-t border-slate-200"></div>

          <!-- Bottom links + copyright: full width -->
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <li><a href="#" class="hover:text-slate-900">About us</a></li>
              <li><a href="#" class="hover:text-slate-900">Contact</a></li>
              <li><a href="#" class="hover:text-slate-900">Privacy policy</a></li>
              <li><a href="#" class="hover:text-slate-900">Sitemap</a></li>
              <li><a href="#" class="hover:text-slate-900">Terms of Use</a></li>
            </ul>
            <p class="text-sm text-slate-600">© 2000–2021, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    `;
  }

  attachEvents() {
    const form = document.getElementById('newsletter-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = (document.getElementById('newsletter-email') || {}).value?.trim();
        if (!email) return;
        console.log('Newsletter:', email);
        form.reset();
      });
    }
  }
}
