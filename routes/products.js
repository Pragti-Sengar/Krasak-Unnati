const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for getting all products
router.get('/', productController.getAllProducts);

// Route for adding a new product
router.post('/', productController.addProduct);

// Route for searching a product by name
router.get('/search', productController.searchProductByName);

module.exports = router;
