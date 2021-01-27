//Decorator. Функции-обертки. Добавляет новую функциональность без изменения самой функции.

//bind https://learn.javascript.ru/call-apply-decorators
function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    }
}

//функция-декоратор кеширования функции с 1 аргумертом аргументов
function cachingDecorator(fn) {
    //create map for saving func args
    const cache = new Map();

    //анонимная ф-я обертка
    return function (x) {
        if(cache.has(x)) {
            return cache.get(x);
        }

        //вот тут вызываем ф-ю
        const result = fn(x);
        cache.set(x, result);
        return result;
    }
}

function working(x) {
    console.log('какие-то очень сложные вычисления', x*x);
    return x*x;
}

const slow = cachingDecorator(working);
slow(2);
