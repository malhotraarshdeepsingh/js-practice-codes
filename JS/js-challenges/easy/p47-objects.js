// Challenge name: Object to Array Converter

// Test Cases
// Input: { "a": 1, "b": 2 }
// Output: [["a", 1], ["b", 2]]
// Input: { "x": 10, "y": 20, "z": 30 }
// Output: [["x", 10], ["y", 20], ["z", 30]]

// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  if (typeof obj !== 'object' || obj === null) {
    throw new Error("Input must be a valid object.");
  }

  return Object.entries(obj);
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { obj } = JSON.parse(input);
  const result = objectToArray(obj);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above