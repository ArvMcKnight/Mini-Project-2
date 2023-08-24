// for sign in and sign up
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitBtn');
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault();
      // Get Form Values Upon Submit
      const fullName = document.getElementById('fullname').value;
      const email = document.getElementById('emailaddress').value;
      const password = document.getElementById('pwd').value;
      const confirmPassword = document.getElementById('cpwd').value;
      const dob = document.getElementById('dob').value;
      const gender = document.querySelector('input[name="optradio"]:checked')
        ? document.querySelector('input[name="optradio"]:checked').value
        : 'Not specified';
      const branch = document.getElementById('branch').value;
  
      // Create an object to store form data
      const formData = {
        fullName,
        email,
        password,
        confirmPassword,
        dob,
        gender,
        branch,
      };
  
      // Store form data in localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
  
      // Redirect to profile page
      window.location.href = 'user-info.html';
    });
  });