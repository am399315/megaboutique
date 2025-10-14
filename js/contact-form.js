/* ===================================
   CONTACT-FORM.JS - FORMULARIO DE CONTACTO
   El-Elyon Super Boutique
   =================================== */

(function() {
    'use strict';
    
    // ========== ELEMENTOS DEL DOM ==========
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // ========== EXPRESIONES REGULARES ==========
    const REGEX = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\d\s\-\+\(\)]+$/,
        name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/
    };
    
    // ========== FUNCIONES DE VALIDACIÓN ==========
    
    /**
     * Validar campo de nombre
     * @param {string} name - Nombre a validar
     * @returns {Object} {valid: boolean, message: string}
     */
    function validateName(name) {
        if (!name || name.trim().length === 0) {
            return { valid: false, message: 'El nombre es obligatorio' };
        }
        
        if (name.trim().length < 2) {
            return { valid: false, message: 'El nombre debe tener al menos 2 caracteres' };
        }
        
        if (!REGEX.name.test(name)) {
            return { valid: false, message: 'El nombre solo puede contener letras y espacios' };
        }
        
        return { valid: true, message: '' };
    }
    
    /**
     * Validar campo de email
     * @param {string} email - Email a validar
     * @returns {Object} {valid: boolean, message: string}
     */
    function validateEmail(email) {
        if (!email || email.trim().length === 0) {
            return { valid: false, message: 'El email es obligatorio' };
        }
        
        if (!REGEX.email.test(email)) {
            return { valid: false, message: 'Por favor, ingresa un email válido' };
        }
        
        return { valid: true, message: '' };
    }
    
    /**
     * Validar campo de teléfono (opcional)
     * @param {string} phone - Teléfono a validar
     * @returns {Object} {valid: boolean, message: string}
     */
    function validatePhone(phone) {
        // El teléfono es opcional, así que si está vacío es válido
        if (!phone || phone.trim().length === 0) {
            return { valid: true, message: '' };
        }
        
        if (!REGEX.phone.test(phone)) {
            return { valid: false, message: 'Por favor, ingresa un teléfono válido' };
        }
        
        return { valid: true, message: '' };
    }
    
    /**
     * Validar campo de mensaje
     * @param {string} message - Mensaje a validar
     * @returns {Object} {valid: boolean, message: string}
     */
    function validateMessage(message) {
        if (!message || message.trim().length === 0) {
            return { valid: false, message: 'El mensaje es obligatorio' };
        }
        
        if (message.trim().length < 10) {
            return { valid: false, message: 'El mensaje debe tener al menos 10 caracteres' };
        }
        
        if (message.trim().length > 1000) {
            return { valid: false, message: 'El mensaje no puede exceder 1000 caracteres' };
        }
        
        return { valid: true, message: '' };
    }
    
    /**
     * Mostrar mensaje de error en un campo
     * @param {HTMLElement} input - Campo de entrada
     * @param {string} message - Mensaje de error
     */
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        // Remover error anterior si existe
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Crear mensaje de error
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = '#EF4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.style.display = 'block';
        
        // Añadir borde rojo al input
        input.style.borderColor = '#EF4444';
        
        // Insertar mensaje
        formGroup.appendChild(errorElement);
    }
    
    /**
     * Limpiar mensaje de error de un campo
     * @param {HTMLElement} input - Campo de entrada
     */
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        // Remover mensaje de error
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Restaurar borde
        input.style.borderColor = '';
    }
    
    /**
     * Validar todo el formulario
     * @returns {boolean} true si es válido, false si no
     */
    function validateForm() {
        let isValid = true;
        
        // Validar nombre
        const nameValidation = validateName(nameInput?.value || '');
        if (!nameValidation.valid) {
            showError(nameInput, nameValidation.message);
            isValid = false;
        } else {
            clearError(nameInput);
        }
        
        // Validar email
        const emailValidation = validateEmail(emailInput?.value || '');
        if (!emailValidation.valid) {
            showError(emailInput, emailValidation.message);
            isValid = false;
        } else {
            clearError(emailInput);
        }
        
        // Validar teléfono
        const phoneValidation = validatePhone(phoneInput?.value || '');
        if (!phoneValidation.valid) {
            showError(phoneInput, phoneValidation.message);
            isValid = false;
        } else {
            clearError(phoneInput);
        }
        
        // Validar mensaje
        const messageValidation = validateMessage(messageInput?.value || '');
        if (!messageValidation.valid) {
            showError(messageInput, messageValidation.message);
            isValid = false;
        } else {
            clearError(messageInput);
        }
        
        return isValid;
    }
    
    /**
     * Mostrar mensaje de éxito
     */
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="padding: 20px; background: #10B981; color: white; border-radius: 12px; text-align: center; margin: 20px 0;">
                <h3 style="margin: 0 0 10px 0;">✅ ¡Mensaje enviado!</h3>
                <p style="margin: 0;">Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
        `;
        
        contactForm?.insertAdjacentElement('afterend', successDiv);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    /**
     * Enviar formulario (simulado - integrar con backend o servicio)
     * @param {Object} formData - Datos del formulario
     */
    async function submitForm(formData) {
        // OPCIÓN 1: Enviar a WhatsApp (actual)
        const whatsappMessage = `
Nuevo mensaje de contacto:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}

Mensaje:
${formData.message}
        `.trim();
        
        const whatsappUrl = `https://wa.me/18494470901?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // OPCIÓN 2: Integrar con Formspree (descomentar para usar)
        /*
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                showSuccessMessage();
                contactForm?.reset();
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
        */
        
        // OPCIÓN 3: Enviar a un backend propio
        // Implementar según tu backend
    }
    
    /**
     * Manejar el envío del formulario
     * @param {Event} e - Evento del formulario
     */
    function handleSubmit(e) {
        e.preventDefault();
        
        // Validar formulario
        if (!validateForm()) {
            // Scroll al primer error
            const firstError = contactForm?.querySelector('.error-message');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Recopilar datos
        const formData = {
            name: nameInput?.value.trim() || '',
            email: emailInput?.value.trim() || '',
            phone: phoneInput?.value.trim() || '',
            message: messageInput?.value.trim() || ''
        };
        
        // Enviar formulario
        submitForm(formData);
        
        console.log('📧 Formulario enviado:', formData);
    }
    
    /**
     * Validación en tiempo real al escribir
     */
    function setupRealtimeValidation() {
        nameInput?.addEventListener('blur', () => {
            const validation = validateName(nameInput.value);
            if (!validation.valid) {
                showError(nameInput, validation.message);
            } else {
                clearError(nameInput);
            }
        });
        
        emailInput?.addEventListener('blur', () => {
            const validation = validateEmail(emailInput.value);
            if (!validation.valid) {
                showError(emailInput, validation.message);
            } else {
                clearError(emailInput);
            }
        });
        
        phoneInput?.addEventListener('blur', () => {
            const validation = validatePhone(phoneInput.value);
            if (!validation.valid) {
                showError(phoneInput, validation.message);
            } else {
                clearError(phoneInput);
            }
        });
        
        messageInput?.addEventListener('blur', () => {
            const validation = validateMessage(messageInput.value);
            if (!validation.valid) {
                showError(messageInput, validation.message);
            } else {
                clearError(messageInput);
            }
        });
    }
    
    // ========== INICIALIZACIÓN ==========
    
    /**
     * Inicializar formulario de contacto
     */
    function init() {
        console.log('📬 Formulario de contacto inicializado');
        
        // Event listener para el envío
        contactForm?.addEventListener('submit', handleSubmit);
        
        // Validación en tiempo real
        setupRealtimeValidation();
    }
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Exponer funciones globalmente (opcional)
    window.elElyon = window.elElyon || {};
    window.elElyon.validateForm = validateForm;
    
})();

/* ===================================
   NOTAS PARA INTEGRACIÓN:
   
   OPCIÓN 1 (ACTUAL): Envío a WhatsApp
   - Los datos se envían directamente a WhatsApp
   - No requiere backend
   - Rápido y simple
   
   OPCIÓN 2: Formspree (Recomendado)
   - Servicio gratuito para formularios
   - Hasta 50 envíos/mes gratis
   - Registro: https://formspree.io/
   - Reemplaza YOUR_FORM_ID con tu ID real
   
   OPCIÓN 3: Backend propio
   - Implementar endpoint POST /contact
   - Procesar y enviar emails
   - Mayor control y personalización
   
   OPCIÓN 4: EmailJS
   - Servicio para enviar emails desde frontend
   - 200 emails/mes gratis
   - Web: https://www.emailjs.com/
   =================================== */