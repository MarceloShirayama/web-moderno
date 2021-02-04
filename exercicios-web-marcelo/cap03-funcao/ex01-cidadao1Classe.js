/* eslint-disable func-names */

//  Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar função de forma literal
function fn1(a, b) { return a - b; }

// criar função em uma variável
const fn2 = function () {};

// armazenar função em um array
const array = [function (a, b) { return a + b; }, fn1, fn2];

console.log(array[0](2, 3));
console.log(array[1](10, 4));

// armazenar função em um objeto
const obj = {};
obj.falar = function () { return 'Opa'; };
console.log(obj.falar());

// função como parâmetro para outra função
function chamaFuncao(fn) {
  fn();
}
// eslint-disable-next-line prefer-arrow-callback
chamaFuncao(function () { console.log('Executando...'); });
function executando() { console.log('Executando outra vez') }
chamaFuncao(executando);

// função pode retornar/conter outra função
function soma(a, b) {
  return function (c) {
    return a + b + c;
  };
}
console.log(soma(10, 2)(3));
