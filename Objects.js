const TGBook = {
    list: {
        'Ksu S': 123123,
        'Ksu V': 321321,
        'Ant M': 231231
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    },
    log() {
        console.log(this.list)
    }
};


TGBook.add('Max', 132132);
console.log(TGBook.list['Max']);
TGBook.log();
TGBook.delete('Max');
console.log('Ksu V' in TGBook.list);
TGBook.log();