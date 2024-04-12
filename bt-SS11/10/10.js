"use strict";
class Shape {
    caculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    caculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    caculateArea() {
        return Math.PI * (this.radius ** 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let rectangle1 = new Rectangle(3, 5);
let circle1 = new Circle(4);
console.log("Dtich CN: " + rectangle1.caculateArea());
console.log("Dtich tròn: " + circle1.caculateArea());
console.log("Chu vi hình CN: " + rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn: " + circle1.calculatePerimeter());
