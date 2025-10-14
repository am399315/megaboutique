/* ===================================
   MAIN.JS - FUNCIONALIDAD PRINCIPAL
   El-Elyon Super Boutique
   =================================== */

(function() {
    'use strict';
    
    // ========== ELEMENTOS DEL DOM ==========
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');
    
    // ========== NAVBAR Y MENÚ MÓVIL ==========
    
    /**
     * Manejar el scroll del header (agregar sombra y backdrop)
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }
    
    /**
     * Abrir/Cerrar menú móvil
     */
    function toggleMobileMenu() {
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (navMenu?.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    /**
     * Cerrar menú móvil al hacer click en un link
     */
    function closeMobileMenu() {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    /**
     * Marcar el link activo según la sección visible
     */
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    /**
     * Smooth scroll al hacer click en los links de navegación
     */
    function setupSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Solo aplicar smooth scroll a links internos (#)
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        const headerHeight = header?.offsetHeight || 80;
                        const targetPosition = targetSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Cerrar menú móvil después de hacer click
                        closeMobileMenu();
                    }
                }
            });
        });
    }
    
    // ========== BOTÓN BACK TO TOP ==========
    
    /**
     * Mostrar/Ocultar botón de volver arriba
     */
    function handleBackToTopVisibility() {
        if (window.scrollY > 300) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }
    }
    
    /**
     * Volver arriba al hacer click
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // ========== ANIMACIONES AL SCROLL ==========
    
    /**
     * Animar elementos al hacer scroll (Intersection Observer)
     */
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.product-card, .about-content, .location-content, .contact-content'
        );
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // ========== LAZY LOADING DE IMÁGENES ==========
    
    /**
     * Implementar lazy loading para imágenes
     */
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    // ========== PREVENIR ZOOM EN iOS ==========
    
    /**
     * Prevenir zoom al hacer doble tap en iOS
     */
    function preventIOSZoom() {
        let lastTouchEnd = 0;
        
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }
    
    // ========== EVENT LISTENERS ==========
    
    /**
     * Configurar todos los event listeners
     */
    function setupEventListeners() {
        // Scroll events
        window.addEventListener('scroll', () => {
            handleHeaderScroll();
            handleBackToTopVisibility();
            setActiveNavLink();
        });
        
        // Menú móvil
        hamburger?.addEventListener('click', toggleMobileMenu);
        
        // Back to top button
        backToTop?.addEventListener('click', scrollToTop);
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (navMenu?.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger?.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // ========== PERFORMANCE ==========
    
    /**
     * Throttle function para optimizar eventos de scroll
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // ========== INICIALIZACIÓN ==========
    
    /**
     * Inicializar todas las funcionalidades
     */
    function init() {
        console.log('🦁 El-Elyon Boutique inicializado');
        
        // Configurar event listeners
        setupEventListeners();
        
        // Configurar smooth scroll
        setupSmoothScroll();
        
        // Configurar animaciones
        setupScrollAnimations();
        
        // Lazy loading
        setupLazyLoading();
        
        // Prevenir zoom en iOS
        preventIOSZoom();
        
        // Ejecutar funciones iniciales
        handleHeaderScroll();
        handleBackToTopVisibility();
        setActiveNavLink();
    }
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exponer funciones globalmente (opcional, para debugging)
    window.elElyon = window.elElyon || {};
    window.elElyon.closeMobileMenu = closeMobileMenu;
    window.elElyon.scrollToTop = scrollToTop;
    
})();