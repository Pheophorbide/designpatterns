//Factory method. Когда нужно создавать много однотипных обЪекто.
// Или несколько объектов с однотипной структурой и разными данными
// или когда дынные беруться из разных источников доя одного объекта. Фабрика состоит из нескольких конструкторов -
// конструктора, который создает объект
// и класса, который вызывает это конструктор с определенными параметрами

class Product {
    constructor(type, price, minCount) {
        this.type = type;
        this.price = price;
        this.minCount = minCount;
    }

    print() {
        return `Продукт ${this.type} по цене ${this.price} p. доступен при минимальном заказе от ${this.minCount} шт.`;
    }
}

class ProductFactory {
    create(type) {
        if(type === 'молоко') {
            return new Product(type, 80, 10).print();
        } else if (type === 'сыр') {
            return new Product(type, 200, 15).print();
        }

        return `У нас нет информации о продукте ${type}`;
    }
}

const milk = new ProductFactory().create('молоко');
const cheese = new ProductFactory().create('сыр');
const other = new ProductFactory().create('курочка');

console.log(milk, cheese, other)

