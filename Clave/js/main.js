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


//Conectar el teclado virtual con el cuadro
// Campo de entrada de contraseña
const passwordInput = document.querySelector('.pin-input');

// Seleccionar todos los botones de número y el botón de borrar
const numberButtons = document.querySelectorAll('.key');
const deleteButton = document.querySelector('.keyborrar');

// Añadir eventos a los botones de número
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Agregar el número al valor del input (si no supera el máximo)
        if (passwordInput.value.length < passwordInput.maxLength) {
            passwordInput.value += button.textContent;
        }
    });
});

// Evento para el botón de borrar
deleteButton.addEventListener('click', () => {
    // Eliminar el último carácter del valor del input
    passwordInput.value = passwordInput.value.slice(0, -1);
});

