const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//페이지가 켜지면 실행되는 메인 함수
let game = null;
let numberofbtn = 16;
window.onload = function() {
  if (vh / vw > 731 / 411) document.body.style.backgroundSize = "auto 100vh";
  else document.body.style.backgroundSize = "100vw auto";
}

//helper 함수 정의
function Playgame(n) {
  numberofbtn = n;
  game = new NpressGame(n);
  if (n == 12) document.getElementById("button-table").style.height = "67.5vw";
  // else if (n == 16) document.getElementById("button-table").style.height = "90vw";
  // else if (n == 20) document.getElementById("button-table").style.height = "112.5vw";
}

function submit(id) {
  game.submit(Number(id));
}

function start_after_delay(msec) {
  if (msec == 0) game.start();
  else {
    document.getElementById("Drop").innerHTML = msec / 1000;
    setTimeout(() => { start_after_delay(msec - 1000); }, 1000);
  }
}

function reload() {
  //location.reload();
  Playgame(numberofbtn);
}
