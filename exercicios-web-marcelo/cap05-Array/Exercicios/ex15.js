/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os
números que são pares e que também tenham índices pares.
💡
Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão dele
por 2 é zero.

Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

console.log('Resolução 1:');

function receberSomenteOsParesDeIndicesPares(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0 && array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

console.log('================================');

console.log('Resolução 2:');

const SomenteOsParesDeIndicesPares = (el, i) => el % 2 === 0 && i % 2 === 0;

function receberSomenteOsParesDeIndicesPares2(array) {
  return array.filter(SomenteOsParesDeIndicesPares);
}

console.log(receberSomenteOsParesDeIndicesPares2([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43]));

console.log('================================');

console.log('Resolução 3:');

function receberSomenteOsParesDeIndicesPares3(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;

    return numeroPar && indicePar;
  });
}

console.log(receberSomenteOsParesDeIndicesPares3([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares3([10, 70, 22, 43]));
