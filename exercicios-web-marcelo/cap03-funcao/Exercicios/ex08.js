/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está
progredindo, ele mantém registro de todos os as pontuações feitas por jogo.
Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor
que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores
um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde
de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
*/

const pontosPartida = [];
const recordeBatido = [];

function desempenho(pontos = 0) {
  let maiorPontuacao = 0;
  let menorPontuacao = 0;
  let melhorPartida = 0;
  let piorPartida = 0;
  if (pontosPartida.length) {
    maiorPontuacao = pontosPartida.reduce((acc, el) => Math.max(acc, el));
    menorPontuacao = pontosPartida.reduce((acc, el) => Math.min(acc, el));
    melhorPartida = pontosPartida.indexOf(maiorPontuacao) + 1;
    piorPartida = pontosPartida.indexOf(menorPontuacao) + 1;
  }
  if (pontos > maiorPontuacao) {
    recordeBatido.push(1);
  }
  pontosPartida.push(pontos);
  return [
    console.log(`Jogo número: ${pontosPartida.length}`),
    console.log(`Melhor partida: jogo n.${melhorPartida}`),
    console.log(`Maior pontuação: ${maiorPontuacao}`),
    console.log(`Pior partida: jogo n.${piorPartida}`),
    console.log(`Menor pontuação: ${menorPontuacao}`),
    console.log(`Número de vezes que bateu seu recorde: ${recordeBatido.length}`),
  ];
}

desempenho(2);

console.log('===========================');
desempenho(3);

console.log('===========================');
desempenho(2);

console.log('===========================');
desempenho();

console.log('===========================');
desempenho(5);
