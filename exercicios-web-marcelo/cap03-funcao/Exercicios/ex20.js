/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o
mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de
R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas.
Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação
(note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10.
1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function troco(valorInicial) {
  let valorResidual = valorInicial;
  let resultado = '';
  if ((Math.trunc(valorInicial / 100)) > 0) {
    const valor100 = Math.trunc(valorInicial / 100);
    resultado += `${valor100} nota(s) de R$100,00.`;
    valorResidual = valorInicial - valor100 * 100;
  }
  if ((Math.trunc(valorResidual / 50)) > 0) {
    const valor50 = Math.trunc(valorResidual / 50);
    resultado += ` ${valor50} nota(s) de R$50,00.`;
    valorResidual -= valor50 * 50;
  }
  if ((Math.trunc(valorResidual / 10)) > 0) {
    const valor10 = Math.trunc(valorResidual / 10);
    resultado += ` ${valor10} nota(s) de R$10,00.`;
    valorResidual -= valor10 * 10;
  }
  if (valorResidual > 0) {
    resultado += ` ${valorResidual} nota(s) de R$1,00.`;
  }
  return console.log(resultado);
}
troco(8);
console.log('==================');
troco(37);
console.log('==================');
troco(85);
console.log('==================');
troco(192);
console.log('==================');
troco(1368);
