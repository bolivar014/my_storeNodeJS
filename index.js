// Inicializamos constante express | servidor
const express = require('express');

// Constructor routes | app
const routerApi = require('./routes');

// Creamos la app por medio del constructor de ExpressJS
const app = express();

// Inicializamos puerto
const port = 3000;

// Callback - HOME
app.get('/', (req, resp) => {
  // Retornamos respuesta.
  resp.send('Hola, mi servidor en express');
});

// Callback - Ruta Productos
app.get('/new_route', (req, resp) => {
  resp.send('Hola, esto es una nueva ruta');
});

// Asignamos control de rutas | llamamos función que se encarga de enrutar
routerApi(app);

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Puerto de ejecución, es: ' + port);
});
