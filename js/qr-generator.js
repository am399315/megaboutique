/* ===================================
   QR-GENERATOR.JS - GENERACIÓN DE CÓDIGO QR
   El-Elyon Super Boutique
   =================================== */

(function() {
    'use strict';
    
    // ========== CONFIGURACIÓN ==========
    const QR_CONFIG = {
        instagram: 'https://www.instagram.com/elelyonsuper_boutique',
        facebook: 'https://www.facebook.com/share/1Ck8UB285E/',
        whatsapp: 'https://wa.me/18494470901',
        size: 200,
        backgroundColor: 'ffffff',
        foregroundColor: '000000'
    };
    
    // ========== ELEMENTOS DEL DOM ==========
    const qrContainer = document.getElementById('qr-container');
    
    // ========== FUNCIONES ==========
    
    /**
     * Generar URL del código QR usando API gratuita
     * @param {string} data - Datos a codificar en el QR
     * @param {number} size - Tamaño del QR en píxeles
     * @returns {string} URL de la imagen del QR
     */
    function generateQRUrl(data, size = 200) {
        const encodedData = encodeURIComponent(data);
        return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedData}&bgcolor=${QR_CONFIG.backgroundColor}&color=${QR_CONFIG.foregroundColor}`;
    }
    
    /**
     * Crear HTML con opciones de redes sociales
     * @returns {string} HTML con los enlaces
     */
    function createSocialLinksHTML() {
        return `
            <div style="text-align: center; padding: 20px; background: white; border-radius: 12px;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px; color: #000;">Síguenos en:</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <a href="${QR_CONFIG.instagram}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="display: block; padding: 12px; background: linear-gradient(135deg, #E1306C, #C13584); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                        📷 Instagram
                    </a>
                    <a href="${QR_CONFIG.facebook}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="display: block; padding: 12px; background: #1877F2; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                        👍 Facebook
                    </a>
                    <a href="${QR_CONFIG.whatsapp}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="display: block; padding: 12px; background: #25D366; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                        💬 WhatsApp
                    </a>
                </div>
            </div>
        `;
    }
    
    /**
     * Generar código QR que redirige a una página de opciones
     * (Alternativa 1: Usar una URL corta como Bitly o crear una landing page)
     */
    function generateSocialQR() {
        if (!qrContainer) return;
        
        // Opción 1: QR que apunta a Instagram (el más importante)
        const qrUrl = generateQRUrl(QR_CONFIG.instagram, QR_CONFIG.size);
        
        // Crear elemento de imagen
        const img = document.createElement('img');
        img.src = qrUrl;
        img.alt = 'Código QR de El-Elyon Boutique';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        
        // Añadir al contenedor
        qrContainer.innerHTML = '';
        qrContainer.appendChild(img);
        
        console.log('✅ Código QR generado');
    }
    
    /**
     * Generar múltiples códigos QR (uno por cada red social)
     * Alternativa 2: Mostrar 3 QR codes diferentes
     */
    function generateMultipleSocialQRs() {
        if (!qrContainer) return;
        
        qrContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
                <div style="text-align: center;">
                    <h4 style="margin: 0 0 10px 0; color: #E1306C;">Instagram</h4>
                    <img src="${generateQRUrl(QR_CONFIG.instagram, 150)}" 
                         alt="QR Instagram" 
                         style="max-width: 150px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>
                <div style="text-align: center;">
                    <h4 style="margin: 0 0 10px 0; color: #1877F2;">Facebook</h4>
                    <img src="${generateQRUrl(QR_CONFIG.facebook, 150)}" 
                         alt="QR Facebook" 
                         style="max-width: 150px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>
                <div style="text-align: center;">
                    <h4 style="margin: 0 0 10px 0; color: #25D366;">WhatsApp</h4>
                    <img src="${generateQRUrl(QR_CONFIG.whatsapp, 150)}" 
                         alt="QR WhatsApp" 
                         style="max-width: 150px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>
            </div>
        `;
        
        console.log('✅ Códigos QR múltiples generados');
    }
    
    /**
     * Crear landing page temporal con todas las opciones
     * (Requiere crear un archivo HTML separado o usar un servicio como Linktree)
     */
    function createSocialLinksPage() {
        // Esta función es para referencia futura
        // Puedes crear una página HTML separada (social-links.html)
        // y hacer que el QR apunte a esa página
        
        const landingPageUrl = window.location.origin + '/social-links.html';
        return landingPageUrl;
    }
    
    /**
     * Descargar el código QR como imagen
     */
    function downloadQR() {
        const qrImage = qrContainer?.querySelector('img');
        if (!qrImage) return;
        
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'el-elyon-qr-code.png';
        link.click();
        
        console.log('📥 QR descargado');
    }
    
    /**
     * Añadir botón de descarga (opcional)
     */
    function addDownloadButton() {
        if (!qrContainer) return;
        
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = '📥 Descargar QR';
        downloadBtn.className = 'btn btn-outline';
        downloadBtn.style.marginTop = '15px';
        downloadBtn.onclick = downloadQR;
        
        qrContainer.parentElement?.appendChild(downloadBtn);
    }
    
    // ========== INICIALIZACIÓN ==========
    
    /**
     * Inicializar generación de QR
     */
    function init() {
        console.log('🔲 Generador de QR inicializado');
        
        // Opción 1: QR único que apunta a Instagram (más simple)
        generateSocialQR();
        
        // Opción 2: Múltiples QR codes (descomenta si prefieres esta opción)
        // generateMultipleSocialQRs();
        
        // Añadir botón de descarga (opcional)
        // addDownloadButton();
    }
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exponer funciones globalmente (opcional)
    window.elElyon = window.elElyon || {};
    window.elElyon.generateQR = generateSocialQR;
    window.elElyon.downloadQR = downloadQR;
    
})();

/* ===================================
   NOTAS PARA EL DESARROLLADOR:
   
   OPCIÓN 1 (ACTUAL): 
   - QR único que apunta directamente a Instagram
   - Más simple y directo
   
   OPCIÓN 2:
   - Múltiples QR codes (uno por cada red social)
   - Descomenta generateMultipleSocialQRs() en init()
   
   OPCIÓN 3 (AVANZADA):
   - Crear un archivo social-links.html con todas las opciones
   - El QR apunta a esa página
   - Requiere crear el archivo adicional
   
   PARA CAMBIAR EL DESTINO DEL QR:
   - Modifica las URLs en QR_CONFIG al inicio del archivo
   
   API USADA:
   - https://goqr.me/api/ (gratuita, sin límites)
   - Alternativas: qrcode.js, QRCode.react, etc.
   =================================== */