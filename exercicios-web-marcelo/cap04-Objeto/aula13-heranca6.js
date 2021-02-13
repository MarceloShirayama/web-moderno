function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula('aula 1 - Bem vindo', 123);
const aula2 = new Aula('aula 2 - Introdução', 124);

console.log(aula1, aula2);

console.log('===============================================');

console.log('simulando o new Object:');

function novo(fn, ...params) {
  const obj = {}; // criação de um novo objeto obj, com a notação literal de objeto.
  // eslint-disable-next-line no-proto, max-len
  obj.__proto__ = fn.pototype; // associação do protótipo do objeto ao atributo prototype da função passada como argumento.
  // eslint-disable-next-line max-len
  fn.apply(obj, params); // chama a função fn, passando como contexto (this) o objeto criado obj e como argumento o array params que foi passado como argumento para a função novo.
  return obj; // retorna o objeto criado obj
}

const aula3 = novo(Aula, 'aula 3 - Conceitos', 125);
const aula4 = novo(Aula, 'aula 4 - Até Breve', 126);
console.log(aula1, aula2, aula3, aula4);
