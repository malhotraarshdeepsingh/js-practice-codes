// Challenge name: Robot Battery Charge

// Test Cases:
// Test Case 1
// Input: { "name": "Robo1", "batteryLevel": 50 }
// Expected Output: 70
// Test Case 2
// Input: { "name": "Robo2", "batteryLevel": 90 }
// Expected Output: 100
// Test Case 3
// Input: { "name": "Robo3", "batteryLevel": 100 }
// Expected Output: 100

// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name
  this.batteryLevel = batteryLevel
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
  return this.batteryLevel;
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, batteryLevel } = JSON.parse(input);
  const robot = new Robot(name, batteryLevel);
  robot.charge();
  process.stdout.write(JSON.stringify(robot.batteryLevel));
});
