import express from 'express'
import { authUser,getUserProfile,registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


const router = express.Router()

//auth user route
router.post('/login',authUser)

//user profile
router.route('/profile').get(protect,getUserProfile)

//user register
router.route('/').post(registerUser)

export default router