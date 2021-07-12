
const refs = {
    backdrop: document.querySelector('.js-backdrop'),
    modal: document.querySelector('.modal'),
    closeBtn: document.querySelector('button[data-action="close-modal"]'),
    openBtn: document.querySelector('button[data-action="open-modal"]'),
}

refs.openBtn.addEventListener('click', onOpenModal);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);


function onPressEsc(event) {
    console.log('Нажали Escape');
    if (event.code === "Escape") {
        onCloseModal();
    }
};

function onOpenModal (event) {
    window.addEventListener('keydown', onPressEsc);
    refs.backdrop.classList.add('show_modal');
}

function onCloseModal (event) {
    window.removeEventListener('keydown', onPressEsc);
    refs.backdrop.classList.remove('show_modal');
}

function onBackDropClick (event){
    if (event.currentTarget === event.target) {
        onCloseModal(); 
    }
};



