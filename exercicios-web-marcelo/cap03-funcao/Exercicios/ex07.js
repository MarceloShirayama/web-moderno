/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos
de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula
de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e
“c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam
respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2
valores um para cada possível resultado, mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

formula de baskara:
delta = b ** 2 - 4 * a * c
x = (-b +- Math.sqrt(delta)) / (2*a)
*/

const formulaBaskara = (a, b, c) => {
  const delta = b ** 2 - 4 * a * c;
  console.log(`a= ${a}, b= ${b}, c= ${c}, delta= ${delta}`);
  let resultado = 0;
  if (delta === 0) {
    resultado = -b / (2 * a);
  } else if (delta > 0) {
    resultado = [
      (-b + Math.sqrt(delta)) / (2 * a),
      (-b - Math.sqrt(delta)) / (2 * a),
    ];
  } else {
    resultado = 'Nenhuma raiz real';
  }
  return resultado;
};

console.log('=============================');
// x ** 2 - 4 * x + 5 = 0 -> delta = 0
console.log(formulaBaskara(4, -4, 1));

console.log('=============================');
// x ** 2 - 5 * x + 6 = 0 -> delta > 0
console.log(formulaBaskara(1, -5, 6));

console.log('=============================');
// x ** 2 - 4 * x + 5 = 0 -> delta < 0
console.log(formulaBaskara(1, -4, 5));
console.log('=============================');