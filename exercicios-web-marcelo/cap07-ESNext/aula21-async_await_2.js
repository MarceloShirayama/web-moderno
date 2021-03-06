function gerarNumerosEntre(max, min, numerosProibidos) {
  // eslint-disable-next-line no-param-reassign
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt((Math.random() * fator) + min, 10);
    if (numerosProibidos.includes(aleatorio)) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Número repetido!');
    } else {
      resolve(aleatorio);
    }
  });
}

gerarNumerosEntre(1, 5, [1, 2, 4])
  .then(console.log)
  .catch(console.log);

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    // eslint-disable-next-line no-restricted-syntax,  no-unused-vars
    for (const _ of Array(qtdeNumeros).fill()) {
      // eslint-disable-next-line no-await-in-loop
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch {
    if (tentativas > 2) {
      const e = new Error('Que chato!');
      throw e;
    } else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(10)
  .then(console.log)
  .catch(console.log);

/* obs.: Este algorítmo não é a melhor forma de gerar os números da megasena, este código
foi usado apenas para demonstrar o exemplo de exceção que lança um erro */
