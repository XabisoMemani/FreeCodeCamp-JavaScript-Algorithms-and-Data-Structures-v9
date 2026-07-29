// main bankaccount class
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit amount must be greater than zero.";

    this.transactions.push({ type: "deposit", amount });
    this.balance += amount;

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance)
      return "Insufficient balance or invalid amount.";

    this.transactions.push({ type: "withdraw", amount });
    this.balance -= amount;

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  //filter deposits - return the amounts joined by comma
  listAllDeposits() {
    const deposits = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  //filter withdrawals - return the amounts joined by comma
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

//create instance
const myAccount = new BankAccount();

//3 deposits, 2 withdrawals, 5 transactions total, balance > 100
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.withdraw(80);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
