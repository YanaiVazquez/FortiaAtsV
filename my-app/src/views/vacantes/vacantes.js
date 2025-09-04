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
      ],
    };

    // orden inicial por columna (simple: incremental)
    const byStatus = { ACTIVA: 0, BORRADOR: 0, PAUSADA: 0 };
    this.state.jobs.forEach(
      (j) => (j.order = byStatus[j.status] = byStatus[j.status] + 1000)
    );

    this.render();
    this.bindStatic();
    this.refreshView();
  }

  render() {
    const el = document.getElementById("main-content");
    if (!el) return;

    el.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="mx-auto max-w-screen-2xl 2xl:max-w-[1600px]">
          <!-- Header -->
          <header class="flex items-center justify-between gap-3 mb-6">
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
              <span>📋</span> Gestión de Vacantes
            </h1>
            <div class="flex items-center gap-2">
              <button id="btnReports" class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-50 inline-flex items-center gap-2">📊 Reportes</button>
              <button id="btnConfig" class="rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 py-2 text-slate-700 dark:text-gray-300 hover:bg-slate-50 inline-flex items-center gap-2">⚙️ Configurar</button>
              <button id="btnNew" class="rounded-xl bg-slate-900 text-white px-3.5 py-2 inline-flex items-center gap-2 hover:hover:bg-fortia-primary">➕ Nueva Vacante</button>
            </div>
          </header>
          ${this.heroInsightsHTML()}
          <!-- Filtros top -->
          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 md:p-4">
            <div class="flex flex-wrap items-center gap-3">
              <!-- Search: crece -->
              <div class="flex-1 min-w-[280px]">
                <div class="flex h-11 items-center gap-2 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3">
                  <span class="text-slate-500 dark:text-gray-400">🔎</span>
                  <input id="q" type="text"
                    placeholder="Buscar por posición, departamento o reclutador..."
                    class="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400" />
                </div>
              </div>

              <!-- Selects con ancho fijo, misma altura y sin shrink -->
              <select id="fStatus"
                class="shrink-0 h-11 w-[210px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="all">Todos los estados</option>
                <option value="ACTIVA">Activa</option>
                <option value="BORRADOR">Borrador</option>
                <option value="PAUSADA">Pausada</option>
              </select>

              <select id="fDept"
                class="shrink-0 h-11 w-[260px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="all">Todos los departamentos</option>
                <option>Tecnología</option>
                <option>Producto</option>
                <option>Diseño</option>
              </select>

              <select id="fRec"
                class="shrink-0 h-11 w-[260px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="all">Todos los reclutadores</option>
                <option>Ana García</option>
                <option>Carlos López</option>
                <option>María Rodríguez</option>
                <option>Luis Martín</option>
              </select>

              <select id="fSort"
                class="shrink-0 h-11 w-[180px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="recent">Ordenar por</option>
                <option value="apps-desc">Aplicaciones (↓)</option>
                <option value="apps-asc">Aplicaciones (↑)</option>
              </select>

              <button id="btnMoreFilters"
                class="shrink-0 h-11 w-[120px] rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 inline-flex items-center justify-center gap-2">
                ⚙️ <span class="hidden sm:inline">Más filtros</span>
              </button>
            </div>
          </section>
  


          <!-- Grid principal -->
          <section class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Izquierda -->
             <div class="xl:col-span-10 space-y-4">
              <div class="flex items-center gap-2">
                <button data-view="list" class="tab-btn rounded-lg px-3 py-1.5 text-sm ${
                  this.state.view === "list"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100"
                }">Lista</button>
                <button data-view="kanban" class="tab-btn rounded-lg px-3 py-1.5 text-sm ${
                  this.state.view === "kanban"
                    ? "bg-slate-900 text-white"
                    : "ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 hover:bg-slate-50"
                }">Kanban</button>
                <button data-view="analytics" class="tab-btn rounded-lg px-3 py-1.5 text-sm ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 text-slate-600 hover:bg-slate-50">Analytics</button>
              </div>
              <div id="viewContainer"></div>
            </div>

            <!-- Derecha: AI Insights -->
            <aside class="lg:col-span-2">
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
  }

  // ---------- Vista dinámica ----------
  refreshView(justTabs = false) {
    if (!justTabs) this.renderInsights();

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
    } else {
      container.innerHTML = `<div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-6 text-slate-600">Próximamente: Analytics</div>`;
    }
  }

  // ---------- LISTA ----------
  listHTML() {
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800">
        <div class="overflow-x-auto">
          <table class="min-w-full">
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
      <div class="text-center text-sm text-slate-500 mt-2">
        <span id="showingText"></span>
      </div>
    `;
  }

  bindList() {
    document.getElementById("jobsList")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const id = btn.dataset.id;
      const job = this.state.jobs.find((j) => j.id === id);
      if (!job) return;

      switch (btn.dataset.action) {
        case "pipeline":
          alert(`Abrir pipeline de "${job.title}" (demo)`);
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
  }

  applyFiltersToList() {
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

    const tbody = document.getElementById("jobsList");
    const showing = document.getElementById("showingText");
    tbody.innerHTML = list.map((j) => this.row(j)).join("");
    showing.textContent = `Mostrando ${list.length} de ${this.state.jobs.length} vacantes`;
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
        <td class="px-4 py-4"><span class="rounded-full bg-slate-100 text-slate-700 dark:text-gray-300 text-xs px-2 py-0.5">${
          j.department
        }</span></td>
        <td class="px-4 py-4">${pill}</td>
        <td class="px-4 py-4">
          <div class="font-semibold text-slate-800">${this.n(j.apps)}</div>
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
        <td class="px-4 py-4 text-slate-700 dark:text-gray-300">${j.recruiter}</td>
        <td class="px-4 py-4">
          <div class="text-slate-700 dark:text-gray-300">${j.publishedAgo}</div>
        </td>
        <td class="px-4 py-4">${this.actionsFor(j)}</td>
      </tr>
    `;
  }

  actionsFor(j) {
    const primary =
      j.status === "BORRADOR"
        ? `<button data-action="publicar" data-id="${j.id}" class="rounded-lg bg-sky-500 text-white px-3 py-1.5 text-sm hover:opacity-95">Ver Candidatos</button>`
        : j.status === "PAUSADA"
        ? `<button data-action="reactivar" data-id="${j.id}" class="rounded-lg bg-sky-500 text-white px-3 py-1.5 text-sm hover:opacity-95">Ver Candidatos</button>`
        : `<button data-action="pipeline" data-id="${j.id}" class="rounded-lg bg-sky-500 text-white px-3 py-1.5 text-sm hover:opacity-95">Ver Candidatos</button>`;

    const edit = `<button data-action="edit" data-id="${j.id}" class="rounded-lg ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-50 ml-2">Editar</button>`;
    return `<div class="flex items-center">${primary}${edit}</div>`;
  }

  // ---------- KANBAN ----------
  kanbanHTML() {
    return `
      <div class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4" id="kanbanCols">
          ${["ACTIVA", "BORRADOR", "PAUSADA"]
            .map(
              (s) => `
            <div class="rounded-xl bg-slate-50 dark:bg-gray-700 ring-1 ring-slate-200 dark:ring-gray-600 p-3" data-col="${s}">
              <div class="flex items-center justify-between mb-2">
                <p class="font-semibold">${s}</p>
                <span class="text-xs text-slate-500" id="count-${s}"></span>
              </div>
              <div class="min-h-[200px] space-y-2" data-dropzone="${s}"></div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  renderKanbanColumns() {
    document.querySelectorAll("[data-dropzone]").forEach((zone) => {
      const status = zone.dataset.dropzone;
      const items = this.filteredJobs()
        .filter((j) => j.status === status)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      zone.innerHTML = items.map((j) => this.kanbanCard(j)).join("");
      const countEl = document.getElementById(`count-${status}`);
      countEl.textContent = `${items.length} ítem(s)`;
    });
  }

  kanbanCard(j) {
    return `
      <article draggable="true" data-id="${
        j.id
      }" class="drag-card rounded-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 p-3 cursor-grab active:cursor-grabbing">
        <p class="font-medium text-slate-900 dark:text-white">${j.title}</p>
        <p class="text-xs text-slate-500">${j.department} · ${j.location}</p>
        <div class="mt-2 h-1.5 bg-slate-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <div class="h-full bg-[#004176] dark:bg-blue-500" style="width:${this.pipelinePercent(
            j.pipeline
          )}%"></div>
        </div>
      </article>
    `;
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
}
