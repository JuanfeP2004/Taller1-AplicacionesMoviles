// Seleccionar TODOS los botones del teclado virtual
const keys = document.querySelectorAll('.key');

// Espacio de contraseña
const passwordInput = document.querySelector('.pin-input');

// Botón de borrar
const deleteButton = document.querySelector('.keyborrar');

// Botón para mostrar/ocultar contraseña
const togglePasswordButton = document.querySelector('.toggle-password');

// Contenedor del teclado
const keypadContainer = document.querySelector('.keypad');

// Función para cambiar todos los números a *
function showAsterisks() {
    keys.forEach(key => key.textContent = '*');
}

// Función para restaurar los números
function restoreNumbers() {
    keys.forEach(key => key.textContent = key.getAttribute('data-value'));
}

// Función para reorganizar los botones del teclado de forma aleatoria
function shuffleKeys() {
    // Crear un array con los valores de los botones
    const keyValues = Array.from(keys).map(key => key.getAttribute('data-value'));
    
    // Mezclar los valores del array
    for (let i = keyValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keyValues[i], keyValues[j]] = [keyValues[j], keyValues[i]];
    }

    // Aplicar el nuevo orden de valores al teclado
    Array.from(keys).forEach((key, index) => {
        key.setAttribute('data-value', keyValues[index]);
        key.textContent = keyValues[index]; // Actualizar el texto visible
    });
}

// Llamado a las funciones para mostrar y restaurar los números
keys.forEach(key => {
    key.addEventListener('mouseenter', showAsterisks);
    key.addEventListener('mouseleave', restoreNumbers);
});

// Función de clic para tener los valores originales
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.getAttribute('data-value'); // Recuperar el valor original
        if (passwordInput.value.length < passwordInput.maxLength) {
            passwordInput.value += value; // Agregar el valor al input
        }

        shuffleKeys(); // Mezclar los números después de cada clic
    });
});

// Función para borrar 
deleteButton.addEventListener('click', () => {
    passwordInput.value = passwordInput.value.slice(0, -1); // Eliminar el último carácter
});

// Función para mostrar/ocultar la contraseña
togglePasswordButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Ocultar contraseña';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Mostrar contraseña';
    }
});

// Inicializar el teclado con números aleatorios al cargar la página
shuffleKeys();
