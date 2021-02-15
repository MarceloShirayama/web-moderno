/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo
"+" na quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

console.log('Resolução 1:');

function simboloMais1(numero) {
  let sinal = '';
  for (let i = 0; i < numero; i++) {
    sinal += '+';
  }
  return sinal;
}

console.log(simboloMais1(2));
console.log(simboloMais1(4));

console.log('============================');
console.log('Resolução 2:');

function simboloMais2(quantidade) {
  return Array(quantidade).fill('+').join('');
}

console.log(simboloMais2(2));
console.log(simboloMais2(4));

console.log('============================');
console.log('Resolução 3:');

function simboloMais3(quantidade) {
  return '+'.repeat(quantidade);
}

console.log(simboloMais3(2));
console.log(simboloMais3(4));
