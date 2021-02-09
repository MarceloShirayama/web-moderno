const valor = 'Global';

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  // eslint-disable-next-line no-shadow, no-unused-vars
  const valor = 'local';
  console.log(valor);
}

function execComMinhaFuncaoDentro() {
  // eslint-disable-next-line no-shadow, no-unused-vars
  const valor = 'local';
  minhaFuncao();
}

minhaFuncao();

exec();

execComMinhaFuncaoDentro();
