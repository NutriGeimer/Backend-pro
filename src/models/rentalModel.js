class rentalModel {
    constructor(id, clientId, carId, startDate, endDate, pickupAddress, dropoffAddress, paymentMethod, totalAmount, status) {
        this.id = id; // ID de la renta
        this.clientId = clientId; // Relación con cliente
        this.carId = carId; // Relación con carro
        this.startDate = startDate; // Fecha de inicio
        this.endDate = endDate; // Fecha de fin
        this.pickupAddress = pickupAddress; // Dirección de recogida
        this.dropoffAddress = dropoffAddress; // Dirección de entrega
        this.paymentMethod = paymentMethod; // Método de pago usado
        this.totalAmount = totalAmount; // Monto total de la renta
        this.status = status; // Estado: "active", "completed", "canceled"
    }
}

export default rentalModel;
