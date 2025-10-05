// Challenge name: Number Type Checker

// Test Cases:
// Test Case 1
// Input: { "num": 5 }
// Expected Output: "Positive"
// Test Case 2
// Input: { "num": -3 }
// Expected Output: "Negative"
// Test Case 3
// Input: { "num": 0 }
// Expected Output: "Zero"

// You just need to implement the checkNumberType function
function checkNumberType(num) {
  // Return "Positive", "Negative", or "Zero" based on the input number
  if (num == 0) return "Zero"
  if (num > 0) return "Positive"
  if (num < 0) return "Negative"
}

// example usage
console.log(checkNumberType(5)); // Output: "Positive"
console.log(checkNumberType(-3)); // Output: "Negative"
console.log(checkNumberType(0)); // Output: "Zero"


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { num } = JSON.parse(input);
  const result = checkNumberType(num);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
