import clientService from '../services/clientService.js'

const ClientService = new clientService()

const addClient = async (req, res) => {
    console.log('@body', req)
    try {
        const id = await ClientService.addClient(req.body, req.file)
        res.status(201).json({
            success: true,
            clientId: id
        })
    } catch (error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateClient = async (req, res) => {
    try {
        const id = req.params.id
        await ClientService.updateClient(id, req.body, req.file)
        res.status(201).json({
            success:true
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteClient = async (req, res) => {
    try {
        const Id = req.params.id
        await ClientService.deleteClient(Id)
        res.status(201).json({
            success: true
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getAllClients = async (req, res) => {
    try {
        const clients = await ClientService.getAllClients()
        res.status(201).json({
            success: true,
            clients: clients
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
} 

const getClientById = async (req, res) => {
    try {
        const id = req.params.id
        console.log('@id', id)
        const client = await ClientService.getClientById(id)
        if(!client){
            res.status(404).json({
                success: false,
                message: 'Client not found'
            })
        }

        res.status(201).json({
            success: true,
            client: client
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getClientByUsername = async (req, res) => {
    console.log('@body req =>', req.body, req.params)
    try {
        const username = req.params.username
        const client = await ClientService.getClientByUsername(username)
        if(!client){
            res.status(404).json({
                success: false,
                message: 'Client not found'
            })
        }

        res.status(201).json({
            success: true,
            client: client
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export {
    addClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByUsername
}

