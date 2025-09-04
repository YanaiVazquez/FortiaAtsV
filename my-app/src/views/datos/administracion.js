export class AdministracionView {
  constructor() {
    this.render();
  }

  render() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <div class="p-8">
        <div class="max-w-7xl mx-auto">
          <!-- Header -->
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              <i class="fas fa-cogs text-blue-600 mr-3"></i>
              Administración de Datos
            </h1>
            <p class="text-gray-600 dark:text-gray-300">Configuración avanzada y administración del sistema</p>
          </div>

          <!-- Coming Soon Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
            <div class="mb-6">
              <i class="fas fa-tools text-6xl text-blue-500 mb-4"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Administración Próximamente</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Estamos desarrollando herramientas avanzadas de administración para configurar y mantener el sistema.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Configuración global
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Respaldos automáticos
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Logs del sistema
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Mantenimiento
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}