import { Router } from 'express';
import clientRoutes from './clientRoutes.js';
import authRoutes from './authRoutes.js';
import carRoutes from './carRoutes.js';
import rentalRoutes from './rentalRoutes.js';
import reviewRoutes from './reviewRoutes.js'; // Add this line

const router = Router();

// Register the routes at their respective endpoints
router.use('/client', clientRoutes);
router.use('/auth', authRoutes);
router.use('/car', carRoutes);
router.use('/rental', rentalRoutes);
router.use('/reviews', reviewRoutes); // Add this line

export default router;