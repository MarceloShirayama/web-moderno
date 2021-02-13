/* eslint-disable no-labels */
/* eslint-disable eqeqeq */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('for com break');
for (const x in nums) {
  if (x == 5) break; // obs o índice do for é uma string
  console.log(`${x} = ${typeof x}`);
  console.log(`${x} = ${nums[x]}`);
}

console.log('=====================');
console.log('for com continue');
for (const x in nums) {
  if (x == 5) continue;
  console.log(`${x} = ${nums[x]}`);
}

console.log('=====================');
console.log('break laço externo');
externo: for (const a in nums) {
  for (const b in nums) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}

//  ESSES EXEMPLOS SÃO SOMENTE PARA DID ÁTICA
// EXISTEM MELHORES OPÇÕES DO QUE AS FEITAS NOS EXEMPLOS
