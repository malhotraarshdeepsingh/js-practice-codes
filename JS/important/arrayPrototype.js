// To print original values of an array
function printArray(arr) {
  arr.forEach((value, index) => {
    if (arr.hasOwnProperty(index)) {
      console.log(`Index: ${index}, Value: ${value}`);
    }
  });
}
