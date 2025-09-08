// src/views/VacantesView.js
export class VacantesView {
  constructor() {
    this.state = {
      view: "list", // list | kanban | analytics
      query: "",
      status: "all",
      dept: "all",
      recruiter: "all",
      sort: "recent",
      insightsTick: 0,
      isMaximized: false, // Estado de maximización
      // Paginación
      currentPage: 1,
      itemsPerPage: 10,
      jobs: [
        {
          id: "1",
          title: "Senior React Developer",
          location: "Madrid",
          salaryMin: 45000,
          salaryMax: 55000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 87,
          appsDelta: +12,
          pipeline: [23, 12, 5, 2],
          publishedAgo: "Hace 5 días",
          sources: ["LinkedIn", "Portal"],
          recruiter: "Ana García",
        },
        {
          id: "2",
          title: "Product Manager",
          location: "Barcelona",
          salaryMin: 50000,
          salaryMax: 65000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Producto",
          status: "ACTIVA",
          apps: 43,
          appsDelta: +8,
          pipeline: [15, 8, 3, 1],
          publishedAgo: "Hace 3 días",
          sources: ["LinkedIn"],
          recruiter: "Carlos López",
        },
        {
          id: "3",
          title: "UX/UI Designer",
          location: "Remoto",
          salaryMin: 35000,
          salaryMax: 45000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Diseño",
          status: "BORRADOR",
          apps: 0,
          appsDelta: 0,
          pipeline: [0, 0, 0, 0],
          publishedAgo: "Sin publicar",
          sources: [],
          recruiter: "María Rodríguez",
        },
        {
          id: "4",
          title: "DevOps Engineer",
          location: "Valencia",
          salaryMin: 40000,
          salaryMax: 50000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "PAUSADA",
          apps: 62,
          appsDelta: -4,
          pipeline: [32, 18, 4, 1],
          publishedAgo: "Hace 12 días",
          sources: ["LinkedIn", "Portal", "Indeed"],
          recruiter: "Luis Martín",
        },
        {
          id: "5",
          title: "Frontend Developer",
          location: "Sevilla",
          salaryMin: 38000,
          salaryMax: 48000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 34,
          appsDelta: +5,
          pipeline: [12, 8, 2, 1],
          publishedAgo: "Hace 2 días",
          sources: ["LinkedIn", "Portal"],
          recruiter: "Ana García",
        },
        {
          id: "6",
          title: "Data Scientist",
          location: "Madrid",
          salaryMin: 55000,
          salaryMax: 70000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 76,
          appsDelta: +15,
          pipeline: [28, 15, 6, 3],
          publishedAgo: "Hace 1 semana",
          sources: ["LinkedIn", "Indeed"],
          recruiter: "Carlos López",
        },
        {
          id: "7",
          title: "Marketing Manager",
          location: "Barcelona",
          salaryMin: 42000,
          salaryMax: 52000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Marketing",
          status: "ACTIVA",
          apps: 29,
          appsDelta: +3,
          pipeline: [10, 6, 2, 0],
          publishedAgo: "Hace 4 días",
          sources: ["LinkedIn"],
          recruiter: "María Rodríguez",
        },
        {
          id: "8",
          title: "Backend Developer",
          location: "Remoto",
          salaryMin: 48000,
          salaryMax: 58000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "PAUSADA",
          apps: 45,
          appsDelta: -2,
          pipeline: [20, 12, 3, 1],
          publishedAgo: "Hace 10 días",
          sources: ["Portal", "Indeed"],
          recruiter: "Luis Martín",
        },
        {
          id: "9",
          title: "Graphic Designer",
          location: "Valencia",
          salaryMin: 28000,
          salaryMax: 38000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Diseño",
          status: "BORRADOR",
          apps: 0,
          appsDelta: 0,
          pipeline: [0, 0, 0, 0],
          publishedAgo: "Sin publicar",
          sources: [],
          recruiter: "María Rodríguez",
        },
        {
          id: "10",
          title: "QA Engineer",
          location: "Madrid",
          salaryMin: 35000,
          salaryMax: 45000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 52,
          appsDelta: +7,
          pipeline: [18, 10, 4, 2],
          publishedAgo: "Hace 6 días",
          sources: ["LinkedIn", "Portal"],
          recruiter: "Ana García",
        },
        {
          id: "11",
          title: "Sales Manager",
          location: "Bilbao",
          salaryMin: 40000,
          salaryMax: 55000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Ventas",
          status: "ACTIVA",
          apps: 38,
          appsDelta: +4,
          pipeline: [14, 8, 3, 1],
          publishedAgo: "Hace 3 días",
          sources: ["LinkedIn"],
          recruiter: "Carlos López",
        },
        {
          id: "12",
          title: "HR Specialist",
          location: "Remoto",
          salaryMin: 32000,
          salaryMax: 42000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Recursos Humanos",
          status: "BORRADOR",
          apps: 0,
          appsDelta: 0,
          pipeline: [0, 0, 0, 0],
          publishedAgo: "Sin publicar",
          sources: [],
          recruiter: "María Rodríguez",
        },
        {
          id: "13",
          title: "Mobile Developer",
          location: "Barcelona",
          salaryMin: 42000,
          salaryMax: 52000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 67,
          appsDelta: +9,
          pipeline: [22, 14, 5, 2],
          publishedAgo: "Hace 1 semana",
          sources: ["LinkedIn", "Portal", "Indeed"],
          recruiter: "Luis Martín",
        },
        {
          id: "14",
          title: "Content Manager",
          location: "Madrid",
          salaryMin: 30000,
          salaryMax: 40000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Marketing",
          status: "PAUSADA",
          apps: 25,
          appsDelta: -1,
          pipeline: [12, 6, 1, 0],
          publishedAgo: "Hace 8 días",
          sources: ["LinkedIn"],
          recruiter: "Ana García",
        },
        {
          id: "15",
          title: "System Administrator",
          location: "Valencia",
          salaryMin: 38000,
          salaryMax: 48000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 41,
          appsDelta: +6,
          pipeline: [16, 9, 3, 1],
          publishedAgo: "Hace 5 días",
          sources: ["Portal", "Indeed"],
          recruiter: "Carlos López",
        },
        {
          id: "16",
          title: "Business Analyst",
          location: "Remoto",
          salaryMin: 45000,
          salaryMax: 55000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Producto",
          status: "BORRADOR",
          apps: 0,
          appsDelta: 0,
          pipeline: [0, 0, 0, 0],
          publishedAgo: "Sin publicar",
          sources: [],
          recruiter: "María Rodríguez",
        },
        {
          id: "17",
          title: "Customer Success Manager",
          location: "Sevilla",
          salaryMin: 35000,
          salaryMax: 45000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Ventas",
          status: "ACTIVA",
          apps: 33,
          appsDelta: +2,
          pipeline: [11, 7, 2, 1],
          publishedAgo: "Hace 4 días",
          sources: ["LinkedIn"],
          recruiter: "Luis Martín",
        },
        {
          id: "18",
          title: "UI/UX Researcher",
          location: "Madrid",
          salaryMin: 40000,
          salaryMax: 50000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Diseño",
          status: "PAUSADA",
          apps: 28,
          appsDelta: -3,
          pipeline: [13, 5, 1, 0],
          publishedAgo: "Hace 9 días",
          sources: ["LinkedIn", "Portal"],
          recruiter: "Ana García",
        },
        {
          id: "19",
          title: "Full Stack Developer",
          location: "Barcelona",
          salaryMin: 50000,
          salaryMax: 60000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Tecnología",
          status: "ACTIVA",
          apps: 89,
          appsDelta: +18,
          pipeline: [31, 18, 7, 3],
          publishedAgo: "Hace 2 días",
          sources: ["LinkedIn", "Portal", "Indeed"],
          recruiter: "Carlos López",
        },
        {
          id: "20",
          title: "Project Manager",
          location: "Remoto",
          salaryMin: 48000,
          salaryMax: 58000,
          currency: "EUR",
          type: "Tiempo completo",
          department: "Producto",
          status: "ACTIVA",
          apps: 56,
          appsDelta: +11,
          pipeline: [19, 12, 4, 2],
          publishedAgo: "Hace 1 semana",
          sources: ["LinkedIn"],
          recruiter: "María Rodríguez",
        },
      ],
    };

    // -------- Kanban (candidatos) --------
    this.stagesDef = [
      { key: 0, label: "Aplicado", color: "blue" },
      { key: 1, label: "Screening", color: "amber" },
      { key: 2, label: "Entrevista", color: "violet" },
      { key: 3, label: "Oferta", color: "emerald" },
      { key: 4, label: "Contratado", color: "teal" },
    ];

    this.kanban = {
      items: [], // candidatos
      q: "", // búsqueda
      jobFilter: "all", // filtro de vacante
    };

    // crea candidatos demo a partir de tus jobs/pipelines
    this.seedCandidateBoard();

    // orden inicial por columna (simple: incremental)
    const byStatus = { ACTIVA: 0, BORRADOR: 0, PAUSADA: 0 };
    this.state.jobs.forEach(
      (j) => (j.order = byStatus[j.status] = byStatus[j.status] + 1000)
    );

    // Propiedades para la modal de candidatos
    this.currentJob = null;
    this.candidates = [];

    this.injectKanbanStyles();
    this.injectMaximizeStyles();
    this.render();
    this.bindStatic();
    this.updateMetrics();
    this.refreshView();
  }
  // --- MODAL: Detalle de vacante ---
  openJobModal(job) {
    this.currentJob = job;
    // Header
    document.getElementById("jmTitle").textContent = job.title;
    document.getElementById("jmDept").textContent = job.department;
    document.getElementById("jmStatus").textContent = job.status;
    document.getElementById("jmApps").textContent = this.n(job.apps);
    // "Hace X días" -> número (fallback 0)
    const days = parseInt(String(job.publishedAgo).replace(/\D/g, "")) || 0;
    document.getElementById("jmDaysOpen").textContent = days;

    // Info básica
    document.getElementById("jmTitleInput").value = job.title;
    document.getElementById("jmDeptInput").value = job.department;
    document.getElementById("jmLocInput").value = job.location;
    document.getElementById("jmSalMin").value = job.salaryMin || "";
    document.getElementById("jmSalMax").value = job.salaryMax || "";
    document.getElementById("jmCurr").value = job.currency || "";
    document.getElementById("jmType").value = job.type || "";
    document.getElementById("jmDesc").textContent = "Sin descripción";

    // Requisitos, skills, beneficios (mock por ahora)
    const req = [
      "Licenciatura en área relacionada",
      "3+ años de experiencia",
      "Metodologías ágiles",
      "Inglés intermedio-avanzado",
    ];
    const skills = ["JavaScript", "React", "Node.js", "SQL", "Git"];
    const ben = [
      "Seguro de gastos médicos",
      "Vales de despensa",
      "Esquema híbrido",
      "Capacitación continua",
    ];

    document.getElementById("jmReqList").innerHTML = req
      .map((x) => `<li>${x}</li>`)
      .join("");
    document.getElementById("jmSkills").innerHTML = skills
      .map(
        (s) =>
          `<span class="px-2 py-1 text-xs rounded bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">${s}</span>`
      )
      .join("");
    document.getElementById("jmBenList").innerHTML = ben
      .map((x) => `<li>✓ ${x}</li>`)
      .join("");

    // Estadísticas – pipeline
    const stages = [
      "Aplicados",
      "En Screening",
      "En Entrevista",
      "Con Oferta",
      "Contratados",
    ];
    const counts = [
      ...job.pipeline,
      Math.round((job.pipeline?.[3] || 0) * 0.3),
    ];
    document.getElementById("jmStatsPipeline").innerHTML = counts
      .map(
        (n, i) => `
    <li class="flex items-center justify-between py-2">
      <span class="text-slate-600 dark:text-gray-300">${stages[i]}</span>
      <span class="font-semibold text-slate-900 dark:text-white">${this.n(
        n
      )}</span>
    </li>`
      )
      .join("");

    // métricas de tiempo (demo)
    const tm = [
      ["Tiempo promedio de contratación", "30 días"],
      ["Tiempo en Screening", "6 días"],
      ["Tiempo en Entrevistas", "8 días"],
    ];
    document.getElementById("jmTimeMetrics").innerHTML = tm
      .map(
        ([k, v]) =>
          `<li class="flex items-center justify-between"><span class="text-slate-700 dark:text-gray-300">${k}</span><span class="font-semibold text-slate-900 dark:text-white">${v}</span></li>`
      )
      .join("");

    // Conversiones
    const convs = [
      ["Aplicado → Screening", this._pct(counts[1], counts[0])],
      ["Screening → Entrevista", this._pct(counts[2], counts[1])],
      ["Entrevista → Oferta", this._pct(counts[3], counts[2])],
      ["Oferta → Contratado", this._pct(counts[4], counts[3])],
    ];
    document.getElementById("jmConv").innerHTML = convs
      .map(
        ([label, pct]) => `
    <div>
      <div class="flex items-center justify-between text-sm mb-1">
        <span class="text-slate-700 dark:text-gray-300">${label}</span><span class="font-medium text-slate-900 dark:text-white">${pct}%</span>
      </div>
      <div class="h-2 w-full bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <div class="h-full bg-[#004176] dark:bg-blue-500" style="width:${pct}%"></div>
      </div>
    </div>`
      )
      .join("");

    // Publicaciones
    const sources = job.sources?.length
      ? job.sources
      : ["LinkedIn", "Indeed", "Portal Interno"];
    document.getElementById("jmPubList").innerHTML = sources
      .map(
        (s) => `
      <li class="flex items-center justify-between py-3">
        <span class="text-slate-700 dark:text-gray-300">${s}</span>
        <button class="text-xs px-2 py-1 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700">Ver detalles</button>
      </li>`
      )
      .join("");

    // Historial (demo)
    const now = new Date();
    const hist = [
      [
        this._fmtDate(new Date(now.getTime() - 4 * 86400000)),
        "Vacante creada",
        "Ana García",
      ],
      [
        this._fmtDate(new Date(now.getTime() - 3 * 86400000)),
        "Descripción actualizada",
        "Carlos López",
      ],
      [
        this._fmtDate(new Date(now.getTime() - 2 * 86400000)),
        "Publicada en LinkedIn",
        "Sistema",
      ],
      [
        this._fmtDate(new Date(now.getTime() - 1 * 86400000)),
        "Estado cambiado a Activa",
        "María Rodríguez",
      ],
    ];
    document.getElementById("jmHist").innerHTML = hist
      .map(
        ([d, txt, who]) => `
      <li class="flex items-baseline justify-between gap-3">
        <span class="text-xs text-slate-500 dark:text-gray-400">${d}</span>
        <div class="flex-1 text-slate-700 dark:text-gray-300">${txt}</div>
        <span class="text-xs italic text-slate-500 dark:text-gray-400">por ${who}</span>
      </li>`
      )
      .join("");

    // Tabs default
    this._activateJobTab("info");

    // Abrir
    document.getElementById("jobModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    this._bindJobModalOnce();
  }
  closeJobModal() {
    document.getElementById("jobModal")?.classList.add("hidden");
    document.body.style.overflow = "";
    this.currentJob = null;
  }

  _bindJobModalOnce() {
    // close
    document
      .getElementById("closeJobModal")
      ?.addEventListener("click", () => this.closeJobModal(), { once: false });

    // tabs
    document.querySelectorAll(".jm-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.jmTab;
        this._activateJobTab(key);
      });
    });
  }

  _activateJobTab(key) {
    // tabs
    document.querySelectorAll(".jm-tab").forEach((b) => {
      b.classList.remove("active", "border-b-2", "border-white");
      b.classList.add("opacity-90");
      if (b.dataset.jmTab === key) {
        b.classList.add("active", "border-b-2", "border-white");
        b.classList.remove("opacity-90");
      }
    });
    // panels
    document.querySelectorAll("[data-jm-panel]").forEach((p) => {
      p.classList.toggle("hidden", p.dataset.jmPanel !== key);
    });
  }

  _pct(b, a) {
    return a ? Math.max(0, Math.min(100, Math.round((b / a) * 100))) : 0;
  }
  _fmtDate(d) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  injectKanbanStyles() {
    // Inyectar estilos CSS para el select del kanban
    if (!document.getElementById("kanban-select-styles")) {
      const style = document.createElement("style");
      style.id = "kanban-select-styles";
      style.textContent = `
        /* Estilos para el select del kanban */
        #kbJob {
          color-scheme: dark;
        }
        
        #kbJob option {
          background-color: #1f2937 !important;
          color: white !important;
          padding: 8px 12px !important;
          border: none !important;
        }
        
        #kbJob option:hover {
          background-color: #374151 !important;
        }
        
        #kbJob option:checked,
        #kbJob option:selected {
          background-color: #4f46e5 !important;
          color: white !important;
        }
        
        /* Soporte para Firefox */
        @-moz-document url-prefix() {
          #kbJob option {
            background-color: #1f2937;
            color: white;
          }
          
          #kbJob option:checked {
            background-color: #4f46e5;
          }
        }
        
        /* Para navegadores webkit */
        #kbJob::-webkit-scrollbar {
          width: 8px;
        }
        
        #kbJob::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.8);
          border-radius: 4px;
        }
        
        #kbJob::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.8);
          border-radius: 4px;
        }
        
        #kbJob::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 0.8);
        }
        
        /* Mejorar la apariencia en modo claro también */
        .light #kbJob {
          color-scheme: light;
        }
        
        .light #kbJob option {
          background-color: white !important;
          color: #1f2937 !important;
        }
        
        .light #kbJob option:hover {
          background-color: #f3f4f6 !important;
        }
        
        .light #kbJob option:checked,
        .light #kbJob option:selected {
          background-color: #4f46e5 !important;
          color: white !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  injectMaximizeStyles() {
    if (!document.getElementById("maximize-styles")) {
      const style = document.createElement("style");
      style.id = "maximize-styles";
      style.textContent = `
        /* Animación del botón de maximizar */
        #maximizeInsights {
          transition: all 0.2s ease;
        }
        
        #maximizeInsights:hover {
          transform: scale(1.1);
        }
        
        /* Estilos para vista maximizada */
        .maximized-view {
          transition: all 0.3s ease-in-out;
        }
      `;
      document.head.appendChild(style);
    }
  }

  render() {
    const el = document.getElementById("main-content");
    if (!el) return;

    el.innerHTML = `
      <div class="p-4 sm:p-6 md:p-8">
        <div class="mx-auto max-w-screen-2xl 2xl:max-w-[1600px]">
          <!-- Header -->
          <header class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
               Gestión de Vacantes
            </h1>
            <div class="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button id="btnReports" class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-50 inline-flex items-center gap-2 text-sm">📊 Reportes</button>
              <button id="btnConfig" class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-50 inline-flex items-center gap-2 text-sm">⚙️ Configurar</button>
              <button id="btnNew" class="rounded-xl bg-slate-900 text-white px-3.5 py-2 inline-flex items-center gap-2 hover:hover:bg-fortia-primary text-sm flex-1 sm:flex-none justify-center">➕ Nueva Vacante</button>
            </div>
          </header>

          <!-- Resumen de métricas -->
          <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center gap-3">
                <div class="text-2xl">📋</div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white" id="activeJobs">0</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Vacantes Activas</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center gap-3">
                <div class="text-2xl">👥</div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white" id="totalApps">0</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Aplicaciones</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center gap-3">
                <div class="text-2xl">⏱️</div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white" id="avgDays">0</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Días Promedio</div>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center gap-3">
                <div class="text-2xl">🎯</div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white" id="successRate">0%</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Tasa Éxito</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Filtros top -->
          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 md:p-4">
            <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <!-- Search: crece -->
              <div class="flex-1 min-w-full sm:min-w-[280px]">
                <div class="flex h-11 items-center gap-2 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3">
                  <span class="text-slate-500 dark:text-gray-400">🔎</span>
                  <input id="q" type="text"
                    placeholder="Buscar por posición, departamento..."
                    class="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 form-input" />
                </div>
              </div>

              <!-- Filtros en grid responsive -->
              <div class="grid grid-cols-2 sm:flex gap-3 w-full sm:w-auto">
                <select id="fStatus"
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todos los estados</option>
                  <option value="ACTIVA">Activa</option>
                  <option value="BORRADOR">Borrador</option>
                  <option value="PAUSADA">Pausada</option>
                </select>

                <select id="fDept"
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todos los departamentos</option>
                  <option>Tecnología</option>
                  <option>Producto</option>
                  <option>Diseño</option>
                  <option>Marketing</option>
                  <option>Ventas</option>
                  <option>Recursos Humanos</option>
                </select>

                <select id="fRec"
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm col-span-2 sm:col-span-1">
                  <option value="all">Todos los reclutadores</option>
                  <option>Ana García</option>
                  <option>Carlos López</option>
                  <option>María Rodríguez</option>
                  <option>Luis Martín</option>
                </select>

                <select id="fSort"
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="recent">Ordenar</option>
                  <option value="apps-desc">Apps (↓)</option>
                  <option value="apps-asc">Apps (↑)</option>
                </select>

                <!-- Botón Quitar filtros -->
                <button id="clearFilters" 
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Quitar filtros
                </button>

                <select id="fPerPage"
                  class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="5">5 por página</option>
                  <option value="10" selected>10 por página</option>
                  <option value="20">20 por página</option>
                  <option value="50">50 por página</option>
                </select>
              </div>
            </div>
          </section>
  


          <!-- Grid principal -->
          <section class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Izquierda -->
             <div class="xl:col-span-10 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <!-- Tabs de navegación -->
                <div class="flex flex-wrap items-center gap-2">
                  <button data-view="list" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors ${
                    this.state.view === "list"
                      ? "bg-slate-900 text-white"
                      : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"
                  }">📋 Lista</button>
                  <button data-view="kanban" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors ${
                    this.state.view === "kanban"
                      ? "bg-slate-900 text-white"
                      : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"
                  }">📊 Kanban</button>
                  <button data-view="analytics" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors ${
                    this.state.view === "analytics"
                      ? "bg-slate-900 text-white"
                      : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"
                  }">📈 Analytics</button>
                </div>
                
                <!-- Botón de maximizar -->
                <div class="flex items-center gap-2 border-l border-slate-200 dark:border-gray-600 pl-3 ml-2">
                  <span class="text-xs text-slate-500 dark:text-gray-400 font-medium">Vista:</span>
                  <button id="maximizeInsights" class="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-600 dark:text-blue-400 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30 transition-all duration-200 ring-1 ring-blue-200 dark:ring-blue-700/50 hover:ring-blue-300 dark:hover:ring-blue-600 hover:scale-105" title="Maximizar vista">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div id="viewContainer"></div>
            </div>

            <!-- Derecha: AI Insights -->
            <aside class="lg:col-span-2 order-first lg:order-last">
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-4 flex flex-col ring-1 ring-black/5 dark:ring-white/10">
                <!-- Header -->
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="relative w-9 h-9 rounded-lg bg-[#004176]/10 dark:bg-[#004176]/20 grid place-items-center text-[#004176] dark:text-blue-400">
                      <span class="text-lg">🤖</span>
                      <span class="absolute inline-flex h-9 w-9 rounded-lg animate-ping bg-[#004176]/10 dark:bg-[#004176]/20"></span>
                    </div>
                    <p class="font-medium text-slate-800 dark:text-white">AI Insights</p>
                  </div>

                  <button id="btnInsights"
                    class="rounded-lg border border-slate-200 dark:border-gray-600 px-2.5 py-1.5 text-xs text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 active:scale-[.98] transition"
                    aria-label="Actualizar insights"
                  >
                    <span class="inline-block">🔄</span> Actualizar
                  </button>
                </div>

                <!-- List (altura controlada + scroll) -->
                <div class="min-h-[180px] max-h-80 overflow-y-auto pr-1">
                  <ul id="insightsList" class="space-y-2 text-sm"></ul>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>

      <!-- Modal para ver candidatos -->
      <div id="candidatesModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <!-- Header de la modal -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white" id="modalJobTitle">Candidatos</h2>
              <p class="text-sm text-gray-500 dark:text-gray-400" id="modalJobInfo">Información del puesto</p>
            </div>
            <button id="closeCandidatesModal" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
          <!-- Modal: Detalle de vacante -->
          <div id="jobModal" class="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center p-4">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full h-[92vh] overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
              <!-- Header -->
              <header class="p-5 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <h2 id="jmTitle" class="text-xl md:text-2xl font-semibold truncate">Título</h2>
                    <div class="mt-2 flex flex-wrap items-center gap-2 text-[12px]">
                      <span id="jmDept" class="px-2 py-0.5 rounded-full bg-white/30 text-white font-medium">Depto</span>
                      <span id="jmStatus" class="px-2 py-0.5 rounded-full bg-white/30 text-white font-medium">Estado</span>
                      <span id="jmSeniority" class="px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">Media</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <div class="text-right">
                      <div id="jmApps" class="text-3xl font-bold leading-none">0</div>
                      <div class="text-xs opacity-80 -mt-1">CANDIDATOS</div>
                    </div>
                    <div class="h-10 w-px bg-white/40 mx-1"></div>
                    <div class="text-right">
                      <div id="jmDaysOpen" class="text-3xl font-bold leading-none">0</div>
                      <div class="text-xs opacity-80 -mt-1">DÍAS ABIERTA</div>
                    </div>
                    <button id="closeJobModal" class="ml-3 p-2 rounded-lg hover:bg-white/10">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                  </div>
                </div>

                <!-- Tabs -->
                <nav class="mt-4 flex gap-4 text-[13px] font-medium">
                  <button data-jm-tab="info"       class="jm-tab active border-b-2 border-white pb-2">🗂️ Información General</button>
                  <button data-jm-tab="req"        class="jm-tab opacity-90 hover:opacity-100 pb-2">🎯 Requisitos y Beneficios</button>
                  <button data-jm-tab="stats"      class="jm-tab opacity-90 hover:opacity-100 pb-2">📈 Estadísticas</button>
                  <button data-jm-tab="pubs"       class="jm-tab opacity-90 hover:opacity-100 pb-2">🌐 Publicaciones</button>
                  <button data-jm-tab="history"    class="jm-tab opacity-90 hover:opacity-100 pb-2">🗓️ Historial</button>
                </nav>
              </header>

              <!-- Body -->
              <div class="p-5 overflow-y-auto h-[calc(92vh-170px)] bg-white dark:bg-gray-800">
                <!-- Panel: Información General -->
                <section data-jm-panel="info" class="space-y-5">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Información básica</h3>
                      <div class="space-y-3">
                        <label class="text-xs text-slate-500 dark:text-gray-400">Título del puesto</label>
                        <input id="jmTitleInput" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                        <div class="grid grid-cols-2 gap-3">
                          <div>
                            <label class="text-xs text-slate-500 dark:text-gray-400">Departamento</label>
                            <input id="jmDeptInput" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                          </div>
                          <div>
                            <label class="text-xs text-slate-500 dark:text-gray-400">Ubicación</label>
                            <input id="jmLocInput" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                          </div>
                        </div>
                      </div>
                    </article>

                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Compensación</h3>
                      <div class="grid grid-cols-2 gap-3">
                        <div>
                          <label class="text-xs text-slate-500 dark:text-gray-400">Salario Mín.</label>
                          <input id="jmSalMin" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                        </div>
                        <div>
                          <label class="text-xs text-slate-500 dark:text-gray-400">Salario Máx.</label>
                          <input id="jmSalMax" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                        </div>
                        <div>
                          <label class="text-xs text-slate-500 dark:text-gray-400">Moneda</label>
                          <input id="jmCurr" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                        </div>
                        <div>
                          <label class="text-xs text-slate-500 dark:text-gray-400">Tipo</label>
                          <input id="jmType" class="w-full h-10 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3 text-sm text-slate-900 dark:text-white" />
                        </div>
                      </div>
                    </article>
                  </div>

                  <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                    <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Descripción del puesto</h3>
                    <div id="jmDesc" class="min-h-[96px] rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 p-3 text-sm text-slate-700 dark:text-gray-200">
                      Sin descripción
                    </div>
                  </article>
                </section>

                <!-- Panel: Requisitos y Beneficios -->
                <section data-jm-panel="req" class="hidden space-y-5">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Requisitos</h3>
                      <ul id="jmReqList" class="text-sm text-slate-700 dark:text-gray-300 space-y-2 list-disc pl-5"></ul>
                    </article>
                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Habilidades requeridas</h3>
                      <div id="jmSkills" class="flex flex-wrap gap-2"></div>
                    </article>
                  </div>

                  <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                    <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Beneficios</h3>
                    <ul id="jmBenList" class="text-sm text-slate-700 dark:text-gray-300 space-y-2 list-disc pl-5"></ul>
                  </article>
                </section>

                <!-- Panel: Estadísticas -->
                <section data-jm-panel="stats" class="hidden space-y-5">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Pipeline de Candidatos</h3>
                      <ul id="jmStatsPipeline" class="divide-y divide-slate-100 dark:divide-gray-700 text-sm"></ul>
                    </article>
                    <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Métricas de tiempo</h3>
                      <ul id="jmTimeMetrics" class="text-sm text-slate-700 dark:text-gray-300 space-y-3"></ul>
                    </article>
                  </div>

                  <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                    <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Tasas de Conversión</h3>
                    <div id="jmConv" class="space-y-3"></div>
                  </article>
                </section>

                <!-- Panel: Publicaciones -->
                <section data-jm-panel="pubs" class="hidden">
                  <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                    <div class="flex items-center justify-between mb-3">
                      <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200">Canales de publicación</h3>
                      <button class="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs">+ Publicar en nuevo canal</button>
                    </div>
                    <ul id="jmPubList" class="divide-y divide-slate-100 dark:divide-gray-700"></ul>
                  </article>
                </section>

                <!-- Panel: Historial -->
                <section data-jm-panel="history" class="hidden">
                  <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4 bg-white dark:bg-gray-800">
                    <h3 class="text-sm font-semibold text-slate-700 dark:text-gray-200 mb-3">Actividad</h3>
                    <ul id="jmHist" class="text-sm text-slate-700 dark:text-gray-300 space-y-3"></ul>
                  </article>
                </section>
              </div>
            </div>
          </div>


    `;
  }

  // ---------- Bind estático ----------
  bindStatic() {
    document
      .getElementById("btnNew")
      ?.addEventListener("click", () =>
        alert("Navegar a 'Nueva Vacante' (demo)")
      );
    document
      .getElementById("btnReports")
      ?.addEventListener("click", () => alert("Abrir reportes (demo)"));
    document
      .getElementById("btnConfig")
      ?.addEventListener("click", () => alert("Abrir configuración (demo)"));

    // rápidos
    document.getElementById("q")?.addEventListener("input", (e) => {
      this.state.query = e.target.value;
      this.refreshView();
    });
    document.getElementById("fStatus")?.addEventListener("change", (e) => {
      this.state.status = e.target.value;
      this.refreshView();
    });
    document.getElementById("fDept")?.addEventListener("change", (e) => {
      this.state.dept = e.target.value;
      this.refreshView();
    });
    document.getElementById("fRec")?.addEventListener("change", (e) => {
      this.state.recruiter = e.target.value;
      this.refreshView();
    });
    document.getElementById("fSort")?.addEventListener("change", (e) => {
      this.state.sort = e.target.value;
      this.refreshView();
    });
    document.getElementById("fPerPage")?.addEventListener("change", (e) => {
      this.state.itemsPerPage = parseInt(e.target.value);
      this.state.currentPage = 1; // Reset to first page
      this.refreshView();
    });

    // Botón quitar filtros
    document.getElementById("clearFilters")?.addEventListener("click", () => {
      this.clearAllFilters();
    });

    // tabs
    document.querySelectorAll(".tab-btn").forEach((b) =>
      b.addEventListener("click", () => {
        this.state.view = b.dataset.view;
        this.refreshView(true);
      })
    );

    // “Más filtros” solo botón
    document.getElementById("btnMoreFilters")?.addEventListener("click", () => {
      alert("Hook 'Más filtros' (solo botón por ahora).");
    });

    // insights
    document.getElementById("btnInsights")?.addEventListener("click", () => {
      this.state.insightsTick++;
      this.renderInsights();
    });

    // Botón de maximizar
    document
      .getElementById("maximizeInsights")
      ?.addEventListener("click", () => {
        this.maximizeInsights();
      });

    // Modal de candidatos
    document
      .getElementById("closeCandidatesModal")
      ?.addEventListener("click", () => {
        this.closeCandidatesModal();
      });

    // Cerrar modal al hacer clic fuera
    document
      .getElementById("candidatesModal")
      ?.addEventListener("click", (e) => {
        if (e.target.id === "candidatesModal") {
          this.closeCandidatesModal();
        }
      });

    // Filtro de etapas en la modal
    document
      .getElementById("candidateStageFilter")
      ?.addEventListener("change", (e) => {
        this.filterCandidatesByStage(e.target.value);
      });
  }

  updateMetrics() {
    const activeJobs = this.state.jobs.filter(
      (j) => j.status === "ACTIVA"
    ).length;
    const totalApps = this.state.jobs.reduce((sum, j) => sum + j.apps, 0);

    // Calcular días promedio (simulado basado en publishedAgo)
    const avgDays = Math.round(Math.random() * 15 + 8); // Entre 8-23 días

    // Calcular tasa de éxito (simulado)
    const successRate = Math.round(65 + Math.random() * 15); // Entre 65-80%

    // Actualizar elementos del DOM
    const activeJobsEl = document.getElementById("activeJobs");
    const totalAppsEl = document.getElementById("totalApps");
    const avgDaysEl = document.getElementById("avgDays");
    const successRateEl = document.getElementById("successRate");

    if (activeJobsEl) activeJobsEl.textContent = activeJobs;
    if (totalAppsEl) totalAppsEl.textContent = totalApps;
    if (avgDaysEl) avgDaysEl.textContent = avgDays;
    if (successRateEl) successRateEl.textContent = `${successRate}%`;
  }

  // ---------- Vista dinámica ----------
  refreshView(justTabs = false) {
    if (!justTabs) {
      this.renderInsights();
      this.updateMetrics();
    }

    // Actualizar pestañas activas
    this.updateTabStates();

    const container = document.getElementById("viewContainer");
    if (!container) return;

    if (this.state.view === "list") {
      container.innerHTML = this.listHTML();
      this.bindList();
      this.applyFiltersToList();
    } else if (this.state.view === "kanban") {
      container.innerHTML = this.kanbanHTML();
      this.renderKanbanColumns();
      this.bindKanbanDnD(); // DnD después de pintar
      this.bindKanbanUI();
      this.renderKanbanColumns();
      this.bindKanbanDnD();
    } else {
      container.innerHTML = `<div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-6 text-slate-600 dark:text-gray-300">Próximamente: Analytics</div>`;
    }
  }

  updateTabStates() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      const isActive = btn.dataset.view === this.state.view;

      // Remover todas las clases
      btn.className =
        "tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors";

      // Agregar clases según estado
      if (isActive) {
        btn.className += " bg-slate-900 text-white";
      } else {
        btn.className +=
          " ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700";
      }
    });
  }

  starsHTML(n = 4) {
    // 0..5
    const full = Math.max(0, Math.min(5, n));
    return Array.from(
      { length: 5 },
      (_, i) =>
        `<i class="fa${i < full ? "s" : "r"} fa-star text-[13px] ${
          i < full ? "text-yellow-400" : "text-slate-300"
        }"></i>`
    ).join("");
  }
  seedCandidateBoard() {
    // Genera candidatos ficticios a partir de tus jobs y sus pipelines
    const names = [
      "Ana García",
      "Carlos López",
      "María Rodríguez",
      "Luis Martín",
      "Elena Sánchez",
      "Roberto Silva",
      "Patricia Jiménez",
      "Alejandro Vega",
      "Andrea Romero",
      "Pablo Martínez",
      "Sofía Herrera",
      "Diego Ramírez",
    ];
    let id = 1;
    const items = [];

    this.state.jobs.forEach((job) => {
      // job.pipeline = [aplicado, screening, entrevista, oferta]
      const counts = [
        ...job.pipeline,
        Math.round((job.pipeline[3] || 0) * 0.3),
      ]; // contratado aprox
      counts.forEach((count, stage) => {
        for (let i = 0; i < count; i++) {
          const name = names[(id + i) % names.length];
          items.push({
            id: String(id++),
            name,
            rating: 3 + (i % 3), // 3..5
            jobId: job.id,
            jobTitle: job.title,
            jobDept: job.department,
            location: job.location,
            appliedAgo: `${2 + (i % 11)} días`,
            stage, // 0..4
            order: id * 1000,
          });
        }
      });
    });

    this.kanban.items = items;
  }

  colorBy(name) {
    // Tailwind tokens por color
    const map = {
      blue: { bg: "bg-blue-600", soft: "bg-blue-50", text: "text-blue-700" },
      amber: {
        bg: "bg-amber-500",
        soft: "bg-amber-50",
        text: "text-amber-700",
      },
      violet: {
        bg: "bg-violet-500",
        soft: "bg-violet-50",
        text: "text-violet-700",
      },
      emerald: {
        bg: "bg-emerald-500",
        soft: "bg-emerald-50",
        text: "text-emerald-700",
      },
      teal: { bg: "bg-teal-500", soft: "bg-teal-50", text: "text-teal-700" },
    };
    return map[name] || map.blue;
  }
  // ---------- LISTA ----------
  listHTML() {
    return `
      <!-- Vista de tabla para desktop -->
      <div class="hidden sm:block rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800">
        <div class="overflow-x-auto table-responsive">
          <table class="min-w-full sm:min-w-[800px]">
            <thead class="text-left text-slate-500 text-xs uppercase tracking-wide">
              <tr>
                <th class="px-4 py-3">Posición</th>
                <th class="px-4 py-3">Departamento</th>
                <th class="px-4 py-3">Estado</th>
                <th class="px-4 py-3">Aplicaciones</th>
                <th class="px-4 py-3">Pipeline</th>
                <th class="px-4 py-3">Reclutador</th>
                <th class="px-4 py-3">Publicado</th>
                <th class="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody id="jobsList" class="divide-y"></tbody>
          </table>
        </div>
      </div>

      <!-- Vista de cards para móvil -->
      <div class="sm:hidden space-y-3">
        <div id="jobsListMobile"></div>
      </div>

      <!-- Paginación -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
        <div class="text-sm text-slate-500">
          <span id="showingText"></span>
        </div>
        
        <div class="flex items-center gap-2">
          <button id="btnPrevPage" class="px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            ← Anterior
          </button>
          
          <div id="pageNumbers" class="flex items-center gap-1">
            <!-- Los números de página se generarán dinámicamente -->
          </div>
          
          <button id="btnNextPage" class="px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
            Siguiente →
          </button>
        </div>
      </div>
    `;
  }

  bindList() {
    // Eventos de acciones en las filas de tabla
    document.getElementById("jobsList")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const id = btn.dataset.id;
      const job = this.state.jobs.find((j) => j.id === id);
      if (!job) return;

      switch (btn.dataset.action) {
        case "pipeline":
          this.openJobModal(job);
          break;
        case "publicar":
          job.status = "ACTIVA";
          this.applyFiltersToList();
          break;
        case "reactivar":
          job.status = "ACTIVA";
          this.applyFiltersToList();
          break;
        case "pausar":
          job.status = "PAUSADA";
          this.applyFiltersToList();
          break;
        case "edit":
          alert(`Editar "${job.title}" (demo)`);
          break;
        case "menu":
          alert("Más acciones (demo)");
          break;
      }
    });

    // Eventos de acciones en las cards móviles
    document
      .getElementById("jobsListMobile")
      ?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const id = btn.dataset.id;
        const job = this.state.jobs.find((j) => j.id === id);
        if (!job) return;

        switch (btn.dataset.action) {
          case "pipeline":
            this.openCandidatesModal(job);
            break;
          case "publicar":
            job.status = "ACTIVA";
            this.applyFiltersToList();
            break;
          case "reactivar":
            job.status = "ACTIVA";
            this.applyFiltersToList();
            break;
          case "pausar":
            job.status = "PAUSADA";
            this.applyFiltersToList();
            break;
          case "edit":
            alert(`Editar "${job.title}" (demo)`);
            break;
        }
      });

    // Eventos de paginación
    document.getElementById("btnPrevPage")?.addEventListener("click", () => {
      if (this.state.currentPage > 1) {
        this.state.currentPage--;
        this.applyFiltersToList();
      }
    });

    document.getElementById("btnNextPage")?.addEventListener("click", () => {
      const filteredJobs = this.getFilteredJobs();
      const totalPages = Math.ceil(
        filteredJobs.length / this.state.itemsPerPage
      );
      if (this.state.currentPage < totalPages) {
        this.state.currentPage++;
        this.applyFiltersToList();
      }
    });

    // Eventos de números de página (se agregan dinámicamente)
    document.getElementById("pageNumbers")?.addEventListener("click", (e) => {
      const pageBtn = e.target.closest("[data-page]");
      if (!pageBtn) return;

      const page = parseInt(pageBtn.dataset.page);
      if (page !== this.state.currentPage) {
        this.state.currentPage = page;
        this.applyFiltersToList();
      }
    });
  }

  getFilteredJobs() {
    const q = this.state.query.trim().toLowerCase();
    let list = this.state.jobs.filter((j) => {
      const matchQ =
        !q ||
        [j.title, j.department, j.location, j.recruiter].some((v) =>
          String(v).toLowerCase().includes(q)
        );
      const matchS =
        this.state.status === "all" || j.status === this.state.status;
      const matchD =
        this.state.dept === "all" || j.department === this.state.dept;
      const matchR =
        this.state.recruiter === "all" || j.recruiter === this.state.recruiter;
      return matchQ && matchS && matchD && matchR;
    });

    if (this.state.sort === "apps-desc") list.sort((a, b) => b.apps - a.apps);
    if (this.state.sort === "apps-asc") list.sort((a, b) => a.apps - b.apps);

    return list;
  }

  applyFiltersToList() {
    const filteredJobs = this.getFilteredJobs();
    const totalPages = Math.ceil(filteredJobs.length / this.state.itemsPerPage);

    // Ajustar página actual si es necesario
    if (this.state.currentPage > totalPages && totalPages > 0) {
      this.state.currentPage = totalPages;
    }

    // Calcular índices para la paginación
    const startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    const endIndex = startIndex + this.state.itemsPerPage;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    // Actualizar tabla desktop
    const tbody = document.getElementById("jobsList");
    if (tbody) {
      tbody.innerHTML = paginatedJobs.map((j) => this.row(j)).join("");
    }

    // Actualizar cards móviles
    const mobileList = document.getElementById("jobsListMobile");
    if (mobileList) {
      mobileList.innerHTML = paginatedJobs
        .map((j) => this.mobileCard(j))
        .join("");
    }

    // Actualizar texto de información
    const showing = document.getElementById("showingText");
    if (showing) {
      const start = filteredJobs.length > 0 ? startIndex + 1 : 0;
      const end = Math.min(endIndex, filteredJobs.length);
      showing.textContent = `Mostrando ${start}-${end} de ${filteredJobs.length} vacantes`;
    }

    // Actualizar controles de paginación
    this.updatePaginationControls(filteredJobs.length);

    // Actualizar métricas basadas en los trabajos filtrados
    this.updateFilteredMetrics(filteredJobs);
  }

  updateFilteredMetrics(filteredJobs) {
    const activeJobs = filteredJobs.filter((j) => j.status === "ACTIVA").length;
    const totalApps = filteredJobs.reduce((sum, j) => sum + j.apps, 0);

    // Calcular días promedio (simulado)
    const avgDays = Math.round(Math.random() * 15 + 8);

    // Calcular tasa de éxito (simulado)
    const successRate = Math.round(65 + Math.random() * 15);

    // Actualizar elementos del DOM
    const activeJobsEl = document.getElementById("activeJobs");
    const totalAppsEl = document.getElementById("totalApps");
    const avgDaysEl = document.getElementById("avgDays");
    const successRateEl = document.getElementById("successRate");

    if (activeJobsEl) activeJobsEl.textContent = activeJobs;
    if (totalAppsEl) totalAppsEl.textContent = totalApps;
    if (avgDaysEl) avgDaysEl.textContent = avgDays;
    if (successRateEl) successRateEl.textContent = `${successRate}%`;
  }

  updatePaginationControls(totalItems) {
    const totalPages = Math.ceil(totalItems / this.state.itemsPerPage);

    // Actualizar botones anterior/siguiente
    const btnPrev = document.getElementById("btnPrevPage");
    const btnNext = document.getElementById("btnNextPage");

    if (btnPrev) {
      btnPrev.disabled = this.state.currentPage <= 1;
    }

    if (btnNext) {
      btnNext.disabled = this.state.currentPage >= totalPages;
    }

    // Generar números de página
    const pageNumbers = document.getElementById("pageNumbers");
    if (pageNumbers) {
      pageNumbers.innerHTML = this.generatePageNumbers(totalPages);
    }
  }

  generatePageNumbers(totalPages) {
    if (totalPages <= 1) return "";

    const current = this.state.currentPage;
    const pages = [];

    // Lógica para mostrar páginas: siempre mostrar primera, última, y páginas alrededor de la actual
    const showPages = 5; // Número máximo de páginas a mostrar

    if (totalPages <= showPages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica más compleja para muchas páginas
      pages.push(1);

      if (current > 3) {
        pages.push("...");
      }

      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (current < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages
      .map((page) => {
        if (page === "...") {
          return '<span class="px-3 py-2 text-sm text-gray-500">...</span>';
        }

        const isActive = page === current;
        const classes = isActive
          ? "px-3 py-2 text-sm bg-blue-500 text-white rounded-lg"
          : "px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer";

        return `<button data-page="${page}" class="${classes}">${page}</button>`;
      })
      .join("");
  }

  // ---------- MODAL DE CANDIDATOS ----------
  openCandidatesModal(job) {
    this.currentJob = job;

    // Actualizar información del header
    const modalTitle = document.getElementById("modalJobTitle");
    const modalInfo = document.getElementById("modalJobInfo");

    if (modalTitle) modalTitle.textContent = `Candidatos - ${job.title}`;
    if (modalInfo)
      modalInfo.textContent = `${job.location} • ${job.department} • ${job.apps} aplicaciones`;

    // Generar candidatos simulados
    this.generateCandidates(job);

    // Mostrar pipeline
    this.renderCandidatesPipeline(job);

    // Mostrar lista de candidatos
    this.renderCandidatesList();

    // Mostrar modal
    const modal = document.getElementById("candidatesModal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevenir scroll del body
    }
  }

  closeCandidatesModal() {
    const modal = document.getElementById("candidatesModal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // Restaurar scroll del body
    }
    this.currentJob = null;
    this.candidates = [];
  }

  generateCandidates(job) {
    const names = [
      "Ana García López",
      "Carlos Martínez",
      "María Rodríguez",
      "Luis Fernández",
      "Carmen Sánchez",
      "José Antonio",
      "Laura Jiménez",
      "Miguel Ángel",
      "Isabel Torres",
      "Francisco Ruiz",
      "Pilar Moreno",
      "Antonio López",
      "Rosa María",
      "Manuel González",
      "Elena Díaz",
      "Javier Pérez",
      "Cristina Muñoz",
      "Rafael Romero",
      "Beatriz Álvarez",
      "Diego Herrera",
    ];

    const skills = [
      "React",
      "Vue.js",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "Agile",
      "Scrum",
      "UI/UX",
      "Figma",
      "Photoshop",
    ];

    const experiences = ["Junior", "Mid-level", "Senior", "Lead"];
    const stages = ["Aplicado", "En revisión", "Entrevista", "Oferta"];

    this.candidates = [];
    const totalCandidates = job.apps;
    const pipeline = job.pipeline; // [aplicados, revision, entrevista, oferta]

    let candidateId = 1;

    // Generar candidatos por etapa
    pipeline.forEach((count, stageIndex) => {
      for (let i = 0; i < count; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const experience =
          experiences[Math.floor(Math.random() * experiences.length)];
        const candidateSkills = skills
          .sort(() => 0.5 - Math.random())
          .slice(0, 3 + Math.floor(Math.random() * 3));

        this.candidates.push({
          id: candidateId++,
          name: name,
          email: `${name.toLowerCase().replace(/\s+/g, ".")}@email.com`,
          experience: experience,
          skills: candidateSkills,
          stage: stageIndex,
          stageName: stages[stageIndex],
          appliedDate: this.getRandomDate(),
          score: Math.floor(Math.random() * 40) + 60, // 60-100
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
            name
          )}&background=random`,
        });
      }
    });
  }

  getRandomDate() {
    const days = Math.floor(Math.random() * 30) + 1;
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toLocaleDateString("es-ES");
  }

  renderCandidatesPipeline(job) {
    const pipeline = job.pipeline;
    const stages = ["Aplicados", "En revisión", "Entrevista", "Oferta"];
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-yellow-100 text-yellow-800",
      "bg-purple-100 text-purple-800",
      "bg-green-100 text-green-800",
    ];

    const pipelineContainer = document.getElementById("candidatesPipeline");
    if (!pipelineContainer) return;

    pipelineContainer.innerHTML = pipeline
      .map(
        (count, index) => `
      <div class="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300">${stages[index]}</span>
          <span class="px-2 py-1 text-xs rounded-full ${colors[index]} dark:bg-opacity-20">${count}</span>
        </div>
        <div class="text-2xl font-bold text-gray-900 dark:text-white">${count}</div>
        <div class="text-xs text-gray-500 dark:text-gray-400">candidatos</div>
      </div>
    `
      )
      .join("");
  }

  renderCandidatesList(filterStage = "all") {
    const candidatesContainer = document.getElementById("candidatesList");
    if (!candidatesContainer) return;

    let filteredCandidates = this.candidates;
    if (filterStage !== "all") {
      filteredCandidates = this.candidates.filter(
        (c) => c.stage === parseInt(filterStage)
      );
    }

    candidatesContainer.innerHTML = filteredCandidates
      .map(
        (candidate) => `
      <div class="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
        <div class="flex items-start gap-4">
          <img src="${candidate.avatar}" alt="${
          candidate.name
        }" class="w-12 h-12 rounded-full">
          
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">${
                  candidate.name
                }</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">${
                  candidate.email
                }</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Aplicó el ${
                  candidate.appliedDate
                }</p>
              </div>
              
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                  ${candidate.experience}
                </span>
                <span class="px-2 py-1 text-xs rounded-full ${this.getStageColor(
                  candidate.stage
                )}">
                  ${candidate.stageName}
                </span>
              </div>
            </div>
            
            <div class="mt-2">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs text-gray-500 dark:text-gray-400">Puntuación:</span>
                <div class="flex items-center gap-1">
                  <div class="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                    <div class="h-2 bg-green-500 rounded-full" style="width: ${
                      candidate.score
                    }%"></div>
                  </div>
                  <span class="text-xs font-medium text-gray-700 dark:text-gray-300">${
                    candidate.score
                  }%</span>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-1">
                ${candidate.skills
                  .map(
                    (skill) => `
                  <span class="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded">
                    ${skill}
                  </span>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-600">
          <button class="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
            Ver perfil
          </button>
          <button class="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Contactar
          </button>
        </div>
      </div>
    `
      )
      .join("");
  }

  getStageColor(stage) {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
    ];
    return colors[stage] || colors[0];
  }

  filterCandidatesByStage(stage) {
    this.renderCandidatesList(stage);
  }

  // ---------- LIMPIAR FILTROS ----------
  clearAllFilters() {
    // Resetear todos los filtros a sus valores por defecto
    this.state.query = "";
    this.state.status = "all";
    this.state.dept = "all";
    this.state.recruiter = "all";
    this.state.sort = "recent";
    this.state.currentPage = 1;

    // Actualizar los elementos del DOM
    const queryInput = document.getElementById("q");
    const statusSelect = document.getElementById("fStatus");
    const deptSelect = document.getElementById("fDept");
    const recSelect = document.getElementById("fRec");
    const sortSelect = document.getElementById("fSort");

    if (queryInput) queryInput.value = "";
    if (statusSelect) statusSelect.value = "all";
    if (deptSelect) deptSelect.value = "all";
    if (recSelect) recSelect.value = "all";
    if (sortSelect) sortSelect.value = "recent";

    // Refrescar la vista
    this.refreshView();
  }

  row(j) {
    const pill = this.statusPill(j.status);
    const appsDelta =
      j.appsDelta === 0
        ? ""
        : `<div class="text-xs ${
            j.appsDelta > 0 ? "text-emerald-600" : "text-rose-600"
          }">${j.appsDelta > 0 ? "+" : ""}${j.appsDelta} esta semana</div>`;
    const progress = this.pipelinePercent(j.pipeline);

    return `
      <tr class="align-top">
        <td class="px-4 py-4">
          <a href="#" class="text-sky-700 hover:underline font-semibold">${
            j.title
          }</a>
          <div class="text-slate-500 text-sm mt-1">📍 ${
            j.location
          } · 💰 ${this.money(j)} · 🗓️ ${j.type}</div>
        </td>
        <td class="px-4 py-4"><span class="rounded-full bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-white text-xs px-2 py-0.5">${
          j.department
        }</span></td>
        <td class="px-4 py-4">${pill}</td>
        <td class="px-4 py-4">
          <div class="font-semibold text-slate-800 dark:text-white">${this.n(
            j.apps
          )}</div>
          ${appsDelta}
        </td>
        <td class="px-4 py-4">
          ${
            j.pipeline[0]
              ? `
            <div class="h-2 w-40 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div class="h-full bg-[#004176] dark:bg-blue-500" style="width:${progress}%"></div>
            </div>`
              : `<span class="italic text-slate-400">Sin pipeline</span>`
          }
        </td>
        <td class="px-4 py-4 text-slate-700 dark:text-gray-300">${
          j.recruiter
        }</td>
        <td class="px-4 py-4">
          <div class="text-slate-700 dark:text-gray-300">${j.publishedAgo}</div>
        </td>
        <td class="px-4 py-4">${this.actionsFor(j)}</td>
      </tr>
    `;
  }

  actionsFor(j) {
    const viewBtn = `
    <button data-action="pipeline" data-id="${j.id}"
      class="rounded-lg bg-sky-500 text-white px-2 py-1.5 text-sm hover:opacity-95 flex items-center gap-1">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
      </svg>
      Ver
    </button>`;

    const publishBtn =
      j.status === "BORRADOR"
        ? `<button data-action="publicar" data-id="${j.id}"
         class="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 ml-2">Publicar</button>`
        : "";

    const reactivateBtn =
      j.status === "PAUSADA"
        ? `<button data-action="reactivar" data-id="${j.id}"
         class="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 ml-2">Reactivar</button>`
        : "";

    const editBtn = `<button data-action="edit" data-id="${j.id}"
      class="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 ml-2">Editar</button>`;

    return `<div class="flex items-center">${viewBtn}${publishBtn}${reactivateBtn}${editBtn}</div>`;
  }

  mobileCard(j) {
    const pill = this.statusPill(j.status);
    const appsDelta =
      j.appsDelta === 0
        ? ""
        : j.appsDelta > 0
        ? `+${j.appsDelta}`
        : `${j.appsDelta}`;

    return `
      <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 space-y-3">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h3 class="font-semibold text-gray-900 dark:text-white text-sm">${
              j.title
            }</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${
              j.department
            } • ${j.location}</p>
          </div>
          ${pill}
        </div>
        
        <div class="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span class="text-gray-500 dark:text-gray-400">Aplicaciones</span>
            <div class="font-medium text-gray-900 dark:text-white">
              ${j.apps} ${
      appsDelta ? `<span class="text-green-600">${appsDelta}</span>` : ""
    }
            </div>
          </div>
          <div>
            <span class="text-gray-500 dark:text-gray-400">Reclutador</span>
            <div class="font-medium text-gray-900 dark:text-white">${
              j.recruiter
            }</div>
          </div>
        </div>
        
        <div class="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span class="text-xs text-gray-500 dark:text-gray-400">${
            j.publishedAgo
          }</span>
          <div class="flex gap-2">
            ${
              j.status === "BORRADOR"
                ? `<button data-action="publicar" data-id="${j.id}" class="bg-blue-500 text-white px-3 py-1 rounded text-xs">Publicar</button>`
                : j.status === "PAUSADA"
                ? `<button data-action="reactivar" data-id="${j.id}" class="bg-green-500 text-white px-3 py-1 rounded text-xs">Reactivar</button>`
                : `<button data-action="pipeline" data-id="${j.id}" class="bg-blue-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Ver
                  </button>`
            }
            <button data-action="edit" data-id="${
              j.id
            }" class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-xs">Editar</button>
          </div>
        </div>
      </div>
    `;
  }

  // ---------- KANBAN ----------
  // ---------- KANBAN (CANDIDATOS) ----------
  kanbanHTML() {
    const total = this.kanban.items.length;
    const jobsOptions = ['<option value="all">Todas las vacantes</option>']
      .concat(
        this.state.jobs.map(
          (j) => `<option value="${j.id}">${j.title}</option>`
        )
      )
      .join("");

    return `
  <section class="rounded-2xl overflow-hidden">
    <!-- HERO -->
    <div class="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-4 md:p-6">
      <div class="flex flex-wrap items-center gap-3 justify-between">
        <div>
          <h2 class="text-white text-xl md:text-2xl font-semibold">Pipeline de Candidatos</h2>
          <p class="text-white/80 text-sm">Gestiona el proceso de selección</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="kbRefresh" class="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">🔄 Actualizar</button>
          <button id="kbExport"  class="px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">📤 Exportar</button>
        </div>
      </div>

      <!-- Toolbar -->
      <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        <div class="col-span-2">
          <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 h-11 border border-white/20 hover:bg-white/20 transition-colors">
            <span class="text-white/80">🔎</span>
            <input id="kbQ" type="text" placeholder="Buscar candidatos..." class="w-full bg-transparent outline-none text-white placeholder-white/70 text-sm">
          </div>
        </div>
        <div class="relative">
          <select id="kbJob" class="h-11 w-full rounded-xl bg-white/10 backdrop-blur-sm text-white px-3 outline-none border border-white/20 hover:bg-white/20 transition-colors appearance-none cursor-pointer text-sm font-medium">
            ${jobsOptions}
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg class="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <div class="text-right text-white">
            <div class="text-3xl font-bold leading-none">${total}</div>
            <div class="text-xs opacity-80 -mt-1">TOTAL</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columns -->
    <div class="bg-white dark:bg-gray-800 p-3 md:p-4 ring-1 ring-black/5 dark:ring-white/10 rounded-b-2xl">
      <div id="kbCols" class="grid grid-cols-1 md:grid-cols-5 gap-4"></div>
    </div>
  </section>`;
  }

  bindKanbanUI() {
    document.getElementById("kbQ")?.addEventListener("input", (e) => {
      this.kanban.q = e.target.value;
      this.renderKanbanColumns();
    });
    document.getElementById("kbJob")?.addEventListener("change", (e) => {
      this.kanban.jobFilter = e.target.value;
      this.renderKanbanColumns();
    });
    document.getElementById("kbRefresh")?.addEventListener("click", () => {
      this.seedCandidateBoard();
      this.renderKanbanColumns();
      this.bindKanbanDnD();
    });
    document.getElementById("kbExport")?.addEventListener("click", () => {
      alert("Exportar candidatos (demo)");
    });
  }

  renderKanbanColumns() {
    const wrap = document.getElementById("kbCols");
    if (!wrap) return;

    // filtro búsqueda + por vacante
    const q = (this.kanban.q || "").toLowerCase();
    const jobFilter = this.kanban.jobFilter;
    const filtered = this.kanban.items.filter((c) => {
      const byQ =
        !q ||
        [c.name, c.jobTitle, c.location].some((v) =>
          String(v).toLowerCase().includes(q)
        );
      const byJob = jobFilter === "all" || c.jobId === jobFilter;
      return byQ && byJob;
    });

    // agrupar por etapa
    const groups = this.stagesDef.map(() => []);
    filtered.forEach((c) => groups[c.stage]?.push(c));

    wrap.innerHTML = this.stagesDef
      .map((stg, idx) => {
        const palette = this.colorBy(stg.color);
        const count = groups[idx].length;

        return `
    <section class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 overflow-hidden">
      <!-- header de columna -->
      <header class="px-3 py-2 ${
        palette.bg
      } text-white flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="font-medium">${stg.label}</span>
          <span class="px-2 py-0.5 text-xs rounded-full bg-white/20">${count}</span>
        </div>
        <button class="text-white/90 hover:text-white opacity-90" title="Añadir candidato">＋</button>
      </header>

      <!-- zona de drop -->
      <div class="p-2 min-h-[280px] space-y-2" data-dropzone="${idx}">
        ${groups[idx]
          .sort((a, b) => (a.order || 0) - (b.order || 0))
          .map((c) => this.kanbanCard(c))
          .join("")}
      </div>
    </section>`;
      })
      .join("");
  }

  kanbanCard(c) {
    return `
  <article draggable="true" data-id="${c.id}"
    class="drag-card rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 p-3 cursor-grab active:cursor-grabbing">
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <p class="font-medium text-slate-900 dark:text-white truncate">${
          c.name
        }</p>
        <p class="text-xs text-slate-500 truncate">${c.jobTitle}</p>
      </div>
      <div class="shrink-0">${this.starsHTML(c.rating)}</div>
    </div>

    <div class="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-gray-700">${
        c.location
      }</span>
      <span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-gray-700">${
        c.jobDept
      }</span>
      <span class="ml-auto text-slate-500">${c.appliedAgo}</span>
    </div>
  </article>`;
  }

  bindKanbanDnD() {
    // Drag start / end
    document.querySelectorAll(".drag-card").forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        card.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
    });

    // Dropzones
    document.querySelectorAll("[data-dropzone]").forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".drag-card.dragging");
        if (!dragging) return;
        const after = this.getDragAfterElement(zone, e.clientY);
        if (after == null) zone.appendChild(dragging);
        else zone.insertBefore(dragging, after);
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const targetStage = parseInt(zone.dataset.dropzone, 10);
        const dragging = document.querySelector(".drag-card.dragging");
        if (!dragging) return;

        const id = dragging.dataset.id;
        const cand = this.kanban.items.find((x) => x.id === id);
        if (!cand) return;

        // recalcular orden según DOM
        const cards = [...zone.querySelectorAll(".drag-card")];
        const idx = cards.findIndex((c) => c.dataset.id === id);
        const beforeId = idx > 0 ? cards[idx - 1].dataset.id : null;
        const afterId =
          idx < cards.length - 1 ? cards[idx + 1].dataset.id : null;

        const getOrder = (cid) =>
          this.kanban.items.find((x) => x.id === cid)?.order ?? 0;
        let newOrder;
        if (beforeId && afterId)
          newOrder = (getOrder(beforeId) + getOrder(afterId)) / 2;
        else if (!beforeId && afterId) newOrder = getOrder(afterId) - 1;
        else if (beforeId && !afterId) newOrder = getOrder(beforeId) + 1;
        else newOrder = 1000;

        cand.stage = targetStage;
        cand.order = newOrder;

        // re-pintar
        this.renderKanbanColumns();
        this.bindKanbanDnD();
      });
    });
  }
  bindKanbanDnD() {
    // Drag start / end
    document.querySelectorAll(".drag-card").forEach((card) => {
      card.addEventListener("dragstart", (e) => {
        card.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
    });

    // Drag over (inserción visual en posición)
    document.querySelectorAll("[data-dropzone]").forEach((zone) => {
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".drag-card.dragging");
        if (!dragging) return;
        const after = this.getDragAfterElement(zone, e.clientY);
        if (after == null) {
          zone.appendChild(dragging);
        } else {
          zone.insertBefore(dragging, after);
        }
      });

      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const zoneStatus = zone.dataset.dropzone;
        const dragging = document.querySelector(".drag-card.dragging");
        if (!dragging) return;
        const id = dragging.dataset.id;
        const job = this.state.jobs.find((j) => j.id === id);
        if (!job) return;

        // calcular nuevo 'order' a partir de la posición real en el DOM
        const cards = [...zone.querySelectorAll(".drag-card")];
        const idx = cards.findIndex((c) => c.dataset.id === id);
        const beforeId = idx > 0 ? cards[idx - 1].dataset.id : null;
        const afterId =
          idx < cards.length - 1 ? cards[idx + 1].dataset.id : null;

        const getOrder = (jid) =>
          this.state.jobs.find((x) => x.id === jid)?.order ?? 0;

        let newOrder;
        if (beforeId && afterId)
          newOrder = (getOrder(beforeId) + getOrder(afterId)) / 2;
        else if (!beforeId && afterId)
          newOrder = getOrder(afterId) - 1; // al inicio
        else if (beforeId && !afterId)
          newOrder = getOrder(beforeId) + 1; // al final
        else newOrder = 1000; // única tarjeta

        job.status = zoneStatus;
        job.order = newOrder;

        // re-pintar columnas y re-bind
        this.renderKanbanColumns();
        this.bindKanbanDnD();
      });
    });
  }

  getDragAfterElement(container, y) {
    const elements = [
      ...container.querySelectorAll(".drag-card:not(.dragging)"),
    ];
    return elements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  }

  filteredJobs() {
    const q = this.state.query.trim().toLowerCase();
    return this.state.jobs.filter((j) => {
      const matchQ =
        !q ||
        [j.title, j.department, j.location, j.recruiter].some((v) =>
          String(v).toLowerCase().includes(q)
        );
      const matchS =
        this.state.status === "all" || j.status === this.state.status;
      const matchD =
        this.state.dept === "all" || j.department === this.state.dept;
      const matchR =
        this.state.recruiter === "all" || j.recruiter === this.state.recruiter;
      return matchQ && matchS && matchD && matchR;
    });
  }
  // --- Banner superior “Insights Inteligentes” ---
  heroInsightsHTML() {
    const i = this.computeHeroInsights(); // textos dinámicos
    return `
    <section class="mb-6">
      <div class="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 p-4 md:p-5 shadow-sm">
        <div class="flex items-center gap-2 text-white/90 font-semibold mb-3">
          <span>🤖</span><span>Insights Inteligentes</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${[
            { icon: "🧪", title: "Rendimiento Destacado", text: i.destacado },
            { icon: "⚡", title: "Acción Recomendada", text: i.accion },
            { icon: "🎯", title: "Optimización", text: i.optim },
          ]
            .map(
              (c) => `
            <article class="rounded-xl bg-white dark:bg-gray-800/10 ring-1 ring-white/15 p-4 text-white backdrop-blur-[2px]">
              <p class="font-semibold flex items-center gap-2">${c.icon} ${c.title}</p>
              <p class="text-sm/6 mt-2 opacity-95">${c.text}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
  }

  // Calcula mensajes a partir de this.state.jobs
  computeHeroInsights() {
    const jobs = this.state?.jobs ?? [];
    if (!jobs.length) {
      return {
        destacado: "Aún no hay datos suficientes para evaluar el rendimiento.",
        accion: "Agrega vacantes para obtener recomendaciones accionables.",
        optim: "Programa la publicación en tu mejor franja horaria.",
      };
    }

    // Vacante con más aplicaciones
    const top = jobs.reduce((a, b) => (b.apps > (a?.apps ?? -1) ? b : a), null);

    // “más que el promedio”
    const avg = jobs.reduce((s, j) => s + j.apps, 0) / jobs.length;
    const lift = Math.max(0, Math.round(((top.apps - avg) / (avg || 1)) * 100));

    // Vacantes con conversión baja (última/primera etapa < 25%)
    const lowConv = jobs.filter((j) => {
      const conv = this.pipelinePercent(j.pipeline);
      return j.apps > 0 && conv < 25;
    }).length;

    return {
      destacado: `"${top.title}" tiene ${lift}% más aplicaciones que el promedio. Considera duplicar la estrategia de publicación.`,
      accion: `${lowConv} vacante${
        lowConv === 1 ? "" : "s"
      } requieren atención: baja tasa de conversión. La IA sugiere ajustar descripción y keywords.`,
      optim:
        "Mejor momento para publicar: Martes 10:00 AM. Programar la siguiente vacante puede aumentar visibilidad 40%.",
    };
  }

  // ---------- Insights ----------
  renderInsights() {
    const ideas = [
      {
        t: "Recomendación",
        c: "La vacante de Senior React Developer tiene alta demanda. Considera aumentar el salario en un 10% para atraer mejor talento.",
        cls: "bg-blue-50 dark:bg-blue-900/30 ring-blue-100 dark:ring-blue-800",
      },
      {
        t: "Tendencia",
        c: "Las vacantes de Tecnología reciben 3× más aplicaciones que otras áreas.",
        cls: "bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800",
      },
      {
        t: "Alerta",
        c: "La vacante DevOps Engineer está pausada hace 12 días. ¿Reactivar?",
        cls: "bg-amber-50 dark:bg-amber-900/30 ring-amber-100 dark:ring-amber-800",
      },
    ];
    const start = this.state.insightsTick % ideas.length;
    const ordered = [
      ideas[start],
      ideas[(start + 1) % ideas.length],
      ideas[(start + 2) % ideas.length],
    ];
    const ul = document.getElementById("insightsList");
    if (!ul) return;
    ul.innerHTML = ordered
      .map(
        (x) => `
      <li class="rounded-lg ${x.cls} ring-1 p-3">
        <p class="font-medium text-slate-900 dark:text-white">${x.t}</p>
        <p class="text-slate-700 dark:text-gray-300 text-sm">${x.c}</p>
      </li>
    `
      )
      .join("");
  }

  // ---------- Utils ----------
  statusPill(s) {
    const map = {
      ACTIVA: "bg-emerald-100 text-emerald-700",
      BORRADOR: "bg-amber-100 text-amber-700",
      PAUSADA: "bg-rose-100 text-rose-700",
    };
    return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
      map[s] || "bg-slate-100 text-slate-700 dark:text-gray-300"
    }">${s}</span>`;
  }
  pipelinePercent(arr) {
    if (!arr?.length) return 0;
    const first = arr[0] || 0,
      last = arr[arr.length - 1] || 0;
    return first
      ? Math.max(0, Math.min(100, Math.round((last / first) * 100)))
      : 0;
  }
  money(j) {
    return j.salaryMin && j.salaryMax
      ? `${this.sym(j.currency)} ${this.n(j.salaryMin)}-${this.n(
          j.salaryMax
        )} ${j.currency}`
      : "—";
  }
  sym(c) {
    return c === "EUR" ? "€" : c === "USD" ? "$" : "$";
  }
  n(n) {
    return new Intl.NumberFormat("es-ES").format(n);
  }

  // ---------- Maximización ----------
  maximizeInsights() {
    this.state.isMaximized = !this.state.isMaximized;

    if (this.state.isMaximized) {
      this.applyMaximizedView();
    } else {
      this.removeMaximizedView();
    }

    // Actualizar el ícono del botón
    this.updateMaximizeButton();
  }

  applyMaximizedView() {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.add("maximized-view");
    }

    // Ocultar AI Insights sidebar
    const aiInsightsSidebar = document.querySelector("aside.lg\\:col-span-2");
    if (aiInsightsSidebar) {
      aiInsightsSidebar.style.display = "none";
    }
    
    // Ocultar header con botones
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }
    
    // Ocultar métricas
    const metricsSection = document.querySelector(
      "section.grid.grid-cols-2.md\\:grid-cols-4.gap-4.mb-6"
    );
    if (metricsSection) {
      metricsSection.style.display = "none";
    }

    // Cambiar grid layout para usar todo el ancho
    const gridSection = document.querySelector(
      ".grid.grid-cols-1.lg\\:grid-cols-12"
    );
    if (gridSection) {
      gridSection.classList.remove("lg:grid-cols-12");
      gridSection.classList.add("grid-cols-1");
    }

    // Cambiar el span de la columna principal
    const mainColumn = document.querySelector(".xl\\:col-span-10");
    if (mainColumn) {
      mainColumn.classList.remove("xl:col-span-10");
      mainColumn.classList.add("col-span-1");
    }

    // Aumentar elementos por página para aprovechar el espacio
    const perPageSelect = document.getElementById("fPerPage");
    if (perPageSelect && this.state.itemsPerPage < 20) {
      this.state.itemsPerPage = 20;
      perPageSelect.value = "20";
      // Refrescar la vista para mostrar más elementos
      this.refreshView();
    }

    // Agregar listener para tecla ESC
    this.escKeyListener = (e) => {
      if (e.key === 'Escape' && this.state.isMaximized) {
        this.maximizeInsights();
      }
    };
    document.addEventListener('keydown', this.escKeyListener);

    // Aplicar estilos adicionales para maximización
    const style = document.createElement("style");
    style.id = "maximized-styles";
    style.textContent = `
      .maximized-view {
        transition: all 0.3s ease-in-out;
      }
      
      .maximized-view .max-w-screen-2xl,
      .maximized-view .max-w-\\[1600px\\] {
        max-width: none !important;
      }
      
      .maximized-view #jobsList {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
        gap: 1rem !important;
      }
      
      .maximized-view .job-card {
        transform: scale(1.01);
        transition: all 0.2s ease;
      }
      
      .maximized-view .job-card:hover {
        transform: scale(1.03);
      }
      
      /* Más columnas en pantallas grandes cuando está maximizado */
      @media (min-width: 1280px) {
        .maximized-view #jobsList {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
        }
      }
      
      @media (min-width: 1536px) {
        .maximized-view #jobsList {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
        }
      }
      
      @media (min-width: 1920px) {
        .maximized-view #jobsList {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
        }
      }
      
      /* Tabla maximizada */
      .maximized-view table {
        width: 100% !important;
      }
      
      .maximized-view td, .maximized-view th {
        padding: 0.75rem 1rem !important;
      }
      
      /* Kanban maximizado */
      .maximized-view .kanban-column {
        min-width: 280px !important;
      }
      
      .maximized-view .kanban-container {
        gap: 1.5rem !important;
      }
    `;
    document.head.appendChild(style);
  }

  removeMaximizedView() {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.remove("maximized-view");
    }

    // Mostrar AI Insights sidebar
    const aiInsightsSidebar = document.querySelector("aside.lg\\:col-span-2");
    if (aiInsightsSidebar) {
      aiInsightsSidebar.style.display = "";
    }
    
    // Mostrar header con botones
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "";
    }
    
    // Mostrar métricas
    const metricsSection = document.querySelector(
      "section.grid.grid-cols-2.md\\:grid-cols-4.gap-4.mb-6"
    );
    if (metricsSection) {
      metricsSection.style.display = "";
    }

    // Restaurar grid layout
    const gridSection = document.querySelector(".grid.grid-cols-1");
    if (gridSection && !gridSection.classList.contains("lg:grid-cols-12")) {
      gridSection.classList.add("lg:grid-cols-12");
    }

    // Restaurar el span de la columna principal
    const mainColumn = document.querySelector(".col-span-1");
    if (mainColumn && !mainColumn.classList.contains("xl:col-span-10")) {
      mainColumn.classList.add("xl:col-span-10");
    }

    // Restaurar elementos por página originales
    const perPageSelect = document.getElementById("fPerPage");
    if (perPageSelect && this.state.itemsPerPage > 10) {
      this.state.itemsPerPage = 10;
      perPageSelect.value = "10";
      // Refrescar la vista para mostrar menos elementos
      this.refreshView();
    }

    // Remover listener de tecla ESC
    if (this.escKeyListener) {
      document.removeEventListener('keydown', this.escKeyListener);
      this.escKeyListener = null;
    }

    // Remover estilos de maximización
    const maximizedStyles = document.getElementById("maximized-styles");
    if (maximizedStyles) {
      maximizedStyles.remove();
    }
  }

  updateMaximizeButton() {
    const btn = document.getElementById("maximizeInsights");
    if (!btn) return;

    const svg = btn.querySelector("svg path");
    if (this.state.isMaximized) {
      // Ícono de minimizar
      svg.setAttribute(
        "d",
        "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0-2-2H3m18 0h-3a2 2 0 0 0-2 2v3"
      );
      btn.title = "Minimizar vista (ESC)";
    } else {
      // Ícono de maximizar
      svg.setAttribute(
        "d",
        "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      );
      btn.title = "Maximizar vista";
    }
  }

  // Método para limpiar listeners cuando se destruya la vista
  destroy() {
    if (this.escKeyListener) {
      document.removeEventListener('keydown', this.escKeyListener);
      this.escKeyListener = null;
    }
  }
}
