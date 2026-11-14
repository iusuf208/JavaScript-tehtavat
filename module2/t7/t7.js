'use strict';

function heitaNoppaa(sivut) {
  return Math.floor(Math.random() * sivut) + 1;
}

const sivut = Number(prompt('Montako sivua nopassa on?'));

let html = '<ul>';
let tulos;

do {
  tulos = heitaNoppaa(sivut);
  html += `<li>${tulos}</li>`;
} while (tulos !== sivut);

html += '</ul>';
document.querySelector('#target').innerHTML = html;