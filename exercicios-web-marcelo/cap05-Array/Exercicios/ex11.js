/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array
como um novo array.
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

console.log('Resolução 1:');

function primeiroEUltimoElemnto(array) {
  const newArray = [];
  const primeiroElemento = array[0];
  const ultimoElemento = array[(array.length - 1)];
  newArray.push(primeiroElemento);
  newArray.push(ultimoElemento);

  return newArray;
}

console.log(primeiroEUltimoElemnto([7.14, 'olá'])); // = [7, "olá"]
console.log();
console.log(primeiroEUltimoElemnto([-100, 'aplicativo', 16])); // = [-100, 16]

console.log();
console.log('Resolução 2:');

const primeiroUltimo = (array) => console.log([array.shift(), array.pop()]);

primeiroUltimo([1, 2, 3]);

console.log();
console.log('Resolução 3:');

const firstAndLast = ([first, ...array]) => {
  const last = array.pop();

  return [first, last];
};

console.log(firstAndLast([1, 2, 3]));
