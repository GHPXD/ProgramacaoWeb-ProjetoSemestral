var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const passwordInput = document.getElementById("password");
const eyeSvg = document.getElementById("eyeSvg");

function eyeClick() {
    let inputTypeIsPassword = passwordInput.type = "password"

    if (inputTypeIsPassword) {
        showPassword()
    }else {
        hidePassword()
    }
}

function showPassword() {
    passwordInput.setAttribute("type", "text")
}

function hidePassword() {
    passwordInput.setAttribute("type", "password")
}