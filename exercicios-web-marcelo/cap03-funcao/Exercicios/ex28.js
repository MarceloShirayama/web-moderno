/* eslint-disable no-plusplus */
/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são
ímpares.
*/

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function qtdeParEImpar(array) {
  let par = [];
  let impar = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      par++;
    } else { impar++; }
  }
  return console.log(`
    Quantidade de números pares: ${par}
    Quantidade de números impares: ${impar}
  `);
}

qtdeParEImpar(vetor);
