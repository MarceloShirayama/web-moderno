function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject(new Error('Ocorreu um erro!'));
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao('Testando...', 0.5)
  // .then((valor) => console.log(`Valor: ${valor}`))
  .then((valor) => `Valor: ${valor}`)

  // .then(console.log)
  .then(
    // eslint-disable-next-line no-undef
    (valor) => consol.log(valor),
    (err) => console.log(`Erro especifico: ${err}`),
  ) // ReferenceError: consol is not defined

  // .catch((err) => console.log(`Erro: ${err}`));
  .catch((err) => console.log(`${err}`))
  .then(() => console.log('Fim!'));

function funcionarOuNao2(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      // eslint-disable-next-line no-unused-expressions,  no-undef
      erroSimulado;
      if (Math.random() < chanceErro) {
        reject(new Error('an error occurred!'));
      } else {
        resolve(valor);
      }
    } catch (error) {
      reject(error);
    }
  });
}

funcionarOuNao2('Testing...', 0.5)
  .then((valor) => `Valor: ${valor}`)
  .then(
    (valor) => console.log(valor),
    (err) => console.log(`specific error: ${err}`),
  )
  .catch((err) => console.log(`general error: ${err}`))
  .then(() => console.log('Fim!'));
