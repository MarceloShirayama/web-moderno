const porta = 3303;

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

// app.get('/produtos', (req, res, next) => {
//   console.log('Middleware 1...');
//   next(); // executa e vai para a próxima função
// });

// eslint-disable-next-line no-unused-vars
// app.post('/produtos', (req, res, next) => {
//   res.send({ nome: 'Notebook', preco: 12.45 }); // Coverte para JSON
// });

// eslint-disable-next-line no-unused-vars
// app.use((req, res, next) => { // retorna em qualquer endpoint. Ex: http://localhost:3303/qualquer
//   res.send({ nome: 'Notebook', preco: 12.45 }); // Converte para JSON
// });

// eslint-disable-next-line no-unused-vars
// app.get('/produtos', (req, res, next) => {
//   res.send({ nome: 'Notebook', preco: 12.45 }); // Converte para JSON
// });

// eslint-disable-next-line no-unused-vars

app.use(bodyParser.urlencoded({ extended: true }));

// eslint-disable-next-line no-unused-vars
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); // Converte para JSON
});

// eslint-disable-next-line no-unused-vars
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

// eslint-disable-next-line no-unused-vars
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

// eslint-disable-next-line no-unused-vars
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

// eslint-disable-next-line no-unused-vars
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto); // JSON
});

app.listen(porta, () => {
  console.log(`Servidor escutando na porta ${porta}.`);
});
