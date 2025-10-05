// Create an object with a type of Tea with prop name, type and caffeine content
const Tea = {
  name: "Green Tea",
  type: "Herbal",
  caffeineContent: "Low",
};

// Access the properties of the Tea object
console.log(`Name: ${Tea.name}`);
console.log(`Type: ${Tea["type"]}`);

// Add a new property to the Tea object
Tea.origin = "China";

// Change the caffeine content of the Tea object
Tea.caffeineContent = "Medium";

// IMPORTANT:- Remove the type property from the Tea object
delete Tea.type;

// Check if the type property exists in the Tea object
console.log(`Type exists: ${Tea.hasOwnProperty("type")}`);
console.log("type" in Tea);

// Use for...in loop to iterate over the properties of the Tea object
for (const key in Tea) {
  console.log(`${key}: ${Tea[key]}`);
}

// Create a nested object representing different types of Tea and their properties
const teaTypes = {
  green: {
    name: "Green Tea",
    type: "Herbal",
    caffeineContent: "Low",
    origin: "China",
  },
  black: {
    name: "Black Tea",
    type: "Camellia sinensis",
    caffeineContent: "High",
    origin: "India",
  },
  oolong: {
    name: "Oolong Tea",
    type: "Semi-oxidized",
    caffeineContent: "Medium",
    origin: "Taiwan",
  },
};

// Create a copy of tea Object
const teaCopy = { ...Tea }; // shallow copy

// Add a custom method describe to the tea object that returns a string description string.
Tea.describe = function () {
  return `${this.name} is a ${this.type} tea with ${this.caffeineContent} caffeine content, originating from ${this.origin}.`;
};

// IMPORTANT:- Merge two objects representing different types of Tea
const herbalTea = {
  name: "Chamomile Tea",
  type: "Herbal",
  caffeineContent: "None",
  origin: "Egypt",
};
const blackTea = {
  name: "Earl Grey",
  type: "Black",
  caffeineContent: "Medium",
  origin: "England",
};
const mergedTea = { ...herbalTea, ...blackTea };
