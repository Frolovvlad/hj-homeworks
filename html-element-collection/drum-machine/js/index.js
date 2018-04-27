'use strict';

const drumKit = document.getElementsByClassName('drum-kit')[0],
      buttons = drumKit.getElementsByTagName('li');

function playMysic() {
  this.getElementsByTagName('audio')[0].play()
}

for(const btn of buttons) {
  btn.onclick = playMysic;
}
