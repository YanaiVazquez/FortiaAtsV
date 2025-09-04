// src/views/NuevaVacanteView.js
export class NuevaVacanteView {
  constructor({ onCancel } = {}) {
    this.onCancel = onCancel || (() => history.back());
    this.step = 1;
    this.maxStep = 4;
    // estado básico (puedes ampliar libremente)
    this.state = {
      titulo: "",
      depto: "",
      prioridad: "media",
      justificacion: "",
      descripcion: "",
      ubicacion: "",
      tipoEmpleo: "",
      experiencia: "",
      salarioMin: "",
      salarioMax: "",
      moneda: "MXN",
      requisitos: ["Licenciatura en área relacionada", "Experiencia en desarrollo de software"],
      beneficios: ["Seguro de gastos médicos", "Trabajo remoto opcional"]
    };
    this.render();
    this.bind();
  }

  // --------------- Render raíz ---------------
  render() {
    const el = document.getElementById("main-content");
    if (!el) return;

    el.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="mx-auto max-w-7xl">
          <!-- Migas + Título -->
          <div class="mb-4 text-sm text-slate-500 dark:text-gray-400">
            <a class="hover:underline" href="#">Dashboard</a>
            <span class="mx-2">›</span>
            <a class="hover:underline" href="#">Nueva Vacante</a>
          </div>

          <header class="mb-6">
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
              <span class="inline-flex h-6 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">NEW</span>
              Crear Nueva Vacante
            </h1>
            <p class="text-slate-600 dark:text-gray-300 mt-1">Utiliza nuestro asistente para crear vacantes efectivas que atraigan talento.</p>
          </header>

          ${this.stepper()}

          <!-- Contenido del paso -->
          <section class="mt-6">
            ${this.stepContent()}
          </section>

          <!-- Footer acciones -->
          <footer class="mt-6 flex items-center justify-between gap-3 border-t dark:border-gray-700 pt-4">
            <div class="flex items-center gap-2">
              <button id="btnCancel" class="rounded-xl px-3 py-2 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700">Cancelar</button>
              <button id="btnDraft" class="rounded-xl px-3 py-2 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300">Guardar Borrador</button>
            </div>
            <div class="flex items-center gap-2">
              <button id="btnPrev" ${this.step === 1 ? "disabled" : ""} class="rounded-xl px-3 py-2 ring-1 ring-black/5 dark:ring-white/10 text-slate-700 dark:text-gray-300 bg-white dark:bg-gray-800 disabled:opacity-50">
                ← Anterior
              </button>
              <button id="btnNext" class="rounded-xl px-4 py-2 bg-[#004176] hover:bg-[#003a6b] text-white transition-colors">
                ${this.step < this.maxStep ? "Continuar →" : "Finalizar"}
              </button>
            </div>
          </footer>
        </div>
      </div>
    `;
  }

  // --------------- Stepper ---------------
  stepper() {
    const steps = [
      { n: 1, t: "Información Básica", s: "Datos del puesto" },
      { n: 2, t: "Detalles Puesto", s: "Descripción y salario" },
      { n: 3, t: "Requisitos", s: "Habilidades y beneficios" },
      { n: 4, t: "Vista Previa", s: "Revisar y publicar" }
    ];
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3">
        <ol class="grid grid-cols-4 gap-2">
          ${steps
            .map(({ n, t, s }) => {
              const current = n === this.step;
              const done = n < this.step;
              const baseCircle =
                "h-8 w-8 grid place-items-center rounded-full text-sm font-semibold ring-1 ring-black/5 dark:ring-white/10";
              const circle = done
                ? `${baseCircle} bg-emerald-500 text-white`
                : current
                ? `${baseCircle} bg-[#004176] dark:bg-blue-600 text-white`
                : `${baseCircle} bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-300`;
              const bar =
                n < 4
                  ? `<div class="hidden md:block absolute right-[-10%] top-1/2 h-[2px] w-[20%] -translate-y-1/2 ${done ? "bg-emerald-500" : current ? "bg-[#004176] dark:bg-blue-600" : "bg-slate-200 dark:bg-gray-600"}"></div>`
                  : "";
              return `
                <li class="relative">
                  ${bar}
                  <div class="flex items-center gap-3">
                    <span class="${circle}">${n}</span>
                    <div>
                      <p class="text-sm font-medium ${current ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-gray-300"}">${t}</p>
                      <p class="text-xs text-slate-500 dark:text-gray-400">${s}</p>
                    </div>
                  </div>
                </li>
              `;
            })
            .join("")}
        </ol>
      </div>
    `;
  }

  // --------------- Contenido por paso ---------------
  stepContent() {
    switch (this.step) {
      case 1:
        return this.paso1();
      case 2:
        return this.paso2();
      case 3:
        return this.paso3();
      case 4:
      default:
        return this.paso4();
    }
  }

  // Paso 1: Información básica
  paso1() {
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-5 md:p-6">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-1">Paso 1: Información Básica</h2>
        <p class="text-sm text-slate-600 dark:text-gray-300 mb-5">Define los aspectos fundamentales de la vacante</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Título del puesto -->
          <div>
            <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Título del puesto</label>
            <input id="titulo" type="text" placeholder="Ej: Desarrollador Frontend Senior…"
              class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
              value="${this.escape(this.state.titulo)}"/>
            <p class="text-xs text-slate-500 dark:text-gray-400 mt-1">Sé específico. Un buen título atrae a los candidatos correctos.</p>
          </div>

          <!-- Justificación -->
          <div>
            <div class="flex items-center justify-between">
              <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Justificación de la vacante *</label>
              <span class="text-xs text-slate-400 dark:text-gray-500"><span id="justCount">0</span>/20 caracteres</span>
            </div>
            <textarea id="justificacion" rows="5" placeholder="Explica por qué es necesario este puesto…"
              class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">${this.escape(
                this.state.justificacion
              )}</textarea>
            <p class="text-xs text-slate-500 dark:text-gray-400 mt-1">Mínimo 20 caracteres.</p>
          </div>

          <!-- Departamento -->
          <div>
            <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Departamento *</label>
            <select id="depto"
              class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white">
              ${this.option(this.state.depto, "", "Selecciona el departamento")}
              ${this.option(this.state.depto, "Desarrollo de Software")}
              ${this.option(this.state.depto, "Diseño")}
              ${this.option(this.state.depto, "Infraestructura")}
              ${this.option(this.state.depto, "Analytics")}
            </select>
          </div>

          <!-- Prioridad -->
          <div>
            <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Prioridad de contratación *</label>
            <div class="mt-2 grid grid-cols-3 gap-2">
              ${this.priorityButton("alta")}
              ${this.priorityButton("media")}
              ${this.priorityButton("baja")}
            </div>
            <div class="mt-2 text-xs text-slate-600 dark:text-gray-300">
              <span class="inline-flex items-center gap-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 ring-1 ring-yellow-200 dark:ring-yellow-800">
                <span class="text-yellow-600 dark:text-yellow-400">•</span> Media: proceso estándar, 4–6 semanas.
              </span>
            </div>
          </div>
        </div>

        <!-- Tips -->
        <div class="mt-6 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 ring-1 ring-emerald-200 dark:ring-emerald-800 p-4">
          <p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">💡 Tips para un mejor resultado</p>
          <ul class="mt-2 text-sm text-emerald-800 dark:text-emerald-300 list-disc pl-5 space-y-1">
            <li>Usa títulos específicos y descriptivos</li>
            <li>Incluye el nivel de experiencia en el título</li>
            <li>La justificación debe ser clara y objetiva</li>
          </ul>
        </div>
      </div>
    `;
  }

  // Paso 2: Detalles del puesto
  paso2() {
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-5 md:p-6">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-1">Paso 2: Detalles del Puesto</h2>
        <p class="text-sm text-slate-600 dark:text-gray-300 mb-5">Define características específicas del puesto.</p>

        <div class="space-y-6">
          <!-- Descripción -->
          <div>
            <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Descripción del puesto *</label>
            <textarea id="descripcion" rows="4" placeholder="Describe responsabilidades, objetivos y cómo contribuirá…"
              class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">${this.escape(
                this.state.descripcion
              )}</textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Ubicación</label>
              <input id="ubicacion" type="text" placeholder="Ciudad, Estado / Remoto"
                class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
                value="${this.escape(this.state.ubicacion)}"/>
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Tipo de empleo *</label>
              <select id="tipoEmpleo"
                class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">
                ${this.option(this.state.tipoEmpleo, "", "Selecciona tipo")}
                ${this.option(this.state.tipoEmpleo, "Tiempo completo")}
                ${this.option(this.state.tipoEmpleo, "Medio tiempo")}
                ${this.option(this.state.tipoEmpleo, "Contrato")}
              </select>
            </div>
            <div>
              <label class="text-sm font-medium text-slate-700 dark:text-gray-300">Experiencia requerida *</label>
              <select id="experiencia"
                class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 outline-none focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">
                ${this.option(this.state.experiencia, "", "Selecciona nivel")}
                ${this.option(this.state.experiencia, "0-2 años")}
                ${this.option(this.state.experiencia, "3-5 años")}
                ${this.option(this.state.experiencia, "6+ años")}
              </select>
            </div>
          </div>

          <!-- Compensación -->
          <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 p-4 bg-slate-50 dark:bg-gray-700">
            <p class="text-sm font-semibold text-slate-800 dark:text-white mb-3">Compensación (opcional pero recomendado)</p>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label class="text-sm text-slate-700 dark:text-gray-300">Salario mínimo</label>
                <input id="salarioMin" type="number" class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white"
                  value="${this.escape(this.state.salarioMin)}"/>
              </div>
              <div>
                <label class="text-sm text-slate-700 dark:text-gray-300">Salario máximo</label>
                <input id="salarioMax" type="number" class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white"
                  value="${this.escape(this.state.salarioMax)}"/>
              </div>
              <div>
                <label class="text-sm text-slate-700 dark:text-gray-300">Moneda</label>
                <select id="moneda" class="mt-2 w-full rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white">
                  ${this.option(this.state.moneda, "MXN")}
                  ${this.option(this.state.moneda, "USD")}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Paso 3: Requisitos y beneficios
  paso3() {
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-5 md:p-6">
        <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-1">Paso 3: Requisitos y Beneficios</h2>
        <p class="text-sm text-slate-600 dark:text-gray-300 mb-5">Define requisitos específicos y beneficios de la vacante.</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Requisitos -->
          <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 p-4">
            <h3 class="font-semibold text-slate-800 dark:text-white mb-3">Requisitos del puesto</h3>
            <ul id="reqList" class="space-y-2 text-sm text-slate-700 dark:text-gray-300">
              ${this.state.requisitos.map((r) => `<li class="px-2 py-1 rounded bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white">${this.escape(r)}</li>`).join("")}
            </ul>
            <div class="mt-3 flex gap-2">
              <input id="reqInput" type="text" placeholder="Escribe un nuevo requisito…"
                class="flex-1 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">
              <button id="addReq" class="rounded-xl px-3 py-2 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300">Agregar</button>
            </div>
          </div>

          <!-- Beneficios -->
          <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 p-4">
            <h3 class="font-semibold text-slate-800 dark:text-white mb-3">Beneficios y ventajas</h3>
            <ul id="benList" class="space-y-2 text-sm text-slate-700 dark:text-gray-300">
              ${this.state.beneficios.map((b) => `<li class="px-2 py-1 rounded bg-slate-50 dark:bg-gray-700 text-slate-900 dark:text-white">${this.escape(b)}</li>`).join("")}
            </ul>
            <div class="mt-3 flex gap-2">
              <input id="benInput" type="text" placeholder="Escribe un nuevo beneficio…"
                class="flex-1 rounded-xl border border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-700 px-3 py-2 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-[#004176] dark:focus:ring-blue-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">
              <button id="addBen" class="rounded-xl px-3 py-2 ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Paso 4: Vista previa
  paso4() {
    const s = this.state;
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-5 md:p-6">
        <div class="rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] text-white p-4 mb-5 flex items-center justify-between">
          <p class="font-medium">Análisis de Completitud con IA</p>
          <span class="text-sm opacity-90">Analizando…</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-8">
            <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 p-5">
              <div class="flex items-center gap-3 mb-2">
                <span class="inline-flex rounded-full bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5">Media Prioridad</span>
              </div>
              <h3 class="text-xl font-semibold text-slate-900">${this.safe(s.titulo, "Desarrollador Frontend Senior")}</h3>
              <div class="mt-2 flex flex-wrap gap-3 text-slate-600 text-sm">
                <span>🏢 ${this.safe(s.depto, "Desarrollo de Software")}</span>
                <span>📍 ${this.safe(s.ubicacion, "Ciudad de México / Remoto")}</span>
                <span>🕒 ${this.safe(s.tipoEmpleo, "Tiempo completo")}</span>
                <span>👥 ${this.safe(s.experiencia, "3-5 años")}</span>
              </div>
              ${s.salarioMin || s.salarioMax ? `
                <p class="mt-2 text-emerald-700 font-semibold">
                  $ ${s.salarioMin || "—"} - ${s.salarioMax || "—"} ${s.moneda || "MXN"}
                </p>` : ""}

              <h4 class="mt-5 font-semibold text-slate-900">Descripción del Puesto</h4>
              <p class="text-slate-700 dark:text-gray-300 mt-1 whitespace-pre-wrap">${this.safe(s.descripcion, "Describe las responsabilidades principales…")}</p>

              <h4 class="mt-5 font-semibold text-slate-900">Requisitos del Puesto</h4>
              <ul class="mt-1 list-disc pl-5 text-slate-700 dark:text-gray-300 space-y-1">
                ${s.requisitos.map((r) => `<li>${this.escape(r)}</li>`).join("")}
              </ul>
            </article>
          </div>

          <!-- Rail derecho -->
          <aside class="lg:col-span-4 space-y-4">
            <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 p-4">
              <p class="font-semibold text-slate-900">Opciones de Publicación</p>
              <div class="mt-3 space-y-2 text-sm">
                <button class="w-full rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-50">Guardar Borrador</button>
                <button class="w-full rounded-xl ring-1 ring-[#004176]/20 bg-[#004176]/5 px-3 py-2 text-[#004176] hover:bg-[#004176]/10">Enviar para Aprobación</button>
                <button class="w-full rounded-xl bg-rose-600 text-white px-3 py-2 hover:opacity-95">Publicar Vacante</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  // --------------- Helpers UI ---------------
  priorityButton(level) {
    const labels = { alta: "Alta", media: "Media", baja: "Baja" };
    const active = this.state.prioridad === level;
    const base =
      "w-full rounded-xl px-3 py-2 text-center ring-1 ring-black/5 dark:ring-white/10";
    const styles = active
      ? "bg-[#004176] dark:bg-blue-600 text-white"
      : "bg-slate-50 dark:bg-gray-700 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-600";
    return `<button type="button" data-priority="${level}" class="${base} ${styles}">${labels[level]}</button>`;
  }

  option(current, value, label) {
    return `<option value="${value}" ${current === value ? "selected" : ""}>${label || value}</option>`;
  }

  escape(s = "") {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  }
  safe(val, fallback) { return this.escape(val || fallback); }

  // --------------- Eventos ---------------
  bind() {
    // footer
    document.getElementById("btnCancel")?.addEventListener("click", () => this.onCancel());
    document.getElementById("btnDraft")?.addEventListener("click", () => {
      this.collect(); console.log("Borrador guardado:", this.state);
      alert("Borrador guardado (demo).");
    });
    document.getElementById("btnPrev")?.addEventListener("click", () => this.go(this.step - 1));
    document.getElementById("btnNext")?.addEventListener("click", () => {
      if (this.step < this.maxStep) {
        if (!this.validate(this.step)) return;
        this.collect();
        this.go(this.step + 1);
      } else {
        this.collect();
        //console.log("Finalizar → payload listo:", this.state);
        alert("Su informacíon se guardo correctamente.");
      }
    });

    // step-specific bindings
    if (this.step === 1) {
      const just = document.getElementById("justificacion");
      const count = () => (document.getElementById("justCount").textContent = String(just.value.length));
      just?.addEventListener("input", count);
      count();
      // prioridad
      document.querySelectorAll("[data-priority]").forEach((btn) =>
        btn.addEventListener("click", () => {
          this.state.prioridad = btn.dataset.priority;
          this.render(); this.bind();
        })
      );
    }

    if (this.step === 3) {
      const reqInput = document.getElementById("reqInput");
      const benInput = document.getElementById("benInput");
      document.getElementById("addReq")?.addEventListener("click", () => {
        if (reqInput.value.trim()) {
          this.state.requisitos.push(reqInput.value.trim());
          this.render(); this.bind();
        }
      });
      document.getElementById("addBen")?.addEventListener("click", () => {
        if (benInput.value.trim()) {
          this.state.beneficios.push(benInput.value.trim());
          this.render(); this.bind();
        }
      });
    }
  }

  collect() {
    // lee inputs visibles del paso actual (simple y robusto)
    if (this.step === 1) {
      this.state.titulo = document.getElementById("titulo")?.value || this.state.titulo;
      this.state.depto = document.getElementById("depto")?.value || this.state.depto;
      this.state.justificacion = document.getElementById("justificacion")?.value || this.state.justificacion;
    }
    if (this.step === 2) {
      this.state.descripcion = document.getElementById("descripcion")?.value || this.state.descripcion;
      this.state.ubicacion = document.getElementById("ubicacion")?.value || this.state.ubicacion;
      this.state.tipoEmpleo = document.getElementById("tipoEmpleo")?.value || this.state.tipoEmpleo;
      this.state.experiencia = document.getElementById("experiencia")?.value || this.state.experiencia;
      this.state.salarioMin = document.getElementById("salarioMin")?.value || this.state.salarioMin;
      this.state.salarioMax = document.getElementById("salarioMax")?.value || this.state.salarioMax;
      this.state.moneda = document.getElementById("moneda")?.value || this.state.moneda;
    }
    // paso 3 se actualiza on-click al agregar (ya está en state)
  }

  validate(step) {
    // validaciones muy básicas (puedes endurecerlas)
    if (step === 1) {
      const t = document.getElementById("titulo")?.value.trim();
      const d = document.getElementById("depto")?.value.trim();
      const j = document.getElementById("justificacion")?.value.trim();
      if (!t) return this.toast("El título es obligatorio.");
      if (!d) return this.toast("Selecciona un departamento.");
      if (!j || j.length < 20) return this.toast("La justificación debe tener al menos 20 caracteres.");
    }
    if (step === 2) {
      const desc = document.getElementById("descripcion")?.value.trim();
      const tipo = document.getElementById("tipoEmpleo")?.value.trim();
      const exp = document.getElementById("experiencia")?.value.trim();
      if (!desc) return this.toast("La descripción es obligatoria.");
      if (!tipo) return this.toast("Selecciona el tipo de empleo.");
      if (!exp) return this.toast("Selecciona la experiencia requerida.");
    }
    return true;
  }

  toast(msg) {
    alert(msg); // reemplázalo luego por tu toast
    return false;
  }

  go(n) {
    this.step = Math.min(Math.max(1, n), this.maxStep);
    this.render();
    this.bind();
  }
}
