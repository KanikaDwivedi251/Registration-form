

document.getElementById('regForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Error: Passwords do not match! Please re-enter.');
        event.preventDefault(); // Yeh form ko submit hone se rok dega
    } else {
        alert('Form submitted successfully!');
    }
});