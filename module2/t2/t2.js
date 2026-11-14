'use strict';
const maara = Number(prompt('Montako osallistujaa?'));
const nimet = [];

for (let i = 1; i <= maara; i++) {
  nimet.push(prompt(`Anna osallistujan ${i} nimi:`));
}

nimet.sort();

let html = '<ol>';
for (const nimi of nimet) {
  html += `<li>${nimi}</li>`;
}
html += '</ol>';

document.querySelector('#target').innerHTML = html;