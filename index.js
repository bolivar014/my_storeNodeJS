// Inicializamos constante express | servidor
const express = require('express');

const routerApi = require('./routes');
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

// Asignamos control de rutas | llamamos función que se encarga de enrutar
routerApi(app);

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Puerto de ejecución, es: ' + port);
});
