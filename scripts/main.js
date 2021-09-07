//Import Statements
import {getUser} from "./DataManager.js"
import {User} from "./userData.js"

//Query Selectors
const applicationElement = document.querySelector(".random-user");
const contentElementUser = document.querySelector(".userSection");

//Log and Display initial user
const getInitialUser = getUser().then(apiUser => {
    console.log(apiUser);
    contentElementUser.innerHTML = User(apiUser);
})

//When the newUserButton is clicked then show new user
applicationElement.addEventListener("click", event => {
    if (event.target.id === "newUserButton") {
        const getNewUser = getUser().then(apiUser => {
            console.log(apiUser);
            contentElementUser.innerHTML = User(apiUser);
        })
    }
})