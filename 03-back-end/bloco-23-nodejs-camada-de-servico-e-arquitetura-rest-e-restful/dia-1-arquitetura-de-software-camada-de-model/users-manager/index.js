const express = require('express');
require('express-async-errors');
const app = express();
const validateBody = require('./helpers/validateBody');
const validateId = require('./helpers/validateId');
const userModel = require('./models/userModel');

app.use(express.json());

app.post('/users', async (req, res) => {
  const user = validateBody(req.body);
  const result = await userModel.create(user);
  res.status(201).json(result);
});

app.get('/users', async (req, res) => {
  const users = await userModel.findAll();
  res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = validateId(req.params);
  await userModel.checkIfUserExists(id);
  const user = await userModel.findById(id);
  res.status(200).json(user);
});

app.put('/users/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = validateBody(req.body);
  await userModel.checkIfUserExists(id);
  await userModel.update(id, user);
  res.status(200).json({id, ...user});
});

app.delete('/users/:id', async (req, res) => {
  const { id } = validateId(req.params);
  await userModel.checkIfUserExists(id);
  await userModel.delete(id);
  res.status(204).json({message: 'User deleted'});
})

app.use((err, _req, res, next) => {
  res.status(400).json({ message: err.message });
});

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });