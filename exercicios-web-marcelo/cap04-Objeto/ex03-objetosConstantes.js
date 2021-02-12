// pessoa está apontando endereço de memória que contém o objeto pessoa
const pessoa = { nome: 'João' };
console.log(pessoa);

/* alteração do atributo nome, mas o objeto pessoa continua apontando
para o mesmo endereço de memória */
pessoa.nome = 'Pedro';
console.log(pessoa);

// TypeError: Assignment to constant variable.
// pessoa = { nome: 'João' };

/*
O método Object.freeze() congela um objeto: isto é, impede que novas
propriedades sejam adicionadas a ele; impede que as propriedades
existentes sejam removidas; e impede que propriedades existentes,
ou sua inumerabilidade, configurabilidade, ou capacidade de escrita
sejam alteradas. Em essência o objeto é efetivamente imutável.
O método retorna o objeto congelado.
*/
Object.freeze(pessoa);
pessoa.nome = 'Maria'; // não gera erro, mas não muda o atributo.
console.log(pessoa);
pessoa.idade = 23; // não gera erro, mas não inclui o atributo.
console.log(pessoa);
delete pessoa.nome;
console.log(pessoa); // não gera erro, mas não exclui o atributo.
// Agora não só a refrência do endereço de memória não pode ser alterado, como
// Object.freeze torna o objeto em si constante.

// criar um objeto constante
const pessoaConstante = Object.freeze({ nome: 'Ana' });
console.log(pessoaConstante);
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);
