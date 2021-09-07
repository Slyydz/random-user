//Import Statements
import {getUser} from "./DataManager.js"
import {User} from "./userData.js"

//Query Selectors
const applicationElement = document.querySelector(".random-user");
const contentElementUser = document.querySelector(".userSection");

//Log and Display initial user
const showRandomUser = () => {
const getInitialUser = getUser().then(apiUser => {
    console.log(apiUser);
    contentElementUser.innerHTML = User(apiUser);
})
}

//Function Call to display the initial user
showRandomUser();

//Used to randomize and display from API
document.getElementById("newUserButton").onclick = showRandomUser;