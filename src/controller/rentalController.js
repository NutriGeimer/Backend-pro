import rentalService from '../services/rentalService.js';

const RentalService = new rentalService();

const addRental = async (req, res) => {
    try {
        const rentalData = req.body;
        const rentalId = await RentalService.addRental(rentalData);
        res.status(201).json({
            success: true,
            rentalId,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateRental = async (req, res) => {
    try {
        const id = req.params.id;
        await RentalService.updateRental(id, req.body);
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

const deleteRental = async (req, res) => {
    try {
        const id = req.params.id;
        await RentalService.deleteRental(id);
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

const getRentalById = async (req, res) => {
    try {
        const id = req.params.id;
        const rental = await RentalService.getRentalById(id);
        if (!rental) {
            return res.status(404).json({
                success: false,
                message: 'Rental not found',
            });
        }
        res.status(200).json({
            success: true,
            rental,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getRentalsByClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const rentals = await RentalService.getRentalsByClient(clientId);
        res.status(200).json({
            success: true,
            rentals,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getRentalsByCar = async (req, res) => {
    try {
        const carId = req.params.carId;
        const rentals = await RentalService.getRentalsByCar(carId);
        res.status(200).json({
            success: true,
            rentals,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export {
    addRental,
    updateRental,
    deleteRental,
    getRentalById,
    getRentalsByClient,
    getRentalsByCar,
};
