'use strict';

const drumKit = document.getElementsByClassName('drum-kit')[0],
      buttons = drumKit.getElementsByTagName('li');

function playMysic() {
  const sound = this.getElementsByTagName('audio')[0];
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

for(const btn of buttons) {
  btn.onclick = playMysic;
}
