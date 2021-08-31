// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

try{
  console.log(' Всередині try...catch перед myVar');
  myVar
  console.log(' Всередині try...catch після myVar');

} catch(error) {
  console.log(error);
  console.log('помилка!');
}

console.log('Після try... catch');
