document.getElementById("addButton").addEventListener("click", addUser);
document.getElementById("resetButton").addEventListener("click", resetForm);

function addUser() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();

  resetValidation();

  let isValid = true;

  if (name === "") {
    displayError("nameError", "This field is required.");
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    displayError("nameError", "Name must contain only letters and spaces.");
    isValid = false;
  }

  if (age === "") {
    displayError("ageError", "This field is required.");
    isValid = false;
  } else if (!/^\d+$/.test(age) || parseInt(age) <= 0) {
    displayError("ageError", "Age must be a number.");
    isValid = false;
  }
  if (email === "") {
    displayError("emailError", "This field is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    displayError("emailError", "Enter a valid email address.");
    isValid = false;
  }

  if (isValid) {
    const tableBody = document.getElementById("userTableBody");
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${name}</td>
          <td>${age}</td>
          <td>${email}</td>
        `;

    const table = document.querySelector("table");
    table.classList.remove("hidden");

    tableBody.appendChild(row);

    document.getElementById("userForm").reset();
  }
}

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function resetValidation() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((errorElement) => {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  });
}

function resetForm() {
  document.getElementById("userForm").reset();
  resetValidation();
}
