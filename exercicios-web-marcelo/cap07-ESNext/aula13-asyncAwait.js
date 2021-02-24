const http = require('http');

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = '';

      res.on('data', (dados) => {
        resultado += dados;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de simplificar o uso de prmoise...
const obterAluno = async () => {
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');
  return [].concat(turmaA, turmaB, turmaC);
}; // Retorna um objeto AsyncFunction

obterAluno()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes));
