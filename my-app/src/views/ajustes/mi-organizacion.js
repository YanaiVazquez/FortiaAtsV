export class MiOrganizacionView {
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
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              <i class="fas fa-building text-blue-600 mr-3"></i>
              Mi Organización
            </h1>
            <p class="text-gray-600">Configuración y datos de tu organización</p>
          </div>

          <!-- Coming Soon Card -->
          <div class="bg-white rounded-lg shadow-lg p-12 text-center">
            <div class="mb-6">
              <i class="fas fa-city text-6xl text-blue-500 mb-4"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Configuración de Organización Próximamente</h2>
            <p class="text-gray-600 mb-6 max-w-md mx-auto">
              Pronto podrás configurar todos los aspectos de tu organización, desde datos básicos hasta estructura organizacional.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Datos de la empresa
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Estructura organizacional
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Departamentos
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Ubicaciones
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}