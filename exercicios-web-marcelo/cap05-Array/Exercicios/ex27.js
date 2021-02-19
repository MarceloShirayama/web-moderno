/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que
corresponde ao ao objeto recebido como parâmetro, porém com as posições das chaves e
valores invertidas, conforme exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
*/

const obj1 = [{
  0: 'Owner Name',
  1: 'Mailing Address',
  2: 'Situs Address',
  3: 'APN',
}];

function invertkeysOfObject(obj) {
  const newArray = Object.keys(obj[0]).map((a) => ({ [a]: obj[0][a] }));
  const sorted = newArray.sort((a, b) => Object.keys(b) - Object.keys(a));
  const res = sorted.map((a) => Object.values(a)[0]);

  return res;
}

console.log(invertkeysOfObject(obj1));

/* referência:
https://stackoverflow.com/questions/44965155/change-position-of-javascript-object-key-and-data
*/
// REVIEW: Rever o odesenvolvimento dessa função.
