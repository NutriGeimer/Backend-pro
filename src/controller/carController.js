import carService from "../services/carService.js";

const CarService = new carService();

const addCar = async (req, res) => {
    try {
        const id = await CarService.addCar(req.body);
        res.status(201).json({ success: true, carId: id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        await CarService.updateCar(id, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        await CarService.deleteCar(id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await CarService.getAllCars();
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCarById = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await CarService.getCarById(id);
        if (!car) {
            res.status(404).json({ success: false, message: "Car not found" });
        } else {
            res.status(200).json({ success: true, car });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCarByBrand = async (req, res) => {
    try {
        const brand = req.params.brand;
        const cars = await CarService.getCarByBrand(brand);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCarByType = async (req, res) => {
    try {
        const type = req.params.type;
        const cars = await CarService.getCarByType(type);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCarByCapacity = async (req, res) => {
    try {
        const capacity = req.params.capacity;
        const cars = await CarService.getCarByCapacity(capacity);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getCarByGas = async (req, res) => {
    try {
        const gas = req.params.gas;
        const cars = await CarService.getCarByGas(gas);
        res.status(200).json({ success: true, cars });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

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
