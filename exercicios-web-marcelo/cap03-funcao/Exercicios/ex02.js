/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
- Equilátero: Os três lados são iguais.
- Isósceles: Dois lados iguais.
- Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo
e retorne sua classificação quanto ao tamanho de seus lados.
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

// adicionei a verificação se é um triângulo.

function tipoTriangulo(l1, l2, l3) {
  const triangulo = (l1 + l2 > l3) && (l1 + l3 > l2) && (l2 + l3 > l1);
  if (triangulo) {
    if (l1 === l2 && l2 === l3) {
      return 'Triângulo Equilátero';
    } if (l1 === l2 || l2 === l3 || l1 === l3) {
      return 'Triângulo Isósceles';
    }
    return 'Triângulo Escaleno';
  }
  return 'Não é um triângulo';
}

console.log(tipoTriangulo(10, 10, 10));
console.log(tipoTriangulo(10, 10, 15));
console.log(tipoTriangulo(15, 10, 10));
console.log(tipoTriangulo(10, 15, 10));
console.log(tipoTriangulo(10, 12, 15));
console.log(tipoTriangulo(10, 20, 30));
