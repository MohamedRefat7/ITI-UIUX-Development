/* write a script that accepts a string from user through prompt and count the number of
‘e’ characters in it and check that the input is a string not a number. */

let userInput = "";
do {
  userInput = prompt("please enter a string");
  if (isNaN(userInput)) {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] == "e") {
        count++;
      }
    }
    document.write("The number of 'e' characters in the string is " + count);
  }
} while (userInput === "" || !isNaN(userInput));

/*  Write a script that reads from the user his info; validates with regular expression each input and displays it with a
welcoming message. */

// let userName;
// while (true) {
//   userName = prompt("Enter your name (only characters allowed):");
//   if (/^[a-zA-Z\s]+$/.test(userName)) break;
//   alert("Invalid Name: Must contain only characters.");
// }

// let phoneNumber;
// while (true) {
//   phoneNumber = prompt("Enter your phone number (8 digits):");
//   if (/^[0-9]{8}$/.test(phoneNumber)) break;
//   alert("Invalid Phone Number: Must be exactly 8 digits.");
// }

// let mobileNumber;
// while (true) {
//   mobileNumber = prompt(
//     "Enter your mobile number (11 digits, starts with 010, 011, or 012):"
//   );
//   if (/^(010|011|012)[0-9]{8}$/.test(mobileNumber)) break;
//   alert(
//     "Invalid Mobile Number: Must start with 010, 011, or 012 and be 11 digits long."
//   );
// }

// let email;
// while (true) {
//   email = prompt("Enter your email:");
//   if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) break;
//   alert("Invalid Email: Must follow the format abc@123.com.");
// }

// document.write("<h1>Welcome to Our Website!</h1>");
// document.write(`<p><strong>Name:</strong> ${userName}</p>`);
// document.write(`<p><strong>Phone Number:</strong> ${phoneNumber}</p>`);
// document.write(`<p><strong>Mobile Number:</strong> ${mobileNumber}</p>`);
// document.write(`<p><strong>Email:</strong> ${email}</p>`);
