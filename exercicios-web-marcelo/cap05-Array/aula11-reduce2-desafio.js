const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio1: Todos os alunos são bolsistas?
const todosBolsistas = alunos
  .map((a) => a.bolsista)
  .reduce((acc, el) => acc && el);

console.log(`Todos os alunos são bolsistas: ${todosBolsistas}`);

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos
  .map((a) => a.bolsista)
  .reduce((acc, el) => acc || el);

console.log(`Algum aluno é bolsista: ${algumBolsista}`);
