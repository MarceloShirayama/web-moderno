/* eslint-disable max-classes-per-file */

const obj = { a: 1, b: 2, c: 3 };
console.log(obj);

console.log('======================');
console.log('Object.values');
console.log('======================');

console.log(Object.values(obj));

console.log('======================');
console.log('Object.entries');
console.log('======================');

console.log(Object.entries(obj));

console.log('======================');
console.log('Melhorias notação literal');
console.log('======================');

const host = 'localhost';
const port = 3000;
const config = {
  host,
  port,
};
console.log(config);

console.log();

const funcoes = {
  ola() {
    return 'OLá';
  },
};
console.log(funcoes.ola());

console.log('======================');
console.log('Class');
console.log('======================');

class Mamifero {
  constructor() {
    this.liquido = 'Leite';
  }

  bebe() {
    return this.liquido;
  }
}

class Cachorro extends Mamifero {
  constructor() {
    super();
    this.voz = 'Au, au!';
  }

  falar() {
    return this.voz;
  }
}

class Vaca extends Mamifero {
  constructor() {
    super();
    super.liquido = 'água';
    this.voz = 'Muuuuu...!';
  }

  falar() {
    return this.voz;
  }
}

const cao = new Cachorro();
console.log(cao.bebe());
console.log(cao.falar());

const vaca = new Vaca();
console.log(vaca.bebe());
console.log(vaca.falar());
