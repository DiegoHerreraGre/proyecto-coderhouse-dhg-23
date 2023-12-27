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
