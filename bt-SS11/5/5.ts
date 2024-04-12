class Animal {
    private name5: string;
    protected age5: number;

    constructor(name: string, age: number) {
        this.name5 = name;
        this.age5 = age;
    }

    public introduce(): void {
        console.log(`Tôi là ${this.name5} và tôi ${this.age5} tuổi.`);
    }
}

class Dog extends Animal {
    private breed5: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed5 = breed;
    }

    public displayInfo(): void {
        // Trong phương thức này, chúng ta có thể truy cập thuộc tính age vì nó được đánh dấu là protected trong lớp cha
        console.log(`${this.name5} là ${this.breed5} và nó ${this.age5} tuổi.`);
    }

    public changeName(newName: string): void {
        this.name5 = newName;
        // Trong phương thức này, chúng ta không thể truy cập thuộc tính name vì nó được đánh dấu là private trong lớp cha
    }
}

const dog = new Dog("GG", 5, "Labrador");
dog.introduce();
dog.displayInfo();
console.log(dog.name5); // Lỗi sẽ xảy ra vì name5 là private
console.log(dog.age5); // Lỗi sẽ xảy ra vì age5 là protected
