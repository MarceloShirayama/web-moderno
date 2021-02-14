const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce((acc, atual) => {
    console.log(`acc: ${acc}, atual: ${atual}`);
    return acc + atual;
  });

console.log(resultado);

const resultadoInicial10 = alunos
  .map((a) => a.nota)
  .reduce((acc, atual) => {
    console.log(`acc: ${acc}, atual: ${atual}`);
    return acc + atual;
  }, 10);

console.log(resultadoInicial10);
