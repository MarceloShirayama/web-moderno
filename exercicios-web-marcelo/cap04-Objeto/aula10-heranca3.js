const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true },
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log('========================================');
console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log('========================================');
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in filha2) {
  console.log(key);
}

console.log('-----------------------------------------');
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in filha2) {
  // eslint-disable-next-line no-unused-expressions, no-prototype-builtins
  filha2.hasOwnProperty(key)
    ? console.log(key) : console.log(`Por herança: ${key}`);
}

console.log('========================================');
const filho1 = Object.create(pai);
console.log(filho1);
console.log(filho1.nome);
console.log(filho1.corCabelo);

console.log('-----------------------------------------');
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in filho1) {
  // eslint-disable-next-line no-unused-expressions, no-prototype-builtins
  filho1.hasOwnProperty(key)
    ? console.log(key) : console.log(`Por herança: ${key}`);
}

// eslint-disable-next-line no-restricted-syntax
for (const key in filha1) {
  if (Object.hasOwnProperty.call(filha1, key)) {
    console.log(key);
  } else {
    console.log(`Por herança: ${key}`);
  }
}
