function toggleAcordeon(index) {
    var cuerpos = document.querySelectorAll('.acordeon-cuerpo');
    cuerpos[index].style.display = cuerpos[index].style.display === 'block' ? 'none' : 'block';
}
function buscar() {
    var textoBusqueda = document.getElementById("barraBusqueda").value;
    console.log("Búsqueda realizada: " + textoBusqueda);
}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contrasena);
}

function irARegistro() {
    window.location.href = "productos.html";
}

function irANoticias() {
    window.location.href = "menus.html";
}