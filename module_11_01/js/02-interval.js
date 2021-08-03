/*
 * Метод setInterval()
 */

// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// setInterval(logger, 2000, 'дві тисячі');


/*
 * Очистка интервала с clearInterval()
 */

let counter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
    if (counter === 5 || hasSubscribed){
        console.log('Знімаю інтервал!');
        clearInterval(intervalId);
        return;
    }
    
    console.log('Треба підписатися на нашу сторінку!!!!!!');
    counter += 1;
    hasSubscribed = true;
}, 1000);