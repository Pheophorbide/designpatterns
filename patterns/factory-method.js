//Factory method. Когда нужно создавать много однотипных обЪекто.
// Или несколько объектов с однотипной структурой и разными данными
// или когда дынные беруться из разных источников доя одного объекта. Фабрика состоит из нескольких конструкторов -
// конструктора, который создает объект
// и класса, который вызывает это конструктор с определенными параметрами

class Metrics {
    constructor(event, screen, label) {
        this.event = event;
        this.screen = screen;
        this.label = label;
    }

    create() {
        return {
            event: this.event,
            screen: this.screen,
            label: this.label
        }
    }
}

class MetricsChangeFactory {
    constructor(screen, label) {
        this.label = label;
        this.screen = screen;
    }

    create() {
        return new Metrics('change', this.screen, this.label).create();
    }
}

class MetricsScreenOpenFactory {
    constructor(screen, label) {
        this.label = label;
        this.screen = screen;
    }

    create() {
        return new Metrics('screen open', this.screen, this.label).create();
    }
}

class MetricsScreenCloseFactory {
    constructor(screen, label) {
        this.label = label;
        this.screen = screen;
    }

    create() {
        return new Metrics('screen close', this.screen, this.label)
    }
}

const button1 = new MetricsChangeFactory('Первый экран', 'клик по кнопке Открыть').create();
const button2 = new MetricsChangeFactory('Второй экран', 'клик по кнопке Продолжить').create();

console.log(button1, button2)

module.exports = {
    MetricsChangeFactory,
    MetricsScreenCloseFactory,
    MetricsScreenOpenFactory
}

