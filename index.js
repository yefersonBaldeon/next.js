// Importar el módulo express
const express = require('express');
const { faker } = require("@faker-js/faker");

const routerApi=require("./routes/index")

// Crear una instancia de la aplicación Express
const app = express();
const port = 3000;


// Definir una ruta para la ruta raíz ("/") que responda a solicitudes GET


app.use(express.json())


routerApi(app);

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});






app.get('/nueva-ruta', (req, res) => {
    res.send('¡Hola, soy una nueva ruta');
});


app.get('/users', (req, res) => {

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
