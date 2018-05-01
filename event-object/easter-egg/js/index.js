'use strict';

const menu = document.getElementsByTagName('nav')[0],
      secret = document.getElementsByClassName('secret')[0];

//Открывается меню навигации при нажатии CTRL + ALT + T
function visibleNav(event) {
  if(!event.shuftKey && !event.ctrlKey) {
    return;
  }

  switch (event.code) {
    case 'KeyT':
      menu.classList.toggle('visible');
      break;
  }
}

document.addEventListener('keydown', visibleNav);

//При вводе "нетология" появляется пасхалка
const eventCode = ['нетология'];
let simbol = [];

function visibleSecret(event) {
  simbol.push(event.key);
  let key = simbol.join('').slice(-9).toLowerCase();
    if(eventCode == key){
      secret.classList.add('visible');
  }
}

document.addEventListener('keypress', visibleSecret)
