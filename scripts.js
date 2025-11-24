/* Add your JavaScript to this file */

// checkfor elements to select
document.addEventListener('DOMContentLoaded', function () {

  // Form & elements
  const form = document.querySelector('.newsletter form'); 
  const emailInput = form ? form.querySelector('#email') : null; // select email field
  const messageDiv = document.querySelector('.message');

  if (!form || !emailInput || !messageDiv) return;

  const showMessage = (text, type) => {
    messageDiv.textContent = text;
    messageDiv.className = 'message ${type}';
  };

  // form submission event listener
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // gets text in email input box
    const email = emailInput.value.trim();

    // error message if no email is given
    if (!email) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    // show thank you message
    showMessage(`Thank you! Your email address <${email}> has been added to our mailing list!`, "success"); 

    // clear the input after submitting
    emailInput.value = '';
  });
});