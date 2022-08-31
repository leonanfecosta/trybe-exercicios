const BookService = require('../service/BooksService');

const BooksController = {
  getAllBooks: async (req, res) => {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if(!book) {
      res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  },
  createBook: async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook({ title, author, pageQuantity });
    res.status(201).json(newBook);
  },

  updateBook: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.updateBook(id, { title, author, pageQuantity });
    if(!book) {
      res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated' });
  },

  deleteBook: async (req, res) => {
    const { id } = req.params;
    const book = await BookService.deleteBook(id);
    if(!book) {
      res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted' });
  },
};

module.exports = BooksController;