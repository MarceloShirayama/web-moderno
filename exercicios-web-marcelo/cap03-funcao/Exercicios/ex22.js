/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação.
A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro,
2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de
janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos).
O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calculoVencimento(capital, tempo) {
  if (tempo > 0 && tempo < 13) {
    const montante = capital * (1 + 0.05) ** (tempo - 1);
    return `Mês ${tempo} valor: R$ ${montante.toFixed(2).toString().replace('.', ',')}`;
  }
  return `Mês ${tempo} é inválido!`;
}

console.log(calculoVencimento(100, 1));
console.log(calculoVencimento(100, 2));
console.log(calculoVencimento(100, 3));
console.log(calculoVencimento(100, 4));
console.log(calculoVencimento(100, 5));
console.log(calculoVencimento(100, 6));
console.log(calculoVencimento(100, 7));
console.log(calculoVencimento(100, 8));
console.log(calculoVencimento(100, 9));
console.log(calculoVencimento(100, 10));
console.log(calculoVencimento(100, 11));
console.log(calculoVencimento(100, 12));
console.log(calculoVencimento(100, 13));
