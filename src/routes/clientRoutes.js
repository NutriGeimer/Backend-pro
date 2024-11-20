import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { check } from 'express-validator'
import multer from 'multer'

import {
    addClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByUsername
} from '../controller/clientController.js'

const upload = multer ({ storage: multer.memoryStorage() })
const router = express.Router()

router.post(
    '/add',
    //authMiddleware,
    upload.single('image'),
    [
        check('fullname').notEmpty().withMessage('Name is required'),
        check('username').notEmpty().withMessage('Username is required'),
        check('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    ],
    addClient
)

router.put('/update/:id', /*authMiddleware,*/ upload.single('image'), updateClient)
router.delete('/delete/:id', /*authMiddleware,*/ deleteClient)
router.get('/all', /*authMiddleware,*/ getAllClients)
router.get('/id/:id', /*authMiddleware,*/ getClientById)
router.get('/username/:username', /*authMiddleware,*/ getClientByUsername)

export default router