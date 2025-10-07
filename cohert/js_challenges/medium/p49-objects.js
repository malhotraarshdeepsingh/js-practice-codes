// Challenge name: Deep Object Cloner

// Test Cases
// Input: { "a": 1, "b": { "c": 2 } }
// Output: { "a": 1, "b": { "c": 2 } }
// Input: { "x": { "y": { "z": 3 } }, "w": 4 }
// Output: { "x": { "y": { "z": 3 } }, "w": 4 }

// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  if (typeof obj !== 'object' || obj === null) {
    throw new Error("Input must be a valid object.");
  }

  return JSON.parse(JSON.stringify(obj));
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { obj } = JSON.parse(input);
  const result = deepClone(obj);
  process.stdout.write(JSON.stringify(result));
});