// Importar el módulo express
const express = require('express');
const { faker } = require("@faker-js/faker");

const routerApi = require("./routes/index")
const cors = require("cors")

// Crear una instancia de la aplicación Express
const app = express();

const port = process.env.PORT || 3000;


// Definir una ruta para la ruta raíz ("/") que responda a solicitudes GET

app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));

app.use(cors(options))




app.get('/api', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});


routerApi(app);




app.get('/api/nueva-ruta', (req, res) => {
    res.send('¡Hola, soy una nueva ruta');
});


app.get('/api/users', (req, res) => {

    const { limit, offset } = req.query
    if (limit && offset) {

        res.json({
            limit,
            offset
        })
    }
    else {
        res.send("no hay parametros")
    }
});


app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});
