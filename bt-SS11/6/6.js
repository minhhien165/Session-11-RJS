"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}
const electronics = new Electronics("Smartphone", 5000000, "Iphone");
electronics.getDescription();
