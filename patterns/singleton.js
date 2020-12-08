//Singleton
//Порождающий паттерн. Объект в единственном экземрляре. Или создвет только ОДИН экзкмпляр класса.  Все объекты в JS - singleton
//class - функция, которая созлает объекты

class SingletonCounter {
    //особый метод объекта
    constructor() {
        //при первом вызове класса через new мы получаем SingletonCounter.instance === undefined
        //присваиваем SingletonCounter.instance this, то есть созданого объекта
        //при втором вызове мы проверим, что SingletonCounter.instance - это объект, который был создан первым и вернкм наш первый объект, проигнорив второй
        //то есть при второй попытке создать новый объект мы возвращаем объект, созданный при первой попытке
        if(typeof SingletonCounter.instance === 'object') {
            return SingletonCounter.instance
        }

        this.count = 0;
        SingletonCounter.instance = this;
        return this;
    }

    getCounter() {
        return this.count;
    }

    counter() {
        return this.count++;
    }
}

const count = new SingletonCounter();
const count1 = new SingletonCounter();
count.counter();
count.counter();
count1.counter();
count1.counter();

console.log(count.getCounter(), count1.getCounter())

