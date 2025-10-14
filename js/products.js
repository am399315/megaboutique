/* ===================================
   PRODUCTS.JS - FILTRADO DE PRODUCTOS
   El-Elyon Super Boutique
   =================================== */

(function() {
    'use strict';
    
    // ========== ELEMENTOS DEL DOM ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.getElementById('products-grid');
    
    // ========== FUNCIONES DE FILTRADO ==========
    
    /**
     * Filtrar productos por categoría
     * @param {string} category - Categoría a filtrar ('all' para mostrar todos)
     */
    function filterProducts(category) {
        productCards.forEach(card => {
            const productCategory = card.getAttribute('data-category');
            
            if (category === 'all' || productCategory === category) {
                // Mostrar producto
                card.classList.remove('hide');
                card.classList.add('show');
                card.style.display = 'flex';
            } else {
                // Ocultar producto
                card.classList.remove('show');
                card.classList.add('hide');
                
                // Ocultar después de la animación
                setTimeout(() => {
                    if (card.classList.contains('hide')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // Log para debugging
        console.log(`Filtrado por categoría: ${category}`);
    }
    
    /**
     * Actualizar el estado activo de los botones de filtro
     * @param {HTMLElement} activeButton - Botón que fue clickeado
     */
    function updateActiveButton(activeButton) {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    /**
     * Contar productos visibles por categoría
     * @returns {Object} Objeto con el conteo de productos por categoría
     */
    function countProductsByCategory() {
        const counts = {
            all: productCards.length,
            tennis: 0,
            pantalones: 0,
            chancletas: 0,
            accesorios: 0
        };
        
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (counts[category] !== undefined) {
                counts[category]++;
            }
        });
        
        return counts;
    }
    
    /**
     * Añadir contadores a los botones de filtro (opcional)
     */
    function addCountersToButtons() {
        const counts = countProductsByCategory();
        
        filterButtons.forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            const count = counts[filter];
            
            if (count !== undefined && filter !== 'all') {
                const currentText = btn.textContent;
                // Solo añadir el contador si no existe ya
                if (!currentText.includes('(')) {
                    btn.textContent = `${currentText} (${count})`;
                }
            }
        });
    }
    
    /**
     * Animar la aparición de productos
     */
    function animateProductsOnLoad() {
        productCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // ========== EVENT LISTENERS ==========
    
    /**
     * Configurar event listeners para los botones de filtro
     */
    function setupFilterButtons() {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Actualizar botón activo
                updateActiveButton(this);
                
                // Filtrar productos
                filterProducts(filter);
                
                // Scroll suave hacia los productos (opcional)
                if (productsGrid) {
                    const offsetTop = productsGrid.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ========== BÚSQUEDA DE PRODUCTOS (OPCIONAL) ==========
    
    /**
     * Buscar productos por texto (función opcional para futuro)
     * @param {string} searchText - Texto de búsqueda
     */
    function searchProducts(searchText) {
        const searchLower = searchText.toLowerCase();
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.product-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchLower) || description.includes(searchLower)) {
                card.classList.remove('hide');
                card.classList.add('show');
                card.style.display = 'flex';
            } else {
                card.classList.remove('show');
                card.classList.add('hide');
                setTimeout(() => {
                    if (card.classList.contains('hide')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    }
    
    // ========== ORDENAMIENTO (OPCIONAL) ==========
    
    /**
     * Ordenar productos por precio
     * @param {string} order - 'asc' o 'desc'
     */
    function sortProductsByPrice(order = 'asc') {
        const productsArray = Array.from(productCards);
        
        productsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.product-price')?.textContent.replace('$', '').replace(',', '') || 0);
            const priceB = parseFloat(b.querySelector('.product-price')?.textContent.replace('$', '').replace(',', '') || 0);
            
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
        
        // Reordenar en el DOM
        if (productsGrid) {
            productsArray.forEach(card => {
                productsGrid.appendChild(card);
            });
        }
    }
    
    // ========== INICIALIZACIÓN ==========
    
    /**
     * Inicializar el sistema de productos
     */
    function init() {
        console.log('🛍️ Sistema de productos inicializado');
        
        // Configurar botones de filtro
        setupFilterButtons();
        
        // Añadir contadores (opcional, puedes comentar si no quieres)
        // addCountersToButtons();
        
        // Animar productos al cargar
        animateProductsOnLoad();
        
        // Mostrar todos los productos inicialmente
        filterProducts('all');
    }
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exponer funciones globalmente (opcional, para debugging y uso futuro)
    window.elElyon = window.elElyon || {};
    window.elElyon.filterProducts = filterProducts;
    window.elElyon.searchProducts = searchProducts;
    window.elElyon.sortProductsByPrice = sortProductsByPrice;
    
})();