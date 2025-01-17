window.onload = function () {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    document.getElementById("rememberMe").checked = true;
  }
};

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
      localStorage.setItem("username , email", username + " , " + email);
    } else {
      localStorage.removeItem("username , email");
    }
    alert("You have successfully logged in!");
  });
