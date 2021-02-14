// eslint-disable-next-line no-extend-native, func-names
Array.prototype.map2 = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(fn(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços.
const precosCarrinho = carrinho.map2((el) => JSON.parse(el).preco);
console.log(precosCarrinho);

console.log('ou');

const JSONParaObjeto = (json) => JSON.parse(json);
const pegaPreco = (produto) => produto.preco;

console.log(carrinho.map2((JSONParaObjeto)).map2(pegaPreco));
