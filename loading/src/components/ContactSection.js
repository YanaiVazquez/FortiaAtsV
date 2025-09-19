// src/components/ContactSection.js
export class ContactSection {
  constructor() { this.render(); }

  render() {
    return `
      <section id="contact" class="bg-[#EAF2FA] py-16 lg:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            <!-- Mosaico ilustrado (SVG inline, sin assets) -->
            <div class="justify-self-center">
              <div class="border-2 border-[#0F5676] rounded-sm p-0.5 bg-white inline-block">
               <img src="/assets/images/Captura.png" alt="" class="w-[520px] max-w-full rounded-sm border-2 border-[#0F5676]" />
              </div>
            </div>

            <!-- Formulario -->
            <div>
              <h2 class="text-3xl md:text-4xl leading-tight font-extrabold text-[#0F5676]">
                Let’s level up your<br/> company, together
              </h2>
              <p class="mt-2 text-slate-600">
                You can reach us anytime via
                <a href="mailto:support@humanfortia.com" class="text-[#0F5676] font-semibold underline underline-offset-2">
                  support@humanfortia.com
                </a>
              </p>

              <form id="lead-form" class="mt-6 space-y-4">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-slate-700">Name</label>
                  <input type="text" name="name" required
                         class="mt-1 w-full h-10 px-3 rounded-md border border-[#0F5676]/30 bg-white text-slate-800 placeholder-slate-400
                                focus:outline-none focus:ring-2 focus:ring-[#0F5676] focus:border-[#0F5676]"
                         placeholder="Your name" />
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required
                         class="mt-1 w-full h-10 px-3 rounded-md border border-[#0F5676]/30 bg-white text-slate-800 placeholder-slate-400
                                focus:outline-none focus:ring-2 focus:ring-[#0F5676]"
                         placeholder="you@company.com" />
                </div>

                <!-- Phone group -->
                <div>
                  <label class="block text-sm font-medium text-slate-700">Phone number</label>
                  <div class="mt-1 flex gap-2">
                    <select name="country" class="h-10 px-3 rounded-md border border-[#0F5676]/30 bg-white text-slate-800
                                                 focus:outline-none focus:ring-2 focus:ring-[#0F5676]">
                      <option value="US">US</option>
                      <option value="MX">MX</option>
                      <option value="CA">CA</option>
                    </select>
                    <input type="tel" name="phone"
                           class="flex-1 h-10 px-3 rounded-md border border-[#0F5676]/30 bg-white text-slate-800 placeholder-slate-400
                                  focus:outline-none focus:ring-2 focus:ring-[#0F5676]"
                           placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <!-- How can we help -->
                <div>
                  <label class="block text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea name="message" rows="4"
                            class="mt-1 w-full px-3 py-2 rounded-md border border-[#0F5676]/30 bg-white text-slate-800 placeholder-slate-400
                                   focus:outline-none focus:ring-2 focus:ring-[#0F5676]"
                            placeholder="Tell us a little about the project..."></textarea>
                </div>

                <!-- Services -->
                <fieldset class="mt-2">
                  <legend class="block text-sm font-medium text-slate-700 mb-2">Services</legend>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                    ${this.cb('Website design')}
                    ${this.cb('Content creation')}
                    ${this.cb('UX design')}
                    ${this.cb('Strategy & consulting')}
                    ${this.cb('User research')}
                    ${this.cb('Other', 'other')}
                  </div>
                  <input id="otherText" type="text" placeholder="Please specify..."
                         class="mt-3 hidden w-full h-10 px-3 rounded-md border border-[#0F5676]/30 bg-white text-slate-800
                                focus:outline-none focus:ring-2 focus:ring-[#0F5676]" />
                </fieldset>

                <!-- CTA -->
                <button type="submit"
                        class="w-full h-11 rounded-md bg-[#FF2E63] text-white font-semibold hover:brightness-110">
                  Get started
                </button>

                <p id="lead-ok" class="hidden text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md p-3">
                  Thanks! We received your request and we'll contact you shortly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  cb(label, id = '') {
    const inputId = id ? `svc-${id}` : `svc-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return `
      <label for="${inputId}" class="inline-flex items-center gap-2 text-slate-700 cursor-pointer">
        <input id="${inputId}" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-[#0F5676] focus:ring-[#0F5676]">
        <span class="text-sm">${label}</span>
      </label>`;
  }

  attachEvents() {
    const form = document.getElementById('lead-form');
    const other = document.getElementById('svc-other');
    const otherText = document.getElementById('otherText');
    const ok = document.getElementById('lead-ok');

    if (other && otherText) {
      other.addEventListener('change', () => {
        otherText.classList.toggle('hidden', !other.checked);
        if (!other.checked) otherText.value = '';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        // Aquí puedes hacer fetch() a tu API
        console.log('Lead form:', data);
        ok?.classList.remove('hidden');
        form.reset();
        if (otherText) otherText.classList.add('hidden');
        setTimeout(() => ok?.classList.add('hidden'), 4000);
      });
    }
  }
}
