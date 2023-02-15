import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'


const app = express()

app.use(express.json())

//mongo db
connectDB()

dotenv.config()

app.get('/',(req,res)=>{
    res.send('API is running...')
})

//product routes
app.use('/api/products',productRoutes)

//user routes
app.use('/api/users',userRoutes)

//errors
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))