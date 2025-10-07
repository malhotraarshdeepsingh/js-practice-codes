// Challenge name: Sort Books Alphabetically

// Test cases
// Test Case 1
// Input: { "books": ["The Great Gatsby", "1984", "To Kill a Mockingbird"] }
// Expected Output: ["1984", "The Great Gatsby", "To Kill a Mockingbird"]
// Test Case 2
// Input: { "books": ["Brave New World", "Fahrenheit 451", "The Catcher in the Rye"] }
// Expected Output: ["Brave New World", "Fahrenheit 451", "The Catcher in the Rye"]
// Test Case 3
// Input: { "books": [] }
// Expected Output: []

// You just need to implement the sortBooks function
function sortBooks(books) {
    // Sort the books alphabetically and return the updated list
    return books.sort()
}


// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain books
  const { books } = JSON.parse(input);

  // Call our function
  const result = sortBooks(books);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
