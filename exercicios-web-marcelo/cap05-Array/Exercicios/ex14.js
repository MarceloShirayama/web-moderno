/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays,
em que cada elemento é um array formado pelos pares chave/valor que corresponde a um
atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})
// irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
    codigo: 11111,
    preco: 12000
})
// irá retornar [["codigo", 11111], ["preco", 12000]]
*/

// function objectToArray(obj) {
//   const array = [];
//   for (let i = 0; i < obj.length; i++) {

//   }
// }

const objeto1 = {
  nome: 'Maria',
  profissao: 'Desenvolvedora de software',
};

const objeto2 = {
  codigo: 11111,
  preco: 12000,
};

console.log('Resolução 1:');

function objectToArray(obj) {
  const array = [];
  Object.keys(obj).forEach((item) => {
    array.push([item, obj[item]]);
  });
  return array;
}

console.log(objectToArray(objeto1));
console.log();
console.log(objectToArray(objeto2));

console.log('=======================');

console.log('Resolução 2:');

function objectToArray2(obj) {
  const array = [];
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in obj) {
    array.push([key, obj[key]]); // melhor solução Declarativa
  }
  return array;
}

console.log(objectToArray2(objeto1));
console.log();
console.log(objectToArray2(objeto2));

console.log('=======================');

console.log('Resolução 3:'); // melhor solução Imperativa

function objectToArray3(obj) {
  return Object.entries(obj);
}

console.log(objectToArray3(objeto1));
console.log();
console.log(objectToArray3(objeto2));

console.log('=======================');

console.log('Resolução 4:');

function objectToArray4(obj) {
  const keys = Object.keys(obj);
  const result = keys.map((key) => [key, obj[key]]);
  return result;
}

console.log(objectToArray4(objeto1));
console.log();
console.log(objectToArray4(objeto2));
