'use strict';

const shop = document.getElementById('container'),
      cartCount = document.getElementById('cart-count'),
      totalPrice = document.getElementById('cart-total-price'),
      buttons = document.querySelectorAll('.add');

let price = 0,
    count = 0;

function updateCountAndPrice() {
  totalPrice.innerHTML = price += Number(this.dataset.price);
  cartCount.innerHTML = count += 1;
}

for(let btn of buttons){
  btn.addEventListener('click', updateCountAndPrice);
}
