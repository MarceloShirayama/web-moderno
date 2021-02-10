/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica
que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r
(a razão) e escreva os n termos , bem como a soma dos elementos.
*/

// PA:
//    an = a1 + (n - 1) * r
//    Sn = (a1 + an) * n / 2
// PG:
//    an = a1 * r ** (n - 1)
//    Sn = a1 * (r ** n - 1) / (r - 1)
// onde:
//    an = enésimo termo
//    a1 = primeiro termo
//    n = número de termos
//    r = razão

function progressaoAritmetica(n, a1, r) {
  for (let i = 0; i < n; i++) {
    console.log(a1 + r * i);
  }
  return `Soma = ${((a1 + a1 + (n - 1) * r) * n) / 2}`;
}

console.log(progressaoAritmetica(10, 10, 15));

function progressaoGeometrica(n, a1, r) {
  for (let i = 0; i < n; i++) {
    console.log(a1 * (r ** i));
  }
  return `Soma = ${(a1 * (r ** n - 1)) / (r - 1)}`;
}

console.log(progressaoGeometrica(10, 5, 3));
