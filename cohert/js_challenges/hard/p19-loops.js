// Test Cases
// Input: 3
// Output:
//   *
//  ***
// *****
//  ***
//   *

// Challenge name: Shiny Diamond Rug
// Description: Create a function that generates a diamond-shaped rug pattern using asterisks ("*"). The rug should have a height and width of 2*n - 1, where n is the input number. The diamond should be centered and symmetrical, with the widest part in the middle row. Each row should contain spaces to ensure the diamond shape is maintained.

function shinyDiamondRug(n) {
  const lines = [];

  // top (including middle)
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let s = 0; s < n - i; s++) line += " ";
    for (let k = 0; k < 2 * i - 1; k++) line += "*";
    lines.push(line);
  }

  // bottom
  for (let i = n - 1; i >= 1; i--) {
    let line = "";
    for (let s = 0; s < n - i; s++) line += " ";
    for (let k = 0; k < 2 * i - 1; k++) line += "*";
    lines.push(line);
  }

  return lines.join("\n");
}

// You just need to implement the shinyDiamondRug function
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const n = parseInt(input.trim(), 10);  // Get the number input
  const result = shinyDiamondRug(n);  // Call our function
  process.stdout.write(result);  // Output the result
});
// Please don't remove the code above