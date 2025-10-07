// Challenge name: Employee Bonus Calculator

// Test Cases
// Input: { "name": "Alice", "position": "Developer", "salary": 70000, "bonus": 10 }
// Output: 77000
// Input: { "name": "Bob", "position": "Manager", "salary": 90000, "bonus": 15 }
// Output: 103500

// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function(percent) {
  const bonusAmount = (this.salary * percent) / 100;
  this.salary += bonusAmount;
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, position, salary, bonus } = JSON.parse(input);
  const employee = new Employee(name, position, salary);
  employee.applyBonus(bonus);
  process.stdout.write(JSON.stringify(employee.salary));
});
// Please don't remove the code above