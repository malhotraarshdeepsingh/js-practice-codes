// Challenge name: Temperature Converter

// Test Cases:
// Test Case 1
// Input: { "value": 32, "scale": "C" }
// Expected Output: "89.6°F"
// Test Case 2
// Input: { "value": 89.6, "scale": "F" }
// Expected Output: "32°C"
// Test Case 3
// Input: { "value": 100, "scale": "C" }
// Expected Output: "212°F"

// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  if (scale == "C") return `${((value * 9) / 5) + 32}°F`
  if (scale == "F") return `${(((value - 32) * 5) / 9)}°C`
}

// example usage
console.log(convertTemperature(32, "C")); // Output: "89.6°F"
console.log(convertTemperature(89.6, "F")); // Output: "32°C"
console.log(convertTemperature(100, "C")); // Output: "212°F"


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { value, scale } = JSON.parse(input);
  const result = convertTemperature(value, scale);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
