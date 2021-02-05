const valor = 'Global';

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  // eslint-disable-next-line no-shadow, no-unused-vars
  const valor = 'local';
  minhaFuncao();
}

exec();
