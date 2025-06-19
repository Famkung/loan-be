import {
    ResponseService,
  } from '../service/response.service.js'

export const UploadController =  async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
          return res.status(400).json({
            status: 'error',
            message: 'No file uploaded.',
          });
        }
    
        const response = {
          data: {
            filename: file.filename,
            originalName: file.originalname, 
            path: file.path,
          }
        }
        ResponseService.sendSuccess(res, response)     
    } catch (error) {
        console.log(error)
        const sendError = {
            statusCode: 500,
          }
          ResponseService.sendError(res, sendError)
    }
}