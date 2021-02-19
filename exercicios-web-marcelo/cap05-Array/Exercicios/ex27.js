/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que
corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e
valores invertidas, conforme exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

console.log('Resolução 1:');

const object = { a: 1, b: 2, c: 3 };

function invertKeyAndValue1(obj) {
  const invertObj = {};

  Object.entries(obj).forEach((keyValue) => {
    const key = 0;
    const value = 1;

    invertObj[keyValue[value]] = keyValue[key];
  });
  return invertObj;
}

console.log(invertKeyAndValue1(object));

console.log('===========================');

console.log('Resolução 2:');

function invertKeyAndValue2(obj) {
  const invertObject = Object.entries(obj)
    .map((keyValue) => keyValue.reverse());

  return Object.fromEntries(invertObject);
  // Object.fromEntries() transforma uma lista de pares chave-valor em um objeto.
}

console.log(invertKeyAndValue2(object));
