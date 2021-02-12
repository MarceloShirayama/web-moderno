const a = 1;
const b = 2;
const c = 3;

// eslint-disable-next-line object-shorthand
const obj1 = { a: a, b: b, c: c }; 
// => como o atributo e o valor são iguais, não é mais necessário.
// nova notação, pode ser escrito:
const obj2 = { a, b, c };
console.log(obj1, obj2);

console.log('===========================');

const nomeAttr = 'nota';
const valorAttr = 7.87;
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);
// nova notação, pode ser escrito:
const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

console.log('===========================');

// definição de função dentro de um objeto literal
const obj5 = {
  // eslint-disable-next-line object-shorthand, func-names
  fn: function () {
    // ...
  },
};
// nova notação, pode ser escrito:
const obj6 = {
  fn() {
    // ...
  },
};
console.log(obj5, obj6);
