const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();

const falando = pessoa.falar;
falando(); // = undefined => conflito de paradigmas: funcional OO.

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

/*
bind
Para uma dada função, cria uma função vinculada que tem o mesmo corpo que a
função original. Este objeto da função vinculada está associado ao objeto
especificado, e tem os parâmetros iniciais especificados.
Em outras palavras:
Sempre que referenciar o this o this será o objeto passado para a função bind.
*/
