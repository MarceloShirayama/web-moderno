/* eslint-disable func-names */
const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
// eslint-disable-next-line prefer-arrow-callback
imprimirResultado(3, 4, function (x, y) { return x - y; });
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  // eslint-disable-next-line object-shorthand
  falar: function () { console.log('Olá!!!'); },
};
pessoa.falar();

// shorthand (versão abreviada)
const pessoa2 = {
  falar() { console.log('Olá versão 2!!!'); },
};
pessoa2.falar();
