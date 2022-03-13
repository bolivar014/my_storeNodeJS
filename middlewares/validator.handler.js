// Importamos libreria boom
const boom = require('@hapi/boom'); // Control de error
// Esquema de validación de datos
function validatorHandler(schema, property) {
  // Retornamos middleware dinamico
  return (req, resp, next) => {
    // Obtiene la data desde un request desde diferentes tipos peticiones: POST - QUERY - PARAMS
    const data = req[property];
    // validamos esquema de datos | error
    const { error } = schema.validate(data);

    // En caso que suceda una ejecución incorrecta | type 400
    if(error) {
      // Retornamos request con boom
      next(boom.badRequest(error));
    }

    // En caso que se valide correctamente, se le permite terminar de ejecutar
    next();
  }
}

// Exportamos modulo
module.exports = validatorHandler;
