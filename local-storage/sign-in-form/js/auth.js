'use strict';
const signInHtm = document.querySelector('.sign-in-htm');
const signUpHtm = document.querySelector('.sign-up-htm');
const errorMessage = document.querySelector('.error-message');
const buttonSignIn = signInHtm.querySelector('.button');
buttonSignIn.addEventListener('click', function() {
  const inputsSignIn = signInHtm.getElementsByTagName('input');
  cteateMes(inputsSignIn);
  fetch('https://neto-api.herokuapp.com/signin', {
      body: JSON.stringify({
        'email': emailSignIn.value,
        'password': passSignIn.value
      }),
      credentials: 'same-origin', // 'include' | 'omit'
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(res) {
      let result = JSON.parse(res);
      alert(`Пользователь ${result.name} успешно авторизован`);
    })
    .catch((err) => {
      let error = JSON.parse(err);
      errorMessage.innerHTML = error.message;
    });
});
const buttonSignUp = signInHtm.querySelector('.button');
const inputsSignUp = signUpHtm.getElementsByTagName('input');

function cteateMes(filledForm) {
  let form = {};
  Array.from(filledForm)
    .forEach(input => {
      if (input.name) {
        let item = input.name;
        form[item] = input.value;
      }
    });
}
buttonSignUp.addEventListener('click', function() {
  const inputsSignUp = signUpHtm.getElementsByTagName('input');
  cteateMes(inputsSignUp);
  fetch(' https://neto-api.herokuapp.com/signup', {
      body: JSON.stringify(form),
      credentials: 'same-origin', // 'include' | 'omit'
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(res) {
      let result = JSON.parse(res);
      alert(`Пользователь ${result.name} успешно зарегистрирован`);
    })
    .catch((err) => {
      let error = JSON.parse(err);
      errorMessage.innerHTML = error.message;
    });
});
