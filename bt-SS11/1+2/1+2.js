"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name1 = name;
        this.company1 = company;
        this.phone1 = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name1}`);
        console.log(`Company: ${this.company1}`);
        console.log(`Phone: ${this.phone1}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Team Size: ${this.teamSize}`);
    }
}
const manager = new Manager("Hiển", "ABC", "123", 5);
manager.printInfo();
