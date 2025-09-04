export class CandidatosView {
  constructor() {
    // --- estado inicial ---
    const now = Date.now();
    this.state = {
      query: "",
      job: "all",
      status: "all",
      sort: "recent", // recent | match-desc | match-asc | name-asc
      candidates: [
        {
          id: "c1",
          name: "María García",
          email: "maria.garcia@email.com",
          job: { title: "Frontend Developer", dept: "Tecnología" },
          status: "EN_REVISION", // NUEVO | EN_REVISION | ENTREVISTA | OFERTA | CONTRATADO
          match: 92,
          appliedAt: now - 5 * 60 * 1000, // 5 min
        },
        {
          id: "c2",
          name: "Carlos Mendoza",
          email: "carlos.mendoza@email.com",
          job: { title: "Frontend Developer", dept: "Tecnología" },
          status: "ENTREVISTA",
          match: 88,
          appliedAt: now - 60 * 60 * 1000, // 1h
        },
        {
          id: "c3",
          name: "Ana López",
          email: "ana.lopez@email.com",
          job: { title: "UX Designer", dept: "Diseño" },
          status: "CONTRATADO",
          match: 95,
          appliedAt: now - 2 * 60 * 60 * 1000, // 2h
        },
        {
          id: "c4",
          name: "Diego Ramírez",
          email: "diego.ramirez@email.com",
          job: { title: "Backend Developer", dept: "Tecnología" },
          status: "NUEVO",
          match: 85,
          appliedAt: now - 24 * 60 * 60 * 1000, // 1d
        },
        {
          id: "c5",
          name: "Sofía Herrera",
          email: "sofia.herrera@email.com",
          job: { title: "DevOps Engineer", dept: "Tecnología" },
          status: "OFERTA",
          match: 91,
          appliedAt: now - 24 * 60 * 60 * 1000, // 1d
        },
      ],
    };

    this.render();
    this.bindStatic();
    this.refresh();
  }

  // ---------------------- RENDER LAYOUT ----------------------
  render() {
    const el = document.getElementById("main-content");
    el.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="mx-auto max-w-screen-2xl 2xl:max-w-[1600px]">
          <!-- header -->
          <header class="mb-4">
            <div class="flex items-center gap-3">
              <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Candidatos</h1>
              <span class="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5">NEW</span>
            </div>
            <p class="mt-1 text-slate-600">Gestiona y evalúa a todos los candidatos de tu organización</p>
          </header>

          <!-- filtros + actions -->
          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 p-3 md:p-4 mb-4">
            <div class="flex flex-wrap items-center gap-3">
              <!-- search -->
              <div class="flex-1 min-w-[260px]">
                <div class="flex h-11 items-center gap-2 rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-slate-50 dark:bg-gray-700 px-3">
                  <span class="text-slate-500 dark:text-gray-400">🔎</span>
                  <input id="fQuery" type="text" placeholder="Buscar candidatos..." class="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400">
                </div>
              </div>

              <!-- vacante -->
              <select id="fJob" class="shrink-0 h-11 w-[200px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <!-- options dinámicas -->
              </select>

              <!-- estado -->
              <select id="fStatus" class="shrink-0 h-11 w-[180px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="all">Todos los estados</option>
                <option value="NUEVO">Nuevo</option>
                <option value="EN_REVISION">En revisión</option>
                <option value="ENTREVISTA">Entrevista</option>
                <option value="OFERTA">Oferta</option>
                <option value="CONTRATADO">Contratado</option>
              </select>

              <!-- ordenar -->
              <select id="fSort" class="shrink-0 h-11 w-[160px] rounded-xl ring-1 ring-slate-200 dark:ring-gray-600 bg-white dark:bg-gray-700 px-3 text-slate-900 dark:text-white">
                <option value="recent">Ordenar por</option>
                <option value="match-desc">Match (↓)</option>
                <option value="match-asc">Match (↑)</option>
                <option value="name-asc">Nombre (A–Z)</option>
              </select>

              <div class="ml-auto flex items-center gap-2">
                <button id="btnExport" class="h-11 rounded-xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800 px-3 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 inline-flex items-center gap-2">📈 Exportar</button>
                <button id="btnAdd" class="h-11 rounded-xl bg-sky-600 text-white px-4 hover:opacity-95 inline-flex items-center gap-2">➕ Agregar Candidato</button>
              </div>
            </div>
          </section>

          <!-- tabla -->
          <section class="rounded-2xl ring-1 ring-black/5 dark:ring-white/10 bg-white dark:bg-gray-800">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[1100px] table-auto text-sm">
                <thead class="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th class="px-4 py-3 text-left w-[28%]">Candidato</th>
                    <th class="px-4 py-3 text-left w-[24%]">Vacante</th>
                    <th class="px-4 py-3 text-left w-[12%]">Estado</th>
                    <th class="px-4 py-3 text-left w-[16%]">Match</th>
                    <th class="px-4 py-3 text-left w-[12%]">Aplicó</th>
                    <th class="px-4 py-3 text-left w-[8%]">Acciones</th>
                  </tr>
                </thead>
                <tbody id="candsTbody" class="divide-y">
                  <!-- rows -->
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  // ---------------------- BIND UI ----------------------
  bindStatic() {
    // inputs
    document.getElementById("fQuery")?.addEventListener("input", (e) => {
      this.state.query = e.target.value;
      this.refresh();
    });
    document.getElementById("fStatus")?.addEventListener("change", (e) => {
      this.state.status = e.target.value;
      this.refresh();
    });
    document.getElementById("fSort")?.addEventListener("change", (e) => {
      this.state.sort = e.target.value;
      this.refresh();
    });

    // actions
    document.getElementById("btnAdd")?.addEventListener("click", () => {
      alert("Abrir formulario para agregar candidato (demo).");
    });
    document.getElementById("btnExport")?.addEventListener("click", () => {
      this.exportCSV(this.filtered());
    });
  }

  // ---------------------- DATA FLOW ----------------------
  refresh() {
    this.fillJobSelect();
    this.renderRows(this.filtered());
  }

  fillJobSelect() {
    const sel = document.getElementById("fJob");
    if (!sel) return;
    const jobs = Array.from(
      new Set(this.state.candidates.map((c) => c.job.title))
    ).sort();
    // si ya tiene valor, lo conservamos
    const prev = sel.value || this.state.job;
    sel.innerHTML = `
      <option value="all">Todas las vacantes</option>
      ${jobs.map((j) => `<option value="${j}">${j}</option>`).join("")}
    `;
    sel.value = prev;
    sel.onchange = (e) => {
      this.state.job = e.target.value;
      this.renderRows(this.filtered());
    };
  }

  filtered() {
    const q = this.state.query.trim().toLowerCase();
    let list = this.state.candidates.filter((c) => {
      const matchQ =
        !q ||
        [c.name, c.email, c.job.title, c.job.dept]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchJob = this.state.job === "all" || c.job.title === this.state.job;
      const matchStatus = this.state.status === "all" || c.status === this.state.status;
      return matchQ && matchJob && matchStatus;
    });

    switch (this.state.sort) {
      case "match-desc":
        list.sort((a, b) => b.match - a.match);
        break;
      case "match-asc":
        list.sort((a, b) => a.match - b.match);
        break;
      case "name-asc":
        list.sort((a, b) => a.name.localeCompare(b.name, "es"));
        break;
      default: // recent
        list.sort((a, b) => b.appliedAt - a.appliedAt);
    }
    return list;
  }

  renderRows(rows) {
    const tbody = document.getElementById("candsTbody");
    if (!tbody) return;
    tbody.innerHTML = rows.map((c) => this.rowHTML(c)).join("");

    // acciones de fila
    tbody.querySelectorAll("[data-act]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.closest("tr")?.dataset.id;
        const cand = this.state.candidates.find((x) => x.id === id);
        if (!cand) return;
        switch (btn.dataset.act) {
          case "view":
            alert(`Ver perfil de ${cand.name} (demo)`);
            break;
          case "note":
            alert(`Agregar nota a ${cand.name} (demo)`);
            break;
          case "archive":
            alert(`Archivar a ${cand.name} (demo)`);
            break;
        }
      });
    });
  }

  // ---------------------- ROW TEMPLATE ----------------------
  rowHTML(c) {
    const statusPill = this.statusPill(c.status);
    const matchBar = this.matchBar(c.match);
    return `
      <tr data-id="${c.id}" class="hover:bg-slate-50/60">
        <!-- candidato -->
        <td class="px-4 py-3">
          <div class="flex items-center gap-3">
            ${this.avatar(c.name)}
            <div>
              <div class="font-medium text-slate-900 dark:text-white leading-5">${c.name}</div>
              <div class="text-slate-500 text-xs">${c.email}</div>
            </div>
          </div>
        </td>

        <!-- vacante -->
        <td class="px-4 py-3">
          <div class="text-slate-900 dark:text-white font-medium">${c.job.title}</div>
          <div class="text-slate-500 text-xs">${c.job.dept}</div>
        </td>

        <!-- estado -->
        <td class="px-4 py-3">
          ${statusPill}
        </td>

        <!-- match -->
        <td class="px-4 py-3">
          ${matchBar}
        </td>

        <!-- aplicado -->
        <td class="px-4 py-3">
          <span class="text-slate-600">${this.relativeTime(c.appliedAt)}</span>
        </td>

        <!-- acciones -->
        <td class="px-4 py-3">
          <div class="flex items-center gap-3 text-slate-500">
            <button class="hover:text-slate-800" title="Ver" data-act="view">👁️</button>
            <button class="hover:text-slate-800" title="Notas" data-act="note">🗒️</button>
            <button class="hover:text-rose-600" title="Archivar" data-act="archive">✖️</button>
          </div>
        </td>
      </tr>
    `;
  }

  // ---------------------- UI PARTS ----------------------
  statusPill(s) {
    const map = {
      NUEVO:    "bg-slate-200 text-slate-700",
      EN_REVISION: "bg-blue-100 text-blue-700",
      ENTREVISTA:  "bg-fuchsia-100 text-fuchsia-700",
      OFERTA:      "bg-amber-100 text-amber-700",
      CONTRATADO:  "bg-emerald-100 text-emerald-700",
    };
    const label = {
      NUEVO: "Nuevo",
      EN_REVISION: "En revisión",
      ENTREVISTA: "Entrevista",
      OFERTA: "Oferta",
      CONTRATADO: "Contratado",
    }[s] || s;
    return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${map[s] || "bg-slate-100 text-slate-700"}">${label}</span>`;
  }

  matchBar(pct) {
    const color =
      pct >= 90 ? "bg-emerald-600"
      : pct >= 75 ? "bg-amber-500"
      : "bg-slate-500";
    return `
      <div class="flex items-center gap-3">
        <div class="h-2 w-40 bg-slate-200 rounded-full overflow-hidden">
          <div class="h-full ${color}" style="width:${Math.max(0, Math.min(100, pct))}%"></div>
        </div>
        <span class="text-slate-700 font-medium">${pct}%</span>
      </div>
    `;
  }

  avatar(name) {
    const initials = name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase();
    const colors = [
      "bg-sky-500","bg-rose-500","bg-violet-500","bg-emerald-600",
      "bg-amber-500","bg-indigo-500","bg-teal-600","bg-fuchsia-600"
    ];
    const idx = this.hash(name) % colors.length;
    return `
      <div class="w-9 h-9 rounded-full ${colors[idx]} grid place-items-center text-white text-xs font-semibold">
        ${initials}
      </div>
    `;
  }

  relativeTime(ts) {
    const diff = Math.max(1, Math.floor((Date.now() - ts) / 1000)); // s
    if (diff < 60) return `hace ${diff} s`;
    const m = Math.floor(diff / 60);
    if (m < 60) return `hace ${m} min`;
    const h = Math.floor(m / 60);
    if (h < 24) return `hace ${h} hora${h>1?"s":""}`;
    const d = Math.floor(h / 24);
    return `hace ${d} día${d>1?"s":""}`;
  }

  exportCSV(rows) {
    const header = ["Nombre","Email","Vacante","Departamento","Estado","Match","Aplicó"];
    const lines = rows.map(c => [
      c.name, c.email, c.job.title, c.job.dept,
      this.statusPill(c.status).replace(/<[^>]+>/g,""), // limpio etiquetas
      `${c.match}%`,
      this.relativeTime(c.appliedAt)
    ]);
    const csv = [header, ...lines].map(r => r.map(v => `"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `candidatos_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ---------------------- UTILS ----------------------
  hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i) | 0;
    return Math.abs(h);
  }
}
