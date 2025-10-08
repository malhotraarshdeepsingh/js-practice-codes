function createCounter() {
  let count = 0;

  return {
    increment: () => {
      count++;
      console.log(count);
    },
    getCount: () => count,
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // A
counter1.increment(); // B
counter2.increment(); // C

let x = 10;

setTimeout(() => {
  console.log("Timeout 1:", x);
}, 0);

Promise.resolve().then(() => {
  x = 20;
  console.log("Promise 1:", x);
});

setTimeout(() => {
  console.log("Timeout 2:", x);
}, 0);

x = 30;

console.log("Sync:", x);

// Expected Output:
// A: 1
// B: 2
// C: 1
// Sync: 30
// Promise 1: 20
// Timeout 1: 30
// Timeout 2: 30
