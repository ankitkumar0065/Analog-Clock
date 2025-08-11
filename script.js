let hr = document.getElementById('hour-hand');
let min = document.getElementById('minute-hand');
let sec = document.getElementById('second-hand');

function displayTime(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourRotation = 30*hours + minutes/2;
  let minuteRotation = 6*minutes;
  let secondRotation = 6*seconds;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minuteRotation}deg)`;
  sec.style.transform = `rotate(${secondRotation}deg)`;
}

   setInterval(displayTime, 1000);