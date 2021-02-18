/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra,
criou-se os anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode
ser múltiplo de 100, exceto se for também múltiplo de 400. Com isso em mente, desenvolva
uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.
Exemplos:
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
*/

console.log('Resolução 1:');

const verificaAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return `O ano ${ano} é bissexto`;
  } if (ano % 4 === 0 && ano % 100 !== 0) {
    return `O ano ${ano} é bissexto`;
  }
  return `O ano ${ano} não é bissexto`;
};

const listaDeAnos = [];

// eslint-disable-next-line no-plusplus
for (let i = 1900; i <= 2100; i++) {
  listaDeAnos.push(i);
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < listaDeAnos.length; i++) {
  console.log(verificaAnoBissexto(listaDeAnos[i]));
}

console.log('=====================================');

console.log('Resolução 2:');

function verificaAnoBissexto2(ano) {
  const anoDivPor400 = ano % 400 === 0;
  const anoDivPor4E100 = ano % 4 === 0 && ano % 100 !== 0;
  return (anoDivPor400 || anoDivPor4E100)
    ? `O ano ${ano} é bissexto` : `O ano ${ano} não é bissexto`;
}

for (let i = 0; i < listaDeAnos.length; i++) {
  console.log(verificaAnoBissexto2(listaDeAnos[i]));
}

console.log('=====================================');

console.log('Resolução :');

function verificaAnoBissexto3(ano) {
  return new Date(ano, 1, 29).getDate() === 29 // meses são de 0 a 11
    ? `O ano ${ano} é bissexto` : `O ano ${ano} não é bissexto`;
}

for (let i = 0; i < listaDeAnos.length; i++) {
  console.log(verificaAnoBissexto3(listaDeAnos[i]));
}
