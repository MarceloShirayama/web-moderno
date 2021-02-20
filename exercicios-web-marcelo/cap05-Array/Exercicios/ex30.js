/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada
estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da
nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno
que teve o melhor desempenho nas notas.

Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
*/

const students = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};

const sum = (array) => array.reduce((acc, el) => acc + el);
const avg = (array) => sum(array) / array.length;
const sortListDescrecentByMedia = (a, b) => b.media - a.media;

function theBestStudent(obj) {
  const studentsAverage = Object.entries(obj)
    .map((student) => {
      const key = 0;
      const value = 1;
      return { nome: student[key], media: avg(student[value]) };
    });
  const sortStudents = studentsAverage.sort(sortListDescrecentByMedia);
  const best = sortStudents[0];
  return best;
}

console.log(theBestStudent(students));
