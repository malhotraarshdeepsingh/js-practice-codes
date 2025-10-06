// Challenge name: Library System

// Test Cases
// Input: { "books": ["Book A", "Book B"], "searchTitle": "Book A" }
// Output: "Book found"
// Input: { "books": ["Book A", "Book B"], "searchTitle": "Book C" }
// Output: "Book not found"

// You need to implement the Library constructor function and its prototype methods

function Library() {
    // Initialize books property
    this.books = [];
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book) {
  this.books.push(book);
};

// Define findBook method on Library's prototype
Library.prototype.findBook = function(title) {
  if (this.books.includes(title)) {
    return "Book found";
  } else {
    return "Book not found";
  }
};

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { books, searchTitle } = JSON.parse(input);
  const library = new Library();

  books.forEach(book => library.addBook(book));

  process.stdout.write(JSON.stringify(library.findBook(searchTitle)));
});
// Please don't remove the code above