const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const funcChineses = (funcionario) => funcionario.pais === 'China';
const funcMulher = (funcionario) => funcionario.genero === 'F';
const menorSalario = (func, funcAtual) => (func.salario < funcAtual.salario ? func : funcAtual);

axios.get(url).then((response) => {
  const funcionarios = response.data;

  const funcChinesMulherMaiorSalario = funcionarios
    .filter(funcChineses)
    .filter(funcMulher)
    .reduce(menorSalario);

  console.log(funcChinesMulherMaiorSalario);
});
