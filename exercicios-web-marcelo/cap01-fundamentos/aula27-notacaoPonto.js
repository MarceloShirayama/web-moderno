console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = () => console.log('Exec...');
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec();

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car('Ford', 2014);
const myCar2 = new Car('Audi', 2019);

console.log(`marca: ${myCar1.name}, ano ${myCar1.year}`);
console.log(`marca: ${myCar2.name}, ano ${myCar2.year}`);
