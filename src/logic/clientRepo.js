import { db } from '../config/firebase.js';
import clientModel from '../models/clientModel.js';

class clientRepo {
    async addClient(data) {
        const client = await db.collection('clients').add({
            fullname: data.fullname,
            username: data.username,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            image: data.image,
            paymentMethod: data.paymentMethod,
            password: data.password, // Contraseña cifrada
            favoriteCars: data.favoriteCars || [], // Lista vacía por defecto
        });
        return client.id;
    }

    async updateClient(id, data) {
        await db.collection('clients').doc(id).update(data);
    }

    async deleteClient(id) {
        await db.collection('clients').doc(id).delete();
    }

    async getAllClients() {
        const docs = await db.collection('clients').get();
        const clients = [];
        docs.forEach((doc) => {
            const data = doc.data();
            clients.push(
                new clientModel(
                    doc.id,
                    data.fullname,
                    data.username,
                    data.email,
                    data.phone,
                    data.address,
                    data.city,
                    data.image,
                    data.paymentMethod,
                    data.password,
                    data.favoriteCars
                )
            );
        });
        return clients;
    }

    async getClientById(id) {
        const doc = await db.collection('clients').doc(id).get();
        if (!doc.exists) return null;
        const data = doc.data();
        return new clientModel(
            doc.id,
            data.fullname,
            data.username,
            data.email,
            data.phone,
            data.address,
            data.city,
            data.image,
            data.paymentMethod,
            data.password,
            data.favoriteCars
        );
    }

    async getClientByUsername(username) {
        const query = await db.collection('clients').where('username', '==', username).get();
        if (query.empty) return null;
        const doc = query.docs[0];
        const data = doc.data();
        return new clientModel(
            doc.id,
            data.fullname,
            data.username,
            data.email,
            data.phone,
            data.address,
            data.city,
            data.image,
            data.paymentMethod,
            data.password,
            data.favoriteCars
        );
    }

    async updateFavoriteCars(clientId, favoriteCars) {
        await db.collection('clients').doc(clientId).update({ favoriteCars });
    }
}

export default clientRepo;
