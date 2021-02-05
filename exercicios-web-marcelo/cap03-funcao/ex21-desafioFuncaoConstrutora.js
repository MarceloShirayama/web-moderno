function Pessoa(nome) {
  this.nome = nome;

  this.falar = () => console.log(`Meu nome é ${this.nome}.`);
}

const p1 = new Pessoa('João');
p1.falar();

// Testando no browser:
// digite:
// document.getElementsByTagName('body')[0].onclick = p1.falar

const p2 = new Pessoa('Maria');
p2.falar();

console.log(`${p1.nome} e ${p2.nome}`);
