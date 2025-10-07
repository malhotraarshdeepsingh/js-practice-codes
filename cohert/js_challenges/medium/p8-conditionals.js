// Test Cases:
// Test Case 1
// Input: { "year": 2020 }
// Expected Output: "Leap Year"
// Test Case 2
// Input: { "year": 1900 }  
// Expected Output: "Not a Leap Year"
// Test Case 3
// Input: { "year": 2000 }
// Expected Output: "Leap Year"

// Challenge name: Leap Year Checker
// Description: Create a function that takes a year as input and determines whether it is a leap year or not. A year is considered a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400. The function should return "Leap Year" if the year is a leap year, and "Not a Leap Year" otherwise.

// You just need to implement the isLeapYear function
function isLeapYear(year) {
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

// example usage
console.log(isLeapYear(2020)); // Output: "Leap Year"
console.log(isLeapYear(1900)); // Output: "Not a Leap Year"
console.log(isLeapYear(2000)); // Output: "Leap Year"

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { year } = JSON.parse(input);
  const result = isLeapYear(year);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above