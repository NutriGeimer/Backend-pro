import express from 'express';
import {
    addReview,
    deleteReview,
    getAllReviews,
    getReviewsByClient,
} from '../controller/reviewController.js';

const router = express.Router();

router.post('/add', addReview);
router.delete('/delete/:id', deleteReview);
router.get('/all', getAllReviews);
router.get('/client/:clientId', getReviewsByClient);

export default router;