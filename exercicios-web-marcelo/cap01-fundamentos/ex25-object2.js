/* eslint-disable func-names */
/* eslint-disable no-new-object */
console.log(`typeof Object: ${typeof Object}`);
console.log(`typeof new Object(): ${typeof new Object()}`);

const Cliente = function () {};
console.log(`typeof const Cliente = function () {}: ${typeof Cliente}`);

console.log(`typeof new Cliente(): ${typeof new Cliente()}`);

class Produto {}
console.log(`typeof class Produto {}: ${typeof Produto}`);
