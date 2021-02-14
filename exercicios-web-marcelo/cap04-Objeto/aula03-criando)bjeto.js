console.log('1- Usando a notação literal');

const obj1 = {};
console.log(obj1);

console.log('=====================================');

console.log('2- Object JS');

console.log(`typeof Object: ${typeof Object}`);
// eslint-disable-next-line no-new-object, new-parens
console.log(`typeof new Object: ${typeof new Object}`);

// eslint-disable-next-line no-new-object, new-parens
const obj2 = new Object;
console.log(obj2);

console.log('=====================================');

console.log('3- Funções construtoras');

function Produto(nome, preco, desc) {
  this.nome = nome;
  this.preco = preco;
  this.getPrecoDesconto = () => preco * (1 - desc);
}

const p1 = new Produto('Caneta', 7.99, 0.15);
console.log(p1);
console.log(p1.getPrecoDesconto());

console.log('-----------------------------------');

const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p2);
console.log(p2.getPrecoDesconto());

console.log('-----------------------------------');

p1.preco = 1.99;
p1.desc = 0.05;
console.log(p1);
console.log(p1.getPrecoDesconto()); // FIXME: desconto não altera

console.log('=====================================');

console.log('4- Função Factory');

function criarFuncionario(nome, salariobase, faltas) {
  return {
    nome,
    salariobase,
    faltas,
    getSalario() {
      return (salariobase / 30) * (30 - faltas);
    },
  };
}

const func1 = criarFuncionario('João', 1900.00, 2);
console.log(func1);
console.log(func1.getSalario());

console.log('-----------------------------------');

func1.salariobase = 3000;
func1.faltas = 3;
console.log(func1);
console.log(func1.getSalario()); // salario não altera

console.log('=====================================');

console.log('5- Object.create');

const filha = Object.create(null);
filha.nome = 'Ana';
filha.idade = 10;
console.log(filha);

console.log('=====================================');

console.log('6- Uma função famosa que retorna um objeto...');

const fromJSON = JSON.parse('{"info": "Sou um JSON", "queVirou": "objeto"}');
console.log(fromJSON);
console.log(typeof fromJSON);
