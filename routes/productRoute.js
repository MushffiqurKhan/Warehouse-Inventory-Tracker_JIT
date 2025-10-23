const express = require('express');
const router = express.Router();
const {
  addProduct,
  receiveShipment,
  fulfillOrder,
  getAllProducts,
} = require('../controllers/productController');

router.post('/add', addProduct);
router.put('/receive/:id', receiveShipment);
router.post('/fulfill/:id', fulfillOrder);
router.get('/', getAllProducts);

module.exports = router;
