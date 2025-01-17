document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const color = document.getElementById("color").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  setCookie("username", username, expiryDate);
  setCookie("age", age, expiryDate);
  setCookie("fontColor", color, expiryDate);
  setCookie("gender", gender, expiryDate);

  location.href = "profile.html";
});
