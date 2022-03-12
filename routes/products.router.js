// Inicializamos constante express | servidor
const express = require('express');

// importamos instancia de products services.
const ProductsService = require('./../services/product.service');

// Creamos nueva instancia de ProductsService
const service = new ProductsService();

// router
const router = express.Router();

// Callback - Ruta Listar Productos
router.get('/', (req, resp) => {
  // Obtenemos nueva instancia de productos
  const products = service.find();

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

  // Instancio el servicio findOne para buscar el ID del producto a consultar
  const product = service.findOne(id);

  // Retornamos JSON
  resp.json(product);
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
