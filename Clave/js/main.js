// Seleccionar TODOS los botones del teclado virtual
const keys = document.querySelectorAll('.key');

// Campo de entrada de contraseña
const passwordInput = document.querySelector('.pin-input');

// Botón de borrar
const deleteButton = document.querySelector('.keyborrar');

// Botón para mostrar/ocultar contraseña
const togglePasswordButton = document.querySelector('.toggle-password');

// Función para cambiar todos los botones a *
function showAsterisks() {
    keys.forEach(key => key.textContent = '*');
}

// Función para restaurar los números originales
function restoreNumbers() {
    keys.forEach(key => key.textContent = key.getAttribute('data-value'));
}

// Añadir eventos de hover a cada botón para mostrar y restaurar los números
keys.forEach(key => {
    key.addEventListener('mouseenter', showAsterisks);
    key.addEventListener('mouseleave', restoreNumbers);
});

// Añadir eventos de clic para capturar los valores originales
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.getAttribute('data-value'); // Recuperar el valor original
        if (passwordInput.value.length < passwordInput.maxLength) {
            passwordInput.value += value; // Agregar el valor al input
        }
    });
});

// Evento para borrar el último carácter
deleteButton.addEventListener('click', () => {
    passwordInput.value = passwordInput.value.slice(0, -1); // Eliminar el último carácter
});

// Evento para mostrar/ocultar la contraseña
togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Ocultar contraseña';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Mostrar contraseña';
    }
});
