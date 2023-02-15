import express from 'express'
import { authUser,getUserProfile } from '../controllers/userController.js'

const router = express.Router()

//auth user route
router.post('/login',authUser)

//user profile
router.route('/profile').get(getUserProfile)


export default router