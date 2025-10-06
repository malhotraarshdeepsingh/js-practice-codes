// Challenge name: Distribute Gifts

// Test Cases:
// Test Case 1
// Input: { "totalGifts": 10, "friends": 3 }
// Expected Output: 3
// Test Case 2
// Input: { "totalGifts": 5, "friends": 10 }
// Expected Output: 5
// Test Case 3
// Input: { "totalGifts": 0, "friends": 5 }
// Expected Output: 0

// function distributeGifts(totalGifts, friends) {
//   // write your code here
//   return totalGifts >= friends ? friends : totalGifts;
// }

// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  let giftsGiven = 0;
  for (let i = 0; i < friends; i++) {
    if (totalGifts > 0) {
      giftsGiven++;
      totalGifts--;
    }
  }
  return giftsGiven;
}

// example usage
console.log(distributeGifts(10, 3)); // Output: 3
console.log(distributeGifts(5, 10)); // Output: 5
console.log(distributeGifts(0, 5)); // Output: 0

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { totalGifts, friends } = JSON.parse(input); // Parse input as number
  // Call our function
  const result = distributeGifts(totalGifts, friends);
  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above