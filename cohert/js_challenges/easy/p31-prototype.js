// Challenge name: Animal Sound

// Test Cases:
// Test Case 1
// Input: { "name": "Dog" }
// Expected Output: "Some generic sound"
// Test Case 2
// Input: { "name": "Cat" }
// Expected Output: "Some generic sound"
// Test Case 3
// Input: { "name": "Cow" }
// Expected Output: "Some generic sound"

// You need to implement the Animal constructor function and its prototype method

function Animal(name) {
    // Initialize name property
    this.name = name;
}

// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function() {
  return "Some generic sound";
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name } = JSON.parse(input);
  const animal = new Animal(name);
  process.stdout.write(JSON.stringify(animal.makeSound()));
});
// Please don't remove the code above