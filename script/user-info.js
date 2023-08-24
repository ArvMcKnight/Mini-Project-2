document.addEventListener('DOMContentLoaded', function () {
    const firstNameElement = document.getElementById('firstName');
    const lastNameElement = document.getElementById('lastName');
    const emailElement = document.getElementById('email');
    const genderElement = document.getElementById('gender');
    const birthdateElement = document.getElementById('dob');
    const branchElement = document.getElementById('branch');
    const passwordElement = document.getElementById('password');

  
    // Retrieve stored form data from localStorage
    const storedFormData = localStorage.getItem('formData');
  
    if (storedFormData) {
      const formData = JSON.parse(storedFormData);
  
      // Display the stored form data
      firstNameElement.textContent = formData.fullName.split(' ')[0];
      lastNameElement.textContent = formData.fullName.split(' ')[1];
      emailElement.textContent = formData.email;
      genderElement.textContent = formData.gender;
      birthdateElement.textContent = formData.dob;
      branchElement.textContent = formData.branch;
      passwordElement.textContent = "************"; 
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const changePasswordButton = document.getElementById("changePasswordButton");
    const passwordRow = document.getElementById("password");
    const newPasswordRow = document.getElementById("passwordChangeRow");
    const newPasswordInput = document.getElementById("newPassword");

    changePasswordButton.addEventListener("click", function () {
        newPasswordRow.style.display = "table-row";
        passwordRow.style.display = "none";
    });

    newPasswordInput.addEventListener("blur", function () {
        const newPassword = newPasswordInput.value;
        passwordRow.textContent = newPassword.length > 0 ? "".repeat(newPassword.length) : "*******";
        newPasswordRow.style.display = "none";
        passwordRow.style.display = "table-row";
    });
});