let email = document.getElementById("email");
let mobNum = document.getElementById("mobNum");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let error = document.getElementById("error");
let strength = document.getElementById("passStrength");
let strength2 = document.getElementById("passStrength2");
let strengthBadge = document.getElementById("StrengthDisp");
// regExpfor checking strength
var strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{14,})");
var mediumPassword = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{10,})");
let timeout;

// function to validate mail
function validateMail() {

  let regexe = /^([A-Za-z0-9\.-]+)@([A-Z0-9a-z\-]+)(.[a-zA-Z]{2,3})$/
  if (email.value.trim() == "") {
    alert("Email cannot be empty");
    return false;
  } else if (regexe.test(email.value)) {
    error.innerHTML = "Valid";
    error.style.color = "green";
    return true;
  } else {
    error.innerHTML = "Invalid";
    error.style.color = "red";
    return false;
  }
}


// function to validate password
function validatePass() {
  if (pwd.value.trim() == "") {
    alert("Password cannot be empty");
    return false;
  } else if (pwd.value.length <= 8) {
    strength.innerHTML = "Password should contain minimum 8 characters";
    strength.style.color = "red";
    pwd.style.border = "Red";
    return false;
  } else if (strongPassword.test(pwd.value)) {
    strength.innerHTML = "";
    strengthBadge.style.backgroundColor = 'Green';
    strengthBadge.textContent = 'Strong';
    return true;
  } else if (mediumPassword.test(pwd.value)) {
    strength.innerHTML = "";
    strengthBadge.style.backgroundColor = 'Orange';
    strengthBadge.textContent = 'Medium';
    return true;
  } else if (mediumPassword.test(pwd.value) == false) {
    strength.innerHTML = "";
    strengthBadge.style.backgroundColor = 'Red';
    strengthBadge.textContent = 'Poor';
    return false;
  } else {
    strength.innerHTML = "";
    error.innerHTML = "Invalid";
    error.style.color = "red";
    return false;
  }
}

// function to confirm password
function confirm() {
  console.log(pwd2.value, pwd.value)
  if (pwd.value == pwd2.value) {
    strength2.innerHTML = "Password matching";
    strength2.style.color = "green";
    return true;
  } else {
    strength2.innerHTML = "Password not matching";
    strength2.style.color = "red";
    return false;
  }
}

// function to validate mail & password
function validate() {
  if (validateMail() == true && validatePass() == true) {
    return true;
  } else {
    return false
  }
}

// function to validate mobile number
function validateMobile() {
  let regmob = /^([0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4})$/
  if (mobNum.value.trim() == "") {
    alert("Mobile number cannot be empty");
    return false;
  } else if (regmob.test(mobNum.value) == true) {
    error2.innerHTML = "Valid";
    error2.style.color = "green";
    return true;
  } else {
    error2.innerHTML = "Invalid";
    error2.style.color = "red";
    return false;
  }
}
