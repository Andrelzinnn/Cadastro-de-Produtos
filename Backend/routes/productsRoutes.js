const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.getProducts);
router.post('/save', productController.saveProduct);

module.exports = router;