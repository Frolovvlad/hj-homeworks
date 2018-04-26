'use strict';

const player = document.getElementsByTagName('audio')[0],
      controls = document.getElementsByClassName('controls')[0],
      btnBack = controls.getElementsByClassName('back')[0],
      btnPlaystate = controls.getElementsByClassName('playstate')[0],
      btnStop = controls.getElementsByClassName('stop')[0],
      btnNext = controls.getElementsByClassName('next')[0],
      mediaPlayer = document.getElementsByClassName('mediaplayer')[0];

var step = 0;

//Play List
const playList = [
  { name: 'LA Chill Tour',
    source: './mp3/LA Chill Tour.mp3',
},
  { name: 'This is it band',
    source: './mp3/This is it band.mp3',
},
  { name: 'LA Fusion Jam.mp3',
    source: './mp3/LA Fusion Jam.mp3',
}];

//Вывод название песни
function getNameTrack() {
  const trackName = document.getElementsByTagName('span')[0];
  trackName.title = playList[step].name;
};

//Проверка активен ли плеер
function checkIsActive() {
  player.src = playList[step].source;
    if(mediaPlayer.classList.contains('play')){
      player.play();
  }
};

//Кнопка Forward
btnNext.onclick = function(){
  step++;
  if (step === playList.length) {
    step = 0;
  }
    player.src = playList[step].source;
    //Проверка активен ли плеер
    checkIsActive();
    //Вывод название песни
    getNameTrack();
};

//Кнопка Play and Pause
btnPlaystate.onclick = () => {
  mediaPlayer.classList.toggle('play');
  if(mediaPlayer.classList.contains('play')) {
    player.play();
  } else {
    player.pause();
  }
};

//Кнопка Stop
btnStop.onclick = () => {
  player.pause();
  player.currentTime = 0;
  mediaPlayer.classList.remove('play');
};

//Кнопка Backward
btnBack.onclick = function() {
  step--;
  if (step > playList.length) {
    step = 0;
  } else if (step < 0) {
    step = playList.length - 1;
  }
  //Проверка активен ли плеер
  checkIsActive();
  //Вывод название песни
  getNameTrack();
};
