const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

let callback = () => true;
console.log(produtos.filter(callback));

console.log('=================================');
callback = () => false;
console.log(produtos.filter(callback));

console.log('=================================');
const muitoBarato = 20;
const produtoMuitoBarato = (p) => p.preco < muitoBarato;
console.log(produtos.filter(produtoMuitoBarato));

console.log('=================================');
const caro = 500;
const produtoCaro = (p) => p.preco >= caro;
console.log(produtos.filter(produtoCaro));

console.log('=================================');
const produtoFragil = (p) => p.fragil;
console.log(produtos.filter(produtoFragil));
