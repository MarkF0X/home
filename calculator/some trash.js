function getTrash() {
    let elementGovna = document.querySelector('.govno');
    let styles = getComputedStyle(elementGovna);
    console.log(styles);
}
getTrash();