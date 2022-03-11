// Exportamos el modulo de exporte products.router
const productsRouter = require('./products.router');
// Exportamos el modulo de exporte users.router
const usersRouter = require('./users.router');

// Archivo de configuración Rutas
function routerApi(app) {
  // Se define todo el endpoint y router de products
  app.use('/products', productsRouter);
  // Se define todo el endpoint y router de products
  app.use('/users', usersRouter);

}

// Exportamos modulo routerApi
module.exports = routerApi;
