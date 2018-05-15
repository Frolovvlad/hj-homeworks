'use strict';

const form = document.querySelector('.contentform'),
      fields = form.querySelectorAll('fieldset input'),
      buttons = document.querySelectorAll('.button-contact'),
      message = form.querySelector('fieldset textarea'),
      output = document.getElementById('output');

for (var i = 0; i < fields.length; i++) {
  if (fields[i].name === 'zip') {
    fields[i].type = 'number';
  }
}

function checkFilled() {
  let count = 0;
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      return;
    } else {
      count++;
    }
  }
  if (count === fields.length && message.value !== "") {
    buttons[0].disabled = false;
  }
}

for (let field of fields) {
  field.addEventListener('input', checkFilled);
}

for (let btn of buttons) {
  btn.addEventListener('click', function(event) {
    event.preventDefault()
    form.classList.toggle('hidden');
    updateForm()
    output.classList.toggle('hidden');
  });
}

function updateForm () {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].name === 'name'){
      document.getElementById('name').value = fields[i].value;
    } else if (fields[i].name === 'lastname'){
      document.getElementById('lastname').value = fields[i].value;
    } else if (fields[i].name === 'company'){
      document.getElementById('company').value = fields[i].value;
    } else if (fields[i].name === 'role'){
      document.getElementById('role').value = fields[i].value;
    } else if (fields[i].name === 'zip'){
      document.getElementById('zip').value = fields[i].value;
    } else if (fields[i].name === 'city'){
      document.getElementById('city').value = fields[i].value;
    } else if (fields[i].name === 'address'){
      document.getElementById('address').value = fields[i].value;
    } else if (fields[i].name === 'subject'){
      document.getElementById('subject').value = fields[i].value;
    }
  }
  document.getElementById('message').value = message.value;
}
