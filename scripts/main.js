import {getUser} from "./DataManager.js"
import {User} from "./userData.js"


const applicationElement = document.querySelector(".random-user");
const contentElementUser = document.querySelector(".userSection");

const getInitialUser = getUser().then(apiUser => {
    console.log(apiUser);
    contentElementUser.innerHTML = User(apiUser);
})


applicationElement.addEventListener("click", event => {
    if (event.target.id === "newUserButton") {
        const getNewUser = getUser().then(apiUser => {
            console.log(apiUser);
            contentElementUser.innerHTML = User(apiUser);
        })
    }
})