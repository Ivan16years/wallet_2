const url1 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg';
const url2 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg';
const url3 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg';

// ожидание
// выполнено успешно
// выполнено неудачно

// pending (ожидание), fullfild (выполнено успешно), rejected (выполнено неудачно)


/* const promise = {
    state: ['pending', 'fulfilled', 'rejected'],
    resolveQueue: [
        function () {
            console.log('1');
        },
        function () {
            console.log('2');
        },
        function () {
            console.log('3');
        }
    ]
} */

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved');
        }, ms);
    })
}

delay(2000);

const promise = delay(2000);
console.log('до');
promise
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));
console.log('после');

/* const promise = {
    state: ['pending'],
    resolveQueue: [
       
    ] */

const promise = {
    state: 'fullfilled',
    resolveQueue: [
        () => console.log(1)
    ]
}

const promise2 = {
    state: 'fullfilled',
    resolveQueue: [
        () => console.log(2)
    ]
}

const promise3 = {
    state: 'pending',
    resolveQueue: [
        () => console.log(3)
    ]
}