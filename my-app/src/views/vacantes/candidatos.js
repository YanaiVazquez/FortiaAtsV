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
      isMaximized: false, // Estado de maximización
      // Paginación
      currentPage: 1,
      itemsPerPage: 10,
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

        /* Estilos para vista maximizada */
        .maximized-view {
          transition: all 0.3s ease-in-out;
        }
        
        .maximized-view #candidatesCardsGrid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          gap: 1rem !important;
        }
        
        /* Más columnas en pantallas grandes cuando está maximizado */
        @media (min-width: 1280px) {
          .maximized-view #candidatesCardsGrid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important;
          }
        }
        
        @media (min-width: 1536px) {
          .maximized-view #candidatesCardsGrid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
          }
        }
        
        @media (min-width: 1920px) {
          .maximized-view #candidatesCardsGrid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
          }
        }
        
        .maximized-view .candidate-card {
          transform: scale(1.01);
        }
        
        .maximized-view .candidate-card:hover {
          transform: scale(1.03);
        }

        /* Animación del botón de maximizar */
        #maximizeInsights {
          transition: all 0.2s ease;
        }
        
        #maximizeInsights:hover {
          transform: scale(1.1);
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
          <section id="metricsSection" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
              <div class="flex flex-wrap items-center justify-between gap-2">
                <!-- Tabs de navegación -->
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

                  <button id="btnInsights" class="rounded-lg border border-slate-200 dark:border-gray-600 px-2.5 py-1.5 text-xs text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 active:scale-[.98] transition" aria-label="Actualizar insights">
                    <span class="inline-block">🔄</span> Actualizar
                  </button>
                </div>

                <!-- List (altura controlada + scroll) -->
                <div class="min-h-[180px] max-h-80 overflow-y-auto pr-1">
               <ul id="insightsList" class="space-y-2 text-sm">
  <!-- Recomendación -->
  <li class="rounded-lg bg-blue-50 dark:bg-blue-900/30 ring-blue-100 dark:ring-blue-800 ring-1 p-3">
    <p class="font-medium text-slate-900 dark:text-white">Recomendación</p>
    <p class="text-slate-700 dark:text-gray-300 text-sm">
      <span class="font-semibold">12 candidatos</span> tienen alto potencial para roles de desarrollo. 
      Considera priorizarlos en el proceso.
    </p>
  </li>

  <!-- Tendencia -->
  <li class="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800 ring-1 p-3">
    <p class="font-medium text-slate-900 dark:text-white">Tendencia</p>
    <p class="text-slate-700 dark:text-gray-300 text-sm">
      El score promedio de candidatos ha 
      <span class="font-semibold text-emerald-600 dark:text-emerald-400">mejorado 15%</span> esta semana. 
      Excelente calidad de aplicaciones.
    </p>
  </li>

  <!-- Alerta -->
  <li class="rounded-lg bg-amber-50 dark:bg-amber-900/30 ring-amber-100 dark:ring-amber-800 ring-1 p-3">
    <p class="font-medium text-slate-900 dark:text-white">Alerta</p>
    <p class="text-slate-700 dark:text-gray-300 text-sm">
      <span class="font-semibold">8 candidatos</span> llevan más de 2 semanas sin contacto. 
      Considera hacer seguimiento.
    </p>
  </li>
</ul>

                </div>
              </div>
            </aside>
          </section>

        </div>
      </div>
    `;
  }
  _normalizeCandidate(c) {
    // Deriva aiScoring a partir de aiScore (placeholder realista)
    const overall = c.aiScore ?? 70;
    const skillsMatch = Math.min(10, Math.round((overall / 100) * 9) + 1);
    const cultureMatch = Math.min(10, Math.round((overall / 100) * 8) + 2);
    const successProb = Math.max(40, Math.min(95, Math.round(overall * 0.95)));

    // Time-in-stage aproximado con 'appliedAt'
    const dias = Math.max(
      1,
      Math.floor((Date.now() - (c.appliedAt || Date.now())) / 86400000)
    );
    const timeInStage = `${dias} día${dias > 1 ? "s" : ""}`;

    return {
      id: c.id,
      name: c.name,
      avatar: c.avatar,
      currentPosition: c.currentPosition,
      company: c.company,
      location: c.location || "—",
      experience: c.experience || "—",
      jobTitle: c.jobApplied || "—",
      jobId: c.jobId || null, // si no tienes, déjalo en null
      stage:
        { SCREENING: "IA_SCREENING", ENTREVISTA: "ENTREVISTA_TEC" }[c.stage] ||
        c.stage,
      priority: c.priority,
      ai: { overall, skillsMatch, cultureMatch, successProb },
      timeInStage,
    };
  }
  getCandidatesByStage(stageKey) {
    const normalized = this.getFilteredCandidates().map((c) =>
      this._normalizeCandidate(c)
    );
    return normalized.filter((c) => c.stage === stageKey);
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

    // Manejar tecla ESC para salir del modo maximizado
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.state.isMaximized) {
        this.maximizeInsights(); // Alternar para salir del modo maximizado
      }
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
      {
        t: "Recomendación",
        c: "María García tiene score IA de 92%. Considera priorizarla para entrevista inmediata por su alta compatibilidad.",
        cls: "bg-blue-50 dark:bg-blue-900/30 ring-blue-100 dark:ring-blue-800",
      },
      {
        t: "Tendencia",
        c: "Los candidatos con experiencia en React tienen 3× más probabilidad de pasar el screening técnico.",
        cls: "bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800",
      },
      {
        t: "Alerta",
        c: "Sofía Herrera lleva 7 días con oferta pendiente. ¿Hacer seguimiento para cerrar contratación?",
        cls: "bg-amber-50 dark:bg-amber-900/30 ring-amber-100 dark:ring-amber-800",
      },
      {
        t: "Optimización",
        c: "Candidatos de Madrid muestran 25% mejor tasa de conversión. Considera enfocar búsquedas en esta ubicación.",
        cls: "bg-purple-50 dark:bg-purple-900/30 ring-purple-100 dark:ring-purple-800",
      },
      {
        t: "Pipeline",
        c: "2 candidatos en entrevista y 1 en oferta. Pipeline saludable, mantener velocidad de proceso actual.",
        cls: "bg-indigo-50 dark:bg-indigo-900/30 ring-indigo-100 dark:ring-indigo-800",
      },
      {
        t: "Análisis",
        c: "Score IA promedio subió a 88% esta semana. Excelente calidad de candidatos en el pipeline.",
        cls: "bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800",
      },
    ];

    const start = this.state.insightsTick % insights.length;
    const ordered = [
      insights[start],
      insights[(start + 1) % insights.length],
      insights[(start + 2) % insights.length],
    ];

    const ul = document.getElementById("candidateInsightsList");
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

  analyticsHTML() {
    const total = this.kanban?.items?.length || 0;
    return `
  <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 overflow-hidden">
    <!-- Barra superior -->
    <div class="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-4 md:p-5 text-white">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="text-lg md:text-xl font-semibold">AI Analysis</h2>
          <p class="text-white/80 text-sm">Evaluación inteligente de candidatos • ${total} en pipeline</p>
        </div>
        <div class="flex items-center gap-2">
          <select id="anMetric" class="h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-sm">
            <option value="overall">Score General</option>
            <option value="skills">Skills Técnicos</option>
            <option value="exp">Experiencia</option>
            <option value="edu">Educación</option>
            <option value="culture">Fit Cultural</option>
          </select>
          <button id="anRefresh" class="h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-sm">🔄 Actualizar</button>
        </div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="p-4 md:p-5">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-5">
        
        <!-- Columna principal -->
        <div class="xl:col-span-9 space-y-5">
          <!-- Fila 1: Score + Ranking -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            <!-- Score -->
            <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
              <header class="flex items-center justify-between">
              <h3 class="font-semibold text-slate-800 dark:text-white">AI Score Analysis</h3>
                <button id="anRecalc" 
                  class="text-xs px-2 py-1 rounded 
                        border border-slate-200 dark:border-gray-600 
                        bg-white dark:bg-gray-700 
                        text-slate-700 dark:text-gray-200 
                        hover:bg-slate-50 dark:hover:bg-gray-600 
                        active:scale-[.98] transition">
                  Recalcular
                </button>
              </header>
              <div class="mt-4 flex items-center gap-4">
                <div class="relative grid place-items-center w-28 h-28 rounded-full">
                  <div class="absolute inset-0 rounded-full ring-8 ring-slate-100 dark:ring-gray-700"></div>
                  <div>
                    <div id="anScore" class="text-3xl font-bold text-slate-900 dark:text-white">100</div>
                    <div class="text-xs text-slate-500 dark:text-gray-400 text-center -mt-1">Score IA</div>
                  </div>
                </div>
                <div class="flex-1 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div class="text-slate-500 dark:text-gray-400">Skills Técnicos</div>
                    <div class="h-2 bg-slate-200 dark:bg-gray-700 rounded overflow-hidden">
                      <div id="anBarSkills" class="h-2 bg-indigo-600 dark:bg-indigo-500" style="width:0%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="text-slate-500 dark:text-gray-400">Experiencia</div>
                    <div class="h-2 bg-slate-200 dark:bg-gray-700 rounded overflow-hidden">
                      <div id="anBarExp" class="h-2 bg-indigo-600 dark:bg-indigo-500" style="width:0%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="text-slate-500 dark:text-gray-400">Educación</div>
                    <div class="h-2 bg-slate-200 dark:bg-gray-700 rounded overflow-hidden">
                      <div id="anBarEdu" class="h-2 bg-indigo-600 dark:bg-indigo-500" style="width:0%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="text-slate-500 dark:text-gray-400">Fit Cultural</div>
                    <div class="h-2 bg-slate-200 dark:bg-gray-700 rounded overflow-hidden">
                      <div id="anBarCulture" class="h-2 bg-indigo-600 dark:bg-indigo-500" style="width:0%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <!-- Ranking (ocupa 2 columnas) -->
            <!-- Ranking (ocupa 2 columnas) -->
<article class="lg:col-span-2 rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
  <header class="flex flex-wrap items-center justify-between gap-2 mb-3">
    <h3 class="font-semibold text-slate-800 dark:text-white">AI Ranking System</h3>
    <div class="flex items-center gap-2">
      <select id="anJobFilter" 
        class="h-9 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 
               bg-white dark:bg-gray-700 text-sm text-slate-700 dark:text-gray-200">
        <option value="all">Todas las vacantes</option>
      </select>
      <select id="anCandidate" 
        class="h-9 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 
               bg-white dark:bg-gray-700 text-sm text-slate-700 dark:text-gray-200">
        <option value="">Seleccionar candidato…</option>
      </select>
    </div>
  </header>
  <div id="anTable" class="overflow-x-auto"></div>
</article>

          </div>

          <!-- Fila 2: Detalle IA -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-slate-800 dark:text-white">Análisis Detallado de IA</h3>
              <button id="anReport"
                class="px-3 py-1.5 rounded-lg text-sm transition-colors
                      bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50
                      dark:bg-gray-700 dark:text-gray-100 dark:ring-gray-600 dark:hover:bg-gray-600">
                🧾 Generar Reporte
              </button>

            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Fortalezas Identificadas</h4>
                <ul id="anStrengths" class="mt-2 text-sm space-y-2 text-slate-700 dark:text-gray-300"></ul>
              </article>
              <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Áreas de Mejora</h4>
                <ul id="anImprovements" class="mt-2 text-sm space-y-2 text-slate-700 dark:text-gray-300"></ul>
              </article>
              <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Predicciones de Éxito</h4>
                <ul id="anPredictions" class="mt-2 text-sm space-y-2 text-slate-700 dark:text-gray-300"></ul>
              </article>
              <article class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
                <h4 class="font-semibold text-slate-800 dark:text-white">Matriz de Compatibilidad</h4>
                <div id="anMatrix" class="mt-2 text-sm text-slate-700 dark:text-gray-300"></div>
              </article>
            </div>
          </div>
        </div>

        <!-- Columna derecha: AI Insights -->
        <aside class="xl:col-span-3 space-y-4">
          <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
            <h3 class="font-semibold text-slate-800 dark:text-white flex items-center gap-2">🤖 AI Insights</h3>
            <ul class="mt-3 space-y-3 text-sm">
              <li class="rounded-lg p-3 bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-100 dark:ring-blue-800" id="aiCardRec"></li>
              <li class="rounded-lg p-3 bg-emerald-50 dark:bg-emerald-900/20 ring-1 ring-emerald-100 dark:ring-emerald-800" id="aiCardTrend"></li>
              <li class="rounded-lg p-3 bg-amber-50 dark:bg-amber-900/20 ring-1 ring-amber-100 dark:ring-amber-800" id="aiCardAlert"></li>
            </ul>
          </div>
          <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
            <h3 class="font-semibold text-slate-800 dark:text-white">📊 Métricas Rápidas</h3>
            <ul class="mt-2 text-sm space-y-2" id="aiQuick"></ul>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
  }

  bindAnalytics() {
    // Llenar selects
    const jobSel = document.getElementById("anJobFilter");
    const candSel = document.getElementById("anCandidate");

    (this.state.jobs || []).forEach((j) => {
      const opt = document.createElement("option");
      opt.value = j.id;
      opt.textContent = j.title;
      jobSel.appendChild(opt);
    });

    (this.kanban.items || []).forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = `${c.name} — ${c.jobTitle}`;
      candSel.appendChild(opt);
    });

    jobSel.addEventListener("change", () => this.renderAnalytics());
    candSel.addEventListener("change", () => this.renderAnalytics());
    document
      .getElementById("anMetric")
      ?.addEventListener("change", () => this.renderAnalytics());
    document
      .getElementById("anRefresh")
      ?.addEventListener("click", () => this.renderAnalytics(true));
    document
      .getElementById("anRecalc")
      ?.addEventListener("click", () => this.renderAnalytics(true));
    document
      .getElementById("anReport")
      ?.addEventListener("click", () => alert("Generar reporte (demo)"));
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
      <thead class="text-xs uppercase text-slate-500 dark:text-gray-400">
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
      <tbody class="divide-y divide-slate-100 dark:divide-gray-700">
        ${rows
          .map(
            (r) => `
          <tr>
            <td class="py-2 px-3 text-slate-900 dark:text-white">${r.c.name}</td>
            <td class="py-2 px-3 text-slate-500 dark:text-gray-400">${r.c.jobTitle}</td>
            <td class="py-2 px-3 text-right font-semibold text-slate-900 dark:text-white">${r.overall}%</td>
            <td class="py-2 px-3 text-right text-slate-700 dark:text-gray-300">${r.skills}%</td>
            <td class="py-2 px-3 text-right text-slate-700 dark:text-gray-300">${r.exp}%</td>
            <td class="py-2 px-3 text-right text-slate-700 dark:text-gray-300">${r.edu}%</td>
            <td class="py-2 px-3 text-right text-slate-700 dark:text-gray-300">${r.culture}%</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>`
      : `<div class="text-sm text-slate-500 dark:text-gray-400">No hay candidatos para mostrar.</div>`;
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

  legacyMap = {
    SCREENING: "IA_SCREENING",
    ENTREVISTA: "ENTREVISTA_TEC",
  };

  getPipelineStages() {
    return [
      { key: "APLICADO", name: "📝 Aplicado", color: "blue" },
      { key: "IA_SCREENING", name: "🤖 IA Screening", color: "indigo" },
      { key: "REVISION_RH", name: "👁️ Revisión RH", color: "amber" },
      { key: "ENTREVISTA_TEC", name: "🛠️ Entrevista Técnica", color: "purple" },
      {
        key: "ENTREVISTA_FINAL",
        name: "🎯 Entrevista Final",
        color: "fuchsia",
      },
      { key: "OFERTA", name: "✅ Oferta", color: "emerald" },
      { key: "CONTRATADO", name: "🟢 Contratado", color: "green" },
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
    // Alternar estado de maximización
    this.state.isMaximized = !this.state.isMaximized;

    // Actualizar el icono del botón
    const btn = document.getElementById("maximizeInsights");
    if (btn) {
      const icon = btn.querySelector("svg");
      if (this.state.isMaximized) {
        // Icono de minimizar
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9v4.5M15 9h4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15v4.5M15 15h4.5m0 0l-5.5 5.5"></path>`;
        btn.title = "Minimizar vista";
      } else {
        // Icono de maximizar
        icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>`;
        btn.title = "Maximizar vista";
      }
    }

    // Aplicar estilos de maximización
    this.applyMaximizedStyles();
  }

  applyMaximizedStyles() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    if (this.state.isMaximized) {
      // Maximizar: ocultar sidebar de insights, métricas y expandir contenido principal
      const insightsAside = mainContent.querySelector("aside");
      const mainSection = mainContent.querySelector("section.grid");
      const metricsSection = document.getElementById("metricsSection");

      if (insightsAside) {
        insightsAside.style.display = "none";
      }

      if (metricsSection) {
        metricsSection.style.display = "none";
      }

      if (mainSection) {
        // Cambiar de grid con columnas a una sola columna que ocupe todo el ancho
        mainSection.className = mainSection.className.replace(
          "lg:grid-cols-12",
          "lg:grid-cols-1"
        );

        // Agregar clase para pantalla completa
        mainContent.classList.add("maximized-view");

        // Aumentar elementos por página para aprovechar el espacio
        const perPageSelect = document.getElementById("fPerPage");
        if (perPageSelect && this.state.itemsPerPage < 20) {
          this.state.itemsPerPage = 20;
          perPageSelect.value = "20";
          // Refrescar la vista para mostrar más elementos
          this.refreshView();
        }

        // Aplicar estilos adicionales para maximización
        const style = document.createElement("style");
        style.id = "maximized-styles";
        style.textContent = `
          .maximized-view {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 40 !important;
            background: white !important;
            padding: 1rem !important;
            overflow-y: auto !important;
          }
          
          .dark .maximized-view {
            background: rgb(17 24 39) !important;
          }
          
          .maximized-view .grid {
            max-width: none !important;
          }
          
          .maximized-view #viewContainer {
            min-height: calc(100vh - 200px) !important;
          }
          
          /* Remover limitaciones de ancho en vista maximizada */
          .maximized-view .mx-auto {
            max-width: none !important;
          }
          
          .maximized-view .max-w-screen-2xl,
          .maximized-view .max-w-\\[1600px\\] {
            max-width: none !important;
          }
          
          /* Aprovechar mejor el espacio horizontal */
          .maximized-view #metricsSection {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
          }
          
          /* Mejorar distribución de filtros en vista maximizada */
          .maximized-view .grid.grid-cols-1.lg\\:grid-cols-12 {
            grid-template-columns: 1fr !important;
          }
          
          .maximized-view .xl\\:col-span-10 {
            grid-column: span 1 !important;
          }
          
          /* Más espacio para los controles de filtros */
          .maximized-view .flex.flex-wrap.items-center.gap-2 {
            gap: 1rem !important;
          }
          
          /* Mejorar tabla en vista maximizada */
          .maximized-view table {
            min-width: 100% !important;
          }
          
          .maximized-view th,
          .maximized-view td {
            padding: 0.75rem 1rem !important;
          }
          
          /* Más espacio para skills en la tabla */
          .maximized-view .skill-tag {
            margin: 0.125rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          
          /* Ocultar elementos de navegación cuando está maximizado */
          .maximized-view ~ nav,
          .maximized-view ~ header,
          .maximized-view ~ .sidebar {
            display: none !important;
          }
        `;

        // Remover estilo anterior si existe
        const existingStyle = document.getElementById("maximized-styles");
        if (existingStyle) {
          existingStyle.remove();
        }

        document.head.appendChild(style);
      }
    } else {
      // Minimizar: restaurar layout original
      const insightsAside = mainContent.querySelector("aside");
      const mainSection = mainContent.querySelector("section.grid");

      if (insightsAside) {
        insightsAside.style.display = "block";
      }

      // Restaurar métricas
      const metricsSection = document.getElementById("metricsSection");
      if (metricsSection) {
        metricsSection.style.display = "grid";
      }

      if (mainSection) {
        // Restaurar grid original
        mainSection.className = mainSection.className.replace(
          "lg:grid-cols-1",
          "lg:grid-cols-12"
        );

        // Remover clase de maximización
        mainContent.classList.remove("maximized-view");

        // Restaurar elementos por página originales
        const perPageSelect = document.getElementById("fPerPage");
        if (perPageSelect && this.state.itemsPerPage > 10) {
          this.state.itemsPerPage = 10;
          perPageSelect.value = "10";
          // Refrescar la vista para mostrar menos elementos
          this.refreshView();
        }

        // Remover estilos de maximización
        const maximizedStyles = document.getElementById("maximized-styles");
        if (maximizedStyles) {
          maximizedStyles.remove();
        }
      }
    }
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
