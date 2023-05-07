function authorization() {
    const serverUrl = 'https://edu.strada.one/api/user';
    const email = document.getElementById('email').value;
    if (!email) {
        alert("Введите эмаил!")
        return;
    }
    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        referrer: "",
        body: JSON.stringify({email: email})
    }).then(response => console.log(response))
        .catch(err => alert(err.toString()));
}