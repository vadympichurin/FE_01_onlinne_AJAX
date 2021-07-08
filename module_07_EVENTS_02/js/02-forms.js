

const formRef = document.querySelector('.js-register-form');

// console.log(formRef);

formRef.addEventListener('submit', event => {
    event.preventDefault();


    // console.log('event : ', event.target.elements.email.value);

    // const submittedData = {
    //     email: event.target.elements.email.value,
    //     name: event.target.elements.name.value,
    // }

    // console.log(submittedData);

    const formData = {};

    const form = event.target;
    const submittedData = new FormData(form);

    console.log('submittedData : ', submittedData);

    submittedData.forEach((value, key) => {
        formData[key] = value;
    });

    console.log('formData :', formData);
});

