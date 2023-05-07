function sentMessage() {
    if (!document.getElementById("text-area").value) {
        return;
    }
    const dialog = document.getElementById('dialog-window');

    let newSentMessage = document.createElement('div');
    newSentMessage.setAttribute('class', 'sent-message');
    const tmplt = document.getElementById('template-sent-message');
    newSentMessage.append(tmplt.content.cloneNode(true));
    newSentMessage.firstChild.nextSibling.textContent = document.getElementById('text-area').value;
    newSentMessage.lastChild.previousSibling.textContent = `${new Date().getHours()}:${new Date().getMinutes()}`;
    dialog.append(newSentMessage);
}