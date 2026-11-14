'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const kohde = document.querySelector('#target');

for (const oppilas of students) {
  const option = document.createElement('option');
  option.value = oppilas.id;
  option.textContent = oppilas.name;
  kohde.appendChild(option);
}
