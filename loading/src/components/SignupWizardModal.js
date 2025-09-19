// src/components/SignupWizardModal.js
export class SignupWizardModal {
  constructor({ onDone, initialPlan = null } = {}) {
    this.onDone = onDone; // callback al finalizar (opcional)
    this.state = {
      step: 1, // 1..4
      org: {
        name: "",
        industry: "",
        size: "",
        country: "",
        city: "",
        phone: "",
        website: "",
      },
      admin: { first: "", last: "", email: "", pass: "", pass2: "" },
      plan: initialPlan, // 'starter' | 'pro' | 'enterprise'
      accept: { terms: false, privacy: false, marketing: false },
    };
    this.mount();
  }

  // ------- Public API -------
  open(step = 1) {
    this.goTo(step);
    const root = document.getElementById("signup-modal");
    root?.classList.remove("hidden");
    document.documentElement.style.overflow = "hidden";
    setTimeout(() => root?.querySelector("[data-autofocus]")?.focus(), 0);
  }
  close() {
    const root = document.getElementById("signup-modal");
    root?.classList.add("hidden");
    document.documentElement.style.overflow = "";
  }

  // ------- DOM -------
  mount() {
    if (document.getElementById("signup-modal")) return;
    document.body.insertAdjacentHTML("beforeend", this.template());
    this.attachEvents();
  }

  template() {
    return `
<div id="signup-modal" class="fixed inset-0 z-[110] hidden">
  <div data-backdrop class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

  <div class="relative mx-auto my-6 w-[96%] max-w-3xl">
    <div class="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
      <button id="signup-close" aria-label="Cerrar"
              class="absolute right-4 top-4 text-slate-500 hover:text-slate-700">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <!-- Header + Stepper -->
      <div class="px-6 pt-6 sm:px-8">
        <ol class="flex items-center justify-between gap-4 text-sm">
          ${this.stepItem(1, "Tu Organización")}
          <div class="h-px flex-1 bg-slate-200 mx-2 hidden sm:block"></div>
          ${this.stepItem(2, "Administrador")}
          <div class="h-px flex-1 bg-slate-200 mx-2 hidden sm:block"></div>
          ${this.stepItem(3, "Plan")}
          <div class="h-px flex-1 bg-slate-200 mx-2 hidden sm:block"></div>
          ${this.stepItem(4, "Confirmación")}
        </ol>
        <h2 class="mt-6 text-3xl font-extrabold text-slate-900">
          Cuéntanos sobre <span class="text-[#FF2E63]">tu empresa</span>
        </h2>
        <p class="mt-1 mb-4 text-slate-600">
          Información básica para personalizar tu experiencia con Human ATS
        </p>
      </div>

      <!-- Content -->
      <div class="px-6 sm:px-8 pb-6">
        <!-- STEP 1: Organización -->
        <section data-step="1" class="space-y-6">
          <div>
            <h3 class="font-semibold text-lg text-slate-900">Datos empresariales</h3>
            <p class="text-sm text-slate-600">Información básica de tu organización</p>
            <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                ${this.input({
                  id: "org-name",
                  label: "Nombre de la empresa *",
                  ph: "Ej. Tech Solutions México",
                  req: true,
                  auto: true,
                })}
                <p class="mt-1.5 text-xs text-amber-600">Este será el nombre que verán tus empleados</p>
              </div>
              ${this.select({
                id: "org-industry",
                label: "Industria/Sector *",
                req: true,
                options: [
                  ["", "Selecciona tu industria"],
                  ["it", "Tecnología / IT"],
                  ["mkt", "Marketing"],
                  ["fin", "Finanzas"],
                  ["edu", "Educación"],
                  ["oth", "Otra"],
                ],
              })}
              ${this.select({
                id: "org-size",
                label: "Tamaño de la empresa *",
                req: true,
                options: [
                  ["", "¿Cuántos empleados tienen?"],
                  ["1-10", "1-10"],
                  ["11-50", "11-50"],
                  ["51-200", "51-200"],
                  ["201-500", "201-500"],
                  ["500+", "500+"],
                ],
              })}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200">
            <h3 class="font-semibold text-lg text-slate-900">Datos de contacto</h3>
            <p class="text-sm text-slate-600">Ubicación y contacto de tu empresa</p>
            <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              ${this.select({
                id: "org-country",
                label: "País *",
                req: true,
                options: [
                  ["", "Selecciona tu país"],
                  ["MX", "México"],
                  ["US", "Estados Unidos"],
                  ["ES", "España"],
                  ["AR", "Argentina"],
                  ["CO", "Colombia"],
                ],
              })}
              ${this.input({
                id: "org-city",
                label: "Ciudad *",
                ph: "Ciudad de México",
                req: true,
              })}
              <div class="sm:col-span-1">
                <label class="block text-sm font-medium text-slate-700">Teléfono de contacto (opcional)</label>
                <div class="mt-1 flex">
                  <select id="org-phone-prefix"
                          class="w-24 rounded-l-md border border-slate-300 bg-white h-10 px-2">
                    <option value="+52">MX +52</option>
                    <option value="+1">US +1</option>
                    <option value="+34">ES +34</option>
                    <option value="+57">CO +57</option>
                  </select>
                  <input id="org-phone" type="tel" placeholder="55 1234 5678"
                         class="flex-1 rounded-r-md border border-l-0 border-slate-300 h-10 px-3" />
                </div>
                <p class="mt-1 text-xs text-slate-500">Para soporte prioritario</p>
              </div>
              ${this.input({
                id: "org-web",
                label: "Sitio web (opcional)",
                ph: "https://miempresa.com",
              })}
            </div>
          </div>
        </section>

        <!-- STEP 2: Administrador -->
        <section data-step="2" class="hidden space-y-6">
          <div>
            <h3 class="font-semibold text-lg text-slate-900">Información personal</h3>
            <p class="text-sm text-slate-600">Datos básicos de tu cuenta de administrador</p>
            <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              ${this.input({
                id: "ad-first",
                label: "Nombre *",
                ph: "Juan Carlos",
                req: true,
                auto: true,
              })}
              ${this.input({
                id: "ad-last",
                label: "Apellido *",
                ph: "Pérez García",
                req: true,
              })}
              <div class="sm:col-span-2">
                ${this.input({
                  id: "ad-email",
                  label: "Email corporativo *",
                  ph: "jperez@techsolutions.mx",
                  req: true,
                  type: "email",
                })}
                <p class="mt-1.5 text-xs text-amber-600">Este será tu usuario para ingresar al sistema</p>
                <p class="text-xs text-slate-500">Recomendamos usar tu email corporativo oficial</p>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200">
            <h3 class="font-semibold text-lg text-slate-900">Configuración de seguridad</h3>
            <p class="text-sm text-slate-600">Crea una contraseña segura para tu cuenta</p>

            <div class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              ${this.input({
                id: "ad-pass",
                label: "Contraseña *",
                type: "password",
                req: true,
              })}
              ${this.input({
                id: "ad-pass2",
                label: "Confirmar contraseña *",
                type: "password",
                req: true,
              })}
            </div>

            <!-- Requisitos -->
            <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              ${this.reqItem("req-12", "Mínimo 12 caracteres")}
              ${this.reqItem("req-upper", "Al menos 1 mayúscula")}
              ${this.reqItem("req-lower", "Al menos 1 minúscula")}
              ${this.reqItem("req-number", "Al menos 1 número")}
              ${this.reqItem("req-symbol", "Al menos 1 carácter especial")}
              ${this.reqItem("req-pii", "No contener info personal")}
            </div>
          </div>
        </section>

        <!-- STEP 3: Plan -->
        <section data-step="3" class="hidden">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            ${this.planCard("starter", "$49", "Starter", [
              "Hasta 5 usuarios",
              "10 vacantes activas",
              "500 candidatos máx.",
              "Pipeline básico",
              "Reportes básicos",
              "Soporte por email",
            ])}
            ${this.planCard(
              "pro",
              "$149",
              "Professional",
              [
                "Hasta 20 usuarios",
                "50 vacantes activas",
                "Candidatos ilimitados",
                "IA básica integrada",
                "Campos personalizables",
                "Soporte por chat 24h",
              ],
              true
            )}
            ${this.planCard("enterprise", "Contacta", "Enterprise", [
              "Usuarios ilimitados",
              "IA avanzada + predictiva",
              "API GraphQL completa",
              "SSO/SAML integration",
              "Soporte dedicado 24/7",
              "SLA 99.9% / Compliance",
            ])}
          </div>
          <p class="mt-3 text-center text-sm text-slate-500">Puedes cambiar de plan más adelante.</p>
        </section>

        <!-- STEP 4: Confirmación -->
        <section data-step="4" class="hidden">
          <h3 class="font-semibold text-lg text-slate-900">Acuerdos y confirmación</h3>
          <p class="text-sm text-slate-600">Antes de crear tu cuenta, confirma lo siguiente:</p>

          <div class="mt-4 space-y-3 text-sm">
            <label class="flex items-start gap-3">
              <input id="acc-terms" type="checkbox" class="mt-1 w-4 h-4 rounded border-slate-300">
              <span>Acepto las <a href="#" class="text-[#0F5676] underline">Condiciones de uso</a>.</span>
            </label>
            <label class="flex items-start gap-3">
              <input id="acc-privacy" type="checkbox" class="mt-1 w-4 h-4 rounded border-slate-300">
              <span>Acepto el <a href="#" class="text-[#0F5676] underline">Aviso de Privacidad</a> y autorizo el tratamiento de mis datos.</span>
            </label>
            <label class="flex items-start gap-3">
              <input id="acc-marketing" type="checkbox" class="mt-1 w-4 h-4 rounded border-slate-300">
              <span>Deseo recibir comunicaciones, tips y novedades (opcional).</span>
            </label>
          </div>

          <div class="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
            <p class="font-medium mb-1">Resumen</p>
            <ul class="space-y-1">
              <li><span class="text-slate-500">Empresa:</span> <span data-sum="org-name">—</span></li>
              <li><span class="text-slate-500">Administrador:</span> <span data-sum="admin-name">—</span></li>
              <li><span class="text-slate-500">Plan:</span> <span data-sum="plan">—</span></li>
            </ul>
          </div>
        </section>
      </div>

      <!-- Footer nav -->
      <div class="px-6 sm:px-8 py-4 bg-slate-50 flex items-center justify-between">
        <button id="btn-back" class="px-4 py-2 rounded-lg ring-1 ring-slate-300 text-slate-700">
          ← Atrás
        </button>
        <button id="btn-next"
                class="px-5 py-2.5 rounded-lg bg-[#FF2E63] text-white font-semibold disabled:opacity-50">
          Continuar →
        </button>
      </div>
    </div>
  </div>
</div>`;
  }

  // ------- Sub-templates -------
  stepItem(n, label) {
    return `
      <li data-stepper="${n}" class="flex items-center gap-2">
        <span class="grid place-items-center w-8 h-8 rounded-full text-white font-semibold
                     bg-slate-300" data-stepper-badge>${n}</span>
        <span class="hidden sm:block text-slate-600">${label}</span>
      </li>`;
  }
  input({ id, label, ph = "", req = false, type = "text", auto = false }) {
    return `
      <div>
        <label for="${id}" class="block text-sm font-medium text-slate-700">${label}</label>
        <input id="${id}" ${auto ? "data-autofocus" : ""} type="${type}" ${
      req ? "required" : ""
    }
               placeholder="${ph}"
               class="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 bg-white
                      focus:outline-none focus:ring-2 focus:ring-[#0F5676]" />
      </div>`;
  }
  select({ id, label, options = [], req = false }) {
    const opts = options
      .map(([v, t]) => `<option value="${v}">${t}</option>`)
      .join("");
    return `
      <div>
        <label class="block text-sm font-medium text-slate-700">${label}</label>
        <select id="${id}" ${req ? "required" : ""}
                class="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 bg-white
                       focus:outline-none focus:ring-2 focus:ring-[#0F5676]">
          ${opts}
        </select>
      </div>`;
  }
  reqItem(id, text) {
    return `
      <p id="${id}" class="flex items-center gap-2">
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-slate-300" data-dot></span>
        <span>${text}</span>
      </p>`;
  }
  planCard(key, price, title, bullets = [], recommended = false) {
    const rec = recommended
      ? `<span class="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5 rounded-full bg-rose-600 text-white">RECOMENDADO</span>`
      : "";
    return `
    <article data-plan="${key}"
      class="relative rounded-2xl ring-1 ring-slate-200 bg-white p-5 cursor-pointer hover:shadow-lg">
      ${rec}
      <h4 class="text-slate-900 font-bold text-xl">${title}</h4>
      <p class="text-3xl font-extrabold mt-2">${price}</p>
      <p class="text-xs text-slate-500">USD/mes</p>
      <ul class="mt-3 space-y-2 text-sm text-slate-700">
        ${bullets
          .map(
            (b) =>
              `<li class="flex gap-2"><span>✅</span><span>${b}</span></li>`
          )
          .join("")}
      </ul>
      <button class="mt-4 w-full px-4 py-2 rounded-lg ring-1 ring-slate-300 select-none">Seleccionar</button>
    </article>`;
  }

  // ------- Logic -------
  goTo(step) {
    this.state.step = Math.max(1, Math.min(4, step));
    // toggle sections
    document.querySelectorAll("#signup-modal [data-step]").forEach((sec) => {
      sec.classList.toggle(
        "hidden",
        +sec.getAttribute("data-step") !== this.state.step
      );
    });
    // stepper tint
    document.querySelectorAll("#signup-modal [data-stepper]").forEach((li) => {
      const n = +li.getAttribute("data-stepper");
      const badge = li.querySelector("[data-stepper-badge]");
      if (n < this.state.step) {
        badge.classList.remove("bg-slate-300");
        badge.classList.add("bg-emerald-500");
      } else if (n === this.state.step) {
        badge.classList.remove("bg-slate-300");
        badge.classList.add("bg-[#FF2E63]");
      } else {
        badge.classList.add("bg-slate-300");
        badge.classList.remove("bg-emerald-500", "bg-[#FF2E63]");
      }
    });
    this.updateFooter();
    this.refreshSummary();
  }

  updateFooter() {
    const back = document.getElementById("btn-back");
    const next = document.getElementById("btn-next");
    back.disabled = this.state.step === 1;
    next.textContent = this.state.step === 4 ? "Crear cuenta →" : "Continuar →";
    next.disabled = !this.canContinue(this.state.step);
  }

  canContinue(step) {
    if (step === 1) {
      const r = this.valStep1();
      return r.ok;
    }
    if (step === 2) {
      const r = this.valStep2();
      this.paintReqDots(r.reqs || {});
      return r.ok;
    }
    if (step === 3) return !!this.state.plan;
    if (step === 4) return this.state.accept.terms && this.state.accept.privacy;
    return true;
  }

  valStep1() {
    const name = this.v("#org-name"),
      ind = this.v("#org-industry"),
      size = this.v("#org-size");
    const country = this.v("#org-country"),
      city = this.v("#org-city");
    // opcionales:
    const phone =
      (this.v("#org-phone-prefix") || "") + " " + (this.v("#org-phone") || "");
    const website = this.v("#org-web");
    const ok = name && ind && size && country && city;
    if (ok)
      this.state.org = {
        name,
        industry: ind,
        size,
        country,
        city,
        phone: phone.trim(),
        website,
      };
    return { ok };
  }

  valStep2() {
    const first = this.v("#ad-first"),
      last = this.v("#ad-last"),
      email = this.v("#ad-email"),
      pass = this.v("#ad-pass"),
      pass2 = this.v("#ad-pass2");
    const reqs = {
      "req-12": pass.length >= 12,
      "req-upper": /[A-Z]/.test(pass),
      "req-lower": /[a-z]/.test(pass),
      "req-number": /\d/.test(pass),
      "req-symbol": /[^A-Za-z0-9]/.test(pass),
      "req-pii":
        !first || (first && !pass.toLowerCase().includes(first.toLowerCase())),
    };
    const passOk = Object.values(reqs).every(Boolean) && pass === pass2;
    const ok = first && last && email && passOk;
    if (ok) this.state.admin = { first, last, email, pass, pass2 };
    return { ok, reqs };
  }

  paintReqDots(map) {
    Object.entries(map).forEach(([id, ok]) => {
      const dot = document.getElementById(id)?.querySelector("[data-dot]");
      if (!dot) return;
      dot.classList.toggle("bg-emerald-500", ok);
      dot.classList.toggle("bg-slate-300", !ok);
    });
  }

  // helper pequeño
  setSum(sel, text) {
    const el = document.querySelector(`#signup-modal ${sel}`);
    if (el) el.textContent = text;
  }

  refreshSummary() {
    const fullName = [this.state.admin.first, this.state.admin.last]
      .filter(Boolean)
      .join(" ");

    this.setSum('[data-sum="org-name"]', this.state.org.name || "—");
    this.setSum('[data-sum="admin-name"]', fullName || "—");
    this.setSum(
      '[data-sum="plan"]',
      this.state.plan ? String(this.state.plan).toUpperCase() : "—"
    );
  }

  v(sel) {
    return (document.querySelector(sel)?.value || "").trim();
  }

  // ------- Events -------
  attachEvents() {
    const root = document.getElementById("signup-modal");
    if (!root) return;

    // close
    root
      .querySelector("#signup-close")
      ?.addEventListener("click", () => this.close());
    root
      .querySelector("[data-backdrop]")
      ?.addEventListener("click", () => this.close());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });

    // footer nav
    root.querySelector("#btn-back")?.addEventListener("click", () => {
      this.goTo(this.state.step - 1);
    });
    root.querySelector("#btn-next")?.addEventListener("click", () => {
      if (!this.canContinue(this.state.step)) return;
      if (this.state.step < 4) this.goTo(this.state.step + 1);
      else this.finish();
    });

    // validate-on-input (live enabling)
    root.addEventListener("input", (e) => {
      const t = e.target;
      if (!t) return;
      // step 3 plan select via click handled below
      if (t.id === "acc-terms") this.state.accept.terms = t.checked;
      if (t.id === "acc-privacy") this.state.accept.privacy = t.checked;
      if (t.id === "acc-marketing") this.state.accept.marketing = t.checked;
      this.updateFooter();
    });

    // plan selection
    root.querySelectorAll("[data-plan]").forEach((card) => {
      const choose = () => {
        root.querySelectorAll("[data-plan]").forEach((c) => {
          c.classList.remove("ring-rose-500", "shadow-rose-200", "shadow-lg");
          c.classList.add("ring-slate-200");
        });
        card.classList.remove("ring-slate-200");
        card.classList.add("ring-rose-500", "shadow-rose-200", "shadow-lg");
        this.state.plan = card.getAttribute("data-plan");
        this.updateFooter();
      };
      card.addEventListener("click", choose);
      card.querySelector("button")?.addEventListener("click", (e) => {
        e.stopPropagation();
        choose();
      });
    });

    // live password rules
    const passInputs = ["#ad-pass", "#ad-pass2", "#ad-first"].map((sel) =>
      root.querySelector(sel)
    );
    passInputs.forEach((inp) =>
      inp?.addEventListener("input", () => {
        const r = this.valStep2();
        this.paintReqDots(r.reqs || {});
        this.updateFooter();
      })
    );
  }

  finish() {
    // Aquí harías la llamada a tu API de registro; por ahora mockeamos:
    console.log("Signup payload:", this.state);
    if (this.onDone) this.onDone(this.state);
    this.close();
    // Redirigir al dashboard o a pantalla de verificación:
    window.location.href = `${window.location.origin}/menu/dashboard`;
  }
}
