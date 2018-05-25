'use strict';

  const counter = document.getElementById('counter'),
        increment = document.getElementById('increment'),
        decrement = document.getElementById('decrement'),
        reset = document.getElementById('reset');

let step;

document.addEventListener('DOMContentLoaded', function(e) {
  if (localStorage.step) {
    step = localStorage.step;
  } else {
    step = 0;
  }
  counter.textContent = step;
});


increment.addEventListener('click', function() {
	counter.textContent = ++step;
  localStorage.step = step;
});

decrement.addEventListener('click', function() {
	if (step > 0) {
		counter.textContent = --step;
    localStorage.step = step;
	}
});

reset.addEventListener('click', function() {
  localStorage.clear();
  counter.textContent = 0;
  step = 0;
});
