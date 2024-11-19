import { db } from '../config/firebase.js';
import carModel from '../models/carModel.js';

class carRepo {
    async addCar(data) {
        const car = await db.collection('cars').add({
            brand: data.brand,
            type: data.type,
            capacity: data.capacity,
            gas: data.gas,
            transmission: data.transmission,
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
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
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
            data.brand,
            data.type,
            data.capacity,
            data.gas,
            data.transmission
        );
    }

    async getCarByBrand(brand) {
        const query = await db.collection('cars').where('brand', '==', brand).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
                )
            );
        });
        return cars;
    }

    async getCarByType(type) {
        const query = await db.collection('cars').where('type', '==', type).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
                )
            );
        });
        return cars;
    }

    async getCarByCapacity(capacity) {
        const query = await db.collection('cars').where('capacity', '==', capacity).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
                )
            );
        });
        return cars;
    }

    async getCarByGas(gas) {
        const query = await db.collection('cars').where('gas', '==', gas).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
                )
            );
        });
        return cars;
    }

    async getCarByTransmission(transmission) {
        const query = await db.collection('cars').where('transmission', '==', transmission).get();
        const cars = [];
        query.forEach((doc) => {
            const data = doc.data();
            cars.push(
                new carModel(
                    doc.id,
                    data.brand,
                    data.type,
                    data.capacity,
                    data.gas,
                    data.transmission
                )
            );
        });
        return cars;
    }
}

export default carRepo;
