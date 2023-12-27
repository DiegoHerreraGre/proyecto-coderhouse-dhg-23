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

let dataUser = [];
document.querySelector(".btn-send-reset").addEventListener(
    "click", (e) => {
    e.preventDefault();
    agregarDatos();
});

function agregarDatos() {
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let comentario = document.querySelector("#comment").value;
    let region = document.querySelector("#region").value;

    let userFormData = new User(nombre, apellido, email, comentario, region);
    dataUser.push(userFormData);

    guardarLocal ("dataUser", JSON.stringify(dataUser));

    borrarDatos();
}

console.log(dataUser);

function borrarDatos() {
    document.querySelector("#name").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#region").value = "";
    document.querySelector("#comment").value = "";
}

let filtrarRegion = document.querySelector("#region");

filtrarRegion.addEventListener("change", (e) => {
    let region = e.target.value;
    const filtroRegion = dataUser.filter((user) => user.region === region);
    console.log(filtroRegion);
});

const guardarLocal = (dato, valor) => {
    localStorage.setItem(dato, valor);
}

const varStorage = JSON.parse(localStorage.getItem("dataUser"));
const auxVar = [];

for (const i of varStorage) {
    auxVar.push(new User(i.name, i.lastname, i.email, i.comment, i.region));
};

console.log(varStorage);

// Con un servidor podría funcionar el fetch de abajo. Faltaría añadir un servidor que reciba los datos y los almacene en una base de datos.

fetch('http://localhost:3000/contacto', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

borrarDatos();





