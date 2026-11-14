'use strict';
const names = ['John', 'Paul', 'Jones'];
const kohde = document.querySelector('#target');

let html = '';
for (const nimi of names) {
  html += `<li>${nimi}</li>`;
}
kohde.innerHTML = html;
