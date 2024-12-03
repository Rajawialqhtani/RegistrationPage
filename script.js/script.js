document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    clearErrors();
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    let isValid = true;
  
    if (!fullName) {
      showError("nameError", "Full Name is required");
      isValid = false;
    }
  
    if (!validateEmail(email)) {
      showError("emailError", "Enter a valid email address");
      isValid = false;
    }
  
    if (!validatePassword(password)) {
      showError("passwordError", "Password must be at least 8 characters, include a number, an uppercase and lowercase letter");
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      showError("confirmPasswordError", "Passwords do not match");
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("successMessage").innerText = "Registration Successful!";
    }
  });
  
  function showError(id, message) {
    document.getElementById(id).innerText = message;
  }
  
  function clearErrors() {
    document.querySelectorAll(".error-message").forEach((el) => el.innerText = "");
    document.getElementById("successMessage").innerText = "";
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  }
  