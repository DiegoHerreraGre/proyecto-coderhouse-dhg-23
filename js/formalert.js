const formSendBtn = document.querySelector("#form");

let aux = document.getElementById("btn-send");

aux.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Puede revisar en consola los arrays con la información ingresada");
    alert("Formulario ingresado correctamente")
});
