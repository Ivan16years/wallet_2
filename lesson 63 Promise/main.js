const url1 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg';
const url2 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg';
const url3 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg';

const img = new Image();
img.height = 200;
img.src = url1;

img.addEventListener('load', () => {
    const img2 = new Image();
    img2.height = 200;
    img2.src = url2;
    document.body.append(img2);

    img2.addEventListener('load', () => {
        const img3 = new Image();
        img3.height = 200;
        img3.src = url3;
        document.body.append(img3);

        img3.addEventListener('load', () => {
            console.log('Все картинки загружены!');
        })
    })
})

document.body.append(img);

// ожидание
// выполнено успешно
// выполнено неудачно

// pending (ожидание), fullfild (выполнено успешно), rejected (выполнено неудачно)

