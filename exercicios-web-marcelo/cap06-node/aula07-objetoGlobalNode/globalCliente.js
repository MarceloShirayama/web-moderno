/* eslint-disable no-undef */
require('./global');

console.log(MinhaApp.saudacao());
console.log(MinhaApp.nome);

MinhaApp.nome = 'Eita! Mudei o Sistema Legal';
console.log(MinhaApp.nome);

console.log('================================');

console.log(MinhaApp2.saudacao());
console.log(MinhaApp2.nome);

MinhaApp2.nome = 'Esse objeto não altera, pois está congelado';
console.log(MinhaApp2.nome);
