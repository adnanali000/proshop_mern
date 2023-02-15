import express from 'express'
import { getProducts , getProductById } from '../controllers/productController.js'

const router = express.Router()

//fetch all products
router.route('/').get(getProducts)

//fetch single product
router.route('/:id').get(getProductById)


export default router