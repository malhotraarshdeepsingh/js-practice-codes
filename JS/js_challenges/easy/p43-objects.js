// Challenge name: Product Discount Checker

// Test Cases
// Input: { "product": { "name": "Laptop", "price": 1000, "discount": 10 } }
// Output: true
// Input: { "product": { "name": "Phone", "price": 500 } }
// Output: false
// Input: { "product": { "name": "Tablet", "price": 300, "discount": 5 } }
// Output: true

// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property
  if (typeof product !== 'object' || product === null) {
    return false;
  }

  return 'discount' in product;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { product } = JSON.parse(input);
  const result = hasDiscount(product);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above