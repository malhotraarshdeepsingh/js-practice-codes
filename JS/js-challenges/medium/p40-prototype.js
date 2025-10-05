// Challenge name: Product Inventory System

// Test Cases
// Input: { "product": { "name": "Laptop", "price": 1000, "stock": 5 }, "action": { "type": "discount", "percent": 10 } }
// Output: [900, 5]
// Input: { "product": { "name": "Phone", "price": 500, "stock": 2 }, "action": { "type": "purchase", "quantity": 3 } }
// Output: "Not enough stock"
// Input: { "product": { "name": "Tablet", "price": 300, "stock": 10 }, "action": { "type": "purchase", "quantity": 4 } }
// Output: [300, 6]

// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  this.name = name;
  this.price = price;
  this.stock = stock;
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) {
    return;
  }
  const discountAmount = (this.price * percent) / 100;
  this.price = Math.round(this.price - discountAmount);
};

// Define purchase method on Product's prototype
Product.prototype.purchase = function(quantity) {
  if (quantity <= 0) {
    return "Invalid purchase quantity";
  }

  if (this.stock >= quantity) {
    this.stock -= quantity;
    return this.stock;
  } else {
    return "Not enough stock";
  }
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { product, action } = JSON.parse(input);
  const storeItem = new Product(product.name, product.price, product.stock);

  if (action.type === "discount") {
    storeItem.applyDiscount(action.percent);
  } else if (action.type === "purchase") {
    process.stdout.write(JSON.stringify(storeItem.purchase(action.quantity)));
    return;
  }

  process.stdout.write(JSON.stringify([storeItem.price, storeItem.stock]));
});
// Please don't remove the code above