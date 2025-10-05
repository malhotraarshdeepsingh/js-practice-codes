// Challenge name: Eat a Candy

// Test Cases:
// Test Case 1
// Input: { "candyJar": ["Lollipop", "Chocolate", "Gummy Bear"] }
// Expected Output: ["Lollipop", "Chocolate"]
// Test Case 2
// Input: { "candyJar": ["Candy Cane", "Toffee"] }
// Expected Output: ["Candy Cane"]
// Test Case 3
// Input: { "candyJar": ["Jelly Bean"] }
// Expected Output: []

// You just need to implement the eatCandy function
function eatCandy(candyJar) {
    // Remove the last candy from the jar and return the updated jar
    candyJar.pop()
    return candyJar
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain candyJar
  const { candyJar } = JSON.parse(input);

  // Call our function
  const result = eatCandy(candyJar);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
