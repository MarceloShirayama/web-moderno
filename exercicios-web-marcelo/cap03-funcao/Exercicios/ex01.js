/*
Crie uma função que dado dois valores (passados como parâmetros)
mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function operacoesAritmeticas(x, y) {
  const soma = x + y;
  const sub = x - y;
  const mult = x * y;
  const div = x / y;
  return [
    console.log(`Soma de ${x} e ${y} é igual a: ${soma}`),
    console.log(`Subtração de ${x} e ${y} é igual a: ${sub}`),
    console.log(`Multiplicação de ${x} e ${y} é igual a: ${mult}`),
    console.log(`Divisão de ${x} e ${y} é igual a: ${div}`),
  ];
}

operacoesAritmeticas(10, 5);
