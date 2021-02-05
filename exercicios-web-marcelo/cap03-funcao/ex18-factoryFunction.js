// Factory simples

function criarPessoa(nome, sobrenome = 'nao informado') {
  return {
    nome,
    sobrenome,
  };
}

const pessoa1 = criarPessoa('Marcelo', 'Shirayama');
const pessoa2 = criarPessoa('Julia', 'Shirayama');
const pessoa3 = criarPessoa('Bruna', 'Madeiri');
const pessoa4 = criarPessoa('Nina');

console.log(pessoa1);
console.log(typeof pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
