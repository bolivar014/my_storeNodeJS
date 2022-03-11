// Exportamos el modulo de exporte products.router
const productsRouter = require('./products.router');
// Exportamos el modulo de exporte users.router
const usersRouter = require('./users.router');
// Exportamos el modulo de exporte categories.router
const categoriesRouter = require('./categories.router');

// Archivo de configuración Rutas
function routerApi(app) {
  // Se define todo el endpoint y router de products
  app.use('/products', productsRouter);
  // Se define todo el endpoint y router de users
  app.use('/users', usersRouter);
  // Se define todo el endpoint y router de categories
  app.use('/categories', categoriesRouter);

}

// Exportamos modulo routerApi
module.exports = routerApi;
