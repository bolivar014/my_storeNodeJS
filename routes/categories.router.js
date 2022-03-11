// Inicializamos constante express | servidor
const express = require('express');
// router | categories
const router = express.Router();

// Callback - Categoria | Producto ID
router.get('/:categoryId/products/:productId', (req, resp) => {
  // Recolectamos ID de categoria y producto
  const { categoryId, productId } = req.params;

  // Retornamos JSON
  resp.json({
    categoryId,
    productId,
  });
});

// Exportamos modulo router
module.exports = router;
