function ptaNhi(fn, delay) {
    let myId;
    return function(...args) {
        clearTimeout(myId);
        myId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function logMessage(message) {
    console.log(message);
}

// ptaNhi(logMessage("Hello, World!"), 2000);
// ptaNhi(logMessage("Hello, World!"), 2000);
// ptaNhi(logMessage("Hello, World!"), 2000);
// ptaNhi(logMessage("Hello, World!"), 2000);


// ptaNhi(logMessage, 2000)("Hello, World!");
// ptaNhi(logMessage, 2000)("Hello, World!");
// ptaNhi(logMessage, 2000)("Hello, World!");
// ptaNhi(logMessage, 2000)("Hello, World!");

const debouncedLog = ptaNhi(() => logMessage("Hello, World!"), 2000);

debouncedLog("Hello, World!");
debouncedLog("Hello, World!");
debouncedLog("Hello, World!");
debouncedLog("Hello, World!");
