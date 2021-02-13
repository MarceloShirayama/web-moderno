// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

// eslint-disable-next-line no-unused-vars
const x = 'Global';

function fora() {
  // eslint-disable-next-line no-shadow
  const x = 'Local';
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
