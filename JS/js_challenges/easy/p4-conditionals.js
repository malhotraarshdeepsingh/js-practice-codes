// Challenge name: Even or Odd

// Test Cases:
// Test Case 1
// Input: { "num": 4 }
// Expected Output: "Even"
// Test Case 2
// Input: { "num": 7 }
// Expected Output: "Odd"
// Test Case 3
// Input: { "num": 0 }
// Expected Output: "Even"

// You just need to implement the checkEvenOdd function
function checkEvenOdd(num) {
  // Return "Even" if num is even, otherwise return "Odd"
  return num % 2 === 0? "Even": "Odd"
}

// example usage
console.log(checkEvenOdd(4)); // Output: "Even"
console.log(checkEvenOdd(7)); // Output: "Odd"
console.log(checkEvenOdd(0)); // Output: "Even"

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { num } = JSON.parse(input);
  const result = checkEvenOdd(num);
  process.stdout.write(JSON.stringify(result));
});