/* eslint-disable func-names */
// eslint-disable-next-line no-extend-native
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = (nota) => {
  console.log('Inicio');
  if (nota.entre(9, 10)) {
    console.log('Quadro de Honra!!!');
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado');
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação');
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado');
  } else {
    console.log('Nota Invalida');
  }
  console.log('Fim');
};

console.log(imprimirResultado(10));
console.log(imprimirResultado(8));
console.log(imprimirResultado(4));
console.log(imprimirResultado(2));
console.log(imprimirResultado(-1));
console.log(imprimirResultado(11));
// FIXME: Tratar undefined
/*
Resultado:
Quadro de Honra!!!
Fim
undefined
Aprovado
Fim
undefined
Recuperação
Fim
undefined
Reprovado
Fim
undefined
PORQUE UNDEFINED
*/
