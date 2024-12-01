class carModel {
    constructor(id, carName, carModel, brand, type, capacity, gas, transmission, image = null, rentPrice = 0, carColor = '#FFFFFF', carDescription = '', carYear = 0) {
        this.id = id;
        this.carName = carName; // Nombre del carro
        this.carModel = carModel; // Modelo del carro
        this.brand = brand;
        this.type = type;
        this.capacity = capacity;
        this.gas = gas;
        this.transmission = transmission;
        this.image = image; // Ruta o URL de la imagen
        this.rentPrice = rentPrice; // Precio de renta del carro
        this.carColor = carColor; // Color del carro en formato hex
        this.carDescription = carDescription; // Descripción del carro
        this.carYear = carYear; // Año del carro
    }
}

export default carModel;