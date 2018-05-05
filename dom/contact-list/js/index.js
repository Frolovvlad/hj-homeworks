'use strict';

const phoneBook = document.getElementById('container'),
      contactsList = phoneBook.querySelector('.contacts-list');

let contacts;

if (loadContacts()) {
  try {
    contacts = JSON.parse(loadContacts());
  } catch (e) {
    console.error(e.name, e.message);
  }
}

for(let i = 1; i < contacts.length; i++){
  phoneBook.querySelector('.contacts-list li').dataset.email = contacts[0].email;
  phoneBook.querySelector('.contacts-list li').dataset.phone = contacts[0].phone;
  phoneBook.querySelector('.contacts-list li strong').innerHTML = contacts[0].name;
  contactsList.innerHTML += '<li><strong></strong></li>';
  let contactDate = phoneBook.querySelectorAll('.contacts-list li'),
      contactName = phoneBook.querySelectorAll('.contacts-list li strong');
  contactDate[i].dataset.email = contacts[i].email;
  contactDate[i].dataset.phone = contacts[i].phone;
  contactName[i].innerHTML = contacts[i].name;
}
