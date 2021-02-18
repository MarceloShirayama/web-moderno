/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal
dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e
preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total
das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])
// retornará 239.99

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])
// retornará 34599.89
*/

const despesas1 = [
  {
    nome: 'Jornal online',
    categoria: 'Informação',
    preco: 89.99,
  },
  {
    nome: 'Cinema',
    categoria: 'Entretenimento',
    preco: 150,
  },
];

const despesas2 = [
  {
    nome: 'Galaxy S20',
    categoria: 'Eletrônicos',
    preco: 3599.99,
  },
  {
    nome: 'Macbook Pro',
    categoria: 'Eletrônicos',
    preco: 30999.90,
  },
];

console.log('Resolução 1:');
console.log();

function despesasTotais(arrayProdutos) {
  let total = 0;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const produto of arrayProdutos) {
    total += produto.preco;
  }
  return total;
}

console.log(despesasTotais(despesas1));
console.log();
console.log(despesasTotais(despesas2));

console.log('==============================');

console.log('Resolução 2:');
console.log();

const totalGeral = (arrayProdutos) => (
  arrayProdutos.reduce((acc, el) => (
    acc.preco + el.preco
  ))
);

console.log(totalGeral(despesas1));
console.log();
console.log(totalGeral(despesas2));
