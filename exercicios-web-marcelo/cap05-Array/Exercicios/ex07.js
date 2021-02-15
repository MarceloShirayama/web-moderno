/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo,
inclusivo) e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo.
Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando
se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado,
seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se
numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(50, 10, 100) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 3, 150) // retornará false
estaEntre(3, 3, 150, true) // retornará true
*/

console.log('resolução 1:');

function estaEntre(numero, minimo, maximo, inclusivo) {
  if (inclusivo) {
    return !!(numero >= minimo && numero <= maximo);
  }
  return !!(numero > minimo && numero < maximo);
}

console.log(estaEntre(50, 10, 100));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 3, 150));
console.log(estaEntre(3, 3, 150, true));

console.log('=====================================');
console.log('resolução 2:');

function estaEntre2(numero, minimo, maximo, inclusivo = false) {
  return inclusivo
    ? numero >= minimo && numero <= maximo
    : numero > minimo && numero < maximo;
}

console.log(estaEntre2(50, 10, 100));
console.log(estaEntre2(16, 100, 160));
console.log(estaEntre2(3, 3, 150));
console.log(estaEntre2(3, 3, 150, true));
