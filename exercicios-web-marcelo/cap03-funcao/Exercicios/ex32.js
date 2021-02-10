/*
32) Construir um algoritmo que calcule a média aritmética dos valores
de um vetor de inteiros.
*/

const vetor = [1, 2, 3, 4, 5];
const vetor2 = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];

function mediaAritmetica(array) {
  let soma = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return `A média dos números do vetor é: ${soma / array.length}`;
}

console.log(mediaAritmetica(vetor));
console.log(mediaAritmetica(vetor2));
