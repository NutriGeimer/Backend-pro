class clientService {
    async addClient(data, file) {
        const existClient = await ClientRepo.getClientByUsername(data.username);
        if (existClient) throw new Error('Username already exists');

        const newClient = new clientModel(
            null,
            data.fullname,
            data.username,
            data.email,
            data.phone,
            data.address,
            null,
            data.payment_method
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

        if (file) {
            const image = `${id}_image.png`;
            const imagePath = path.join('src', 'clientImages', image);
            fs.writeFileSync(imagePath, file.buffer);
            data.image = image;
        }

        await ClientRepo.updateClient(id, data);
    }

    async deleteClient(id) {
        const existClient = await ClientRepo.getClientById(id);
        if (!existClient) throw new Error('Client not found');
        await ClientRepo.deleteClient(id);
    }

    async getAllClients() {
        return await ClientRepo.getAllClients();
    }

    async getClientById(id) {
        return await ClientRepo.getClientById(id);
    }

    async getClientByUsername(username) {
        return await ClientRepo.getClientByUsername(username);
    }
}

export default clientService;
