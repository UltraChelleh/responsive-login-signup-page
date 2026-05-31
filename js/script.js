const signupForm =
document.getElementById("signup-form");

const loginForm =
document.getElementById("login-form");

const showLogin =
document.getElementById("show-login");

const showSignup =
document.getElementById("show-signup");


function showLoginForm(event){

    event.preventDefault();

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

}


function showSignupForm(event){

    event.preventDefault();

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");

}


showLogin.addEventListener(
    "click",
    showLoginForm
);

showSignup.addEventListener(
    "click",
    showSignupForm
);