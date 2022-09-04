// Import Controllers

const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')
const express = require('express')
const router = express.Router()

// use Router

router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProdcuts)

// Review 

router.post('/addReview', reviewController.addReview)

router.get('/allReviews', reviewController.getAllReviews)

// Get Product Review

router.get('/getProductReviews/:id', productController.getProductReviews)

// ID based

router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router