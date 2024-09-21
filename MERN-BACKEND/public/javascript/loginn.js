let log = document.querySelector(".log-btn");
let sign = document.querySelector(".sign-btn");
let signUpForm = document.querySelector(".user-form-box");
let loginForm = document.querySelector(".off-user-form-box");
let ver1 = document.querySelector(".ver-class-1");
let ver2 = document.querySelector(".ver-class-2");
let email = document.querySelector(".emailMem");
let offEmail = document.querySelector(".off-email");

function shiftToSignUp() {
  sign.style.backgroundColor = "aliceblue";
  sign.style.color = "black";
  log.style.backgroundColor = "black";
  log.style.color = "aliceblue";
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
}

// Shift to Login form
function shiftToLogin() {
  log.style.backgroundColor = "aliceblue";
  log.style.color = "black";
  sign.style.backgroundColor = "black";
  sign.style.color = "aliceblue";
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
}

// Toggle email visibility for official members
function toggleEmailForm() {
  let emailDisplay = window.getComputedStyle(email).display;
  if (emailDisplay === "block") {
    offEmail.style.display = "block";
    email.style.display = "none";
    ver1.style.display = "none";
    ver2.style.display = "block";
  }
}

// Toggle email visibility for non-official members
function toggleNonOfficial() {
  let emailDisplay = window.getComputedStyle(email).display;
  if (emailDisplay === "none") {
    offEmail.style.display = "none";
    email.style.display = "block";
    ver1.style.display = "block";
    ver2.style.display = "none";
  }
}
