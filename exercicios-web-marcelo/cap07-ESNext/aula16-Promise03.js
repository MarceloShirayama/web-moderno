function gerarNumerosEntre(max, min) {
  if (min > max) {
    // eslint-disable-next-line no-param-reassign
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator + min, 10);
    resolve(aleatorio);
  });
}

gerarNumerosEntre(1, 10)
  .then((num) => num * 10)
  .then((numX10) => `O número gerado foi ${numX10}`)
  .then(console.log);
