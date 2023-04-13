//NOTE - Home
var homeLogOut = document.querySelector("#homeLogOut");
var userName = document.querySelector("#userName");
var turn;


//NOTE - Array
var usersList;
var localStorageName = "users";
var logInList;


//NOTE - handle localStorage
(function () {
    if (localStorage.getItem(localStorageName) == null) {
        usersList = [];
        logInList = [];
        console.log("h");
    } else {
        usersList = JSON.parse(localStorage.getItem(localStorageName));
        console.log("s");
        displayName();
    }

})();


//NOTE - displayName
function displayName() {

    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].isLogIn == "true") {
            userName.innerHTML = `Welcome ${usersList[i].name}`;
            turn = i;
        }
    }

}





homeLogOut.addEventListener("click", function () {
    usersList[turn].isLogIn = "false";
    window.location.href = "index.html";
    setLocalStorage(usersList);
    console.log(turn);

});

//NOTE - setLocalStorage
function setLocalStorage(list) {
    localStorage.setItem(localStorageName, JSON.stringify(list));
}