// Абстрактная фабрика. Порождающий.
// надстройка на фабричным методом

const factoryMethods = require("./factory-method")

const {MetricsChangeFactory, MetricsScreenCloseFactory, MetricsScreenOpenFactory} = factoryMethods;

//abstract factory
function getAnalyticsMethods(type) {
    switch (type) {
        case 'mount': {
            return MetricsScreenOpenFactory
        }
        case 'unmount': {
            return MetricsScreenCloseFactory
        }
        case 'change': {
            return MetricsChangeFactory
        }
        default: {
            return null
        }
    }
}

//Factory method
const ScreenMountF = getAnalyticsMethods('mount')
const ScreenChangeF = getAnalyticsMethods('change')

const firstScreenOpen = new ScreenMountF('Первый экран', 'Открытие').create();
const secondScreenOpen = new ScreenMountF('Второй экран', 'Открытие').create();

const firstScreenClick = new ScreenChangeF('Первый экран', 'Клик по кнопке Подробнее').create()
const secondScreenClick = new ScreenChangeF('Второй экран', 'Клик по кнопке Подробнее').create()

console.log(firstScreenOpen, '<<<<', secondScreenOpen, '<<<<', firstScreenClick, '<<<<', secondScreenClick, '<<<<')
