// models/Author.js

const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
    const fullName = [firstName, middleName, lastName]
      .filter(Boolean)
      .join(' ');
  
    return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
    };
  };

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
  return authors.map(serialize).map(getNewAuthor);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/

const findById = async (id) => {
	// Repare que substituímos o id por `?` na query.
	// Depois, ao executá-la, informamos um array com o id para o método `execute`.
	// O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
	const [ authorData ] = await connection.execute(query, [id]);

	if (authorData.length === 0) return null;

	// Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
	const { firstName, middleName, lastName } = authorData.map(serialize)[0];

	return getNewAuthor({
		id,
		firstName,
		middleName,
		lastName,
	});
};

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = {
	getAll,
  findById,
  create,
  isValid,
};