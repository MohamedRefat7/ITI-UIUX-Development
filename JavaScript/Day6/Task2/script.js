// 1.a Ask the user for number of persons wanted to be entered (the value should be a number only).
// 1.b then ask for users’ information sequentially.
//name : length should be more than 3 and less than 10 characters
//age : should be greater than 10 and less than 60.
// 1.c print users’ information in HTML Table and style the table

let numberOfPersons;

do {
  numberOfPersons = prompt("Enter the number of persons (numbers only):");
} while (isNaN(numberOfPersons) || numberOfPersons <= 0);

let persons = [];

for (let i = 0; i < numberOfPersons; i++) {
  let name;
  let age;

  // Validate name input
  do {
    name = prompt("Enter name (3-10 characters):");
    if (name.length < 3 || name.length >= 10 || !isNaN(name)) {
      alert(
        "Invalid input! Name should be 3-10 characters and should not contain numbers."
      );
    }
  } while (name.length < 3 || name.length >= 10 || !isNaN(name));

  // Validate age input
  do {
    age = prompt("Enter age (between 10 and 60):");
    if (isNaN(age) || age < 10 || age > 60) {
      alert(
        "Invalid input! Age should be between 10 and 60 and must be a number."
      );
    }
  } while (isNaN(age) || age < 10 || age > 60);

  persons.push({ name, age });
}

const tableBody = document.querySelector("table tbody");

persons.forEach((person) => {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = person.name;

  let td2 = document.createElement("td");
  td2.innerText = person.age;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tableBody.appendChild(tr);
});
