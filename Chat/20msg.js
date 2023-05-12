import {history} from "./getHistory.js";
import {renderMsg} from "./renderMsg.js";
import {month} from "./getHistory.js";
import {historyOver} from "./historyOver.js";


let dialog = document.getElementById('dialog-window');
dialog.addEventListener('scroll', () => {

    let elemScroll = dialog.scrollTop;
    let space;
    if (elemScroll === 0) {
        const itemsToShow = 20;

        const startIndex = dialog.querySelectorAll('.message').length;
        const endIndex = startIndex + itemsToShow;

        const items = history.slice(startIndex, endIndex);

        for (let i = 0; i < items.length; i++) {
            const time = `${new Date(items[i].createdAt).getDate()} ${month[new Date(items[i].createdAt).getMonth()]} ${new Date(items[i].createdAt).getHours()}:${new Date(items[i].createdAt).getMinutes()}`;
            renderMsg(items[i].text, time, items[i].user.name, items[i].user.email, 'before');
        }
        if (startIndex === history.length && !dialog.querySelectorAll('.over-dialog').length) {
            historyOver();
        }
    }
});