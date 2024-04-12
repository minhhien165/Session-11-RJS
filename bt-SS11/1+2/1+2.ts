class Employee {
    public name1: string;
    protected company1: string;
    private phone1: string;
  
    constructor(name: string, company: string, phone: string) {
      this.name1 = name;
      this.company1 = company;
      this.phone1 = phone;
    } 
    printInfo(): void {
      console.log(`Name: ${this.name1}`);
      console.log(`Company: ${this.company1}`);
      console.log(`Phone: ${this.phone1}`);
    }
}
class Manager extends Employee {
    private teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
    }
    printInfo(): void {
    super.printInfo();
    console.log(`Team Size: ${this.teamSize}`);
    }
}
const manager: Manager = new Manager("Hiển", "ABC", "123", 5);
manager.printInfo();