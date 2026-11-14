'use strict';
const year = Number(prompt('Anna vuosi:'));
let result;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  result = `${year} on karkausvuosi.`;
} else {
  result = `${year} ei ole karkausvuosi.`;
}

document.querySelector('#target').innerHTML = result;