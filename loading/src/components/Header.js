import { AuthModal } from "./AuthModal";
import { SignupWizardModal } from "./SignupWizardModal";

// src/components/Header.js
export class Header {
  constructor(authMoadal = AuthModal,  signupModalClass = SignupWizardModal) {
    this.authModal = new authMoadal();
    this.signupModal = new signupModalClass({
      onDone: (data)=>console.log("Cuenta creada:", data)
    });
    this.render();
  }

  render() {
    return `
      <header class="relative z-50">
        <div class="w-screen px-0">
          <!-- PÍLDORA -->
          <div
            class="relative grid grid-cols-[auto_1fr_auto] items-center
                   h-16 px-4 sm:px-6
                   rounded-none w-full bg-[#0F5676] text-white
                   shadow-[0_8px_28px_rgba(16,24,40,.18)] ring-1 ring-black/5
                   overflow-hidden">

            <!-- Logo -->
            <a href="#home" class="flex items-center gap-3 shrink-0">
              <img src="/assets/images/fortia_logo2.png"
                   alt="Human Fortia"
                   class="fortia-logo h-8 w-auto max-w-none object-contain select-none pointer-events-none" />
            </a>

            <!-- NAV centrado -->
            <nav class="hidden md:flex items-center justify-center gap-10">
              <a href="#features" class="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#plans" class="text-white/90 hover:text-white transition-colors">Plans</a>
              <a href="#contact" class="text-white/90 hover:text-white transition-colors">Contact</a>
            </nav>

            <!-- Acciones -->
            <div class="hidden md:flex items-center gap-3">
              <!-- Idioma -->
              <button class="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors">
                <span class="text-sm">ENG</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0s4 3 4 9-4 9-4 9-4-3-4-9 4-9 4-9zm-9 9h18"/>
                </svg>
              </button>

              <!-- Iniciar sesión (borde claro) -->
              <a href="#login"
                 class="px-4 py-1.5 rounded-xl border border-white/45 text-white hover:bg-white/10 transition-colors">
                Iniciar Sesión
              </a>

              <!-- Regístrate (rosa) -->
              <a href="#signup"
                 class="px-4 py-1.5 rounded-xl bg-[#FF2E63] hover:brightness-110 transition-colors">
                Regístrate
              </a>
            </div>

            <!-- Botón móvil -->
            <button id="mobile-menu-btn"
              class="md:hidden justify-self-end inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-white/10">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <!-- Bisel/gradiente inferior para el look del mockup -->
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-3
                        bg-gradient-to-b from-white/0 to-black/20 opacity-20"></div>
          </div>

          <!-- Menú móvil -->
          <div id="mobile-menu" class="md:hidden hidden mt-2
                                      bg-[#0F5676] text-white rounded-2xl p-4 shadow-lg">
            <nav class="flex flex-col gap-1">
              <a href="#features" class="px-3 py-2 rounded-lg hover:bg-white/10">Features</a>
              <a href="#plans" class="px-3 py-2 rounded-lg hover:bg-white/10">Plans</a>
              <a href="#contact" class="px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
            </nav>
            <div class="mt-3 flex items-center gap-3">
              <button class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">
                <span class="text-sm">ENG</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0s4 3 4 9-4 9-4 9-4-3-4-9 4-9 4-9zm-9 9h18"/>
                </svg>
              </button>
              <a href="#login" class="px-4 py-2 rounded-lg border border-white/40 hover:bg-white/10">Iniciar Sesión</a>
              <a href="#signup" class="px-4 py-2 rounded-lg bg-[#FF2E63] hover:brightness-110">Regístrate</a>
            </div>
          </div>
        </div>
      </header>
    `;
  }
  attachEvents() {
    // Toggle menú móvil
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // --- Abrir modal de login (desktop + móvil) ---
    const loginLinks = document.querySelectorAll(
      'a[href="#login"], [data-open-login]'
    );
    const openLogin = (e) => {
      e.preventDefault();
      // cierra el menú móvil si estaba abierto
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
      // abre el modal (vista email por defecto)
      if (this.authModal) {
        this.authModal.open("email");
      } else {
        console.warn("AuthModal no inicializado");
      }
    };
    loginLinks.forEach((link) => link.addEventListener("click", openLogin));

     const signupLinks = document.querySelectorAll('a[href="#signup"], [data-open-signup]');
    const openSignup = (e) => {
      e.preventDefault();
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) mobileMenu.classList.add("hidden");
      this.signupModal?.open(1);
    };
    signupLinks.forEach((link) => link.addEventListener("click", openSignup));
    

    // --- Smooth scroll para el resto de anchors internos (excepto #login / #signup) ---
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href === "#login" || href === "#signup") return; // se manejan aparte o no existen

        if (href && href.startsWith("#")) {
          e.preventDefault();
          const id = href.substring(1);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }
        }
      });
    });
  }
}
