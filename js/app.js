class User {
    name;
    lastname;
    email;
    comment;
    region;
    constructor(name, lastname, email, comment, region) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.comment = comment;
        this.region = region;
    }
}
// Array para almacenar los datos del formulario

let dataUser = [];
document.querySelector(".btn-send-reset").addEventListener(
    "click", (e) => {
    e.preventDefault();
    agregarDatos();
});

// Función para agregar datos al array
function agregarDatos() {
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let comentario = document.querySelector("#comment").value;
    let region = document.querySelector("#region").value;

    let userFormData = new User(nombre, apellido, email, comentario, region);
    dataUser.push(userFormData);

    borrarDatos();
}

console.log(dataUser);

// Función para borrar datos del formulario
function borrarDatos() {
    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#region").value = "";
    document.querySelector("#comment").value = "";
}