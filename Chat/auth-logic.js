import Coockie from "./storage.js";
import {changeToken} from "./getName.js";


function startDisplay() {
    const mainDiv = document.getElementById('main');
    let newPopUp = document.createElement('div');
    newPopUp.setAttribute('id', 'auth-pop-up');
    const tmplt = document.getElementById('authorization-template');
    newPopUp.append(tmplt.content.cloneNode(true));
    mainDiv.append(newPopUp);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    console.log(matches);
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let hash = getCookie('hash-chat');
if (!hash) {
    changeToken(null);
    document.addEventListener('DOMContentLoaded', startDisplay);
}
