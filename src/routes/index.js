import { Router } from 'express';
import clientRoutes from './clientRoutes.js';
import authRoutes from './authRoutes.js';
import carRoutes from './carRoutes.js';
import rentalRoutes from './rentalRoutes.js'; // Asegúrate de tener este archivo

const router = Router();

// Registrar las rutas en sus respectivos endpoints
router.use('/client', clientRoutes);
router.use('/auth', authRoutes);
router.use('/car', carRoutes); // Para las rutas de car
router.use('/rental', rentalRoutes); // Para las rutas de rental

export default router;