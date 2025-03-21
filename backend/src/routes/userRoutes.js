import express from 'express'
import { Login, register } from  '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/login',Login)
userRouter.post('/signup',register)


export default userRouter