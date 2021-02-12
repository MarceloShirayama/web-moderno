console.log('Métodos Object.keys, Object.values, Object.entries');

const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

// eslint-disable-next-line arrow-parens
Object.entries(pessoa).forEach(el => {
  console.log(`${el[0]}: ${el[1]}`);
});

// exemplo anterior usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

console.log('============================================');

console.log('Método Object.defineProperty');

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019',
});

console.log(pessoa);

pessoa.dataNascimento = '01/01/2017'; // não altera, pois a propriedade writable é false
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

console.log('============================================');

console.log('Método Object.assign');

// Object.assign (ECMASript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
console.log(dest);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
