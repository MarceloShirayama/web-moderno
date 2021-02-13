console.log('Object.preventExtensions');
console.log();
/*
O método Object.preventExtensions() impede que novas propriedades sejam adicionadas a um
objeto (isto é, impede futuras extensões ao objeto).
Note que as propriedades de um objeto não-extensível, em geral, ainda poderão ser apagadas.
*/

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção',
});
console.log(produto);
console.log('Extensível:', Object.isExtensible(produto)); // = false -> não é extensível.

console.log();
console.log('alterando o valor do atributo produto.nome:');
produto.nome = 'Borracha'; // pode ser alterado o valor do atributo (value).
console.log(produto);

console.log();
console.log('deletando o atributo produto.tag:');
delete produto.tag; // pode deletar um atributo.
console.log(produto);

console.log();
console.log('adicionando o atributo produto.descricao:');
produto.descricao = 'Borracha escolar branca'; // não pode incluir um atributo (key).
console.log(produto);

console.log('===============================================');

console.log('Object.seal');
console.log();
/*
O método Object.seal() sela um Objeto, evitando que novas propriedades sejam deletadas ou
adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores
das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam
graváveis (writable).
*/

const pessoa = { nome: 'Juliana', idade: 35 };
console.log('novo objeto pessoa criado:');
Object.seal(pessoa);
console.log(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

console.log();
console.log('delete pessoa.idade:');
delete pessoa.idade; // não é permitido deletar atributos.
console.log(pessoa);

console.log();
console.log('adicionando pessoa.sexo:');
pessoa.sexo = 'F'; // não é permitido adicionar atributos.
console.log(pessoa);

console.log();
console.log('Alterando o valor de pessoa.nome');
pessoa.nome = 'Ana'; // permitido alterar o valor do atributo.
console.log(pessoa);

console.log('=============================================');

console.log('Object.freeze');
console.log();
/*
O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam
adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que
propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de
escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna
o objeto congelado.
*/

const carro = { marca: 'Ferrari', ano: 2000 };
console.log(carro);
Object.freeze(carro);
console.log('Congelado:', Object.isFrozen(carro));

console.log();
console.log('delete carro.ano');
delete carro.ano; // não permitido deletar atributos.
console.log(carro);

console.log();
console.log('adicionando atributo carro.marca');
carro.marca = 'F40'; // não permitido adicionar atributos.
console.log(carro);

console.log();
console.log('alterando o valor de carro.ano');
carro.ano = 2020; // não permitido alterar valores dos atributos.
console.log(carro);
