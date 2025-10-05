// Challenge name: Day of the Week

// Test Cases:
// Test Case 1
// Input: { "day": 1 }
// Expected Output: "Monday"
// Test Case 2
// Input: { "day": 2 }
// Expected Output: "Tuesday"
// Test Case 3
// Input: { "day": 3 }
// Expected Output: "Wednesday"

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  let dayName;

  switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
  }

  return dayName
}

// example usage
console.log(getDayOfWeek(1)); // Output: "Monday"
console.log(getDayOfWeek(2)); // Output: "Tuesday"
console.log(getDayOfWeek(3)); // Output: "Wednesday"

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { day } = JSON.parse(input);
  const result = getDayOfWeek(day);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
