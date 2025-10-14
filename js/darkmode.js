/* ===================================
   DARKMODE.JS - MODO OSCURO/CLARO
   El-Elyon Super Boutique
   =================================== */

(function() {
    'use strict';
    
    // ========== ELEMENTOS DEL DOM ==========
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    // ========== CONSTANTES ==========
    const THEME_KEY = 'el-elyon-theme';
    const DARK_MODE_CLASS = 'dark-mode';
    const MOON_ICON = '🌙';
    const SUN_ICON = '☀️';
    
    // ========== FUNCIONES ==========
    
    /**
     * Obtener el tema guardado en localStorage
     * @returns {string} 'dark' o 'light'
     */
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'light';
    }
    
    /**
     * Guardar el tema en localStorage
     * @param {string} theme - 'dark' o 'light'
     */
    function saveTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
    
    /**
     * Aplicar el tema (dark o light)
     * @param {string} theme - 'dark' o 'light'
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add(DARK_MODE_CLASS);
            if (themeIcon) {
                themeIcon.textContent = SUN_ICON;
            }
        } else {
            body.classList.remove(DARK_MODE_CLASS);
            if (themeIcon) {
                themeIcon.textContent = MOON_ICON;
            }
        }
    }
    
    /**
     * Alternar entre modo oscuro y claro
     */
    function toggleTheme() {
        const currentTheme = body.classList.contains(DARK_MODE_CLASS) ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        saveTheme(newTheme);
        
        // Animación suave
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        // Log para debugging (puedes eliminarlo en producción)
        console.log(`Tema cambiado a: ${newTheme}`);
    }
    
    /**
     * Inicializar el modo oscuro
     */
    function initDarkMode() {
        // Aplicar el tema guardado al cargar la página
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Event listener para el botón de cambio de tema
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Detectar preferencia del sistema (opcional)
        detectSystemThemePreference();
        
        console.log('Modo oscuro inicializado');
    }
    
    /**
     * Detectar preferencia del sistema operativo
     * Solo se aplica si no hay tema guardado
     */
    function detectSystemThemePreference() {
        // Solo aplicar si no hay tema guardado
        if (!localStorage.getItem(THEME_KEY)) {
            // Verificar si el navegador soporta matchMedia
            if (window.matchMedia) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
                
                if (prefersDark.matches) {
                    applyTheme('dark');
                    saveTheme('dark');
                }
                
                // Escuchar cambios en la preferencia del sistema
                prefersDark.addEventListener('change', (e) => {
                    const newTheme = e.matches ? 'dark' : 'light';
                    applyTheme(newTheme);
                    saveTheme(newTheme);
                });
            }
        }
    }
    
    /**
     * Shortcut de teclado para cambiar tema (Ctrl/Cmd + D)
     */
    function setupKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+D (Windows/Linux) o Cmd+D (Mac)
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }
    
    // ========== INICIALIZACIÓN ==========
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initDarkMode();
            setupKeyboardShortcut();
        });
    } else {
        initDarkMode();
        setupKeyboardShortcut();
    }
    
    // Exponer funciones globalmente (opcional, para debugging)
    window.elElyon = window.elElyon || {};
    window.elElyon.toggleTheme = toggleTheme;
    
})();