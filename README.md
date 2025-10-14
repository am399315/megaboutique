# 🦁 El-Elyon Super Boutique

Sitio web profesional para boutique de moda, desarrollado con HTML5, CSS3 y JavaScript vanilla. Diseño moderno, responsive y optimizado para SEO.

![El-Elyon Logo](./assets/images/logo.png)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación Local](#-instalación-local)
- [Despliegue en Vercel](#-despliegue-en-vercel)
- [Configuración](#-configuración)
- [Agregar Imágenes](#-agregar-imágenes)
- [Comandos Git](#-comandos-git)
- [Optimizaciones](#-optimizaciones)
- [Mejoras Futuras](#-mejoras-futuras)
- [Soporte](#-soporte)

---

## ✨ Características

### Funcionalidades Principales
- ✅ **Diseño Responsive** - Adaptado a móvil, tablet y desktop
- ✅ **Modo Oscuro/Claro** - Persistente con localStorage
- ✅ **Catálogo de Productos** - Con filtrado dinámico por categorías
- ✅ **Código QR** - Para redes sociales
- ✅ **Formulario de Contacto** - Con validación en tiempo real
- ✅ **Mapa Integrado** - Google Maps con ubicación exacta
- ✅ **Animaciones Suaves** - Intersection Observer para animaciones al scroll
- ✅ **SEO Optimizado** - Meta tags, Open Graph y Schema.org
- ✅ **Accesibilidad** - ARIA labels y navegación por teclado
- ✅ **Performance** - Lazy loading de imágenes

### Secciones
1. **Hero** - Banner principal con llamadas a la acción
2. **Sobre Nosotros** - Descripción del negocio
3. **Productos** - Catálogo con 8 productos de ejemplo y filtros
4. **Ubicación** - Mapa interactivo y datos de contacto
5. **Contacto** - Formulario y código QR
6. **Footer** - Enlaces rápidos y redes sociales

---

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares con variables CSS
- **JavaScript ES6+** - Sin frameworks, vanilla JS
- **Google Fonts** - Playfair Display + Poppins
- **API QR** - goqr.me para generación de códigos QR
- **Google Maps** - Mapa embebido

---

## 📁 Estructura del Proyecto

```
el-elyon-boutique/
│
├── index.html                 # Página principal
├── README.md                  # Documentación (este archivo)
├── .gitignore                 # Archivos ignorados por Git
│
├── assets/                    # Recursos estáticos
│   ├── images/               
│   │   ├── logo.png          # Logo de la boutique
│   │   ├── hero-banner.jpg   # Imagen del hero
│   │   ├── about-us.jpg      # Foto del local/propietario
│   │   └── products/         # Imágenes de productos
│   │       ├── product-1.jpg
│   │       ├── product-2.jpg
│   │       └── ... (hasta product-8.jpg)
│   ├── icons/                # Iconos e favicon
│   └── qr/                   # Códigos QR generados
│
├── css/                      # Hojas de estilo
│   ├── variables.css         # Variables CSS (colores, fuentes)
│   ├── reset.css             # Reset de estilos
│   ├── main.css              # Estilos principales
│   ├── header.css            # Header/navbar
│   ├── hero.css              # Sección hero
│   ├── products.css          # Catálogo de productos
│   ├── footer.css            # Footer
│   └── responsive.css        # Media queries
│
├── js/                       # JavaScript
│   ├── darkmode.js           # Modo oscuro/claro
│   ├── main.js               # Funcionalidad principal
│   ├── products.js           # Filtrado de productos
│   ├── qr-generator.js       # Generación de QR
│   └── contact-form.js       # Validación de formulario
│
└── data/                     # Datos (opcional)
    └── products.json         # Datos de productos
```

---

## 💻 Instalación Local

### Requisitos Previos
- Git instalado
- Editor de código (VS Code recomendado)
- Navegador web moderno

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd el-elyon-boutique
   ```

2. **Abrir con Live Server (VS Code)**
   - Instala la extensión "Live Server" en VS Code
   - Click derecho en `index.html`
   - Selecciona "Open with Live Server"
   - El sitio se abrirá en `http://localhost:5500`

3. **O abrir directamente**
   - Simplemente abre `index.html` en tu navegador
   - Nota: Algunas funcionalidades pueden requerir un servidor local

---

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

#### Paso 1: Subir a GitHub

1. **Crear repositorio en GitHub**
   - Ve a [github.com](https://github.com)
   - Click en "New repository"
   - Nombre: `el-elyon-boutique`
   - Descripción: "Sitio web oficial de El-Elyon Super Boutique"
   - Público o Privado (tu elección)
   - Click en "Create repository"

2. **Conectar tu repositorio local**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/el-elyon-boutique.git
   git branch -M main
   git push -u origin main
   ```

#### Paso 2: Desplegar en Vercel

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Sign Up"
   - Regístrate con GitHub (recomendado)

2. **Importar proyecto**
   - En el dashboard de Vercel, click en "Add New"
   - Selecciona "Project"
   - Click en "Import Git Repository"
   - Busca `el-elyon-boutique`
   - Click en "Import"

3. **Configurar proyecto**
   - **Project Name:** `el-elyon-boutique`
   - **Framework Preset:** Selecciona "Other" (sitio estático)
   - **Root Directory:** `.` (dejar por defecto)
   - **Build Command:** Dejar vacío (no hay build)
   - **Output Directory:** Dejar vacío
   - Click en "Deploy"

4. **¡Listo!** 🎉
   - Vercel construirá y desplegará tu sitio
   - En ~1 minuto tendrás una URL como: `https://el-elyon-boutique.vercel.app`
   - El despliegue es automático: cada push a GitHub actualizará el sitio

---

### Opción 2: Desde CLI de Vercel

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Desplegar**
   ```bash
   vercel
   ```

4. **Seguir las instrucciones**
   - Confirma el directorio
   - Confirma configuración
   - ¡Desplegado!

---

## ⚙️ Configuración

### Datos de Contacto

Los datos ya están configurados en el HTML:

- **Instagram:** `https://www.instagram.com/elelyonsuper_boutique`
- **Facebook:** `https://www.facebook.com/share/1Ck8UB285E/`
- **WhatsApp (Pedidos):** `+1 (849) 447-0901`
- **Teléfono (Llamadas):** `+1 (849) 342-7901`
- **Ubicación:** Villa Hermosa, La Romana, República Dominicana

### Modificar Colores

Edita el archivo `css/variables.css`:

```css
:root {
    --color-primary: #D4AF37;    /* Dorado */
    --color-secondary: #FF0000;  /* Rojo */
    --color-accent: #000000;     /* Negro */
}
```

### Modificar Fuentes

Edita `index.html` en la sección `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap" rel="stylesheet">
```

Luego actualiza en `css/variables.css`:

```css
:root {
    --font-heading: 'Tu Fuente', serif;
    --font-body: 'Tu Fuente', sans-serif;
}
```

---

## 📸 Agregar Imágenes

### Logo
- Coloca tu logo en: `assets/images/logo.png`
- Tamaño recomendado: 300x300px, formato PNG con transparencia

### Hero Banner
- Coloca la imagen en: `assets/images/hero-banner.jpg`
- Tamaño recomendado: 1920x1080px, formato JPG
- Debe ser de alta calidad pero optimizada (<500KB)

### Sobre Nosotros
- Coloca la foto en: `assets/images/about-us.jpg`
- Tamaño recomendado: 800x600px

### Productos
- Coloca las imágenes en: `assets/images/products/`
- Nombres: `product-1.jpg` hasta `product-8.jpg`
- Tamaño recomendado: 500x500px, formato JPG o WebP
- Optimizar con [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)

### Optimizar Imágenes (Importante)

**Herramientas gratuitas:**
- [TinyPNG](https://tinypng.com) - Compresión inteligente
- [Squoosh](https://squoosh.app) - Conversión a WebP
- [ImageOptim](https://imageoptim.com) - Mac
- [RIOT](https://riot-optimizer.com) - Windows

**Recomendaciones:**
- Usar formato WebP cuando sea posible (mejor compresión)
- Mantener imágenes bajo 200KB
- Usar lazy loading (ya implementado)

---

## 🔧 Comandos Git

### Comandos Básicos

```bash
# Ver estado de archivos
git status

# Agregar archivos al staging
git add .                    # Todos los archivos
git add nombre-archivo.html  # Archivo específico

# Hacer commit
git commit -m "Mensaje descriptivo"

# Ver historial
git log --oneline

# Subir cambios a GitHub
git push origin main
```

### Workflow Recomendado

```bash
# 1. Hacer cambios en tu código
# 2. Revisar qué cambió
git status
git diff

# 3. Agregar cambios
git add .

# 4. Commit con mensaje descriptivo
git commit -m "🐛 Fix: Corregido menú móvil"

# 5. Subir a GitHub (esto despliega automáticamente en Vercel)
git push origin main
```

### Mensajes de Commit Sugeridos

```bash
✨ feat: Nueva funcionalidad
🐛 fix: Corrección de bug
🎨 style: Cambios de estilo/diseño
📝 docs: Actualización de documentación
⚡ perf: Mejora de performance
♻️ refactor: Refactorización de código
🔧 config: Cambios de configuración
```

---

## 🚀 Optimizaciones

### Performance

#### Lighthouse Score Objetivo: 90+

**Ya implementado:**
- ✅ Lazy loading de imágenes
- ✅ CSS modular
- ✅ JavaScript diferido con `defer`
- ✅ Animaciones optimizadas con CSS

**Para mejorar aún más:**

1. **Convertir imágenes a WebP**
   ```bash
   # Usando Squoosh o cwebp
   cwebp input.jpg -q 80 -o output.webp
   ```

2. **Minificar CSS y JS** (en producción)
   - Usa [Terser](https://terser.org) para JS
   - Usa [cssnano](https://cssnano.co) para CSS

3. **Implementar Service Worker (PWA)**
   - Cache de recursos
   - Funciona offline

### SEO

**Ya implementado:**
- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Schema.org (datos estructurados)
- ✅ Sitemap automático (Vercel lo genera)

**Para mejorar:**

1. **Google Analytics**
   - Crear cuenta en [analytics.google.com](https://analytics.google.com)
   - Agregar el código de tracking en `<head>`

2. **Google Search Console**
   - Verificar propiedad del sitio
   - Enviar sitemap

3. **Facebook Pixel** (opcional)
   - Para anuncios en Facebook/Instagram

---

## 🎯 Mejoras Futuras

### Prioridad Alta (Implementar primero)

1. **Panel de Administración Simple** 🔧
   - **Complejidad:** Media
   - **Descripción:** Archivo JSON para actualizar productos sin código
   - **Beneficio:** Actualizar catálogo fácilmente

2. **PWA (Progressive Web App)** 📱
   - **Complejidad:** Media
   - **Descripción:** Instalable en dispositivos móviles
   - **Beneficio:** Mejor experiencia de usuario
   - **Archivos necesarios:** `manifest.json`, `sw.js`

3. **Integración con WhatsApp Business API** 💬
   - **Complejidad:** Baja
   - **Descripción:** Widget de chat en vivo
   - **Beneficio:** Atención inmediata a clientes

### Prioridad Media

4. **Carrito de Compras** 🛒
   - **Complejidad:** Alta
   - **Descripción:** Sistema de carrito con localStorage
   - **Beneficio:** Mejor experiencia de compra
   - **Requiere:** Integración de pagos después

5. **Galería de Imágenes por Producto** 🖼️
   - **Complejidad:** Media
   - **Descripción:** Múltiples fotos por producto, con zoom
   - **Beneficio:** Mostrar detalles del producto

6. **Sistema de Reviews** ⭐
   - **Complejidad:** Media-Alta
   - **Descripción:** Comentarios y calificaciones
   - **Beneficio:** Confianza y credibilidad

### Prioridad Baja (Largo plazo)

7. **Multi-idioma (Español/Inglés)** 🌐
   - **Complejidad:** Media
   - **Descripción:** Cambiar idioma del sitio
   - **Beneficio:** Alcance internacional

8. **Integración de Pagos** 💳
   - **Complejidad:** Alta
   - **Descripción:** MercadoPago, Stripe, PayPal
   - **Beneficio:** Ventas online directas
   - **Requiere:** Backend y SSL

9. **Blog de Moda** 📝
   - **Complejidad:** Media-Alta
   - **Descripción:** Sección de artículos y noticias
   - **Beneficio:** SEO y engagement

10. **Programa de Lealtad** 🎁
    - **Complejidad:** Alta
    - **Descripción:** Puntos y descuentos para clientes
    - **Beneficio:** Retención de clientes

---

## 📊 Analíticas y Métricas

### Google Analytics 4 (Recomendado)

1. **Crear propiedad en GA4**
   - [analytics.google.com](https://analytics.google.com)

2. **Agregar código de tracking**
   Añade esto en `<head>` del `index.html`:

   ```html
   <!-- Google Analytics 4 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Facebook Pixel (Opcional)

Para anuncios en Facebook/Instagram:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 🐛 Solución de Problemas

### El sitio no se ve bien en móvil
- Verifica que tengas: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Revisa `css/responsive.css`

### Las imágenes no cargan
- Verifica las rutas de las imágenes
- Asegúrate que los nombres de archivos coincidan exactamente
- Revisa que las imágenes estén en la carpeta correcta

### El modo oscuro no persiste
- Verifica que `js/darkmode.js` esté cargando
- Revisa la consola del navegador (F12) por errores
- Limpia el localStorage del navegador

### El formulario no envía
- Actualmente redirige a WhatsApp
- Para email, integra con Formspree (instrucciones en `contact-form.js`)

### Cambios no se reflejan en Vercel
- Haz push a GitHub: `git push origin main`
- Espera ~1 minuto para el despliegue
- Limpia caché del navegador (Ctrl+Shift+R)

---

## 📞 Soporte

### Recursos Útiles

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **MDN Web Docs:** [developer.mozilla.org](https://developer.mozilla.org)
- **CSS Tricks:** [css-tricks.com](https://css-tricks.com)
- **Stack Overflow:** [stackoverflow.com](https://stackoverflow.com)

### Contacto

Para soporte con el sitio:
- 📧 Email: info@elelyon-boutique.com
- 💬 WhatsApp: +1 (849) 447-0901
- 📱 Instagram: [@elelyonsuper_boutique](https://instagram.com/elelyonsuper_boutique)

---

## 📄 Licencia

Este proyecto es privado y pertenece a **El-Elyon Super Boutique**.

---

## 🙏 Agradecimientos

Desarrollado con ❤️ para El-Elyon Super Boutique

**Tecnologías utilizadas:**
- HTML5, CSS3, JavaScript ES6+
- Google Fonts (Playfair Display, Poppins)
- QR Server API
- Google Maps Embed API

---

**Versión:** 1.0.0  
**Última actualización:** Octubre 2025  
**Desarrollador:** Tu Nombre

---

## 📝 Notas Finales

### Antes del Lanzamiento

- [ ] Agregar todas las imágenes reales
- [ ] Optimizar todas las imágenes (<200KB cada una)
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Probar en diferentes dispositivos (móvil, tablet, desktop)
- [ ] Verificar todos los enlaces de redes sociales
- [ ] Configurar Google Analytics
- [ ] Enviar sitemap a Google Search Console
- [ ] Configurar dominio personalizado (opcional)

### Mantenimiento

- Actualizar productos regularmente
- Revisar analíticas semanalmente
- Responder mensajes de contacto rápidamente
- Mantener redes sociales activas
- Backup del código mensualmente

---

¡Tu sitio web está listo para brillar! 🌟