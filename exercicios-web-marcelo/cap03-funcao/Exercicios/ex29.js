/* eslint-disable no-plusplus */
/*
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e
conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é
fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo
estas informações.
*/

const vetor = [1, 5, 10, 15, 20, 25, 30, 17, 18];
const vetor2 = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];

function numerosNoIntervalo(array) {
  let noIntervalo = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10 && array[i] <= 20) {
      noIntervalo++;
    }
  }
  return console.log(`${noIntervalo} números entre 10 e 20, com intervalo fechado.`);
}

numerosNoIntervalo(vetor);
numerosNoIntervalo(vetor2);
