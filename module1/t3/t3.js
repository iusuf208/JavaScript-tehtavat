'use strict';
const a = Number(prompt('Syötä numero:'));
const b = Number(prompt('Syötä toinen numero:'));
const c = Number(prompt('Syötä kolmas numero:'));

const sum = a + b + c;
const product = a * b * c;
const average = sum / 3;

document.querySelector('#target').innerHTML =
  `Summa: ${sum}<br>Tulo: ${product}<br>Keskimäärä: ${average}`;