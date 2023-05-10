import {token, getName} from "./getName.js";

function patchName() {
    const serverUrl = 'https://edu.strada.one/api/user';
    const newName = document.getElementById('name-area').value;
    fetch(serverUrl, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        referrer: "",
        body: JSON.stringify({name: newName})
    }).then(response => console.log(response))
        .catch(err => alert(err.toString()));
    getName();
}

window.patchName = patchName;