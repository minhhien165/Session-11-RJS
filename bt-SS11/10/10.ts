class Shape{
    caculateArea():number{
        return 0;
    }

    calculatePerimeter():number{
        return 0;
    }
}

class Rectangle extends Shape{
    private width: number
    private height: number

    constructor(width: number, height: number){
        super()
        this.width = width
        this.height = height
    }

    caculateArea(): number {
        return this.width*this.height
    }

    calculatePerimeter(): number {
        return (this.width + this.height)*2
    }
}

class Circle extends Shape{
    private radius: number

    constructor(radius: number){
        super()
        this.radius = radius
    }

    caculateArea(): number {
        return Math.PI*(this.radius**2)
    }

    calculatePerimeter(): number {
        return 2*Math.PI*this.radius
    }
}

let rectangle1 = new Rectangle(3,5);
let circle1 = new Circle(4);

console.log("Dtich CN: " + rectangle1.caculateArea());
console.log("Dtich tròn: " + circle1.caculateArea());

console.log("Chu vi hình CN: " + rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn: " + circle1.calculatePerimeter());
