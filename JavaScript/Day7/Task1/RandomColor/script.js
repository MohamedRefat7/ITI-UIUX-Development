/* 
Clone HTML div when it is clicked and change the background of the new copy to a random color 
then append it to the body.
*/

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const clickableDiv = document.querySelector(".box");

clickableDiv.addEventListener("click", function () {
  const newDiv = clickableDiv.cloneNode(true);
  newDiv.style.backgroundColor = getRandomColor();
  newDiv.textContent = "Suboriginal";
  document.body.appendChild(newDiv);
});
