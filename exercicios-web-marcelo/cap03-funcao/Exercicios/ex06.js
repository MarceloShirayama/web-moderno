/*
Elabore duas funções que recebem três parâmetros:
capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime
de juros simples e a segunda retornará o valor da aplicação sob o regime de
juros compostos.
*/

const calculoJurosSimples = (pv, i, n) => pv * (((i / 100) * n) + 1);

const calculoJurosComposto = (pv, i, n) => pv * (1 + i / 100) ** n;

const montanteJurosSimples = `R$ ${calculoJurosSimples(100, 3, 12)
  .toFixed(2)
  .replace('.', ',')}`;
const montanteJurosComposto = `R$ ${calculoJurosComposto(100, 3, 12)
  .toFixed(2)
  .replace('.', ',')}`;

console.log(montanteJurosSimples);
console.log(montanteJurosComposto);
