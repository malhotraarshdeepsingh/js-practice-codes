// Challenge name: Simple Counter with Prototype

// Test Cases
// Input: { "action": "increment" } or { "action": "decrement" }
// Output: current count after performing the action
// Initial count is 0

// You need to implement the Counter constructor function and its prototype methods

function Counter() {
    // Initialize count property
    this.count = 0;
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function() {
    this.count += 1;
    return this.count;
};

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function() {
    this.count -= 1;
    return this.count;
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { action } = JSON.parse(input);
  const counter = new Counter();

  if (action === "increment") {
    counter.increment();
  } else if (action === "decrement") {
    counter.decrement();
  }

  process.stdout.write(JSON.stringify(counter.count));
});
// Please don't remove the code above