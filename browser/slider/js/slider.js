'use strict'

var photo = document.getElementById('img'),
	  total_img = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png'],
	  step = 0;

function slider() {
	step++;
	if (step === total_img.length) {
		step = 0;
	}
	photo.src = total_img[step];
}

setInterval(slider, 5000);
