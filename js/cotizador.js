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

// Luego haremos una integración con el DOM de pay.html para que active la función de cotizar