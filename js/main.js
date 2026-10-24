/**
 * OfficeWork Perú - JavaScript de Interacción y Usabilidad
 * Proyecto: Desarrollo Web - Evaluación Final
 * Cumplimiento de Criterios de Usabilidad e Interactividad
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. INICIALIZAR COMPONENTES BOOTSTRAP (TOOLTIPS Y TOASTS)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Toast de bienvenida / notificación al cargar la página
    const toastEl = document.getElementById('toastBienvenida');
    if (toastEl) {
        const toast = new bootstrap.Toast(toastEl, { delay: 6000 });
        setTimeout(() => {
            toast.show();
        }, 1200);
    }

    // 2. BOTÓN "VOLVER ARRIBA" (BACK TO TOP)
    const backToTopBtn = document.getElementById('btnBackToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            backToTopBtn?.classList.add('show');
        } else {
            backToTopBtn?.classList.remove('show');
        }
    });

    backToTopBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. ACTUALIZACIÓN AUTOMÁTICA DEL ENLACE ACTIVO EN LA BARRA DE NAVEGACIÓN
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 4. VALIDACIÓN DE FORMULARIO DE COTIZACIÓN (BOOTSTRAP 5) Y MODAL DE ÉXITO
    const formCotizacion = document.getElementById('formCotizacion');
    const modalCotizacionExito = new bootstrap.Modal(document.getElementById('modalCotizacionExito'));

    if (formCotizacion) {
        formCotizacion.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!formCotizacion.checkValidity()) {
                formCotizacion.classList.add('was-validated');
            } else {
                formCotizacion.classList.add('was-validated');
                
                // Extraer nombre para personalizar el mensaje de confirmación
                const nombreCliente = document.getElementById('txtNombres')?.value || 'Estimado Cliente';
                const spanNombre = document.getElementById('modalClienteNombre');
                if (spanNombre) {
                    spanNombre.textContent = nombreCliente;
                }

                // Mostrar modal de confirmación accesible
                modalCotizacionExito.show();

                // Resetear formulario tras confirmación
                formCotizacion.reset();
                formCotizacion.classList.remove('was-validated');
            }
        }, false);
    }

    // 5. BOTÓN DINÁMICO "COTIZAR PRODUCTO" EN TARJETAS
    const botonesCotizar = document.querySelectorAll('.btn-cotizar-producto');
    const textareaMensaje = document.getElementById('txtMensaje');

    botonesCotizar.forEach(boton => {
        boton.addEventListener('click', () => {
            const productoNombre = boton.getAttribute('data-producto');
            if (textareaMensaje && productoNombre) {
                textareaMensaje.value = `Deseo solicitar cotización formal para el producto: ${productoNombre}. Cantidad requerida: `;
                // Desplazamiento suave al formulario
                const seccionContacto = document.getElementById('contacto');
                seccionContacto?.scrollIntoView({ behavior: 'smooth' });
                textareaMensaje.focus();
            }
        });
    });

    // 6. CERRAR MENÚ RESPONSIVE AUTOMÁTICAMENTE AL HACER CLIC EN UN ENLACE (MÓVILES)
    const navbarCollapse = document.getElementById('navbarNav');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                bsCollapse?.hide();
            }
        });
    });
});
