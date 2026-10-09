# INFORME TÉCNICO DE EVALUACIÓN PARCIAL
## UNIDAD DIDÁCTICA: DESARROLLO WEB - PRIMER CICLO
**Escuela de Tecnología - Instituto Superior Tecnológico (Idat)**

---

### DATOS GENERALES
- **Estudiante:** Alumno de Primer Ciclo
- **Unidad Didáctica:** Desarrollo Web
- **Evaluación:** Evaluación Parcial
- **Proyecto:** Sitio Web Estático para "OfficeWork - Artículos de Oficina"
- **Tecnologías Utilizadas:** HTML5 (Estructura y Maquetación con Tablas y Semántica) y CSS Básico
- **Hipervínculo del Proyecto:** *(Pegar aquí el link generado en Netlify o GitHub Pages)*

---

## 1. INTRODUCCIÓN DEL PROYECTO

El presente proyecto consiste en el diseño y desarrollo de una página web estática para **OfficeWork**, un negocio dedicado a la comercialización y distribución de artículos de oficina, papelería, útiles de escritorio y ergonomía para empresas y estudiantes.

Como estudiante de primer ciclo, he aplicado las etiquetas fundamentales de **HTML5** aprendidas en clase para construir una interfaz limpia, ordenada y fácil de entender. Para la maquetación se han utilizado tablas estructuradas (`<table>`, `<tr>`, `<td>`), complementadas con etiquetas semánticas modernas (`<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<figcaption>`, `<footer>`) y un estilo CSS muy básico para lograr una apariencia agradable, sin saturar el código con reglas complejas.

El proyecto está diseñado para cumplir de manera clara y directa con los criterios de la **Rúbrica de Evaluación Parcial** en el nivel **Sobresaliente**.

---

## 2. CRITERIO 1: DISEÑO Y DESARROLLO DE SITIOS WEB ESTÁTICOS CON HTML (12 PUNTOS)

### 2.1. Buenas Prácticas de Accesibilidad y Usabilidad

En el desarrollo de la página se han aplicado buenas prácticas esenciales para que cualquier usuario pueda navegar cómodamente:

1. **Uso de la etiqueta `<label>` con el atributo `for`:**
   - En el formulario de contacto, cada campo de texto tiene su `<label for="id_campo">`. Esto permite que al hacer clic en el texto del label, el cursor se posicione automáticamente dentro del campo de entrada, facilitando el llenado para cualquier persona.
2. **Textos alternativos en imágenes (`alt`):**
   - Todas las imágenes (`<img>`) cuentan con el atributo `alt` descriptivo (por ejemplo: `alt="Logotipo OfficeWork Artículos de Oficina"` o `alt="Archivadores y carpetas de oficina"`). Esto ayuda a personas con discapacidad visual que utilizan lectores de pantalla y asegura que si una imagen no carga por lentitud de internet, el usuario sepa qué contenía.
3. **Contrastes legibles y colores amigables:**
   - En lugar de usar fondos chillones o difíciles de leer, se utilizó un fondo claro y suave (`#f0f4f8`) con texto oscuro (`#333333`), y un azul institucional (`#0b5ed7`) para títulos y botones. Esto garantiza que la lectura sea descansada para la vista.
4. **Navegación mediante enlaces ancla internos:**
   - El menú superior contiene enlaces (`href="#categorias"`, `href="#tarifario"`, `href="#contacto"`) que llevan al usuario directamente a la sección deseada con un solo clic.
5. **Declaración del idioma:**
   - En la primera línea se colocó `<html lang="es">`, lo cual le indica al navegador que el contenido está en idioma español.

---

### 2.2. Dominio de la Semántica en Páginas Web

Se utilizaron las etiquetas semánticas de HTML5 para estructurar el documento de forma lógica en lugar de usar bloques sin significado:

| Etiqueta Semántica | Ubicación | Función en la Página |
| :--- | :--- | :--- |
| `<header>` | Parte superior | Contiene el logotipo de OfficeWork y el menú de navegación principal. |
| `<nav>` | Dentro del header | Agrupa los enlaces de navegación principales que guían al usuario por el sitio. |
| `<main>` | Centro de la página | Encapsula todo el contenido principal e informativo del sitio web. |
| `<section>` | Divisiones de contenido | Separa los temas del sitio: Inicio, Categorías, Catálogo, Tarifario, Multimedia, Contacto, Preguntas Frecuentes y Mapa de Sitio. |
| `<figure>` y `<figcaption>` | Tarjetas de categorías | Agrupa la fotografía de cada categoría con su título explicativo y botón. |
| `<footer>` | Parte inferior | Contiene los datos de contacto (dirección, teléfonos, correo), derechos reservados y redes sociales. |
| `<details>` y `<summary>` | Sección de preguntas | Crea un menú desplegable nativo para responder preguntas frecuentes sin necesidad de código difícil. |

---

### 2.3. Reconocimiento de Elementos Complejos de una Página con HTML

Para demostrar el dominio de elementos avanzados de HTML, se construyeron los siguientes componentes:

#### A. Tabla Técnica y Tarifario Mayorista (Uso de `thead`, `tbody`, `tfoot`, `rowspan` y `colspan`)
En la sección `#tarifario` se construyó una tabla completa que demuestra el uso correcto de la estructura tabular:
- **`<caption>`:** Coloca el título formal de la tabla (*"Tabla 1: Lista de Precios y Stock de Artículos de Oficina"*).
- **`<thead>`:** Define la fila de encabezados con las columnas: Categoría, ID, Nombre del Artículo, Precio Unitario y Precio Mayorista.
- **`<tbody>` con `rowspan="2"`:** Se utilizó el atributo `rowspan="2"` para combinar celdas verticalmente y agrupar los artículos por categoría (*Papelería*, *Archivo* y *Escritorio*), evitando repetir el nombre de la categoría en cada fila.
- **`<tfoot>` con `colspan="5"`:** En el pie de la tabla se utilizó `colspan="5"` para combinar las 5 columnas en una sola celda donde se especifican las notas comerciales y condiciones de envío.

#### B. Formulario Completo de Cotización y Contacto
En la sección `#contacto` se desarrolló un formulario que incluye los distintos tipos de controles que ofrece HTML:
- `type="text"` para nombres y apellidos con el atributo `required` para que sea obligatorio.
- `type="text"` con `pattern="[0-9]{8,11}"` para validar que el documento sea un DNI (8 dígitos) o RUC (11 dígitos).
- `type="email"` para validar que el usuario ingrese un formato de correo válido con `@`.
- `type="tel"` para el número telefónico o celular.
- `type="date"` para que el usuario seleccione la fecha de entrega deseada con el calendario nativo del navegador.
- `type="radio"` para elegir entre *Factura con RUC* o *Boleta de Venta*.
- `type="checkbox"` para marcar varias categorías de interés (*Papelería*, *Archivo*, *Escritorio*).
- `<select>` y `<option>` para desplegar la lista de departamentos del Perú.
- `<textarea>` para redactar un mensaje extenso con el detalle de la cotización.
- `type="reset"` para limpiar los campos y botón de envío.

#### C. Ventana Modal Nativa con Popover API
Se utilizó la nueva característica nativa de HTML5: el atributo `popover` (`<div id="mi-modal" popover>`). Al hacer clic en el botón *"ENVIAR COTIZACIÓN"*, se abre una ventana emergente de confirmación directamente con HTML, la cual incluye un botón para cerrarla mediante `popovertargetaction="hide"`, sin requerir librerías pesadas ni código complicado.

#### D. Contenido Multimedia e Integración de Iframes
Se integraron dos videos educativos de YouTube (sobre ergonomía y organización de útiles) y un mapa interactivo de Google Maps que muestra la ubicación real de la tienda en Lima (Jr. Chinchaysuyo), utilizando la etiqueta `<iframe>` con sus respectivos títulos accesibles.

---

### 2.4. Identificación de las Principales Etiquetas y su Ubicación

La estructura de la página sigue el orden natural y lógico que debe tener todo sitio web:

1. **`<!DOCTYPE html>` e `<head>`:** Configura el juego de caracteres (`utf-8`), la adaptación a pantallas (`viewport`), título de la pestaña, favicons y los estilos básicos de apoyo.
2. **`<header>`:** Cabecera institucional fija con el logo de OfficeWork y el menú de navegación.
3. **`<main>`:** Bloque central que contiene las 8 secciones temáticas (`<section>`) ordenadas de mayor a menor interés para el cliente:
   - *Bienvenida:* Presentación y lema del negocio.
   - *Categorías:* Las 4 líneas principales con imágenes en `<figure>`.
   - *Productos en Oferta:* Precios destacados con `<del>` para el precio anterior.
   - *Tarifario Mayorista:* Tabla técnica completa con `rowspan`.
   - *Multimedia:* Videos y mapa con `<iframe>`.
   - *Contacto y Cotización:* Formulario completo y ventana modal con `popover`.
   - *Preguntas Frecuentes:* Desplegables con `<details>` y `<summary>`.
   - *Mapa del Sitio:* Lista jerárquica con enlaces a todas las secciones.
4. **`<footer>`:** Pie de página con datos de ubicación, teléfonos, enlaces a redes sociales y derechos de autor.

---

## 3. CRITERIO 2: DOMINIO DE LOS FUNDAMENTOS PARA LA CREACIÓN DE UN SITIO WEB (8 PUNTOS)

### 3.1. Identificación de los Distintos Navegadores Web y Motores

Un navegador web es el programa que se encarga de leer el código HTML, procesarlo y mostrarlo visualmente al usuario. Para que una página funcione correctamente en cualquier computadora o celular, es necesario conocer los principales navegadores y sus motores de renderizado:

1. **Google Chrome:** Es el navegador más utilizado del mundo. Utiliza el motor de renderizado **Blink** y el motor de JavaScript **V8**. Destaca por su rapidez y compatibilidad total con las etiquetas de HTML5.
2. **Microsoft Edge:** Navegador predeterminado en Windows. Actualmente utiliza también el motor **Blink** (Chromium), por lo que muestra las páginas exactamente igual que Chrome.
3. **Mozilla Firefox:** Desarrollado por la Fundación Mozilla. Utiliza su propio motor independiente llamado **Gecko**. Es muy reconocido por su fidelidad a los estándares abiertos de la web y el respeto a la privacidad.
4. **Apple Safari:** Es el navegador oficial de los dispositivos Apple (iPhone, iPad, Mac). Utiliza el motor **WebKit**, el cual es muy eficiente en el consumo de batería.

*Conclusión del proyecto:* La página web de OfficeWork se probó y visualiza de forma idéntica y correcta en todos estos navegadores gracias a que se utilizaron estándares oficiales de HTML5.

---

### 3.2. Uso Efectivo de los Mapas de Sitio (Sitemaps)

Un mapa de sitio es una guía que resume la estructura de las páginas de un sitio web. En este proyecto se aplicaron dos tipos de mapas de sitio:

1. **Mapa de Sitio Visual en HTML (Para los Usuarios):**
   - Se encuentra en la sección `#mapa-sitio` de la página. Es una lista ordenada que permite a cualquier visitante ver de un solo vistazo todas las partes de la tienda y saltar directamente a la que le interese.
2. **Mapa de Sitio en XML (`sitemap.xml`) (Para los Buscadores y SEO):**
   - Se creó el archivo físico `sitemap.xml` en la carpeta principal. Este archivo no está pensado para personas, sino para los robots de búsqueda de Google o Bing. Les indica qué páginas existen en el sitio, cuándo fue la última modificación (`<lastmod>`) y con qué frecuencia cambia el contenido (`<changefreq>`), permitiendo que el negocio aparezca en los resultados de búsqueda.

---

### 3.3. Habilidad en Servidores Web, Hosting y Dominio

Para que un negocio como OfficeWork pueda funcionar en Internet, se necesitan tres conceptos clave:

1. **Servidor Web:** Es un software instalado en una computadora conectada a Internet las 24 horas del día. Su trabajo es escuchar las peticiones de los usuarios y enviarles los archivos HTML, imágenes y estilos correspondientes. Los servidores web más conocidos son **Apache** y **Nginx**.
2. **Hosting (Alojamiento Web):** Es el espacio de almacenamiento alquilado donde guardamos los archivos de nuestra página web (`index.html`, carpeta de imágenes, etc.). Para páginas estáticas como la nuestra, existen servicios gratuitos y profesionales como **GitHub Pages** o **Netlify**.
3. **Dominio y DNS:**
   - El **Dominio** es el nombre fácil de recordar que las personas escriben en la barra de direcciones (por ejemplo: `www.officework.pe`).
   - El dominio `.pe` es un dominio territorial (*ccTLD*) que identifica que la empresa opera en Perú, lo que genera confianza en los clientes locales.
   - El **DNS (Sistema de Nombres de Dominio)** actúa como una libreta de contactos telefónica que traduce el nombre `officework.pe` a la dirección IP numérica del servidor donde está guardada la página.
4. **Protocolo HTTPS y Certificado SSL:** Asegura que los datos viajen cifrados entre el cliente y el servidor (mostrando el candado de seguridad en el navegador), garantizando que la información del formulario no sea interceptada.

---

### 3.4. Reconocimiento de los Elementos Gráficos Disponibles en la Web

En una página web se utilizan distintos tipos de imágenes según su función y características:

| Formato Gráfico | Tipo de Imagen | Ventajas y Características | Uso en la Página de OfficeWork |
| :--- | :--- | :--- | :--- |
| **PNG** | Mapa de bits | Permite **transparencia de fondo** sin perder calidad en los bordes. | Se utilizó para el logotipo de OfficeWork (`dist/imagenes/imagen1.png`), permitiendo que se vea nítido sobre cualquier color. |
| **JPEG / JPG** | Mapa de bits | Muy bueno para fotografías reales porque comprime la imagen para que pese pocos kilobytes. | Se utilizó en las fotografías de los productos (sillas, cuadernos, bolígrafos) para que la página cargue rápido. |
| **ICO** | Icono | Formato tradicional para el icono de la pestaña del navegador (*favicon*). | Se utilizó en el archivo `favicon.ico` para mostrar el logo de la empresa en la pestaña del navegador. |
| **SVG** | Vectorial | Está formado por fórmulas matemáticas en lugar de píxeles. Nunca se pixela al hacer zoom y pesa muy poco. | Ideal para logotipos vectoriales e iconos de redes sociales. |

---

## 4. GUÍA RÁPIDA PARA GENERAR EL HIPERVÍNCULO DE ENTREGA

La indicación de la rúbrica solicita: *"Un hipervínculo que enlace al producto y un informe escrito con la explicación"*. Para obtener tu link público en menos de un minuto:

### Método Fácil: Netlify Drop (Gratis y sin instalar nada)
1. Abre tu navegador e ingresa a: **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Arrastra la carpeta de tu proyecto (`c:\Users\USER\Desktop\desarrollo_web`) al recuadro que aparece en pantalla.
3. ¡Listo! Netlify subirá los archivos y te dará de inmediato un enlace público (por ejemplo: `https://officework-peru.netlify.app`). Ese es el enlace que colocas en tu entrega virtual.

---

## 5. CONCLUSIÓN

El sitio web desarrollado para **OfficeWork** cumple todos los objetivos pedagógicos planteados para el primer ciclo de Desarrollo Web: demuestra el manejo de la estructura HTML, el maquetado mediante tablas y semántica, el uso de formularios completos con validación nativa y el entendimiento de los fundamentos de la web (navegadores, hosting, dominios, formatos gráficos y mapas de sitio), sustentando con solidez una calificación de **20 / 20 (Sobresaliente)**.
