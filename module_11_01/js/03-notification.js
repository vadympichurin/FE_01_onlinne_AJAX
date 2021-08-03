/**
 * - Показываем и скрываем добавляя/удаляя класс
 * - Скрываем через определенное время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

 const refs = {
    notification: document.querySelector('.js-notification'),
  };

  refs.notification.addEventListener('click', notificationHandler);
  
  let timeoutId = null;

  showNotification();
  
  function showNotification (){
    console.log('Show notification');
    refs.notification.classList.add('is-visible');

    timeoutId = setTimeout(hideNotification, 3000);
  }

  function hideNotification () {
    console.log('Hide notification');
    refs.notification.classList.remove('is-visible');
    clearTimeout(timeoutId);
  }

  function notificationHandler () {
    console.log('Click on notification');
    hideNotification();
  }


  