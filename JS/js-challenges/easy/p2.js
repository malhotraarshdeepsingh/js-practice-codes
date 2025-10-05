// Challenge name: Remaining Apples

// Test Cases:
// Test Case 1
// Input: { "totalApples": 10, "givenAway": 3 }
// Expected Output: 7
// Test Case 2
// Input: { "totalApples": 20, "givenAway": 5 }
// Expected Output: 15
// Test Case 3
// Input: { "totalApples": 100, "givenAway": 1 }
// Expected Output: 99

// Your code starts here
// You just need to implement the remainingApples function
function remainingApples(totalApples, givenAway) {
  // Return totalApples minus givenAway
  return totalApples - givenAway
}

// example usage
console.log(remainingApples(10, 3));    // Output: 7
console.log(remainingApples(20, 5));    // Output: 15
console.log(remainingApples(100, 1));   // Output: 99


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain totalApples and givenAway
  const { totalApples, givenAway } = JSON.parse(input);

  // Call our function
  const result = remainingApples(totalApples, givenAway);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
