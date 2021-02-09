/*
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function numerospares(inicial, final) {
  // eslint-disable-next-line no-plusplus
  for (let i = inicial; i <= final; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

numerospares(1, 100);
