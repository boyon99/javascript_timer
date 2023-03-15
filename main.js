window.onload = function () {
  // 변수 생성
  let seconds = 00;
  let tens = 00;
  let Interval;

  // 요소 찾기
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start')
  let buttonStop = document.getElementById('button-stop')
  let buttonReset = document.getElementById('button-reset')

  // 클릭 이벤트 등록
  buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  })

  buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
  })

  buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens
  })

  // 타이머 함수 등록
  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}