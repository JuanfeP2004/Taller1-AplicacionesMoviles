document.getElementById("link-home").addEventListener("click", function() {
    const destino = document.getElementById("home");
    const offset = 100;

    const posicion = destino.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
});