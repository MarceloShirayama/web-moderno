// IIFE -> Immediately Invoked Function Expression

// eslint-disable-next-line func-names, wrap-iife
(function () {
  console.log('Será executado na hora');
  console.log('Foge do escopo global');
})();

// DONE: wrap-iife
/*
Existe também uma sintaxe diferente para a IIFE. Podemos mover o segundo par de
parênteses para dentro do primeiro par, envolvendo assim a expressão inteira
com o primeiro par de parênteses.
O resultado é idêntico, tratando-se apenas de uma decisão de estilo.
*/
