import express from 'express';
import {
    addRental,
    updateRental,
    deleteRental,
    getRentalById,
    getRentalsByClient,
    getRentalsByCar,
} from '../controller/rentalController.js';

const router = express.Router();

router.post('/add', addRental);
router.put('/update/:id', updateRental);
router.delete('/delete/:id', deleteRental);
router.get('/id/:id', getRentalById);
router.get('/client/:clientId', getRentalsByClient);
router.get('/car/:carId', getRentalsByCar);

export default router;
