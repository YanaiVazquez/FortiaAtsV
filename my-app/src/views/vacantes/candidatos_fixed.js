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
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <span class="text-green-600 dark:text-green-400">✅</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Navegación de vistas -->
          <nav class="flex items-center gap-2 mb-6 p-1 bg-slate-100 dark:bg-gray-800 rounded-lg w-fit">
            <button id="viewList" class="px-4 py-2 rounded-md text-sm font-medium transition-colors">
              📋 Lista
            </button>
            <button id="viewPipeline" class="px-4 py-2 rounded-md text-sm font-medium transition-colors">
              🔄 Pipeline
            </button>
            <button id="viewAnalytics" class="px-4 py-2 rounded-md text-sm font-medium transition-colors">
              📊 Analytics
            </button>
          </nav>

          <!-- Contenido dinámico -->
          <div id="viewContent">
            <!-- Se llena dinámicamente -->
          </div>
        </div>
      </div>
    `;
  }

  bindStatic() {
    // Navegación entre vistas
    document.getElementById("viewList")?.addEventListener("click", () => {
      this.state.view = "list";
      this.refreshView();
    });

    document.getElementById("viewPipeline")?.addEventListener("click", () => {
      this.state.view = "pipeline";
      this.refreshView();
    });

    document.getElementById("viewAnalytics")?.addEventListener("click", () => {
      this.state.view = "analytics";
      this.refreshView();
    });
  }

  refreshView() {
    // Actualizar botones de navegación
    const buttons = ["viewList", "viewPipeline", "viewAnalytics"];
    buttons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.className = `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          id === `view${this.state.view.charAt(0).toUpperCase() + this.state.view.slice(1)}`
            ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm"
            : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
        }`;
      }
    });

    // Renderizar vista correspondiente
    const content = document.getElementById("viewContent");
    if (!content) return;

    switch (this.state.view) {
      case "list":
        content.innerHTML = this.listHTML();
        this.bindList();
        break;
      case "pipeline":
        content.innerHTML = this.pipelineHTML();
        this.bindPipeline();
        break;
      case "analytics":
        content.innerHTML = this.analyticsHTML();
        this.bindAnalytics();
        this.renderAnalytics();
        break;
    }
  }

  updateMetrics() {
    const candidates = this.state.candidates || [];
    
    // Candidatos activos (no contratados)
    const active = candidates.filter(c => c.stage !== "CONTRATADO").length;
    document.getElementById("activeCandidates").textContent = active;

    // En proceso (screening, entrevista, oferta)
    const inProcess = candidates.filter(c => 
      ["SCREENING", "ENTREVISTA", "OFERTA"].includes(c.stage)
    ).length;
    document.getElementById("inProcessCandidates").textContent = inProcess;

    // Entrevistas
    const interviews = candidates.filter(c => c.stage === "ENTREVISTA").length;
    document.getElementById("interviewCandidates").textContent = interviews;

    // Contratados
    const hired = candidates.filter(c => c.stage === "CONTRATADO").length;
    document.getElementById("hiredCandidates").textContent = hired;
  }

  // ========== VISTA LISTA ==========
  listHTML() {
    return `
      <div class="space-y-6">
        <!-- Filtros y búsqueda -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <input 
                type="text" 
                id="searchQuery" 
                placeholder="Buscar candidatos..." 
                class="w-full h-10 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 text-sm"
                value="${this.state.query}"
              >
            </div>
            <div>
              <select id="stageFilter" class="w-full h-10 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 text-sm">
                <option value="all">Todas las etapas</option>
                <option value="APLICADO">Aplicado</option>
                <option value="SCREENING">Screening</option>
                <option value="ENTREVISTA">Entrevista</option>
                <option value="OFERTA">Oferta</option>
                <option value="CONTRATADO">Contratado</option>
              </select>
            </div>
            <div>
              <select id="priorityFilter" class="w-full h-10 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 text-sm">
                <option value="all">Todas las prioridades</option>
                <option value="ALTA">Alta</option>
                <option value="MEDIA">Media</option>
                <option value="BAJA">Baja</option>
              </select>
            </div>
            <div>
              <select id="sortBy" class="w-full h-10 px-3 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 text-sm">
                <option value="recent">Más recientes</option>
                <option value="score">Mayor score AI</option>
                <option value="name">Nombre A-Z</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Lista de candidatos -->
        <div id="candidatesList" class="space-y-4">
          <!-- Se llena dinámicamente -->
        </div>

        <!-- Paginación -->
        <div id="listPagination" class="flex justify-center">
          <!-- Se llena dinámicamente -->
        </div>
      </div>
    `;
  }

  bindList() {
    // Filtros y búsqueda
    document.getElementById("searchQuery")?.addEventListener("input", (e) => {
      this.state.query = e.target.value;
      this.renderList();
    });

    document.getElementById("stageFilter")?.addEventListener("change", (e) => {
      this.state.stage = e.target.value;
      this.renderList();
    });

    document.getElementById("priorityFilter")?.addEventListener("change", (e) => {
      this.state.priority = e.target.value;
      this.renderList();
    });

    document.getElementById("sortBy")?.addEventListener("change", (e) => {
      this.state.sort = e.target.value;
      this.renderList();
    });

    this.renderList();
  }

  renderList() {
    const filtered = this.getFilteredCandidates();
    const paginated = this.getPaginatedData(filtered);

    // Renderizar lista
    const listEl = document.getElementById("candidatesList");
    if (listEl) {
      listEl.innerHTML = paginated.data.map(candidate => `
        <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 hover:ring-slate-300 dark:hover:ring-gray-600 transition-all">
          <div class="flex items-center gap-4">
            <img src="${candidate.avatar}" alt="${candidate.name}" class="w-12 h-12 rounded-full object-cover">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-semibold text-slate-900 dark:text-white">${candidate.name}</h3>
                <span class="px-2 py-1 text-xs rounded-full ${this.getStageColor(candidate.stage)}">${candidate.stage}</span>
                <span class="px-2 py-1 text-xs rounded-full ${this.getPriorityColor(candidate.priority)}">${candidate.priority}</span>
              </div>
              <p class="text-sm text-slate-600 dark:text-gray-400">${candidate.currentPosition} en ${candidate.company}</p>
              <p class="text-sm text-slate-500 dark:text-gray-500">Aplicó a: ${candidate.jobApplied}</p>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold ${this.getScoreColor(candidate.aiScore)}">${candidate.aiScore}%</div>
              <div class="text-xs text-slate-500 dark:text-gray-500">AI Score</div>
            </div>
          </div>
          <div class="mt-3 flex flex-wrap gap-1">
            ${candidate.skills.slice(0, 5).map(skill => `
              <span class="skill-tag">${skill}</span>
            `).join('')}
            ${candidate.skills.length > 5 ? `<span class="text-xs text-slate-500">+${candidate.skills.length - 5} más</span>` : ''}
          </div>
        </div>
      `).join('');
    }

    // Renderizar paginación
    this.renderPagination(paginated, "listPagination");
  }

  // ========== VISTA PIPELINE ==========
  pipelineHTML() {
    return `
      <div class="space-y-6">
        <!-- Métricas del pipeline -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          ${["APLICADO", "SCREENING", "ENTREVISTA", "OFERTA", "CONTRATADO"].map(stage => `
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 text-center">
              <div class="text-2xl font-bold text-slate-900 dark:text-white" id="pipeline-${stage}">0</div>
              <div class="text-sm text-slate-600 dark:text-gray-400">${stage}</div>
            </div>
          `).join('')}
        </div>

        <!-- Kanban board -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4" id="kanbanBoard">
          ${["APLICADO", "SCREENING", "ENTREVISTA", "OFERTA", "CONTRATADO"].map(stage => `
            <div class="bg-slate-50 dark:bg-gray-900 rounded-xl p-4">
              <h3 class="font-semibold text-slate-900 dark:text-white mb-4">${stage}</h3>
              <div class="space-y-3" id="stage-${stage}">
                <!-- Cards dinámicas -->
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindPipeline() {
    this.renderPipeline();
  }

  renderPipeline() {
    const candidates = this.state.candidates || [];
    const stages = ["APLICADO", "SCREENING", "ENTREVISTA", "OFERTA", "CONTRATADO"];

    // Actualizar métricas
    stages.forEach(stage => {
      const count = candidates.filter(c => c.stage === stage).length;
      const el = document.getElementById(`pipeline-${stage}`);
      if (el) el.textContent = count;
    });

    // Renderizar cards en cada columna
    stages.forEach(stage => {
      const stageEl = document.getElementById(`stage-${stage}`);
      if (!stageEl) return;

      const stageCandidates = candidates.filter(c => c.stage === stage);
      stageEl.innerHTML = stageCandidates.map(candidate => `
        <div class="bg-white dark:bg-gray-800 rounded-lg p-3 ring-1 ring-black/5 dark:ring-white/10 cursor-pointer hover:ring-slate-300 dark:hover:ring-gray-600 transition-all">
          <div class="flex items-center gap-2 mb-2">
            <img src="${candidate.avatar}" alt="${candidate.name}" class="w-8 h-8 rounded-full object-cover">
            <div class="flex-1 min-w-0">
              <h4 class="font-medium text-sm text-slate-900 dark:text-white truncate">${candidate.name}</h4>
              <p class="text-xs text-slate-500 dark:text-gray-500 truncate">${candidate.jobApplied}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs px-2 py-1 rounded-full ${this.getPriorityColor(candidate.priority)}">${candidate.priority}</span>
            <span class="text-sm font-semibold ${this.getScoreColor(candidate.aiScore)}">${candidate.aiScore}%</span>
          </div>
        </div>
      `).join('');
    });
  }

  // ========== VISTA ANALYTICS ==========
  analyticsHTML() {
    return `
      <div class="space-y-6">
        <!-- Controles superiores -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
          <div class="flex items-center justify-between gap-4">
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">🧠 Análisis de IA</h2>
            <div class="flex items-center gap-2">
              <select id="aaVacancy" class="h-9 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-sm">
                <option value="all">Todas las vacantes</option>
                ${(this.state.jobs || [])
                  .map((j) => `<option value="${j.id}">${j.title}</option>`)
                  .join("")}
              </select>
              <select id="aaCandidate" class="h-9 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-sm">
                <option value="auto">Auto-selección</option>
                <!-- se llena en bind -->
              </select>
              <button id="aaRefresh" class="h-9 px-3 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">
                🔄 Actualizar
              </button>
              <button id="aaRecalc" class="h-9 px-3 rounded-lg bg-purple-600 text-white text-sm hover:bg-purple-700 transition-colors">
                ⚡ Recalcular
              </button>
            </div>
          </div>
        </div>

        <!-- Grid principal -->
        <div class="grid grid-cols-12 gap-6">
          <!-- Panel izquierdo: Análisis detallado -->
          <div class="col-span-12 lg:col-span-8 space-y-6">
            <!-- Métricas del candidato seleccionado -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 ring-1 ring-black/5 dark:ring-white/10">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">📊 Evaluación Detallada</h3>
              
              <div class="grid grid-cols-2 gap-6">
                <!-- Score general -->
                <div class="text-center">
                  <div class="text-4xl font-bold text-blue-600 dark:text-blue-400" id="aaScore">--</div>
                  <div class="text-sm text-slate-600 dark:text-gray-400">Score General</div>
                </div>

                <!-- Barras de métricas -->
                <div class="space-y-3">
                  ${[
                    { id: "aaBarTech", label: "Habilidades Técnicas" },
                    { id: "aaBarExp", label: "Experiencia" },
                    { id: "aaBarEdu", label: "Educación" },
                    { id: "aaBarFit", label: "Ajuste Cultural" }
                  ].map(({ id, label }) => `
                  <div>
                    <div class="flex items-center justify-between text-[11px] mb-1"><span>${label}</span><span id="${id}Lbl">0%</span></div>
                    <div class="h-2 w-full bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div id="${id}" class="h-full bg-[#004176] dark:bg-blue-500" style="width:0%"></div>
                    </div>
                  </div>`
                  ).join("")}
                </div>
              </div>
            </div>

            <!-- Análisis cualitativo -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h4 class="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Fortalezas</h4>
                <ul id="aaStrengths" class="text-sm text-slate-700 dark:text-gray-300 space-y-1">
                  <li>• Selecciona un candidato para ver el análisis</li>
                </ul>
              </div>
              
              <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h4 class="font-semibold text-amber-600 dark:text-amber-400 mb-2">⚠️ Áreas de Mejora</h4>
                <ul id="aaWeaknesses" class="text-sm text-slate-700 dark:text-gray-300 space-y-1">
                  <li>• Selecciona un candidato para ver el análisis</li>
                </ul>
              </div>
              
              <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
                <h4 class="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔮 Predicciones</h4>
                <ul id="aaPredictions" class="text-sm text-slate-700 dark:text-gray-300 space-y-1">
                  <li>• Selecciona un candidato para ver el análisis</li>
                </ul>
              </div>
            </div>

            <!-- Matriz de compatibilidad -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-3">🎯 Matriz de Compatibilidad</h4>
              <div id="aaMatrix" class="grid grid-cols-2 gap-3">
                <div class="text-slate-500 dark:text-gray-400">Selecciona un candidato para ver la matriz de compatibilidad</div>
              </div>
            </div>
          </div>

          <!-- Panel derecho: Ranking y insights -->
          <div class="col-span-12 lg:col-span-4 space-y-6">
            <!-- Ranking de candidatos -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-3">🏆 Top Candidatos</h4>
              <div id="aaRanking" class="space-y-2">
                <!-- Se llena dinámicamente -->
              </div>
            </div>

            <!-- Insights de IA -->
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 ring-1 ring-blue-200 dark:ring-blue-800">
                <div id="aaInsightRec">
                  <p class="font-medium text-slate-900 dark:text-white">💡 Recomendación</p>
                  <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">Analizando candidatos...</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 ring-1 ring-green-200 dark:ring-green-800">
                <div id="aaInsightTrend">
                  <p class="font-medium text-slate-900 dark:text-white">📈 Tendencia</p>
                  <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">Calculando métricas...</p>
                </div>
              </div>

              <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-4 ring-1 ring-amber-200 dark:ring-amber-800">
                <div id="aaInsightAlert">
                  <p class="font-medium text-slate-900 dark:text-white">⚠️ Alerta</p>
                  <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">Revisando pipeline...</p>
                </div>
              </div>
            </div>

            <!-- Acciones rápidas -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <h4 class="font-semibold text-slate-900 dark:text-white mb-3">⚡ Acciones Rápidas</h4>
              <ul id="aaJustif" class="text-sm text-slate-700 dark:text-gray-300 space-y-1">
                <!-- Se llena dinámicamente -->
              </ul>
            </div>
          </div>
        </div>

        <!-- Botón de reporte -->
        <div class="text-center">
          <button id="aaReport" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transition-all">
            📄 Generar Reporte Completo
          </button>
        </div>
      </div>
    `;
  }

  bindAnalytics() {
    // Llenar select de candidatos
    const candSel = document.getElementById("aaCandidate");
    if (candSel && this.kanban?.items) {
      this.kanban.items.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = `${c.name} — ${c.jobTitle}`;
        candSel.appendChild(opt);
      });
    }

    // Event listeners
    document.getElementById("aaVacancy")?.addEventListener("change", () => this.renderAnalytics());
    document.getElementById("aaCandidate")?.addEventListener("change", () => this.renderAnalytics());
    document.getElementById("aaRefresh")?.addEventListener("click", () => this.renderAnalytics());
    document.getElementById("aaRecalc")?.addEventListener("click", () => this.renderAnalytics(true));
    document.getElementById("aaReport")?.addEventListener("click", () => {
      alert("📄 Reporte generado (demo). Incluye score, ranking, fortalezas, áreas de mejora y compatibilidad.");
    });
  }

  renderAnalytics(forceRandom = false) {
    // 1) elegir candidato activo
    const pickFromSelect = (id) => {
      const sel = document.getElementById(id);
      return sel && sel.value !== "auto" ? sel.value : null;
    };
    const chosenId = pickFromSelect("aaCandidate");
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
        "React", "Node.js", "TypeScript", "AWS", "Docker", "SQL", "Figma", "Kubernetes", "Python", "Java",
      ];
      const weak = [
        "Testing", "Documentación", "CI/CD", "Seguridad", "Comunicación",
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
          "Alta probabilidad de éxito en el rol",
          "Buen ajuste con el equipo actual",
          "Potencial de crecimiento a largo plazo"
        ],
        compat: [
          ["Experiencia técnica", "Excelente"],
          ["Soft skills", "Bueno"],
          ["Cultura empresarial", "Muy bueno"],
          ["Potencial crecimiento", "Alto"]
        ]
      };
    }

    // 3) actualizar UI
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setBar = (id, val) => {
      const el = document.getElementById(id);
      const lbl = document.getElementById(id + "Lbl");
      if (el) el.style.width = `${val}%`;
      if (lbl) lbl.textContent = `${val}%`;
    };

    const overall = Math.round((cand.ai.tech + cand.ai.exp + cand.ai.edu + cand.ai.fit) / 4);
    setTxt("aaScore", overall);
    setBar("aaBarTech", cand.ai.tech);
    setBar("aaBarExp", cand.ai.exp);
    setBar("aaBarEdu", cand.ai.edu);
    setBar("aaBarFit", cand.ai.fit);

    // listas
    const li = (arr) => arr.map((x) => `<li>• ${x}</li>`).join("");
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

    // 4) ranking y insights
    const totalPipeline = this.kanban?.items?.length || 0;
    const topCandidates = pool
      .map(c => {
        if (!c.ai) {
          const r = (min, max) => Math.round(min + Math.random() * (max - min));
          c.ai = {
            tech: r(55, 95), exp: r(40, 95), edu: r(50, 90), fit: r(45, 95)
          };
        }
        return {
          ...c,
          overall: Math.round((c.ai.tech + c.ai.exp + c.ai.edu + c.ai.fit) / 4)
        };
      })
      .sort((a, b) => b.overall - a.overall)
      .slice(0, 5);

    const rankEl = document.getElementById("aaRanking");
    if (rankEl) {
      rankEl.innerHTML = topCandidates.map((c, i) => `
        <div class="flex items-center gap-2 p-2 rounded-lg ${c.id === cand.id ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-slate-50 dark:hover:bg-gray-700'}">
          <span class="w-6 h-6 rounded-full bg-slate-200 dark:bg-gray-600 flex items-center justify-center text-xs font-bold">${i + 1}</span>
          <img src="${c.avatar}" alt="${c.name}" class="w-8 h-8 rounded-full object-cover">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-sm truncate">${c.name}</div>
            <div class="text-xs text-slate-500 truncate">${c.jobTitle}</div>
          </div>
          <div class="text-sm font-bold ${this.getScoreColor(c.overall)}">${c.overall}%</div>
        </div>
      `).join('');
    }

    // insights
    const avgScore = Math.round(topCandidates.reduce((s, c) => s + c.overall, 0) / topCandidates.length);
    const highPotential = topCandidates.filter(c => c.overall >= 80).length;

    const recEl = document.getElementById("aaInsightRec");
    if (recEl) {
      recEl.innerHTML = `
        <p class="font-medium text-slate-900 dark:text-white">💡 Recomendación</p>
        <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">
          ${highPotential > 0 
            ? `Tienes ${highPotential} candidatos de alto potencial. Prioriza entrevistas con ellos.`
            : 'Considera ampliar la búsqueda o revisar los criterios de evaluación.'
          }
        </p>
      `;
    }

    const trendEl = document.getElementById("aaInsightTrend");
    if (trendEl) {
      trendEl.innerHTML = `
        <p class="font-medium text-slate-900 dark:text-white">📈 Tendencia</p>
        <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">
          Score promedio: ${avgScore}%. La calidad de candidatos es ${avgScore >= 75 ? 'excelente' : avgScore >= 60 ? 'buena' : 'regular'}.
        </p>
      `;
    }

    const alertEl = document.getElementById("aaInsightAlert");
    if (alertEl) {
      const stuckCandidates = pool.filter(c => c.stage === 'APLICADO').length;
      alertEl.innerHTML = `
        <p class="font-medium text-slate-900 dark:text-white">⚠️ Alerta</p>
        <p class="text-slate-700 dark:text-gray-300 mt-1 text-sm">
          ${stuckCandidates > 0 
            ? `${stuckCandidates} candidatos siguen en "Aplicado". Considera hacer screening inicial.`
            : 'Pipeline fluyendo correctamente. Buen trabajo!'
          }
        </p>
      `;
    }

    // acciones rápidas
    const justifEl = document.getElementById("aaJustif");
    if (justifEl) {
      justifEl.innerHTML = `
        <li>• Total candidatos analizados: <strong>${pool.length}</strong></li>
        <li>• Candidatos de alto potencial: <strong>${highPotential}</strong></li>
        <li>• Score promedio del pool: <strong>${avgScore}%</strong></li>
        <li>• Candidato seleccionado: <strong>${cand.name}</strong></li>
      `;
    }
  }

  // ========== UTILIDADES ==========
  getFilteredCandidates() {
    let filtered = [...this.state.candidates];

    // Filtro por búsqueda
    if (this.state.query) {
      const query = this.state.query.toLowerCase();
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.jobApplied.toLowerCase().includes(query) ||
        c.company.toLowerCase().includes(query) ||
        c.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Filtro por etapa
    if (this.state.stage !== "all") {
      filtered = filtered.filter(c => c.stage === this.state.stage);
    }

    // Filtro por prioridad
    if (this.state.priority !== "all") {
      filtered = filtered.filter(c => c.priority === this.state.priority);
    }

    // Ordenamiento
    switch (this.state.sort) {
      case "recent":
        filtered.sort((a, b) => b.appliedAt - a.appliedAt);
        break;
      case "score":
        filtered.sort((a, b) => b.aiScore - a.aiScore);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }

  getPaginatedData(data) {
    const total = data.length;
    const totalPages = Math.ceil(total / this.state.itemsPerPage);
    const start = (this.state.currentPage - 1) * this.state.itemsPerPage;
    const end = start + this.state.itemsPerPage;

    return {
      data: data.slice(start, end),
      currentPage: this.state.currentPage,
      totalPages,
      total
    };
  }

  renderPagination(paginated, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (paginated.totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    const buttons = [];
    
    // Botón anterior
    if (paginated.currentPage > 1) {
      buttons.push(`<button class="px-3 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700" onclick="this.changePage(${paginated.currentPage - 1})">Anterior</button>`);
    }

    // Números de página
    for (let i = 1; i <= paginated.totalPages; i++) {
      if (i === paginated.currentPage) {
        buttons.push(`<button class="px-3 py-2 rounded-lg bg-blue-600 text-white">${i}</button>`);
      } else {
        buttons.push(`<button class="px-3 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700" onclick="this.changePage(${i})">${i}</button>`);
      }
    }

    // Botón siguiente
    if (paginated.currentPage < paginated.totalPages) {
      buttons.push(`<button class="px-3 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 hover:bg-slate-50 dark:hover:bg-gray-700" onclick="this.changePage(${paginated.currentPage + 1})">Siguiente</button>`);
    }

    container.innerHTML = `<div class="flex items-center gap-2">${buttons.join('')}</div>`;
  }

  changePage(page) {
    this.state.currentPage = page;
    if (this.state.view === "list") {
      this.renderList();
    }
  }

  getStageColor(stage) {
    const colors = {
      "APLICADO": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      "SCREENING": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      "ENTREVISTA": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      "OFERTA": "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
      "CONTRATADO": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
    };
    return colors[stage] || colors["APLICADO"];
  }

  getPriorityColor(priority) {
    const colors = {
      "ALTA": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
      "MEDIA": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
      "BAJA": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
    };
    return colors[priority] || colors["MEDIA"];
  }

  getScoreColor(score) {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  }
}