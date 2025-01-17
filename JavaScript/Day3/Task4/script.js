/* 4.1. Create a function that accepts only 2 parameters and throw exception if number of
parameters either less than or exceeds 2 parameters. */

// function sum(a, b) {
//   if (arguments.length !== 2) {
//     throw new Error("Invalid number of parameters");
//   } else if (typeof a !== "number" || typeof b !== "number") {
//     throw new Error("Invalid parameter type");
//   }
//   return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));

/*4.2. Write your own function that can add n values ensure that all passing parameters are
numerical values only.  */

// function sum() {
//   for (var i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "number") {
//       throw new Error("Invalid parameter type");
//     }
//   }
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));
