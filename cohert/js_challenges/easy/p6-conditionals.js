// Challenge name: Voting Eligibility

// Test Cases:
// Test Case 1
// Input: { "age": 20 }
// Expected Output: "Eligible"
// Test Case 2
// Input: { "age": 17 }
// Expected Output: "Not Eligible"
// Test Case 3
// Input: { "age": 18 }
// Expected Output: "Eligible"

// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
  return age >= 18 ? "Eligible" : "Not Eligible";
}

// example usage
console.log(checkVotingEligibility(20)); // Output: "Eligible"
console.log(checkVotingEligibility(17)); // Output: "Not Eligible"
console.log(checkVotingEligibility(18)); // Output: "Eligible"


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { age } = JSON.parse(input);
  const result = checkVotingEligibility(age);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above


