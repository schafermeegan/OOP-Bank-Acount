class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
addInterest() {
    if (this.interestRate >=0) {
        this.balance = this.balance + (this.balance * this.interestRate);
    }
}
}

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee) {
        super();
        this.balance = balance;
        this.interestRate = interestRate;
        this.fee = fee;

    }
    applyFee() {
        if (this.fee >=0) {
            this.balance = this.balance - this.fee;
        }

    }
}

let lisasBankAccount = new BankAccountWithFee(500, .20, 15);
let meganBankAccount = new BankAccountWithFee(900, .50, 100);
console.log(lisasBankAccount);
console.log(meganBankAccount);
lisasBankAccount.addInterest();
lisasBankAccount.applyFee();
meganBankAccount.addInterest();
meganBankAccount.applyFee();

