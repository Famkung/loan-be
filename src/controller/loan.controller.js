import {
    ResponseService,
  } from '../service/response.service.js'
import { validateRequest } from '../service/request.service.js'
import db from '../../models/index.js';
import moment from 'moment-timezone';
const { loan } = db;

export const LoanController = async (req , res) => {
    try {
        const requiredFields = {
            full_name:  { type: 'string' },
            id_card: { type: 'number', length: 13 },
            birth_date: { type: 'string' },
            email: { type: 'email' },
            phone: { type: 'number', length: 10 },
            address: { type: 'string' },
            job: { type: 'string' },
            income: { type: 'number' },
            company: { type: 'string' },
            experience_years: { type: 'number' },
            loan_amount: { type: 'number' },
            installment_months: { type: 'number' },
            purpose:  { type: 'string' },
          }
        const flagRequest = await validateRequest(req, requiredFields)
        if (!flagRequest) {
          const sendError = {
            message : 'Reuest fail.',
            statusCode: 400,
          }
          ResponseService.sendError(res, sendError)
          return
        }
        const ref_code = req.headers['x-uuid']
        await loan.create({
            reference_code : ref_code,
            full_name: req.body.full_name,
            id_card: req.body.id_card,
            birth_date: req.body.birth_date,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            job: req.body.job,
            income: req.body.income,
            company: req.body.company,
            experience_years: req.body.experience_years,
            loan_amount: req.body.loan_amount,
            installment_months: req.body.installment_months,
            purpose: req.body.purpose,
            status: 'PENDIND'
        })
        const response = { data: null }
          ResponseService.sendSuccess(res, response)    
    } catch (error) {
        console.log(error)
        const sendError = {
            statusCode: 500,
        }
        ResponseService.sendError(res, sendError)
    }
}