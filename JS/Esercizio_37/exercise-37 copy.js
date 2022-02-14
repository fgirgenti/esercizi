class BankAccount {

    constructor(x) {
        this.account = x;
    }

    deposit(x) {
        this.account += x;
    }

    withdraw(x) {
        this.account -= x;
    }

    view() {
        console.log(this.account);
    }
}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();