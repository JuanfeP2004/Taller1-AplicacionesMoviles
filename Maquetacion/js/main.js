document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // Muestra 3 imágenes a la vez
        spaceBetween: 0, // Espaciado entre imágenes
        grabCursor: true, // Permite arrastrar con el mouse
        freeMode: true, 
        autoplay: {
            delay: 300000, // Cambio automático 
            disableOnInteraction: false, // Sigue funcionando tras interacción
        },
        breakpoints: {
            768: {
                slidesPerView: 3, // En pantallas grandes muestra 4
            },
            480: {
                slidesPerView: 2, // En móviles muestra 2
            },
            320: {
                slidesPerView: 1, // En pantallas muy pequeñas muestra 1
            }
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

