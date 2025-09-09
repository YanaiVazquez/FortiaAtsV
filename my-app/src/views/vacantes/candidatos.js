// src/views/CandidatosView.js
export class CandidatosView {
  constructor() {
    this.state = {
      view: "list", // list | cards | pipeline | analytics
      query: "",
      stage: "all",
      job: "all",
      priority: "all",
      sort: "recent",
      insightsTick: 0,
      isMaximized: false,
      currentPage: 1,
      itemsPerPage: 10,
      candidates: [
        {
          id: "c1",
          name: "María García Rodríguez",
          email: "maria.garcia@email.com",
          phone: "+34 666 123 456",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
          currentPosition: "Frontend Developer",
          company: "TechCorp",
          skills: ["React", "TypeScript", "Node.js", "CSS", "Git"],
          aiScore: 92,
          stage: "ENTREVISTA",
          priority: "ALTA",
          appliedAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
          currentPosition: "UX Designer",
          company: "DesignStudio",
          skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"],
          aiScore: 88,
          stage: "SCREENING",
          priority: "MEDIA",
          appliedAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
          currentPosition: "Product Manager",
          company: "StartupXYZ",
          skills: ["Product Strategy", "Agile", "Analytics", "Leadership", "SQL"],
          aiScore: 95,
          stage: "CONTRATADO",
          priority: "ALTA",
          appliedAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
          currentPosition: "Backend Developer",
          company: "CloudTech",
          skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
          aiScore: 85,
          stage: "APLICADO",
          priority: "BAJA",
          appliedAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
          currentPosition: "DevOps Engineer",
          company: "InfraTech",
          skills: ["Kubernetes", "Terraform", "Jenkins", "Monitoring", "Linux"],
          aiScore: 91,
          stage: "OFERTA",
          priority: "ALTA",
          appliedAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
          currentPosition: "Data Scientist",
          company: "DataCorp",
          skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Statistics"],
          aiScore: 89,
          stage: "SCREENING",
          priority: "MEDIA",
          appliedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
          currentPosition: "Marketing Manager",
          company: "MarketingPro",
          skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy", "Social Media"],
          aiScore: 87,
          stage: "ENTREVISTA",
          priority: "MEDIA",
          appliedAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
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
          avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150",
          currentPosition: "Sales Manager",
          company: "SalesCorp",
          skills: ["Sales Strategy", "CRM", "Negotiation", "Team Leadership", "B2B"],
          aiScore: 83,
          stage: "APLICADO",
          priority: "BAJA",
          appliedAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
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

  // Mapa de compatibilidad legacy → nuevos estados del pipeline
  legacyMap = {
    SCREENING: "IA_SCREENING",
    ENTREVISTA: "ENTREVISTA_TEC",
  };

  injectStyles() {
    if (!document.getElementById("candidates-styles")) {
      const style = document.createElement("style");
      style.id = "candidates-styles";
      style.textContent = `
        /* ===== Estilos compartidos ===== */
        .candidate-card { transition: all 0.2s ease; transform: translateY(0); }
        .candidate-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
        .skill-tag { background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); color:#fff; padding:2px 8px; border-radius:12px; font-size:11px; font-weight:500; }
        .ai-score-high { color:#10b981; } .ai-score-medium { color:#f59e0b; } .ai-score-low { color:#ef4444; }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient: vertical; overflow:hidden; }
        @media (max-width:768px){ #candidatesCardsGrid{ grid-template-columns:1fr; } }
        @media (min-width:769px) and (max-width:1024px){ #candidatesCardsGrid{ grid-template-columns: repeat(2,1fr); } }
        @media (min-width:1025px) and (max-width:1280px){ #candidatesCardsGrid{ grid-template-columns: repeat(3,1fr); } }

        /* ===== Vista maximizada ===== */
        .maximized-view { transition: all .3s ease-in-out; }
        .maximized-view #candidatesCardsGrid{ grid-template-columns:repeat(auto-fit,minmax(280px,1fr)) !important; gap:1rem !important; }
        @media (min-width:1280px){ .maximized-view #candidatesCardsGrid{ grid-template-columns: repeat(auto-fit,minmax(260px,1fr)) !important; } }
        @media (min-width:1536px){ .maximized-view #candidatesCardsGrid{ grid-template-columns: repeat(auto-fit,minmax(250px,1fr)) !important; } }
        @media (min-width:1920px){ .maximized-view #candidatesCardsGrid{ grid-template-columns: repeat(auto-fit,minmax(240px,1fr)) !important; } }
        #maximizeInsights{ transition: all .2s ease; } #maximizeInsights:hover{ transform: scale(1.1); }

        /* ===== Estilos de Pipeline mejorados ===== */
        .candidate-pipeline-card { 
          position: relative; 
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .applied-job { font-size: 12px; line-height: 1.4; }
        .applied-job .job-label { color: rgb(100,116,139); }
        .job-title-link { 
          font-size: 11px; 
          color: rgb(79,70,229); 
          background: rgba(79,70,229,.08); 
          padding: 2px 6px; 
          border-radius: 6px; 
          margin-left: 4px;
          display: inline-block;
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .job-title-link:hover { background: rgba(79,70,229,.15); }
        
        .candidate-ai-metrics { 
          display: grid; 
          grid-template-columns: repeat(3, minmax(0, 1fr)); 
          gap: 0.6rem; 
          margin-bottom: 1rem;
          padding: 0.5rem 0;
        }
        
        .ai-metric { 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          justify-content: center; 
          padding: 0.5rem 0.3rem; 
          border-radius: 0.5rem; 
          background: rgba(148,163,184,.08); 
          border: 1px solid rgba(148,163,184,.15);
          min-height: 36px;
          text-align: center;
          transition: all 0.2s ease;
        }
        
        .ai-metric:hover {
          background: rgba(148,163,184,.12);
          transform: translateY(-1px);
        }
        
        .ai-metric .metric-label { 
          color: #64748b; 
          font-size: 9px; 
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        
        .ai-metric .metric-value { 
          font-weight: 700; 
          font-size: 12px;
          color: #1e293b;
        }
        
        .dark .ai-metric {
          background: rgba(71,85,105,.1);
          border-color: rgba(71,85,105,.2);
        }
        
        .dark .ai-metric:hover {
          background: rgba(71,85,105,.15);
        }
        
        .dark .ai-metric .metric-value {
          color: #f1f5f9;
        }
        
        /* Colores específicos para cada métrica */
        .ai-metric.skills {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.15);
        }
        
        .ai-metric.skills .metric-value {
          color: #2563eb;
        }
        
        .ai-metric.fit {
          background: rgba(168, 85, 247, 0.08);
          border-color: rgba(168, 85, 247, 0.15);
        }
        
        .ai-metric.fit .metric-value {
          color: #7c3aed;
        }
        
        .ai-metric.success {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.15);
        }
        
        .ai-metric.success .metric-value {
          color: #16a34a;
        }
        
        .dark .ai-metric.skills {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .dark .ai-metric.skills .metric-value {
          color: #60a5fa;
        }
        
        .dark .ai-metric.fit {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.2);
        }
        
        .dark .ai-metric.fit .metric-value {
          color: #a78bfa;
        }
        
        .dark .ai-metric.success {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.2);
        }
        
        .dark .ai-metric.success .metric-value {
          color: #4ade80;
        }
        
        .candidate-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.25rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }
        
        .btn-candidate-action { 
          font-size: 14px; 
          padding: 0.4rem 0.2rem; 
          border-radius: 0.4rem; 
          border: 1px solid rgba(148,163,184,.35); 
          background: #fff; 
          color: #475569;
          text-align: center;
          white-space: nowrap;
          transition: all 0.2s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
        }
        
        .dark .btn-candidate-action { 
          background: #374151; 
          color: #e5e7eb; 
          border-color: #4b5563; 
        }
        
        .btn-candidate-action:hover { 
          background: #f8fafc; 
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .dark .btn-candidate-action:hover { 
          background: #4b5563; 
        }
        
        /* Responsive para pipeline */
        @media (max-width: 768px) {
          .candidate-pipeline-card {
            min-height: 180px;
          }
          .btn-candidate-action {
            font-size: 12px;
            padding: 0.3rem 0.1rem;
            min-height: 28px;
          }
          .candidate-actions {
            gap: 0.2rem;
          }
          .candidate-ai-metrics {
            gap: 0.4rem;
            margin-bottom: 0.8rem;
            padding: 0.3rem 0;
          }
          .ai-metric {
            min-height: 32px;
            padding: 0.4rem 0.2rem;
          }
          .ai-metric .metric-label {
            font-size: 8px;
          }
          .ai-metric .metric-value {
            font-size: 11px;
          }
        }
        
        /* Mejorar el grid del pipeline en pantallas pequeñas */
        @media (max-width: 1024px) {
          .pipeline-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          }
        }
        
        @media (max-width: 640px) {
          .pipeline-grid {
            grid-template-columns: 1fr !important;
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
          <header class="mb-6">
            <div class="flex items-center gap-3 mb-2">
              <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Candidatos</h1>
              <span class="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-0.5 font-medium">AI-POWERED</span>
            </div>
            <p class="text-slate-600 dark:text-gray-400">Gestiona y evalúa candidatos con inteligencia artificial</p>
          </header>

          <section id="metricsSection" class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10"><div class="flex items-center justify-between"><div><p class="text-sm text-slate-600 dark:text-gray-400">Candidatos Activos</p><p id="activeCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p></div><div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg grid place-items-center">👥</div></div></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10"><div class="flex items-center justify-between"><div><p class="text-sm text-slate-600 dark:text-gray-400">En Proceso</p><p id="inProcessCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p></div><div class="w-10 h-10 bg-amber-100 dark:bg-amber-900/20 rounded-lg grid place-items-center">⏳</div></div></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10"><div class="flex items-center justify-between"><div><p class="text-sm text-slate-600 dark:text-gray-400">Entrevistas</p><p id="interviewCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p></div><div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg grid place-items-center">🎯</div></div></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10"><div class="flex items-center justify-between"><div><p class="text-sm text-slate-600 dark:text-gray-400">Contratados</p><p id="hiredCandidates" class="text-2xl font-bold text-slate-900 dark:text-white">0</p></div><div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg grid place-items-center">✅</div></div></div>
          </section>

          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 md:p-4 mb-4">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div class="flex-1 min-w-[260px] max-w-md">
                <div class="flex h-11 items-center gap-2 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3">
                  <span class="text-slate-500 dark:text-gray-400">🔎</span>
                  <input id="q" type="text" placeholder="Buscar candidatos..." class="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 text-sm">
                </div>
              </div>

              <div class="grid grid-cols-2 sm:flex gap-3 w-full lg:w-auto">
                <select id="fStage" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todas las etapas</option>
                  <option value="APLICADO">Aplicado</option>
                  <option value="IA_SCREENING">IA Screening</option>
                  <option value="REVISION_RH">Revisión RH</option>
                  <option value="ENTREVISTA_TEC">Entrevista Técnica</option>
                  <option value="ENTREVISTA_FINAL">Entrevista Final</option>
                  <option value="OFERTA">Oferta</option>
                  <option value="CONTRATADO">Contratado</option>
                </select>
                <select id="fJob" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm"><option value="all">Todas las vacantes</option></select>
                <select id="fPriority" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="all">Todas las prioridades</option>
                  <option value="ALTA">Alta</option>
                  <option value="MEDIA">Media</option>
                  <option value="BAJA">Baja</option>
                </select>
                <button id="clearFilters" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">❌ Quitar filtros</button>
                <select id="fPerPage" class="h-11 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white text-sm">
                  <option value="5">5 por página</option>
                  <option value="10" selected>10 por página</option>
                  <option value="20">20 por página</option>
                  <option value="50">50 por página</option>
                </select>
              </div>
            </div>
          </section>

          <section class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="xl:col-span-10 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-wrap items-center gap-2">
                  <button data-view="list" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">📋 Listado</button>
                  <button data-view="cards" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">🃏 Cards</button>
                  <button data-view="pipeline" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">🔄 Pipeline</button>
                  <button data-view="analytics" class="tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors">📊 Analytics</button>
                </div>
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

            <aside class="lg:col-span-2 order-first lg:order-last">
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-4 flex flex-col ring-1 ring-black/5 dark:ring-white/10">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="relative w-9 h-9 rounded-lg bg-[#004176]/10 dark:bg-[#004176]/20 grid place-items-center text-[#004176] dark:text-blue-400">🤖</div>
                    <p class="font-medium text-slate-800 dark:text-white">AI Insights</p>
                  </div>
                  <button id="btnInsights" class="rounded-lg border border-slate-200 dark:border-gray-600 px-2.5 py-1.5 text-xs text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 active:scale-[.98] transition" aria-label="Actualizar insights">🔄 Actualizar</button>
                </div>
                <div class="min-h-[180px] max-h-80 overflow-y-auto pr-1">
                  <ul id="insightsList" class="space-y-2 text-sm">
                    <li class="rounded-lg bg-blue-50 dark:bg-blue-900/30 ring-blue-100 dark:ring-blue-800 ring-1 p-3">
                      <p class="font-medium text-slate-900 dark:text-white">Recomendación</p>
                      <p class="text-slate-700 dark:text-gray-300 text-sm"><span class="font-semibold">12 candidatos</span> tienen alto potencial para roles de desarrollo. Considera priorizarlos en el proceso.</p>
                    </li>
                    <li class="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800 ring-1 p-3">
                      <p class="font-medium text-slate-900 dark:text-white">Tendencia</p>
                      <p class="text-slate-700 dark:text-gray-300 text-sm">El score promedio de candidatos ha <span class="font-semibold text-emerald-600 dark:text-emerald-400">mejorado 15%</span> esta semana.</p>
                    </li>
                    <li class="rounded-lg bg-amber-50 dark:bg-amber-900/30 ring-amber-100 dark:ring-amber-800 ring-1 p-3">
                      <p class="font-medium text-slate-900 dark:text-white">Alerta</p>
                      <p class="text-slate-700 dark:text-gray-300 text-sm"><span class="font-semibold">8 candidatos</span> llevan más de 2 semanas sin contacto.</p>
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

  bindStatic() {
    document.getElementById("q")?.addEventListener("input", (e) => { this.state.query = e.target.value; this.refreshView(); });
    document.getElementById("fStage")?.addEventListener("change", (e) => { this.state.stage = e.target.value; this.refreshView(); });
    document.getElementById("fJob")?.addEventListener("change", (e) => { this.state.job = e.target.value; this.refreshView(); });
    document.getElementById("fPriority")?.addEventListener("change", (e) => { this.state.priority = e.target.value; this.refreshView(); });
    document.getElementById("fPerPage")?.addEventListener("change", (e) => { this.state.itemsPerPage = parseInt(e.target.value); this.state.currentPage = 1; this.refreshView(); });
    document.getElementById("clearFilters")?.addEventListener("click", () => { this.clearAllFilters(); });
    document.querySelectorAll(".tab-btn").forEach((b) => b.addEventListener("click", () => { this.state.view = b.dataset.view; this.updateTabStates(); this.refreshView(); }));

    document.getElementById("btnInsights")?.addEventListener("click", () => { this.state.insightsTick++; this.renderInsights(); });

    document.getElementById("maximizeInsights")?.addEventListener("click", () => { this.maximizeInsights(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && this.state.isMaximized) this.maximizeInsights(); });
  }

  updateTabStates() {
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      const isActive = btn.dataset.view === this.state.view;
      btn.className = `tab-btn rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none transition-colors ${isActive ? "bg-slate-900 text-white" : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700"}`;
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
      this.renderAnalytics();
    }
  }

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
    const jobs = [...new Set(this.state.candidates.map((c) => c.jobApplied))].sort();
    const currentValue = select.value || this.state.job;
    select.innerHTML = `<option value="all">Todas las vacantes</option>${jobs.map((job) => `<option value="${job}">${job}</option>`).join("")}`;
    select.value = currentValue;
  }

  updateMetrics() {
    const candidates = this.state.candidates;
    const active = candidates.filter((c) => c.stage !== "CONTRATADO").length;
    document.getElementById("activeCandidates").textContent = active;
    const inProcess = candidates.filter((c) => ["SCREENING", "ENTREVISTA", "OFERTA", "IA_SCREENING", "ENTREVISTA_TEC", "ENTREVISTA_FINAL"].includes(c.stage)).length;
    document.getElementById("inProcessCandidates").textContent = inProcess;
    const interviews = candidates.filter((c) => ["ENTREVISTA", "ENTREVISTA_TEC", "ENTREVISTA_FINAL"].includes(c.stage)).length;
    document.getElementById("interviewCandidates").textContent = interviews;
    const hired = candidates.filter((c) => c.stage === "CONTRATADO").length;
    document.getElementById("hiredCandidates").textContent = hired;
  }

  renderInsights() {
    const insights = [
      { t: "Recomendación", c: "María García tiene score IA de 92%. Priorizala para entrevista inmediata.", cls: "bg-blue-50 dark:bg-blue-900/30 ring-blue-100 dark:ring-blue-800" },
      { t: "Tendencia", c: "Candidatos con React tienen 3× más probabilidad de pasar screening técnico.", cls: "bg-emerald-50 dark:bg-emerald-900/30 ring-emerald-100 dark:ring-emerald-800" },
      { t: "Alerta", c: "Sofía Herrera lleva 7 días con oferta pendiente. Haz seguimiento.", cls: "bg-amber-50 dark:bg-amber-900/30 ring-amber-100 dark:ring-amber-800" },
    ];
    const start = this.state.insightsTick % insights.length;
    const ordered = [insights[start], insights[(start + 1) % insights.length], insights[(start + 2) % insights.length]];
    const ul = document.getElementById("insightsList");
    if (!ul) return;
    ul.innerHTML = ordered.map((x) => `<li class="rounded-lg ${x.cls} ring-1 p-3"><p class="font-medium text-slate-900 dark:text-white">${x.t}</p><p class="text-slate-700 dark:text-gray-300 text-sm">${x.c}</p></li>`).join("");
  }

  /* ===== LISTA ===== */
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
            <tbody id="candidatesTableBody" class="divide-y divide-slate-100 dark:divide-gray-700"></tbody>
          </table>
        </div>
        <div id="pagination" class="px-4 py-3 border-t border-slate-100 dark:border-gray-700"></div>
      </section>`;
  }
  bindList() {}

  applyFiltersToList() {
    const filtered = this.getFilteredCandidates();
    const paginated = this.getPaginatedData(filtered);
    this.renderTableRows(paginated.data);
    this.renderPagination(paginated.totalPages, paginated.currentPage, filtered.length);
  }

  renderTableRows(candidates) {
    const tbody = document.getElementById("candidatesTableBody");
    if (!tbody) return;
    tbody.innerHTML = candidates.map((candidate) => this.candidateRow(candidate)).join("");
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
      <tr data-candidate-id="${candidate.id}" class="hover:bg-slate-50/60 dark:hover:bg-gray-700/50">
        <td class="px-4 py-4"><div class="flex items-center gap-3"><img src="${candidate.avatar}" alt="${candidate.name}" class="w-10 h-10 rounded-full object-cover"><div><div class="font-medium text-slate-900 dark:text-white">${candidate.name}</div><div class="text-xs text-slate-500 dark:text-gray-400">${candidate.email}</div></div></div></td>
        <td class="px-4 py-4"><div class="font-medium text-slate-900 dark:text-white">${candidate.currentPosition}</div><div class="text-xs text-slate-500 dark:text-gray-400">${candidate.company}</div></td>
        <td class="px-4 py-4"><div class="flex flex-wrap gap-1">${candidate.skills.slice(0,3).map((s)=>`<span class="skill-tag">${s}</span>`).join("")}${candidate.skills.length>3?`<span class="text-xs text-slate-500 dark:text-gray-400">+${candidate.skills.length-3}</span>`:""}</div></td>
        <td class="px-4 py-4"><div class="flex items-center gap-2"><div class="w-16 h-2 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden"><div class="h-full ${this.getScoreColor(candidate.aiScore)}" style="width:${candidate.aiScore}%"></div></div><span class="text-sm font-medium ${this.getScoreTextColor(candidate.aiScore)}">${candidate.aiScore}%</span></div></td>
        <td class="px-4 py-4">${this.stagePill(candidate.stage)}</td>
        <td class="px-4 py-4">${this.priorityPill(candidate.priority)}</td>
        <td class="px-4 py-4"><span class="text-slate-600 dark:text-gray-400 text-sm">${this.formatDate(candidate.appliedAt)}</span></td>
        <td class="px-4 py-4"><div class="flex items-center gap-2"><button data-action="view" class="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" title="Ver perfil">👁️</button><button data-action="edit" class="p-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" title="Editar">✏️</button></div></td>
      </tr>`;
  }

  /* ===== CARDS ===== */
  cardsHTML() {
    return `
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
        <div id="candidatesCardsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>
        <div id="cardsPagination" class="mt-6 pt-4 border-t border-slate-100 dark:border-gray-700"></div>
      </section>`;
  }
  bindCards() {}

  applyFiltersToCards() {
    const filtered = this.getFilteredCandidates();
    const paginated = this.getPaginatedData(filtered);
    this.renderCards(paginated.data);
    this.renderCardsPagination(paginated.totalPages, paginated.currentPage, filtered.length);
  }

  renderCards(candidates) {
    const grid = document.getElementById("candidatesCardsGrid");
    if (!grid) return;
    grid.innerHTML = candidates.map((c) => this.candidateCard(c)).join("");
    grid.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const candidateId = e.target.closest(".candidate-card").dataset.candidateId;
        const action = e.target.dataset.action;
        this.handleCandidateAction(candidateId, action);
      });
    });
  }

  candidateCard(candidate) {
    return `
      <div data-candidate-id="${candidate.id}" class="candidate-card bg-white dark:bg-gray-800 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 hover:ring-2 hover:ring-violet-200 dark:hover:ring-violet-800 transition-all duration-200">
        <div class="flex items-center gap-3 mb-4">
          <img src="${candidate.avatar}" alt="${candidate.name}" class="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-700">
          <div class="flex-1 min-w-0"><h3 class="font-semibold text-slate-900 dark:text-white truncate">${candidate.name}</h3><p class="text-sm text-slate-600 dark:text-gray-400 truncate">${candidate.email}</p></div>
          <div class="flex items-center gap-1">${this.priorityPill(candidate.priority, true)}</div>
        </div>
        <div class="mb-3"><div class="text-sm font-medium text-slate-900 dark:text-white">${candidate.currentPosition}</div><div class="text-xs text-slate-500 dark:text-gray-400">${candidate.company} • ${candidate.experience}</div></div>
        <div class="mb-3"><div class="text-xs text-slate-500 dark:text-gray-400 mb-1">Aplicó para:</div><div class="text-sm font-medium text-slate-900 dark:text-white truncate">${candidate.jobApplied}</div></div>
        <div class="mb-4"><div class="flex items-center justify-between mb-2"><span class="text-xs text-slate-500 dark:text-gray-400">Score IA</span><span class="text-sm font-semibold ${this.getScoreTextColor(candidate.aiScore)}">${candidate.aiScore}%</span></div><div class="w-full h-2 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden"><div class="h-full ${this.getScoreColor(candidate.aiScore)} transition-all duration-300" style="width:${candidate.aiScore}%"></div></div></div>
        <div class="flex items-center justify-between mb-4">${this.stagePill(candidate.stage)}<span class="text-xs text-slate-500 dark:text-gray-400">${this.formatDate(candidate.appliedAt)}</span></div>
        ${candidate.notes?`<div class="mb-4 p-2 bg-slate-50 dark:bg-gray-700 rounded-lg"><div class="text-xs text-slate-500 dark:text-gray-400 mb-1">Notas:</div><div class="text-xs text-slate-700 dark:text-gray-300 line-clamp-2">${candidate.notes}</div></div>`:""}
        <div class="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-gray-700"><button data-action="view" class="flex-1 px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">👁️ Ver</button><button data-action="edit" class="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400" title="Editar">✏️</button></div>
      </div>`;
  }

  renderCardsPagination(totalPages, currentPage, totalItems) {
    const pagination = document.getElementById("cardsPagination");
    if (!pagination) return;
    const startItem = (currentPage - 1) * this.state.itemsPerPage + 1;
    const endItem = Math.min(currentPage * this.state.itemsPerPage, totalItems);
    pagination.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="text-sm text-slate-600 dark:text-gray-400">Mostrando ${startItem} a ${endItem} de ${totalItems} candidatos</div>
        <div class="flex items-center gap-2">
          <button ${currentPage===1?"disabled":""} onclick="candidatosView.changePage(${currentPage - 1})" class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 disabled:opacity-50">Anterior</button>
          <span class="px-3 py-1 text-sm text-slate-600 dark:text-gray-400">Página ${currentPage} de ${totalPages}</span>
          <button ${currentPage===totalPages?"disabled":""} onclick="candidatosView.changePage(${currentPage + 1})" class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 disabled:opacity-50">Siguiente</button>
        </div>
      </div>`;
  }

  /* ===== ANALYTICS (resumen funcional) ===== */
  analyticsHTML() {
    const total = this.kanban?.items?.length || 0;
    return `
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 overflow-hidden">
        <div class="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-4 md:p-5 text-white">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div><h2 class="text-lg md:text-xl font-semibold">AI Analysis</h2><p class="text-white/80 text-sm">Evaluación inteligente de candidatos • ${total} en pipeline</p></div>
            <div class="flex items-center gap-2"><select id="anMetric" class="h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-sm">
              <option value="overall">Score General</option><option value="skills">Skills Técnicos</option><option value="exp">Experiencia</option><option value="edu">Educación</option><option value="culture">Fit Cultural</option>
            </select><button id="anRefresh" class="h-10 px-3 rounded-lg bg-white/10 border border-white/20 text-sm">🔄 Actualizar</button></div>
          </div>
        </div>
        <div class="p-4 md:p-5"><div id="anTable" class="overflow-x-auto"></div></div>
      </section>`;
  }
  bindAnalytics(){ document.getElementById("anRefresh")?.addEventListener("click", () => this.renderAnalytics(true)); }
  renderAnalytics(forceRandom=false){ const pool = this.state.candidates.map(c=>({ c, ...this._calcCandidateMetrics({name:c.name, jobTitle:c.jobApplied, rating: (c.aiScore||70)/20, stage:0, jobDept:c.department }) })); const rows = pool.sort((a,b)=>b.overall-a.overall).slice(0,10); const tbl = rows.length?`<table class="min-w-full text-sm"><thead class="text-xs uppercase text-slate-500 dark:text-gray-400"><tr><th class="text-left py-2 px-3">Candidato</th><th class="text-left py-2 px-3">Vacante</th><th class="text-right py-2 px-3">Score</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-gray-700">${rows.map(r=>`<tr><td class="py-2 px-3 text-slate-900 dark:text-white">${r.c.name}</td><td class="py-2 px-3 text-slate-500 dark:text-gray-400">${r.c.jobApplied}</td><td class="py-2 px-3 text-right font-semibold text-slate-900 dark:text-white">${r.overall}%</td></tr>`).join("")}</tbody></table>`: `<div class="text-sm text-slate-500 dark:text-gray-400">No hay candidatos para mostrar.</div>`; document.getElementById("anTable").innerHTML = tbl; }

  _calcCandidateMetrics(cand,{randomize=false}={}){
    const rand=(a,b)=>Math.round(a+Math.random()*(b-a)); const clamp=(v)=>Math.max(0,Math.min(100,Math.round(v)));
    const base={ skills: clamp(randomize?rand(55,95):60+(cand.rating||0)*7), exp: clamp(randomize?rand(45,90):50+(cand.stage||0)*10), edu: clamp(randomize?rand(45,85):55), culture: clamp(randomize?rand(45,90):50+((cand.jobDept||"").includes("Tecnología")?10:0)) };
    const overall = clamp(base.skills*.4 + base.exp*.25 + base.edu*.15 + base.culture*.2);
    return { ...base, overall };
  }

  /* ===== FILTROS PAGINACIÓN ===== */
  getFilteredCandidates() {
    return this.state.candidates.filter((candidate) => {
      const q = this.state.query?.toLowerCase?.() || "";
      const matchesQuery = !q || candidate.name.toLowerCase().includes(q) || candidate.email.toLowerCase().includes(q) || candidate.jobApplied.toLowerCase().includes(q) || candidate.skills.some((s)=>s.toLowerCase().includes(q));
      const normStage = this.legacyMap[candidate.stage] || candidate.stage;
      const matchesStage = this.state.stage === "all" || normStage === this.state.stage;
      const matchesJob = this.state.job === "all" || candidate.jobApplied === this.state.job;
      const matchesPriority = this.state.priority === "all" || candidate.priority === this.state.priority;
      return matchesQuery && matchesStage && matchesJob && matchesPriority;
    });
  }

  getPaginatedData(data) {
    const totalPages = Math.max(1, Math.ceil(data.length / this.state.itemsPerPage));
    const startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    const endIndex = startIndex + this.state.itemsPerPage;
    return { data: data.slice(startIndex, endIndex), totalPages, currentPage: this.state.currentPage, totalItems: data.length };
  }

  renderPagination(totalPages, currentPage, totalItems) {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;
    const startItem = (currentPage - 1) * this.state.itemsPerPage + 1;
    const endItem = Math.min(currentPage * this.state.itemsPerPage, totalItems);
    pagination.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="text-sm text-slate-600 dark:text-gray-400">Mostrando ${startItem} a ${endItem} de ${totalItems} candidatos</div>
        <div class="flex items-center gap-2">
          <button ${currentPage===1?"disabled":""} onclick="candidatosView.changePage(${currentPage - 1})" class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 disabled:opacity-50">Anterior</button>
          <span class="px-3 py-1 text-sm text-slate-600 dark:text-gray-400">Página ${currentPage} de ${totalPages}</span>
          <button ${currentPage===totalPages?"disabled":""} onclick="candidatosView.changePage(${currentPage + 1})" class="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-gray-400 disabled:opacity-50">Siguiente</button>
        </div>
      </div>`;
  }

  changePage(page) { this.state.currentPage = page; this.refreshView(); }

  handleCandidateAction(candidateId, action) {
    const candidate = this.state.candidates.find((c) => c.id === candidateId);
    if (!candidate) return;
    if (action === "view") alert(`Ver perfil de ${candidate.name} (demo)`);
    else if (action === "edit") alert(`Editar ${candidate.name} (demo)`);
  }

  maximizeInsights() {
    this.state.isMaximized = !this.state.isMaximized;
    const btn = document.getElementById("maximizeInsights");
    if (btn) { const icon = btn.querySelector("svg"); if (this.state.isMaximized) { icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9v4.5M15 9h4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15v4.5M15 15h4.5m0 0l-5.5 5.5"></path>`; btn.title = "Minimizar vista"; } else { icon.innerHTML = `<path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4\"></path>`; btn.title = "Maximizar vista"; } }
    this.applyMaximizedStyles();
  }

  applyMaximizedStyles() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;
    if (this.state.isMaximized) {
      const insightsAside = mainContent.querySelector("aside");
      const mainSection = mainContent.querySelector("section.grid");
      const metricsSection = document.getElementById("metricsSection");
      if (insightsAside) insightsAside.style.display = "none";
      if (metricsSection) metricsSection.style.display = "none";
      if (mainSection) {
        mainSection.className = mainSection.className.replace("lg:grid-cols-12","lg:grid-cols-1");
        mainContent.classList.add("maximized-view");
        const perPageSelect = document.getElementById("fPerPage");
        if (perPageSelect && this.state.itemsPerPage < 20) { this.state.itemsPerPage = 20; perPageSelect.value = "20"; this.refreshView(); }
        const existingStyle = document.getElementById("maximized-styles"); if (existingStyle) existingStyle.remove();
        const style = document.createElement("style"); style.id = "maximized-styles"; style.textContent = `
          .maximized-view{ position:fixed !important; inset:0 !important; z-index:40 !important; background:white !important; padding:1rem !important; overflow-y:auto !important; }
          .dark .maximized-view{ background: rgb(17 24 39) !important; }
          .maximized-view .grid{ max-width:none !important; }
          .maximized-view #viewContainer{ min-height: calc(100vh - 200px) !important; }
          .maximized-view .mx-auto{ max-width:none !important; }
          .maximized-view .max-w-screen-2xl, .maximized-view .max-w-\\[1600px\\]{ max-width:none !important; }
          .maximized-view #metricsSection{ grid-template-columns: repeat(auto-fit,minmax(200px,1fr)) !important; }
          .maximized-view .grid.grid-cols-1.lg\\:grid-cols-12{ grid-template-columns: 1fr !important; }
          .maximized-view .xl\\:col-span-10{ grid-column: span 1 !important; }
          .maximized-view table{ min-width:100% !important; }
          .maximized-view th,.maximized-view td{ padding:.75rem 1rem !important; }
          .maximized-view .skill-tag{ margin:.125rem !important; padding:.25rem .5rem !important; }
        `; document.head.appendChild(style);
      }
    } else {
      const insightsAside = mainContent.querySelector("aside");
      const mainSection = mainContent.querySelector("section.grid");
      if (insightsAside) insightsAside.style.display = "block";
      const metricsSection = document.getElementById("metricsSection"); if (metricsSection) metricsSection.style.display = "grid";
      if (mainSection) {
        mainSection.className = mainSection.className.replace("lg:grid-cols-1","lg:grid-cols-12");
        mainContent.classList.remove("maximized-view");
        const perPageSelect = document.getElementById("fPerPage"); if (perPageSelect && this.state.itemsPerPage > 10) { this.state.itemsPerPage = 10; perPageSelect.value = "10"; this.refreshView(); }
        const maximizedStyles = document.getElementById("maximized-styles"); if (maximizedStyles) maximizedStyles.remove();
      }
    }
  }

  getTopSkills() {
    const skillCount = {}; this.state.candidates.forEach((c)=>{ c.skills.forEach((s)=>{ skillCount[s]=(skillCount[s]||0)+1; }); });
    return Object.entries(skillCount).sort(([,a],[,b])=>b-a).slice(0,8).map(([name,count])=>({name,count}));
  }

  /* ======================== */
  /* ======== PIPELINE ======= */
  /* ======================== */

  pipelineHeaderHTML(){
    return `
      <div class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 mb-3">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold">🚀 Pipeline de Candidatos</h2>
            <p class="text-sm text-slate-500 dark:text-gray-400">Gestión del proceso de selección</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3 py-2 rounded-lg bg-slate-900 text-white text-sm">👤 Nuevo Candidato</button>
            <button class="px-3 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 text-sm">🤖 IA Análisis</button>
            <button class="px-3 py-2 rounded-lg ring-1 ring-slate-200 dark:ring-gray-600 text-sm">🔄 Actualizar</button>
          </div>
        </div>
      </div>`;
  }

  getPipelineStages(){
    return [
      { key: "APLICADO",         name: "📝 Aplicado",           color: "blue" },
      { key: "IA_SCREENING",     name: "🤖 IA Screening",       color: "indigo" },
      { key: "REVISION_RH",      name: "👁️ Revisión RH",       color: "amber" },
      { key: "ENTREVISTA_TEC",   name: "🛠️ Entrevista Técnica", color: "purple" },
      { key: "ENTREVISTA_FINAL", name: "🎯 Entrevista Final",   color: "fuchsia" },
      { key: "OFERTA",           name: "✅ Oferta",             color: "emerald" },
      { key: "CONTRATADO",       name: "🟢 Contratado",         color: "green" },
    ];
  }

  _normalizeCandidate(c){
    const overall = c.aiScore ?? 70;
    const skillsMatch  = Math.min(10, Math.round((overall/100)*9)+1);
    const cultureMatch = Math.min(10, Math.round((overall/100)*8)+2);
    const successProb  = Math.max(40, Math.min(95, Math.round(overall*0.95)));
    const dias = Math.max(1, Math.floor((Date.now() - (c.appliedAt||Date.now())) / 86400000));
    const timeInStage = `${dias} día${dias>1?'s':''}`;
    return {
      id: c.id,
      name: c.name,
      avatar: c.avatar,
      currentPosition: c.currentPosition,
      company: c.company,
      location: c.location || "—",
      experience: c.experience || "—",
      jobTitle: c.jobApplied || "—",
      jobId: c.jobId || null,
      stage: (this.legacyMap[c.stage] || c.stage),
      priority: c.priority,
      ai: { overall, skillsMatch, cultureMatch, successProb },
      timeInStage,
    };
  }

  getCandidatesByStage(stageKey){
    const normalized = this.getFilteredCandidates().map((c)=> this._normalizeCandidate(c));
    return normalized.filter((c)=> c.stage === stageKey);
  }

  pipelineCard(c){
    return `
      <div class="candidate-pipeline-card candidate-card border border-slate-200 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-800">
        <!-- Header con avatar y info básica -->
        <div class="flex items-start gap-2 mb-3">
          <img src="${c.avatar}" alt="${c.name}" class="w-8 h-8 rounded-full object-cover flex-shrink-0">
          <div class="min-w-0 flex-1">
            <div class="font-medium text-sm text-slate-900 dark:text-white truncate">${c.name}</div>
            <div class="text-xs text-slate-500 dark:text-gray-400 truncate">${c.currentPosition}</div>
            <div class="text-[10px] text-slate-500 dark:text-gray-400 truncate">📍 ${c.location}</div>
          </div>
          <div class="flex flex-col items-end gap-1 flex-shrink-0">
            <span class="text-xs ${this.getScoreTextColor(c.ai.overall)} font-semibold">${c.ai.overall}%</span>
            ${this.priorityPill(c.priority, true)}
          </div>
        </div>
        
        <!-- Vacante aplicada -->
        <div class="applied-job mb-3">
          <span class="job-label">🎯 Aplicó a:</span>
          <div class="mt-1">
            <button class="job-title-link" data-go-vac="${c.jobId ?? ''}" data-go-vac-title="${c.jobTitle}">${c.jobTitle}</button>
          </div>
        </div>
        
        <!-- Métricas AI -->
        <div class="candidate-ai-metrics">
          <div class="ai-metric skills">
            <span class="metric-label">Skills</span>
            <span class="metric-value">${c.ai.skillsMatch}/10</span>
          </div>
          <div class="ai-metric fit">
            <span class="metric-label">Fit</span>
            <span class="metric-value">${c.ai.cultureMatch}/10</span>
          </div>
          <div class="ai-metric success">
            <span class="metric-label">Éxito</span>
            <span class="metric-value">${c.ai.successProb}%</span>
          </div>
        </div>
        
        <!-- Tiempo en etapa -->
        <div class="text-xs text-slate-500 dark:text-gray-400 mb-3 text-center">
          ⏱️ ${c.timeInStage} en etapa
        </div>
        
        <!-- Botones de acción -->
        <div class="candidate-actions border-t border-slate-200 dark:border-gray-700">
          <button class="btn-candidate-action" data-action="advance" data-id="${c.id}" title="Avanzar etapa">➡️</button>
          <button class="btn-candidate-action" data-action="interview" data-id="${c.id}" title="Programar entrevista">📅</button>
          <button class="btn-candidate-action" data-action="contact" data-id="${c.id}" title="Contactar">📧</button>
          <button class="btn-candidate-action" data-action="more" data-id="${c.id}" title="Más opciones">⋯</button>
        </div>
      </div>`;
  }

  pipelineHTML(){
    return `
      ${this.pipelineHeaderHTML()}
      <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
        <div class="pipeline-grid grid grid-cols-1 md:grid-cols-7 gap-4">
          ${this.getPipelineStages().map((stage)=>`
            <div class="bg-slate-50 dark:bg-gray-700 rounded-xl p-4">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-medium text-slate-900 dark:text-white">${stage.name}</h3>
                <span class="bg-slate-200 dark:bg-gray-600 text-slate-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium">${this.getCandidatesByStage(stage.key).length}</span>
              </div>
              <div class="space-y-3" id="stage-${stage.key}">
                ${this.getCandidatesByStage(stage.key).map((c)=> this.pipelineCard(c)).join("")}
              </div>
            </div>`).join("")}
        </div>
      </section>`;
  }

  bindPipeline(){
    const container = document.getElementById("viewContainer"); if (!container) return;
    container.querySelectorAll("[data-go-vac]").forEach((btn)=>{
      btn.addEventListener("click", (e)=>{ const jobId=e.currentTarget.dataset.goVac||null; const jobTitle=e.currentTarget.dataset.goVacTitle||""; this.goToVacancy(jobId, jobTitle); });
    });
    container.querySelectorAll("[data-action]").forEach((b)=>{
      b.addEventListener("click", (e)=>{ const action=e.currentTarget.dataset.action; const id=e.currentTarget.dataset.id; this.handlePipelineAction(id, action); });
    });
  }

  goToVacancy(jobId, jobTitle){
    // Integrar con tu router si aplica.
    alert(`Ir a vacante: ${jobTitle || jobId || '(sin id)'} (demo)`);
  }

  handlePipelineAction(candidateId, action){
    const c = this.state.candidates.find(x=> x.id === candidateId);
    if (!c) return;
    if (action === "advance"){
      const order = ["APLICADO","IA_SCREENING","REVISION_RH","ENTREVISTA_TEC","ENTREVISTA_FINAL","OFERTA","CONTRATADO"];
      const cur = (this.legacyMap[c.stage] || c.stage);
      const idx = Math.max(0, order.indexOf(cur));
      const next = order[Math.min(idx+1, order.length-1)];
      c.stage = next; // guardamos el nuevo estado
      this.refreshView();
    } else if (action === "interview"){
      alert(`Programar entrevista con ${c.name} (demo)`);
    } else if (action === "contact"){
      alert(`Contactar a ${c.name} (demo)`);
    } else {
      alert(`Más acciones para ${c.name} (demo)`);
    }
  }

  /* ===== UTILIDADES ===== */
  getScoreColor(score){ if (score>=90) return "bg-emerald-500"; if (score>=75) return "bg-amber-500"; return "bg-slate-400"; }
  getScoreTextColor(score){ if (score>=90) return "ai-score-high"; if (score>=75) return "ai-score-medium"; return "ai-score-low"; }
  stagePill(stage){ const colors={ APLICADO:"bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300", IA_SCREENING:"bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300", REVISION_RH:"bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300", ENTREVISTA_TEC:"bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300", ENTREVISTA_FINAL:"bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-300", OFERTA:"bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300", CONTRATADO:"bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300" }; const labels={ APLICADO:"Aplicado", IA_SCREENING:"IA Screening", REVISION_RH:"Revisión RH", ENTREVISTA_TEC:"Entrevista Técnica", ENTREVISTA_FINAL:"Entrevista Final", OFERTA:"Oferta", CONTRATADO:"Contratado" }; const key = this.legacyMap[stage] || stage; return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors[key]||colors.APLICADO}">${labels[key]||key}</span>`; }
  priorityPill(p, small=false){ const colors={ ALTA:"bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300", MEDIA:"bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300", BAJA:"bg-slate-100 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300" }; const size= small?"px-1.5 py-0.5 text-xs":"px-2.5 py-0.5 text-xs"; return `<span class="inline-flex items-center rounded-full ${size} font-medium ${colors[p]||colors.MEDIA}">${p}</span>`; }
  formatDate(ts){ const now=Date.now(); const days=Math.floor((now - ts)/86400000); if (days===0) return "Hoy"; if (days===1) return "Ayer"; return `Hace ${days} días`; }
}

// Instancia global para la paginación / navegación
let candidatosView;
document.addEventListener("DOMContentLoaded", () => { if (window.location.hash === "#candidatos") { candidatosView = new CandidatosView(); } });
