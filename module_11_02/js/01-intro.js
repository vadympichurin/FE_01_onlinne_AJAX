// const promise = new Promise((resolve, reject) => {
//     const succsess = Math.random() > 0.5;

//     setTimeout(() => {
//         if(succsess) {
//             resolve('Success');
//         }

//         reject('Fail!')
//     }, 1000);
//     // resolve('Hello');
//     // reject('error');
// });

// // console.log(promise);

// promise
//     .then(result => { console.log(`%c${result}`, 'color: green; font-size: 20px') })
//     .catch(error => {console.log(`%c${error}`, 'color: red; font-size: 20px')});

/**
 * чейнинг
 */

const promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then((x) => {
    console.log("x : ", x);
    return x * 2;
  })
  .then((y) => {
    console.log("y : ", y);
    return y + 30;
  })
  .then((z) => console.log("z : ", z))
  .catch((error) => console.log(error));
