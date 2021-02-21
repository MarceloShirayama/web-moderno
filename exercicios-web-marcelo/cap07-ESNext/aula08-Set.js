// set não aceita repetição e não é indexado

console.log('Declarando Set:');
console.log();

const times = new Set();
console.log(times);

console.log('------------------------------');

console.log('Inserindo elementos em Set:');

times.add('Vasco');
console.log(times);
times.add('Palmeiras').add('São Paulo');
console.log(times);
times.add('Vasco'); // não aceita repetição
console.log(times);

console.log('------------------------------');
console.log('size');
console.log(times.size);

console.log('------------------------------');
console.log('has');
console.log(times.has('Palmeiras'));

console.log('------------------------------');
console.log('delete');
times.delete('São Paulo');
console.log(times.has('São Paulo'));
console.log(times);

console.log('------------------------------');
console.log('Outra forma de declara e criar um Set (array');

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']; // cria apenas um elemento Lucas
const nomesSet = new Set(nomes);
console.log(nomesSet);
