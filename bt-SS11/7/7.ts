class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản ${this.accountNumber}`);
        } else {
            console.log(`Số dư trong tài khoản không đủ ${this.accountNumber}`);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;
    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        let monthlyInterest = (this.balance * this.interestRate) / 100;
        return monthlyInterest;
    }
}

let savingsAccount = new SavingsAccount("0001", 1000, 5);
let initialInterest = savingsAccount.calculateInterest();
console.log(`Lãi hàng tháng ban đầu: ${initialInterest}`);

savingsAccount.deposit(500);
let updatedInterest = savingsAccount.calculateInterest();
console.log(`Lãi suất cập nhật hàng tháng: ${updatedInterest}`);