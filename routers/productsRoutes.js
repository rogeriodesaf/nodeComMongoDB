const express = require('express')
const router  = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/',ProductController.showProducts)
router.get('/adicionar',ProductController.addProducts)

module.exports = router
