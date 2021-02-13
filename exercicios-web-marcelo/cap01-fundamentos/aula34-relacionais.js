/* eslint-disable eqeqeq */
console.log(`'1' == 1: ${'1' == 1}`);
console.log(`'1' === 1: ${'1' === 1}`);
console.log(`'3' != 3: ${'3' != 3}`);
console.log(`'3' !== 3: ${'3' !== 3}`);

console.log('==============================');
console.log(`3 < 2: ${3 < 2}`);
console.log(`3 > 2: ${3 > 2}`);
console.log(`3 <= 2: ${3 <= 2}`);
console.log(`3 >= 2: ${3 >= 2}`);

console.log('==============================');
const d1 = new Date(0);
const d2 = new Date(0);
console.log(`
const d1 = new Date(0);
const d2 = new Date(0);`);
console.log(`d1 == d2: ${d1 == d2}`);
console.log(`d1 === d2: ${d1 === d2}`);
console.log('Por estar comparando variáveis de referência');
console.log('nste caso está sendo comparado endereço de memória');
console.log('-----------------------------------------------------');
console.log(`
const d1 = new Date(0).getTime();
const d2 = new Date(0).getTime();`);
console.log('Por estar comparando variáveis de valor');
console.log('neste caso está sendo comparado 2 variáveis do tipo number com mesmo valor');
console.log(`d1 == d2: ${d1.getTime() == d2.getTime()}`);
console.log(`d1 === d2: ${d1.getTime() === d2.getTime()}`);
console.log('==============================');

console.log('-----------------------------------------------------');
console.log(`undefined == null: ${undefined == null}`);
console.log(`undefined === null: ${undefined === null}`);
