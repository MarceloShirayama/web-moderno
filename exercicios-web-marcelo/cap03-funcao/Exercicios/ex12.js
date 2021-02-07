/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

// minha resolução
console.log('Meu código');
let fatorial = 1;
const calculoFatorial = (num) => {
  for (let i = 1; i <= num; i++) {
    fatorial *= i;
  }
  return fatorial;
};

console.log(calculoFatorial(10));

console.log('===================');
// resoluçãocoe3r
// *ISSUE: não entendi como o if está fazendo o loop e a função está sendo chamada dentro
// dela mesmo.
// DONE: Recursive funtion - eloquente javascript 03-funcoes.md linha 311.
console.log('código cod3r');
function fatorial2(numero) {
  if (numero === 0) {
    return 1;
  }
  return numero * fatorial2(numero - 1);
}

console.log(fatorial2(10));
