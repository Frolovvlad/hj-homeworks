'use strict';

const fullFoto = document.getElementById('view'),
      gallery = document.getElementById('nav'),
      links = gallery.getElementsByTagName('a'),
      smallFotos = gallery.getElementsByTagName('img');

function updateGallery(event){
  for(let link of links){
    link.classList.remove('gallery-current')
    this.classList.add('gallery-current')
    event.preventDefault ();
    fullFoto.src = this.href;
  }
}

for(let link of links){
  link.addEventListener('click', updateGallery);
}
