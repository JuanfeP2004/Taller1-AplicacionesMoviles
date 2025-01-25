// Constante para seleccionar TODOS los botones del teclado virtual
const keys = document.querySelectorAll('.key');

// Función para cambiar todos los botones a *
function showAsterisks() {
    keys.forEach(key => key.textContent = '*');
}

// Función para restaurar los números originales
function restoreNumbers() {
    keys.forEach((key, index) => key.textContent = index + 1);
    keys[keys.length - 1].textContent = '0'; // Restaura el último botón a "0"
}

// Añade los eventos a cada botón
keys.forEach(key => {
    key.addEventListener('mouseenter', showAsterisks);
    key.addEventListener('mouseleave', restoreNumbers);
});
