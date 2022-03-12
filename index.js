// Inicializamos constante express | servidor
const express = require('express');

// Constructor routes | app
const routerApi = require('./routes');

// Exporto middlewares de error
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// Creamos la app por medio del constructor de ExpressJS
const app = express();

// Inicializamos puerto
const port = 3000;

// Middleware nativo EXPRES el cual permite retornar cadenas JSON
app.use(express.json());

// Callback - HOME
app.get('/', (req, resp) => {
  // Retornamos respuesta.
  resp.send('Hola, mi servidor en express');
});

// Callback - Ruta Productos
app.get('/new_route', (req, resp) => {
  resp.send('Hola, esto es una nueva ruta');
});

// Asignamos control de rutas | llamamos función que se encarga de enrutar
routerApi(app);

//
app.use(logErrors);

//
app.use(boomErrorHandler);

//
app.use(errorHandler);

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Puerto de ejecución, es: ' + port);
});
