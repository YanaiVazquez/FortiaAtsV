export class Sidebar {
  constructor() {
    this.currentView = 'dashboard';
    this.isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    this.router = null; // <-- se inyecta desde App
    this.init();
  }

  // para que App conecte el router
  setRouter(router) {
    this.router = router;
  }

  init() {
    this.render();
    this.attachEventListeners();
    this.applyCollapsedState();
  }

  render() {
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.innerHTML = `
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="h-16 flex items-center px-4 border-b border-gray-200 dark:border-slate-700">
          <img src="../../assets/images/logo_Human_Fortia.png" alt="Fortia" class="brand-full h-7">
        </div>

        <!-- Navigation -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <!-- Nueva Vacante -->
          <div class="mb-6">
            <button data-view="nueva-vacante"
              class="w-full flex items-center px-4 py-3 text-left text-white bg-fortia-primary hover:bg-fortia-primary rounded-lg transition-all duration-200 group"
              title="Nueva Vacante">
              <i class="fas fa-plus mr-3 flex-shrink-0"></i>
              <span class="sidebar-text truncate">Nueva Vacante</span>
            </button>
          </div>

          <!-- Sección Vacantes -->
          <div class="mb-6">
            <h3 class="sidebar-section-title px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <span class="sidebar-text">Vacantes</span>
            </h3>
            <div class="space-y-1">
              <button data-view="dashboard" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Dashboard">
                <i class="fas fa-tachometer-alt mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Dashboard</span>
              </button>
              <button data-view="vacantes" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Vacantes">
                <i class="fas fa-briefcase mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Vacantes</span>
              </button>
              <button data-view="candidatos" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Candidatos">
                <i class="fas fa-users mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Candidatos</span>
              </button>
            </div>
          </div>

          <!-- Sección Datos -->
          <div class="mb-6">
            <h3 class="sidebar-section-title px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <span class="sidebar-text">Datos</span>
            </h3>
            <div class="space-y-1">
              <button data-view="diccionario" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Diccionario">
                <i class="fas fa-book mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Diccionario</span>
              </button>
              <button data-view="administracion" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Administración">
                <i class="fas fa-cogs mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Administración</span>
              </button>
              <button data-view="analisis" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Análisis">
                <i class="fas fa-chart-line mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Análisis</span>
              </button>
              <button data-view="transferencia" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Transferencia">
                <i class="fas fa-exchange-alt mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Transferencia</span>
              </button>
            </div>
          </div>

          <!-- Sección Ajustes -->
          <div class="mb-6">
            <h3 class="sidebar-section-title px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <span class="sidebar-text">Ajustes</span>
            </h3>
            <div class="space-y-1">
              <button data-view="mi-organizacion" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Mi Organización">
                <i class="fas fa-building mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Mi Organización</span>
              </button>
              <button data-view="usuarios" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Usuarios">
                <i class="fas fa-user-friends mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Usuarios</span>
              </button>
              <button data-view="mis-procesos" class="nav-item w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Mis Procesos">
                <i class="fas fa-tasks mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
                <span class="sidebar-text truncate">Mis Procesos</span>
              </button>
            </div>
          </div>
        </nav>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <button class="w-full flex items-center px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 group" title="Settings">
            <i class="fas fa-cog mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0"></i>
            <span class="sidebar-text truncate">Settings</span>
          </button>
          <button class="w-full flex items-center px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 group" title="Logout">
            <i class="fas fa-sign-out-alt mr-3 text-red-500 dark:text-red-400 flex-shrink-0"></i>
            <span class="sidebar-text truncate">Logout</span>
          </button>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const navItems = document.querySelectorAll('[data-view]');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const view = e.currentTarget.getAttribute('data-view');
        // 👉 usa el router para manejar URL + carga de vista
        if (this.router) this.router.navigate(view);
        else {
          // fallback si aún no hay router
          this.setActiveView(view);
          this.loadView(view);
        }
      });
    });

    // NO forces “dashboard” aquí; el router marcará activo en start()
    // this.setActiveView(this.currentView);
  }

  setActiveView(view) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.classList.remove('text-white', 'bg-fortia-primary');
      item.classList.add('text-gray-700', 'dark:text-gray-300');
    });

    const activeItem = document.querySelector(`[data-view="${view}"]`);
    if (activeItem && activeItem.classList.contains('nav-item')) {
      activeItem.classList.remove('text-gray-700', 'dark:text-gray-300');
      activeItem.classList.add('text-white', 'bg-fortia-primary');
    }

    this.currentView = view;

    // breadcrumb
    if (window.headerInstance) {
      const viewNames = {
        'nueva-vacante': 'Nueva Vacante',
        'dashboard': 'Dashboard',
        'vacantes': 'Vacantes',
        'candidatos': 'Candidatos',
        'diccionario': 'Diccionario',
        'administracion': 'Administración',
        'analisis': 'Análisis',
        'transferencia': 'Transferencia',
        'mi-organizacion': 'Mi Organización',
        'usuarios': 'Usuarios',
        'mis-procesos': 'Mis Procesos'
      };
      window.headerInstance.updateBreadcrumb(viewNames[view] || view);
    }
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebarCollapsed', this.isCollapsed.toString());
    this.applyCollapsedState();
  }

  applyCollapsedState() {
    const sidebar = document.getElementById('sidebar');
    const sidebarTexts = document.querySelectorAll('.sidebar-text');
    const sidebarSectionTitles = document.querySelectorAll('.sidebar-section-title');

    if (this.isCollapsed) {
      sidebar.classList.remove('w-64');
      sidebar.classList.add('w-16');
      sidebarTexts.forEach(t => t.style.display = 'none');
      sidebarSectionTitles.forEach(t => t.style.display = 'none');
      const navButtons = sidebar.querySelectorAll('button[data-view]');
      navButtons.forEach(b => { b.classList.add('justify-center'); b.classList.remove('justify-start'); });
    } else {
      sidebar.classList.remove('w-16');
      sidebar.classList.add('w-64');
      sidebarTexts.forEach(t => t.style.display = '');
      sidebarSectionTitles.forEach(t => t.style.display = '');
      const navButtons = sidebar.querySelectorAll('button[data-view]');
      navButtons.forEach(b => { b.classList.remove('justify-center'); b.classList.add('justify-start'); });
    }
  }

  async loadView(view) {
    const mainContent = document.getElementById('main-content');
    try {
      mainContent.innerHTML = `
        <div class="flex items-center justify-center h-full">
          <div class="text-center">
            <i class="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
            <p class="text-gray-600">Cargando...</p>
          </div>
        </div>
      `;

      let ViewClass;
      switch (view) {
        case 'nueva-vacante':
          ViewClass = (await import('../views/nueva-vacante.js')).NuevaVacanteView;
          break;
        case 'dashboard':
          ViewClass = (await import('../views/vacantes/dashboard.js')).DashboardView;
          break;
        case 'vacantes':
          ViewClass = (await import('../views/vacantes/vacantes.js')).VacantesView;
          break;
        case 'candidatos':
          ViewClass = (await import('../views/vacantes/candidatos.js')).CandidatosView;
          break;
        case 'diccionario':
          ViewClass = (await import('../views/datos/diccionario.js')).DiccionarioView;
          break;
        case 'administracion':
          ViewClass = (await import('../views/datos/administracion.js')).AdministracionView;
          break;
        case 'analisis':
          ViewClass = (await import('../views/datos/analisis.js')).AnalisisView;
          break;
        case 'transferencia':
          ViewClass = (await import('../views/datos/transferencia.js')).TransferenciaView;
          break;
        case 'mi-organizacion':
          ViewClass = (await import('../views/ajustes/mi-organizacion.js')).MiOrganizacionView;
          break;
        case 'usuarios':
          ViewClass = (await import('../views/ajustes/usuarios.js')).UsuariosView;
          break;
        case 'mis-procesos':
          ViewClass = (await import('../views/ajustes/mis-procesos.js')).MisProcesosView;
          break;
        default:
          throw new Error(`Vista no encontrada: ${view}`);
      }

      new ViewClass();
    } catch (error) {
      console.error('Error loading view:', error);
      mainContent.innerHTML = `
        <div class="flex items-center justify-center h-full">
          <div class="text-center">
            <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
            <h2 class="text-xl font-semibold text-gray-800 mb-2">Error al cargar la vista</h2>
            <p class="text-gray-600">No se pudo cargar la vista solicitada.</p>
          </div>
        </div>
      `;
    }
  }
}
