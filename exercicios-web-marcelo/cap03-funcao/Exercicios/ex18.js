/*
19) O cardápio de uma lanchonete é o seguinte:

Código        Descrição do Produto        Preço
100           Cachorro Quente             R$ 3,00
200           Hambúrguer Simples          R$ 4,00
300           Cheeseburguer               R$ 5,50
400           Bauru                       R$ 7,50
500           Refrigerante                R$ 3,50
600           Suco                        R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e
calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será
calculado um item. Use o comando switch. Crie um caso default para produto não existente.
*/

// eslint-disable-next-line func-names
const totalAPagar = function (codigo, qtde) {
  switch (codigo) {
    case 100:
      return `Total a pagar: R$ ${(qtde * 3).toFixed(2).toString().replace('.', ',')}`;
    case 200:
      return `Total a pagar: R$ ${(qtde * 4).toFixed(2).toString().replace('.', ',')}`;
    case 300:
      return `Total a pagar: R$ ${(qtde * 5.5).toFixed(2).toString().replace('.', ',')}`;
    case 400:
      return `Total a pagar: R$ ${(qtde * 7.5).toFixed(2).toString().replace('.', ',')}`;
    case 500:
      return `Total a pagar: R$ ${(qtde * 3.5).toFixed(2).toString().replace('.', ',')}`;
    case 600:
      return `Total a pagar: R$ ${(qtde * 2.8).toFixed(2).toString().replace('.', ',')}`;
    default:
      return `Produto código ${codigo} não cadastrado.`;
  }
};

console.log(totalAPagar(100, 2));
console.log(totalAPagar(200, 2));
console.log(totalAPagar(300, 2));
console.log(totalAPagar(400, 2));
console.log(totalAPagar(500, 2));
console.log(totalAPagar(600, 2));
console.log(totalAPagar(700, 2));
