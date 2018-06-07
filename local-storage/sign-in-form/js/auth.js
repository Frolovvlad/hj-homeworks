'use strict';
const signInHtm = document.querySelector('.sign-in-htm'),
      signUpHtm = document.querySelector('.sign-up-htm'),
      signInErrorMessage = signInHtm.querySelector('.error-message'),
      signUpErrorMessage = signUpHtm.querySelector('.error-message'),
      buttonSignIn = signInHtm.querySelector('.button'),
      buttonSignUp = signUpHtm.querySelector('.button');

var xhr = new XMLHttpRequest();

//Пароль/Логин

buttonSignIn.addEventListener('click', function(event) {
  const formData = new FormData(signInHtm);
  event.preventDefault();

  xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(formData));

  for (const [k, v] of formData) { console.log(k + ': ' + v); }

  xhr.addEventListener('load', function() {
    var data = JSON.parse(xhr.responseText);
    if(data.error) {
      signInErrorMessage.textContent = data.message;
    } else {
      alert(`Пользователь ${data.name} успешно авторизован`);
    }
  })
});

//Регистрация

buttonSignUp.addEventListener('click', function(event) {
  const formData = new FormData(signUpHtm);
  event.preventDefault();

  xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(formData));

  for (const [k, v] of formData) { console.log(k + ': ' + v); }

  xhr.addEventListener('load', function() {
    var data = JSON.parse(xhr.responseText);
    if(data.error) {
      signUpErrorMessage.textContent = data.message;
    } else {
      alert(`Пользователь ${data.name} успешно зарегистрирован`);
    }
  })
});
