// Global Hope Grant

// Register Form
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Registration feature will be activated soon.");
    });
}

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Login feature will be activated soon.");
    });
}

// Grant Application Form
const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
    applicationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your application has been submitted successfully.");
        applicationForm.reset();
    });
}
