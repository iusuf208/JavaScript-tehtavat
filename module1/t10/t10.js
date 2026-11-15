'use strict';
const nopat = Number(prompt('Montako noppaa?'));
const haluttuSumma = Number(prompt('Mikä silmälukujen summa?'));
const kierrokset = 10000;
let osumat = 0;

for (let i = 0; i < kierrokset; i++) {
  let summa = 0;
  for (let j = 0; j < nopat; j++) {
    summa += Math.floor(Math.random() * 6) + 1;
  }
  if (summa === haluttuSumma) {
    osumat++;
  }
}

const todennakoisyys = (osumat / kierrokset) * 100;

document.querySelector('#target').innerHTML =
  `Todennäköisyys saada summa ${haluttuSumma}, ${nopat} nopalla on ${todennakoisyys.toFixed(2)} %`;
