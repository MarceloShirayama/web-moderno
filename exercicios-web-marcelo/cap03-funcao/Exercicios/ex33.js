/*
33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes
vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo
com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função
de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado
no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino'];
let vetorDouble = [1.1, 2.2, 3.3, 4.4];

const alphaNumerico = vetorInteiro.concat(vetorString);
const tresVetores = vetorInteiro.concat(vetorString, vetorDouble);

console.log(alphaNumerico);
console.log(tresVetores);
