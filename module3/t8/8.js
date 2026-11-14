'use strict';
const painike = document.querySelector('#start');
const tulosKentta = document.querySelector('#result');

painike.addEventListener('click', () => {
  const luku1 = Number(document.querySelector('#num1').value);
  const luku2 = Number(document.querySelector('#num2').value);
  const toiminto = document.querySelector('#operation').value;
  let tulos;

  if (toiminto === 'add') {
    tulos = luku1 + luku2;
  } else if (toiminto === 'sub') {
    tulos = luku1 - luku2;
  } else if (toiminto === 'multi') {
    tulos = luku1 * luku2;
  } else if (toiminto === 'div') {
    if (luku2 === 0) {
      tulosKentta.textContent = 'Nollalla ei voi jakaa';
      return;
    }
    tulos = luku1 / luku2;
  }

  tulosKentta.textContent = `Tulos: ${tulos}`;
});