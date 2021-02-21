console.log('Arrow Function');
console.log();

console.log('Formas de declarar uma Arrow Function');
console.log();

let soma = (a, b) => a + b;
console.log(soma(2, 3));

// eslint-disable-next-line arrow-body-style
soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

soma = (a, b) => (
  a + b
);
console.log(soma(2, 3));

console.log();
console.log('Arrow Function (this)');
console.log();

const arrowLexico1 = () => console.log(this === exports);
const arrowLexico2 = arrowLexico1.bind({});
arrowLexico1();
arrowLexico2();

console.log();
console.log('Parâmetro default');
console.log();

function log(texto = 'Padrão') {
  console.log(texto);
}

log();
log(undefined);
log(null);
log('Eu sou mais forte!');

console.log();
console.log('Operador ... spread (espalhar) e rest (agrupar)');
console.log();

function soma2(...num) {
  console.log(num);
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}
console.log(soma2(1, 2, 3));
