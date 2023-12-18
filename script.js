document.getElementById('signup').addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
        
function validateLogin() {
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var errorMessage = document.getElementById('error-message');

        // Regular expression to check if email contains "@gmail.com"
        var emailRegex = /@gmail\.com$/;

        if (!emailInput.value.trim() || !passwordInput.value.trim()) {
          errorMessage.textContent = 'Please fill in both email and password.';
        } else if (!emailRegex.test(emailInput.value)) {
          errorMessage.textContent = 'Please enter a valid Gmail email address.';
        } else if (passwordInput.value.length < 8 || passwordInput.value.length >= 15) {
          errorMessage.textContent = 'Password must be between 8 and 15 characters.';
        } else {
          // Validation successful, redirect to products.html
          errorMessage.textContent = ''; // Clear any previous error messages
          window.location.href = 'products.html'; // Redirect to products.html
        }
      }
        
  function validateCheckbox() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var checkbox = document.getElementById('policy');
  var errorMessage = document.getElementById('errorMessage');

  // Regular expression to check if email contains "@gmail.com"
  var emailRegex = /@gmail\.com$/;

  if (email.trim() !== '' && password.trim() !== '') {
    if (password.length >= 8 && password.length <= 15) {
      if (emailRegex.test(email)) {
        if (checkbox.checked) {
          // Redirect to another page (replace 'products.html' with the actual page URL)
          window.location.href = 'products.html';
        } else {
          errorMessage.textContent = 'Please agree to the Terms & Conditions.';
        }
      } else {
        errorMessage.textContent = 'Please enter a valid Gmail email address.';
      }
    } else {
      errorMessage.textContent = 'Password must be between 8 and 15 characters.';
    }
  } else {
    errorMessage.textContent = 'Please fill in both email and password.';
  }
}