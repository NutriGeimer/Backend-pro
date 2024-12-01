import reviewRepo from '../logic/reviewRepo.js';
import reviewModel from '../models/reviewModel.js';

const ReviewRepo = new reviewRepo();

class reviewService {
    async addReview(data) {
        if (!data.clientId || !data.reviewText || !data.rating) {
            throw new Error('ClientId, reviewText, and rating are required');
        }

        const newReview = new reviewModel(
            null,
            data.clientId,
            data.reviewText,
            data.rating,
            new Date()
        );

        return await ReviewRepo.addReview(newReview);
    }

    async deleteReview(id) {
        await ReviewRepo.deleteReview(id);
    }

    async getAllReviews() {
        return await ReviewRepo.getAllReviews();
    }

    async getReviewsByClient(clientId) {
        return await ReviewRepo.getReviewsByClient(clientId);
    }
}

export default reviewService;