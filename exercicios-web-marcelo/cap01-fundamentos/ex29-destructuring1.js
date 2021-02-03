// recurso introduzido no ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(`nome: ${nome}, idade: ${idade}`);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

// const { nome } = pessoa; => SyntaxError: Identifier 'nome' has already been 
// console.log(nome);

const { endereco } = pessoa;
console.log(endereco);

const { endereco: { logradouro, numero }} = pessoa;
console.log(logradouro, numero);

const { sobrenome } = pessoa;
console.log(sobrenome);

const { nome: name, telefone: phone = 'Não informado' } = pessoa;
console.log(name, phone);
