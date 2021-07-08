const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', event => {
    // console.log(event);
    console.log('Enter')

    event.target.classList.add('box--active');
})

boxRef.addEventListener('mouseleave', event => {
    // console.log(event);
    console.log('Leave');

    event.target.classList.remove('box--active');
})