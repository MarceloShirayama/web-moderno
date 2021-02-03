/* eslint-disable arrow-parens */
const resultado = nota => (nota >= 7 ? 'Aprovado' : 'Reprovado');

const alunosNotas = {
  Marcelo: 8,
  Julia: 10,
  Nina: 5,
};

console.log(resultado(alunosNotas.Marcelo));
console.log(resultado(alunosNotas.Julia));
console.log(resultado(alunosNotas.Nina));
