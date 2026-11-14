'use strict';
const kohde = document.querySelector('#target');
const tekstit = ['First item', 'Second item', 'Third item'];

for (let i = 0; i < tekstit.length; i++) {
  const li = document.createElement('li');
  li.textContent = tekstit[i];
  if (i === 1) {
    li.classList.add('my-item');
  }
  kohde.appendChild(li);
}