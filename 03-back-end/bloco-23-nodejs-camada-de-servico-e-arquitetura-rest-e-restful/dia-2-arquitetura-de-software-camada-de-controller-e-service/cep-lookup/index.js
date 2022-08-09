const express = require('express');
const cepControllers = require('./controllers/cepControllers');
const cepValidations = require('./middlewares/cepValidations');
require('express-async-errors');
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', cepValidations.cepFormat, cepControllers.getCep);

app.post('/cep',cepControllers.create);

app.use((err, _req, res, next) => {
  console.log(err);
  res
    .status( 400)
    .json(err.message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
