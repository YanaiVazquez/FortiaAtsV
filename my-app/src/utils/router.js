export class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
  }

  addRoute(path, handler) {
    this.routes.set(path, handler);
  }

  navigate(path) {
    const handler = this.routes.get(path);
    if (handler) {
      this.currentRoute = path;
      handler();
    } else {
      console.warn(`Route not found: ${path}`);
    }
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}

// Export singleton instance
export const router = new Router();