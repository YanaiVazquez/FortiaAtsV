import { DarkModeManager } from '../utils/darkMode.js';

export class Header {
  constructor(sidebar) {
    this.sidebar = sidebar;
    this.darkModeManager = new DarkModeManager();
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const headerElement = document.createElement('header');
    headerElement.id = 'header';
    headerElement.className = 'bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 h-16 flex items-center justify-between px-4 z-10';
    
    headerElement.innerHTML = `
      <!-- Left Section -->
      <div class="flex items-center space-x-4">
        <!-- Hamburger Menu -->
        <button 
          id="sidebar-toggle" 
          class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          title="Toggle Sidebar"
        >
          <i class="fas fa-bars text-lg"></i>
        </button>
        
        <!-- Breadcrumb -->
        <nav class="hidden md:flex items-center space-x-2 text-sm">
          <span class="text-gray-500 dark:text-gray-400">Fortia</span>
          <i class="fas fa-chevron-right text-xs text-gray-400"></i>
          <span id="current-section" class="text-gray-700 dark:text-gray-300 font-medium">Dashboard</span>
        </nav>
      </div>

      <!-- Right Section -->
      <div class="flex items-center space-x-2">
        <!-- Search -->
        <div class="hidden lg:flex items-center">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Buscar..." 
              class="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
        </div>

        <!-- Dark Mode Toggle -->
        <button 
          id="dark-mode-toggle" 
          class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          title="Toggle Dark Mode"
        >
          <i id="dark-mode-icon" class="fas fa-moon text-lg"></i>
        </button>

        <!-- Notifications -->
        <div class="relative">
          <button 
            id="notifications-toggle" 
            class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative"
            title="Notifications"
          >
            <i class="fas fa-bell text-lg"></i>
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          
          <!-- Notifications Dropdown -->
          <div id="notifications-dropdown" class="hidden absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">Notificaciones</h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
              <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <i class="fas fa-user-plus text-blue-500"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm text-gray-900 dark:text-gray-100">Nuevo candidato aplicó</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Hace 2 minutos</p>
                  </div>
                </div>
              </div>
              <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <i class="fas fa-briefcase text-green-500"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm text-gray-900 dark:text-gray-100">Vacante publicada exitosamente</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Hace 1 hora</p>
                  </div>
                </div>
              </div>
              <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <i class="fas fa-calendar text-orange-500"></i>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm text-gray-900 dark:text-gray-100">Entrevista programada</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Hace 3 horas</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 border-t border-gray-200 dark:border-gray-700">
              <button class="w-full text-center text-sm text-fortia-primary hover:opacity-80">
                Ver todas las notificaciones
              </button>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div class="relative">
          <button 
            id="messages-toggle" 
            class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative"
            title="Messages"
          >
            <i class="fas fa-envelope text-lg"></i>
            <span class="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
          </button>
          
          <!-- Messages Dropdown -->
          <div id="messages-dropdown" class="hidden absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">Mensajes</h3>
            </div>
            <div class="max-h-64 overflow-y-auto">
              <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-xs font-medium">JD</span>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Juan Pérez</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 truncate">¿Cuándo podemos programar la entrevista?</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Hace 5 minutos</p>
                  </div>
                </div>
              </div>
              <div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span class="text-white text-xs font-medium">MG</span>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100">María García</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 truncate">Gracias por la oportunidad...</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Hace 2 horas</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-3 border-t border-gray-200 dark:border-gray-700">
              <button class="w-full text-center text-sm text-fortia-primary hover:opacity-80">
                Ver todos los mensajes
              </button>
            </div>
          </div>
        </div>

        <!-- Profile -->
        <div class="relative">
          <button 
            id="profile-toggle" 
            class="flex items-center space-x-2 p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            title="Profile"
          >
            <div class="w-8 h-8 bg-fortia-primary rounded-full flex items-center justify-center">
              <i class="fas fa-user text-white text-sm"></i>
            </div>
            <span class="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
            <i class="fas fa-chevron-down text-xs"></i>
          </button>
          
          <!-- Profile Dropdown -->
          <div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Administrador</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">admin@empresa.com</p>
            </div>
            <div class="py-2">
              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                <i class="fas fa-user-circle text-gray-400"></i>
                <span>Mi Perfil</span>
              </button>
              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                <i class="fas fa-cog text-gray-400"></i>
                <span>Configuración</span>
              </button>
              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                <i class="fas fa-question-circle text-gray-400"></i>
                <span>Ayuda</span>
              </button>
              <hr class="my-2 border-gray-200 dark:border-gray-600">
              <button class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center space-x-2">
                <i class="fas fa-sign-out-alt text-red-500"></i>
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Insert header at the beginning of the app
    const app = document.getElementById('app');
    app.insertBefore(headerElement, app.firstChild);
  }

  attachEventListeners() {
    // Sidebar toggle
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
      this.sidebar.toggle();
    });

    // Dark mode toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
      this.toggleDarkMode();
    });

    // Notifications dropdown
    this.setupDropdown('notifications-toggle', 'notifications-dropdown');

    // Messages dropdown
    this.setupDropdown('messages-toggle', 'messages-dropdown');

    // Profile dropdown
    this.setupDropdown('profile-toggle', 'profile-dropdown');

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#notifications-toggle') && !e.target.closest('#notifications-dropdown')) {
        document.getElementById('notifications-dropdown').classList.add('hidden');
      }
      if (!e.target.closest('#messages-toggle') && !e.target.closest('#messages-dropdown')) {
        document.getElementById('messages-dropdown').classList.add('hidden');
      }
      if (!e.target.closest('#profile-toggle') && !e.target.closest('#profile-dropdown')) {
        document.getElementById('profile-dropdown').classList.add('hidden');
      }
    });
  }

  setupDropdown(toggleId, dropdownId) {
    document.getElementById(toggleId).addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = document.getElementById(dropdownId);
      
      // Close other dropdowns
      document.querySelectorAll('[id$="-dropdown"]').forEach(d => {
        if (d.id !== dropdownId) {
          d.classList.add('hidden');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('hidden');
    });
  }

  toggleDarkMode() {
    this.darkModeManager.toggle();
  }

  updateBreadcrumb(sectionName) {
    const currentSection = document.getElementById('current-section');
    if (currentSection) {
      currentSection.textContent = sectionName;
    }
  }
}