// To write a custom forEach function that mimics the behavior of Array.prototype.forEach:

// Basic implementation of custom forEach function
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this[i], i, this);
  }
};

// SDE2, SDE3 level implementation of custom forEach function
Array.prototype.customForEach = function (callback, thisContext) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const length = this.length;

  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty(i)) {
      callback.call(thisContext, this[i], i, this);
    }
    i++;
  }
};


// Custom implementation of Array.prototype.myReduce
if(!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue ?? this[0]; // Nullish coalescing to handle undefined initialValue
    let startIndex = initialValue === undefined ? 1 : 0;

    for(let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i]);
    }

    return acc;
  }
}