// Inicializamos constante express | servidor
const express = require('express');
// Importamos libreria faker
const faker = require('faker');
// router
const router = express.Router();

// Callback - Ruta Listar Productos
router.get('/', (req, resp) => {
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
router.get('/filter', (req, resp) => {
  resp.send('Yo soy un filtro...');
});

// Callback - Retorna JSON asociado a un producto en especifico
router.get('/:id', (req, resp) => {
  // Constante para obtener el Request del ID del producto
  // const id = req.params.id;
  const { id } = req.params;

  resp.json({
    id,
    name: 'Product 2',
    price: 2300
  })
});

//
router.post('/', (req, resp) => {
  const body = req.body;

  resp.json({
    message: "Product created",
    data: body,
  })
});
// Exportamos el modulo router
module.exports = router;
