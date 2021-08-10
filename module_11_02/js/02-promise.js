const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes = Math.random() > 0.4;

      if (succes) {
        const user = { name: userName, age: 25, posts: 75 };
        resolve(user);
        return;
      }

      const error = "Виникла помиилка";
      reject(error);
    }, 1000);
  });

  // return promise;

  // return succes ? user : error;
};

// function onFetchSuccess (user) {
//     console.log(user);
// }

// function onFetchError (error){
//     console.log(error);
// }

// fetchUser('Mango', onFetchSuccess, onFetchError);

// fetchUser("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(res => res.json())
//   .then(console.log)
//   .catch((error) => console.log(error));


const makePromise = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

makePromise(4000).then(console.log); //3
makePromise(3000).then(console.log); //2
makePromise(5000).then(console.log); //4
makePromise(1000).then(console.log); //1