// const birthDate = prompt("Enter your birth date in the format DD-MM-YYYY");
// const date = new Date(birthDate);

// if (birthDate.length === 10 && birthDate[2] === "-" && birthDate[5] === "-") {
//   document.write(`You were born on ${date.toDateString()}`);
// } else {
//   alert("Wrong Date Format");
// }

function returnDate() {
  const birthDate = prompt("Enter your birth date in the format DD-MM-YYYY");
  const date = new Date(birthDate);
  if (birthDate.length === 10 && birthDate[2] === "-" && birthDate[5] === "-") {
    document.write(`You were born on ${date.toDateString()}`);
  } else {
    alert("Wrong Date Format");
  }
}

returnDate();
