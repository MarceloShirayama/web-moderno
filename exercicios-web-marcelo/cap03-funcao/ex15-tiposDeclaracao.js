/* eslint-disable no-unused-vars */

// function declaration

// eslint-disable-next-line no-use-before-define
console.log(nameFunction(2));
// Este tipo de função é carregada antes de executar o código,
// portanto mesmo que for chamada antes de ser declarada, vai ser executada.
function nameFunction(params) {
  return params;
}

// ------------------------------------------------

// function expression

// eslint-disable-next-line func-names
const variavel = function (params) {
  return params;
};

// ------------------------------------------------

// named function expression (pouco usada)

const variavel2 = function nameFuntion2(params) {
  return params;
};

// ------------------------------------------------

// arrow function

const arrowFunction = (params) => params;
