function reverseArray(arr) {
  return arr.reverse();
}

const array1 = [1, 2, 3, 4, 5];
console.log(reverseArray(array1));

/////////////////////////////

function reverseArgument() {
  const argsArray = Array.prototype.slice.call(arguments);
  const reversedArray = argsArray.reverse();
  return reversedArray;
}

console.log(reverseArgument(1, 2, 3, 4, 5));
console.log(reverseArgument("mohamed", "ahmed", "ali"));

/////////////////////////

function reversedArray() {
  const result = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
    result.push(arguments[i]);
  }
  return result;
}

console.log(reversedArray(1, 2, 3, 4, 5));
console.log(reversedArray("mohamed", "ahmed", "ali"));
// Array.from(arguments)
