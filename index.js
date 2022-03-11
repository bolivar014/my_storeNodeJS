// Inicializamos constante express | servidor
const express = require('express');
// Importamos libreria faker
const faker = require('faker');

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

  // Inicializamos Array de Productos Vacio
  const products = [];

  // Recupero variable size
  const { size } = req.query;

  // Verifico "En caso que no llegue la variable size, lista 10 por defecto"
  const limit = size || 10;

  // Generamos ciclo for para generar registros falsos
  for(let index = 0 ; index < limit ; index++) {
    // Llenamos array products
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  // Retornamos respuesta - JSON
  resp.json(products);
});


// Callback - "Cuando una ruta especifica se cruza con una ruta dinamica, se debe ubicar la función especifica antes de la dinamica"
app.get('/products/filter', (req, resp) => {
  resp.send('Yo soy un filtro...');
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

// Callback - Ruta Listar Usuarios
app.get('/users', (req, resp) => {
  // Recuperamos Variable limit y offset, por medio del get de la URL
  const { limit, offset } = req.query;

  // Validamos que llegue la variable limit y offset
  if(limit && offset) {
    // En caso que lleguen variables, las retornamos
    resp.json({
      limit,
      offset,
    })
  } else {
    // En caso que no lleguen las variables, retornamos
    resp.send('No hay parametros de busqueda');
  }
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
  console.log('Mi Puerto de ejecución, es: ' + port);
});
