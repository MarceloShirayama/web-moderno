const peso1 = 1.0;
console.log(peso1);
console.log(typeof peso1);
console.log(Number.isInteger(peso1));

const peso2 = Number('2.3');
console.log(peso2);
console.log(typeof peso2);
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.852;

const media = (avaliacao1 * peso1 + avaliacao2 * peso2) / (peso1 + peso2);
console.log(media.toFixed(1));

console.log(media.toString());
console.log(media.toString(2)); // valor binario de média
console.log(media.toFixed(1).toString());

console.log(typeof media);
