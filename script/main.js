// for sign in and sign up
const signUp = e => {
    let fname = document.getElementById('fullName').value,
        email = document.getElementById('emailaddress').value,
        pwd = document.getElementById('pwd').value,
        cpwd = document.getElementById('cpwd').value,
        dob = document.getElementById('dob').value,
        branch = document.getElementById('branch').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, email, pwd, cpwd, gender, dob, branch });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fullName').focus();
        alert("Your account has been created. Please Sign In.");
        location.href = "user-info.html"
    }
    else{
        alert("The information was not submitted.\nDo you already have an account with email ar***********@gmail.com?\nPlease enter another email.");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('emailaddress').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect Email or Password");
    }
    else{
        location.href = "zz-index.html";
    }
    e.preventDefault();
}