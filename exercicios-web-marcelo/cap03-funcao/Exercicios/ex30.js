/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor
valor dentro do vetor.
*/

const vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return `
  Valor minímo: ${min}
  Valor máximo: ${max}`;
}

console.log(minMax(vetor));

// spread (...)
// A sintaxe de propagação (Spread) permite que um objeto iterável,
// como um array ou string, seja expandida.
console.log(...vetor);
const nome = 'Marcelo';
console.log(...nome);
