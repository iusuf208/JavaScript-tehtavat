'use strict';
const alku = Number(prompt('Anna alkuvuosi:'));
const loppu = Number(prompt('Anna loppuvuosi:'));

let html = '<ul>';
for (let vuosi = alku; vuosi <= loppu; vuosi++) {
  if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
    html += `<li>${vuosi}</li>`;
  }
}
html += '</ul>';

document.querySelector('#target').innerHTML = html;
