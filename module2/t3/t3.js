'use strict';
const koirat = [];

for (let i = 1; i <= 6; i++) {
  koirat.push(prompt(`Anna koiran ${i}/6 nimi:`));
}

koirat.sort();
koirat.reverse();

let html = '<ul>';
for (const koira of koirat) {
  html += `<li>${koira}</li>`;
}
html += '</ul>';

document.querySelector('#target').innerHTML = html;