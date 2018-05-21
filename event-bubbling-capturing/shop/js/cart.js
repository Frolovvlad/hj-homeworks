'use strict';

list.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.classList.contains('add-to-cart')) {
    let title = event.target.getAttribute('data-title'),
        price = event.target.getAttribute('data-price');
    addToCart({
      title: title,
      price: price
    });
  } else {
    return;
  }
});
