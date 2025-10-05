// Challenge name: Total Chocolate Bars

// Test Cases:
// Test Case 1
// Input: { "barsPerBox": 5, "numberOfBoxes": 2 }
// Expected Output: 10
// Test Case 2
// Input: { "barsPerBox": 3, "numberOfBoxes": 4 }
// Expected Output: 12
// Test Case 3
// Input: { "barsPerBox": 10, "numberOfBoxes": 5 }
// Expected Output: 50

// Your code starts here
// You just need to implement the totalChocolateBars function
function totalChocolateBars(barsPerBox, numberOfBoxes) {
  // Return barsPerBox multiplied by numberOfBoxes
  return barsPerBox * numberOfBoxes
}

// example usage
console.log(totalChocolateBars(5, 2)); // Output: 10
console.log(totalChocolateBars(3, 4)); // Output: 12
console.log(totalChocolateBars(10, 5)); // Output: 50


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain barsPerBox and numberOfBoxes
  const { barsPerBox, numberOfBoxes } = JSON.parse(input);

  // Call our function
  const result = totalChocolateBars(barsPerBox, numberOfBoxes);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
