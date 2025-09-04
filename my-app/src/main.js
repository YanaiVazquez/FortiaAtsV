import './index.css';
import { Sidebar } from './components/sidebar.js';
import { Header } from './components/header.js';
import { DarkModeManager } from './utils/darkMode.js';
import { Router } from './router.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    try {
      const sidebar = new Sidebar();
      const header = new Header(sidebar);
      window.headerInstance = header;

      // Router SPA
      this.router = new Router({
        base: "/menu",
        sidebar,
        onRouteChange: (view) => {
          // hook opcional para breadcrumbs/título
          // window.headerInstance?.updateBreadcrumb?.(view);
        }
      });

      // Conecta router -> sidebar para usar router.navigate en clicks
      sidebar.setRouter(this.router);
      
      // Conecta router -> header para el buscador global
      header.setRouter(this.router);

      // Arranca router (lee la URL y pinta la vista correspondiente)
      this.router.start();

    } catch (error) {
      console.error('Error initializing app:', error);
      this.showError();
    }
  }

  showError() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="flex items-center justify-center h-screen bg-gray-50">
        <div class="text-center">
          <i class="fas fa-exclamation-triangle text-6xl text-red-500 mb-4"></i>
          <h1 class="text-2xl font-bold text-gray-800 mb-2">Error al cargar la aplicación</h1>
          <p class="text-gray-600 mb-4">Ha ocurrido un error inesperado.</p>
          <button onclick="window.location.reload()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <i class="fas fa-refresh mr-2"></i>Recargar página
          </button>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
