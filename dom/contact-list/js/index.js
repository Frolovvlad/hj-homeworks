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

for(let i = 0; i < contacts.length; i++){
  contactsList.innerHTML += `<li data-email="${contacts[i].email}" data-phone="${contacts[i].phone}"><strong>${contacts[i].name}</strong></li>`;
}
