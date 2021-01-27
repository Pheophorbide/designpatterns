//new своими руками
/*
1. создает объект
2. привязывает prototype функции
3. привязываем созданный объект к this функции
4.взвращаем этот объект
*/

function customNewF(fn, ...rest) {
    const newObj = Object.create(fn.prototype);
    fn.apply(newObj, rest)
    return newObj;
}
