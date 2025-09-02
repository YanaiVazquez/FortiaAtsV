export class DiccionarioView {
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
              <i class="fas fa-book text-blue-600 mr-3"></i>
              Diccionario de Datos
            </h1>
            <p class="text-gray-600">Gestiona catálogos, competencias y datos maestros del sistema</p>
          </div>

          <!-- Coming Soon Card -->
          <div class="bg-white rounded-lg shadow-lg p-12 text-center">
            <div class="mb-6">
              <i class="fas fa-database text-6xl text-blue-500 mb-4"></i>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Diccionario de Datos Próximamente</h2>
            <p class="text-gray-600 mb-6 max-w-md mx-auto">
              Pronto podrás gestionar todos los catálogos y datos maestros del sistema desde una interfaz centralizada.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Catálogos de puestos
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Competencias
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <i class="fas fa-check text-green-500 mr-2"></i>
                Niveles educativos
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