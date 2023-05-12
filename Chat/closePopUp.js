export function closePopUp(name) {
    const target = document.getElementById(`${name}`);
    target.remove();
}