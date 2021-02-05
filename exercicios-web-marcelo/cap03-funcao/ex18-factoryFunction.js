// Factory simples

function criarPessoa(nome, sobrenome = 'nao informado') {
  return {
    nome,
    sobrenome,
  };
}

const pessoa1 = criarPessoa('João', 'Ninguém');
const pessoa2 = criarPessoa('Maria', 'da Silva');
const pessoa3 = criarPessoa('José', 'Pedregulho');
const pessoa4 = criarPessoa('Nina');

console.log(pessoa1);
console.log(typeof pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
