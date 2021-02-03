/* eslint-disable no-plusplus */
let num1 = 1;
let num2 = 2;

console.log(num1++);

console.log(--num1);

num1++;
console.log(num1);

--num1;

console.log(`
    Antes: num1 = ${num1} e num2 = ${num2}
    operação lógica: ${++num1 === num2--}
    Depois: num1 = ${num1} e num2 = ${num2}
    obs.: no momento da comparação num1 = 2 e num2 = 2
`);
