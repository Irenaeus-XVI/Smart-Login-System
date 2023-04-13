
//NOTE - LogIN
var logInInputEmail = document.querySelector("#logInInputEmail");
var logInInputPassword = document.querySelector("#logInInputPassword");
var logInBTN = document.querySelector("#logInBTN");
var logInWarning = document.querySelector("#logInWarning");
//NOTE - Array
var usersList;
var localStorageName = "users";
var logInList;



//NOTE - handle localStorage
(function () {
    if (localStorage.getItem(localStorageName) == null) {
        usersList = [];
        console.log("h");
    } else {
        usersList = JSON.parse(localStorage.getItem(localStorageName));
        console.log("s");
    }

})();




//NOTE - CheckLogIN
function CheckLogIN() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].isLogIn == "true") {
            window.location.href = "home.html";
        }
    }
}

CheckLogIN();


logInBTN.addEventListener("click", function () {


    if (validation()) {
        if (logIn()) {
            console.log("yes");
        }
        else {
            logInWarning.innerHTML = "email or password is not correct  ";
            logInWarning.classList.replace("d-none", "d-block");
            logInWarning.classList.replace("text-success", "text-danger");
        }

    }
    clearForm("logIn");
});


//NOTE - SetLocalStorage
function setLocalStorage(list) {
    localStorage.setItem(localStorageName, JSON.stringify(list));
}


//NOTE - logIn
function logIn() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() == logInInputEmail.value.toLowerCase() & usersList[i].password.toLowerCase() == logInInputPassword.value.toLowerCase()) {
            console.log("yes");
            usersList[i].isLogIn = "true";
            setLocalStorage(usersList);
            window.location.href = "home.html";
            return true;
        }


    }

    return false;

}


//NOTE - Clear the inputs
function clearForm(flag) {

    flag === "signUp" ? signUpInputName.value = "" : logInInputEmail.value = "";
    flag === "signUp" ? signUpInputEmail.value = "" : logInInputPassword.value = "";
    flag === "signUp" ? signUpInputPassword.value = "" : console.log("");
}


//NOTE - validation
function validation() {
    if (logInInputEmail.value == "" || logInInputPassword.value == "") {
        logInWarning.innerHTML = "all input are required ";
        logInWarning.classList.replace("d-none", "d-block");
        logInWarning.classList.replace("text-success", "text-danger");
        return false;

    }


    return true;
}
