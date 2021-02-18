/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse
triângulo. A precisão deverá ser de duas casas decimais, arredondando se necessário.

📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2

Exemplos:
areaDoTriangulo(10, 15) // retornará "75,00"
areaDoTriangulo(7, 9) // retornará "31,50"
areaDoTriangulo(9.25, 13.1) // retornará "60.59"
*/

console.log('Resolução 1:');

function areaDoTriangulo1(base, altura) {
  return ((base * altura) / 2).toFixed(2);
}

console.log(areaDoTriangulo1(10, 15));
console.log(areaDoTriangulo1(7, 9));
console.log(areaDoTriangulo1(9.25, 13.1));

console.log('=======================');

console.log('Resolução :');

const areaDoTriangulo2 = (base, altura) => ((base * altura) / 2).toFixed(2);

console.log(areaDoTriangulo2(10, 15));
console.log(areaDoTriangulo2(7, 9));
console.log(areaDoTriangulo2(9.25, 13.1));
