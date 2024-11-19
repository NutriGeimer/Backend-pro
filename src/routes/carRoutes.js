import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { check } from 'express-validator';

import {
    addCar,
    updateCar,
    deleteCar,
    getAllCars,
    getCarById,
    getCarByBrand,
    getCarByType,
    getCarByCapacity,
    getCarByGas,
    getCarByTransmission,
} from '../controller/carController.js';

const router = express.Router();

router.post(
    '/add',
    [
        check('brand').notEmpty().withMessage('Brand is required'),
        check('type').notEmpty().withMessage('Type is required'),
        check('capacity').notEmpty().withMessage('Capacity is required'),
        check('gas').notEmpty().withMessage('Gas is required'),
        check('transmission').notEmpty().withMessage('Transmission is required'),
    ],
    addCar
);

router.put('/update/:id', updateCar);
router.delete('/delete/:id', deleteCar);
router.get('/all', getAllCars);
router.get('/id/:id', getCarById);
router.get('/brand/:brand', getCarByBrand);
router.get('/type/:type', getCarByType);
router.get('/capacity/:capacity', getCarByCapacity);
router.get('/gas/:gas', getCarByGas);
router.get('/transmission/:transmission', getCarByTransmission);

export default router;
