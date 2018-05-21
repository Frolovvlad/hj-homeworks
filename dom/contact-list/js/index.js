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
  contactsList.innerHTML += `<li data-email="${contacts[i].email}" data-phone="${contacts[i].phone}"><strong>${contacts[i].name}</strong></li>`;
}
