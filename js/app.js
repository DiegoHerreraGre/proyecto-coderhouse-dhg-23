const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const WebSocket = require("ws")
const cors = require("cors")
const fetch = require("node-fetch")

const app = express()

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message)
    })

    ws.send('something')
})

app.use(cors())

app.use(bodyParser.json())

app.post('/users.json', (req, res) => {
    const dataUser = req.body
    fs.writeFile('users.json', JSON.stringify(dataUser), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('Hubo un error al guardar los datos')
        } else {
            res.send('Datos guardados con éxito')
        }
    })
})

app.listen(3000, () => console.log('Servidor escuchando en el puerto 5500'))

fetch("http://127.0.0.1:5500/pages/contact.html")
    .then((res) => res.text())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))