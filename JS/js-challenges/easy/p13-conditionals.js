// Challenge name: Simple Calculator

// Test Cases:
// Test Case 1
// Input: { "num1": 5, "num2": 3, "operator": "+" }
// Expected Output: 8
// Test Case 2
// Input: { "num1": 10, "num2": 2, "operator": "-" }
// Expected Output: 8
// Test Case 3
// Input: { "num1": 4, "num2": 2, "operator": "*" }
// Expected Output: 8

// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Error: Invalid operator';
  }
}


// example usage
console.log(calculator(5, 3, '+')); // Output: 8
console.log(calculator(10, 2, '-')); // Output: 8
console.log(calculator(4, 2, '*')); // Output: 8


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { num1, num2, operator } = JSON.parse(input);
  const result = calculator(num1, num2, operator);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
