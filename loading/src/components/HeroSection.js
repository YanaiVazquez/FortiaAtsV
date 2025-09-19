// src/components/HeroSection.js
export class HeroSection {
  constructor() {
    // 4 slides: cambia textos e imágenes si lo necesitas
    this.slides = [
      {
        title: "Llega a más talento\nen menos tiempo",
        desc:
          "Publica tus vacantes en múltiples plataformas con un solo clic.\n" +
          "Atrae a los mejores candidatos sin esfuerzo y sin perder tiempo.",
        img: "/assets/images/captura.png",
      },
      {
        title: "Automatiza la\ncomunicación con IA",
        desc:
          "Deja que el Asistente de WhatsApp responda por ti. Atiende dudas,\n" +
          "agenda entrevistas y da seguimiento en segundos.",
        img: "/assets/images/baner1.png",
      },
      {
        title: "Selecciona al mejor\nsin complicaciones",
        desc:
          "Evalúa perfiles con herramientas inteligentes y reportes detallados.\n" +
          "Toma decisiones basadas en datos y mejora tu proceso de selección.",
        img: "/assets/images/baner2.png",
      },
      {
        title: "Optimiza cada paso\ndel reclutamiento",
        desc:
          "Agiliza contrataciones con IA y automatización de tareas. Reduce\n" +
          "costos y tiempos, enfocándote en lo que realmente importa.",
        img: "/assets/images/baner3.jpg",
      },
    ];

    this.current = 0;
    this.autoplayMs = 6000;
    this.timer = null;

    this.showArrows = false; // sin flechas
    this.showDots = true; // puntos visibles (si quieres)
    this.pauseOnHover = false; // ⬅ desactiva pausa por hover

    this.render();
  }

  render() {
    const slidesHTML = this.slides
      .map(
        (s) => `
        <section class="min-w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 items-center py-10 lg:py-16">
            <!-- Texto -->
            <div class="text-center lg:text-left px-6">
              <h1 class="whitespace-pre-line font-extrabold leading-tight text-[#0B3E58]
                         text-[34px] md:text-[44px] lg:text-[56px]">
                ${s.title}
              </h1>
              <p class="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 whitespace-pre-line">
                ${s.desc}
              </p>

              <div class="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <!-- Play video -->
                <button class="btn-video inline-flex items-center gap-3 text-slate-700 hover:text-slate-900">
                  <span class="inline-grid place-items-center w-10 h-10 rounded-full bg-[#0F5676] text-white shadow-md">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                  <span class="font-medium">Play video</span>
                </button>

                <!-- CTA principal -->
                <button class="btn-start inline-flex items-center justify-center h-12 px-6 rounded-lg
                               bg-[#FF2E63] text-white font-semibold shadow-[0_10px_30px_rgba(255,46,99,.25)]
                               hover:brightness-110 transition">
                  Get Started
                  <svg class="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6l6 6-6 6"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Imagen dentro de un marco de altura fija por breakpoint -->
            <div class="relative flex justify-center lg:justify-end items-center px-6">
              <div class="relative w-full
                          h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px]">
                <img src="${s.img}" alt=""
                     class="absolute inset-0 w-full h-full object-contain select-none pointer-events-none" />
              </div>

              
            </div>
          </div>
        </section>`
      )
      .join("");

    // Bullets superpuestos (no generan espacio extra abajo)
    const dots = this.slides
      .map(
        (_, i) => `
      <button class="hero-dot w-2.5 h-2.5 rounded-full ${
        i === 0 ? "bg-[#0F5676]" : "bg-slate-300"
      }"
              aria-label="Ir al slide ${i + 1}" data-index="${i}"></button>`
      )
      .join("");

    const arrows = `
  <button id="hero-prev" class="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 ring-1 ring-slate-200 shadow items-center justify-center hover:bg-white">
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
  <button id="hero-next" class="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 ring-1 ring-slate-200 shadow items-center justify-center hover:bg-white">
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
    </svg>
  </button>
`;

    return `
  <section id="home" class="bg-white" role="region" aria-roledescription="carousel">
    <div class="relative overflow-hidden">
      <div id="hero-track" class="flex transition-transform duration-700 ease-out">
        ${slidesHTML}
      </div>

      ${
        this.showDots
          ? `
        <div class="absolute left-6 bottom-4 flex items-center gap-2 z-30">
          ${dots}
        </div>`
          : ""
      }

      ${this.showArrows ? arrows : ""}
    </div>
  </section>
`;
  }
  attachEvents() {
    const track = document.getElementById("hero-track");
    if (!track) return;

    const update = () => {
      track.style.transform = `translateX(${-this.current * 100}%)`;
      document.querySelectorAll(".hero-dot").forEach((dot) => {
        const idx = Number(dot.getAttribute("data-index"));
        dot.classList.toggle("bg-[#0F5676]", idx === this.current);
        dot.classList.toggle("bg-slate-300", idx !== this.current);
      });
    };

    const next = () => {
      this.current = (this.current + 1) % this.slides.length;
      update();
    };
    const prev = () => {
      this.current =
        (this.current - 1 + this.slides.length) % this.slides.length;
      update();
    };

    // ✅ asegúrate de no dejar timers colgados
    const stopAuto = () => {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    };
    const startAuto = () => {
      stopAuto(); // limpia por si acaso
      this.timer = setInterval(next, this.autoplayMs);
    };

    // Flechas (solo si las renderizaste)
    if (this.showArrows) {
      document.getElementById("hero-next")?.addEventListener("click", () => {
        stopAuto();
        next();
        startAuto();
      });
      document.getElementById("hero-prev")?.addEventListener("click", () => {
        stopAuto();
        prev();
        startAuto();
      });
    }

    // Dots
    if (this.showDots) {
      document.querySelectorAll(".hero-dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          stopAuto();
          this.current = Number(dot.getAttribute("data-index"));
          update();
          startAuto();
        });
      });
    }

    // Pausa en hover (opcional)
    const section = document.getElementById("home");
    if (this.pauseOnHover) {
      section?.addEventListener("mouseenter", stopAuto);
      section?.addEventListener("mouseleave", startAuto);
    }

    // Pausa cuando la pestaña no está visible (evita timers fantasma)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAuto();
      else startAuto();
    });

    // Swipe móvil
    let x0 = null;
    section?.addEventListener(
      "touchstart",
      (e) => (x0 = e.touches[0].clientX),
      { passive: true }
    );
    section?.addEventListener(
      "touchend",
      (e) => {
        if (x0 == null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 50) {
          stopAuto();
          dx < 0 ? next() : prev();
          startAuto();
        }
        x0 = null;
      },
      { passive: true }
    );

    // CTAs
    section
      ?.querySelectorAll(".btn-start")
      .forEach((b) =>
        b.addEventListener("click", () =>
          console.log("CTA: Get Started (slide", this.current + 1, ")")
        )
      );
    section
      ?.querySelectorAll(".btn-video")
      .forEach((b) =>
        b.addEventListener("click", () =>
          console.log("CTA: Play video (slide", this.current + 1, ")")
        )
      );

    // init
    update();
    startAuto(); // ✅ arranca el autoplay
  }
}
