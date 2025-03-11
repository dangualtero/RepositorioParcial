// VARIABLES GLOBALES
var empleadoActual = 1;
var tamanoLetra = 16;
var colorLetra = "black";

// FUNCIONES PARA CAMBIAR PÁGINAS
function mostrarNoticias() {
    document.getElementById("noticias-page").style.display = "block";
    document.getElementById("admin-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("about-page").style.display = "none";
}

function mostrarAdmin() {
    document.getElementById("noticias-page").style.display = "none";
    document.getElementById("admin-page").style.display = "block";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("about-page").style.display = "none";
}

function mostrarSignup() {
    document.getElementById("noticias-page").style.display = "none";
    document.getElementById("admin-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
    document.getElementById("about-page").style.display = "none";
}

function mostrarAbout() {
    document.getElementById("noticias-page").style.display = "none";
    document.getElementById("admin-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("about-page").style.display = "block";
}

// FUNCIÓN PARA BÚSQUEDA
function buscar() {
    var textoBusqueda = document.getElementById("busqueda").value;
    console.log("Búsqueda: " + textoBusqueda);
}

// FUNCIÓN PARA LOGIN
function login() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + password);
}

// FUNCIÓN PARA REGISTRO
function registrar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var usuario = document.getElementById("nuevo-usuario").value;
    var password = document.getElementById("nueva-password").value;
    var confirmarPassword = document.getElementById("confirmar-password").value;
    
    // Validaciones con expresiones regulares
    var nombreRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var usuarioRegex = /^[a-zA-Z0-9]+$/;
    var passwordRegex = /^.{6,}$/;
    
    var errores = [];
    
    if (!nombreRegex.test(nombre)) {
        errores.push("El nombre solo debe contener letras y espacios");
    }
    
    if (!emailRegex.test(email)) {
        errores.push("El email no tiene un formato válido");
    }
    
    if (!usuarioRegex.test(usuario)) {
        errores.push("El usuario solo debe contener letras y números");
    }
    
    if (!passwordRegex.test(password)) {
        errores.push("La contraseña debe tener al menos 6 caracteres");
    }
    
    if (password != confirmarPassword) {
        errores.push("Las contraseñas no coinciden");
    }
    
    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("Registro exitoso:\nNombre: " + nombre + "\nEmail: " + email + "\nUsuario: " + usuario);
    }
}

// FUNCIONES PARA LA LISTA DESPLEGABLE
function toggleDesplegable(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === "block") {
        elemento.style.display = "none";
    } else {
        // Ocultar todos los desplegables
        document.getElementById("mision").style.display = "none";
        document.getElementById("vision").style.display = "none";
        document.getElementById("equipo").style.display = "none";
        
        // Mostrar el seleccionado
        elemento.style.display = "block";
    }
}

// FUNCIONES PARA EL SLIDER DE EMPLEADOS
function empleadoSiguiente() {
    document.getElementById("empleado" + empleadoActual).classList.remove("activo");
    empleadoActual = empleadoActual == 3 ? 1 : empleadoActual + 1;
    document.getElementById("empleado" + empleadoActual).classList.add("activo");
}

function empleadoAnterior() {
    document.getElementById("empleado" + empleadoActual).classList.remove("activo");
    empleadoActual = empleadoActual == 1 ? 3 : empleadoActual - 1;
    document.getElementById("empleado" + empleadoActual).classList.add("activo");
}

// FUNCIONES PARA CAMBIAR ESTILO DEL TEXTO
function cambiarTamano() {
    tamanoLetra = tamanoLetra == 16 ? 20 : (tamanoLetra == 20 ? 24 : 16);
    document.getElementById("texto-about").style.fontSize = tamanoLetra + "px";
}

function cambiarColor() {
    colorLetra = colorLetra == "black" ? "blue" : (colorLetra == "blue" ? "red" : "black");
    document.getElementById("texto-about").style.color = colorLetra;
}
