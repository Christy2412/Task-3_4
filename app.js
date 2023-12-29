function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate username (email format)
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
        usernameError.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate password (uppercase letter, number, and no special characters except @)
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[@#$%^&*()_+={}[\]:;<>,.?/~\\-]).{6,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password should contain an uppercase letter, a number, and no special characters except @.';
        return;
    }

    // Check if password is "SmartServTest@123"
    if (password === "SmartServTest@123") {
        window.location.href = "dashboard.html";
    } else {
        alert('Invalid password. Please try again.');
    }
}

function forgotPassword() {
    // Implement logic to open email client or send email for password reset
    window.location.href = "mailto:support@smartserv.io";
}
