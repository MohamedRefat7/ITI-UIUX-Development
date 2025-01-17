let sum = 0;
let number;

do {
  let input = prompt("Please enter a number");

  if (input === null || input === "" || isNaN(Number(input))) {
    alert("Please enter a valid number.");
    continue;
  }

  number = Number(input);

  if (number !== 0 && number <= 100) {
    sum += number;
  }

  if (number === 0 || sum > 100) {
    break;
  }
} while (true);

document.write("The sum of the entered values is " + sum);
