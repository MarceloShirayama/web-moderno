function gerarNumerosEntre(max, min, tempo) {
  if (min > max) {
    // eslint-disable-next-line no-param-reassign
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator + min, 10);
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 1500),
  ]);
}

console.time('tempo de espera');
gerarVariosNumeros()
  // .then((numeros) => console.log(numeros))
  .then(console.log)
  .then(() => {
    console.timeEnd('tempo de espera');
  });
