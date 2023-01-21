const { books } = require('../models');

const findAll = async () => {
  const result = await books.findAll();
  return result;
}

const findById = async (id) => {
  const result = await books.findByPk(id);
  if (result === null) {
    const response = {
      code: 404,
      message: 'Book not found',
    };

    return response;
  }

  return result;
}

const create = async ({ title, author, pageQuantity }) => {
  const result = await books.create({ title, author, pageQuantity });
  return result;
}

const update = async ({
  title,
  author,
  pageQuantity,
},
{
  where: {
    id
  }
  }) => {
  const result = await books.update({
    title,
    author,
    pageQuantity,
  },
    {
      where: {
        id
      }
    });

  if (result.includes(1)) {
    return { message: 'Book updated!' };
  }
  
  return result;
}

const remove = async (id) => {
  const result = await books.destroy({ where: { id } });
  if (result === 0) return { code: 500, message: 'Algo deu errado' };
  return result;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
}