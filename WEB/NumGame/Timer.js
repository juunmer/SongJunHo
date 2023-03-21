const timer = document.querySelector('.js-timer');
  startBtn = document.querySelector('.startBtn');
  stopBtn = document.querySelector('.stopBtn');

let startTIME;
let NOW = new Date().getTime();
let cron;

function startButton(){
  startTIME = new Date().getTime();
  updateTimer();
  stopButton();
  cron = setInterval(updateTimer, 27);
  timer.classList.add('start');
}

function stopButton() {
  clearInterval(cron);
  timer.classList.remove('start');
}

function updateTimer() {
  NOW = new Date().getTime();
  const TIME = Math.floor((NOW - startTIME)/10);
  const minutes = Math.floor(TIME / 6000);
  const checkSeconds = Math.floor(TIME / 100);
  const seconds = checkSeconds % 60;
  const tenmilliseconds = TIME % 100;

  timer.innerText = `${minutes < 10 ?  `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}`: seconds}:${tenmilliseconds < 10 ? `0${tenmilliseconds}`: tenmilliseconds}`;
}