/*
Escreva uma função que receba um array de números e retornará a soma de todos os números
desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

console.log('Resolução 1:');

const numeros1 = [10, 10, 10];
const numeros2 = [15, 15, 15, 15];

const soma1 = (array) => array.reduce((acc, el) => acc + el);

console.log(soma1(numeros1));
console.log(soma1(numeros2));

console.log('==============================');

console.log('Resolução 2:');

function soma2(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

console.log(soma2(numeros1));
console.log(soma2(numeros2));

console.log('==============================');

console.log('Resolução 3:');

function soma3(array) {
  let soma = 0;
  // eslint-disable-next-line no-return-assign
  array.forEach((numero) => soma += numero);
  return soma;
}

console.log(soma3(numeros1));
console.log(soma3(numeros2));
