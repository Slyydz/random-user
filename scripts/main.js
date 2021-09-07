import {getUser} from "./DataManager.js"
import {User} from "./userData.js"

console.log("You look marvelous!");

const contentElementUser = document.querySelector(".userSection");

const userVar = getUser().then(apiUser => {
    console.log(apiUser);
    contentElementUser.innerHTML = User(apiUser);
})




