import { db } from '../config/firebase.js';
import carModel from '../models/carModel.js';

class carRepo {
    async addCar(data) {
        const car = await db.collection('cars').add({
            carName: data.carName,
            carModel: data.carModel,
            brand: data.brand,
            type: data.type,
            capacity: data.capacity,
            gas: data.gas,
            transmission: data.transmission,
            image: data.image || null, // Campo opcional para la imagen
            rentPrice: data.rentPrice || 0, // Precio de renta del carro
            carColor: data.carColor || '#FFFFFF', // Color del carro en formato hex
            carDescription: data.carDescription || '', // Descripción del carro
            carYear: data.carYear || 0, // Año del carro
        });
        return car.id;
    }

    async updateCar(id, data) {
        await db.collection('cars').doc(id).update(data);
    }

    async deleteCar(id) {
        await db.collection('cars').doc(id).delete();
    }

    async getAllCars() {
        const docs = await db.collection('cars').get();
        const cars = [];
        docs.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.carName,
                    data.carModel,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission,
                    data.image,
                    data.rentPrice,
                    data.carColor,
                    data.carDescription,
                    data.carYear
                )
            );
        });
        return cars;
    }

    async getCarById(id) {
        const doc = await db.collection('cars').doc(id).get();
        if (!doc.exists) return null;
        const data = doc.data();
        return new carModel(
            doc.id,
            data.carName,
            data.carModel,
            data.brand,
            data.type,
            data.capacity,
            data.gas,
            data.transmission,
            data.image,
            data.rentPrice,
            data.carColor,
            data.carDescription,
            data.carYear
        );
    }

    async getCarByBrand(brand) {
        return await this._getCarByField('brand', brand);
    }

    async getCarByType(type) {
        return await this._getCarByField('type', type);
    }

    async getCarByCapacity(capacity) {
        return await this._getCarByField('capacity', capacity);
    }

    async getCarByGas(gas) {
        return await this._getCarByField('gas', gas);
    }

    async getCarByTransmission(transmission) {
        return await this._getCarByField('transmission', transmission);
    }

    async getCarByName(carName) {
        return await this._getCarByField('carName', carName);
    }

    async getCarByModel(carModel) {
        return await this._getCarByField('carModel', carModel);
    }

    async getCarByColor(carColor) {
        return await this._getCarByField('carColor', carColor);
    }

    async getCarByYear(carYear) {
        return await this._getCarByField('carYear', carYear);
    }

    async _getCarByField(field, value) {
        const query = await db.collection('cars').where(field, '==', value).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.carName,
                    data.carModel,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission,
                    data.image,
                    data.rentPrice,
                    data.carColor,
                    data.carDescription,
                    data.carYear
                )
            );
        });
        return cars;
    }
}

export default carRepo;