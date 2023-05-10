import {getCookie} from "./auth-logic.js";

let token = getCookie('hash-chat');

export function getName() {
    const serverUrl = 'https://edu.strada.one/api/user/me';

    fetch(serverUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/html; charset=UTF-8"
        },
        referrer: "",
    }).then(response => console.log(response.json()))
        .catch(err => alert(err.toString()));
}

function changeToken(value) {
    token = value;
}
export {changeToken, token};