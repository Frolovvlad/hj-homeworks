'use strict';

const title = document.querySelectorAll('prop__name');

function handleTableClick(event) {
  if (event.target.hasAttribute('data-prop-name')) {
    let direction = event.target.getAttribute('data-dir') == 1 ? -1 : 1,
        field = event.target.getAttribute('data-prop-name');

    event.target.setAttribute('data-dir', direction);
    event.target.setAttribute('data-sort-by', field);
    sortTable(field, direction);
  }
  event.stopPropagation();
}

for (let th of title){
  th.addEventListener('click', handleTableClick);
}
