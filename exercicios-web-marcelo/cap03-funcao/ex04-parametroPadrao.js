/* eslint-disable prefer-rest-params */
/* eslint-disable no-param-reassign */

// extratégias para gerar valor padrão

console.log('estratégia 1:');
function soma1(a, b, c) {
  // a = isNaN(a) ? 1 : a;
  // Por quê? O global isNaN força não-números a números,
  // retornando true para qualquer coisa que coage a NaN.
  // Se esse comportamento for desejado, torne-o explícito.
  a = Number.isNaN(Number(a)) ? 1 : a;
  b = Number.isNaN(Number(b)) ? 1 : b;
  c = Number.isNaN(Number(c)) ? 1 : c;
  return a + b + c;
}

console.log(soma1(0, 0, 0));
console.log(soma1(10, 20, 30));
console.log(soma1(10, 20));
console.log(soma1(10));
console.log(soma1());

console.log('=====================');
console.log('estratégia 2, 3 e 4:');

function soma2(a, b, c) {
  a = a || 1;
  b = b !== undefined ? b : 1;
  c = 2 in arguments ? c : 1;
  return a + b + c;
}

console.log(soma1(0, 0, 0));
console.log(soma2(10, 20, 30));
console.log(soma2(10, 20));
console.log(soma2(10));
console.log(soma2());

console.log('=====================');
console.log('valor padrão do ES2015:');

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma1(0, 0, 0));
console.log(soma3(10, 20, 30));
console.log(soma3(10, 20));
console.log(soma3(10));
console.log(soma3());
