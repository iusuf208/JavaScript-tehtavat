'use strict';
const lomake = document.querySelector('#source');
const kohde = document.querySelector('#target');

lomake.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const etunimi = document.querySelector('input[name=firstname]').value;
  const sukunimi = document.querySelector('input[name=lastname]').value;

  kohde.textContent = `Nimesi on ${etunimi} ${sukunimi}`;
});