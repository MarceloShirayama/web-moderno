/*
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente
com as consoantes, ou seja, sem as vogais.

Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

// REVIEW: rever a função forEach

console.log('Resolução 1:');

function removeVowels(string) {
  let newString = string;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  vowels.forEach((vowel) => {
    newString = newString.replace(vowel, '');
  });
  return newString;
}

console.log(removeVowels('Cod3r'));
console.log(removeVowels('Fundamentos'));

console.log('==============');

console.log('Resolução 2:');

function removeVowels2(string) {
  return string.replace(/[aeiou]/ig, '');
}

console.log(removeVowels2('Cod3r'));
console.log(removeVowels2('Fundamentos'));
