import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDpD3S5xdZfiYZtHAQxvwR5ueyu4yd2C4A",
    authDomain: "data-base-dhg.firebaseapp.com",
    projectId: "data-base-dhg",
    storageBucket: "data-base-dhg.appspot.com",
    messagingSenderId: "220588715788",
    appId: "1:220588715788:web:dad9d481bddf9e5f2aa329",
    measurementId: "G-6TCYSMH4HS"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
async function agregarDatos() {
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let comentario = document.querySelector("#comment").value;
    let region = document.querySelector("#region").value;
    let userFormData = new User(nombre, apellido, email, comentario, region);
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: userFormData.name,
            lastname: userFormData.lastname,
            email: userFormData.email,
            comment: userFormData.comment,
            region: userFormData.region,
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    dataUser.push(userFormData);
    guardarLocal ("dataUser", JSON.stringify(dataUser));
    return dataUser;
}

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
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

console.log(dataUser);

borrarDatos();

// Creación de una clase para cotizador de los precios de cada plan

class Cotizador {
    plan = plan;
    precio = precio;
    cuota = cuota;

    constructor(plan, precio, cuota) {
        this.plan = plan;
        this.precio = precio;
        this.cuota = cuota;
    }

    calcularPrecio () {
        return (this.plan = (this.precio / this.cuota))
    }
}

const hear = document.getElementById("menu__drop", "value__of__money")
if (hear === hear.addEventListener("mouseover", calcularPrecio)) {
    calcularPrecio()
}


async function calcularPrecio () {
    const plan = document.getElementById("menu__drop").value
    const precio = document.getElementById("value__of__money").value
    const cuota = document.getElementById("cuotas").value

    const cotizador = new Cotizador(plan, precio, cuota)
    const precioFinal = await cotizador.calcularPrecio()
    precioFinal = await precioFinal.json()

    // try // catch para manejar errores

    return precioFinal

}

// Creación de una calculadora de precios de cada plan
// irá indexada en el método de pago

const planes = [1, 3, 6, 9, 12, 16, 24]
const cuotas = [1, 3, 6]
const valorPlanes = [16000, 13000, 11000]
const valorPAES = 20000
const valorTutoria = 18500
const menuDrop = document.getElementById("menu__drop")
const tipoPlan = document.getElementById("value__of__money")
const laCuota = document.getElementById("cuotas")
const compraCompleta = document.getElementById("plan__result")

menuDrop.addEventListener("change", calcularPrecio)
tipoPlan.addEventListener("change", calcularPrecio)
laCuota.addEventListener("change", calcularPrecio)

function calcularPrecio(a, b, c) {
    const planSeleccionado = menuDrop.value
    const duracionSeleccionada = tipoPlan.value
    const seleccionCuota = laCuota.value
    let precio = 0
    let tiempoCuotas = 0
    let numeroCuota = 0

    if (planSeleccionado === "Plan Focalizado") {
        precio = valorPlanes[0]
    } else if (planSeleccionado === "Plan Premium") {
        precio = valorPlanes[1]
    } else if (planSeleccionado === "Plan Deluxe") {
        precio = valorPlanes[2]
    } else if (planSeleccionado === "Plan PAES") {
        precio = valorPAES
    }

    if (duracionSeleccionada === "1 mes") {
        tiempoCuotas = planes[0]
    } else if (duracionSeleccionada === "3 meses") {
        tiempoCuotas = planes[1]
    } else if (duracionSeleccionada === "6 meses") {
        tiempoCuotas = planes[2]
    } else if (duracionSeleccionada === "9 meses") {
        tiempoCuotas = planes[3]
    } else if (duracionSeleccionada === "1 año") {
        tiempoCuotas = planes[4]
    } else if (duracionSeleccionada === "1 año y medio") {
        tiempoCuotas = planes[5]
    } else if (duracionSeleccionada === "2 años") {
        tiempoCuotas = planes[6]
    }
    
    if (seleccionCuota === "0") {
        numeroCuota = cuotas[0]
    } else if (seleccionCuota === "3") {
        numeroCuota = cuotas[1]
    } else if (seleccionCuota === "6") {
        numeroCuota = cuotas[2]
    }

    a = precio
    b = tiempoCuotas
    c = numeroCuota

    let calculoFinal = parseInt(a * b)
    let precioCuota = Math.floor(calculoFinal / c)

    if (precioCuota === calculoFinal) {
        precioCuota = calculoFinal
    }

    return compraCompleta.innerHTML = `
    <table id="tabla__pagos">
        <thead>
            <tr>
                <th>Orden de compra</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>${planSeleccionado}</td>
                    <br>
                    <td>${duracionSeleccionada}</td>
                    <br>
                    <td>${precio}</td>
                </tr>
                    <td>Cálculo final</td>
                    <br>
                    <td>${calculoFinal}</td>
                    <br>
                    <td>${precioCuota}</td>
                </tr>
        </tbody>
    </table>`
}

compraCompleta = fetch ("http://localhost:8080/planes.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

compraCompleta.style.width = "50%"
compraCompleta.style.margin = "auto"
compraCompleta.style.border = "1px solid black"
compraCompleta.style.borderRadius = "10px"
compraCompleta.style.padding = "1rem"
compraCompleta.style.backgroundColor = "#ebebeb"
compraCompleta.style.color = "black"

// crear estilos dentor de la tabla generada

const tablaPagos = document.getElementById("tabla__pagos")
const tablaPagosTh = document.getElementsByTagName("th")
const tablaPagosTd = document.getElementsByTagName("td")

tablaPagosTd.style.border = "1px solid black"
tablaPagosTd.style.padding = "1rem"
tablaPagosTd.style.display = "flex" 

// Pondré algunas decoraciones por acá

let cardTitles = document.getElementsByClassName('card-title');

for (let i = 0; i < cardTitles.length; i++)  {
    cardTitles[i].addEventListener("mouseover",function(e) {
        e.target.style.color = "red";
    });

    cardTitles[i].addEventListener("mouseout",function(e) {
        e.target.style.color = "black";
    });
};

let containerMouse1 = document.getElementsByClassName("card-desc")[0];
let containerMouse2 = document.getElementsByClassName("card-desc-2")[1];
let containerMouse3 = document.getElementsByClassName("card-desc-3")[2];
let containerMouse4 = document.getElementsByClassName("card-desc-4")[3];

if (containerMouse1 = containerMouse1.addEventListener("click",function(e) {
    e.preventDefault();
    e.target.innerHTML = "You clicked me!";
}));

