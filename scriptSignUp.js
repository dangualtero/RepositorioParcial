function buscar() {
    var textoBusqueda = document.getElementById("barraBusqueda").value;
    console.log("Búsqueda realizada: " + textoBusqueda);
}

function validarFormulario() {
    let esValido = true;
    
    const nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        document.getElementById("errorNombre").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorNombre").style.display = "none";
    }
    
    const email = document.getElementById("email").value;
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regexEmail.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }
    
    const usuario = document.getElementById("usuario").value;
    const regexUsuario = /^[a-zA-Z0-9]{4,15}$/;
    if (!regexUsuario.test(usuario)) {
        document.getElementById("errorUsuario").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorUsuario").style.display = "none";
    }
    
    const contrasena = document.getElementById("contrasena").value;
    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!regexContrasena.test(contrasena)) {
        document.getElementById("errorContrasena").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorContrasena").style.display = "none";
    }
    
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    if (contrasena !== confirmarContrasena) {
        document.getElementById("errorConfirmar").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorConfirmar").style.display = "none";
    }
    

    const telefono = document.getElementById("telefono").value;
    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
        document.getElementById("errorTelefono").style.display = "block";
        esValido = false;
    } else {
        document.getElementById("errorTelefono").style.display = "none";
    }
    
    return esValido;
}

function registrar() {
    if (validarFormulario()) {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const usuario = document.getElementById("usuario").value;
        const telefono = document.getElementById("telefono").value;
        
        alert(`Registro exitoso:\n\nNombre: ${nombre}\nEmail: ${email}\nUsuario: ${usuario}\nTeléfono: ${telefono}`);
    }
}

function cancelar() {
    window.location.href = "admin.html";
}