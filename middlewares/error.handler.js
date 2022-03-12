// Evento para capturar el error
function logErrors(err, req, resp, next) {
  console.log('logErrors');

  // Depuramos middleware
  console.log(err);

  // Middleware de tipo error
  next(err);
}

// Evento para retornar error
function errorHandler(err, req, resp, next) {
  console.log('errorHandler');

  // Retornamos JSON de error
  resp.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Exporto modulo tipo - Error
module.exports = { logErrors, errorHandler }
