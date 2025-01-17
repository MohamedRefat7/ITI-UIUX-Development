alert("Welcome to my site");

let userName = "";
while (userName === "" || !isNaN(userName)) {
  userName = prompt("Please enter your name:");
}

let color = "";
const validColors = ["red", "green", "blue"];
while (!validColors.includes(color)) {
  color = prompt(
    "Please enter your favorite color (red, green, or blue):"
  ).toLowerCase();
  if (!validColors.includes(color)) {
    alert("Please choose a valid color: red, green, or blue.");
  }
}

document.write(
  "<h3 style='color:" + color + "'>Welcome " + userName + " To My Site</h3>"
);
