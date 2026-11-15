'use strict';
const luku = Number(prompt('Anna kokonaisluku:'));
let onAlkuluku = luku > 1; // 1 ja pienemmät eivät ole alkulukuja

for (let i = 2; i < luku; i++) {
  if (luku % i === 0) {
    onAlkuluku = false;
    break;
  }
}

document.querySelector('#target').innerHTML = onAlkuluku
  ? `${luku} on alkuluku.`
  : `${luku} ei ole alkuluku.`;
