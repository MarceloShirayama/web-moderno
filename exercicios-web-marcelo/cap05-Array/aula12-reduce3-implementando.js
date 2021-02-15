// eslint-disable-next-line no-extend-native, func-names
Array.prototype.meuReduce = function (fn, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1;
  let acc = valorInicial || this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio1: Todos os alunos são bolsistas?
const todosBolsistas = alunos
  .map((a) => a.bolsista)
  .meuReduce((acc, el) => acc && el);

console.log(`Todos os alunos são bolsistas: ${todosBolsistas}`);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos
  .map((a) => a.bolsista)
  .meuReduce((acc, el) => acc || el);

console.log(`Algum aluno é bolsista: ${algumBolsista}`);

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3];
console.log(nums.meuReduce(soma));
console.log(nums.meuReduce(soma, 10));
