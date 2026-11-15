'use strict';
const maara = Number(prompt('Montako noppaa heitetään?'));
let summa = 0;

for (let i = 0; i < maara; i++) {
  summa += Math.floor(Math.random() * 6) + 1;
}

document.querySelector('#target').innerHTML = `Silmälukujen summa: ${summa}`;
