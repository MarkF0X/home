class Storage {
    constructor(name, arg, defaultValue) {
        this.name = name;
        if (arg === 1) {
            if (!defaultValue) {
                localStorage.setItem(name, undefined);
            } else {
                localStorage.setItem(name, defaultValue);
            }
        }
        else {
            if (!defaultValue) {
                sessionStorage.setItem(name, undefined);
            } else {
                sessionStorage.setItem(name, defaultValue);
            }
        }
    }
    get() {
        let localKeys = Object.keys(localStorage);
        for(let key of localKeys) {
            if (key === this.name) {
                return localStorage.getItem(this.name);
            }
        }
        let sessionKeys = Object.keys(sessionStorage);
        for(let key of sessionKeys) {
            if (key === this.name) {
                return sessionStorage.getItem(this.name);
            }
        }
    }
    set(value) {
        let localKeys = Object.keys(localStorage);
        for(let key of localKeys) {
            if (key === this.name) {
                return localStorage.setItem(this.name, value);
            }
        }
        let sessionKeys = Object.keys(sessionStorage);
        for(let key of sessionKeys) {
            if (key === this.name) {
                return sessionStorage.setItem(this.name, value);
            }
        }
    }
    clear() {
        let localKeys = Object.keys(localStorage);
        for(let key of localKeys) {
            if (key === this.name) {
                localStorage.setItem(this.name, null);
                return localStorage.getItem(this.name);
            }
        }
        let sessionKeys = Object.keys(sessionStorage);
        for(let key of sessionKeys) {
            if (key === this.name) {
                sessionStorage.setItem(this.name, null);
                return sessionStorage.getItem(this.name);
            }
        }
    }
    isEmpty() {
        let localKeys = Object.keys(localStorage);
        for(let key of localKeys) {
            if (key === this.name) {
                const temp = localStorage.getItem(this.name);
                if (temp === ("null" || "undefined")) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        let sessionKeys = Object.keys(sessionStorage);
        for(let key of sessionKeys) {
            if (key === this.name) {
                const temp = sessionStorage.getItem(this.name);
                if (temp === ("null" || "undefined")) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}

const names = new Storage('names').set(1);
const names1 = new Storage('names1');
const names2 = new Storage('names2');
