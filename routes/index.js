// Exportamos el modulo de exporte products.router
const productsRouter = require('./products.router');

// Archivo de configuración Rutas
function routerApi(app) {
  // Se define todo el endpoint y router de products
  app.use('/products', productsRouter);

}

// Exportamos modulo routerApi
module.exports = routerApi;
