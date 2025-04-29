// script.js - Add this to all HTML files using:
// <script src="script.js" defer></script>

document.addEventListener("DOMContentLoaded", () => {
    // Form validation (login, signup, contact, post job)
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        let valid = true;
  
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            input.style.borderColor = "red";
            valid = false;
          } else {
            input.style.borderColor = "#ccc";
          }
        });
  
        if (!valid) {
          e.preventDefault();
          alert("Please fill in all required fields.");
        }
      });
    });
  
    // Optional: Show/hide password toggle
    const passwordFields = document.querySelectorAll("input[type='password']");
    passwordFields.forEach((field) => {
      const toggle = document.createElement("span");
      toggle.innerText = "👁️";
      toggle.style.cursor = "pointer";
      toggle.style.marginLeft = "10px";
  
      toggle.addEventListener("click", () => {
        field.type = field.type === "password" ? "text" : "password";
      });
  
      field.parentNode.insertBefore(toggle, field.nextSibling);
    });
  
    // Radio selection check for sign up
    const signupForm = document.querySelector("form[action='signup.html']") || document.querySelector("form");
    if (signupForm && window.location.pathname.includes("signup")) {
      signupForm.addEventListener("submit", (e) => {
        const roleChecked = signupForm.querySelector("input[name='role']:checked");
        if (!roleChecked) {
          e.preventDefault();
          alert("Please select a role (Client or Freelancer).");
        }
      });
    }
  
    // Dummy admin dashboard - Load stats (optional logic for real use)
    if (window.location.pathname.includes("admin")) {
      const cards = document.querySelectorAll(".card p");
      if (cards.length >= 2) {
        cards[0].innerText = "134 Users";
        cards[1].innerText = "58 Jobs";
      }
    }
  });
  