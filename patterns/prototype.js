// Порождаюший. Прототип. Создает клон объекта, который потом можно точечно менять

class Table {
    constructor(row, column, width) {
        this.row = row;
        this.column = column;
        this.width = width;
    }

    produce() {
        return new Table(this.row,this.column, this.width)
    }
}

const prototypeTable = new Table(5,3, 500);
const table1 = prototypeTable.produce();
const table2 = prototypeTable.produce();
table2.column = 2;
table2.width = 400;

console.log(table1, '<<>>', table2, '\\\///');
