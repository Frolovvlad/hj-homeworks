'use strict';

const shop = document.getElementById('container'),
      cartCount = document.getElementById('cart-count'),
      totalPrice = document.getElementById('cart-total-price'),
      buttons = document.querySelectorAll('.add');

let price = 0,
    count = 0;

for(let btn of buttons){
  btn.addEventListener('click', function() {
    let getPrice = Number(this.dataset.price),
        totalAmount = price += getPrice;;
    totalPrice.innerHTML = getPriceFormatted(totalAmount);
    cartCount.innerHTML = count += 1;
  });
}
