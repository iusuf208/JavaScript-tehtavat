'use strict';
const target = document.querySelector('#target');

if (confirm('Lasketaanko neliöjuuri?')) {
  const num = Number(prompt('Syötä luku:'));
  if (num < 0) {
    target.innerHTML = 'Negatiivisen luvun neliöjuurta ei ole määritelty.';
  } else {
    target.innerHTML = `Luvun ${num} neliöjuuri on ${Math.sqrt(num)}`;
  }
} else {
  target.innerHTML = 'Neliöjuurta ei lasketa.';
}