import bcrypt from 'bcrypt';
import clientRepo from '../logic/clientRepo.js';
import clientModel from '../models/clientModel.js';
import fs from 'fs';
import path from 'path';

const ClientRepo = new clientRepo();
const saltRounds = 10;

class clientService {
    async addClient(data, file) {
        const existClient = await ClientRepo.getClientByUsername(data.username);
        if (existClient) throw new Error('Username already exists');

        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const newClient = new clientModel(
            null,
            data.fullname,
            data.username,
            data.email,
            data.phone,
            data.address,
            data.city,
            null,
            data.paymentMethod,
            hashedPassword // Contraseña cifrada
        );

        const clientId = await ClientRepo.addClient(newClient);

        if (file) {
            const image = `${clientId}_image.png`;
            const imagePath = path.join('src', 'clientImages', image);
            fs.writeFileSync(imagePath, file.buffer);
            await ClientRepo.updateClient(clientId, { image });
        }
    }

    async updateClient(id, data, file) {
        const existClient = await ClientRepo.getClientById(id);
        if (!existClient) throw new Error('Client not found');

        if (data.password) {
            data.password = await bcrypt.hash(data.password, saltRounds);
        }

        if (file) {
            const image = `${id}_image.png`;
            const imagePath = path.join('src', 'clientImages', image);
            fs.writeFileSync(imagePath, file.buffer);
            data.image = image;
        }

        await ClientRepo.updateClient(id, data);
    }

    async getAllClients() {
        return await ClientRepo.getAllClients();
    }

    async deleteClient(id) {
        await ClientRepo.deleteClient(id);
    }

    async getClientById(id) {
        return await ClientRepo.getClientById(id);
    }

    async getClientByUsername(username) {
        return await ClientRepo.getClientByUsername(username);
    }

    async updateFavoriteCars(clientId, favoriteCarId, action) {
        const client = await ClientRepo.getClientById(clientId);
        if (!client) throw new Error('Client not found');

        let updatedFavorites = client.favoriteCars;

        if (action === 'add') {
            if (!updatedFavorites.includes(favoriteCarId)) {
                updatedFavorites.push(favoriteCarId);
            }
        } else if (action === 'remove') {
            updatedFavorites = updatedFavorites.filter((id) => id !== favoriteCarId);
        }

        await ClientRepo.updateFavoriteCars(clientId, updatedFavorites);
    }
}

export default clientService;
