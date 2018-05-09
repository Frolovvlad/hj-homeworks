'use strict';
const content = document.getElementById('content');

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open('GET', "https://neto-api.herokuapp.com/book/", true);
xhr.send();

function onLoad() {
  var books = JSON.parse(xhr.responseText);
  for(let i = 1; i < books.length; i++){
    //затираю пример
    content.innerHTM = '<li><img></li>';
    document.querySelectorAll('#content li')[0].dataset.title = books[0].title;
    document.querySelectorAll('#content li')[0].dataset.author = books[0].author.name;
    document.querySelectorAll('#content li')[0].dataset.info = books[0].info;
    document.querySelectorAll('#content li')[0].dataset.price = books[0].price;
    document.querySelectorAll('#content li img')[0].src = books[0].cover.small;

    //наполняю товаром
    content.innerHTML += '<li><img></li>'
    document.querySelectorAll('#content li')[i].dataset.title = books[i].title;
    document.querySelectorAll('#content li')[i].dataset.author = books[i].author.name;
    document.querySelectorAll('#content li')[i].dataset.info = books[i].info;
    document.querySelectorAll('#content li')[i].dataset.price = books[i].price;
    document.querySelectorAll('#content li img')[i].src = books[i].cover.small;
  }
}
