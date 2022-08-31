const { Book } = require('../models');

const BookService = {
  getAllBooks: async () => {
    const books = await Book.findAll();
    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },
  createBook: async ({ title, author, pageQuantity }) => {
    const newBook = await Book.create({ title, author, pageQuantity });
    return newBook;
  },

  updateBook: async (id, { title, author, pageQuantity }) => {
    const [book] = await Book.update({ title, author, pageQuantity }, { where: { id } });
    return book;
  },

  deleteBook: async (id) => {
    const book = await Book.destroy({ where: { id } });
    return book;
  },
};

module.exports = BookService;
