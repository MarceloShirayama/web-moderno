/* eslint-disable func-names */
/* eslint-disable arrow-parens */
// Armazenado uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

// Armazenado uma função arrow em uma variável
const sum = (a, b) => console.log(a + b);
sum(20, 30);

const cumprimento = saudacao => console.log(`${saudacao}!!!`);
cumprimento('Olá');
