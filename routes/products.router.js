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

  if(id === 999) {
    // Evento cuando recibe un ID incorrecto "retorna STATUS 404 - NOT FOUND"
    resp.status(404).json({
      message: 'not found'
    })
  } else {
    // Evento cuando se ejecuta correctamente "retorna STATUS 200 = OK"
    resp.status(200).json({
      id,
      name: 'Product 2',
      price: 2300
    })
  }

});

// Post - Creación de Producto
router.post('/', (req, resp) => {
  // Recuperamos cuerpo de formulario
  const body = req.body;

  // Retornamos JSON "retorna STATUS 201 = Created"
  resp.status(201).json({
    message: "Product created",
    data: body,
  })
});

// Patch - Actualización de Productos de manera parcial | no es necesario enviar todos los datos del formulario
router.patch('/:id', (req, resp) => {
  // Recuperamos cuerpo de formulario
  const body = req.body;
  const { id } = req.params;

  // Retornamos JSON
  resp.json({
    message: "Product update",
    data: body,
    id,
  })
});

// DELETE - Eliminación de Productos
router.delete('/:id', (req, resp) => {
  // Recuperamos id de producto a eliminar
  const { id } = req.params;

  // Retornamos JSON
  resp.json({
    message: "Product delete",
    id,
  })
});
// Exportamos el modulo router
module.exports = router;
