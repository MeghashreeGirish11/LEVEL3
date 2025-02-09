document.getElementById('validationForm').addEventListener('input', function () {
    validateForm();
});

function validateForm() {
    let isFormValid = true;

    // Name validation (only letters)
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name.value)) {
        name.classList.add('invalid');
        nameError.textContent = 'Name must contain only letters.';
        isFormValid = false;
    } else {
        name.classList.remove('invalid');
        name.classList.add('valid');
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('invalid');
        emailError.textContent = 'Enter a valid email address.';
        isFormValid = false;
    } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
        emailError.textContent = '';
    }

    // Password validation (min 8 chars, 1 uppercase, 1 number)
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.[A-Z])(?=.\d).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        password.classList.add('invalid');
        passwordError.textContent = 'Password must be at least 8 characters, including 1 uppercase letter and 1 number.';
        isFormValid = false;
    } else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        passwordError.textContent = '';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('invalid');
        confirmPasswordError.textContent = 'Passwords must match.';
        isFormValid = false;
    } else {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        confirmPasswordError.textContent = '';
    }

    // Phone number validation (10 digits)
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('invalid');
        phoneError.textContent = 'Phone number must be exactly 10 digits.';
        isFormValid = false;
    } else {
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        phoneError.textContent = '';
    }

    // Age validation (must be greater than 18)
    const age = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    if (age.value < 18) {
        age.classList.add('invalid');
        ageError.textContent = 'You must be older than 18.';
        isFormValid = false;
    } else {
        age.classList.remove('invalid');
        age.classList.add('valid');
        ageError.textContent = '';
    }

    // Enable/Disable submit button based on form validity
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = !isFormValid;
}