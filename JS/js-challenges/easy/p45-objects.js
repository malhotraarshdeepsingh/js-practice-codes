// Challenge name: Object Property Counter

// Test Cases
// Input: { "user": { "username": "john_doe", "age": 30 } }
// Output: 2
// Input: { "user": { "username": "jane_doe" } }
// Output: 1
// Input: { "user": {} }
// Output: 0

// You just need to implement the countProperties function
function countProperties(user) {
  // Return the number of properties in user
  if (typeof user !== 'object' || user === null) {
    return 0;
  }

  const keys = Object.keys(user);
  return keys.length;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { user } = JSON.parse(input);
  const result = countProperties(user);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above