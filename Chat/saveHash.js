import {enterName} from "./enterChat.js";
import Coockie from "./storage.js";
import {changeToken, getName} from "./getName.js";


let tempCoockie;
function saveHash() {
    const hashString = document.getElementById('hash-area').value;
    changeToken(hashString);
    const chatHash = new Coockie('hash-chat', hashString);
    enterName(1);
    tempCoockie = hashString;
    console.log(chatHash.get());
    getName();
}

window.saveHash = saveHash;
export {tempCoockie};