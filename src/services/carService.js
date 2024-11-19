import carRepo from '../logic/carRepo.js';
import carModel from '../models/carModel.js';

const CarRepo = new carRepo();

class carService {
    async addCar(data) {
        const newCar = new carModel(
            null,
            data.brand,
            data.type,
            data.capacity,
            data.gas,
            data.transmission
        );
        return await CarRepo.addCar(newCar);
    }

    async updateCar(id, data) {
        await CarRepo.updateCar(id, data);
    }

    async deleteCar(id) {
        await CarRepo.deleteCar(id);
    }

    async getAllCars() {
        return await CarRepo.getAllCars();
    }

    async getCarById(id) {
        return await CarRepo.getCarById(id);
    }

    async getCarByBrand(brand) {
        return await CarRepo.getCarByBrand(brand);
    }

    async getCarByType(type) {
        return await CarRepo.getCarByType(type);
    }

    async getCarByCapacity(capacity) {
        return await CarRepo.getCarByCapacity(capacity);
    }

    async getCarByGas(gas) {
        return await CarRepo.getCarByGas(gas);
    }

    async getCarByTransmission(transmission) {
        return await CarRepo.getCarByTransmission(transmission);
    }
}

export default carService;
