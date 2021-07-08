
const inputRef = document.querySelector('.js-input');
const btnLabelRef = document.querySelector('.js-button > span');
const licenseref = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');

inputRef.addEventListener('input', e => {
    // console.log(e.target.value);

    btnLabelRef.textContent = e.target.value;
});

licenseref.addEventListener('change', event => {
    console.log(event.target.checked);

    btnRef.disabled = !event.target.checked;
});

inputRef.addEventListener('focus', () => {
    console.log('Отримав фокус!')
});

inputRef.addEventListener('blur', () => {
    console.log('Вийшов з фокуса!')
});

