import '../css/common.css';
import '../css/gallery.css';

import countries from "./countries.json";
import itemsTemplate from "../templates/gallery-item.hbs";

const galleryRef = document.querySelector(".js-gallery");

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);

// npm ci

/**
 * Шаблон за допомогою звичайного рядка
 */
// const techSkills = ['HTML', 'CSS', 'JS', 'React', 'SASS'];

// const galleryRef = document.querySelector(".js-gallery");

// const element = `<li><a href="#">${}</a></li>`;

// techSkills.forEach(el => {
//     galleryRef.insertAdjacentHTML('beforeend', `<li><a href="#">${el}</a></li>`);
// })

// galleryRef.insertAdjacentHTML('beforeend', element);



