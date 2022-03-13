// Esquema de validación de datos | Formularios del modulo "/products"

// importamos librerias
const Joi = require('joi');


// Validamos formatos de los campos
const id = Joi.string().uuid();
// name string | alfanumerico | min | max
const name = Joi.string().alphanum().min(3).max(15);
// price numerico | entero | min
const price = Joi.number().integer().min(10);

// Creamos ProductsSchema con objetos de variables requeridas
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required()
});

// Creamos UpdateProductsSchema con objetos name y price para la actualización, no requerida
const updateProductSchema = Joi.object({
  name: name,
  price: price
});

// Valida que llegue un id en formato correcto, en caso tal que sea valido permite continuar ejecución.
const getProductSchema = Joi.object({
  id: id.required(),
});

// Exportamos modulos
module.exports = { createProductSchema, updateProductSchema, getProductSchema };
