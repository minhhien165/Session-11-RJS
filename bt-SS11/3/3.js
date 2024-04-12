"use strict";
class Person {
    constructor(name) {
        this.name3 = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name3}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id3 = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id3}`);
    }
}
const student = new Student("Hiển", 1);
student.displayInfo();
