// Challenge name: Inverted Mountain Pattern
// Description: Create a function that takes a number n as input and prints an inverted mountain pattern of asterisks (*) with n rows. The first row should contain n asterisks, the second row should contain n-1 asterisks, and so on, until the last row which should contain 1 asterisk. Each row should be printed on a new line.

// Test Cases
// Input: 5
// Output:
// *****
// ****
// ***
// **
// *

function invertedMountain(n) {
  let result = "";

  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    result += row + "\n";
  }

  return result.trim();
}

// You just need to implement the invertedMountain function
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const n = parseInt(input.trim(), 10);  // Get the number input
  const result = invertedMountain(n);  // Call our function
  process.stdout.write(result);  // Output the result
});
// Please don't remove the code above