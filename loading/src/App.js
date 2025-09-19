import { Header } from './components/Header.js';
import { HeroSection } from './components/HeroSection.js';
import { AboutSection } from './components/AboutSection.js';
import { ServicesSection } from './components/ServicesSection.js';
import { ContactSection } from "./components/ContactSection";

import { Footer } from './components/Footer.js';

export class App {
    constructor() {
        this.components = {
            header: new Header(),
            hero: new HeroSection(),
            about: new AboutSection(),
            services: new ServicesSection(),
            contact: new ContactSection(),
            footer: new Footer()
        };
        
        this.init();
    }

    init() {
        this.render();
        this.attachEvents();
        console.log('🚀 Human Fortia Landing Page loaded successfully!');
    }

    render() {
        const app = document.getElementById('app');
        
        app.innerHTML = `
            ${this.components.header.render()}
            <main>
                ${this.components.hero.render()}
                ${this.components.about.render()}
                ${this.components.services.render()}
                ${this.components.contact.render()}
            </main>
            ${this.components.footer.render()}
        `;
    }

    attachEvents() {
        // Attach events for all components
        Object.values(this.components).forEach(component => {
            if (component.attachEvents) {
                component.attachEvents();
            }
        });

        // Global scroll spy for navigation
        this.initScrollSpy();
        
        // Add scroll to top functionality
        this.initScrollToTop();
    }

    initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all nav links
                    navLinks.forEach(link => {
                        link.classList.remove('text-blue-600', 'font-semibold');
                        link.classList.add('text-gray-700');
                    });

                    // Add active class to current section's nav link
                    const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.remove('text-gray-700');
                        activeLink.classList.add('text-blue-600', 'font-semibold');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    initScrollToTop() {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        `;
        scrollButton.className = 'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none z-50';
        scrollButton.id = 'scroll-to-top';
        
        document.body.appendChild(scrollButton);

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.remove('opacity-0', 'pointer-events-none');
                scrollButton.classList.add('opacity-100');
            } else {
                scrollButton.classList.add('opacity-0', 'pointer-events-none');
                scrollButton.classList.remove('opacity-100');
            }
        });

        // Scroll to top functionality
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}