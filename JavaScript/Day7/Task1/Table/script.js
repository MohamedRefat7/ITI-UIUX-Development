var par = document.getElementById("PAR");
let td = document.querySelectorAll("td");

td[0].addEventListener("click", function (e) {
  if (e.target != this) {
    par.style.fontFamily = e.target.nextSibling.nodeValue;
  }
});
function ChangeAlign(e) {
  par.style.textAlign = e;
}
function ChangeHeight(e) {
  par.style.lineHeight = e;
}
function ChangeLSpace(e) {
  par.style.letterSpacing = e;
}
function ChangeIndent(e) {
  par.style.textIndent = e;
}
function ChangeTransform(e) {
  par.style.textTransform = e;
}

function ChangeDecorate(e) {
  par.style.textDecoration = e;
}

function ChangeBorder(e) {
  par.style.borderStyle = e;
}

function ChangeBorderColor(e) {
  par.style.borderColor = e;
}
