import {renderMsg} from "./renderMsg.js";
import {month, socket} from "./getHistory.js";

export function exchangeMsg() {
    let newMessage = document.getElementById('text-area').value;
    socket.send(JSON.stringify({ text: `${newMessage}` }));
    document.myForm.reset();
    return false;
}

socket.onmessage = function (event) {
    let message = JSON.parse(event.data);
    const time = `${new Date(message.createdAt).getDate()} ${month[new Date(message.createdAt).getMonth()]} ${new Date(message.createdAt).getHours()}`;
    console.log(message);
    renderMsg(message.text, time, message.user.name, message.user.email);
};
window.exchangeMsg = exchangeMsg;