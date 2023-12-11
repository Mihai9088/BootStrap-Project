const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const error = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    console.log("Form is valid. Submitting...");
  }
});

function validateForm() {
  clearErrorMessages();

  const firstName = name.value.trim();
  if (firstName === "") {
    displayError("Please enter your first name", "firstNameError");
    return false;
  }

  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    displayError("Enter your last name", "lastNameError");
    return false;
  }

  const emailAddress = email.value.trim();
  if (emailAddress === "") {
    displayError("Enter your email address", "emailError");
    return false;
  } else if (!isValidEmail(emailAddress)) {
    displayError("Enter a valid email address", "emailError");
    return false;
  }

  const messageSubject = subject.value.trim();
  if (messageSubject === "") {
    displayError("Enter the subject", "subjectError");
    return false;
  }

  const messageContent = message.value.trim();
  if (messageContent === "") {
    displayError("Enter your message", "messageError");
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayError(errorMessage, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  errorElement.textContent = errorMessage;
}

function clearErrorMessages() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}
