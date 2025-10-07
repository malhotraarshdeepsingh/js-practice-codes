// Challenge name: Object Cleaner

// Test Cases
// Input: { "a": 1, "b": null, "c": 3, "d": undefined }
// Output: { "a": 1, "c": 3 }

// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    if (typeof obj !== 'object' || obj === null) {
        throw new Error("Input must be a valid object.");
    }

    const cleanedObj = {};
    
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== null && typeof obj[key] !== 'undefined') {
            cleanedObj[key] = obj[key];
        }
    }

    return cleanedObj;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = cleanObject(obj);
    process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above