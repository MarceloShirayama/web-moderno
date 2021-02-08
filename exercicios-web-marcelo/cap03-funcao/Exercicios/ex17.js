/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de
acordo com a tabela abaixo:
Plano   Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e
calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que
indique que o plano é inválido.
*/

// eslint-disable-next-line func-names
const reajustaSalarial = function (planoTrabalho, salarioAtual) {
  switch (planoTrabalho) {
    case 'A':
      console.log(`Novo salário = R$ ${(salarioAtual * 1.1).toFixed(2).toString().replace('.', ',')}`);
      break;
    case 'B':
      console.log(`Novo salário = R$ ${(salarioAtual * 1.15).toFixed(2).toString().replace('.', ',')}`);
      break;
    case 'C':
      console.log(`Novo salário = R$ ${(salarioAtual * 1.2).toFixed(2).toString().replace('.', ',')}`);
      break;
    default:
      console.log('Plano inválido');
      break;
  }
};

reajustaSalarial('A', 1000.00);
reajustaSalarial('B', 1000.00);
reajustaSalarial('C', 1000.00);
reajustaSalarial('D', 1000.00);
