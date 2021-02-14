const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços.
const precosCarrinho = carrinho.map((el) => JSON.parse(el).preco);
console.log(precosCarrinho);

console.log('ou');

const JSONParaObjeto = (json) => JSON.parse(json);
const pegaPreco = (produto) => produto.preco;

console.log(carrinho.map((JSONParaObjeto)).map(pegaPreco));
