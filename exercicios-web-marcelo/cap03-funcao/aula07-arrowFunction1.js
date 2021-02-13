// eslint-disable-next-line func-names
let dobro = function (a) {
  return 2 * a;
};
console.log(dobro(2));

// eslint-disable-next-line arrow-body-style
dobro = (a) => {
  return 2 * a;
};
console.log(dobro(2));

dobro = (a) => 2 * a; // retorno implicito
console.log(dobro(2));

// eslint-disable-next-line func-names
let ola = function () {
  return 'Olá';
};
console.log(ola());

ola = () => 'Olá';
console.log(ola());
