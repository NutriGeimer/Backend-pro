import carRepo from '../logic/carRepo.js';
import carModel from '../models/carModel.js';
import fs from 'fs';
import path from 'path';

const CarRepo = new carRepo();

class carService {
    async addCar(data, file) {
        const newCar = new carModel(
            null,
            data.brand,
            data.type,
            data.capacity,
            data.gas,
            data.transmission,
            null
        );

        const carId = await CarRepo.addCar(newCar);

        if (file) {
            const image = `${carId}_image.png`;
            const imagePath = path.join('src', 'carImages', image);
            fs.writeFileSync(imagePath, file.buffer);
            await CarRepo.updateCar(carId, { image });
        }

        return carId;
    }

    async updateCar(id, data, file) {
        const car = await CarRepo.getCarById(id);
        if (!car) throw new Error('Car not found');

        if (file) {
            const image = `${id}_image.png`;
            const imagePath = path.join('src', 'carImages', image);
            fs.writeFileSync(imagePath, file.buffer);
            data.image = image;
        }

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
