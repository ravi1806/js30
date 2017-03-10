// 1.add Eventlistener on window for keydown
// 2.in the cb, play the key pressed
// 3.listen for transitionend on all keys
// 4.remove class of playing once the transition ends

window.addEventListener('keydown',function (e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log('audio: ',audio); //tkae the audio with that key
  // console.log('key: ',key); //take the entire div with class key to add class on
    if(!audio) return; //stop the func from returning all together.
    audio.currentTime = 0; //rewind everytime the button is pressed instead of letting the whole previous clip being played
    audio.play();
    key.classList.add('playing');

});

function removeTransition(e) {
    if(e.propertyName !== 'transform'){
        return; // we dont want any of the other transition events except transfrom
    }
    //console.log(e.propertyName);
    //console.log(this); //this here is the key which removetransition event is being played
    this.classList.remove('playing');
}
//Get all buttons on the page with class key
const keys = document.querySelectorAll('.key');
//We can not listen for events on an array, we must loop thru each of it.
keys.forEach(key=> key.addEventListener('transitionend',removeTransition));
//console.log('keys: ',keys);