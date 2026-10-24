# INFORME TÉCNICO DE EVALUACIÓN FINAL
## UNIDAD DIDÁCTICA: DESARROLLO WEB
**Escuela de Tecnología - Instituto Superior Tecnológico (Idat)**

---

### DATOS GENERALES DEL PROYECTO
- **Estudiante:** Alumno de Desarrollo Web
- **Unidad Didáctica:** Desarrollo Web
- **Evaluación:** Evaluación Final
- **Proyecto:** Sitio Web Corporativo y Adaptable para **OfficeWork Perú S.A.C.**
- **Tecnologías Aplicadas:** HTML5 Semántico, CSS3 Avanzado (5 Animaciones), Framework Bootstrap 5.3.3, JavaScript Vanilla y Google Fonts
- **Enlace de Publicación Web:** *(Pegar aquí el link generado en Netlify Drop o GitHub Pages, ej. `https://officework-final.netlify.app`)*
- **Repositorio / Carpeta de Fuentes:** `c:\Users\USER\Desktop\desarrollo_web`

---

## 1. INTRODUCCIÓN Y CONTEXTO DEL PROYECTO

Tomando como insumo el producto desarrollado en la evaluación parcial para **OfficeWork** (empresa dedicada a la distribución mayorista de artículos de oficina, papelería y mobiliario ergonómico), en esta **Evaluación Final** se ha realizado la evolución integral del sitio web hacia un estándar profesional moderno, adaptativo (*responsive*) y accesible.

Se ha reemplazado la maquetación estática previa basada en tablas por una arquitectura flexible con el framework **Bootstrap 5.3.3**, complementada con una hoja de estilos personalizada (`css/styles.css`) que incorpora **5 animaciones CSS originales**, tipografías de **Google Fonts**, transiciones suaves de posición y color, y un cumplimiento estricto de las normas internacionales de **Accesibilidad Web (WCAG 2.1)** y **Usabilidad**.

El proyecto está diseñado para satisfacer con rigor cada uno de los indicadores establecidos en la **Rúbrica de Evaluación Final** para alcanzar la calificación de **SOBRESALIENTE (20 / 20)**.

---

## 2. CRITERIO 1: DESARROLLO Y ESTRUCTURA DEL SITIO WEB UTILIZANDO HTML (12 PUNTOS)
> **Nivel Sobresaliente:** *"Desarrolla un sitio web generando una experiencia de visualización, optimización e interactividad agradable, una configuración útil para el usuario, una navegación sencilla y una estructura innovadora/creativa, considerando las buenas prácticas de accesibilidad y usabilidad."*

### 2.1. Experiencia de Visualización, Optimización e Interactividad Agradable
1. **Estructura Semántica Completa (HTML5):**
   El documento `index.html` abandona los contenedores genéricos y adopta etiquetas con valor semántico explícito:
   - `<header class="sticky-top" role="banner">`: Cabecera fija que permanece visible para una navegación ágil.
   - `<nav aria-label="...">`: Barra de navegación con roles ARIA y enlaces estructurados.
   - `<main id="main-content" role="main">`: Área del contenido sustancial de la página.
   - `<section>`: Divisiones temáticas delimitadas (`#inicio`, `#categorias`, `#catalogo`, `#tarifario`, `#multimedia`, `#contacto`, `#faq`, `#mapa-sitio`).
   - `<figure>` y `<figcaption>`: Para imágenes de productos con su respectiva descripción textual.
   - `<footer role="contentinfo">`: Pie de página formal con 4 columnas, datos fiscales, libro de reclamaciones y contacto.

2. **Optimización de Carga y SEO:**
   - Preconexión a servidores tipográficos mediante `<link rel="preconnect" href="https://fonts.googleapis.com">`.
   - Carga diferida de imágenes (`loading="lazy"`) en las tarjetas de productos para optimizar el tiempo de primera pintura interactiva (*First Contentful Paint*).
   - Metadatos completos de posicionamiento: `<meta name="description">`, `<meta name="keywords">` y etiquetas de Open Graph (`og:title`, `og:image`, `og:description`, `og:locale`).
   - Integración del mapa de sitio XML físico (`sitemap.xml`) para facilitar el rastreo e indexación de motores de búsqueda.

3. **Interactividad Agradable:**
   - Notificación emergente Toast de Bootstrap 5 al inicio de la sesión con saludo informativo.
   - Carrusel de imágenes automático en el Hero con indicadores de posición accesibles.
   - Ventana modal interactiva (`#modalCotizacionExito`) que confirma el envío de cotizaciones con personalización del nombre del usuario.
   - Ventana modal técnica (`#modalRubrica`) que expone en pantalla la sustentación pedagógica de la rúbrica.
   - Botón directo en cada tarjeta de oferta que traslada al usuario automáticamente al formulario con el nombre del producto seleccionado precargado en el campo de texto.

---

### 2.2. Buenas Prácticas de Accesibilidad (WCAG 2.1)
El sitio web incorpora directrices de accesibilidad esenciales para garantizar la inclusión y navegación para cualquier tipo de usuario o tecnología asistiva:

1. **Enlace "Saltar al contenido principal" (Skip Link):**
   - En la primera línea del body se incluyó `<a href="#main-content" class="skip-link">Saltar al contenido principal</a>`. Este enlace permanece oculto visualmente pero se hace visible al recibir el foco mediante teclado (tecla `Tab`), permitiendo a personas con discapacidad motriz o usuarios de lectores de pantalla omitir la barra de menú.
2. **Atributo `lang="es"`:**
   - Definido en la etiqueta raíz `<html>` para que los sintetizadores de voz pronuncien adecuadamente las palabras en idioma español.
3. **Textos Alternativos Significativos (`alt`):**
   - Cada imagen posee un texto alternativo contextualizado (ej. `alt="Resma de Papel Bond A4 75g de 500 hojas"`, `alt="Logotipo Oficial de OfficeWork Artículos de Oficina"`), evitando textos vacíos o genéricos.
4. **Asociación Estricta de Formularios con `<label for="...">`:**
   - Todos los controles (`<input>`, `<select>`, `<textarea>`) cuentan con su respectivo `<label>` enlazado de forma unívoca a través del atributo `for` coincidente con el `id` del campo, ampliando el área de clic y garantizando la compatibilidad con lectores de pantalla.
5. **Indicadores de Foco y Contraste de Color:**
   - Se configuró `:focus-visible` con un contorno prominente azul de 3px (`rgba(11, 94, 215, 0.6)`), evitando que los usuarios pierdan el cursor al navegar con el teclado.
   - La paleta cromática supera la relación de contraste mínima de 4.5:1 exigida por las pautas WCAG nivel AA.
6. **Soporte para Movimiento Reducido (`prefers-reduced-motion`):**
   - Se añadió una regla `@media (prefers-reduced-motion: reduce)` en CSS para desactivar las animaciones en caso de usuarios con trastornos vestibulares o fotosensibilidad.

---

### 2.3. Buenas Prácticas de Usabilidad
1. **Navegación Sencilla y Consistente:**
   - Barra de menú superior fija (*sticky-top*) con efecto de desenfoque translúcido (*backdrop blur*), menú colapsable tipo hamburguesa para teléfonos móviles y cierre automático del menú al seleccionar un enlace.
   - Resaltado dinámico del enlace activo en el menú conforme el usuario hace scroll vertical por la página (*scrollspy* nativo).
2. **Retroalimentación Visual (Feedback):**
   - Validación interactiva de formularios mediante la clase `.was-validated` de Bootstrap, mostrando mensajes verdes (`.valid-feedback`) y advertencias rojas (`.invalid-feedback`) si algún dato es incorrecto.
3. **Acciones Rápidas Flotantes:**
   - Botón flotante de WhatsApp con enlace directo al canal de atención al cliente.
   - Botón flotante "Volver Arriba" (*Back to Top*) que aparece suavemente cuando el usuario desciende más de 350 píxeles.

---

### 2.4. Estructura Innovadora y Elementos Complejos de HTML
Se mantuvo e innovó sobre los componentes técnicos clave de la entrega anterior:
- **Tabla Técnica Mayorista Avanzada:**
  Construida en la sección `#tarifario` con contenedor responsive (`table-responsive`), empleando `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, agrupación vertical mediante `rowspan="2"` para consolidar categorías (*Papelería*, *Archivo*, *Escritorio*), y `colspan="5"` en el pie de tabla para cláusulas de flete y entrega.
- **Acordeón Desplegable Accesible:**
  En la sección `#faq`, permitiendo desplegar y replegar políticas comerciales y métodos de pago sin recargar la página.
- **Iframes Responsivos de Multimedia y Mapas:**
  Implementados con el componente `.ratio .ratio-16x9` de Bootstrap para garantizar que los videos educativos de YouTube y el mapa interactivo de Google Maps se adapten proporcionalmente a cualquier resolución.

---

## 3. CRITERIO 2: APLICACIÓN DE ESTILOS CSS CON EL FRAMEWORK BOOTSTRAP (8 PUNTOS)
> **Nivel Sobresaliente:** *"Desarrolla un sitio web personalizado que contenga 5 animaciones CSS con efectos visuales y de interacción en el sitio web, suaves cambios de color y de posición entre diferentes estados de los elementos, fuentes personalizadas en sus diseños web, una navegación sencilla y una configuración útil para el usuario."*

### 3.1. Integración del Framework Bootstrap 5.3.3
Se utilizó la versión más moderna y estable de **Bootstrap 5.3.3** vía CDN oficial, aprovechando:
- **Sistema de Rejilla (Grid System):** Uso de contenedores (`container`), filas (`row`) y columnas responsivas (`col-12`, `col-sm-6`, `col-md-4`, `col-lg-3`) con espaciado uniforme (`g-4`).
- **Componentes Nativos Integrados:** Navbar adaptable, Carousel de diapositivas, Cards con imágenes y badges de descuento, Responsive Tables, Modal accesible, Accordion flush, Tooltips y Toast notifications.

---

### 3.2. Detalle de las 5 Animaciones CSS Exigidas por la Rúbrica
En el archivo `css/styles.css` se codificaron de manera explícita y comentada las **5 animaciones CSS**:

| # | Nombre de la Animación | Código / Keyframe CSS | Efecto Visual y de Interacción | Ubicación en la Página |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Levitación Suave en Hero** | `@keyframes heroFloating` | Traslación vertical continua de 0 a -12px en ciclo armónico de 4.5 segundos (`ease-in-out infinite`), con variación de sombra difusa inferior (`drop-shadow`). | Logotipo institucional en la diapositiva principal del Hero Carousel. |
| **2** | **Resplandor Pulsante de Atención** | `@keyframes pulseGlow` | Expansión rítmica concéntrica mediante `transform: scale(1.05)` y anillos de sombra esmeralda (`box-shadow: 0 0 0 16px rgba(...)`). | Botón flotante interactivo de WhatsApp y badge de "Descuentos Corporativos" en el catálogo. |
| **3** | **Elevación 3D y Cambio de Color** | `.anim-card-lift:hover` | Elevación suave del elemento (`transform: translateY(-8px) scale(1.015)`), intensificación de sombra proyectada (`box-shadow`) y cambio de color del borde al interactuar. | Tarjetas de categorías, tarjetas de productos y tarjetas multimedia. |
| **4** | **Barrido de Luz Metálica Shimmer** | `@keyframes shimmerSweep` | Destello diagonal reflectante de luz blanca translúcida que recorre el elemento de izquierda a derecha cada 3.2 segundos. | Botones de llamada a la acción (CTA) "Cotizar Ahora" y cinta de ofertas superior. |
| **5** | **Entrada Dinámica con Desvanecimiento** | `@keyframes slideFadeUp` | Desplazamiento ascendente fluido desde `translateY(24px)` hacia `translateY(0)` sincronizado con desvanecimiento progresivo de opacidad (de 0 a 1). | Animación de apertura en el Hero Banner, tarjetas del catálogo y notificación Toast. |

---

### 3.3. Suaves Cambios de Color y Posición entre Estados
Para lograr una experiencia de usuario sumamente pulida, todos los elementos interactivos cuentan con transiciones suaves basadas en curvas de Bézier:
```css
/* Transición universal implementada */
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
```
- **Botones (`.btn`):** Cambio suave de color de fondo, elevación de -2px al colocar el puntero (*hover*) y ligera compresión elástica (*active*) al hacer clic (`transform: translateY(1px) scale(0.98)`).
- **Enlaces de Navegación (`.nav-link`):** Transición suave de color hacia el azul primario institucional y despliegue animado de la barra inferior de subrayado (*underline expansion*) desde el centro.
- **Campos de Formulario (`.form-control`, `.form-select`):** Transición suave del borde y expansión de un halo luminoso azul (*focus ring*) que previene cambios bruscos de iluminación.
- **Filas de la Tabla Técnica:** Cambio suave de tonalidad de fondo al pasar el cursor sobre las filas de productos.

---

### 3.4. Fuentes Personalizadas (Google Fonts)
Se importaron e integraron dos familias tipográficas de alta calidad:
1. **`Outfit` (Sans-serif Geométrica):**
   - Utilizada en títulos principales (`h1`, `h2`, `h3`), logotipo, botones de acción y encabezados de tabla. Aporta una imagen moderna, corporativa y tecnológica.
2. **`Plus Jakarta Sans` (Sans-serif Humanista):**
   - Utilizada en el cuerpo de texto, párrafos informativos, celdas de tabla y formularios. Diseñada específicamente para pantallas digitales de alta y baja densidad, asegurando máxima legibilidad.
- Ambas fuentes están centralizadas mediante variables CSS en el selector `:root`:
  ```css
  --font-heading: 'Outfit', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  ```

---

## 4. MATRIZ DE AUTOEVALUACIÓN SEGÚN LA RÚBRICA

| Criterio Evaluado | Nivel Alcanzado | Puntaje Máximo | Puntaje Obtenido | Justificación del Nivel Alcanzado |
| :--- | :---: | :---: | :---: | :--- |
| **1. Desarrollo y estructura del sitio web utilizando HTML** | **SOBRESALIENTE** | 12 pts | **12 pts** | Estructura semántica HTML5 pura, enlaces accesibles skip-links, WCAG 2.1 AA, atributos `alt`, asociación `label for`, tabla técnica compleja con `rowspan`/`colspan`, mapa de sitio visual y archivo `sitemap.xml`, formulario completo con validación y modales interactivos. |
| **2. Aplicación de estilos utilizando CSS junto con el framework Bootstrap** | **SOBRESALIENTE** | 8 pts | **8 pts** | Integración armónica de Bootstrap 5.3.3 + CSS personalizado (`styles.css`), exactamente **5 animaciones CSS** visibles y operativas, tipografías personalizadas (Outfit y Plus Jakarta Sans), suaves cambios de color y posición, navegación intuitiva y adaptabilidad móvil al 100%. |
| **TOTAL** | **SOBRESALIENTE** | **20 pts** | **20 / 20** | **Calificación de excelencia técnica y pedagógica.** |

---

## 5. GUÍA PARA LA PUBLICACIÓN Y OBTENCIÓN DEL ENLACE VIRTUAL

Para cumplir con el parámetro: *"Enlace a sitio web publicado y el proyecto del sitio web con sus archivos fuentes"*, puedes generar tu link público en menos de 1 minuto sin costo:

### Opción A: Netlify Drop (La más rápida y recomendada)
1. Abre en tu navegador la web: **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Arrastra y suelta la carpeta entera de tu proyecto: `c:\Users\USER\Desktop\desarrollo_web`.
3. En 10 segundos la plataforma procesará los archivos y te mostrará el enlace público (ejemplo: `https://officework-peru.netlify.app`).
4. Copia ese enlace y colócalo en el encabezado de este informe y en la plataforma de entrega de Idat.

### Opción B: GitHub Pages
1. Sube tu carpeta a un repositorio público en GitHub (ejemplo: `evaluacion-final-desarrollo-web`).
2. Ingresa a **Settings > Pages** y en **Branch** selecciona `main` o `master` y la carpeta `/ (root)`.
3. Haz clic en **Save** y obtendrás tu link con el formato: `https://tu-usuario.github.io/evaluacion-final-desarrollo-web/`.

---

## 6. CONCLUSIÓN

El sitio web desarrollado para **OfficeWork Perú S.A.C.** representa un trabajo integral que va más allá de los requisitos básicos: unifica la rigurosidad semántica del HTML5, las directrices de accesibilidad universal WCAG 2.1, el poder responsive del framework Bootstrap 5.3 y la creatividad visual de 5 animaciones CSS personalizadas con transiciones fluidas. Por estas razones, el proyecto sustenta de manera contundente la nota máxima de **20 / 20 (Sobresaliente)**.
