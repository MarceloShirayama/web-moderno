/*
Construa uma função para um sistema de notas de uma instituição que possui a
seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100.
Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra
de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for
menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for
abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na
reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a
nota 29 não será arredondada por ser abaixo de 40 e não ser possível
arredondamento eficiente, ou seja, que evite a reprovação do aluno.
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o
aluno será aprovado.
*/

/* notas: 0 a 100
nota < 40 => reprovado
arredonadamento: nota >= 38 arredondar para próximo múltiplo de 5,
nota < 38 não arredondar.
*/

// 1 exemplo:
// const classificao = (nota) => {
//   if (nota >= 38) {
//     if (nota % 5 !== 0 && nota % 5 >= 3) {
//       // eslint-disable-next-line no-param-reassign
//       nota = (Math.trunc(nota / 5) + 1) * 5;
//     }
//   }
//   if (nota >= 40) {
//     return `Aluno aprovado com nota ${nota}`;
//   }
//   return `Aluno reprovado com nota ${nota}`;
// };

// console.log(classificao(37));
// console.log(classificao(38));
// console.log(classificao(40));

// 2 exemplo:
// eslint-disable-next-line arrow-parens
const arredondar = nota => {
  if (nota >= 38 && nota % 5 >= 3) {
    return nota + 5 - (nota % 5);
  }
  return nota;
};

const classificao = (nota) => {
  arredondar(nota);
  if (nota >= 40) {
    return `Aluno aprovado com nota ${nota}`;
  }
  return `Aluno reprovado com nota ${nota}`;
};

console.log(classificao(30));
console.log(classificao(33));
console.log(classificao(37));
console.log(classificao(37.5));
console.log(classificao(38));
console.log(classificao(40));
console.log(classificao(42));
