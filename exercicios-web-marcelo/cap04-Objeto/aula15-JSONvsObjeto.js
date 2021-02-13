const obj = {
  // eslint-disable-next-line no-undef
  a: 1,
  b: 2,
  c: 3,
  // eslint-disable-next-line no-undef
  soma() { return a + b + c; },
};
console.log(obj);

console.log();
console.log('objeto para JSON:');
console.log(JSON.stringify(obj)); // note que a função soma foi excluida do JSON.
console.log(typeof (JSON.stringify(obj)));

console.log();
console.log('JSON para objeto:');
const obj2 = JSON.parse('{ "a": 1, "b": 2, "c": 3 }');
console.log(obj2);
console.log(typeof obj2);

console.log();
const string = '{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }';
const obj3 = JSON.parse(string);
console.log(obj3);
console.log(typeof obj3);
