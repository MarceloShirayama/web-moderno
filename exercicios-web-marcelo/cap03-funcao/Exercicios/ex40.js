/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de
cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja
atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

// Conceito:
// D -> 0,0 a 4,9;
// C -> 5,0 a 6,9;
// B -> 7,0 a 8,9;
// A -> 9,0 a 10,0.

function conceito(vetorNotas) {
  const nota = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < vetorNotas.length; i++) {
    if (vetorNotas[i] >= 0 && vetorNotas[i] < 5) {
      nota.push('D');
    } else if (vetorNotas[i] >= 5 && vetorNotas[i] < 7) {
      nota.push('C');
    } else if (vetorNotas[i] >= 7 && vetorNotas[i] < 9) {
      nota.push('B');
    } else if (vetorNotas[i] >= 9 && vetorNotas[i] < 10) {
      nota.push('A');
    } else {
      nota.push('Nota Invalida');
    }
  }
  return nota;
}

console.log(conceito([-1, 9, 0, 5, 8, 9, 11]));
