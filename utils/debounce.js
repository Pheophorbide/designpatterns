function debounce(fn, delay) {
    //в замыкании определяем переменную, еоторая будет хранить id для таймера
    //возвращаем функцию с setTimeout
    let timer;

    return function (...rest) {
        const cb = function() {
            timer = null;
            if(delay !== undefined) fn(rest)
        }
        //чистим таймаут
        clearTimeout(timer)
        timer = setTimeout(cb, delay)
        //если не указана задержка, вызываем функцию немедленно
        if(delay === undefined) fn(rest)
    }
}
