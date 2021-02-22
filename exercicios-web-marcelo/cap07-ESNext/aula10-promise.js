function falarDepoisDe(segundos, frase) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

console.log('Início');

falarDepoisDe(3, 'Que legal')
  .then((texto) => texto.concat('!!!'))
  .then((outroTexto) => console.log(outroTexto));

console.log('Fim');
