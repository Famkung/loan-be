import express from 'express'
import Document from './document.route.js'
import Loan from './loan.route.js'

const route = express.Router()

route.use('/document' , Document)
route.use('/loan' , Loan)

export default route