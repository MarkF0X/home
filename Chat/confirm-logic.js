function enterCode() {
    const authWindow = document.getElementById('auth-pop-up');
    authWindow.remove();
    const mainDiv = document.getElementById('main');
    let newPopUp = document.createElement('div');
    newPopUp.setAttribute('id', 'confirm-pop-up');
    const tmplt = document.getElementById('confirm-template');
    newPopUp.append(tmplt.content.cloneNode(true));
    mainDiv.append(newPopUp);
}

function preview() {
    const authWindow = document.getElementById('confirm-pop-up');
    authWindow.remove();
    const mainDiv = document.getElementById('main');
    let newPopUp = document.createElement('div');
    newPopUp.setAttribute('id', 'auth-pop-up');
    const tmplt = document.getElementById('authorization-template');
    newPopUp.append(tmplt.content.cloneNode(true));
    mainDiv.append(newPopUp);
}

