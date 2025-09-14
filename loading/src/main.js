import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';
import { App } from './App.js';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        new App();
    } catch (error) {
        console.error('Error initializing app:', error);
        
        // Show error message
        const app = document.getElementById('app');
        app.innerHTML = `
            <div class="flex items-center justify-center h-screen bg-gray-50">
                <div class="text-center">
                    <div class="text-6xl text-red-500 mb-4">⚠️</div>
                    <h1 class="text-2xl font-bold text-gray-800 mb-2">Error al cargar la aplicación</h1>
                    <p class="text-gray-600 mb-4">Ha ocurrido un error inesperado.</p>
                    <button onclick="window.location.reload()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Recargar página
                    </button>
                </div>
            </div>
        `;
    }
});

// Global error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});