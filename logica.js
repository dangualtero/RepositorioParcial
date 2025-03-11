// Función para mostrar secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}

// Iniciar con la sección de inicio visible
document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio');
});

// Función para cambiar el contenido del texto
function cambiarContenido() {
    const contenido = document.getElementById('contenidoTexto');
    
    // Si tiene el texto de bienvenida, cambiarlo
    if (contenido.innerHTML.includes('Bienvenido a nuestra Tienda')) {
        contenido.innerHTML = `
            <h2>Descubre Nuestras Ofertas</h2>
            <p>Tenemos los mejores productos tecnológicos a precios increíbles.</p>
            <p>Compra hoy y recibe tu pedido en 24 horas.</p>
        `;
    } else {
        // Si no, volver al texto original
        contenido.innerHTML = `
            <h2>Bienvenido a nuestra Tienda</h2>
            <p>Somos una tienda virtual con los mejores productos tecnológicos. Ofrecemos precios increíbles y envíos a todo el país.</p>
            <p>¡Explora nuestro catálogo y encuentra lo que necesitas!</p>
        `;
    }
}

// Función para cambiar el color de la página
function cambiarColor() {
    document.body.classList.toggle('dark-mode');
}

// Función para iniciar sesión
function iniciarSesion() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Mostrar en consola los datos ingresados
    console.log('Datos de inicio de sesión:');
    console.log('Email:', email);
    console.log('Contraseña:', password);
    
    // Mostrar alerta para informar al usuario
    alert('Inicio de sesión procesado. Revisa la consola para ver la información.');
}

// Función para validar el nombre
function validarNombre(nombre) {
    return nombre.length >= 3;
}

// Función para validar el email
function validarEmail(email) {
    return email.includes('@') && email.includes('.');
}

// Función para validar el teléfono (10 dígitos)
function validarTelefono(telefono) {
    return telefono.length === 10 && !isNaN(telefono);
}

// Función para validar la contraseña
function validarPassword(password) {
    return password.length >= 8;
}

// Función para registrar un usuario
function registrarUsuario() {
    // Obtener valores de los campos
    const nombre = document.getElementById('registroNombre').value;
    const email = document.getElementById('registroEmail').value;
    const telefono = document.getElementById('registroTelefono').value;
    const password = document.getElementById('registroPassword').value;
    const confirmarPassword = document.getElementById('registroConfirmarPassword').value;
    
    let isValid = true;
    
    // Validar nombre
    if (!validarNombre(nombre)) {
        document.getElementById('errorNombre').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
    }
    
    // Validar email
    if (!validarEmail(email)) {
        document.getElementById('errorEmail').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }
    
    // Validar teléfono
    if (!validarTelefono(telefono)) {
        document.getElementById('errorTelefono').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorTelefono').style.display = 'none';
    }
    
    // Validar contraseña
    if (!validarPassword(password)) {
        document.getElementById('errorPassword').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorPassword').style.display = 'none';
    }
    
    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
        document.getElementById('errorConfirmarPassword').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('errorConfirmarPassword').style.display = 'none';
    }
    
    // Si todo es válido, mostrar datos
    if (isValid) {
        const mensaje = `
            Registro exitoso:
            Nombre: ${nombre}
            Email: ${email}
            Teléfono: ${telefono}
        `;
        alert(mensaje);
    }
}