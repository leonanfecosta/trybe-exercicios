const cepService = require('../services/cepService');

const getCep = async (req, res) => {
  const { cep } = req.params;
  const result = await cepService.getCep(cep);
  if (!result) {
    return res
      .status(404)
      .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  }
  res.status(200).json(result);
};
const create = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const result = await cepService.create({ cep, logradouro, bairro, localidade, uf });
  if (!result) {
    return res.status(409).json({
      error: { code: 'alreadyExists', message: 'CEP já existente' },
    });
  }
  res.status(201).json({ cep, logradouro, bairro, localidade, uf });
};

module.exports = { getCep, create };
