/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos
e um número inteiro. Faça com que a primeira função retorne outro vetor que será
resultado da multiplicação de cada elemento pelo número passado como parâmetro.
A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior
que 5.
*/

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numero = 2;

function multVetorPorNumero(array, multiplicador) {
  const vetorResultado = [];
  for (let i = 0; i < array.length; i++) {
    vetorResultado.push(array[i] * multiplicador);
  }
  return vetorResultado;
}

console.log(multVetorPorNumero(vetor, numero));

function multVetorSeMaior5(array, multiplicador) {
  const vetorResultado = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      vetorResultado.push(array[i] * multiplicador);
    }
  }
  return vetorResultado;
}

console.log(multVetorSeMaior5(vetor, numero));
