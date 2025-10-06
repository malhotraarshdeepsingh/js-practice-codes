// Challenge name: Calculate Grade

// Test Cases:
// Test Case 1
// Input: { "marks": 95 }
// Expected Output: "A"
// Test Case 2
// Input: { "marks": 85 }
// Expected Output: "B"
// Test Case 3
// Input: { "marks": 75 }
// Expected Output: "C"

// You just need to implement the calculateGrade function
function calculateGrade(marks) {
  // Return grade based on the marks
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  if (marks <= 60) return "F";
}

// example usage
console.log(calculateGrade(95)); // Output: "A"
console.log(calculateGrade(85)); // Output: "B"
console.log(calculateGrade(75)); // Output: "C"

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { marks } = JSON.parse(input);
  const result = calculateGrade(marks);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above