/*
38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir
todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0
para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função
receba o valor maior antes do menor.
*/

function imprimirImpares(inicio = 0, fim = 100) {
  let valorInicial = inicio;
  let valorFinal = fim;
  if (inicio > fim) {
    valorInicial = fim;
    valorFinal = inicio;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = valorInicial; i <= valorFinal; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

imprimirImpares(3, 20);
