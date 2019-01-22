let hours = 7;
let minutes = 3;
let seconds = 42;
if (hours < 10) {
  hours = '0' + hours;
}

if (minutes < 10) {
  minutes = '0' + minutes;
}

if (seconds < 10) {
  seconds = '0' + seconds;
}


const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);