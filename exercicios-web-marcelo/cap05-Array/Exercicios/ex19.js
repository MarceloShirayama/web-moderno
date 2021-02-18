/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de
desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um
conjunto de números informados pelo usuário. Com o intuito de realizar esse
cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela
quantidade de números.
Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

console.log('Resolução 1:');

const numerosArray1 = [0, 10];
const numerosArray2 = [1, 2, 3, 4, 5];

const soma = (acc, el) => acc + el;

const calcularMedia1 = (array) => (
  array.reduce(soma) / array.length
);

console.log(calcularMedia1(numerosArray1));
console.log(calcularMedia1(numerosArray2));

console.log('=============================');

console.log('Resolução 2:');

function calcularMedia2(array) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  avg = sum / array.length;
  return avg;
}

console.log(calcularMedia2(numerosArray1));
console.log(calcularMedia2(numerosArray2));

console.log('=============================');

console.log('Resolução 3:');

function calcularMedia3(array) {
  let sum2 = 0;
  /* airbnb obs.: iteradores / geradores requerem tempo de execução do regenerador,
  que é muito pesado para este guia permitir. Separadamente, loops devem ser evitados
  em favor de iterações de array. (sintaxe sem restrição) */
  // eslint-disable-next-line no-restricted-syntax
  for (const numero of array) {
    sum2 += numero;
  }
  return sum2 / array.length;
}

console.log(calcularMedia3(numerosArray1));
console.log(calcularMedia3(numerosArray2));

/* referencia a obs.:
https://medium.com/@paul.beynon/thanks-for-taking-the-time-to-write-the-article-i-enjoyed-it-db916026647
*/
