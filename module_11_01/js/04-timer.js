const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
  };

  

//   const date = Date.now();
//   console.dir(date);

  const timer = {
    timerId: null,
    isActive: false,

    start(){
      if (this.isActive) {
        return;
      }

      updateClockface(0);
      this.isActive = true;
      const startTime = Date.now(); // 0

      this.timerId = setInterval(() => {
        const currentTime = Date.now(); // +1
        const deltaTime = currentTime - startTime;

        updateClockface(deltaTime);
      }, 1000);
    },

    stop(){
      clearInterval(this.timerId);
      this.isActive = false;
      this.timerId = null;
      updateClockface(0);
    }
  };

  refs.startBtn.addEventListener('click', timer.start.bind(timer));
  refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
  
  // timer.start();
  
  function updateClockface(time) {
    /**
     * Копипаста со стека 💩
     */
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    // console.log(`${hours}:${mins}:${secs}`);
  
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
  }
  
  function pad(value) {
    return String(value).padStart(2, '0');
  }
  
