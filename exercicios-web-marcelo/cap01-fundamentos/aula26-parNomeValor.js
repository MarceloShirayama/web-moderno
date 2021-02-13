/* eslint-disable no-shadow */
const saudacao = 'Opa'; // contexto lexico 1

function exec() {
  const saudacao = 'Falaaa'; // contexto léxico 2
  return saudacao;
}

console.log(saudacao);
console.log(exec());
