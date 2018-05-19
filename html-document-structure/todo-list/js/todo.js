'use strict';

const todoList = document.querySelector('.todo-list'),
      complete = todoList.querySelector('.done'),
      unComplete = todoList.querySelector('.undone'),
      checkBox = todoList.querySelectorAll('input');

for (let btn of checkBox) {
  btn.addEventListener('click', function() {
    let task = this.parentElement;
    if (complete === task.parentElement) {
      unComplete.appendChild(task)
    } else {
      complete.appendChild(task)
    }
  });
}
