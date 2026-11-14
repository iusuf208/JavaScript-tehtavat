'use strict';
const kuva = document.querySelector('#target');
const laukaisin = document.querySelector('#trigger');

laukaisin.addEventListener('mouseover', () => {
  kuva.src = 'img/picB.jpg';
});

laukaisin.addEventListener('mouseout', () => {
  kuva.src = 'img/picA.jpg';
});