const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray);

console.log();
Object.defineProperty(quaseArray, 'toString', {
  value() { return Object.values(this); },
  enumerable: false,
});

console.log(quaseArray.toString()); // imprime o objeto como um Array.
console.log(quaseArray[0]); // e se comporta como uma array

const testeMetodoArray = quaseArray.toString().splice(1);
console.log(testeMetodoArray);
