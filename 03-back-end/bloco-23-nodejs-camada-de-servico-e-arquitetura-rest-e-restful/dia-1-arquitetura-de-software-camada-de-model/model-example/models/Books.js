const connection = require('./connection'); 

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;',
    [authorId],
  );
  return books.map(serialize);
};

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  );
  return books.map(serialize);
};

const findById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id = ?;',
    [id],
  );
  if (bookData.length === 0) return null;
  const { id, title, authorId } = bookData.map(serialize)[0];
  return { id, title, authorId };
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
  isValid,
};