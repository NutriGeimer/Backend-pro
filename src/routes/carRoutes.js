import express from 'express';
import multer from 'multer';
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
    getCarByName,
    getCarByModel,
    getCarByColor,
    getCarByYear,
} from '../controller/carController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
    '/add',
    upload.single('image'),
    [
        check('carName').notEmpty().withMessage('Car name is required'),
        check('carModel').notEmpty().withMessage('Car model is required'),
        check('brand').notEmpty().withMessage('Brand is required'),
        check('type').notEmpty().withMessage('Type is required'),
        check('capacity').notEmpty().withMessage('Capacity is required'),
        check('gas').notEmpty().withMessage('Gas is required'),
        check('transmission').notEmpty().withMessage('Transmission is required'),
        check('rentPrice').isFloat({ gt: 0 }).withMessage('Rent price must be a positive number'),
        check('carColor').isHexColor().withMessage('Car color must be a valid hex color'),
        check('carDescription').optional().isString().withMessage('Car description must be a string'),
        check('carYear').isInt({ min: 1886 }).withMessage('Car year must be a valid year'),
    ],
    addCar
);

router.put(
    '/update/:id',
    upload.single('image'),
    [
        check('carName').optional().notEmpty().withMessage('Car name is required'),
        check('carModel').optional().notEmpty().withMessage('Car model is required'),
        check('rentPrice').optional().isFloat({ gt: 0 }).withMessage('Rent price must be a positive number'),
        check('carColor').optional().isHexColor().withMessage('Car color must be a valid hex color'),
        check('carDescription').optional().isString().withMessage('Car description must be a string'),
        check('carYear').optional().isInt({ min: 1886 }).withMessage('Car year must be a valid year'),
    ],
    updateCar
);

router.delete('/delete/:id', deleteCar);
router.get('/all', getAllCars);
router.get('/id/:id', getCarById);
router.get('/brand/:brand', getCarByBrand);
router.get('/type/:type', getCarByType);
router.get('/capacity/:capacity', getCarByCapacity);
router.get('/gas/:gas', getCarByGas);
router.get('/transmission/:transmission', getCarByTransmission);
router.get('/name/:carName', getCarByName);
router.get('/model/:carModel', getCarByModel);
router.get('/color/:carColor', getCarByColor);
router.get('/year/:carYear', getCarByYear);

export default router;