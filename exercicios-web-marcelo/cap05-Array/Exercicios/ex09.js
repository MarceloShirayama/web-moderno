/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que
repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array
será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

console.log('Resolução 1:');

function repetir(valor, nVezesValor) {
  const array = [];
  for (let i = 1; i <= nVezesValor; i++) {
    array.push(valor);
  }
  return array;
}

console.log(repetir('Olá', 1));
console.log(repetir('Olá', 2));
console.log(repetir('Olá', 3));
console.log(repetir('Olá', 4));

console.log('===================================');
console.log('Resolução 2:');

const repetir2 = (item, quantidade) => Array(quantidade).fill(item);
// Array(quantidade) é criado um Array com 'quantidade' posições vazias
// .fill preenche todas as posições do Array com o valor de 'item'.

console.log(repetir2('Olá', 1));
console.log(repetir2('Olá', 2));
console.log(repetir2('Olá', 3));
console.log(repetir2('Olá', 4));

console.log('===================================');
