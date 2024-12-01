import reviewService from '../services/reviewService.js';

const ReviewService = new reviewService();

const addReview = async (req, res) => {
    try {
        const reviewId = await ReviewService.addReview(req.body);
        res.status(201).json({
            success: true,
            reviewId,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        await ReviewService.deleteReview(id);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewService.getAllReviews();
        res.status(200).json({
            success: true,
            reviews,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getReviewsByClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const reviews = await ReviewService.getReviewsByClient(clientId);
        res.status(200).json({
            success: true,
            reviews,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export {
    addReview,
    deleteReview,
    getAllReviews,
    getReviewsByClient,
};