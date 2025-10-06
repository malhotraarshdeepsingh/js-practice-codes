// Challenge name: Object Merger

// Test Cases
// Input: { "obj1": { "a": 1, "b": 2 }, "obj2": { "b": 3, "c": 4 } }
// Output: { "a": 1, "b": 3, "c": 4 }
// Input: { "obj1": {}, "obj2": { "x": 10 } }
// Output: { "x": 10 }
// Input: { "obj1": {}, "obj2": {} }
// Output: {}

// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  const isValidObject = (obj) => typeof obj === 'object' && obj !== null;

  if (!isValidObject(obj1) || !isValidObject(obj2)) {
    throw new Error("Inputs must be valid objects.");
  }

  const isObj1Empty = Object.keys(obj1).length === 0;
  const isObj2Empty = Object.keys(obj2).length === 0;

  if (isObj1Empty && isObj2Empty) {
    return {};
  }
  if (isObj1Empty) {
    return obj2;
  }
  if (isObj2Empty) {
    return obj1;
  }

  return { ...obj1, ...obj2 };
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { obj1, obj2 } = JSON.parse(input);
  const result = mergeObjects(obj1, obj2);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above