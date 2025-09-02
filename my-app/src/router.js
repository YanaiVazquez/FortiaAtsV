// Router SPA con History API
export class Router {
  constructor({ base = "/menu", sidebar, onRouteChange } = {}) {
    this.base = base.replace(/\/$/, ""); // "/menu"
    this.sidebar = sidebar;
    this.onRouteChange = onRouteChange;

    // Declara aquí las vistas válidas (coinciden con data-view y loadView)
    this.validViews = new Set([
      "dashboard",
      "vacantes",
      "nueva-vacante",
      "candidatos",
      "diccionario",
      "administracion",
      "analisis",
      "transferencia",
      "mi-organizacion",
      "usuarios",
      "mis-procesos",
    ]);
  }

  start() {
    // Navegación con botones/links (anchors con data-route)
    this._interceptLinks(document);

    // Render inicial (según URL del navegador)
    this._handle(location.pathname, { replace: true });

    // Back/forward
    window.addEventListener("popstate", () => {
      this._handle(location.pathname, { replace: true });
    });
  }

  navigate(view, { replace = false } = {}) {
    if (!this.validViews.has(view)) view = "dashboard";
    const path = `${this.base}/${view}`;

    if (replace) history.replaceState({ view }, "", path);
    else history.pushState({ view }, "", path);

    // Cargar vista + marcar activo en sidebar
    this.sidebar?.setActiveView?.(view);
    this.sidebar?.loadView?.(view);
    this.onRouteChange?.(view);
  }

  // ---------- Internos ----------
  _handle(pathname, { replace } = {}) {
    const view = this._match(pathname) || "dashboard";
    this.navigate(view, { replace: true });
  }

  _match(pathname) {
    const clean = pathname.split("?")[0];
    if (!clean.startsWith(this.base)) return null;
    const segs = clean.slice(this.base.length).replace(/^\/+/, "").split("/");
    const view = segs[0] || "dashboard";
    return this.validViews.has(view) ? view : null;
  }

  _interceptLinks(root) {
    root.addEventListener("click", (e) => {
      const a = e.target.closest('a[data-route]');
      if (!a) return;
      const view = a.getAttribute("data-route");
      const href = a.getAttribute("href") || `${this.base}/${view}`;
      const isInternal = href.startsWith(this.base + "/");
      if (!isInternal) return;
      e.preventDefault();
      this.navigate(view);
    });
  }
}
