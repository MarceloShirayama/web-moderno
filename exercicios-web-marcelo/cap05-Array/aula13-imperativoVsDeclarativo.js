const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 },
  { nome: 'Perdo', nota: 5.0 },
];

// Imperativo
let total = 0;
for (let i = 0; i < alunos.length; i++) {
  total += alunos[i].nota;
}
console.log(`Média de notas dos alunos: ${total / alunos.length}`);

// Declarativo
const getNota = (aluno) => aluno.nota;
const soma = (totalAcum, atual) => totalAcum + atual;
const media = alunos
  .map(getNota)
  .reduce(soma)
  / alunos.length;
console.log(`Média de notas dos alunos: ${media}`);
