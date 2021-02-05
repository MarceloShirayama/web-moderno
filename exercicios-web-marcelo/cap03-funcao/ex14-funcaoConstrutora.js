function Carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0; // atributo privado
  this.acelerar = () => { // método público
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };
  this.getVelocidadeAtual = () => velocidadeAtual; // método público
}

console.log('Uno ACELERANDO!!!');
// eslint-disable-next-line new-parens
const uno = new Carro; // pode instaciar o objeto sem (), mas eslint airnb requer ().
uno.acelerar();
console.log(uno.getVelocidadeAtual());

console.log('Ferrari ACELERANDO!!!');
const ferrari = new Carro(350, 50);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log('Fuscão ACELERANDO!!!');
const fusca = new Carro(60);
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
fusca.acelerar();
console.log(fusca.getVelocidadeAtual());
