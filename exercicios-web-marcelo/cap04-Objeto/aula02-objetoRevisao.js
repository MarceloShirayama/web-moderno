// coleção dinâmica de pares chave/valor

/*
Criando Objeto
Nota:
O Objectconstrutor é usado para criar novos objetos genéricos em JavaScript, como:
*/
// eslint-disable-next-line no-new-object
const produto = new Object();
/*
No entanto, isso não é diferente de usar a sintaxe literal de objeto mais concisa:
const produto = {};
Por esse motivo, muitos preferem sempre usar a sintaxe literal do objeto e nunca usar o
Objectconstrutor.
*/
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

// delete
delete produto['marca do produto'];
delete produto.preco;
console.log(produto);

const carro = {};
carro.modelo = 'A4';
carro.preco = 89000;
carro.proprietario = {
  nome: 'Raul',
  idade: 56,
  endereco: {
    logradouro: 'Rua Abc',
    numero: 123,
  },
};
carro.condutores = [
  {
    nome: 'Junior',
    idade: 19,
  }, {
    nome: 'Ana',
    idade: 42,
  },
];
// eslint-disable-next-line func-names
carro.calcularValorSeguro = function () {
  // ...
};

console.log(carro);

// alteração
carro.proprietario.endereco.numero = 1000;
// eslint-disable-next-line dot-notation
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante';
console.log(carro);

// delete
// delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);

// consulta
console.log(carro.calcularValorSeguro); // = undefined -> deletado acima
// console.log(carro.condutores.nome); -> TypeError: Cannot read property 'nome' of undefined
console.log(carro.proprietario.idade);
console.log(carro.condutores.length);
