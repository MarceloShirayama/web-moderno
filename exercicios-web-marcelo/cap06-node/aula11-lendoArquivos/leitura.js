const fs = require('fs');

const caminho = `${__dirname}/arquivo.json`;

console.log('leitura em modo sincrono:');
console.log();

const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

console.log('ou');

const config = require('./arquivo.json');

console.log(config);

console.log('==================================');

console.log('leitura em modo assincrono:');
console.log();

console.log('inicio readFile');
fs.readFile(caminho, 'utf-8', (err, conteudo2) => {
  const config2 = JSON.parse(conteudo2);
  console.log('********************************');
  console.log(`${config2.db.host}:${config2.db.port}`);
});
console.log('fim readFile');

console.log('-------------------------------');

console.log('inicio readdir __dirname');
fs.readdir(__dirname, (err, arquivos) => {
  console.log('********************************');
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
});
console.log('fim readdir __dirname');

console.log('-------------------------------');

console.log('inicio readdir ./');
fs.readdir('./', (err, arquivos) => {
  console.log('********************************');
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
});
console.log('fim readdir ./');
