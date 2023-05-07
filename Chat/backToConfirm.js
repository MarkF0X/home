function backToConfirm() {
    const authWindow = document.getElementById('new-name-pop-up');
    authWindow.remove();
    const mainDiv = document.getElementById('main');
    let newPopUp = document.createElement('div');
    newPopUp.setAttribute('id', 'confirm-pop-up');
    const tmplt = document.getElementById('confirm-template');
    newPopUp.append(tmplt.content.cloneNode(true));
    mainDiv.append(newPopUp);
}