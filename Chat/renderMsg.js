import {scrollBottom} from "./scrollBottom.js";

export function renderMsg(msg, date, authorId, email) {
    let dialog = document.getElementById('dialog-window');

    let newSentMessage = document.createElement('div');
    if (email === 'valentin.alexandrovich.e@gmail.com') {
        newSentMessage.setAttribute('class', 'sent-message');
        const tmplt = document.getElementById('template-sent-message');
        newSentMessage.append(tmplt.content.cloneNode(true));
        newSentMessage.firstChild.nextSibling.textContent = msg;
    } else {
        newSentMessage.setAttribute('class', 'received-message');
        const tmplt = document.getElementById('template-received-message');
        newSentMessage.append(tmplt.content.cloneNode(true));
        newSentMessage.firstChild.nextSibling.textContent = authorId;
        newSentMessage.firstChild.nextSibling.nextSibling.textContent = msg;
    }

    newSentMessage.lastChild.previousSibling.textContent = `${date}`;
    dialog.append(newSentMessage);
    scrollBottom();
}

window.sentMessage = renderMsg;