/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a
zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

// obs.: fiz um algoritmo que calcula mesmo que os valores forem negativos.

function multiplicar(numero, multiplicador) {
  let resultado = 0;
  if (multiplicador % 1 === 0) {
    if (multiplicador < 0) {
      for (let i = 1; i <= -(multiplicador); i++) {
        resultado += numero;
      }
      resultado = -(resultado);
    } else {
      for (let i = 1; i <= multiplicador; i++) {
        resultado += numero;
      }
    }
  } else {
    resultado = 'O multiplicador deve ser um número inteiro';
  }
  return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
console.log(multiplicar(-2, 4));
console.log(multiplicar(2, -4));
console.log(multiplicar(-2, -4));
console.log(multiplicar(2, 0));
console.log(multiplicar(-2, 0));
console.log(multiplicar(0.5, 5));
console.log(multiplicar(0.5, 0.5));
console.log(multiplicar(5, 0.5));
