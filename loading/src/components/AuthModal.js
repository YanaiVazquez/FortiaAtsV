// src/components/AuthModal.js
export class AuthModal {
  constructor(redirectUrl = 'http://localhost:5173/menu/dashboard') {
    this.redirectUrl = redirectUrl;
    this.mount();
  }

  // --- helpers ---
  goToDashboard() {
    const url = this.redirectUrl.startsWith('http')
      ? this.redirectUrl
      : `${window.location.origin}${this.redirectUrl}`;
    window.location.href = url;
  }

  // Inserta el modal una sola vez en <body>
  mount() {
    if (document.getElementById("auth-modal")) return;
    document.body.insertAdjacentHTML("beforeend", this.template());
    this.attachEvents();
  }

  // --- UI ---
  template() {
    return `
<div id="auth-modal" class="fixed inset-0 z-[100] hidden">
  <div data-auth-backdrop class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
  <div class="relative mx-auto my-8 w-[92%] max-w-md" role="dialog" aria-modal="true" aria-labelledby="auth-title">
    <div class="relative bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
      <button id="auth-close" aria-label="Cerrar" class="absolute right-4 top-4 text-slate-500 hover:text-slate-700">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <!-- EMAIL/PASSWORD -->
      <div id="auth-view-email" class="p-6 sm:p-7">
        <div class="mb-4 grid place-items-center">
          <div class="w-10 h-10 rounded-full bg-[#0F5676] grid place-items-center text-white">
            <i class="fa-solid fa-user-astronaut"></i>
          </div>
        </div>

        <h2 id="auth-title" class="text-center text-2xl font-extrabold text-[#0B3E58]">
          Te damos la bienvenida<br/> a Fortia Human
        </h2>
        <p class="mt-2 text-center text-sm text-slate-600">
          Puedes contactarnos a través de
          <a href="mailto:hi@untitledui.com" class="text-[#0F5676] font-semibold">hi@untitledui.com</a>
        </p>

        <form id="auth-form" class="mt-6 space-y-4" novalidate>
          <div>
            <label class="block text-sm font-medium text-slate-700">Correo electrónico</label>
            <input id="auth-email" type="email" required placeholder="you@company.com"
                   class="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 bg-white
                          focus:outline-none focus:ring-2 focus:ring-[#0F5676]" />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700">Contraseña</label>
            <input id="auth-pass" type="password" required placeholder="••••••••"
                   class="mt-1 w-full h-10 px-3 rounded-md border border-slate-300 bg-white
                          focus:outline-none focus:ring-2 focus:ring-[#0F5676]" />
          </div>

          <div class="flex items-center justify-between">
            <label class="inline-flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input id="auth-remember" type="checkbox"
                     class="w-4 h-4 rounded border-slate-300 text-[#0F5676] focus:ring-[#0F5676]" />
              Recordarme
            </label>
            <a href="#" class="text-sm text-slate-600 hover:text-slate-900">Olvidé mi contraseña</a>
          </div>

          <button type="submit"
                  class="w-full h-11 rounded-md bg-[#0F5676] text-white font-semibold hover:brightness-110">
            Iniciar Sesión
          </button>
        </form>

        <button id="auth-alt"
                class="mt-3 w-full h-10 rounded-md bg-slate-100 text-[#0F5676] font-medium hover:bg-slate-200">
          Iniciar de otra forma
        </button>

        <p class="mt-4 text-center text-xs text-slate-500">
          Al continuar, aceptas las <a href="#" class="underline">Condiciones de uso</a> de Fortia.
          Conoce nuestra <a href="#" class="underline">Política de privacidad</a>.
        </p>

        <p class="mt-2 text-center text-sm text-slate-600">
          Aún no tienes cuenta, <a href="#" class="text-[#FF2E63] font-semibold">Regístrate</a>
        </p>
      </div>

      <!-- PROVEEDORES -->
      <div id="auth-view-providers" class="hidden p-6 sm:p-7">
        <div class="flex items-center justify-between mb-2">
          <button id="auth-back" class="inline-flex items-center gap-2 text-[#0F5676]">
            <i class="fa-solid fa-angle-left"></i><span class="font-medium">Volver</span>
          </button>
        </div>

        <h3 class="text-2xl font-extrabold text-[#0B3E58]">Ir a Fortia</h3>
        <p class="mt-1 text-sm text-slate-600">Accede con el método que prefieras:</p>

        <div class="mt-5 grid gap-3">
          ${this.btnProv("apple", "Usar Apple")}
          ${this.btnProv("google", "Usar Google")}
          ${this.btnProv("facebook", "Usar Facebook")}
          ${this.btnProv("microsoft", "Usar Microsoft")}
          ${this.btnProv("mail", "Usar mi correo", "auth-use-email")}
          ${this.btnProv("work", "Usar mi correo del trabajo")}
          ${this.btnProv("linkedin", "Usar LinkedIn")}
        </div>

        <p class="mt-4 text-center text-xs text-slate-500">
          Al continuar, aceptas las <a href="#" class="underline">Condiciones de uso</a> y la
          <a href="#" class="underline">Política de privacidad</a>.
        </p>

        <p class="mt-2 text-center text-sm text-slate-600">
          ¿Ya eres miembro?
          <button id="auth-go-login" class="text-[#0F5676] font-semibold underline">Iniciar sesión</button>
        </p>
      </div>

    </div>
  </div>
</div>`;
  }

  btnProv(id, label, extraId = "") {
    const fa = {
      apple: "fa-brands fa-apple",
      google: "fa-brands fa-google",
      facebook: "fa-brands fa-facebook",
      microsoft: "fa-brands fa-microsoft",
      mail: "fa-regular fa-envelope",
      work: "fa-solid fa-briefcase",
      linkedin: "fa-brands fa-linkedin",
    }[id] || "fa-solid fa-circle";

    return `
<button ${extraId ? `id="${extraId}"` : ""} data-provider="${id}"
  class="h-11 w-full rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium
         ring-1 ring-slate-200 flex items-center justify-center gap-3">
  <i class="${fa} text-lg"></i>
  <span>${label}</span>
</button>`;
  }

  // --- Control ---
  open(step = "email") {
    const root = document.getElementById("auth-modal");
    if (!root) return;
    this.show(step);
    root.classList.remove("hidden");
    document.documentElement.style.overflow = "hidden";
    if (step === "email") setTimeout(() => document.getElementById("auth-email")?.focus(), 0);
  }

  close() {
    const root = document.getElementById("auth-modal");
    if (!root) return;
    root.classList.add("hidden");
    document.documentElement.style.overflow = "";
  }

  show(step) {
    const viewEmail = document.getElementById("auth-view-email");
    const viewProv = document.getElementById("auth-view-providers");
    if (!viewEmail || !viewProv) return;
    if (step === "providers") {
      viewEmail.classList.add("hidden");
      viewProv.classList.remove("hidden");
    } else {
      viewProv.classList.add("hidden");
      viewEmail.classList.remove("hidden");
    }
  }

  // --- Eventos ---
  attachEvents() {
    const root = document.getElementById("auth-modal");
    if (!root) return;

    // Cerrar
    root.querySelector("#auth-close")?.addEventListener("click", () => this.close());
    root.querySelector("[data-auth-backdrop]")?.addEventListener("click", () => this.close());
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") this.close(); });

    // Vistas
    root.querySelector("#auth-alt")?.addEventListener("click", () => this.show("providers"));
    root.querySelector("#auth-back")?.addEventListener("click", () => this.show("email"));
    root.querySelector("#auth-go-login")?.addEventListener("click", () => this.show("email"));
    root.querySelector("#auth-use-email")?.addEventListener("click", () => this.show("email"));

    // Submit (redirige al dashboard)
    root.querySelector("#auth-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      // Aquí podrías validar o llamar a tu API; por ahora redirigimos directo:
      this.goToDashboard();
    });

    // Proveedores (redirige al dashboard en este mock)
    root.querySelectorAll("[data-provider]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const provider = btn.getAttribute("data-provider");
        if (provider === "mail") { this.show("email"); return; }
        // En integración real harías OAuth; por ahora:
        this.goToDashboard();
      });
    });
  }
}
