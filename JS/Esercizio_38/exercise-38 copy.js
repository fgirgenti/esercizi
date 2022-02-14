class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get access() {
    return this.#amount;
  }

  set access(x) {
    this.#amount = x;
  }
}

class BankAccountVip extends BankAccount {

  constructor(initialAmount) {
    super(initialAmount);
  }

  deposit (amount) {
    if (this.access >= 1000) {
      amount += amount * 3 / 100;
    }
    this.access += amount;
  }

}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();