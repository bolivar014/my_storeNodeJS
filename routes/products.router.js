// Inicializamos constante express | servidor
const { response } = require('express');
const express = require('express');

// importamos instancia de products services.
const ProductsService = require('./../services/product.service');

// Creamos nueva instancia de ProductsService
const service = new ProductsService();

// router
const router = express.Router();

// Callback - Ruta Listar Productos
router.get('/', async (req, resp) => {
  // Obtenemos nueva instancia de productos
  const products = await service.find();

  // Retornamos respuesta - JSON
  resp.json(products);
});

// Callback - "Cuando una ruta especifica se cruza con una ruta dinamica, se debe ubicar la función especifica antes de la dinamica"
router.get('/filter', async (req, resp) => {
  resp.send('Yo soy un filtro...');
});

// Callback - Retorna JSON asociado a un producto en especifico
router.get('/:id', async (req, resp, next) => {
  try {
    // Constante para obtener el Request del ID del producto
    const { id } = req.params;

    // Instancio el servicio findOne para buscar el ID del producto a consultar
    const product = await service.findOne(id);

    // Retornamos JSON
    resp.json(product);
  } catch (error) {
    // Retornamos mensaje de error
    next(error);
  }
});

// Post - Creación de Producto
router.post('/', async (req, resp) => {
  // Recuperamos cuerpo de formulario
  const body = req.body;

  // Creamos una instancia de nuevo producto
  const newProduct = await service.create(body);

  // Retornamos JSON "retorna STATUS 201 = Created"
  resp.status(201).json(newProduct);
});

// Patch - Actualización de Productos de manera parcial | no es necesario enviar todos los datos del formulario
router.patch('/:id', async (req, resp, next) => {
  try {
    // Recuperamos cuerpo de formulario
    const body = req.body;
    const { id } = req.params;

    // Invocamos servicio update product y enviamos id del producto y el cuerpo
    const product = await service.update(id, body);

    // Retornamos JSON
    resp.json(product);
  } catch(err) {
    // Retornamos 404 - not found y retornamos mensaje de error
    next(err);
  }


});

// DELETE - Eliminación de Productos
router.delete('/:id', async (req, resp) => {
  // Recuperamos id de producto a eliminar
  const { id } = req.params;

  // Invoco servicio eliminar producto
  const deleteProd = await service.delete(id);

  // Retornamos JSON
  resp.json(deleteProd);

});

// Exportamos el modulo router
module.exports = router;
