/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a
idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a
seguinte tabela:
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e
4) conveniados acima de 60 anos pagam R$130
*/

function vencimentoPlanoSaude(idade) {
  if (idade > 60) {
    return 'O valor da parcela é R$130,00.';
  } if (idade > 30) {
    return 'O valor da parcela é R$95,00.';
  } if (idade > 10) {
    return 'O valor da parcela é R$50,00.';
  }
  return 'O valor da parcela é R$80,00.';
}

console.log(vencimentoPlanoSaude(10));
console.log(vencimentoPlanoSaude(15));
console.log(vencimentoPlanoSaude(32));
console.log(vencimentoPlanoSaude(62));