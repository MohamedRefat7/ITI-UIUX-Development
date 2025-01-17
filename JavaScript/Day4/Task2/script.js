/* Write a script that ask the user to Enter the value of a circle’s radius in order to calculate
its area. */

let radius;

while (true) {
  radius = prompt("Please enter the radius of the circle");
  if (!isNaN(radius) && radius !== "") {
    break;
  } else {
    alert("Please enter a valid number for the radius.");
  }
}

let area = Math.PI * Math.pow(Number(radius), 2);
document.write("The area of the circle is " + area);

//

let squareRoot;
while (true) {
  squareRoot = prompt("Please enter a number");
  if (!isNaN(squareRoot) && squareRoot !== "") {
    break;
  } else {
    alert("Please enter a valid number");
  }
}
let result = Math.sqrt(squareRoot);
document.write("<br> The square root of " + squareRoot + " is " + result);
