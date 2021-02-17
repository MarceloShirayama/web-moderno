/*
Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou
removendo-os, estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo,
ou seja a sua referência de memória é a mesma.

Num projeto que você está trabalhando, você foi designado a refatorar diversas funções
para que façam cópias de objetos e manipulem os dados dessas cópias, com o intuito de
evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo,
está a descrição de uma dessas funções. Você escreverá uma função que recebe um objeto
como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida
nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade especificada
no segundo parâmetro.
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
Dica:
A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para
a função removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
*/

console.log('Resolução 1 (Spread Operator):');
console.log();

const objOriginal1 = { a: 1, b: 2, c: 3 };
let objClone1 = {};

function removerPropriedade(obj, prop) {
  objClone1 = { ...obj }; // faz um clone do objeto original
  delete objClone1[prop]; // altera apenas o objeto clone

  return objClone1;
}

removerPropriedade(objOriginal1, 'a');
console.log('objeto original:');
console.log(objOriginal1);
console.log('objeto clone:');
console.log(objClone1);
console.log(Object.is(objOriginal1, objClone1));

console.log('===================================');

console.log('Resolução 2 (Object.assign):');

const objOriginal2 = { a: 1, b: 2, c: 3 };
// eslint-disable-next-line prefer-object-spread
const objClone2 = Object.assign({}, objOriginal2);
delete objClone2.a;
console.log('objeto original:');
console.log(objOriginal2);
console.log('objeto clone:');
console.log(objClone2);
console.log(Object.is(objOriginal2, objClone2));

console.log('===================================');

console.log('Resolução 3 (JSON.stringify e JSON.parse):');

const objOriginal3 = { a: 1, b: 2, c: 3 };
const objClone3 = JSON.parse(JSON.stringify(objOriginal3));
delete objClone3.a;
console.log(objOriginal3);
console.log(objClone3);
console.log(Object.is(objOriginal3, objClone3));

console.log('===================================');

console.log('Resolução 4 (lodash.cloneDeep):');

const lodash = require('lodash');

const objOriginal4 = { a: 1, b: 2, c: 3 };
const objClone4 = lodash.cloneDeep(objOriginal4, {}, true);
delete objClone4.a;
console.log(objOriginal4);
console.log(objClone4);
console.log(Object.is(objOriginal4, objClone4));

/*
Referencias:
https://dev.to/guimap/deep-clone-no-javascript-17kb
https://alligator.io/js/deep-cloning-javascript-objects/
https://flaviocopes.com/how-to-clone-javascript-object/
https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/
*/
