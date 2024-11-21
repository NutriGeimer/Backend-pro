class clientModel {
    constructor(id, fullname, username, email, phone, address, city, image, paymentMethod, password, favoriteCars = []) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city; // Nueva propiedad
        this.image = image;
        this.paymentMethod = paymentMethod;
        this.password = password; // Contraseña
        this.favoriteCars = favoriteCars; // Lista de carros favoritos
    }
}

export default clientModel;
