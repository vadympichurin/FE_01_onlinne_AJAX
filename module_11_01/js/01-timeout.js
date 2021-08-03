/*
 * Метод setTimeout()
 */

// console.log('Before setTimeout');

// const log = () => console.log('Лог при виклику всередині SetTimeout');

// setTimeout(log, 0);

// console.log("After setTimeout");
  
  /*
   * Асинхронность кода
   */
  
  
  
  
  /*
   * Очистка таймаута с clearTimeout()
   */
  console.log('Before setTimeout');

  const logger = time => {
      console.log(`Лог виконується через ${time}ms`);
  };


  const timeoutId = setTimeout(logger, 2000, 'дві тисячі ');

//   console.log('timeoutId : ', timeoutId);
  
const shouldCancelTimeout = Math.random() > 0.3;
console.log(shouldCancelTimeout);

if(shouldCancelTimeout){
    clearTimeout(timeoutId);
}

  console.log("After setTimeout");
