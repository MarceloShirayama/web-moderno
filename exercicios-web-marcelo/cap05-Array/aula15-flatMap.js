const escola = [
  {
    nome: 'Turma 1',
    alunos: [
      { nome: 'Gustavo', nota: 8.1 },
      { nome: 'Ana', nota: 9.3 },
    ],
  },
  {
    nome: 'Turma 2',
    alunos: [
      { nome: 'Rebeca', nota: 8.9 },
      { nome: 'Roberto', nota: 7.3 },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

const notas2 = [];
console.log(notas2.concat(notas1[0], notas1[1]));

// eslint-disable-next-line no-extend-native, func-names
Array.prototype.flatMap = function (fn) {
  return Array.prototype.concat.apply([], this.map(fn));
};
const notas3 = escola.flatMap(getNotasDaTurma);
console.log(notas3);
