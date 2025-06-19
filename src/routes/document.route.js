import express from 'express'
import { upload } from '../service/file.service.js'
import { UploadController 
} from '../controller/document.controller.js'

const route = express.Router()

route.post('/upload', upload.single('file'), UploadController)

export default route
