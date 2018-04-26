'use strict'
var btnPrevPhoto = document.getElementById('prevPhoto'),
  btnNextPhoto = document.getElementById('nextPhoto'),
  photo = document.getElementById('currentPhoto'),
  total_img = ['./i/breuer-building.jpg', './i/guggenheim-museum.jpg', './i/headquarters.jpg', './i/IAC.jpg', './i/new-museum.jpg'],
  step = 0;

btnNextPhoto.onclick = function() {
  step++;
  if (step === total_img.length) {
    step = 0;
  }
  photo.src = total_img[step];
}

btnPrevPhoto.onclick = function() {
  step--;
  if (step > total_img.length) {
    step = 0;
  } else if (step < 0) {
    step = total_img.length - 1
  }
  photo.src = total_img[step];
}
