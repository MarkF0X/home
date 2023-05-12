export function scrollBottom() {
    var objDiv = document.getElementById("dialog-window");
    objDiv.scrollTop = objDiv.scrollHeight;
}

window.scrollBottom = scrollBottom;