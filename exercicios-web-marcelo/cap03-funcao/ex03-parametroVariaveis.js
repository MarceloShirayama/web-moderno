/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable guard-for-in */
function soma() {
  let sum = 0;
  for (const i in arguments) {
    sum += arguments[i];
  }
  return sum;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3));
console.log(soma(1.1, 2.2, 'Teste'));
console.log(soma('a', 'b', 'c'));
