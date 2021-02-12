/* eslint-disable no-proto */
const ferrari = {
  modelo: 'F40',
  velocidadeMax: 324,
};

const volvo = {
  modelo: 'V40',
  velocidadeMax: 200,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

console.log(typeof Object);
console.log(Object.prototype);

function meuObjeto() {}
console.log(typeof meuObjeto);
console.log(meuObjeto.prototype);
