/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o
segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar
somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo
parâmetro.
Exemplos:
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
*/

console.log('Resolução 1:');

const numeros1 = [38, 2, 365, 10, 125, 11];
const numeros2 = [5, 9, 1, 125, 11];

const arrayFilterByQuantityOfDigits1 = (arrayOfNumbers, quantityOfDigits) => (
  arrayOfNumbers.filter((numbers) => numbers.toString().length === quantityOfDigits)
);

console.log(arrayFilterByQuantityOfDigits1(numeros1, 2));
console.log(arrayFilterByQuantityOfDigits1(numeros2, 1));

console.log('=================');

console.log('Resolução 2:');

function arrayFilterByQuantityOfDigits2(arrayOfNumbers, quantityOfDigits) {
  const newArray = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i].toString().length === quantityOfDigits) {
      newArray.push(arrayOfNumbers[i]);
    }
  }
  return newArray;
}

console.log(arrayFilterByQuantityOfDigits2(numeros1, 2));
console.log(arrayFilterByQuantityOfDigits2(numeros2, 1));
