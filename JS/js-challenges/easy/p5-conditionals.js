// Challenge name: Find the Largest Number

// Test Cases:
// Test Case 1
// Input: { "a": 5, "b": 3, "c": 8 }
// Expected Output: 8
// Test Case 2
// Input: { "a": 10, "b": 15, "c": 12 }
// Expected Output: 15
// Test Case 3
// Input: { "a": 20, "b": 5, "c": 10 }
// Expected Output: 20

// You just need to implement the findLargest function
function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

// example usage
console.log(findLargest(5, 3, 8)); // Output: 8
console.log(findLargest(10, 15, 12)); // Output: 15
console.log(findLargest(20, 5, 10)); // Output: 20


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { a, b, c } = JSON.parse(input);
  const result = findLargest(a, b, c);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
