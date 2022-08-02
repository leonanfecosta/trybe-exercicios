const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const nameValidation = require('./middlewares/namevalidation');
const {
  infosValidation,
  saleDateValidation,
} = require('./middlewares/infosValidation');
const warrantyPeriod = require('./middlewares/warrantyPeriod');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(bodyParser.json());

app.post(
  '/sales',
  nameValidation,
  infosValidation,
  saleDateValidation,
  authMiddleware,
  warrantyPeriod,
  (req, res) => {
    return res.status(201).json({
      message: 'Sales created',
    });
  }
);

app.post('singnup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }

    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
