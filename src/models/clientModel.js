class clientModel {
    constructor(id, fullname, username, email, phone, address, image, payment_method) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.image = image;
        this.payment_method = payment_method; // Tarjeta u otros métodos
    }
}

export default clientModel;
