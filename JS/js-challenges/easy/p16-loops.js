// Challenge name: Count Working Days

// Test Cases
// Input: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// Output: 5

// You just need to implement the workingDays function
function workingDays(days) {
  // your code here
  return days.length
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be a JSON string array of days)
  const days = JSON.parse(input);

  // Call our function
  const result = workingDays(days);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above