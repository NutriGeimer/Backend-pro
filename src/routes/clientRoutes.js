import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';

import {
    addClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByUsername,
    updateFavoriteCars,
    getFavoritesByClient,
} from '../controller/clientController.js';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post(
    '/add',
    upload.single('image'),
    [
        check('fullname').notEmpty().withMessage('Name is required'),
        check('username').notEmpty().withMessage('Username is required'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    addClient
);

router.put('/update/:id', upload.single('image'), updateClient);
router.delete('/delete/:id', deleteClient);
router.get('/all', getAllClients);
router.get('/id/:id', getClientById);
router.get('/username/:username', getClientByUsername);

// Rutas para favoritos
router.put('/favorites', updateFavoriteCars);
router.get('/favorites/:clientId', getFavoritesByClient);

export default router;
