/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma
  string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este
  é o 2° mês.
  Exemplos:
  nomeDoMes(1) // retornará "janeiro"
  nomeDoMes(4) // retornará "abril"
  */

const mesesEmNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log('Exemplo 1:');

function nomeDoMes(mes) {
  switch (mes) {
    case 1:
      return 'Janeiro';
    case 2:
      return 'Fevereiro';
    case 3:
      return 'Março';
    case 4:
      return 'Abril';
    case 5:
      return 'Maio';
    case 6:
      return 'Junho';
    case 7:
      return 'Julho';
    case 8:
      return 'Agosto';
    case 9:
      return 'Setembro';
    case 10:
      return 'Outubro';
    case 11:
      return 'Novembro';
    case 12:
      return 'Dezembro';
    default:
      return 'Mês inválido';
  }
}

for (let i = 0; i < mesesEmNumero.length; i++) {
  console.log(`${mesesEmNumero[i]} -> ${nomeDoMes(mesesEmNumero[i])}`);
}
console.log(nomeDoMes(13));

console.log('=================================================');
console.log('Exemplo 2:');

function nomeDoMes2(mes) {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];
  // eslint-disable-next-line no-param-reassign
  return meses[--mes];
}

for (let i = 0; i < mesesEmNumero.length; i++) {
  console.log(`${mesesEmNumero[i]} -> ${nomeDoMes2(mesesEmNumero[i])}`);
}
console.log(nomeDoMes2(13));
