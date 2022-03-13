// Inicializamos constante express | servidor
const express = require('express');

// Constructor routes | app
const routerApi = require('./routes');

// Importamos libreria cors
const cors = require('cors');

// Exporto middlewares de error
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// Creamos la app por medio del constructor de ExpressJS
const app = express();

// Inicializamos puerto
const port = 3000;

// Middleware nativo EXPRES el cual permite retornar cadenas JSON
app.use(express.json());


// Habilitamos cualesquier dominio dentro del mismo origen
const whitelist = ['http://localhost:8080', 'https://myapp.com'];

// Configuramos options de cors validando que sean dominios validos
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)) {
      // En caso que la URL este permitida, ejecuta callback
      callback(null, true);
    } else {
      // Cuando es una URL no valida, ejecuta error
      callback(new Error('No permitido'));
    }
  }
}

// Ejecutamos cors
app.use(cors());

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

// Control - Logs de error
app.use(logErrors);

// Control - BoomError
app.use(boomErrorHandler);

// Control Error
app.use(errorHandler);

// Escucha de puerto
app.listen(port, () => {
  console.log('Mi Puerto de ejecución, es: ' + port);
});
