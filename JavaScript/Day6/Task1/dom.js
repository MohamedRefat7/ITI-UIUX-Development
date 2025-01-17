//navigate original image and duplicate it and put original on right and duplicated on corner bottom

let original = document.getElementById("header");
let duplicate = original.cloneNode(true);
document.body.appendChild(duplicate);

original.style.float = "right";
original.style.paddingBottom = "20px";

duplicate.style.position = "absolute";
duplicate.style.float = "left";
duplicate.style.marginTop = "30%";
duplicate.style.zIndex = "1";

console.log(original);
console.log(duplicate);

//navigate the ul and li and change bullet style to zigzag and align the ul in the middle of the page

let nav = document.getElementById("navigation");
let ul = document.getElementById("nav");
let listItems = document.querySelectorAll("#nav li");

nav.style.position = "absolute";
nav.style.left = "50%";
nav.style.textAlign = "center";
nav.style.paddingTop = "20%";

ul.style.listStyleType = "circle";

listItems.forEach((item, index) => {
  if (index % 2 === 0) {
    item.style.marginLeft = "5px";
  } else {
    item.style.marginRight = "5px";
  }
});
