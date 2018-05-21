'use strict';

const shop = document.getElementById('container'),
      cartCount = document.getElementById('cart-count'),
      totalPrice = document.getElementById('cart-total-price'),
      buttons = document.querySelectorAll('.add');

let price = 0,
    count = 0;

for(let btn of buttons){
  btn.addEventListener('click', function() {
    let getPrice = Number(getPriceFormatted(this.dataset.price))
    console.log(typeof getPrice);
    totalPrice.innerHTML = price += getPrice;
    cartCount.innerHTML = count += 1;
  });
}
