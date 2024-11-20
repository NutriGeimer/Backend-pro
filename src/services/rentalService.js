import rentalRepo from '../logic/rentalRepo.js';
import rentalModel from '../models/rentalModel.js';

const RentalRepo = new rentalRepo();

class rentalService {
    async addRental(data) {
        // Validar campos obligatorios
        if (!data.clientId || !data.carId) {
            throw new Error('ClientId and CarId are required');
        }

        const newRental = new rentalModel(
            null,
            data.clientId,
            data.carId,
            data.startDate,
            data.endDate,
            data.pickupAddress,
            data.dropoffAddress,
            data.paymentMethod,
            data.totalAmount,
            'active' // Estado inicial
        );

        return await RentalRepo.addRental(newRental);
    }

    async updateRental(id, data) {
        const rental = await RentalRepo.getRentalById(id);
        if (!rental) throw new Error('Rental not found');
        await RentalRepo.updateRental(id, data);
    }

    async deleteRental(id) {
        const rental = await RentalRepo.getRentalById(id);
        if (!rental) throw new Error('Rental not found');
        await RentalRepo.deleteRental(id);
    }

    async getRentalById(id) {
        return await RentalRepo.getRentalById(id);
    }

    async getRentalsByClient(clientId) {
        return await RentalRepo.getRentalsByClient(clientId);
    }

    async getRentalsByCar(carId) {
        return await RentalRepo.getRentalsByCar(carId);
    }
}

export default rentalService;
