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
