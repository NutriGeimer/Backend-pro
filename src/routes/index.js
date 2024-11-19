import { Router } from 'express'
import clientRoutes from './clientRoutes.js'
import authRoutes from './authRoutes.js'
import productRoutes from './productRoutes.js'

const router = Router()

router.use('/client', clientRoutes)
router.use('/auth', authRoutes)
router.use('/product', productRoutes)

export default router