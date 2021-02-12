// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };

// eslint-disable-next-line no-extend-native
Object.prototype.attr0 = '0'; // não faça isso, pois vai impactar em todos os objetos

console.log('===========================');

console.log('avo');

console.log(avo);
console.log(avo.attr0);

console.log('===========================');

console.log('pai');

console.log(pai);
console.log(pai.attr1);
console.log(pai.attr0);

console.log('===========================');
console.log('filho');

console.log(filho);
console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3); // encontrou 'C' e não '0' porque attr3 de filho sombreou o attr3 de pai
console.log(filho.attr0);

console.log('===========================');

const carro = {
  velAtual: 0,
  velMax: 200,
  acelarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: 'F40',
  velMax: 324, // shadowing
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log('ferrari acelerando:');

console.log(ferrari);
ferrari.acelarMais(120);
console.log(ferrari.status());

console.log('-------------------');

console.log('volvo acelerando:');

console.log(volvo);
volvo.acelarMais(100);
console.log(volvo);
console.log(volvo.status());

console.log('===========================');

console.log('Object.prototype.attr0 visível em todos os objetos');

console.log(avo.attr0);
console.log(pai.attr0);
console.log(filho.attr0);
console.log(ferrari.attr0);
console.log(volvo.attr0);
