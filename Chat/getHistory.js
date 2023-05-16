import {token} from "./getName.js";
import {renderMsg} from "./renderMsg.js";
import {scrollBottom} from "./scrollBottom.js";

export let history;
export let socket;
export const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function getHistory() {
    let msgArr = [];
    const serverUrl = 'https://edu.strada.one/api/messages/';

    fetch(serverUrl, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/html; charset=UTF-8"
        },
        referrer: "",
    }).then(response => response.json())
        .then(body => {
            for (let i = body.messages.length - 1; i >= 0; i--) {
                msgArr.unshift(body.messages[i]);
            }
            history = msgArr;
            console.log(history);
            for (let i = 19; i > 0; i--) {
                const time = `${new Date(body.messages[i].createdAt).getDate()} ${month[new Date(body.messages[i].createdAt).getMonth()]} ${new Date(body.messages[i].createdAt).getHours()}:${new Date(body.messages[i].createdAt).getMinutes()}`;
                renderMsg(body.messages[i].text, time, body.messages[i].user.name, body.messages[i].user.email, 'after');
                scrollBottom();
            }
        })
        .catch(err => alert(err.toString()));
    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
}
export {getHistory}