class reviewModel {
    constructor(id, clientId, reviewText, rating, createdAt) {
        this.id = id;
        this.clientId = clientId;
        this.reviewText = reviewText;
        this.rating = rating;
        this.createdAt = createdAt;
    }
}

export default reviewModel;