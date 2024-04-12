class Account{
    protected accountNumber:number
    protected acces:number

    constructor(accountNumber:number, acces:number){
        this.accountNumber = accountNumber
        this.acces = acces
    }

    deposit(a:number):number{
        return this.acces += a
    }

    withdraw(a:number):void{
        if(a <= this.acces){
            this.acces -= a
            console.log("bạn đã rút tiền thành công");
        }else{
            console.log("số dư tài khoản không đủ để thực hiện giao dịch");
        }
    }
}

class SavingsAccount extends Account{
    private interestRate:number

    constructor(accountNumber:number, acces:number, interestRate:number){
        super(accountNumber,acces)
        this.interestRate = interestRate
    }

    calculateInterest():void{
        let interest = this.acces * this.interestRate

        console.log("lãi hàng tháng: "+interest);
    }
}

class CheckingAcount extends Account{
    private overdraftLimit:number

    constructor(accountNumber:number, acces:number, overdraftLimit:number){
        super(accountNumber,acces)
        this.overdraftLimit = overdraftLimit
    }

    withdraw(a:number):void{
        if(a <= this.acces){
            this.acces -= a
            console.log("rút tiền thành công");
        }else if(a <= this.overdraftLimit + this.acces){
            this.acces -= a
            console.log("bạn đang rút quá số tiền hiện có trong hạn mức");
        }else{
            console.log("Số tiền vượt quá hạn mức cho phép");
        }
    }
}

let account1 = new SavingsAccount(10001, 200, 0.05);

//gửi thêm tiền
account1.deposit(200)
console.log(account1);

//rút tiền quá số tiền
account1.withdraw(600)

//rút ít hơn số tiền hiện có
account1.withdraw(300)
console.log(account1);

//in lãi suất hàng tháng
account1.calculateInterest()

//thử rút tiền theo hạn mức
let account2 = new CheckingAcount(1111, 100, 100);
account2.withdraw(150);
console.log(account2);
