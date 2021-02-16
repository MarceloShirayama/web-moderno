const moduloA = require('../../moduloA'); // caminho relativo, evite caminho absoluto.

console.log(moduloA);
console.log(moduloA.ola);

console.log('===========================');

// const c = require('../pastaC/index'); // não é necessário apontar para index
const c = require('../pastaC');

console.log(c.ola2);

console.log('===========================');

// import modules core (já vem instaldo junto com o node).
// eslint-disable-next-line import/order
const http = require('http');

const nome = 'Leonardo';
http.createServer((req, res) => {
  res.write(`Bom dia, ${nome}!`);
  res.end();
}).listen(8080);

console.log(`
  Executando no browser na porta 8080
  PARE a execução com Crtl + Alt + M
`);
