// Challenge name: User Password Remover

// Test Cases
// Input: { "user": { "username": "john_doe", "password": "12345" } }
// Output: { "username": "john_doe" }
// Input: { "user": { "username": "jane_doe" } }
// Output: { "username": "jane_doe" }

// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if (typeof user !== 'object' || user === null || !user.username) {
    return user;
  }

  if ('password' in user) {
    delete user.password;
  }

  return user;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { user } = JSON.parse(input);
  const result = removePassword(user);
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above