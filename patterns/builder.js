//Builder. Структурный. Позволяет создавать конфигурации объекта, не засоряя исходеый конструктор ненужной логикой
//  (в JS делаем чейнинг) Нужен, если объект существует в разных вариациях.
//  Над несколькими билжнрами может быть слой абстракции Директор

class Metrics {
    constructor() {
        this.application = 'test.application';
        this.screen = 'first.screen'
    }
}

class MetricsBuilder {
    constructor() {
        this.metrics = new Metrics();
    }

    setApplication(application) {
        this.metrics.application = application;
        return this;
    }

    setScreen(screen) {
        this.metrics.screen = screen;
        return this;
    }

    setEvent(event) {
        this.metrics.event = event;
        return this;
    }

    build() {
        return this.metrics;
    }
}

const newMetric = new MetricsBuilder().setApplication('new.test.application').setScreen('profile.screen').setEvent('click').build();

console.log(newMetric);
