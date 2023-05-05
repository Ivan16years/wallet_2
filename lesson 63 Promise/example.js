const url1 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg';
const url2 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg';
const url3 = 'http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg';

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.height = 200;
        img.src = url;
        document.body.append(img);

        img.addEventListener('load', () => {
            resolve();
        });

        img.addEventListener('error', () => {
            reject();
        })
    })
}

loadImage(url1)
    .then(
        () => {
            return loadImage(url2)
        }
    )
    .then(
        () => {
            return loadImage(url3);
        }
    )
    .then(
        () => {
            console.log('Все картинки загружены');
        }
    )
    .catch(
        () => {
            console.log('Не получается загрузить картинку')
        }
    )
