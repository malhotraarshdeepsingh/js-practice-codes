// Challenge name: Student Profile Creator

// Test Cases
// Input: { "name": "Alice", "age": 10, "grade": "5th" }
// Output: { "name": "Alice", "age": 10, "grade": "5th" }
// Input: { "name": "Bob", "age": 4, "grade": "1st" }
// Output: "Invalid input"

// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (typeof name !== "string" || 
      typeof grade !== "string" || 
      typeof age !== "number" || 
      age <= 5 || 
      !Number.isInteger(age)) {
    return "Invalid input";
  }

  return {
    name: name,
    age: age,
    grade: grade
  };
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, age, grade } = JSON.parse(input);
  const result = createStudentProfile(name, age, grade);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above