function isPalindrome(str, Case) {
  if (!Case) {
    str = str.toLowerCase();
  }
  return str === str.split("").reverse().join("");
}

const inputString = prompt("Enter a string to check if it is a palindrome:");
const choice = prompt("Consider case sensitivity? (yes/no)").toLowerCase();

const Case = choice === "yes";
const result = isPalindrome(inputString, Case);

if (result) {
  document.write(`${inputString} is a palindrome.`);
} else {
  document.write(`${inputString} is not a palindrome.`);
}
