/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (const i in notas) {
  console.log(`${i}: ${notas[i]}`);
}

const pessoa = {
  nome: 'Marcelo',
  sobrenome: 'Shirayama',
  idade: '50',
  peso: 90,
};

for (const i in pessoa) {
  console.log(i, pessoa[i]);
}
// FIXME: eslint-disable no-restricted-syntax */
// FIXME: eslint-disable guard-for-in */
