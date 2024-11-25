import carService from '../services/carService.js';

const CarService = new carService();

// Agregar un carro
const addCar = async (req, res) => {
    try {
        const id = await CarService.addCar(req.body, req.file); // Manejo de imagen opcional
        res.status(201).json({ success: true, carId: id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Actualizar un carro
const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        await CarService.updateCar(id, req.body, req.file); // Manejo de imagen opcional
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Eliminar un carro
const deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        await CarService.deleteCar(id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener todos los carros
const getAllCars = async (req, res) => {
    try {
        const cars = await CarService.getAllCars();
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener un carro por ID
const getCarById = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await CarService.getCarById(id);
        if (!car) {
            return res.status(404).json({ success: false, message: 'Car not found' });
        }
        res.status(200).json({ success: true, car });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener carros por marca
const getCarByBrand = async (req, res) => {
    try {
        const brand = req.params.brand;
        const cars = await CarService.getCarByBrand(brand);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener carros por tipo
const getCarByType = async (req, res) => {
    try {
        const type = req.params.type;
        const cars = await CarService.getCarByType(type);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener carros por capacidad
const getCarByCapacity = async (req, res) => {
    try {
        const capacity = req.params.capacity;
        const cars = await CarService.getCarByCapacity(capacity);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener carros por tipo de gasolina
const getCarByGas = async (req, res) => {
    try {
        const gas = req.params.gas;
        const cars = await CarService.getCarByGas(gas);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener carros por tipo de transmisión
const getCarByTransmission = async (req, res) => {
    try {
        const transmission = req.params.transmission;
        const cars = await CarService.getCarByTransmission(transmission);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export {
    addCar,
    updateCar,
    deleteCar,
    getAllCars,
    getCarById,
    getCarByBrand,
    getCarByType,
    getCarByCapacity,
    getCarByGas,
    getCarByTransmission,
};
