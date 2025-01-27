document.getElementById("link-home").addEventListener("click", function() {
    console.log("Click en Home");
    const destino = document.getElementById("home");
    const offset = 100;

    const posicion = destino.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
});

document.getElementById("link-about").addEventListener("click", function() {
    console.log("Click en Home");
    const destino = document.getElementById("about");
    const offset = 100;

    const posicion = destino.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
});

document.getElementById("link-services").addEventListener("click", function() {
    console.log("Click en Home");
    const destino = document.getElementById("services");
    const offset = 100;

    const posicion = destino.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
});

document.getElementById("link-contact").addEventListener("click", function() {
    console.log("Click en Home");
    const destino = document.getElementById("contact");
    const offset = 100;

    const posicion = destino.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: posicion,
        behavior: "smooth"
    });
});