// setTimeout(() => {
//   console.log('Executando a função...');

//   setTimeout(() => {
//     console.log('Executando a função...');

//     setTimeout(() => {
//       console.log('Executando a função...');
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperandoPor(tempo = 2000) {
  return new Promise((resolve) => {
    const seconds = new Date().getTime() / 1000;
    setTimeout(() => {
      console.log(`
        Executando a promise... 
        tempo de espera: ${tempo} 
        segundos passados: ${seconds}`);
      resolve();
    }, tempo);
  });
}

esperandoPor()
  .then(esperandoPor)
  .then(esperandoPor);

esperandoPor(8000)
  .then(() => esperandoPor(1000))
  .then(() => esperandoPor());
