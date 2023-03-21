class NpressGame {
  constructor(numblock) {
    this.nblock = numblock; //블록개수 설정
    this.buttons = [];
    this.nexttopress = 1;
    this.imgurllist = get_data_list();
    this.misclicks = 0;
    this.started = false;


    const randomindices = [...Array(this.nblock).keys()].map((i) => i + 1); //블록 인덱스 섞기
    shuffle(randomindices);
    for (var i = 0; i < this.nblock; i++) {
      this.buttons.push(new Button(i + 1, randomindices[i]));
    }
    preload(); //블록 이미지 다운받아놓기
    this.updateimg();

    document.getElementById("Drop").innerHTML = "3";
    setTimeout(start_after_delay, 1000, 2000);
  }

  start() {
    setTimeout(() => { startButton(); this.starttime = startTIME; }, 400);
    for (var b of this.buttons) {
      b.flip();
    }
    this.started = true;
  }
 
  submit(realans) {
    if (!this.started) return;
    const ans = this.buttons[realans - 1].randomindex;
    if (ans == this.nexttopress) {
      console.log("Good(" + ans + ")");
      this.buttons[realans - 1].flip();
      this.nexttopress++;
      if (this.nexttopress > this.nblock) {
        this.end();
      }
    }
    else {
      const penalty = 500;
      this.misclicks++;
      this.starttime -= penalty;
      startTIME -= penalty;
      document.getElementById("Drop").style.color = "red";
      setTimeout(() => { document.getElementById("Drop").style.color = "#ffffff"; }, 300);
      console.log("Try again(press " + this.nexttopress + ", not " + ans + ")");
    }
  }

  updateimg() {
    for (var b of this.buttons) {
      b.imgelement.src = this.imgurllist[b.randomindex - 1];
    }
  }

  end() {
    updateTimer();
    this.endtime = NOW;
    this.time = (this.endtime - this.starttime) / 1000;
    this.submit = (a) => { ; };
    stopButton();
    console.log("your record: " + this.time + "\nmisclicks: " + this.misclicks);
  }
}

class Button {
  constructor(realindex, randomindex) {
    this.realindex = realindex;
    this.randomindex = randomindex;
    this.element = document.getElementById(String(realindex));
    this.imgelement = document.getElementById("img" + realindex);
  }
  flip() {
    this.element.classList.toggle('flipped');
  }
}

//helper 함수 정의
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

