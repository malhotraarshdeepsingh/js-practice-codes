let person1 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person2 = {
    name: "Bob",
    age: 25
}

person1.greet(); // Output: Hello, my name is Alice

// Using bind to borrow the greet method for person2
let greetPerson2 = person1.greet.bind(person2);
greetPerson2(); // Output: Hello, my name is Bob

// using call to invoke greet with person2 as context
person1.greet.call(person2); // Output: Hello, my name is Bob