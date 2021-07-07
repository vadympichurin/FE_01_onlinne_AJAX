/**
 * Event (подія)
 * Створити та видалити
 * Коллбек функції
 * об'єкт події
 */

const refs = {
    addBtn: document.querySelector('.js-add-listener'),
    removeBtn: document.querySelector('.js-remove-listener'),
    targetBtn: document.querySelector('.js-target'),
}

// console.log(refs.addBtn);
// console.log(refs.removeBtn);
// console.log(refs.targetBtn);

const onTargetClick = function (event){
    console.log(event.target);
    console.log('Підслуховувач працює!!!');
};

refs.addBtn.addEventListener('click', event => {
    console.log('Ми клікнулі по кнопці ADD_EVENT!!!');
    refs.targetBtn.addEventListener('click', onTargetClick);
});

refs.removeBtn.addEventListener('click', event => {
    console.log('Ми натиснули на кнопку видалення події!');
    refs.targetBtn.removeEventListener('click', onTargetClick);
})

const a = {x: 1};
const b = {x: 1};
const c = b;

console.log(a === b);
console.log(c === b);