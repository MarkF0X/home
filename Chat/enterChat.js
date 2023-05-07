function enterName() {
    const authWindow = document.getElementById('confirm-pop-up');
    authWindow.remove();
    const mainDiv = document.getElementById('main');
    let newPopUp = document.createElement('div');
    newPopUp.setAttribute('id', 'new-name-pop-up');
    const tmplt = document.getElementById('chat-settings-template');
    newPopUp.append(tmplt.content.cloneNode(true));
    mainDiv.append(newPopUp);
}

export {enterName}