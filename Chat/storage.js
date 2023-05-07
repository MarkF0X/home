export default class Coockie {
    constructor(name, defaultValue) {
        this.name = name;
        if (!defaultValue) {
            document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(undefined)}; path=/; max-age=${3600}`;
        } else {
            document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(defaultValue)}; path=/; max-age=${3600}`;
        }

    }
    get() {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + this.name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : false;
    }
    saveNewCoockieKey(hash) {
        document.cookie = encodeURIComponent(this.name) + '=' + encodeURIComponent(hash) + `; path=/; max-age=${3600}`;
    }
}