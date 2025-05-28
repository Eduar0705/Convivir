const usurio = document.getElementById('user');
const clave = document.getElementById('pass');
const boton = document.getElementById('init');

boton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const usuarioValor = usurio.value.trim();
    const claveValor = clave.value.trim();

    if (usuarioValor === '' || claveValor === '') {
        // Reemplazo de alert() por SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Por favor, complete todos los campos.',
        });
        return;
    }

    if (usuarioValor === 'admin' && claveValor === '1234') {
        // Mensaje de éxito antes de redirigir
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido Admin!',
            text: 'Redirigiendo...',
            showConfirmButton: false,
            timer: 1500 // Cierra automáticamente después de 1.5 segundos
        }).then(() => {
            window.location.href = './views/Admin.html';
        });
        return;
    }

    if (usuarioValor === 'user' && claveValor === '1234') {
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido Usuario!',
            text: 'Redirigiendo...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = './views/Users.html';
        });
        return;
    }

    // Mensaje de error para credenciales incorrectas
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
    });
});