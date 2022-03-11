// Inicializamos constante express | servidor
const express = require('express');
// Router users
const router = express.Router();

// Callback - Ruta Listar Usuarios
router.get('/', (req, resp) => {
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

// Exportamos modulo users.
module.exports = router;
