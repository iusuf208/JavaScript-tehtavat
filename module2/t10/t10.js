'use strict';

const ehdokkaat = [];

const ehdokasMaara = Number(prompt('Montako ehdokasta on?'));

for (let i = 1; i <= ehdokasMaara; i++) {
  const nimi = prompt(`Ehdokkaan ${i} nimi:`);
  ehdokkaat.push({
    nimi: nimi,
    aanet: 0,
  });
}

const aanestajaMaara = Number(prompt('Montako äänestäjää on?'));

for (let i = 1; i <= aanestajaMaara; i++) {
  const valinta = prompt(`Äänestäjä ${i}: kenet äänestät?`);

  if (valinta === null || valinta.trim() === '') {
    continue;
  }

  for (const ehdokas of ehdokkaat) {
    if (ehdokas.nimi === valinta) {
      ehdokas.aanet++;
    }
  }
}

ehdokkaat.sort((a, b) => b.aanet - a.aanet);

console.log(`Voittaja on ${ehdokkaat[0].nimi}, ääniä ${ehdokkaat[0].aanet}.`);
console.log('Tulokset:');
for (const ehdokas of ehdokkaat) {
  console.log(`${ehdokas.nimi}: ${ehdokas.aanet} ääntä`);
}