const Nombre = document.getElementById('nombre');
const Usuario = document.getElementById('username');
const Cedula = document.getElementById('CI');
const Cargo = document.getElementById('cargo');
const Correo = document.getElementById('email');
const Telefono = document.getElementById('telefono');
const Apartamento = document.getElementById('apartamento');
const Clave = document.getElementById('password');
const Boton = document.getElementById('regis');

Boton.addEventListener('click', function(event){
    event.preventDefault();

    if(Nombre.value === '' || Usuario.value === ''
        || Cedula.value === '' || Cargo.value === ''
        || Correo.value === '' || Telefono.value === ''
        || Apartamento.value === '' || Clave.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Por favor, complete todos los campos.',
        });
        return;
    }
});

//VALIDAR QUE EN TELEFONO SOLO SE INGRESEN NUMEROS
Telefono.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
//VALIDAR QUE EN CEDULA INGRESEN SOLO NUMEROS
Cedula.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});