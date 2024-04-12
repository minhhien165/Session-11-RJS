class Person {
    protected name3: string;
  
    constructor(name: string) {
      this.name3 = name;
    } 
    displayInfo(): void {
      console.log(`Name: ${this.name3}`);
    }
}
class Student extends Person {
    private id3: number;    
    constructor(name: string, id: number) {
      super(name);
      this.id3 = id;
    }
    
    displayInfo(): void {
      super.displayInfo();
      console.log(`ID: ${this.id3}`);
    }
}
const student: Student = new Student("Hiển", 1);
student.displayInfo();