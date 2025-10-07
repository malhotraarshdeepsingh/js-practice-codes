// Challenge name: Nested Object Value Retriever

// Test Cases
// Input: { "a": { "b": { "c": 42 } } }, "a.b.c"
// Output: 42
// Input: { "x": { "y": { "z": "hello" } } }, "x.y.z"
// Output: "hello"
// Input: { "foo": { "bar": 100 } }, "foo.baz"
// Output: "Key not found"

// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  if (typeof obj !== 'object' || obj === null) {
    return "Key not found";
  }

  if (typeof keyPath !== 'string' || keyPath.trim() === '') {
    return "Key not found";
  }
  const keys = keyPath.split('.');
  let current = obj;

  for (const key of keys) {
    if (typeof current === 'object' && current !== null && key in current) {
      current = current[key];
    } else {
      return "Key not found";
    }
  }

  return current;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { obj, keyPath } = JSON.parse(input);
  const result = getNestedValue(obj, keyPath);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above