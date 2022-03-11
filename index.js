// Inicializamos constante express | servidor
const express = require('express');

// Creamos la app por medio del constructor de ExpressJS
const app = express();

// Inicializamos puerto
const port = 3000;

// Callback
app.get('/', (req, resp) => {
  // Retornamos respuesta.
  resp.send('Hola, mi servidor en express');
});

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Port: ' + port);
});
