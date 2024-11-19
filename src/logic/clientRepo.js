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
            image: data.image,
            payment_method: data.payment_method,
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
                    data.image,
                    data.payment_method
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
            data.image,
            data.payment_method
        );
    }

    async getClientByUsername(username) {
        const client = await db.collection('clients').where('username', '==', username).get();
        if (client.empty) return null;
        const doc = client.docs[0];
        const data = doc.data();
        return new clientModel(
            doc.id,
            data.fullname,
            data.username,
            data.email,
            data.phone,
            data.address,
            data.image,
            data.payment_method
        );
    }
}

export default clientRepo;
