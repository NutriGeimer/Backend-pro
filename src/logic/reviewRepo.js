import { db } from '../config/firebase.js';
import reviewModel from '../models/reviewModel.js';

class reviewRepo {
    async addReview(data) {
        const review = await db.collection('reviews').add({
            clientId: data.clientId,
            reviewText: data.reviewText,
            rating: data.rating,
            createdAt: new Date(),
        });
        return review.id;
    }

    async deleteReview(id) {
        await db.collection('reviews').doc(id).delete();
    }

    async getAllReviews() {
        const docs = await db.collection('reviews').get();
        return docs.docs.map((doc) => {
            const data = doc.data();
            return new reviewModel(
                doc.id,
                data.clientId,
                data.reviewText,
                data.rating,
                data.createdAt
            );
        });
    }

    async getReviewsByClient(clientId) {
        const query = await db.collection('reviews').where('clientId', '==', clientId).get();
        return query.docs.map((doc) => {
            const data = doc.data();
            return new reviewModel(
                doc.id,
                data.clientId,
                data.reviewText,
                data.rating,
                data.createdAt
            );
        });
    }
}

export default reviewRepo;