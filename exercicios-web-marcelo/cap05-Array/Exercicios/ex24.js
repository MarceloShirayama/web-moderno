/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a
quantidade de vezes que o caractere se repete na string. A função deverá ser
case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
*/

console.log('Resolução 1:');
console.log();

function contarCaractere1(caractere, string) {
  let count = 0;
  let pos = string.indexOf(caractere);
  while (pos !== -1) {
    count++;
    pos = string.indexOf(caractere, pos + 1);
  }
  return count;
}

console.log(contarCaractere1('r', 'A sorte favorece os audazes'));
console.log(contarCaractere1('c', 'Conhece-te a ti mesmo'));

console.log('=================');

console.log('Resolução 2:');
console.log();

const contarCaractere2 = (caractere, string) => (
  [...string].filter((letra) => letra === caractere).length
);

console.log(contarCaractere2('r', 'A sorte favorece os audazes'));
console.log(contarCaractere2('c', 'Conhece-te a ti mesmo'));
