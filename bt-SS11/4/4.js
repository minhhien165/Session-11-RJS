"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name4 = name;
        this.speed4 = speed;
        this.id4 = id;
    }
    slowDown(decrement) {
        this.speed4 -= decrement;
    }
    speedUp(increment) {
        this.speed4 += increment;
    }
    showSpeed() {
        console.log(`Current Speed: ${this.speed4}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showSpeed() {
        super.showSpeed();
        console.log(`Gear: ${this.gear}`);
    }
}
const bicycle = new Bicycle("Mountain Bike", 20, 1, 6);
bicycle.showSpeed();
bicycle.speedUp(20);
bicycle.showSpeed();
bicycle.slowDown(10);
bicycle.showSpeed();
