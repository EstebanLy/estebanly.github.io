// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Detectar desplazamiento y cambiar el fondo de la barra de navegación
// y mostrar el logo cuando el encabezado desaparezca
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');  // Toda la sección del encabezado
    var navLogo = document.querySelector('.nav-logo-container'); // Logo en la barra de navegación
    var navBar = document.querySelector('.nav-bar');
    var navButtonsContainer = document.querySelector('.nav-buttons-container'); // Contenedor de los botones

    // Mostrar el logo del menú cuando el logo del encabezado desaparezca
    if (header.getBoundingClientRect().bottom <= 0) {
        // Si el logo del encabezado ha desaparecido, muestra el logo del menú
        navLogo.classList.add('scrolled');
    } else {
        // Si el encabezado está visible, oculta el logo del menú
        navLogo.classList.remove('scrolled');
    }

    // Cambiar el fondo de la barra de navegación cuando todo el encabezado desaparezca
    if (header.getBoundingClientRect().bottom <= 0) {
        navBar.classList.add('scrolled'); // Cambia el fondo de la barra de navegación
    } else {
        navBar.classList.remove('scrolled'); // Vuelve al fondo original
    }
});









