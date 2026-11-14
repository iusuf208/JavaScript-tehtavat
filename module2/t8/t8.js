'use strict';

function concat(taulukko) {
  let tulos = '';
  for (const alkio of taulukko) {
    tulos += alkio;
  }
  return tulos;
}

const nimet = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
document.querySelector('#target').innerHTML = concat(nimet);