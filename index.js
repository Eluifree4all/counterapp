let hours = 0;
let minutes = 0;
var seconds = 0;
let timerCount;
let time;

let setTime = () => {
  hours < 10 ? (hoursDisplay = "0" + hours) : (hoursDisplay = hours);
  minutes < 10 ? (minutesDisplay = "0" + minutes) : (minutesDisplay = minutes);
  seconds < 10 ? (secondsDisplay = "0" + seconds) : (secondsDisplay = seconds);

  time = "Time:  " + hoursDisplay + ":" + minutesDisplay + ":" + secondsDisplay;
  document.getElementById("timer").innerText = time;
};

let timer = () => {
  if (seconds < 60) {
    seconds = seconds + 1;
  } else if (minutes < 60) {
    minutes = minutes + 1;
    seconds = 0;
  } else {
    hours = hours + 1;
    minutes = 0;
    seconds = 0;
  }
  setTime();
};

let stop = () => {
  if (timerCount) {
    clearInterval(timerCount);
    timerCount = null;
  }
};

let reset = () => {
  hours = 0;
  minutes = 0;
  seconds = 0;
  setTime();
};

let start = () => {
  if (!timerCount) {
    timerCount = setInterval(timer, 1000);
  }
};
