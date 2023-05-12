import {renderMsg} from "./renderMsg.js";
import {month, socket} from "./getHistory.js";
import {scrollBottom} from "./scrollBottom.js";

export function exchangeMsg() {
    scrollBottom();
    let newMessage = document.getElementById('text-area').value;
    socket.send(JSON.stringify({ text: `${newMessage}` }));
    document.myForm.reset();

    return false;
}

socket.onmessage = function (event) {
    let message = JSON.parse(event.data);
    const time = `${new Date(message.createdAt).getDate()} ${month[new Date(message.createdAt).getMonth()]} ${new Date(message.createdAt).getHours()}:${new Date(message.createdAt).getMinutes()}`;
    console.log(message);
    renderMsg(message.text, time, message.user.name, message.user.email, 'after');
    scrollBottom();
};
window.exchangeMsg = exchangeMsg;