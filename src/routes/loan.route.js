import express from 'express'
import { LoanController 
} from '../controller/loan.controller.js'

const route = express.Router()

route.post('/register', LoanController)

export default route
