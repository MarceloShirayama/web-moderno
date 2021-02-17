/*
Crie uma função que receba um array de elementos e retorne um array somente com os
números presentes no array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
*/

console.log('Resolução 1:');

function onlyNumbers(array) {
  const numbers = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

console.log(onlyNumbers(['Javascript', 1, '3', 'Web', 20]));
console.log(onlyNumbers(['a', 'c', '2']));

console.log('=============================');
console.log('Resolução 2:');

let numbers = ['Javascript', 1, '3', 'Web', 20].filter((el) => typeof el === 'number');
console.log(numbers);
numbers = ['a', 'c', '2'].filter((el) => typeof el === 'number');
console.log(numbers);
