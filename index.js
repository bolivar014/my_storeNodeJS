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

// Callback - Ruta Listar Productos
app.get('/products', (req, resp) => {
  // resp.send('Hola, ruta de productos');

  // Retornamos respuesta - JSON
  resp.json([
    {
      name: 'Product 1',
      price: 1000
    },{
      name: 'Product 2',
      price: 2300
    }
  ]);
});

// Callback - Retorna JSON asociado a un producto en especifico
app.get('/products/:id', (req, resp) => {
  // Constante para obtener el Request del ID del producto
  // const id = req.params.id;
  const { id } = req.params;

  resp.json({
    id,
    name: 'Product 2',
    price: 2300
  })
});

// Callback - Categoria | Producto ID
app.get('/categories/:categoryId/products/:productId', (req, resp) => {
  // Recolectamos ID de categoria y producto
  const { categoryId, productId } = req.params;

  // Retornamos JSON
  resp.json({
    categoryId,
    productId,
  });
});


// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Port: ' + port);
});
