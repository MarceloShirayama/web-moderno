/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média
ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas
restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem
"APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5.
Repita a operação até que o código lido seja negativo.
*/

console.log('Exemplo 1:');

function resultado(codAluno, nota1, nota2, nota3) {
  const notas = [nota1, nota2, nota3];
  const maiorNota = Math.max.apply(null, notas);
  const menoresNotas = notas.filter((nota) => nota !== maiorNota);
  const maiorNotaComPeso = maiorNota * 4;
  const menoresNotasComPeso = menoresNotas.map((el) => el * 3);
  const media = (maiorNotaComPeso + menoresNotasComPeso[0] + menoresNotasComPeso[1]) / 10;
  return `
    Código do aluno: ${codAluno}
    notas: ${notas}
    média: ${media}`;
}

console.log(resultado(100, 10, 5, 7));

console.log('====================================');
console.log('Exemplo 2:');

function resultado2(codAluno, nota1, nota2, nota3) {
  const notas = [nota1, nota2, nota3];
  notas.sort((a, b) => (a > b ? -1 : 1));
  const media = (4 * notas[0] + 3 * (notas[1] + notas[2])) / 10;
  return console.log(`
    Código do aluno: ${codAluno}
    Notas: ${notas}
    Média: ${media}`);
}

resultado2(100, 5, 10, 7);
