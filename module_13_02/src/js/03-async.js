// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) => setTimeout(() => resolve(fruits[name]), 500));
}

async function asMakeSmoothie() {
  try {
    console.time('stamp');

    const apple = getFruit('apple');
    console.log(apple);

    const kiwi = getFruit('kiwi');
    console.log(kiwi);

    const fruits = await Promise.all([apple, kiwi]);
    console.log(fruits);

    console.timeEnd('stamp');
  } catch (error) {
    console.log(error);
  }
}

asMakeSmoothie();

// function makeSmoothie(){
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(kiwi => console.log(kiwi))
//   })
// }

// makeSmoothie();

// async function asMakeSmoothie (){
//   console.time('stamp');

//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);

//   console.timeEnd('stamp');
// }

// asMakeSmoothie();

// getFruit('apple').then(apple => console.log(apple));

// function expression
// const fb = async function(){};

// arrow function
// const tt = async () => {};

// object method
// const x = {
//   async getName(){}
// }

// class method
// class X {
//   async getName(){}
// }
