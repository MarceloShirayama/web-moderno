let numero = 1;
{
  let numero = 2;// let tem escopo de bloco
  console.log('dentro: ', numero);
}
console.log('fora: ', numero);
console.log('===========================');

let numero1 = 3;
{
  let numero2 = 4;// let tem escopo de bloco
  console.log('dentro: ', numero1);
  console.log('dentro: ', numero2);
}
console.log('fora: ', numero1);
// console.log('fora: ', numero2); => ReferenceError: numero2 is not defined

console.log(`
  Variáveis declaradas com let tem escopo:
  global, de função e de bloco
`);
