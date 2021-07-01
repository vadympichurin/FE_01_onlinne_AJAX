
console.log(window);


const titleRef = document.querySelector('h2[data-title=title_for_js]');

console.dir(titleRef);

titleRef.textContent = "Прівет!"

// const textRef = document.getElementById('text');
const textRef = document.querySelector('#text');
console.log('textRef : ', textRef);

// textRef.classList.remove('text');
textRef.classList.add('text-red');
console.log(textRef.getAttribute('class'));
const itemRef = document.querySelector('.js-list__item');

console.dir(itemRef);

const itemsRef = document.querySelectorAll('.js-list__item');

console.log(itemsRef);
console.log(itemsRef[2]);


// const imgRef = document.querySelector('.js-image');
// console.dir(imgRef);
// imgRef.src = 'https://www.pexels.com/photo/white-and-brown-concrete-buildings-7473290/';
// imgRef.alt = 'це моє фото'

