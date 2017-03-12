const secHands = document.querySelector('.second-hand');
const minHands = document.querySelector('.min-hand');
const hourHands = document.querySelector('.hour-hand');
const now = new Date();
const seconds = now.getSeconds();
const min = now.getMinutes();
const hour = now.getHours();
var secondDegrees = ((seconds/60) * 360)+90; //added 90 for the initial adjustment of hands to 12, from 9.
var minDegrees = ((min/60) * 360) + 90;
var hourDegrees = ((hour/12) * 360) + 90;

function setDate() {
 // console.log('hi');

  secondDegrees += 6; //1sec = 6 radians.
  minDegrees += 0.1; // 1 min = 0.1 radians == 6/60 = 0.1
  hourDegrees += 0.0083;//1 hr = 6/3600 * 5(as we need to shift the hour hand by 5 radians for an hour) = 0.0083
  secHands.style.transform = `rotate(${secondDegrees}deg)`;
  minHands.style.transform = `rotate(${minDegrees}deg)`;
  hourHands.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);