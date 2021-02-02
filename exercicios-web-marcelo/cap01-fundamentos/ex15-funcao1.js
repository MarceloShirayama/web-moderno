// Função
// Definição: é um bloco de código delimitado que pode ser reutilizado em outro lugar.
// Pode ou não receber parâmetros de entrada e pode ou não retornar alguma coisa.

// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(10, 4);// soma os números.
imprimirSoma('Boa ', 'tarde');// concatena as strings.
imprimirSoma(2);// retorna NaN. pois os egundo valor é undefined.
imprimirSoma(2, 3, 4, 5, 6);// soma apenas os parâmetros que foram passados para a função.

// Função com retorno
function soma(a, b = 1) {
  return a + b;
}
console.log(soma(6, 3));
console.log(soma(6));
console.log(soma());// = NaN, pois o 1º parâmetro não foi tratado.
