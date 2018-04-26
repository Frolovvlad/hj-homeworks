'use strict';
const menu = document.getElementsByTagName('div')[0];

menu.onclick = () => {
  menu.classList.toggle('active');
}
