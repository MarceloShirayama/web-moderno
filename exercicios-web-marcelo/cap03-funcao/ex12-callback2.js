const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
let notasAbaixoMedia = [];

console.log('Utilizando for in:');
// eslint-disable-next-line no-restricted-syntax
for (const i in notas) {
  if (notas[i] < 7) {
    notasAbaixoMedia.push(notas[i]);
  }
}
console.log(notasAbaixoMedia);

console.log('=======================');
console.log('Utilizando callback com a função filter:');
// eslint-disable-next-line arrow-parens
notasAbaixoMedia = notas.filter(nota => nota < 7);
console.log(notasAbaixoMedia);
