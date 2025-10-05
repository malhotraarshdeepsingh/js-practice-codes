// Challenge name: Filter Healthy Food

// Test cases:
// Test Case 1
// Input: { "foodList": ["Salad", "Burger", "Fruit", "Burger", "Vegetables"] }
// Expected Output: ["Salad", "Fruit", "Vegetables"]
// Test Case 2
// Input: { "foodList": ["Burger", "Burger", "Burger"] }
// Expected Output: []
// Test Case 3
// Input: { "foodList": ["Pasta", "Rice", "Salad"] }
// Expected Output: ["Pasta", "Rice", "Salad"]

// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    newList = foodList.filter(food => food !== "Burger")
    return newList
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain foodList
  const { foodList } = JSON.parse(input);

  // Call our function
  const result = filterHealthy(foodList);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
