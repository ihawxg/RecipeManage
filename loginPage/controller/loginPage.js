if(mainPage.style.display="none"){
    window.location.hash = "#Login";
}

registerPage.style.display = "none";

registerErrorMessage.style.display = "none";
loginErrorMessage.style.display = "none";

goToRegister.addEventListener("click", () => {
    registerPage.style.display = "block";
    loginPage.style.display = "none";
    registerErrorMessage.style.display = "none";
})
goToLogin.addEventListener("click", () => {
    registerPage.style.display = "none";
    loginPage.style.display = "block";
})

registerButton.addEventListener("click", () => {
    let emptyInput = (!registerUsername.value.trim().length == 0) && (!registerPassword.value.trim().length == 0) && (!registerPasswordConfirm.value.trim().length == 0);
    let confirmPassword = registerPassword.value.trim() === registerPasswordConfirm.value.trim();
    if (emptyInput) {
        if (confirmPassword) {
            storage.add(registerUsername.value.trim(), registerPassword.value.trim());
            registerUsername.value = "";
            registerPassword.value = "";
            registerPasswordConfirm.value = "";
            registerErrorMessage.innerText = "Succesfuly registered";
            registerErrorMessage.style.display = "block";
        } else {
            registerErrorMessage.innerText = "Error you made a mistake";
            registerErrorMessage.style.display = "block";

        }
    } else {
        registerErrorMessage.innerText = "Error you made a mistake";
        registerErrorMessage.style.display = "block";
    }


})

loginButton.addEventListener("click", function () {
    login();
})

loginForm.addEventListener("keyup", (event) => {
    let key = event.keyCode;
    if (key === 13) {
        login();
    }
})

function login() {

    if (storage.validate(loginUsername.value, loginPassword.value)) {
        registerPage.style.display = "none";
        loginPage.style.display = "none";
        loginErrorMessage.style.display = "none";
        mainPage.style.display ="block";
        window.location.hash = '#allRecipes';

        return loginUsername.value;
    } else {
        loginErrorMessage.style.display = "block";
    }
}
