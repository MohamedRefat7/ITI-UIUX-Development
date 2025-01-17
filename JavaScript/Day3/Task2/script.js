/* Ask the user to enter a message then display it using the different html heading tags 
(from <h1> to <h6>) using Loops.  */

let message = "";
while (message === "") {
  message = prompt("Please enter a message");
}
for (let index = 1; index <= 6; index++) {
  document.write("<h" + index + ">" + message + "</h" + index + ">");
}
