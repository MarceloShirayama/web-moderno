function esperandoPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// usando promise:
console.time('time promise');
esperandoPor()
  .then(() => console.log('Executando a promise 1...'))
  .then(esperandoPor)
  .then(() => console.log('Executando a promise 2...'))
  .then(esperandoPor)
  .then(() => console.log('Executando a promise 3...'))
  .then(() => console.timeEnd('time promise'))
  .then(() => console.log('====================='));

const run = async () => {
  await esperandoPor(7000);
  console.log('Executando promise com async/await 1...');
  await esperandoPor();
  console.log('Executando promise com async/await 2...');
  await esperandoPor(1500);
  console.log('Executando promise com async/await 3...');
  console.timeEnd('time async/await');
  console.log('===================');
};

console.time('time async/await');
run();

const sum = (a, b) => {
  const result = new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 11000);
  });
  return result;
};

async function catchResult(x, y) {
  const result = await sum(x, y);
  console.log(`Primeiro valor ${x}`);
  console.log(`Segundo valor ${y}`);
  return `A soma de ${x} e ${y} é igual a ${result}`;
}

catchResult(5, 10); // não retorna o result

catchResult(17, 18).then(console.log);

async function retornaSemThen(x, y) {
  const retorno = await catchResult(x, y);
  console.log(retorno);
}
retornaSemThen(20, 10);
