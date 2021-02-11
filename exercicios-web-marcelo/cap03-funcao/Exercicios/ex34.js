/* eslint-disable no-plusplus */
/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará
True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo)
estejam contidos em ambas palavras.
*/

function compararStrings(string1, string2) {
  const contem = [];
  let message = false;
  let qtdeContem = 0;
  if (string1.length === string2.length) {
    for (let x = 0; x < string1.length; x++) {
      for (let y = 0; y < string2.length; y++) {
        if (string1[x].toUpperCase() === string2[y].toUpperCase()) {
          contem.push(1);
          qtdeContem = contem.reduce((acc, el) => acc + el);
          if (qtdeContem === string1.length) {
            message = true;
          } else message = false;
        }
      }
    }
  } else {
    message = false;
  }
  return message;
}

console.log(compararStrings('AbCdEfG', 'gFeDcBa')); // true
console.log(compararStrings('AbCdEfGz', 'gFeDcBa')); // false
console.log(compararStrings('AbCdEfG', 'gFeDcBaZ')); // false
console.log(compararStrings('abc', 'ab')); // false
