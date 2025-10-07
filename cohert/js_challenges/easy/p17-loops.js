// Challenge name: Total Stars in Levels
// Description: You have multiple levels of stars to count. Each level contains a certain number of stars represented by the "*" character. Your task is to count the total number of stars across all levels. Create a function that takes an array of arrays (2D array) where each inner array represents a level and contains strings of "*" and " " (space). The function should return the total count of "*" characters across all levels.

// Test Cases
// Input: [["*", " ", "*"], [" ", "*", " "], ["*", "*", "*"]]
// Output: 5

// You just need to implement the totalStars function
function totalStars(starLevels) {
  let count = 0;

  for (let row of starLevels) {
    for (let item of row) {
      if (item === "*") {
        count++;
      }
    }
  }

  return count
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be a JSON string array of star levels)
  const starLevels = JSON.parse(input);

  // Call our function
  const result = totalStars(starLevels);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
