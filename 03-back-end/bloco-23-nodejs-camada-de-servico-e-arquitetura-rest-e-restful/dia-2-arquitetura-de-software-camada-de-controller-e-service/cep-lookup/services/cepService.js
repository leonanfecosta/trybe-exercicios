const cepModel = require('../models/cepModel');
const validateBody = require('../middlewares/validateBody');

const getCep = async (cep) => {
  const result = await cepModel.getCep(cep);
  return result;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  validateBody({ cep, logradouro, bairro, localidade, uf });
  const isCepExists = await cepModel.isCepExists(cep);
  if (isCepExists) {
    return false;
  };
  const result = await cepModel.create({ cep, logradouro, bairro, localidade, uf });
  return result;
};

module.exports = { getCep, create };
