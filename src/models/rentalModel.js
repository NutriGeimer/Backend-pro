class rentalModel {
    constructor(id, clientId, carId, startDate, endDate, pickupAddress, dropoffAddress, paymentMethod, totalAmount, status) {
        this.id = id;
        this.clientId = clientId; // ID del cliente
        this.carId = carId; // ID del carro
        this.startDate = startDate; // Fecha de inicio
        this.endDate = endDate; // Fecha de fin
        this.pickupAddress = pickupAddress; // Dirección de recogida
        this.dropoffAddress = dropoffAddress; // Dirección de entrega
        this.paymentMethod = paymentMethod; // Método de pago utilizado
        this.totalAmount = totalAmount; // Total a pagar
        this.status = status; // Estado de la renta: "active", "completed", "canceled"
    }
}

export default rentalModel;
