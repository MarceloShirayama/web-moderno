/* eslint-disable no-plusplus */
/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números
negativos há nesse vetor e imprime a quantidade no console.
*/

const vetor = [-10, -5, -1, 1, 5, 10];
const vetor2 = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];

function numerosNegativos(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      contador++;
    }
  }
  return console.log(`${contador} números negativos no vetor.`);
}

numerosNegativos(vetor);
numerosNegativos(vetor2);
