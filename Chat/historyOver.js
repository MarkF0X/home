export function historyOver() {
    let dialog = document.getElementById('dialog-window');
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'over-dialog');
    const tmplt = document.getElementById('template-history-over');
    newDiv.append(tmplt.content.cloneNode(true));
    dialog.prepend(newDiv);
}