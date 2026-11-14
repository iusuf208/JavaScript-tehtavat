'use strict';

function heitaNoppaa() {
  return Math.floor(Math.random() * 6) + 1;
}

let html = '<ul>';
let tulos;

do {
  tulos = heitaNoppaa();
  html += `<li>${tulos}</li>`;
} while (tulos !== 6);

html += '</ul>';
document.querySelector('#target').innerHTML = html;