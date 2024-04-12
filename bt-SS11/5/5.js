"use strict";
class Animal {
    constructor(name, age) {
        this.name5 = name;
        this.age5 = age;
    }
    introduce() {
        console.log(`Tôi là ${this.name5} và tôi ${this.age5} tuổi.`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed5 = breed;
    }
    displayInfo() {
        // Trong phương thức này, chúng ta có thể truy cập thuộc tính age vì nó được đánh dấu là protected trong lớp cha
        console.log(`${this.name5} là ${this.breed5} và nó ${this.age5} tuổi.`);
    }
    changeName(newName) {
        this.name5 = newName;
        // Trong phương thức này, chúng ta không thể truy cập thuộc tính name vì nó được đánh dấu là private trong lớp cha
    }
}
const dog = new Dog("GG", 5, "Labrador");
dog.introduce();
dog.displayInfo();
console.log(dog.name5); // Lỗi sẽ xảy ra vì name5 là private
console.log(dog.age5); // Lỗi sẽ xảy ra vì age5 là protected
