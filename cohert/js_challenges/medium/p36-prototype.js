// Challenge name: Bank Account with Prototype

// Test Cases
// Input: { "balance": 100, "transactions": [ { "type": "deposit", "amount": 50 }, { "type": "withdraw", "amount": 30 } ] }
// Output: [ "Deposited 50", "Withdrew 30" ]

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
  // Initialize balance and transactions properties
  this.balance = balance;
  this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  const log = `Deposited ${amount}`;
  this.transactions.push(log);
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount) {
  if (this.balance >= amount) {
    this.balance -= amount;
    const log = `Withdrew ${amount}`;
    this.transactions.push(log);
  } else {
    this.transactions.push("Insufficient balance");
  }
};

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function() {
  return this.transactions;
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { balance, transactions } = JSON.parse(input);
  const account = new BankAccount(balance);

  transactions.forEach(({ type, amount }) => {
    if (type === "deposit") account.deposit(amount);
    if (type === "withdraw") account.withdraw(amount);
  });

  process.stdout.write(JSON.stringify(account.getTransactionHistory()));
});
// Please don't remove the code above