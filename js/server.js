const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contacto', (req, res) => {
    console.log(req.body);
    res.send('Formulario recibido');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});