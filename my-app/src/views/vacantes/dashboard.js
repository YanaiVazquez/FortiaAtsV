// src/views/DashboardView.js
export class DashboardView {
  constructor() {
    this.render();
    this.bind();
  }

  render() {
    const el = document.getElementById("main-content");
    if (!el) return;

    el.innerHTML = `
      <!-- MAIN GRID -->
      <main class="p-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        <!-- HEADER: título -->
        <header class="xl:col-span-12 flex items-center justify-between gap-3 mb-1">
          <h1 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        </header>

        <!-- ===== FILA 1: KPIs A TODO LO ANCHO ===== -->
        <section class="xl:col-span-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${this.statCard("Vacantes Activas", "24", "+10%", true)}
            ${this.statCard("Candidatos Nuevos", "89", "+25%", true)}
            ${this.statCard("Entrevistas Hoy", "12", "-5%", false)}
            ${this.statCard("Ofertas Pendientes", "12", "+8%", true)}
          </div>
        </section>

        <!-- ===== FILA 2: CONTENIDO PRINCIPAL IZQUIERDA (9/12) ===== -->
        <section class="xl:col-span-9 space-y-4">
          <!-- KPIs compactos -->
          <div class="col-span-12 bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/60 dark:border-gray-700 shadow-sm p-4 w-full max-h-64 overflow-y-auto ring-1 ring-black/5 dark:ring-white/10">
            <div class="grid grid-cols-2 gap-6">
              ${this.kpiCompact("Aplicados", "45", "+15%", true, "👤")}
              ${this.kpiCompact("Entrevistas", "12", "+8%", true, "📅")}
              ${this.kpiCompact("En Revisión", "8", "-5%", false, "🔍")}
              ${this.kpiCompact("Ofertas", "3", "+2", true, "📋")}
            </div>
          </div>

          <!-- Actividad (lista con scroll) -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200/60 dark:border-gray-700 shadow-sm p-6 ring-1 ring-black/5 dark:ring-white/10">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white mb-4">Actividad Reciente</h3>

            <div class="max-h-60 md:max-h-80 overflow-y-auto pr-2">
              <ul class="space-y-5">
                ${this.activityItem("Nueva aplicación", "María García aplicó a Frontend Developer", "hace 5 minutos", "➕")}
                ${this.activityItem("Entrevista programada", "Carlos Mendoza — Frontend Developer a las 10:00", "hace 15 minutos", "🗓️")}
                ${this.activityItem("Email enviado", "Invitación de entrevista enviada a Ana López", "hace 2 horas", "✉️")}
                ${this.activityItem("Oferta enviada", "Ana Rodríguez — UX Designer, $85,000", "hace 3 horas", "📄")}
                ${this.activityItem("Candidato contratado", "Pedro Ortega — Data Analyst", "hace 4 horas", "✅")}
                ${this.activityItem("Estado actualizado", "Kevin Ríos pasó a En Revisión", "hace 5 horas", "🔁")}
                ${this.activityItem("Etiqueta aplicada", "Candidato marcado como “Senior”", "ayer", "🏷️")}
              </ul>
            </div>
          </div>
        </section>

        <!-- ===== FILA 2: RAIL DERECHO (3/12) ===== -->
        <aside class="xl:col-span-3 space-y-4">
          <!-- Quick Actions -->
          <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <p class="font-medium mb-3 text-slate-900 dark:text-white">Quick Actions</p>
            <button
              id="btnCandidates"
              class="w-full flex justify-between items-center px-3 py-2 mt-2 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition"
              aria-label="Ver Candidatos (Ctrl+K)"
            >
              <span class="inline-flex items-center gap-2">
                👤 <span>Ver Candidatos</span>
              </span>
              <span class="text-xs">Ctrl+K</span>
            </button>
          </div>

          <!-- Matching / AI Insights -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700 p-4 flex flex-col ring-1 ring-black/5 dark:ring-white/10">
            <!-- Header -->
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <div class="relative w-9 h-9 rounded-lg bg-[#004176]/10 grid place-items-center text-[#004176]">
                  <span class="text-lg">🤖</span>
                  <span class="absolute inline-flex h-9 w-9 rounded-lg animate-ping bg-[#004176]/10"></span>
                </div>
                <p class="font-medium text-slate-800 dark:text-white">Matching / AI Insights</p>
              </div>

              <button id="insightsRefresh"
                class="rounded-lg border border-slate-200 dark:border-gray-600 px-2.5 py-1.5 text-xs text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-gray-700 active:scale-[.98] transition"
                aria-label="Actualizar insights"
              >
                <span class="inline-block">🔄</span> Actualizar
              </button>
            </div>

            <!-- List (altura controlada + scroll) -->
            <div class="min-h-[180px] max-h-80 overflow-y-auto pr-1">
              <ul id="insightsList" class="space-y-2 text-sm">
                ${this.insight("MATCHING · ALTA", "3 candidatos tienen alto match (≥85%) con Frontend Developer", "hace 2 minutos", "alta", true)}
                ${this.insight("PERFORMANCE · MEDIA", "Tiempo de respuesta mejoró 15% esta semana", "hace 10 minutos", "media")}
                ${this.insight("OPTIMIZACIÓN · ALTA", "Ajustar descripción de Backend Engineer puede aumentar aplicaciones 20%", "hace 25 minutos", "alta", true)}
                ${this.insight("ALERTA · URGENTE", "5 candidatos próximos a vencer en pipeline", "hace 1 hora", "urgente", true)}
                ${this.insight("TENDENCIA · BAJA", "Aplicaciones de UX Designer aumentaron 40% vs mes anterior", "hace 2 horas", "baja")}
              </ul>
            </div>
          </div>
        </aside>

        <!-- ===== FILA 3: CARDS DE VACANTES A TODO LO ANCHO ===== -->
        <section class="xl:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${this.jobCard("Frontend Developer", "TECNOLOGÍA", "23", "2h", "⚡", "#f59e0b")}
          ${this.jobCard("UX Designer", "DISEÑO", "15", "1d", "📌", "#ef4444")}
          ${this.jobCard("DevOps Engineer", "INFRAESTRUCTURA", "8", "3h", "🔥", "#f97316")}
          ${this.jobCard("Data Analyst", "ANALYTICS", "12", "5h", "📝", "#64748b")}
        </section>
      </main>
    `;
  }

  bind() {
    // Quick Action
    document.getElementById("btnCandidates")?.addEventListener("click", () => {
      // Aquí puedes navegar a tu vista de candidatos
      console.log("Ver Candidatos (Ctrl+K)");
    });

    // Refresh Insights (simulado)
    document.getElementById("insightsRefresh")?.addEventListener("click", () => {
      const ul = document.getElementById("insightsList");
      if (!ul) return;
      ul.insertAdjacentHTML(
        "afterbegin",
        this.insight("MATCHING · MEDIA", "Se detectó 1 candidato con 82% de match para Backend", "justo ahora", "media", true)
      );
    });
  }

  // ---------- Sub-templates ----------

  statCard(title, value, delta, positive) {
    const deltaColor = positive
      ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/30"
      : "text-rose-700 bg-rose-50 dark:text-rose-400 dark:bg-rose-900/30";

    return `
      <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-gray-700 ring-1 ring-black/5 dark:ring-white/10">
        <span class="absolute top-3 right-3 inline-flex items-center ${deltaColor} text-[11px] px-2 py-0.5 rounded-lg font-medium">
          ${delta}
        </span>
        <p class="text-sm text-slate-500 dark:text-gray-400">${title}</p>
        <p class="mt-3 text-4xl leading-none font-semibold text-[#004176] dark:text-blue-400">${value}</p>
      </div>
    `;
  }

  kpiCompact(label, value, delta, isPositive, emoji) {
    const deltaColor = isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400";
    return `
      <div class="flex flex-col">
        <div class="flex items-center gap-1 text-slate-600 dark:text-gray-400 text-sm">
          <span class="text-[#004176] dark:text-blue-400">${emoji}</span><span>${label}</span>
        </div>
        <div class="mt-2 flex items-end gap-2">
          <p class="text-3xl font-bold text-[#004176] dark:text-blue-400">${value}</p>
          <span class="inline-flex items-center gap-1 text-xs ${deltaColor}">${delta}</span>
        </div>
      </div>
    `;
  }

  activityItem(title, desc, when, icon) {
    return `
      <li class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-gray-700 grid place-items-center shadow-inner">${icon}</div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-slate-800 dark:text-white">${title}</p>
          <p class="text-sm text-slate-600 dark:text-gray-300">${desc}</p>
          <p class="text-xs text-slate-400 dark:text-gray-500 mt-1">${when}</p>
        </div>
        <svg class="w-5 h-5 text-slate-300 dark:text-gray-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    `;
  }

  insight(tag, text, when, priority = "baja", accionable = false) {
    const styles = {
      alta:   "border-amber-200 bg-amber-50/60 dark:border-amber-800 dark:bg-amber-900/20",
      media:  "border-blue-200 bg-blue-50/60 dark:border-blue-800 dark:bg-blue-900/20",
      urgente:"border-rose-200 bg-rose-50/60 dark:border-rose-800 dark:bg-rose-900/20",
      baja:   "border-slate-200 bg-slate-50 dark:border-gray-700 dark:bg-gray-800/50"
    }[priority] || "border-slate-200 bg-slate-50 dark:border-gray-700 dark:bg-gray-800/50";

    return `
      <li class="flex items-start justify-between gap-3 rounded-lg border ${styles} p-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[11px] font-semibold tracking-wide text-slate-700 dark:text-gray-300">${tag}</span>
          </div>
          <p class="text-slate-800 dark:text-white">${text}</p>
          <div class="mt-1 flex items-center gap-2 text-[11px] text-slate-500 dark:text-gray-400">
            <span>${when}</span>
            ${accionable ? '<span class="ml-2 inline-flex items-center rounded bg-emerald-100 dark:bg-emerald-900/30 px-2 py-[2px] text-emerald-700 dark:text-emerald-400">Accionable</span>' : ""}
          </div>
        </div>
        <span class="text-slate-300 dark:text-gray-600 text-lg" aria-hidden="true">→</span>
      </li>
    `;
  }

  jobCard(role, area, people, time, badge = "", badgeColor = "#64748b") {
    return `
      <article class="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm p-5 relative ring-1 ring-black/5 dark:ring-white/10">
        ${badge
          ? `<span class="absolute top-2 right-2" style="color:${badgeColor}">${badge}</span>`
          : ""}
        <p class="text-base font-semibold text-[#004176] dark:text-blue-400">${role}</p>
        <p class="text-xs text-slate-500 dark:text-gray-400 mb-4">${area}</p>
        <div class="flex justify-between text-sm text-slate-600 dark:text-gray-300">
          <span>👥 ${people}</span>
          <span>⏱️ ${time}</span>
        </div>
      </article>
    `;
  }
}
