const anonimo = process.argv.indexOf('-a') !== -1;

console.log(anonimo);

/* no shell digitando:
node entradaESaidaPadrao.js -a // retorna true
node entradaESaidaPadrao.js -b // retorna false
node entradaESaidaPadrao.js // retorna false
*/

console.log('=======================');

let nome = 'Anônimo';

if (anonimo) {
  process.stdout.write(`Fala ${nome}!\n`);
  process.exit();
} else {
  process.stdout.write('Informe seu nome: ');
  process.stdin.on('data', (data) => {
    nome = data.toString().replace('\n', '');

    process.stdout.write(`Fala ${nome}!\n`);
    process.exit();
  });
}
