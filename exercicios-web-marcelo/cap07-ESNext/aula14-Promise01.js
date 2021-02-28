let a = 1;
console.log(a);

let p = new Promise((cumprirPromessa) => {
  cumprirPromessa({
    x: 3,
    y: 4,
  });
});

console.log(typeof p);

p.then((valor) => console.log(valor));
p.then((valor) => console.log(valor.x));

p = new Promise((resolve) => {
  resolve(['Ana', 'Bia', 'Carlos', 'Damiel']);
});

const primeiroValor = (arraOuString) => arraOuString[0];

const letraMinuscula = (letra) => letra.toLowerCase();

p
  .then(primeiroValor) // resultado = Ana
  .then(primeiroValor) // parâmetro = Ana, resulatdo = A
  .then(letraMinuscula) // parâmetro = A, resultado = a
  // .then((valor) => console.log(valor));
  .then(console.log); // parâmetro = a
// o valor que then recebe é o resultado do then anterior
