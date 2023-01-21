const { bookService } = require('../services');

const findAll = async (_req, res) => {
  const result = await bookService.findAll();
  res.status(200).json(result);
}

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await bookService.findById(id);
  if (result.code) return res.status(result.code).json({ message: result.message });

  res.status(200).json(result);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const result = await bookService.create({
    title,
    author,
    pageQuantity,
  });

  res.status(201).json(result);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const result = await bookService.update({
    title,
    author,
    pageQuantity,
  },
  {
    where: {
      id
    }
    });

  if (result.message) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await bookService.remove(id);
  if (result.code) return res.status(result.code).json({ message: result.message });
  
  res.status(200).json(result);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
}