// eslint-disable-next-line no-extend-native, func-names
Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    // eslint-disable-next-line no-constant-condition
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

let callback = () => true;
console.log(produtos.myFilter(callback));

console.log('=================================');
callback = () => false;
console.log(produtos.myFilter(callback));

console.log('=================================');
const muitoBarato = 20;
const produtoMuitoBarato = (p) => p.preco < muitoBarato;
console.log(produtos.myFilter(produtoMuitoBarato));

console.log('=================================');
const caro = 500;
const produtoCaro = (p) => p.preco >= caro;
console.log(produtos.myFilter(produtoCaro));

console.log('=================================');
const produtoFragil = (p) => p.fragil;
console.log(produtos.myFilter(produtoFragil));
