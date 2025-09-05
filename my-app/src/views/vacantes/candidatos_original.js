// src/views/CandidatosView.js
export class CandidatosView {
  constructor() {
    this.state = {
      view: "list", // list | pipeline | analytics
      query: "",
      stage: "all",
      job: "all",
      priority: "all",
      sort: "recent",
      insightsTick: 0,
      // Paginación
      currentPage: 1,
      itemsPerPage: 10,
      // Jobs/Vacantes disponibles
      jobs: [
        { id: "j1", title: "Senior React Developer" },
        { id: "j2", title: "UX/UI Designer" },
        { id: "j3", title: "Product Manager" },
        { id: "j4", title: "Backend Developer" },
        { id: "j5", title: "DevOps Engineer" },
        { id: "j6", title: "Data Scientist" },
        { id: "j7", title: "Marketing Manager" },
        { id: "j8", title: "Sales Manager" }
      ],
      candidates: [
        {
          id: "c1",
          name: "María García Rodríguez",
          email: "maria.garcia@email.com",
          phone: "+34 666 123 456",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
          currentPosition: "Frontend Developer",
          company: "TechCorp",
          skills: ["React", "TypeScript", "Node.js", "CSS", "Git"],
          aiScore: 92,
          stage: "ENTREVISTA",
          priority: "ALTA",
          appliedAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 días
          jobApplied: "Senior React Developer",
          department: "Tecnología",
          experience: "5 años",
          location: "Madrid",
          salary: "45000-55000",
          notes: "Excelente candidata con gran experiencia en React",
        },
        {
          id: "c2",
          name: "Carlos López Martín",
          email: "carlos.lopez@email.com",
          phone: "+34 666 234 567",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
          currentPosition: "UX Designer",
          company: "DesignStudio",
          skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "Prototyping",
            "User Research",
          ],
          aiScore: 88,
          stage: "SCREENING",
          priority: "MEDIA",
          appliedAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 días
          jobApplied: "UX/UI Designer",
          department: "Diseño",
          experience: "3 años",
          location: "Barcelona",
          salary: "35000-45000",
          notes: "Buen portfolio, necesita mejorar skills técnicos",
        },
        {
          id: "c3",
          name: "Ana Martínez Silva",
          email: "ana.martinez@email.com",
          phone: "+34 666 345 678",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          currentPosition: "Product Manager",
          company: "StartupXYZ",
          skills: [
            "Product Strategy",
            "Agile",
            "Analytics",
            "Leadership",
            "SQL",
          ],
          aiScore: 95,
          stage: "CONTRATADO",
          priority: "ALTA",
          appliedAt: Date.now() - 10 * 24 * 60 * 60 * 1000, // 10 días
          jobApplied: "Product Manager",
          department: "Producto",
          experience: "7 años",
          location: "Madrid",
          salary: "50000-65000",
          notes: "Contratada! Excelente fit cultural y técnico",
        },
        {
          id: "c4",
          name: "Diego Ramírez Torres",
          email: "diego.ramirez@email.com",
          phone: "+34 666 456 789",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          currentPosition: "Backend Developer",
          company: "CloudTech",
          skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
          aiScore: 85,
          stage: "APLICADO",
          priority: "BAJA",
          appliedAt: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 día
          jobApplied: "Backend Developer",
          department: "Tecnología",
          experience: "4 años",
          location: "Valencia",
          salary: "40000-50000",
          notes: "Candidato sólido, revisar experiencia con microservicios",
        },
        {
          id: "c5",
          name: "Sofía Herrera Gómez",
          email: "sofia.herrera@email.com",
          phone: "+34 666 567 890",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
          currentPosition: "DevOps Engineer",
          company: "InfraTech",
          skills: ["Kubernetes", "Terraform", "Jenkins", "Monitoring", "Linux"],
          aiScore: 91,
          stage: "OFERTA",
          priority: "ALTA",
          appliedAt: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 días
          jobApplied: "DevOps Engineer",
          department: "Tecnología",
          experience: "6 años",
          location: "Remoto",
          salary: "48000-58000",
          notes: "Oferta enviada, esperando respuesta",
        },
        {
          id: "c6",
          name: "Luis Fernández Castro",
          email: "luis.fernandez@email.com",
          phone: "+34 666 678 901",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
          currentPosition: "Data Scientist",
          company: "DataCorp",
          skills: [
            "Python",
            "Machine Learning",
            "TensorFlow",
            "SQL",
            "Statistics",
          ],
          aiScore: 89,
          stage: "SCREENING",
          priority: "MEDIA",
          appliedAt: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 días
          jobApplied: "Data Scientist",
          department: "Tecnología",
          experience: "4 años",
          location: "Madrid",
          salary: "55000-70000",
          notes: "Buen perfil técnico, evaluar soft skills",
        },
        {
          id: "c7",
          name: "Carmen Ruiz Moreno",
          email: "carmen.ruiz@email.com",
          phone: "+34 666 789 012",
          avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
          currentPosition: "Marketing Manager",
          company: "MarketingPro",
          skills: [
            "Digital Marketing",
            "SEO",
            "Analytics",
            "Content Strategy",
            "Social Media",
          ],
          aiScore: 87,
          stage: "ENTREVISTA",
          priority: "MEDIA",
          appliedAt: Date.now() - 4 * 24 * 60 * 60 * 1000, // 4 días
          jobApplied: "Marketing Manager",
          department: "Marketing",
          experience: "5 años",
          location: "Barcelona",
          salary: "42000-52000",
          notes: "Entrevista programada para mañana",
        },
        {
          id: "c8",
          name: "Javier Morales Vega",
          email: "javier.morales@email.com",
          phone: "+34 666 890 123",
          avatar:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150",
          currentPosition: "Sales Manager",
          company: "SalesCorp",
          skills: [
            "Sales Strategy",
            "CRM",
            "Negotiation",
            "Team Leadership",
            "B2B",
          ],
          aiScore: 83,
          stage: "APLICADO",
          priority: "BAJA",
          appliedAt: Date.now() - 6 * 24 * 60 * 60 * 1000, // 6 días
          jobApplied: "Sales Manager",
          department: "Ventas",
          experience: "8 años",
          location: "Sevilla",
          salary: "40000-55000",
          notes: "Revisar experiencia en sector tecnológico",
        },
      ],
    };

    // Inicializar kanban con los candidatos para analytics
    this.kanban = {
      items: this.state.candidates.map(candidate => ({
        ...candidate,
        jobId: this.state.jobs.find(job => job.title === candidate.jobApplied)?.id || "j1",
        jobTitle: candidate.jobApplied,
        name: candidate.name
      }))
    };

    this.injectStyles();
    this.render();
    this.bindStatic();
    this.updateMetrics();
    this.refreshView();
  }

  injectStyles() {
    if (!document.getElementById("candidates-styles")) {
      const style = document.createElement("style");
      style.id = "candidates-styles";
      style.textContent = `
        /* Estilos específicos para candidatos */
        .candidate-card {
          transition: all 0.2s ease;
        }
        
        .candidate-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .skill-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .ai-score-high { color: #10b981; }
        .ai-score-medium { color: #f59e0b; }
        .ai-score-low { color: #ef4444; }
        
        /* Estilos para truncar texto en cards */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Animaciones para cards */
        .candidate-card {
          transform: translateY(0);
        }
        
        .candidate-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }
        
        /* Responsive grid para cards */
        @media (max-width: 768px) {
          #candidatesCardsGrid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          #candidatesCardsGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1025px) and (max-width: 1280px) {
          #candidatesCardsGrid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  render() {
    const el = document.getElementById("main-content");
    el.innerHTML = `
      <div class="p-4 sm:p-6 md:p-8">
        <div class="mx-auto max-w-screen-2xl 2xl:max-w-[1600px]">
          
          <!-- Header similar a vacantes -->
          <header class="mb-6">
            <div class="flex items-center gap-3 mb-2">
              <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Candidatos</h1>
              <span class="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-0.5 font-medium">
                AI-POWERED
              </span>
            </div>
            <p class="text-slate-600 dark:text-gray-400">Gestiona y evalúa candidatos con inteligencia artificial</p>
          </header>



          <!-- Resumen de métricas -->
          <section class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600 dark:text-gray-400">Candidatos Activos</p>
                  <p id="activeCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p>
                </div>
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600 dark:text-blue-400">👥</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600 dark:text-gray-400">En Proceso</p>
                  <p id="inProcessCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p>
                </div>
                <div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
                  <span class="text-amber-600 dark:text-amber-400">⏳</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600 dark:text-gray-400">Entrevistas</p>
                  <p id="interviewCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p>
                </div>
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600 dark:text-purple-400">🎯</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600 dark:text-gray-400">Contratados</p>
                  <p id="hiredCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p>
                </div>
                <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                  <span class="text-emerald-600 dark:text-emerald-400">✅</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Controles superiores -->
          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 md:p-4 mb-4">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              
              <!-- Búsqueda -->
              <div class="flex-1 min-w-[260px] max-w-md">
                <div class="flex h-11 items-center gap-2 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3">
                  <span class="text-slate-500 dark:text-gray-400">🔎</span>
                  <input id="q" type="text" placeholder="Buscar candidatos..." class="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 text-sm">
                </div>
              </div>

              <!-- Filtros -->
              <div class="grid grid-cols-2 sm:flex gap-3 w-full lg:w-auto">
                <select id="fStage" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todas las etapas</option>
                  <option value="APLICADO">Aplicado</option>
                  <option value="SCREENING">Screening</option>
                  <option value="ENTREVISTA">Entrevista</option>
                  <option value="OFERTA">Oferta</option>
                  <option value="CONTRATADO">Contratado</option>
                </select>

                <select id="fJob" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todas las vacantes</option>
                  <!-- Opciones dinámicas -->
                </select>

                <select id="fPriority" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todas las prioridades</option>
                  <option value="ALTA">Alta</option>
                  <option value="MEDIA">Media</option>
                  <option value="BAJA">Baja</option>
                </select>

                <!-- Botón Quitar filtros -->
                <button id="clearFilters" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Quitar filtros
                </button>

                <select id="fPerPage" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
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
              <div class="flex flex-wrap items-center gap-2">
                <button data-view="list" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">
                  📋 Listado
                </button>
                <button data-view="cards" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">
                  🃏 Cards
                </button>
                <button data-view="pipeline" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">
                  🔄 Pipeline
                </button>
                <button data-view="analytics" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">
                  📊 Analytics
                </button>
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

                  <div class="flex items-center gap-1">
                    <button id="refreshInsights" class="p-1.5 rounded-lg bg-white/50 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors" title="Actualizar insights">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </button>
                    <button id="maximizeInsights" class="p-1.5 rounded-lg bg-white/50 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors" title="Maximizar panel">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- List (altura controlada + scroll) -->
                <div class="min-h-[180px] max-h-80 overflow-y-auto pr-1">
                  <ul id="candidateInsightsList" class="space-y-2 text-sm">
                    <!-- Insights dinámicos -->
                  </ul>
                </div>
              </div>
            </aside>
          </section>

        </div>
      </div>
    `;
  }

  bindStatic() {
    // Búsqueda
    document.getElementById("q")?.addEventListener("input", (e) => {
      this.state.query = e.target.value;
      this.refreshView();
    });

    // Filtros
    document.getElementById("fStage")?.addEventListener("change", (e) => {
      this.state.stage = e.target.value;
      this.refreshView();
    });
    document.getElementById("fJob")?.addEventListener("change", (e) => {
      this.state.job = e.target.value;
      this.refreshView();
    });
    document.getElementById("fPriority")?.addEventListener("change", (e) => {
      this.state.priority = e.target.value;
      this.refreshView();
    });
    document.getElementById("fPerPage")?.addEventListener("change", (e) => {
      this.state.itemsPerPage = parseInt(e.target.value);
      this.state.currentPage = 1;
      this.refreshView();
    });

    // Botón quitar filtros
    document.getElementById("clearFilters")?.addEventListener("click", () => {
      this.clearAllFilters();
    });

    // Tabs de navegación
    document.querySelectorAll(".tab-btn").forEach((b) =>
      b.addEventListener("click", () => {
        this.state.view = b.dataset.view;
        this.updateTabStates();
        this.refreshView();
      })
    );

    // AI Insights refresh
    document
      .getElementById("refreshInsights")
      ?.addEventListener("click", () => {
        this.state.insightsTick++;
        this.renderInsights();
      });

    // Maximizar insights
    document
      .getElementById("maximizeInsights")
      ?.addEventListener("click", () => {
        this.maximizeInsights();
      });
  }

  updateTabStates() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      const isActive = btn.dataset.view === this.state.view;
      btn.className = `tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors ${
        isActive
          ? "bg-slate-900 text-white"
          : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"
      }`;
    });
  }

  refreshView() {
    this.fillJobSelect();
    this.updateTabStates();

    const container = document.getElementById("viewContainer");
    if (!container) return;

    if (this.state.view === "list") {
      container.innerHTML = this.listHTML();
      this.bindList();
      this.applyFiltersToList();
    } else if (this.state.view === "cards") {
      container.innerHTML = this.cardsHTML();
      this.bindCards();
      this.applyFiltersToCards();
    } else if (this.state.view === "pipeline") {
      container.innerHTML = this.pipelineHTML();
      this.bindPipeline();
    } else if (this.state.view === "analytics") {
      container.innerHTML = this.analyticsHTML();
      this.bindAnalytics();
      this.renderAnalytics(); // primera carga
    }
  }

  // ---------- LIMPIAR FILTROS ----------
  clearAllFilters() {
    this.state.query = "";
    this.state.stage = "all";
    this.state.job = "all";
    this.state.priority = "all";
    this.state.currentPage = 1;

    const queryInput = document.getElementById("q");
    const stageSelect = document.getElementById("fStage");
    const jobSelect = document.getElementById("fJob");
    const prioritySelect = document.getElementById("fPriority");

    if (queryInput) queryInput.value = "";
    if (stageSelect) stageSelect.value = "all";
    if (jobSelect) jobSelect.value = "all";
    if (prioritySelect) prioritySelect.value = "all";

    this.refreshView();
  }

  fillJobSelect() {
    const select = document.getElementById("fJob");
    if (!select) return;

    const jobs = [
      ...new Set(this.state.candidates.map((c) => c.jobApplied)),
    ].sort();
    const currentValue = select.value || this.state.job;

    select.innerHTML = `
      <option value="all">Todas las vacantes</option>
      ${jobs.map((job) => `<option value="${job}">${job}</option>`).join("")}
    `;

    select.value = currentValue;
  }

  updateMetrics() {
    const candidates = this.state.candidates;

    // Candidatos activos (no contratados)
    const active = candidates.filter((c) => c.stage !== "CONTRATADO").length;
    document.getElementById("activeCandidates").textContent = active;

    // En proceso (screening + entrevista + oferta)
    const inProcess = candidates.filter((c) =>
      ["SCREENING", "ENTREVISTA", "OFERTA"].includes(c.stage)
    ).length;
    document.getElementById("inProcessCandidates").textContent = inProcess;

    // Entrevistas
    const interviews = candidates.filter(
      (c) => c.stage === "ENTREVISTA"
    ).length;
    document.getElementById("interviewCandidates").textContent = interviews;

    // Contratados
    const hired = candidates.filter((c) => c.stage === "CONTRATADO").length;
    document.getElementById("hiredCandidates").textContent = hired;
  }

  renderInsights() {
    const insights = [
      this.insight(
        "MATCHING · ALTA",
        "5 candidatos tienen score IA ≥90%",
        "hace 5 minutos",
        "alta",
        true
      ),
      this.insight(
        "PIPELINE · MEDIA",
        "3 candidatos llevan >7 días en screening",
        "hace 15 minutos",
        "media"
      ),
      this.insight(
        "OPTIMIZACIÓN · ALTA",
        "Candidatos con React tienen 25% más probabilidad de éxito",
        "hace 30 minutos",
        "alta",
        true
      ),
      this.insight(
        "ALERTA · URGENTE",
        "2 ofertas pendientes de respuesta por >48h",
        "hace 1 hora",
        "urgente",
        true
      ),
      this.insight(
        "TENDENCIA · BAJA",
        "Score IA promedio subió 8% esta semana",
        "hace 2 horas",
        "baja"
      ),
    ];

    document.getElementById("candidateInsightsList").innerHTML =
      insights.join("");
  }

  insight(type, text, time, priority, isNew = false) {
    const colors = {
      alta: "bg-rose-50 dark:bg-rose-900/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",
      urgente:
        "bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
      media:
        "bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
      baja: "bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    };

    return `
      <li class="flex items-start gap-3 p-3 rounded-lg border ${
        colors[priority]
      } ${isNew ? "ring-2 ring-violet-200 dark:ring-violet-800" : ""}">
        <div class="w-2 h-2 rounded-full bg-current mt-2 flex-shrink-0"></div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-medium text-xs">${type}</span>
            ${
              isNew
                ? '<span class="px-1.5 py-0.5 bg-violet-100 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 text-xs rounded-full font-medium">NUEVO</span>'
                : ""
            }
          </div>
          <p class="text-sm leading-relaxed">${text}</p>
          <span class="text-xs opacity-75 mt-1 block">${time}</span>
        </div>
      </li>
    `;
  }

  // ---------- VISTA LISTA ----------
  listHTML() {
    return `
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-slate-50/50 dark:bg-gray-700/50 text-slate-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              <tr>
                <th class="px-4 py-3 text-left">Candidato</th>
                <th class="px-4 py-3 text-left">Posición Actual</th>
                <th class="px-4 py-3 text-left">Skills</th>
                <th class="px-4 py-3 text-left">Score IA</th>
                <th class="px-4 py-3 text-left">Etapa</th>
                <th class="px-4 py-3 text-left">Prioridad</th>
                <th class="px-4 py-3 text-left">Aplicado</th>
                <th class="px-4 py-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody id="candidatesTableBody" class="divide-y divide-slate-100 dark:divide-gray-700">
              <!-- Filas dinámicas -->
            </tbody>
          </table>
        </div>
        
        <!-- Paginación -->
        <div id="pagination" class="px-4 py-3 border-t border-slate-100 dark:border-gray-700">
          <!-- Paginación dinámica -->
        </div>
      </section>
    `;
  }

  bindList() {
    // Event listeners específicos de la vista lista
  }
  // ======== VISTA ANALYTICS ========
  // ---------- ANALYTICS (CANDIDATOS) ----------
  analyticsHTML() {
    const totalPipeline = this.kanban?.items?.length || 0;
    return `
  <section class="rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
    <!-- HERO -->
    <div class="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-white text-xl md:text-2xl font-semibold">AI Analysis</h2>
        <p class="text-white/90 text-sm">Evaluación inteligente de candidatos • ${totalPipeline} candidatos en pipeline</p>
      </div>
      <div class="flex items-center gap-2">
        <select id="aaScoreType" class="h-10 rounded-lg bg-white/10 text-white px-3 border border-white/20">
          <option value="general">Score General</option>
          <option value="tech">Skills Técnicos</option>
          <option value="exp">Experiencia</option>
          <option value="edu">Educación</option>
          <option value="fit">Fit Cultural</option>
        </select>
        <button id="aaRefresh" class="h-10 px-3 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20">🔄 Actualizar</button>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 p-4 bg-white dark:bg-gray-800">
      <!-- Col izquierda -->
      <div class="col-span-12 lg:col-span-8 space-y-4">
        <!-- AI Score Analysis + Ranking -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Score -->
          <article class="col-span-12 md:col-span-4 rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <div class="flex items-start justify-between">
              <h3 class="font-semibold text-slate-800 dark:text-white">AI Score Analysis</h3>
              <button id="aaRecalc" class="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-gray-700">Recalcular</button>
            </div>

            <div class="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-600 dark:text-gray-300">
              <div class="col-span-3 grid place-items-center py-4">
                <div class="relative">
                  <div id="aaGauge" class="w-28 h-28 rounded-full" style="background:conic-gradient(#10b981 0%, #e5e7eb 0%)"></div>
                  <div class="absolute inset-2 rounded-full bg-white dark:bg-gray-800 grid place-items-center">
                    <div class="text-center">
                      <div id="aaScoreValue" class="text-2xl font-bold text-slate-900 dark:text-white">—</div>
                      <div class="text-xs text-slate-500 dark:text-gray-400">Score IA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-3 space-y-2">
                ${[
                  ["Skills Técnicos", "barTech"],
                  ["Experiencia", "barExp"],
                  ["Educación", "barEdu"],
                  ["Fit Cultural", "barFit"],
                ]
                  .map(
                    ([label, id]) => `
                  <div>
                    <div class="flex items-center justify-between text-[11px] mb-1"><span>${label}</span><span id="${id}Lbl">0%</span></div>
                    <div class="h-2 w-full bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div id="${id}" class="h-full bg-[#004176] dark:bg-blue-500" style="width:0%"></div>
                    </div>
                  </div>`
                  )
                  .join("")}
              </div>
            </div>
          </article>

          <!-- Ranking -->
          <article class="col-span-12 md:col-span-8 rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <div class="flex items-center justify-between gap-2">
              <h3 class="font-semibold text-slate-800 dark:text-white">🏆 AI Ranking System</h3>
              <div class="flex items-center gap-2">
                <select id="aaVacancy" class="h-9 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-sm">
                  <option value="all">Todas las vacantes</option>
                  ${(this.state.jobs || [])
                    .map((j) => `<option value="${j.id}">${j.title}</option>`)
                    .join("")}
                </select>
                <select id="aaCandidate" class="h-9 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-sm">
                  <!-- se llena en bind -->
                </select>
              </div>
            </div>

            <ul id="aaJustif" class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm"></ul>
          </article>
        </div>

        <!-- Banner análisis detallado -->
        <div class="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white flex items-center justify-between">
          <div class="font-medium">🧠 Análisis Detallado de IA</div>
          <div class="flex items-center gap-2">
            <select id="aaCandidateToolbar" class="h-9 rounded-lg bg-white/10 border border-white/20 px-3">
              <!-- se llena en bind -->
            </select>
            <button id="aaReport" class="h-9 px-3 rounded-lg bg-white/10 border border-white/20">🧾 Generar Reporte</button>
          </div>
        </div>

        <!-- 4 tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <h4 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">✅ Fortalezas Identificadas</h4>
            <ul id="aaStrengths" class="mt-2 text-sm list-disc pl-5 text-slate-700 dark:text-gray-300"></ul>
          </article>

          <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <h4 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">⚠️ Áreas de Mejora</h4>
            <ul id="aaWeaknesses" class="mt-2 text-sm list-disc pl-5 text-slate-700 dark:text-gray-300"></ul>
          </article>

          <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <h4 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">🔮 Predicciones de Éxito</h4>
            <ul id="aaPredictions" class="mt-2 text-sm space-y-1 text-slate-700 dark:text-gray-300"></ul>
          </article>

          <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
            <h4 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">🎯 Matriz de Compatibilidad</h4>
            <div id="aaMatrix" class="mt-2 grid grid-cols-2 gap-2 text-sm"></div>
          </article>
        </div>
      </div>

      <!-- Col derecha -->
      <aside class="col-span-12 lg:col-span-4 space-y-4">
        <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
          <h3 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">🤖 AI Insights</h3>
          <ul id="aaInsights" class="mt-3 space-y-2 text-sm"></ul>
        </article>

        <article class="rounded-xl ring-1 ring-slate-200 dark:ring-gray-700 p-4">
          <h3 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">📈 Métricas Rápidas</h3>
          <ul class="mt-3 grid grid-cols-2 gap-3 text-sm">
            <li class="rounded-lg bg-slate-50 dark:bg-gray-700 p-3">
              <div class="text-slate-500 dark:text-gray-300">Score promedio</div>
              <div id="aaMetricsAvg" class="text-2xl font-bold text-slate-900 dark:text-white">—</div>
            </li>
            <li class="rounded-lg bg-slate-50 dark:bg-gray-700 p-3">
              <div class="text-slate-500 dark:text-gray-300">En proceso</div>
              <div id="aaMetricsInProcess" class="text-2xl font-bold text-slate-900 dark:text-white">—</div>
            </li>
            <li class="rounded-lg bg-slate-50 dark:bg-gray-700 p-3">
              <div class="text-slate-500 dark:text-gray-300">Conversión</div>
              <div id="aaMetricsConv" class="text-2xl font-bold text-slate-900 dark:text-white">—</div>
            </li>
            <li class="rounded-lg bg-slate-50 dark:bg-gray-700 p-3">
              <div class="text-slate-500 dark:text-gray-300">T. contratación</div>
              <div id="aaMetricsTTH" class="text-2xl font-bold text-slate-900 dark:text-white">—</div>
            </li>
          </ul>
        </article>
      </aside>
    </div>
  </section>`;
  }

  bindAnalyticsUI() {
    // llena selects de candidatos con datos del kanban
    const items = this.kanban?.items?.slice(0, 200) || [];
    const options = items
      .map((c) => `<option value="${c.id}">${c.name} • ${c.jobTitle}</option>`)
      .join("");
    const cand = document.getElementById("aaCandidate");
    const candTb = document.getElementById("aaCandidateToolbar");
    if (cand)
      cand.innerHTML =
        `<option value="auto">Seleccionar candidato...</option>` + options;
    if (candTb)
      candTb.innerHTML =
        `<option value="auto">Seleccionar candidato...</option>` + options;

    const onChange = () => this.renderAnalytics();
    document
      .getElementById("aaScoreType")
      ?.addEventListener("change", onChange);
    document.getElementById("aaVacancy")?.addEventListener("change", onChange);
    cand?.addEventListener("change", onChange);
    candTb?.addEventListener("change", onChange);
    document
      .getElementById("aaRefresh")
      ?.addEventListener("click", () => this.renderAnalytics(true));
    document
      .getElementById("aaRecalc")
      ?.addEventListener("click", () => this.renderAnalytics(true));
    document.getElementById("aaReport")?.addEventListener("click", () => {
      alert(
        "📄 Reporte generado (demo). Incluye score, ranking, fortalezas, áreas de mejora y compatibilidad."
      );
    });
  }

  renderAnalytics(forceRandom = false) {
    // 1) elegir candidato activo
    const pickFromSelect = (id) => {
      const sel = document.getElementById(id);
      return sel && sel.value !== "auto" ? sel.value : null;
    };
    const chosenId =
      pickFromSelect("aaCandidate") || pickFromSelect("aaCandidateToolbar");
    const vacancyFilter = document.getElementById("aaVacancy")?.value || "all";

    let pool = this.kanban?.items || [];
    if (vacancyFilter !== "all")
      pool = pool.filter((c) => c.jobId === vacancyFilter);
    if (!pool.length) return;

    const cand = chosenId ? pool.find((c) => c.id === chosenId) : pool[0];

    // 2) datos IA demo (persistimos en la tarjeta para que no cambien siempre)
    if (!cand.ai || forceRandom) {
      const r = (min, max) => Math.round(min + Math.random() * (max - min));
      const skills = [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "SQL",
        "Figma",
        "Kubernetes",
        "Python",
        "Java",
      ];
      const weak = [
        "Testing",
        "Documentación",
        "CI/CD",
        "Seguridad",
        "Comunicación",
      ];
      cand.ai = {
        tech: r(55, 95),
        exp: r(40, 95),
        edu: r(50, 90),
        fit: r(45, 95),
        strengths: Array.from(
          { length: 3 },
          (_, i) => skills[(r(0, skills.length - 1) + i) % skills.length]
        ),
        weaknesses: Array.from(
          { length: 3 },
          (_, i) => weak[(r(0, weak.length - 1) + i) % weak.length]
        ),
        predictions: [
          `Prob. pasar a entrevista: ${r(65, 95)}%`,
          `Prob. oferta si entrevista: ${r(50, 85)}%`,
          `Riesgo de abandono: ${r(5, 25)}%`,
        ],
        compat: [
          ["Stack actual", `${r(70, 95)}%`],
          ["Metodología", `${r(55, 90)}%`],
          ["Huso horario", `${r(60, 95)}%`],
          ["Idioma", `${r(60, 95)}%`],
        ],
      };
    }

    const w = { tech: 0.3, exp: 0.25, edu: 0.15, fit: 0.3 };
    const scoreType =
      document.getElementById("aaScoreType")?.value || "general";
    const pct = cand.ai;
    const general = Math.round(
      pct.tech * w.tech + pct.exp * w.exp + pct.edu * w.edu + pct.fit * w.fit
    );

    const selectedScore = scoreType === "general" ? general : pct[scoreType];

    // 3) Pinta gauge + barras
    const gauge = document.getElementById("aaGauge");
    const scoreLbl = document.getElementById("aaScoreValue");
    if (gauge)
      gauge.style.background = `conic-gradient(#10b981 ${selectedScore}%, #e5e7eb 0)`;
    if (scoreLbl) scoreLbl.textContent = selectedScore;

    const setBar = (id, val) => {
      const el = document.getElementById(id);
      const lb = document.getElementById(id + "Lbl");
      if (el) el.style.width = `${val}%`;
      if (lb) lb.textContent = `${val}%`;
    };
    setBar("barTech", pct.tech);
    setBar("barExp", pct.exp);
    setBar("barEdu", pct.edu);
    setBar("barFit", pct.fit);

    // 4) Justificación del score
    const just = document.getElementById("aaJustif");
    if (just) {
      const parts = [
        [
          "⚙️ Técnicos",
          pct.tech,
          Math.round(((pct.tech * w.tech) / 100) * 100) / 1,
        ],
        [
          "🧭 Experiencia",
          pct.exp,
          Math.round(((pct.exp * w.exp) / 100) * 100) / 1,
        ],
        [
          "🎓 Educación",
          pct.edu,
          Math.round(((pct.edu * w.edu) / 100) * 100) / 1,
        ],
        [
          "🤝 Fit Cultural",
          pct.fit,
          Math.round(((pct.fit * w.fit) / 100) * 100) / 1,
        ],
      ];
      just.innerHTML = parts
        .map(
          ([t, v, contrib]) => `
      <li class="rounded-lg ring-1 ring-slate-200 dark:ring-gray-700 p-3">
        <div class="text-xs text-slate-500 dark:text-gray-400">${t}</div>
        <div class="text-lg font-semibold">${v}%</div>
        <div class="text-[11px] text-slate-500 dark:text-gray-400">Contribución: ${contrib}</div>
      </li>`
        )
        .join("");
    }

    // 5) Insights demo
    const insights = document.getElementById("aaInsights");
    if (insights) {
      const ideas = [
        {
          t: "Recomendación",
          c: `${cand.name} destaca en ${cand.ai.strengths[0]}. Asignar prueba técnica avanzada.`,
        },
        {
          t: "Tendencia",
          c: `Los candidatos de ${cand.jobDept} subieron 12% en score esta semana.`,
        },
        {
          t: "Alerta",
          c: `${cand.name} lleva 9 días sin contacto. Considera un follow-up.`,
        },
      ];
      insights.innerHTML = ideas
        .map(
          (x) => `
      <li class="rounded-lg bg-slate-50 dark:bg-gray-700 p-3 ring-1 ring-slate-200 dark:ring-gray-600">
        <p class="font-medium text-slate-800 dark:text-white">${x.t}</p>
        <p class="text-slate-700 dark:text-gray-300 text-sm">${x.c}</p>
      </li>`
        )
        .join("");
    }

    // 6) Métricas rápidas demo
    const inProcess = pool.length;
    const avgScore = Math.round(
      pool.reduce((s, c2) => {
        if (!c2.ai) c2.ai = { tech: 60, exp: 60, edu: 60, fit: 60 };
        return (
          s +
          Math.round(
            c2.ai.tech * w.tech +
              c2.ai.exp * w.exp +
              c2.ai.edu * w.edu +
              c2.ai.fit * w.fit
          )
        );
      }, 0) / pool.length
    );
    const conv = Math.round(55 + Math.random() * 20);
    const tth = Math.round(20 + Math.random() * 10);

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setTxt("aaMetricsAvg", avgScore);
    setTxt("aaMetricsInProcess", inProcess);
    setTxt("aaMetricsConv", `${conv}%`);
    setTxt("aaMetricsTTH", `${tth}d`);

    // 7) Detalle: Fortalezas, Debilidades, Predicciones, Matriz
    const li = (a) => a.map((x) => `<li>• ${x}</li>`).join("");
    const grid = (pairs) =>
      pairs
        .map(
          ([k, v]) => `
    <div class="rounded-lg bg-slate-50 dark:bg-gray-700 p-2">
      <div class="text-xs text-slate-500 dark:text-gray-400">${k}</div>
      <div class="font-medium">${v}</div>
    </div>`
        )
        .join("");

    setTxt("aaStrengths", "");
    setTxt("aaWeaknesses", "");
    setTxt("aaPredictions", "");
    const sEl = document.getElementById("aaStrengths");
    if (sEl) sEl.innerHTML = li(cand.ai.strengths);
    const wEl = document.getElementById("aaWeaknesses");
    if (wEl) wEl.innerHTML = li(cand.ai.weaknesses);
    const pEl = document.getElementById("aaPredictions");
    if (pEl) pEl.innerHTML = li(cand.ai.predictions);
    const mEl = document.getElementById("aaMatrix");
    if (mEl) mEl.innerHTML = grid(cand.ai.compat);
  }

  bindAnalytics() {
    // Usar el método bindAnalyticsUI que ya está implementado correctamente
    this.bindAnalyticsUI();
  }

  renderAnalytics(forceRandom = false) {
    const metric = document.getElementById("anMetric")?.value || "overall";
    const jobId = document.getElementById("anJobFilter")?.value || "all";
    const candId = document.getElementById("anCandidate")?.value || "";

    // Fuente de datos: kanban (ya sembrado en constructor)
    let pool = [...(this.kanban.items || [])];
    if (jobId !== "all") pool = pool.filter((c) => c.jobId === jobId);

    // Calcula métricas y arma ranking
    const rows = pool
      .map((c) => ({
        c,
        ...this._calcCandidateMetrics(c, { randomize: forceRandom }),
      }))
      .sort((a, b) => b[metric] - a[metric])
      .slice(0, 10);

    // Tabla
    const tbl = rows.length
      ? `
    <table class="min-w-full text-sm">
      <thead class="text-xs uppercase text-slate-500">
        <tr>
          <th class="text-left py-2 px-3">Candidato</th>
          <th class="text-left py-2 px-3">Vacante</th>
          <th class="text-right py-2 px-3">Score</th>
          <th class="text-right py-2 px-3">Skills</th>
          <th class="text-right py-2 px-3">Exp</th>
          <th class="text-right py-2 px-3">Edu</th>
          <th class="text-right py-2 px-3">Fit</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        ${rows
          .map(
            (r) => `
          <tr>
            <td class="py-2 px-3">${r.c.name}</td>
            <td class="py-2 px-3 text-slate-500">${r.c.jobTitle}</td>
            <td class="py-2 px-3 text-right font-semibold">${r.overall}%</td>
            <td class="py-2 px-3 text-right">${r.skills}%</td>
            <td class="py-2 px-3 text-right">${r.exp}%</td>
            <td class="py-2 px-3 text-right">${r.edu}%</td>
            <td class="py-2 px-3 text-right">${r.culture}%</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`
      : `<div class="text-sm text-slate-500">No hay candidatos para mostrar.</div>`;
    document.getElementById("anTable").innerHTML = tbl;

    // Selección para detalle (candidato select o top de la tabla)
    const chosen = candId
      ? pool.find((x) => x.id === candId)
      : rows[0]?.c || null;
    const m = chosen
      ? this._calcCandidateMetrics(chosen, { randomize: forceRandom })
      : null;

    // Score + barras
    const setW = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.style.width = `${v}%`;
    };
    document.getElementById("anScore").textContent = m ? m.overall : "—";
    setW("anBarSkills", m?.skills || 0);
    setW("anBarExp", m?.exp || 0);
    setW("anBarEdu", m?.edu || 0);
    setW("anBarCulture", m?.culture || 0);

    // Listas de detalle
    const ul = (id, arr) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = (
        arr?.length ? arr : ["Selecciona un candidato para ver el análisis"]
      )
        .map((x) => `<li>• ${x}</li>`)
        .join("");
    };
    ul("anStrengths", m?.strengths);
    ul("anImprovements", m?.improvements);
    ul("anPredictions", m?.predictions);

    // Matriz de compatibilidad (simple)
    const mx = document.getElementById("anMatrix");
    if (mx) {
      mx.innerHTML = m
        ? `
      <div class="grid grid-cols-2 gap-2">
        <div class="p-2 rounded bg-slate-50 dark:bg-gray-700">Match con puesto: <b>${m.overall}%</b></div>
        <div class="p-2 rounded bg-slate-50 dark:bg-gray-700">Riesgo de rotación: <b>${m.risk}</b></div>
      </div>`
        : `<div class="text-slate-500">Selecciona un candidato…</div>`;
    }

    // Panel de insights (derecha)
    const total = pool.length;
    const avgScore = rows.length
      ? Math.round(rows.reduce((s, r) => s + r.overall, 0) / rows.length)
      : 0;
    const highPot = rows.filter((r) => r.overall >= 80).length;
    const cold = pool.filter((c) => (c.stage ?? 0) <= 0).length; // aplicados sin mover

    const rec = document.getElementById("aiCardRec");
    const trd = document.getElementById("aiCardTrend");
    const alt = document.getElementById("aiCardAlert");
    const qk = document.getElementById("aiQuick");

    if (rec)
      rec.innerHTML = `<p class="font-medium text-slate-900 dark:text-white">Recomendación</p>
    <p class="text-slate-700 dark:text-gray-300 mt-1"><b>${highPot} candidatos</b> tienen alto potencial. Priorízalos en entrevistas.</p>`;

    if (trd)
      trd.innerHTML = `<p class="font-medium text-slate-900 dark:text-white">Tendencia</p>
    <p class="text-slate-700 dark:text-gray-300 mt-1">El score promedio actual es <b>${avgScore}%</b>. Calidad de aplicaciones ${
        avgScore >= 75 ? "excelente" : "estable"
      }.</p>`;

    if (alt)
      alt.innerHTML = `<p class="font-medium text-slate-900 dark:text-white">Alerta</p>
    <p class="text-slate-700 dark:text-gray-300 mt-1"><b>${cold}</b> candidatos siguen en “Aplicado”. Considera contacto inicial.</p>`;

    if (qk)
      qk.innerHTML = `
    <li>• Total candidatos (filtro): <b>${total}</b></li>
    <li>• Promedio Score Top 10: <b>${avgScore}%</b></li>
    <li>• Alto Potencial (≥80): <b>${highPot}</b></li>`;
  }

  // Heurística de métricas (puedes ajustar pesos y reglas)
  _calcCandidateMetrics(cand, { randomize = false } = {}) {
    const rand = (min, max) => Math.round(min + Math.random() * (max - min));
    const clamp = (v) => Math.max(0, Math.min(100, Math.round(v)));

    const base = {
      skills: clamp(randomize ? rand(55, 95) : 60 + (cand.rating || 0) * 7), // rating 3..5 -> empuja skills
      exp: clamp(randomize ? rand(45, 90) : 50 + (cand.stage || 0) * 10), // stage más alto ~ más experiencia
      edu: clamp(randomize ? rand(45, 85) : 55),
      culture: clamp(
        randomize
          ? rand(45, 90)
          : 50 + (cand.jobDept?.includes("Tecnología") ? 10 : 0)
      ),
    };

    const overall = clamp(
      base.skills * 0.4 + base.exp * 0.25 + base.edu * 0.15 + base.culture * 0.2
    );

    const strengths = [
      base.skills > 75 && "Dominio técnico sólido",
      base.exp > 70 && "Trayectoria alineada al rol",
      base.culture > 70 && "Buen ajuste con el equipo",
    ].filter(Boolean);

    const improvements = [
      base.edu < 60 && "Refuerzo en certificaciones/educación",
      base.exp < 60 && "Ampliar experiencia en proyectos recientes",
      base.skills < 70 && "Profundizar en frameworks clave",
    ].filter(Boolean);

    const predictions = [
      overall > 85
        ? "Alta probabilidad de éxito en 90 días"
        : overall > 70
        ? "Buen potencial con onboarding enfocado"
        : "Éxito incierto; requiere plan de desarrollo",
    ];

    const risk = overall > 80 ? "Bajo" : overall > 65 ? "Medio" : "Alto";

    return { ...base, overall, strengths, improvements, predictions, risk };
  }

  // ---------- VISTA CARDS ----------
  cardsHTML() {
    return `
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
        <div id="candidatesCardsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <!-- Cards dinámicas -->
        </div>
        
        <!-- Paginación -->
        <div id="cardsPagination" class="mt-6 pt-4 border-t border-slate-100 dark:border-gray-700">
          <!-- Paginación dinámica -->
        </div>
      </section>
    `;
  }

  bindCards() {
    // Event listeners específicos de la vista cards
  }

  applyFiltersToCards() {
    const filtered = this.getFilteredCandidates();
    const paginated = this.getPaginatedData(filtered);

    this.renderCards(paginated.data);
    this.renderCardsPagination(
      paginated.totalPages,
      paginated.currentPage,
      filtered.length
    );
  }

  renderCards(candidates) {
    const grid = document.getElementById("candidatesCardsGrid");
    if (!grid) return;

    grid.innerHTML = candidates
      .map((candidate) => this.candidateCard(candidate))
      .join("");

    // Bind card actions
    grid.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const candidateId =
          e.target.closest(".candidate-card").dataset.candidateId;
        const action = e.target.dataset.action;
        this.handleCandidateAction(candidateId, action);
      });
    });
  }

  candidateCard(candidate) {
    return `
      <div data-candidate-id="${
        candidate.id
      }" class="candidate-card bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 hover:ring-2 hover:ring-violet-200 dark:hover:ring-violet-800 transition-all duration-200">
        <!-- Header con foto y nombre -->
        <div class="flex items-center gap-3 mb-4">
          <img src="${candidate.avatar}" alt="${
      candidate.name
    }" class="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-700">
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-slate-900 dark:text-white truncate">${
              candidate.name
            }</h3>
            <p class="text-sm text-slate-600 dark:text-gray-400 truncate">${
              candidate.email
            }</p>
          </div>
          <div class="flex items-center gap-1">
            ${this.priorityPill(candidate.priority, true)}
          </div>
        </div>

        <!-- Posición actual -->
        <div class="mb-3">
          <div class="text-sm font-medium text-slate-900 dark:text-white">${
            candidate.currentPosition
          }</div>
          <div class="text-xs text-slate-500 dark:text-gray-400">${
            candidate.company
          } • ${candidate.experience}</div>
        </div>

        <!-- Vacante aplicada -->
        <div class="mb-3">
          <div class="text-xs text-slate-500 dark:text-gray-400 mb-1">Aplicó para:</div>
          <div class="text-sm font-medium text-slate-900 dark:text-white truncate">${
            candidate.jobApplied
          }</div>
        </div>

        <!-- Skills -->
        <div class="mb-4">
          <div class="flex flex-wrap gap-1">
            ${candidate.skills
              .slice(0, 4)
              .map((skill) => `<span class="skill-tag text-xs">${skill}</span>`)
              .join("")}
            ${
              candidate.skills.length > 4
                ? `<span class="text-xs text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-700 px-2 py-1 rounded-full">+${
                    candidate.skills.length - 4
                  }</span>`
                : ""
            }
          </div>
        </div>

        <!-- Score IA -->
        <div class="mb-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-slate-500 dark:text-gray-400">Score IA</span>
            <span class="text-sm font-semibold ${this.getScoreTextColor(
              candidate.aiScore
            )}">${candidate.aiScore}%</span>
          </div>
          <div class="w-full h-2 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden">
            <div class="h-full ${this.getScoreColor(
              candidate.aiScore
            )} transition-all duration-300" style="width: ${
      candidate.aiScore
    }%"></div>
          </div>
        </div>

        <!-- Etapa y fecha -->
        <div class="flex items-center justify-between mb-4">
          ${this.stagePill(candidate.stage)}
          <span class="text-xs text-slate-500 dark:text-gray-400">${this.formatDate(
            candidate.appliedAt
          )}</span>
        </div>

        <!-- Notas (si existen) -->
        ${
          candidate.notes
            ? `
          <div class="mb-4 p-2 bg-slate-50 dark:bg-gray-700 rounded-lg">
            <div class="text-xs text-slate-500 dark:text-gray-400 mb-1">Notas:</div>
            <div class="text-xs text-slate-700 dark:text-gray-300 line-clamp-2">${candidate.notes}</div>
          </div>
        `
            : ""
        }

        <!-- Acciones -->
        <div class="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-gray-700">
          <button data-action="view" class="flex-1 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Ver
          </button>
          <button data-action="edit" class="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" title="Editar">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  renderCardsPagination(totalPages, currentPage, totalItems) {
    const pagination = document.getElementById("cardsPagination");
    if (!pagination) return;

    const startItem = (currentPage - 1) * this.state.itemsPerPage + 1;
    const endItem = Math.min(currentPage * this.state.itemsPerPage, totalItems);

    pagination.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="text-sm text-slate-600 dark:text-gray-400">
          Mostrando ${startItem} a ${endItem} de ${totalItems} candidatos
        </div>
        <div class="flex items-center gap-2">
          <button ${currentPage === 1 ? "disabled" : ""} 
                  onclick="candidatosView.changePage(${currentPage - 1})"
                  class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Anterior
          </button>
          <span class="px-3 py-1 text-sm text-slate-600 dark:text-gray-400">
            Página ${currentPage} de ${totalPages}
          </span>
          <button ${currentPage === totalPages ? "disabled" : ""} 
                  onclick="candidatosView.changePage(${currentPage + 1})"
                  class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Siguiente
          </button>
        </div>
      </div>
    `;
  }

  applyFiltersToList() {
    const filtered = this.getFilteredCandidates();
    const paginated = this.getPaginatedData(filtered);

    this.renderTableRows(paginated.data);
    this.renderPagination(
      paginated.totalPages,
      paginated.currentPage,
      filtered.length
    );
  }

  getFilteredCandidates() {
    return this.state.candidates.filter((candidate) => {
      const matchesQuery =
        !this.state.query ||
        candidate.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
        candidate.email
          .toLowerCase()
          .includes(this.state.query.toLowerCase()) ||
        candidate.jobApplied
          .toLowerCase()
          .includes(this.state.query.toLowerCase()) ||
        candidate.skills.some((skill) =>
          skill.toLowerCase().includes(this.state.query.toLowerCase())
        );

      const matchesStage =
        this.state.stage === "all" || candidate.stage === this.state.stage;
      const matchesJob =
        this.state.job === "all" || candidate.jobApplied === this.state.job;
      const matchesPriority =
        this.state.priority === "all" ||
        candidate.priority === this.state.priority;

      return matchesQuery && matchesStage && matchesJob && matchesPriority;
    });
  }

  getPaginatedData(data) {
    const totalPages = Math.ceil(data.length / this.state.itemsPerPage);
    const startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    const endIndex = startIndex + this.state.itemsPerPage;

    return {
      data: data.slice(startIndex, endIndex),
      totalPages,
      currentPage: this.state.currentPage,
      totalItems: data.length,
    };
  }

  renderTableRows(candidates) {
    const tbody = document.getElementById("candidatesTableBody");
    if (!tbody) return;

    tbody.innerHTML = candidates
      .map((candidate) => this.candidateRow(candidate))
      .join("");

    // Bind row actions
    tbody.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const candidateId = e.target.closest("tr").dataset.candidateId;
        const action = e.target.dataset.action;
        this.handleCandidateAction(candidateId, action);
      });
    });
  }

  candidateRow(candidate) {
    return `
      <tr data-candidate-id="${
        candidate.id
      }" class="hover:bg-slate-50/60 dark:hover:bg-gray-700/50">
        <td class="px-4 py-4">
          <div class="flex items-center gap-3">
            <img src="${candidate.avatar}" alt="${
      candidate.name
    }" class="w-10 h-10 rounded-full object-cover">
            <div>
              <div class="font-medium text-slate-900 dark:text-white">${
                candidate.name
              }</div>
              <div class="text-xs text-slate-500 dark:text-gray-400">${
                candidate.email
              }</div>
            </div>
          </div>
        </td>
        <td class="px-4 py-4">
          <div class="font-medium text-slate-900 dark:text-white">${
            candidate.currentPosition
          }</div>
          <div class="text-xs text-slate-500 dark:text-gray-400">${
            candidate.company
          }</div>
        </td>
        <td class="px-4 py-4">
          <div class="flex flex-wrap gap-1">
            ${candidate.skills
              .slice(0, 3)
              .map((skill) => `<span class="skill-tag">${skill}</span>`)
              .join("")}
            ${
              candidate.skills.length > 3
                ? `<span class="text-xs text-slate-500 dark:text-gray-400">+${
                    candidate.skills.length - 3
                  }</span>`
                : ""
            }
          </div>
        </td>
        <td class="px-4 py-4">
          <div class="flex items-center gap-2">
            <div class="w-16 h-2 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden">
              <div class="h-full ${this.getScoreColor(
                candidate.aiScore
              )}" style="width: ${candidate.aiScore}%"></div>
            </div>
            <span class="text-sm font-medium ${this.getScoreTextColor(
              candidate.aiScore
            )}">${candidate.aiScore}%</span>
          </div>
        </td>
        <td class="px-4 py-4">
          ${this.stagePill(candidate.stage)}
        </td>
        <td class="px-4 py-4">
          ${this.priorityPill(candidate.priority)}
        </td>
        <td class="px-4 py-4">
          <span class="text-slate-600 dark:text-gray-400 text-sm">${this.formatDate(
            candidate.appliedAt
          )}</span>
        </td>
        <td class="px-4 py-4">
          <div class="flex items-center gap-2">
            <button data-action="view" class="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors" title="Ver perfil">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </button>
            <button data-action="edit" class="p-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" title="Editar">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }

  // ---------- VISTA PIPELINE ----------
  pipelineHTML() {
    return `
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          ${this.getPipelineStages()
            .map(
              (stage) => `
            <div class="bg-slate-50 dark:bg-gray-700 rounded-xl p-4">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-medium text-slate-900 dark:text-white">${
                  stage.name
                }</h3>
                <span class="bg-slate-200 dark:bg-gray-600 text-slate-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                  ${this.getCandidatesByStage(stage.key).length}
                </span>
              </div>
              <div class="space-y-3" id="stage-${stage.key}">
                ${this.getCandidatesByStage(stage.key)
                  .map((candidate) => this.pipelineCard(candidate))
                  .join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  bindPipeline() {
    // Event listeners específicos de la vista pipeline
  }

  getPipelineStages() {
    return [
      { key: "APLICADO", name: "Aplicado", color: "blue" },
      { key: "SCREENING", name: "Screening", color: "amber" },
      { key: "ENTREVISTA", name: "Entrevista", color: "purple" },
      { key: "OFERTA", name: "Oferta", color: "emerald" },
      { key: "CONTRATADO", name: "Contratado", color: "green" },
    ];
  }

  getCandidatesByStage(stage) {
    return this.getFilteredCandidates().filter(
      (candidate) => candidate.stage === stage
    );
  }

  pipelineCard(candidate) {
    return `
      <div class="candidate-card bg-white dark:bg-gray-800 rounded-lg p-3 border border-slate-200 dark:border-gray-600 cursor-pointer">
        <div class="flex items-center gap-2 mb-2">
          <img src="${candidate.avatar}" alt="${
      candidate.name
    }" class="w-8 h-8 rounded-full object-cover">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-sm text-slate-900 dark:text-white truncate">${
              candidate.name
            }</div>
            <div class="text-xs text-slate-500 dark:text-gray-400 truncate">${
              candidate.jobApplied
            }</div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-xs ${this.getScoreTextColor(
            candidate.aiScore
          )} font-medium">${candidate.aiScore}% IA</span>
          ${this.priorityPill(candidate.priority, true)}
        </div>
      </div>
    `;
  }

  // ---------- UTILIDADES ----------
  getScoreColor(score) {
    if (score >= 90) return "bg-emerald-500";
    if (score >= 75) return "bg-amber-500";
    return "bg-slate-400";
  }

  getScoreTextColor(score) {
    if (score >= 90) return "ai-score-high";
    if (score >= 75) return "ai-score-medium";
    return "ai-score-low";
  }

  stagePill(stage) {
    const colors = {
      APLICADO:
        "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
      SCREENING:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
      ENTREVISTA:
        "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
      OFERTA:
        "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
      CONTRATADO:
        "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
    };

    const labels = {
      APLICADO: "Aplicado",
      SCREENING: "Screening",
      ENTREVISTA: "Entrevista",
      OFERTA: "Oferta",
      CONTRATADO: "Contratado",
    };

    return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
      colors[stage] || colors.APLICADO
    }">${labels[stage] || stage}</span>`;
  }

  priorityPill(priority, small = false) {
    const colors = {
      ALTA: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300",
      MEDIA:
        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
      BAJA: "bg-slate-100 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300",
    };

    const sizeClass = small ? "px-1.5 py-0.5 text-xs" : "px-2.5 py-0.5 text-xs";

    return `<span class="inline-flex items-center rounded-full ${sizeClass} font-medium ${
      colors[priority] || colors.MEDIA
    }">${priority}</span>`;
  }

  formatDate(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Hoy";
    if (days === 1) return "Ayer";
    return `Hace ${days} días`;
  }

  renderPagination(totalPages, currentPage, totalItems) {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    const startItem = (currentPage - 1) * this.state.itemsPerPage + 1;
    const endItem = Math.min(currentPage * this.state.itemsPerPage, totalItems);

    pagination.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="text-sm text-slate-600 dark:text-gray-400">
          Mostrando ${startItem} a ${endItem} de ${totalItems} candidatos
        </div>
        <div class="flex items-center gap-2">
          <button ${currentPage === 1 ? "disabled" : ""} 
                  onclick="candidatosView.changePage(${currentPage - 1})"
                  class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Anterior
          </button>
          <span class="px-3 py-1 text-sm text-slate-600 dark:text-gray-400">
            Página ${currentPage} de ${totalPages}
          </span>
          <button ${currentPage === totalPages ? "disabled" : ""} 
                  onclick="candidatosView.changePage(${currentPage + 1})"
                  class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
            Siguiente
          </button>
        </div>
      </div>
    `;
  }

  changePage(page) {
    this.state.currentPage = page;
    this.refreshView();
  }

  handleCandidateAction(candidateId, action) {
    const candidate = this.state.candidates.find((c) => c.id === candidateId);
    if (!candidate) return;

    switch (action) {
      case "view":
        alert(`Ver perfil de ${candidate.name} (demo)`);
        break;
      case "edit":
        alert(`Editar ${candidate.name} (demo)`);
        break;
    }
  }

  maximizeInsights() {
    // Crear modal para mostrar insights maximizados
    const modal = document.createElement("div");
    modal.id = "insightsModal";
    modal.className =
      "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4";

    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <!-- Header de la modal -->
        <div class="flex items-center justify-between p-6 border-b border-slate-200 dark:border-gray-700">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <span class="text-white text-lg">🤖</span>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-slate-900 dark:text-white">AI Insights - Análisis Completo</h2>
              <p class="text-sm text-slate-600 dark:text-gray-400">Análisis inteligente detallado de candidatos</p>
            </div>
          </div>
          <button id="closeInsightsModal" class="p-2 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Contenido de la modal -->
        <div class="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Insights principales -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-4">Insights Principales</h3>
              <ul id="modalInsightsList" class="space-y-3">
                <!-- Insights dinámicos -->
              </ul>
            </div>
            
            <!-- Métricas adicionales -->
            <div class="space-y-4">
              <h3 class="text-lg font-medium text-slate-900 dark:text-white mb-4">Métricas Detalladas</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-50 dark:bg-gray-700 rounded-lg p-4">
                  <div class="text-2xl font-bold text-slate-900 dark:text-white">${
                    this.state.candidates.filter((c) => c.aiScore >= 90).length
                  }</div>
                  <div class="text-sm text-slate-600 dark:text-gray-400">Score IA ≥90%</div>
                </div>
                <div class="bg-slate-50 dark:bg-gray-700 rounded-lg p-4">
                  <div class="text-2xl font-bold text-slate-900 dark:text-white">${Math.round(
                    this.state.candidates.reduce(
                      (acc, c) => acc + c.aiScore,
                      0
                    ) / this.state.candidates.length
                  )}%</div>
                  <div class="text-sm text-slate-600 dark:text-gray-400">Score promedio</div>
                </div>
                <div class="bg-slate-50 dark:bg-gray-700 rounded-lg p-4">
                  <div class="text-2xl font-bold text-slate-900 dark:text-white">${
                    this.state.candidates.filter((c) => c.priority === "ALTA")
                      .length
                  }</div>
                  <div class="text-sm text-slate-600 dark:text-gray-400">Prioridad alta</div>
                </div>
                <div class="bg-slate-50 dark:bg-gray-700 rounded-lg p-4">
                  <div class="text-2xl font-bold text-slate-900 dark:text-white">${Math.round(
                    (this.state.candidates.filter(
                      (c) => c.stage === "CONTRATADO"
                    ).length /
                      this.state.candidates.length) *
                      100
                  )}%</div>
                  <div class="text-sm text-slate-600 dark:text-gray-400">Tasa conversión</div>
                </div>
              </div>
              
              <!-- Top skills -->
              <div class="mt-6">
                <h4 class="font-medium text-slate-900 dark:text-white mb-3">Skills más demandadas</h4>
                <div class="flex flex-wrap gap-2">
                  ${this.getTopSkills()
                    .map(
                      (skill) =>
                        `<span class="skill-tag">${skill.name} (${skill.count})</span>`
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Llenar insights en la modal
    document.getElementById("modalInsightsList").innerHTML = [
      this.insight(
        "MATCHING · ALTA",
        "5 candidatos tienen score IA ≥90%",
        "hace 5 minutos",
        "alta",
        true
      ),
      this.insight(
        "PIPELINE · MEDIA",
        "3 candidatos llevan >7 días en screening",
        "hace 15 minutos",
        "media"
      ),
      this.insight(
        "OPTIMIZACIÓN · ALTA",
        "Candidatos con React tienen 25% más probabilidad de éxito",
        "hace 30 minutos",
        "alta",
        true
      ),
      this.insight(
        "ALERTA · URGENTE",
        "2 ofertas pendientes de respuesta por >48h",
        "hace 1 hora",
        "urgente",
        true
      ),
      this.insight(
        "TENDENCIA · BAJA",
        "Score IA promedio subió 8% esta semana",
        "hace 2 horas",
        "baja"
      ),
      this.insight(
        "PERFORMANCE · MEDIA",
        "Tiempo promedio en pipeline: 12 días",
        "hace 3 horas",
        "media"
      ),
      this.insight(
        "DIVERSIDAD · BAJA",
        "40% de candidatos son de Madrid",
        "hace 4 horas",
        "baja"
      ),
      this.insight(
        "CALIDAD · ALTA",
        "85% de candidatos superan screening inicial",
        "hace 5 horas",
        "alta"
      ),
    ].join("");

    // Cerrar modal
    document
      .getElementById("closeInsightsModal")
      .addEventListener("click", () => {
        document.body.removeChild(modal);
      });

    // Cerrar con ESC o click fuera
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });

    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        if (document.getElementById("insightsModal")) {
          document.body.removeChild(modal);
        }
        document.removeEventListener("keydown", escHandler);
      }
    });
  }

  getTopSkills() {
    const skillCount = {};
    this.state.candidates.forEach((candidate) => {
      candidate.skills.forEach((skill) => {
        skillCount[skill] = (skillCount[skill] || 0) + 1;
      });
    });

    return Object.entries(skillCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([name, count]) => ({ name, count }));
  }
}

// Hacer la instancia global para la paginación
let candidatosView;
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "#candidatos") {
    candidatosView = new CandidatosView();
  }
});
