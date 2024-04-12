class Vehicle {
    protected name4: string;
    protected speed4: number;
    protected id4: number;
    
    constructor(name: string, speed: number, id: number) {
    this.name4 = name;
    this.speed4 = speed;
    this.id4 = id;
    }    
    slowDown(decrement: number): void {
    this.speed4 -= decrement;
    }  
    speedUp(increment: number): void {
      this.speed4 += increment;
    }
  
    showSpeed(): void {
      console.log(`Current Speed: ${this.speed4}`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
      super(name, speed, id);
      this.gear = gear;
    }
    showSpeed(): void {
      super.showSpeed();
      console.log(`Gear: ${this.gear}`);
    }
}
const bicycle: Bicycle = new Bicycle("Mountain Bike", 20, 1, 6);
bicycle.showSpeed();

bicycle.speedUp(20);
bicycle.showSpeed();

bicycle.slowDown(10);
bicycle.showSpeed();