// !Java Script For Signup page
let userName = document.getElementById("userNameSignUp");
let userEmail = document.getElementById("signUpEmail");
let userPass = document.getElementById("signUpPassword");
let signUpButton = document.getElementById("signUpButton");
let success = document.getElementById("success");
let input = document.querySelectorAll("input");
let goToLoginPage = document.getElementById("goToLoginPage");
let checkInput = document.getElementById("checkInput");
let checkExist = document.getElementById("checkExist");
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passAlert = document.getElementById("passAlert");
let userData = [];

//!events
signUpButton.addEventListener("click", signUp);
goToLoginPage.addEventListener("click", moveToNextPage);
userName.addEventListener("keyup", validationName);
userEmail.addEventListener("keyup", validationEmail);
userPass.addEventListener("keyup", validationPass);
//!function
function displayData() {
  let data = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  userData.push(data);
  localStorage.setItem("parsonalData", JSON.stringify(userData));
}

if (JSON.parse(localStorage.getItem("parsonalData") != null)) {
  userData = JSON.parse(localStorage.getItem("parsonalData"));
}

function signUp() {
  if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
    inpuTempty();
  } else {
    // resetData();
    successMassage();
    checkExistMassage();
  }
}
function resetData() {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
function successMassage() {
  success.classList.remove("d-none");
  checkInput.classList.add("d-none");
  checkExist.classList.add("d-none");
}
function checkExistMassage() {
  let cond = false;
  for (let i = 0; i < userData.length; i++) {
    if (userEmail.value == userData[i].email) {
      cond = true;
      break;
    }
  }
  if (cond == true) {
    success.classList.add("d-none");
    checkInput.classList.add("d-none");
    checkExist.classList.remove("d-none");
  } 
  else {
    displayData();
  }
}
function moveToNextPage() {
  goToLoginPage.href = "index.html";
}
function inpuTempty() {
  checkInput.classList.remove("d-none");
  success.classList.add("d-none");
  checkExist.classList.add("d-none");
}



function validationName() {
  let nameRejex = /^[A-Za-z]{2,15}$/;
  if (!nameRejex.test(userName.value)) {
    signUpButton.disabled = "true";
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    nameAlert.classList.add("d-none");
  }
}


function validationEmail() {
  let emailRejex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRejex.test(userEmail.value)) {
    signUpButton.disabled = "true";
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    emailAlert.classList.add("d-none");
  }
}

// !validation password input

function validationPass() {
  let passRejex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
  if (!passRejex.test(userPass.value)) {
    signUpButton.disabled = "true";
    userPass.classList.add("is-invalid");
    userPass.classList.remove("is-valid");
    passAlert.classList.remove("d-none");
  } else {
    signUpButton.removeAttribute("disabled");
    userPass.classList.remove("is-invalid");
    userPass.classList.add("is-valid");
    passAlert.classList.add("d-none");
  }
}
