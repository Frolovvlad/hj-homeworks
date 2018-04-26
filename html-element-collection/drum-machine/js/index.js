'use strict';

const drumKit = document.getElementsByClassName('drum-kit')[0],
      buttons = drumKit.getElementsByTagName('li');

function playMysic() {
  if(this.classList.contains('key-clap')) {
      this.getElementsByTagName('audio')[0].play();
  } else if(this.classList.contains('key-hihat')) {
      this.getElementsByTagName('audio')[0].play();
  } else if(this.classList.contains('key-kick')){
      this.getElementsByTagName('audio')[0].play();
  } else if(this.classList.contains('key-openhat')){
      this.getElementsByTagName('audio')[0].play();
  } else if(this.classList.contains('key-boom')){
      this.getElementsByTagName('audio')[0].play();
  } else if(this.classList.contains('key-ride')){
      this.getElementsByTagName('audio')[0].play();
  }
}

for(const button of buttons) {
  button.onclick = playMysic;
}
