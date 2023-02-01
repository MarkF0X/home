const TGBook = {
    list: {
        'Ksu S': 123123,
        'Ksu V': 321321,
        'Ant M': 231231
    },
    add(name, number) { // метод добавления контактов
        this.list[name] = number;
    },
    delete(name) { // метод удаления контактов
        delete this.list[name];
    },
    log() { // метод просмотра всех контактов №1
        console.log(this.list)
    },
    view() {
        for (const name in TGBook.list) {
            console.log(name + ' ' + TGBook.list[name]);
            // console.log(TGBook.list[name]);
        }
    }
};


TGBook.add('Max', 132132);

TGBook.view();
