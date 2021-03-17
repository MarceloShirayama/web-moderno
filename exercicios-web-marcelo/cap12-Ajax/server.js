import bodyParser from 'body-parser';
import express from 'express';
import multer from 'multer';

const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './upload');
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
  // eslint-disable-next-line consistent-return
  upload(req, res, (err) => {
    if (err) {
      return res.end('Ocorreu um erro.');
    }
    res.end('Concluído com sucesso.');
  });
});

app.listen(8080, () => console.log('run in localhost:8080'));
