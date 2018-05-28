'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter'),
      counter = document.querySelector('.counter'),
      errors = document.querySelector('output.errors');

connection.addEventListener('message', (event) => {
  if(event.data) {
    try {
      const data = JSON.parse(event.data);
      counter.textContent = data.connections;
      errors.textContent = data.errors;
    } catch (e) {
      console.log(`Произошла ошибка "${e}"`)
      return;
    }
  }
});

window.addEventListener('beforeunload', () => {
  connection.close(1000, 'Сеанс завершен');
});
