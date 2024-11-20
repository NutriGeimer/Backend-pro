import { db } from '../config/firebase.js';
import rentalModel from '../models/rentalModel.js';

class rentalRepo {
    async addRental(data) {
        // Valida que los datos requeridos existan
        if (!data.clientId || !data.carId) {
            throw new Error('Missing required fields: clientId or carId');
        }

        const rental = await db.collection('rentals').add({
            clientId: data.clientId,
            carId: data.carId,
            startDate: data.startDate,
            endDate: data.endDate,
            pickupAddress: data.pickupAddress,
            dropoffAddress: data.dropoffAddress,
            paymentMethod: data.paymentMethod,
            totalAmount: data.totalAmount,
            status: data.status,
        });

        return rental.id;
    }

    async updateRental(id, data) {
        if (!id) throw new Error('Rental ID is required');
        await db.collection('rentals').doc(id).update(data);
    }

    async deleteRental(id) {
        if (!id) throw new Error('Rental ID is required');
        await db.collection('rentals').doc(id).delete();
    }

    async getRentalById(id) {
        const doc = await db.collection('rentals').doc(id).get();
        if (!doc.exists) return null;

        const data = doc.data();
        return new rentalModel(
            doc.id,
            data.clientId,
            data.carId,
            data.startDate,
            data.endDate,
            data.pickupAddress,
            data.dropoffAddress,
            data.paymentMethod,
            data.totalAmount,
            data.status
        );
    }

    async getRentalsByClient(clientId) {
        const query = await db.collection('rentals').where('clientId', '==', clientId).get();
        return query.docs.map((doc) =>
            new rentalModel(
                doc.id,
                doc.data().clientId,
                doc.data().carId,
                doc.data().startDate,
                doc.data().endDate,
                doc.data().pickupAddress,
                doc.data().dropoffAddress,
                doc.data().paymentMethod,
                doc.data().totalAmount,
                doc.data().status
            )
        );
    }

    async getRentalsByCar(carId) {
        const query = await db.collection('rentals').where('carId', '==', carId).get();
        return query.docs.map((doc) =>
            new rentalModel(
                doc.id,
                doc.data().clientId,
                doc.data().carId,
                doc.data().startDate,
                doc.data().endDate,
                doc.data().pickupAddress,
                doc.data().dropoffAddress,
                doc.data().paymentMethod,
                doc.data().totalAmount,
                doc.data().status
            )
        );
    }
}

export default rentalRepo;
