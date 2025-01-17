/* Make a function that takes date string as a parameter, and returns the Day
name (Saturday, Sunday,) of the given date. */

function getDayName(dateString) {
  const date = new Date(dateString);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[date.getDay()];
}

const date = prompt("Enter a date:");
const dayName = getDayName(date);
document.write(dayName);
