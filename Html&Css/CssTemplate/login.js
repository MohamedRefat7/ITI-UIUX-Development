document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true; // To track overall form validity

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const address = document.getElementById("address").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Reset error messages
    resetErrors();

    // Username validation
    //validation at least 3 characters
    if (username === "") {
      displayError("nameError", "This field is required.");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(username)) {
      displayError("nameError", "Name must contain only letters and spaces.");
      isValid = false;
    } else if (username.length < 3) {
      displayError("nameError", "Name must be at least 3 characters long.");
      isValid = false;
    }

    // Email validation
    if (email === "") {
      displayError("emailError", "This field is required.");
      isValid = false;
    } else if (
      !/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email)
    ) {
      displayError("emailError", "Invalid email format.");
      isValid = false;
    }

    // Password validation
    if (password === "") {
      displayError("passwordError", "This field is required.");
      isValid = false;
    } else if (password.length < 8) {
      displayError(
        "passwordError",
        "Password must be at least 8 characters long."
      );
      isValid = false;
    } else if (!/\d/.test(password)) {
      displayError(
        "passwordError",
        "Password must contain at least one number."
      );
      isValid = false;
    }

    // Address validation
    //validate that it takes numbers and letters only
    if (address === "") {
      displayError("addressError", "This field is required.");
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
      displayError(
        "addressError",
        "Address must contain only letters and spaces."
      );
      isValid = false;
    }

    // Mobile validation
    // validate that it must start with 010 or 011 or 012 or 015
    //validate that it takes only numbers
    if (mobile === "") {
      displayError("mobileError", "This field is required.");
      isValid = false;
    } else if (!/^(010|011|012|015)\d{8}$/.test(mobile)) {
      displayError(
        "mobileError",
        "Enter a valid mobile number that start with 010 or 011 or 012 or 015 and contain 11 numbers."
      );
      isValid = false;
    }

    // Gender validation
    if (!gender) {
      displayError("genderError", "This field is required.");
      isValid = false;
    }

    // If the form is valid, save data and redirect
    if (isValid) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("email", email);
      window.location.href = "index.html";
    }
  });

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.color = "red";
  }
}

function resetErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}
