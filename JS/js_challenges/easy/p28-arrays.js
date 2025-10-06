// Challenge name: Write Love Letter

// Test cases:
// Test Case 1
// Input: { "message": ["You", "are", "awesome!"], "name": "Alice" }
// Expected Output: ["Alice", "You", "are", "awesome!"]
// Test Case 2
// Input: { "message": [], "name": "Bob" }
// Expected Output: ["Bob"]
// Test Case 3
// Input: { "message": ["Hello"], "name": "Charlie" }
// Expected Output: ["Charlie", "Hello"]

// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
    // Add name at the start of the message and return updated array
    return [name, ...message]
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain message and name
  const { message, name } = JSON.parse(input);

  // Call our function
  const result = writeLoveLetter(message, name);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
