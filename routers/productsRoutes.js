const express = require('express')
const router  = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/',ProductController.showProducts)
router.get('/create',ProductController.createProduct)
router.post('/create',ProductController.createProductPost)
router.get('/:id',ProductController.getProduct)

module.exports = router
