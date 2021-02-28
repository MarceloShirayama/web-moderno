const fs = require('fs');

const caminho = `${__dirname}/dados.txt`;

console.log(caminho);

function lerArquivo(path) {
  fs.readFile(path, 'utf-8', (err, conteudo) => {
    if (err) {
      return console.log('Arquivo inexistente');
    }
    return [
      console.log('início sem promise\n'),
      console.log(`sem promise\n${conteudo}`),
      console.log('fim sem promise\n'),
    ];
  });
}

console.log('Início\n');
lerArquivo(caminho);
console.log('Fim\n');

function LerArquivoComPromise(path) {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf-8', (_, conteudo) => {
      resolve(conteudo);
    });
  });
}

LerArquivoComPromise(caminho)
  .then((arquivo) => console.log(arquivo));

LerArquivoComPromise(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas[2])
  .then((linha3) => console.log(`Linha 3: ${linha3}`));

LerArquivoComPromise(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas.join(','))
  .then(console.log);
