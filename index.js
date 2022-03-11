// Inicializamos constante express | servidor
const express = require('express');

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

// Callback - Ruta Productos
app.get('/products', (req, resp) => {
  // resp.send('Hola, ruta de productos');

  // Retornamos respuesta - JSON
  resp.json({
    name: 'Product 1',
    price: 1000
  });
});

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Port: ' + port);
});
