import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, resp) => {
  console.log(req.body);
  resp.send('<h1>Parabéns usuário incluido!</h1>');
});

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id);
  console.log(req.body);
  resp.send('<h1>Parabéns usuário alterado!</h1>');
});

app.listen(3003);
