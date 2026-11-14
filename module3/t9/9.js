'use strict';
const painike = document.querySelector('#start');
const syote = document.querySelector('#calculation');
const tulosKentta = document.querySelector('#result');

painike.addEventListener('click', () => {
  const teksti = syote.value.replaceAll(' ', ''); // poistetaan välilyönnit
  let tulos;

  if (teksti.includes('+')) {
    const osat = teksti.split('+');
    tulos = Number(osat[0]) + Number(osat[1]);
  } else if (teksti.includes('-')) {
    const osat = teksti.split('-');
    tulos = Number(osat[0]) - Number(osat[1]);
  } else if (teksti.includes('*')) {
    const osat = teksti.split('*');
    tulos = Number(osat[0]) * Number(osat[1]);
  } else if (teksti.includes('/')) {
    const osat = teksti.split('/');
    if (Number(osat[1]) === 0) {
      tulosKentta.textContent = 'Nollalla ei voi jakaa';
      return;
    }
    tulos = Number(osat[0]) / Number(osat[1]);
  } else {
    tulosKentta.textContent = 'Anna laskutoimitus, esim. 3+5';
    return;
  }

  tulosKentta.textContent = `Tulos: ${tulos}`;
});