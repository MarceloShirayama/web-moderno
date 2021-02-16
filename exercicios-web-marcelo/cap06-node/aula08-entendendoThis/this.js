console.log(`this === global: ${this === global}`);
console.log(`this === module.exports: ${this === module.exports}`);
console.log(`this === exports: ${this === exports}`);
console.log(`this === globalThis: ${this === globalThis}`);
console.log(`globalThis === global: ${globalThis === global}`);

console.log('============================');

function logThis() {
  console.log(`Dentro da função this === exports: ${this === exports}`);
  console.log(`Dentro da função this === module.exports: ${this === module.exports}`);
  console.log(`Dentro da função this === global: ${this === global}`);
  console.log(`Dentro da função this === globalThis: ${this === globalThis}`);
}
logThis();
