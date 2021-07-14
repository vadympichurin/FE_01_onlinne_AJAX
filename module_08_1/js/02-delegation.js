const refs = {
    tags: document.querySelector('.js-container'),
    addBtn: document.querySelector('.js-add-btn'),
}

refs.tags.addEventListener('click', onTagClick);

function onTagClick (event) {
    // console.log('Clicked on tag');

    event.stopPropagation();


    if (event.target.nodeName !== 'BUTTON') {
        console.log('Клікнули повз кнопки!');
        return;
    }

    // console.log(event.currentTarget);

    const currentActiveTab = event.currentTarget.querySelector('.active');

    console.log('currentActiveBtn : ', currentActiveTab);

    if(currentActiveTab){
        console.log('Вже є активний таб!');
        currentActiveTab.classList.remove('active');
    }

    const nextActiveTab = event.target;

    nextActiveTab.classList.add('active');
}

let btnCounter = 6;

const annAddBtnClick = event => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = `Кнопка ${btnCounter}`;

    btnCounter += 1;
    refs.tags.appendChild(btn);
}

refs.addBtn.addEventListener('click', annAddBtnClick);