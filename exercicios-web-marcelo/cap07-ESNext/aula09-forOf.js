console.log('Iterando String:');
console.log();

// eslint-disable-next-line no-restricted-syntax
for (const letra of 'Cod3r') {
  console.log(letra);
}

console.log();
console.log('Iterando Array:');

const assuntosEcma = ['Map', 'Set', 'Promise'];
// eslint-disable-next-line no-restricted-syntax
for (const assunto of assuntosEcma) {
  console.log(assunto);
}

console.log();
console.log('Iterando Map:');
console.log();

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);
// eslint-disable-next-line no-restricted-syntax
for (const assunto of assuntosMap) {
  console.log(assunto);
}
// eslint-disable-next-line no-restricted-syntax
for (const chave of assuntosMap.keys()) {
  console.log(chave);
}
// eslint-disable-next-line no-restricted-syntax
for (const valor of assuntosMap.values()) {
  console.log(valor);
}
// eslint-disable-next-line no-restricted-syntax
for (const valor of assuntosMap.values()) {
  console.log(valor.abordado);
}
// eslint-disable-next-line no-restricted-syntax
for (const [chave, valor] of assuntosMap.entries()) {
  console.log(`${chave}: ${valor.abordado}`);
}

console.log();
console.log('Iterando Set:');
console.log();

const s = new Set(['a', 'b', 'c']);
// eslint-disable-next-line no-restricted-syntax
for (const letra of s) {
  console.log(letra);
}
