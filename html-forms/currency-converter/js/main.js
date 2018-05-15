'use strict';

const content = document.getElementById('content'),
      source = document.getElementById('source'),
      from = document.getElementById('from'),
      to = document.getElementById('to'),
      spiner = document.getElementById('loader'),
      result = document.getElementById('result');

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', getCurrency);
xhr.addEventListener('loadstart', toStart);
xhr.addEventListener('loadend', toEnd);
xhr.open('GET', 'https://neto-api.herokuapp.com/currency', true);
xhr.send();

let date,
    fromCurrency,
    toCurrency;

function getCurrency() {
  date = JSON.parse(xhr.responseText);
  console.log(xhr.responseText);
  for (var i = 0; i < date.length; i++) {
    from.innerHTML += `<option value = ${date[i].code}>${date[i].code}</option>`;
    to.innerHTML += `<option value = ${date[i].code}>${date[i].code}</option>`;
  }
  fromCurrency = date[0];
  toCurrency = date[0];
  result.value = ((source.value * fromCurrency.value) / toCurrency.value).toFixed(2);
}

function toStart() {
  spiner.classList.remove('hidden');
}

function toEnd() {
  spiner.classList.add('hidden');
  content.classList.remove('hidden')
}

from.addEventListener('change', function() {
  fromCurrency = date.find(function(elem) {
    return elem.code === from.value;
  });
  result.value = ((source.value * fromCurrency.value) / toCurrency.value).toFixed(2);
});

to.addEventListener('change', function() {
  toCurrency = date.find(function(elem) {
    return elem.code === to.value;
  });
  result.value = ((source.value * fromCurrency.value) / toCurrency.value).toFixed(2);
});

source.addEventListener('input', function() {
  result.value = ((source.value * fromCurrency.value) / toCurrency.value).toFixed(2);
});
