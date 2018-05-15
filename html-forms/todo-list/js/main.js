'use strict';

const tasks = document.querySelectorAll('.list-block ul li input'),
      result = document.querySelector('.list-block h3 output'),
      totalTasks = tasks.length;

document.addEventListener('DOMContentLoaded', updateCount);

function updateCount() {
  let completTasks = 0;
  for(var i = 0; i < tasks.length; i++) {
    if (tasks[i].checked === true) {
      completTasks++
    }
  }
  result.value = `${completTasks} из ${totalTasks}`;
  if (completTasks === totalTasks) {
    document.querySelector('.list-block').classList.add('complete');
  } else {
    document.querySelector('.list-block').classList.remove('complete');
  }
}

for (let task of tasks) {
  task.addEventListener('change', updateCount);
}
