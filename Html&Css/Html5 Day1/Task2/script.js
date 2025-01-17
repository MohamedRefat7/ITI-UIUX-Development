const output = document.getElementById("output");
const copied = document.getElementById("copied");
const paragraph = document.getElementById("paragraph");

function changeColor() {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  output.innerHTML = `rgb(${red},${green},${blue})`;
  paragraph.style.color = `rgb(${red},${green},${blue})`;
}

output.addEventListener("click", () => {
  let colorValue = output.innerHTML;
  navigator.clipboard.writeText(colorValue);
  copied.classList.add("active");
  setTimeout(() => {
    copied.classList.remove("active");
  }, 2500);
});
