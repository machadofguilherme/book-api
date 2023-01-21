const { Sequelize, DataTypes } = require("sequelize");

const bookSchema = (Sequelize, DataTypes) => {
  const books = Sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return books;
}

module.exports = bookSchema;