'use strict';

function even(taulukko) {
  const parilliset = [];
  for (const luku of taulukko) {
    if (luku % 2 === 0) {
      parilliset.push(luku);
    }
  }
  return parilliset;
}

const alkuperainen = [2, 7, 4];
const uusi = even(alkuperainen);

console.log('Alkuperäinen taulukko:', alkuperainen);
console.log('Parilliset luvut:', uusi);