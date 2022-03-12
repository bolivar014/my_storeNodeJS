// Inicializamos constante express | servidor
const express = require('express');
// Exportamos el modulo de exporte products.router
const productsRouter = require('./products.router');
// Exportamos el modulo de exporte users.router
const usersRouter = require('./users.router');
// Exportamos el modulo de exporte categories.router
const categoriesRouter = require('./categories.router');

// Archivo de configuración Rutas
function routerApi(app) {
  // Constructor router
  const router = express.Router();

  // Formateando URL api.example.com/api/v1/XXXX
  app.use('/api/v1', router);
    // Se define todo el endpoint y router de products
    router.use('/products', productsRouter);
    // Se define todo el endpoint y router de users
    router.use('/users', usersRouter);
    // Se define todo el endpoint y router de categories
    router.use('/categories', categoriesRouter);

}

// Exportamos modulo routerApi
module.exports = routerApi;
