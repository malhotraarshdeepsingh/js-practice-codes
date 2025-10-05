// Challenge name: Traffic Light Action

// Test Cases:
// Test Case 1
// Input: { "color": "Red" }
// Expected Output: "Stop"
// Test Case 2
// Input: { "color": "Yellow" }
// Expected Output: "Slow Down"
// Test Case 3
// Input: { "color": "Green" }
// Expected Output: "Go"

// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  if (color == "Red") return "Stop";
  if (color == "Yellow") return "Slow Down";
  if (color == "Green") return "Go";
  return "Invalid Color";
}

// example usage
console.log(trafficLightAction("Red")); // Output: "Stop"
console.log(trafficLightAction("Yellow")); // Output: "Slow Down"
console.log(trafficLightAction("Green")); // Output: "Go"

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { color } = JSON.parse(input);
  const result = trafficLightAction(color);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
