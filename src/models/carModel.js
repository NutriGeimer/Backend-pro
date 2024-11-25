class carModel {
    constructor(id, brand, type, capacity, gas, transmission, image = null) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.capacity = capacity;
        this.gas = gas;
        this.transmission = transmission;
        this.image = image; // Ruta o URL de la imagen
    }
}

export default carModel;
