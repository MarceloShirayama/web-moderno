class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}.`);
  }
}

const p1 = new Pessoa('João');
p1.falar();
console.log(p1.nome);

const criarPessoa = (nome) => ({
  falar: () => console.log(`Meu nome é ${nome}`),
});

const p2 = criarPessoa('Maria');
p2.falar();
console.log(p2);
