/*
Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

console.log('Resolução 1:');

const arrayNumeros1 = [10, 5, 35, 65];
const arrayNumeros2 = [5, -15, 50, 3];

const menorNumero1 = (array) => array.reduce((acc, el) => (acc < el ? acc : el));

console.log(menorNumero1(arrayNumeros1));
console.log(menorNumero1(arrayNumeros2));

console.log('========================');

console.log('Resolução 2:');

function menorNumero2(array) {
  let resultado = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      resultado = array[i - 1];
    } else {
      resultado = array[i];
    }
    return resultado;
  }
  return resultado;
}

console.log(menorNumero2(arrayNumeros1));
console.log(menorNumero2(arrayNumeros2));

console.log('========================');

console.log('Resolução 3:');

const menorNumero3 = (array) => Math.min(...array);

console.log(menorNumero3(arrayNumeros1));
console.log(menorNumero3(arrayNumeros2));
