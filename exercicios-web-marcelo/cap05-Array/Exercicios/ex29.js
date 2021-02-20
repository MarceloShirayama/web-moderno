/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente
nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

console.log('Resolução 1:');

const numbers1 = [12, 16, 1, 5];
const numbers2 = [8, 4, 5, 6];

function searchSecondLargest1(arrayOfNumbers) {
  const firstLargest = Math.max(...arrayOfNumbers);
  const arrayClone = [...arrayOfNumbers]; // clone para o splice não alterar o array original
  arrayClone.splice(arrayClone.indexOf(firstLargest), 1);
  const secondLargest = Math.max(...arrayClone);
  return secondLargest;
}

console.log(searchSecondLargest1(numbers1));
console.log(searchSecondLargest1(numbers2));

console.log('=================');

console.log('Resolução 2:');

function secondLargest2(arrayOfNumbers) {
  const sortDecrescent = (a, b) => b - a;
  const sorted = (array) => array.sort(sortDecrescent);
  return sorted(arrayOfNumbers)[1];
}

console.log(secondLargest2(numbers1));
console.log(secondLargest2(numbers2));

console.log('=================');

console.log('Resolução 3:');

function secondLargest3(arrayOfNumbers) {
  let numbers = arrayOfNumbers;
  const firstLargest = Math.max(...numbers);
  numbers = numbers.filter((number) => number !== firstLargest);
  const secondLargest = Math.max(...numbers);
  return secondLargest;
}

console.log(secondLargest3(numbers1));
console.log(secondLargest3(numbers2));
