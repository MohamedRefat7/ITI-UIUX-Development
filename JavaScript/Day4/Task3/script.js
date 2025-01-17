const numbers = [];

function getNumber(promptMessage) {
  let num;
  do {
    num = parseFloat(prompt(promptMessage));
    if (isNaN(num)) {
      alert("Please enter a valid number.");
    } else if (num === 0) {
      alert("Zero is not allowed.");
    }
  } while (isNaN(num) || num === 0);
  return num;
}

numbers.push(getNumber("Enter the first number:"));
numbers.push(getNumber("Enter the second number:"));
numbers.push(getNumber("Enter the third number:"));

const sum = numbers[0] + numbers[1] + numbers[2];
const product = numbers[0] * numbers[1] * numbers[2];
const division = numbers[0] / numbers[1] / numbers[2];

document.write(`<h1>Adding -- Multiplying -- and Dividing 3 Values</h1>`);
document.write(`<hr>`);
document.write(
  `<h3><span class="red">sum of the 3 values:</span> ${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sum}</h3>`
);
document.write(
  `<h3><span class="red">multiplication of the 3 values:</span> ${numbers[0]} * ${numbers[1]} * ${numbers[2]} = ${product}</h3>`
);
document.write(
  `<h3><span class="red">division of the 3 values: </span> ${division}</h3>`
);

////////////////////////////////////

/* Fill an array of 5 elements from the user, sort it in descending and ascending
orders then display the output as shown in Fig */

// const arr = [];

// function getNumber(promptMessage) {
//   let num;
//   do {
//     num = parseFloat(prompt(promptMessage));
//     if (isNaN(num)) {
//       alert("Please enter a valid number.");
//     } else if (num === 0) {
//       alert("Zero is not allowed.");
//     }
//   } while (isNaN(num));
//   return num;
// }

// arr.push(getNumber("Enter the first number:"));
// arr.push(getNumber("Enter the second number:"));
// arr.push(getNumber("Enter the third number:"));
// arr.push(getNumber("Enter the fourth number:"));
// arr.push(getNumber("Enter the fifth number:"));

// document.write(`<h3><span class="red">Original array: </span>${arr}</h3>`);

// arr.sort((a, b) => b - a);
// document.write(
//   `<h3><span class="red">Sorted in descending order: </span>${arr}</h3>`
// );

// arr.sort((a, b) => a - b);
// document.write(
//   `<h3><span class="red">Sorted in ascending order: </span>${arr}</h3>`
// );
