// Error paragraphs
const fullNameError = document.getElementById("fullName");
const emailError = document.getElementById("email");
fullNameError.innerText = "Please enter your full name";
emailError.innerText = "Please enter a valid email address";

// Form
const form = document.getElementById("contact-form");

// Input fields
const submit = document.getElementById("submitBtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullNameField").value;
  const email = document.getElementById("emailField").value;
  if (email !== "" && fullName !== "" && email.includes("@") === true) {
    alert("Successful");
    form.reset();
  }
  if (!fullName) {
    fullNameError.style.display = "block";
    setTimeout(() => {
      fullNameError.style.display = "none";
    }, 3000);
  }
  if (email.length === 0) {
    emailError.style.display = "block";
    setTimeout(() => {
      emailError.style.display = "none";
    }, 3000);
  } else if (email.includes("@") !== true) {
    emailError.innerText = "Email address missing '@'";
    emailError.style.display = "block";
    setTimeout(() => {
      emailError.style.display = "none";
    }, 3000);
  }
});
