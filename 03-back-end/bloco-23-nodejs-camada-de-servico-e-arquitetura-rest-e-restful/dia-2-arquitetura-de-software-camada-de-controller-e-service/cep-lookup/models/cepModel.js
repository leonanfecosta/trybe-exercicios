const connection = require('./connection');


const isCepExists = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [[result]] = await connection.query(query, [cep]);
  return result;
}

const getCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [result] = await connection.query(query, [cep]);
  return result[0];
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query =
    'INSERT INTO ceps (cep, logradouro,bairro, localidade, uf) VALUES (?,?,?,?,?)';
  const [result] = await connection.execute(query, [
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  ]);
  return result;
};

module.exports = { getCep, create, isCepExists };
