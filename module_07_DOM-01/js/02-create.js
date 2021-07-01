// const titleRef = document.createElement('h2');
// titleRef.textContent = 'Привіт з Кийова!';
// titleRef.classList.add('title');
// titleRef.id = 'titleId';

// console.log(titleRef);

// const rootRef = document.querySelector('#root');

// rootRef.append(titleRef);



import { products } from "./products.js";

console.log(products);

const createElement = (product) => {
    const containerRef = document.createElement('div');

    const titleRef = document.createElement('h2');
    titleRef.textContent = product.name;
    titleRef.classList.add('title', product.available ? 'available' : 'not-available');
    

    const descriptionRef = document.createElement('p');
    descriptionRef.textContent = product.description;

    const priceRef = document.createElement('h4');
    priceRef.textContent = `Цена ${product.price} денег`;

    const displayRef = document.createElement('h4');
    displayRef.textContent = `Екран ${product.display}`;


    containerRef.append(titleRef, descriptionRef, priceRef, displayRef);

    return containerRef;
};

const productsCards = products.map(item => createElement(item));

console.log('productsCards : ', productsCards);

const rootRef = document.querySelector('#root');

rootRef.append(...productsCards);