export class DarkModeManager {
  constructor() {
    this.isDark = localStorage.getItem('darkMode') === 'true';
    this.init();
  }

  init() {
    this.applyTheme();
  }

  toggle() {
    this.isDark = !this.isDark;
    localStorage.setItem('darkMode', this.isDark.toString());
    this.applyTheme();
    return this.isDark;
  }

  applyTheme() {
    const html = document.documentElement;
    
    if (this.isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    this.updateThemeElements();
  }

  updateThemeElements() {
    const themeIcon = document.querySelector('#dark-mode-icon');
    if (themeIcon) {
      themeIcon.className = this.isDark ? 'fas fa-sun text-lg' : 'fas fa-moon text-lg';
    }
    
    const themeButton = document.querySelector('#dark-mode-toggle');
    if (themeButton) {
      themeButton.title = this.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }

  getCurrentTheme() {
    return this.isDark ? 'dark' : 'light';
  }
}