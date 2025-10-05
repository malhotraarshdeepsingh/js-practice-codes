// Challenge name: Add Puppy to Queue

// Test cases:
// Test Case 1
// Input: { "queue": ["Bella", "Max"], "puppyName": "Charlie" }
// Expected Output: ["Charlie", "Bella", "Max"]
// Test Case 2
// Input: { "queue": [], "puppyName": "Daisy" }
// Expected Output: ["Daisy"]
// Test Case 3
// Input: { "queue": ["Rocky"], "puppyName": "Luna" }
// Expected Output: ["Luna", "Rocky"]

// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
    // Add puppyName at the beginning of queue and return updated queue
    queue.unshift(puppyName)
    return queue
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain queue and puppyName
  const { queue, puppyName } = JSON.parse(input);

  // Call our function
  const result = addPuppy(queue, puppyName);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
