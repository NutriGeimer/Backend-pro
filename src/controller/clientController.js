import clientService from '../services/clientService.js';

const ClientService = new clientService();

const addClient = async (req, res) => {
    try {
        const id = await ClientService.addClient(req.body, req.file);
        res.status(201).json({
            success: true,
            clientId: id,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateClient = async (req, res) => {
    try {
        const id = req.params.id;
        await ClientService.updateClient(id, req.body, req.file);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteClient = async (req, res) => {
    try {
        const id = req.params.id;
        await ClientService.deleteClient(id);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllClients = async (req, res) => {
    try {
        const clients = await ClientService.getAllClients();
        res.status(200).json({
            success: true,
            clients,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getClientById = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await ClientService.getClientById(id);
        if (!client) {
            return res.status(404).json({
                success: false,
                message: 'Client not found',
            });
        }
        res.status(200).json({
            success: true,
            client,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getClientByUsername = async (req, res) => {
    try {
        const username = req.params.username;
        const client = await ClientService.getClientByUsername(username);
        if (!client) {
            return res.status(404).json({
                success: false,
                message: 'Client not found',
            });
        }
        res.status(200).json({
            success: true,
            client,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateFavoriteCars = async (req, res) => {
    try {
        const { clientId, carId, action } = req.body;
        await ClientService.updateFavoriteCars(clientId, carId, action);
        res.status(200).json({
            success: true,
            message: `Favorite car ${action === 'add' ? 'added' : 'removed'} successfully.`,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getFavoritesByClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const favorites = await ClientService.getFavoritesByClient(clientId);
        res.status(200).json({
            success: true,
            favorites,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export {
    addClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByUsername,
    updateFavoriteCars,
    getFavoritesByClient,
};
