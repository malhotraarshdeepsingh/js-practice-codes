// Challenge name: Add Guest to List

// Test cases
// Test Case 1
// Input: { "guestList": ["Alice", "Bob"], "newGuest": "Charlie" }
// Expected Output: ["Alice", "Bob", "Charlie"]
// Test Case 2
// Input: { "guestList": [], "newGuest": "David" }
// Expected Output: ["David"]
// Test Case 3
// Input: { "guestList": ["Eve"], "newGuest": "Frank" }
// Expected Output: ["Eve", "Frank"]

// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    guestList.push(newGuest)
    return guestList
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain guestList and newGuest
  const { guestList, newGuest } = JSON.parse(input);

  // Call our function
  const result = addGuest(guestList, newGuest);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
