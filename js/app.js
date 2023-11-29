class UserFormData {
    name;
    lastname;
    email;
    comment;
    region;

    constructor(nombre, apellido, email, comentario, region) {
        this.name = nombre;
        this.lastname = apellido;
        this.email = email;
        this.comment = comentario;
        this.region = region;
    }
}

let dataUser = [];

document.getElementById("form-container-different-main").addEventListener("click", getFormData);

function getFormData(event) {
    console.log("Formulario enviado");
    event.preventDefault();
    const nombre = document.querySelectorAll("#name").value;
    const apellido = document.querySelectorAll("#lastname").value;
    const email = document.querySelectorAll("#email").value;
    const comentario = document.querySelectorAll("#comment").value;
    const region = document.querySelectorAll("#region").value;
    const userFormData = new UserFormData(nombre, apellido, email, comentario, region);
    dataUser.push(userFormData);
    return dataUser;
}



document.getElementsByClassName("btn.btn-dark").addEventListener("click", function() {

    document.querySelectorAll("#name").value = "";
    document.querySelectorAll("#lastname").value = "";
    document.querySelectorAll("#email").value = "";
    document.querySelectorAll("#region").value = "";
    document.querySelectorAll("#comment").value = "";
});

