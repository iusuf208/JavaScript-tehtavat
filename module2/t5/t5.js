'use strict';
const luvut = [];

while (true) {
  const luku = Number(prompt('Anna luku:'));

  if (luvut.includes(luku)) {
    alert('Luku on jo annettu!');
    break;
  }
  luvut.push(luku);
}

luvut.sort((a, b) => a - b);

for (const l of luvut) {
  console.log(l);
}