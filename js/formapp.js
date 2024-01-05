class User {
    name
    lastname
    email
    comment
    region
    constructor(name, lastname, email, comment, region) {
        this.name = name
        this.lastname = lastname
        this.email = email
        this.comment = comment
        this.region = region
    }
}

let dataUser = []

function agregarDatos() {
    return new Promise((resolve, reject) => {
        let nombre = document.querySelector("#name").value
        let apellido = document.querySelector("#lastname").value
        let email = document.querySelector("#email").value
        let comentario = document.querySelector("#comment").value
        let region = document.querySelector("#region").value

        let userFormData = new User(nombre, apellido, email, comentario, region)
        dataUser.push(userFormData)

        guardarLocal ("dataUser", JSON.stringify(dataUser))

        borrarDatos()

        resolve(dataUser)
    })
}

document.querySelector(".btn-send-reset").addEventListener("click", (e) => {
    e.preventDefault()
    agregarDatos().then(dataUser => {
        console.log(dataUser)
    }).catch(err => {
        console.error(err)
    })
})

function borrarDatos() {
    document.querySelector("#name").value = ""
    document.querySelector("#lastname").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#region").value = ""
    document.querySelector("#comment").value = ""
}

const guardarLocal = (dato, valor) => {
    localStorage.setItem(dato, valor)
}

const varStorage = JSON.parse(localStorage.getItem("dataUser"))
const auxVar = []

for (const i of varStorage) {
    auxVar.push(new User(i.name, i.lastname, i.email, i.comment, i.region))
}

console.log(varStorage)

const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    Object.fromEntries(formData)
})

console.log(dataUser)

borrarDatos()

const sendJson = dataUser => {
    return fetch("http://127.0.0.1:5500/users.json", {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
}

agregarDatos().then(dataUser => {
    console.log(dataUser)
    sendJson(dataUser).then(response => {
        console.log(response)
    }).catch(err => {
        console.error(err)
    })
}).catch(err => {
    console.error(err)
})
