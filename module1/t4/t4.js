'use strict';
const name = prompt('Kerro nimesi?');
const random = Math.floor(Math.random() * 4) + 1; // 1, 2, 3 tai 4
let house;

if (random === 1) {
  house = 'Gryffindor';
} else if (random === 2) {
  house = 'Slytherin';
} else if (random === 3) {
  house = 'Hufflepuff';
} else {
  house = 'Ravenclaw';
}

document.querySelector('#target').innerHTML = `${name}, sinä olet ${house}.`;